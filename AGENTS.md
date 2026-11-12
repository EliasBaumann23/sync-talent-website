<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Careers administrator authentication must use the external backend's built-in identities without an additional profiles table; store authorization roles separately to prevent self-escalation.
- Careers public reads must use an allowlisted projection behind a least-privileged, NOLOGIN-owned SQL function, never the private job/client tables; this keeps confidential data outside the anonymous read path.
- Careers publication authorization, salary validation, immutable first-publication dates and append-only action history must be enforced in database policies/triggers; browser controls alone cannot protect these rules.
