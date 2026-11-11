-- PROPOSAL ONLY. Submit through the Supabase migration tool AFTER explicit approval.
-- New, namespaced objects only. Deliberately fails on collisions; no DROP/REPLACE/seed.
BEGIN;
CREATE ROLE sync_careers_role_reader NOLOGIN NOINHERIT NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
CREATE ROLE sync_careers_public_reader NOLOGIN NOINHERIT NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
CREATE ROLE sync_careers_audit_writer NOLOGIN NOINHERIT NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS;
-- Temporary ownership-transfer membership, removed at the end of this transaction.
GRANT sync_careers_role_reader, sync_careers_public_reader, sync_careers_audit_writer TO CURRENT_USER;
GRANT USAGE, CREATE ON SCHEMA public TO sync_careers_role_reader, sync_careers_public_reader, sync_careers_audit_writer;
GRANT USAGE ON SCHEMA auth TO sync_careers_role_reader;
GRANT EXECUTE ON FUNCTION auth.uid() TO sync_careers_role_reader;

CREATE TABLE public.careers_admin_users (
 user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 role text NOT NULL CHECK(role IN ('admin','editor')), active boolean NOT NULL DEFAULT true,
 created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON public.careers_admin_users FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.careers_admin_users TO authenticated, sync_careers_role_reader;
GRANT ALL ON public.careers_admin_users TO service_role;
ALTER TABLE public.careers_admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers_admin_users FORCE ROW LEVEL SECURITY;
CREATE POLICY careers_own_role ON public.careers_admin_users FOR SELECT TO authenticated, sync_careers_role_reader USING(user_id = auth.uid());
CREATE FUNCTION public.careers_role() RETURNS text LANGUAGE sql STABLE SECURITY DEFINER SET search_path = pg_catalog AS $$
 SELECT r.role FROM public.careers_admin_users AS r WHERE r.user_id = auth.uid() AND r.active
$$;
ALTER FUNCTION public.careers_role() OWNER TO sync_careers_role_reader;
REVOKE ALL ON FUNCTION public.careers_role() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.careers_role() TO authenticated, service_role;

CREATE TABLE public.careers_clients (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL,
 industry text, website text, country text, internal_notes text,
 created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON public.careers_clients FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.careers_clients TO authenticated;
GRANT ALL ON public.careers_clients TO service_role;
ALTER TABLE public.careers_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers_clients FORCE ROW LEVEL SECURITY;
CREATE POLICY careers_clients_read ON public.careers_clients FOR SELECT TO authenticated USING(public.careers_role() IN ('admin','editor'));
CREATE POLICY careers_clients_add ON public.careers_clients FOR INSERT TO authenticated WITH CHECK(public.careers_role()='admin');
CREATE POLICY careers_clients_edit ON public.careers_clients FOR UPDATE TO authenticated USING(public.careers_role()='admin') WITH CHECK(public.careers_role()='admin');

CREATE TABLE public.careers_jobs (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), reference text NOT NULL UNIQUE,
 slug text NOT NULL UNIQUE, title text NOT NULL, client_id uuid REFERENCES public.careers_clients(id),
 function text NOT NULL DEFAULT 'Other', industry text, employment_type text NOT NULL DEFAULT 'Full-time',
 work_model text NOT NULL DEFAULT 'On-site', seniority text, city text, state_region text, country text NOT NULL DEFAULT 'Mexico',
 location_display text NOT NULL DEFAULT '', remote_eligibility text,
 summary text NOT NULL DEFAULT '', about_opportunity text NOT NULL DEFAULT '', mandate text NOT NULL DEFAULT '',
 responsibilities text NOT NULL DEFAULT '', candidate_profile text NOT NULL DEFAULT '', opportunity_offers text NOT NULL DEFAULT '',
 client_visibility text NOT NULL DEFAULT 'confidential' CHECK(client_visibility IN ('named','confidential')),
 public_company_name text, public_company_description text NOT NULL DEFAULT '', public_company_website text, public_company_logo_url text,
 client_publication_approved boolean NOT NULL DEFAULT false,
 salary_min numeric, salary_max numeric, salary_currency text, salary_period text, salary_visibility boolean NOT NULL DEFAULT false, salary_notes text,
 application_url text, application_instructions text,
 status text NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','active','on_hold','closed','archived')),
 published_at timestamptz, expires_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now(),
 created_by uuid, updated_by uuid
);
REVOKE ALL ON public.careers_jobs FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.careers_jobs TO authenticated;
GRANT ALL ON public.careers_jobs TO service_role;
ALTER TABLE public.careers_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers_jobs FORCE ROW LEVEL SECURITY;
CREATE POLICY careers_jobs_read ON public.careers_jobs FOR SELECT TO authenticated USING(public.careers_role() IN ('admin','editor'));
CREATE POLICY careers_jobs_add ON public.careers_jobs FOR INSERT TO authenticated WITH CHECK(public.careers_role() IN ('admin','editor'));
CREATE POLICY careers_jobs_edit ON public.careers_jobs FOR UPDATE TO authenticated USING(public.careers_role()='admin' OR (public.careers_role()='editor' AND status='draft')) WITH CHECK(public.careers_role()='admin' OR (public.careers_role()='editor' AND status='draft'));

CREATE TABLE public.careers_job_events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), job_id uuid NOT NULL REFERENCES public.careers_jobs(id), actor_user_id uuid,
 event_type text NOT NULL, previous_status text, new_status text, created_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON public.careers_job_events FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.careers_job_events TO authenticated;
GRANT INSERT ON public.careers_job_events TO sync_careers_audit_writer;
GRANT ALL ON public.careers_job_events TO service_role;
ALTER TABLE public.careers_job_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers_job_events FORCE ROW LEVEL SECURITY;
CREATE POLICY careers_events_read ON public.careers_job_events FOR SELECT TO authenticated USING(public.careers_role() IN ('admin','editor'));
CREATE POLICY careers_events_append ON public.careers_job_events FOR INSERT TO sync_careers_audit_writer WITH CHECK(true);

-- Public projection contains ONLY approved public data, never a client ID/private record.
-- Anonymous visitors do not have table privileges, even on this projection.
CREATE TABLE public.careers_public_positions (
 slug text PRIMARY KEY, published_at timestamptz NOT NULL, expires_at timestamptz, payload jsonb NOT NULL
);
REVOKE ALL ON public.careers_public_positions FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.careers_public_positions TO sync_careers_public_reader;
GRANT INSERT, UPDATE, DELETE ON public.careers_public_positions TO sync_careers_audit_writer;
GRANT ALL ON public.careers_public_positions TO service_role;
ALTER TABLE public.careers_public_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers_public_positions FORCE ROW LEVEL SECURITY;
CREATE POLICY careers_projection_read ON public.careers_public_positions FOR SELECT TO sync_careers_public_reader USING(expires_at IS NULL OR expires_at>now());
CREATE POLICY careers_projection_insert ON public.careers_public_positions FOR INSERT TO sync_careers_audit_writer WITH CHECK(true);
CREATE POLICY careers_projection_update ON public.careers_public_positions FOR UPDATE TO sync_careers_audit_writer USING(true) WITH CHECK(true);
-- UPDATE/DELETE need an owner-scoped SELECT policy as well, not just write grants.
GRANT SELECT ON public.careers_public_positions TO sync_careers_audit_writer;
CREATE POLICY careers_projection_writer_read ON public.careers_public_positions FOR SELECT TO sync_careers_audit_writer USING(true);
CREATE POLICY careers_projection_delete ON public.careers_public_positions FOR DELETE TO sync_careers_audit_writer USING(true);

CREATE FUNCTION public.careers_public_jobs(job_slug text DEFAULT NULL, page_offset integer DEFAULT 0, page_size integer DEFAULT 100)
RETURNS jsonb LANGUAGE sql STABLE SECURITY DEFINER SET search_path = pg_catalog AS $$
 SELECT coalesce(jsonb_agg(p.payload ORDER BY p.published_at DESC, p.slug), '[]'::jsonb) FROM (
  SELECT v.payload, v.published_at, v.slug FROM public.careers_public_positions AS v
  WHERE (v.expires_at IS NULL OR v.expires_at>now()) AND (job_slug IS NULL OR v.slug=job_slug)
  ORDER BY v.published_at DESC, v.slug LIMIT least(greatest(coalesce(page_size,100),1),100) OFFSET greatest(coalesce(page_offset,0),0)
 ) AS p
$$;
ALTER FUNCTION public.careers_public_jobs(text,integer,integer) OWNER TO sync_careers_public_reader;
REVOKE ALL ON FUNCTION public.careers_public_jobs(text,integer,integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.careers_public_jobs(text,integer,integer) TO anon, authenticated;

-- These helpers are invoker functions; ordinary writes remain subject to RLS.
CREATE FUNCTION public.careers_touch() RETURNS trigger LANGUAGE plpgsql SET search_path = pg_catalog AS $$
BEGIN NEW.updated_at=now(); RETURN NEW; END $$;
REVOKE ALL ON FUNCTION public.careers_touch() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER careers_touch_clients BEFORE UPDATE ON public.careers_clients FOR EACH ROW EXECUTE FUNCTION public.careers_touch();
CREATE TRIGGER careers_touch_roles BEFORE UPDATE ON public.careers_admin_users FOR EACH ROW EXECUTE FUNCTION public.careers_touch();

-- One allowlist serves both publication validation and the stored public representation.
CREATE FUNCTION public.careers_public_payload(j public.careers_jobs) RETURNS jsonb LANGUAGE sql IMMUTABLE SET search_path = pg_catalog AS $$
 SELECT jsonb_build_object(
  'slug',j.slug,'reference',j.reference,'title',j.title,'function',j.function,'industry',j.industry,'employment_type',j.employment_type,'work_model',j.work_model,'seniority',j.seniority,
  'city',j.city,'state_region',j.state_region,'country',j.country,'location_display',j.location_display,'remote_eligibility',j.remote_eligibility,
  'summary',j.summary,'about_opportunity',j.about_opportunity,'mandate',j.mandate,'responsibilities',j.responsibilities,'candidate_profile',j.candidate_profile,'opportunity_offers',j.opportunity_offers,
  'public_company_description',j.public_company_description,
  'public_company_name',CASE WHEN j.client_visibility='named' AND j.client_publication_approved THEN j.public_company_name END,
  'public_company_website',CASE WHEN j.client_visibility='named' AND j.client_publication_approved THEN j.public_company_website END,
  'public_company_logo_url',CASE WHEN j.client_visibility='named' AND j.client_publication_approved THEN j.public_company_logo_url END,
  'salary_min',CASE WHEN j.salary_visibility THEN j.salary_min END,'salary_max',CASE WHEN j.salary_visibility THEN j.salary_max END,'salary_currency',CASE WHEN j.salary_visibility THEN j.salary_currency END,'salary_period',CASE WHEN j.salary_visibility THEN j.salary_period END,'salary_notes',CASE WHEN j.salary_visibility THEN j.salary_notes END,
  'application_url',j.application_url,'application_instructions',j.application_instructions,'published_at',j.published_at,'expires_at',j.expires_at)
$$;
REVOKE ALL ON FUNCTION public.careers_public_payload(public.careers_jobs) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.careers_public_payload(public.careers_jobs) TO authenticated, service_role, sync_careers_audit_writer;

CREATE FUNCTION public.careers_validate_job() RETURNS trigger LANGUAGE plpgsql SET search_path = pg_catalog AS $$
DECLARE
 actor_role text := public.careers_role(); old_sensitive jsonb; new_sensitive jsonb; internal_client public.careers_clients; public_text text; private_value text;
BEGIN
 -- Trusted maintenance may bypass via service_role only; normal identities must hold a role.
 IF actor_role IS NULL AND current_user<>'service_role' THEN RAISE EXCEPTION 'Authorized Careers role required'; END IF;
 IF NEW.slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$' THEN RAISE EXCEPTION 'Use a lowercase slug with hyphens'; END IF;
 NEW.title=btrim(NEW.title);
 IF NEW.title='' THEN RAISE EXCEPTION 'Job title required'; END IF;
 IF TG_OP='INSERT' THEN
  -- Database generates identity/reference; duplicate rows cannot preserve old references/dates.
  NEW.id=gen_random_uuid(); NEW.reference='ST-'||extract(year FROM now())::text||'-'||upper(substr(replace(NEW.id::text,'-',''),1,12));
  NEW.created_at=now(); NEW.created_by=auth.uid(); NEW.published_at=NULL;
  IF NEW.status<>'draft' THEN RAISE EXCEPTION 'Create as Draft, then publish explicitly'; END IF;
 ELSE
  IF NEW.id IS DISTINCT FROM OLD.id OR NEW.reference IS DISTINCT FROM OLD.reference OR (OLD.published_at IS NOT NULL AND NEW.slug IS DISTINCT FROM OLD.slug) THEN RAISE EXCEPTION 'IDs, references and published slugs are permanent'; END IF;
  NEW.created_at=OLD.created_at; NEW.created_by=OLD.created_by; NEW.published_at=OLD.published_at;
  IF OLD.status='archived' AND NEW.status NOT IN ('archived','draft') THEN RAISE EXCEPTION 'Restore archived jobs to Draft before publishing'; END IF;
 END IF;
 new_sensitive=jsonb_build_array(NEW.client_id,NEW.client_visibility,NEW.public_company_name,NEW.public_company_website,NEW.public_company_logo_url,NEW.client_publication_approved,NEW.salary_visibility);
 IF TG_OP='UPDATE' THEN old_sensitive=jsonb_build_array(OLD.client_id,OLD.client_visibility,OLD.public_company_name,OLD.public_company_website,OLD.public_company_logo_url,OLD.client_publication_approved,OLD.salary_visibility); END IF;
 IF actor_role='editor' THEN
  IF NEW.status<>'draft' OR (TG_OP='UPDATE' AND OLD.status<>'draft') THEN RAISE EXCEPTION 'Editors can only manage Draft content'; END IF;
  IF TG_OP='INSERT' THEN
   IF NEW.client_visibility<>'confidential' OR NEW.client_publication_approved OR NEW.salary_visibility OR NEW.public_company_name IS NOT NULL OR NEW.public_company_website IS NOT NULL OR NEW.public_company_logo_url IS NOT NULL THEN RAISE EXCEPTION 'Admin approval required for identifying fields and public salary'; END IF;
  ELSIF new_sensitive IS DISTINCT FROM old_sensitive THEN RAISE EXCEPTION 'Only Admin may change sensitive confidentiality settings'; END IF;
 END IF;
 -- Named approvals never survive a client identity/visibility change.
 IF TG_OP='UPDATE' AND jsonb_build_array(NEW.client_id,NEW.client_visibility,NEW.public_company_name,NEW.public_company_website,NEW.public_company_logo_url) IS DISTINCT FROM jsonb_build_array(OLD.client_id,OLD.client_visibility,OLD.public_company_name,OLD.public_company_website,OLD.public_company_logo_url) THEN
  NEW.client_publication_approved=false;
 END IF;
 IF NEW.client_visibility='confidential' THEN NEW.client_publication_approved=false; END IF;
 IF NEW.salary_min::text IN ('NaN','Infinity','-Infinity') OR NEW.salary_max::text IN ('NaN','Infinity','-Infinity') OR NEW.salary_min<0 OR NEW.salary_max<0 THEN RAISE EXCEPTION 'Salary values must be finite and nonnegative'; END IF;
 IF (NEW.salary_min IS NULL)<>(NEW.salary_max IS NULL) THEN RAISE EXCEPTION 'Provide both salary bounds or neither'; END IF;
 IF NEW.salary_min IS NOT NULL THEN
  IF NEW.salary_max<NEW.salary_min THEN RAISE EXCEPTION 'Salary maximum cannot be below minimum'; END IF;
  IF coalesce(NEW.salary_currency,'') !~ '^[A-Z]{3}$' OR coalesce(NEW.salary_period,'') NOT IN ('HOUR','DAY','WEEK','MONTH','YEAR') THEN RAISE EXCEPTION 'Salary requires a currency and supported period'; END IF;
 END IF;
 IF NEW.salary_visibility AND NEW.salary_min IS NULL THEN RAISE EXCEPTION 'Public salary requires a complete range'; END IF;
 IF NEW.status='active' THEN
  IF actor_role IS DISTINCT FROM 'admin' AND current_user<>'service_role' THEN RAISE EXCEPTION 'Only Admin may publish'; END IF;
  IF NEW.application_url IS NULL OR NEW.application_url !~ '^https://[A-Za-z0-9][A-Za-z0-9.-]*\.[A-Za-z]{2,}(:[0-9]+)?([/?#][^[:space:]]*)?$' THEN RAISE EXCEPTION 'A valid HTTPS application URL is required'; END IF;
  IF btrim(NEW.location_display)='' OR btrim(NEW.summary)='' OR btrim(NEW.about_opportunity)='' OR btrim(NEW.mandate)='' OR btrim(NEW.responsibilities)='' OR btrim(NEW.candidate_profile)='' OR btrim(NEW.opportunity_offers)='' OR btrim(NEW.public_company_description)='' THEN RAISE EXCEPTION 'Complete all public descriptions'; END IF;
  IF NEW.client_visibility='named' AND (NOT NEW.client_publication_approved OR coalesce(btrim(NEW.public_company_name),'')='') THEN RAISE EXCEPTION 'Named clients require separate Admin publication approval'; END IF;
  IF NEW.expires_at IS NOT NULL AND NEW.expires_at<=now() THEN RAISE EXCEPTION 'Expiration must be in the future when publishing'; END IF;
  -- All projected fields are checked for verbatim private identifiers, not just body copy.
  -- Human review is still required for aliases, paraphrases and inferential disclosures.
  IF NEW.client_visibility='confidential' AND NEW.client_id IS NOT NULL THEN
   SELECT c.* INTO internal_client FROM public.careers_clients AS c WHERE c.id=NEW.client_id;
   public_text=lower(public.careers_public_payload(NEW)::text);
   FOREACH private_value IN ARRAY ARRAY[internal_client.name,internal_client.website,internal_client.internal_notes,NEW.client_id::text,NEW.public_company_name,NEW.public_company_website,NEW.public_company_logo_url] LOOP
    IF coalesce(btrim(private_value),'')<>'' AND strpos(public_text,lower(btrim(private_value)))>0 THEN RAISE EXCEPTION 'Private client information found in approved public content or destination'; END IF;
   END LOOP;
  END IF;
  NEW.published_at=coalesce(NEW.published_at,now());
 END IF;
 NEW.updated_at=now(); NEW.updated_by=auth.uid(); RETURN NEW;
END $$;
REVOKE ALL ON FUNCTION public.careers_validate_job() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER careers_validate_job BEFORE INSERT OR UPDATE ON public.careers_jobs FOR EACH ROW EXECUTE FUNCTION public.careers_validate_job();

CREATE FUNCTION public.careers_sync_public_and_audit() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = pg_catalog AS $$
DECLARE safe_payload jsonb; action text;
BEGIN
 IF NEW.status='active' THEN
  safe_payload=public.careers_public_payload(NEW);
  INSERT INTO public.careers_public_positions(slug,published_at,expires_at,payload) VALUES(NEW.slug,NEW.published_at,NEW.expires_at,safe_payload)
   ON CONFLICT(slug) DO UPDATE SET published_at=excluded.published_at,expires_at=excluded.expires_at,payload=excluded.payload;
 ELSE
  DELETE FROM public.careers_public_positions WHERE slug=NEW.slug;
 END IF;
 IF TG_OP='INSERT' THEN action='created';
 ELSIF OLD.status IS DISTINCT FROM NEW.status THEN
  action=CASE NEW.status WHEN 'active' THEN CASE WHEN OLD.published_at IS NULL THEN 'published' ELSE 'reactivated' END WHEN 'on_hold' THEN 'paused' WHEN 'closed' THEN 'closed' WHEN 'archived' THEN 'archived' ELSE 'returned_to_draft' END;
 ELSE action='updated'; END IF;
 INSERT INTO public.careers_job_events(job_id,actor_user_id,event_type,previous_status,new_status)
 VALUES(NEW.id,NEW.updated_by,action,CASE WHEN TG_OP='UPDATE' THEN OLD.status END,NEW.status);
 RETURN NEW;
END $$;
ALTER FUNCTION public.careers_sync_public_and_audit() OWNER TO sync_careers_audit_writer;
REVOKE ALL ON FUNCTION public.careers_sync_public_and_audit() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER careers_sync_public_and_audit AFTER INSERT OR UPDATE ON public.careers_jobs FOR EACH ROW EXECUTE FUNCTION public.careers_sync_public_and_audit();
CREATE INDEX careers_jobs_status_idx ON public.careers_jobs(status,updated_at DESC);
CREATE INDEX careers_jobs_client_idx ON public.careers_jobs(client_id);
CREATE INDEX careers_public_expiry_idx ON public.careers_public_positions(expires_at,published_at DESC);
CREATE INDEX careers_events_job_idx ON public.careers_job_events(job_id,created_at);
-- Dedicated owners cannot create further objects or be assumed by ordinary users.
REVOKE CREATE ON SCHEMA public FROM sync_careers_role_reader, sync_careers_public_reader, sync_careers_audit_writer;
REVOKE sync_careers_role_reader, sync_careers_public_reader, sync_careers_audit_writer FROM CURRENT_USER;
COMMIT;
