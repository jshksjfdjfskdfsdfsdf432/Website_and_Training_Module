# Module 09 — Secure administrator sign-in with Cloudflare Access

**Status:** Authentication unit tests passed locally (16/16 as reported by the learner); Cloudflare Access staging deployment and end-to-end login remain pending. No admin editing enabled.

**Next lesson:** [Lesson 09.2 — workers.dev staging, deployment safeguards and troubleshooting](workers-dev-staging.md).

## Learning goals
- Explain Cloudflare Access as the identity gate.
- Explain why the Worker must verify signed tokens and not trust a user-provided email or role header.
- Identify team domain, application audience (AUD), and administrator allowlist.
- Verify unauthenticated and unauthorized users cannot access /admin.

## AI-first setup
1. Review this module's pull request and its tests.
2. Configure a Cloudflare Access self-hosted application covering the admin path of the **separate business API Worker**, not the live training site. Ensure the Access policy restricts authorized identities.
3. Find the Access team domain (example: `myteam.cloudflareaccess.com`) and application AUD tag in the Cloudflare dashboard.
4. Configure the Worker environment variables `ACCESS_TEAM_DOMAIN`, `ACCESS_AUD`, and `ADMIN_EMAILS` (comma-separated authorized email addresses). Do not paste tokens or secrets into ChatGPT or GitHub.
5. For local development, authentication intentionally fails closed without those settings. Run `npm test` and `npm run dev`; open /admin to see the unconfigured response.
6. After authorized staging deployment and Access setup, test a permitted admin, a non-permitted identity, and an unauthenticated browser. Do not deploy this prototype using its placeholder D1 database ID.

## Verification checklist
- [x] Initial local unit tests passed (16/16); rerun after every change
- [ ] Missing configuration denies access
- [ ] No token denies access
- [ ] Invalid signature, expired token and wrong audience deny access
- [ ] Valid token from correct Access team and allowlisted email is accepted
- [ ] No product or service mutation endpoints are enabled
- [ ] Production deployment is separately approved

## Next phase
After staging auth verification, implement server-authorized product/service CRUD, audit logging, and the planned visual field designer. Avoid storing passwords in D1.
