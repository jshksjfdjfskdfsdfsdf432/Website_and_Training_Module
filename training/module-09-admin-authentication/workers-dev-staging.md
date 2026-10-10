# Lesson 09.2 — Stage Cloudflare Access authentication on workers.dev

**Status:** Guided staging plan only. No staging Worker, remote D1 database, or Access application has been created.

## Architecture
- Existing training website: `website-and-training-module.cmrecto007.workers.dev` (must remain untouched).
- Separate business API staging Worker: dedicated `<worker-name>.<account-subdomain>.workers.dev` URL assigned by Cloudflare after deployment.
- Staging D1: a new remote database with its own real UUID; never reuse the local prototype placeholder.
- Cloudflare Access: an application/policy protecting the staging admin entry points, with server-side JWT verification in the Worker.

## Important workers.dev caveat
Before deployment, verify in the Cloudflare dashboard whether the chosen Access application type and path-scoped policy can protect the intended `workers.dev` hostname. Cloudflare features and routing rules can vary. If path-level protection is unavailable, **do not expose admin endpoints unprotected**: use a separate Access-protected admin hostname/Worker or keep admin routes disabled until an appropriate protected route is available. Do not assume that a JWT check alone causes a browser login redirect.

## Owner-guided steps (Cloudflare dashboard)
1. Sign in to Cloudflare and inspect Workers & Pages and Zero Trust/Access settings.
2. Create a **separate staging Worker** only after reviewing its name and routing. Keep the production training Worker unchanged.
3. Create a **staging D1 database** and record its UUID locally (not in a committed placeholder).
4. Create an untracked staging Wrangler config (e.g. `wrangler.staging.toml`) with a unique `-staging` Worker name, `main = "src/index.js"`, the DB binding, and the real staging D1 database UUID. Do not commit account-specific staging config without approval.
5. Run `npm run check:staging -- wrangler.staging.toml` before any remote action.
6. Review Access availability for the exact `workers.dev` staging hostname and create an application with an explicit administrator allow policy. Prefer least privilege and MFA where available.
7. Obtain the Access team domain and the application audience tag from the dashboard. Configure `ACCESS_TEAM_DOMAIN`, `ACCESS_AUD`, and `ADMIN_EMAILS` in the staging Worker environment. Do not paste identity tokens, cookies, or account secrets into GitHub or ChatGPT.
8. Review the D1 remote migration plan and backup/recovery procedures before running any `--remote` commands.
9. After explicit approval, deploy to staging only; test `/health`, `/api/catalog`, `/admin`, and `/admin-preview`.
10. In a private browser session, confirm Access login for an allowlisted administrator, denial for another identity, and denial when no valid token is present.

## Current behavior and limitations
- `/admin` currently returns an authenticated JSON confirmation, **not** an editable dashboard.
- `/admin-preview` is a public visual mockup. It contains no private data and cannot edit anything.
- The Worker rejects missing/invalid tokens; it does not itself implement a browser login redirect.
- A remote Access app, working route protection and authenticated end-to-end login are required before claiming real sign-in works.

## Beginner-friendly local commands (from prototype folder)
```powershell
git branch --show-current
npm install
npm test
npm run dev
```
Do not run `cd prototypes/cloudflare-business-api` again if your PowerShell prompt already ends with that folder.

## Troubleshooting and regression prevention
- **SyntaxError / invalid token:** `npm run check:syntax` checks all JavaScript files before running tests; it catches accidental literal `\\n` text in code.
- **Tests fail:** use `node --test <test-file>` and share the *first error lines*, not just the summary.
- **Wrong branch:** check `git branch --show-current`; fetch/switch only if needed.
- **Wrong folder:** check `Get-Location` and ensure `package.json` is in the current directory.
- **Missing admin config:** HTTP 403 is expected and safe.
- **Placeholder D1 ID:** staging preflight blocks it.
- **Admin preview shows JSON error:** confirm you're on the feature branch that includes `/admin-preview`.
- **GitHub quality gate:** every business API pull request runs syntax validation and unit tests in CI.

## Completion criteria
- [ ] Local syntax and unit tests pass
- [ ] Real staging D1 configured and migrations tested
- [ ] Cloudflare Access application protects intended staging admin routes
- [ ] Allowed admin successfully signs in
- [ ] Unauthorized and anonymous users denied
- [ ] No changes to live training website
- [ ] Staging deployment explicitly approved
