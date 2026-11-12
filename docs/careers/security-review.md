# Careers SQL security review

Status: approved and applied November 12, 2026 through the Supabase migration tool. The earlier cancelled attempt did not execute; the approved migration created only the new Careers objects.

## Controls

- Dedicated SECURITY DEFINER owners are NOLOGIN, NOINHERIT, non-superuser and cannot bypass RLS. All functions pin `search_path` to `pg_catalog` and schema-qualify application references. Temporary ownership-transfer membership and schema creation privileges are revoked before commit.
- `careers_role()` can read only the caller's authorization row. Ordinary application users cannot assign roles. Initial administrator setup will require a separately authorized, verified Auth identity; this proposal seeds no accounts.
- `careers_public_jobs()` can read only a separate allowlisted public projection, never jobs, clients, roles or audit history. Anonymous callers have function execution only and no underlying table privileges. RLS also enforces expiry against database time.
- Confidential name, website and logo fields are suppressed regardless of stored values or approval flags. Internal IDs, private client data and hidden compensation fields are excluded from the projection. Public content is separately authored, not automatically copied from client records. Publication checks inspect all projected fields for verbatim private names, websites, notes, IDs and identifying public-field values.
- Editors can create confidential drafts and edit draft content. Only Admin can publish, change existing client association or confidentiality/identifying fields, approve named-client publication or enable public salary. Named approval is reset on identifying-field changes and must be explicitly restored in a separate action.
- Application users have read-only audit access: no insertion, editing, deletion or truncation. The dedicated trigger owner can append events, but cannot edit/delete audit rows. Trusted Supabase service-role/database operators remain privileged, as expected.
- Salary bounds must both be absent or both be finite, nonnegative values, with maximum at least minimum. A range needs a currency and supported period; public salary requires a complete range. Exact salaries (equal bounds) are allowed.
- New rows must start Draft with database-generated identity/reference and no publication date. First activation sets `published_at`; edits, pause, close, archive and reactivation preserve it. Published slugs cannot change. Status changes and ordinary edits append audit events; removing a job from Active removes its public projection in the same transaction. Expiry hides it immediately without a scheduler.

## Verification

The proposal applied successfully in an isolated local PostgreSQL instance with simulated Supabase Auth helpers. Twelve tests passed covering anonymous reads/writes, outsider access, editor escalation, append-only events, confidential redaction, accidental disclosure checks, salary validation, named approvals, publication history, expiry and function ownership/privileges. Tests are kept in `tests/careers/test_proposed_schema.py` and are hardwired to a local test socket, not the connected project.

Hosted verification confirmed the three dedicated function owners, pinned search paths, no login/superuser/RLS-bypass/role-creation privileges and no schema creation privileges. All five tables have enabled and forced RLS. Actual anonymous Data API requests return `200 []` for the public function and permission-denied `401 / 42501` for every underlying table. Authenticated portal workflows remain pending implementation and administrator setup.

The hosted linter reports three intentional execution warnings: anonymous execution of the public job function, and authenticated execution of that function and the caller-role lookup. These are the approved access boundaries, not unintended private-table grants. Documentation and live grants were reviewed; revoking these intended permissions or making the functions invoker would break the approved architecture. No warning was suppressed, and a repeat linter check still reports these three advisories. The audit trigger function is not callable by ordinary application users.

## Limits and preservation

An administrator must still review public prose and application destinations. SQL cannot reliably recognize aliases, paraphrases, inferential disclosures or a private salary manually retyped into prose; the projection guarantees separation/redaction of private fields, not semantic analysis of arbitrary approved text.

All new objects are Careers-namespaced. There is no DROP, CREATE OR REPLACE, unrelated data update, account seed, reserved-schema change or role grant to an ordinary application identity. DELETE statements are confined to the new public projection inside the synchronization trigger; private jobs/history are not deleted. Existing-object collisions fail instead of overwriting anything. Netlify configuration, existing pages and integrations remain unchanged.

The approved SQL is retained in `docs/careers/proposed-schema.sql`; the applied migration file is managed by the migration tool. No administrator identity or job record was created by this migration.