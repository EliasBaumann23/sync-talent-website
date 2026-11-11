"""Proposal tests: isolated local PostgreSQL ONLY, never the connected Supabase.
Run after bootstrapping local auth stubs and applying docs/careers/proposed-schema.sql:
python3 -m unittest discover -s tests/careers -v
"""
import subprocess
import unittest

ADMIN = '00000000-0000-0000-0000-000000000001'
EDITOR = '00000000-0000-0000-0000-000000000002'
OUTSIDER = '00000000-0000-0000-0000-000000000003'
CLIENT = '10000000-0000-0000-0000-000000000001'


def sql(query, role='postgres', uid=''):
    # Fixed local socket and port: cannot inadvertently run against production.
    result = subprocess.run(['psql', '-h', '/tmp/careers-sql', '-p', '5499', '-U', 'postgres',
                             '-v', 'ON_ERROR_STOP=1', '-Atq'], input=(
        f"set role {role}; set request.jwt.claim.sub='{uid}';\n" + query),
        text=True, capture_output=True)
    return result


def ok(query, role='postgres', uid=''):
    result = sql(query, role, uid)
    if result.returncode:
        raise AssertionError(result.stderr)
    return result.stdout.strip()


class CareersSecurity(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ok(f"insert into auth.users values ('{ADMIN}'),('{EDITOR}'),('{OUTSIDER}');"
           f"insert into public.careers_admin_users(user_id,role) values ('{ADMIN}','admin'),('{EDITOR}','editor');")
        ok(f"insert into public.careers_clients(id,name,website,internal_notes) values ('{CLIENT}','Secret Client','https://secret.example','Private note');", 'authenticated', ADMIN)

    def make_job(self, slug):
        ok(f"""insert into public.careers_jobs(slug,title,client_id,location_display,summary,about_opportunity,mandate,responsibilities,candidate_profile,opportunity_offers,public_company_description,application_url,public_company_name,public_company_website,public_company_logo_url,salary_min,salary_max,salary_currency,salary_period,salary_notes)
        values('{slug}','Industrial Leader','{CLIENT}','Mexico','Public summary','Context','Mandate','Responsibilities','Profile','Offers','Industrial company','https://example.com/apply','Secret Client','https://secret.example','https://secret.example/logo.png',100,200,'MXN','MONTH','Hidden note');""", 'authenticated', ADMIN)

    def deny(self, query, role='authenticated', uid=EDITOR):
        self.assertNotEqual(sql(query, role, uid).returncode, 0)

    def test_anonymous_cannot_access_any_underlying_table(self):
        for table in ['careers_clients','careers_jobs','careers_admin_users','careers_job_events','careers_public_positions']:
            with self.subTest(table=table):
                self.deny(f'select * from public.{table}', 'anon', '')

    def test_anonymous_cannot_write_jobs(self):
        for query in ["insert into public.careers_jobs(slug,title) values('bad','Bad')", "update public.careers_jobs set title='Bad'", 'delete from public.careers_jobs']:
            self.deny(query, 'anon', '')

    def test_outsider_sees_no_private_rows_and_cannot_insert(self):
        for table in ['careers_clients','careers_jobs','careers_admin_users','careers_job_events']:
            self.assertEqual(ok(f'select count(*) from public.{table}', 'authenticated', OUTSIDER), '0')
        self.deny("insert into public.careers_jobs(slug,title) values('outsider','Bad')", 'authenticated', OUTSIDER)

    def test_editor_cannot_elevate_or_change_sensitive_fields(self):
        ok("insert into public.careers_jobs(slug,title) values('editor-draft','Draft');", 'authenticated', EDITOR)
        ok("update public.careers_jobs set summary='Draft content' where slug='editor-draft'", 'authenticated', EDITOR)
        for field, value in [('client_visibility', "'named'"), ('client_publication_approved','true'), ('public_company_name',"'Name'"), ('public_company_website',"'https://example.com'"), ('public_company_logo_url',"'https://example.com/logo.png'"), ('salary_visibility','true'), ('client_id',f"'{CLIENT}'"), ('status',"'active'")]:
            with self.subTest(field=field):
                self.deny(f"update public.careers_jobs set {field}={value} where slug='editor-draft'")
        self.deny("update public.careers_admin_users set role='admin'")
        self.deny("insert into public.careers_admin_users(user_id,role) values('00000000-0000-0000-0000-000000000003','admin')")

    def test_audit_is_append_only_for_admin_and_editor(self):
        for uid in [ADMIN, EDITOR]:
            for query in ["update public.careers_job_events set event_type='forged'", 'delete from public.careers_job_events', "insert into public.careers_job_events(job_id,event_type) values(gen_random_uuid(),'forged')", 'truncate public.careers_job_events']:
                self.deny(query, 'authenticated', uid)

    def test_confidential_projection_redacts_private_fields_and_hidden_pay(self):
        self.make_job('redaction')
        self.assertEqual(ok("select public.careers_public_jobs('redaction')", 'anon'), '[]')
        ok("update public.careers_jobs set status='active' where slug='redaction'", 'authenticated', ADMIN)
        import json
        payload = json.loads(ok("select public.careers_public_jobs('redaction')", 'anon'))[0]
        for field in ['public_company_name','public_company_website','public_company_logo_url','salary_min','salary_max','salary_currency','salary_period','salary_notes']:
            self.assertIsNone(payload[field])
        for field in ['client_id','id','internal_notes','created_by','updated_by']:
            self.assertNotIn(field,payload)
        self.assertNotIn('Secret Client',str(payload))
        self.assertNotIn('secret.example',str(payload))
        self.assertNotIn('Hidden note',str(payload))

    def test_confidential_private_values_in_public_fields_block_publication(self):
        self.make_job('leak-check')
        for field,value in [('industry','Secret Client'),('remote_eligibility','https://secret.example'),('application_instructions','Private note'),('summary',CLIENT)]:
            with self.subTest(field=field):
                self.deny(f"update public.careers_jobs set {field}='{value}',status='active' where slug='leak-check'", 'authenticated', ADMIN)

    def test_salary_incomplete_inconsistent_or_nonfinite_rejected(self):
        self.make_job('salary')
        for change in ['salary_min=null','salary_max=null','salary_min=-1','salary_max=99',"salary_min='NaN'","salary_max='Infinity'","salary_currency=null","salary_period='INVALID'",'salary_min=null,salary_max=null,salary_visibility=true']:
            with self.subTest(change=change):
                self.deny(f"update public.careers_jobs set {change} where slug='salary'",'authenticated',ADMIN)
        ok("update public.careers_jobs set salary_max=salary_min where slug='salary'",'authenticated',ADMIN)
        ok("update public.careers_jobs set salary_min=null,salary_max=null where slug='salary'",'authenticated',ADMIN)

    def test_named_approval_only_admin_and_invalidated_on_identity_change(self):
        self.make_job('named')
        ok("update public.careers_jobs set client_visibility='named' where slug='named'",'authenticated',ADMIN)
        self.deny("update public.careers_jobs set status='active' where slug='named'",'authenticated',ADMIN)
        ok("update public.careers_jobs set client_publication_approved=true,status='active' where slug='named'",'authenticated',ADMIN)
        self.assertIn('Secret Client',ok("select public.careers_public_jobs('named')",'anon'))
        self.deny("update public.careers_jobs set public_company_name='Changed' where slug='named'",'authenticated',ADMIN)
        ok("update public.careers_jobs set status='on_hold',public_company_name='Changed' where slug='named'",'authenticated',ADMIN)
        self.assertEqual(ok("select client_publication_approved from public.careers_jobs where slug='named'",'authenticated',ADMIN),'f')

    def test_lifecycle_keeps_first_date_and_records_actions(self):
        self.make_job('lifecycle')
        self.assertEqual(ok("select published_at is null from public.careers_jobs where slug='lifecycle'",'authenticated',ADMIN),'t')
        ok("update public.careers_jobs set status='active' where slug='lifecycle'",'authenticated',ADMIN)
        first=ok("select published_at from public.careers_jobs where slug='lifecycle'",'authenticated',ADMIN)
        for status in ['on_hold','active','closed','active','archived']:
            ok(f"update public.careers_jobs set status='{status}' where slug='lifecycle'",'authenticated',ADMIN)
            self.assertEqual(ok("select published_at from public.careers_jobs where slug='lifecycle'",'authenticated',ADMIN),first)
            self.assertEqual(ok("select jsonb_array_length(public.careers_public_jobs('lifecycle'))",'anon'), '1' if status=='active' else '0')
        actions=ok("select string_agg(event_type,',' order by created_at,id) from public.careers_job_events where job_id=(select id from public.careers_jobs where slug='lifecycle')",'authenticated',ADMIN)
        self.assertEqual(actions,'created,published,paused,reactivated,closed,reactivated,archived')
        self.deny("update public.careers_jobs set slug='new-lifecycle' where slug='lifecycle'",'authenticated',ADMIN)

    def test_expiry_enforced_by_database_time_without_scheduler(self):
        self.make_job('expiry')
        self.deny("update public.careers_jobs set status='active',expires_at=now()-interval '1 second' where slug='expiry'",'authenticated',ADMIN)
        ok("update public.careers_jobs set status='active',expires_at=now()+interval '1 hour' where slug='expiry'",'authenticated',ADMIN)
        # Local clock simulation on the projection ONLY; no remote connection.
        ok("update public.careers_public_positions set expires_at=now()-interval '1 second' where slug='expiry'")
        self.assertEqual(ok("select public.careers_public_jobs('expiry')",'anon'),'[]')

    def test_definer_owners_have_minimal_privileges(self):
        self.assertEqual(ok("select string_agg(p.proname||':'||r.rolname,',' order by p.proname) from pg_proc p join pg_roles r on r.oid=p.proowner where p.prosecdef and p.pronamespace='public'::regnamespace"),'careers_public_jobs:sync_careers_public_reader,careers_role:sync_careers_role_reader,careers_sync_public_and_audit:sync_careers_audit_writer')
        self.assertEqual(ok("select count(*) from pg_roles where rolname like 'sync_careers_%' and (rolcanlogin or rolbypassrls or rolsuper or rolcreaterole or rolcreatedb)"),'0')
        self.assertEqual(ok("select count(*) from pg_proc where prosecdef and pronamespace='public'::regnamespace and proconfig is distinct from ARRAY['search_path=pg_catalog']"),'0')
        self.deny('select * from public.careers_jobs','sync_careers_public_reader')
        self.deny('select * from public.careers_clients','sync_careers_public_reader')
        self.deny('select * from public.careers_job_events','sync_careers_public_reader')
        self.assertEqual(ok("select jsonb_array_length(public.careers_public_jobs())<=100",'anon'),'t')

if __name__ == '__main__':
    unittest.main()
