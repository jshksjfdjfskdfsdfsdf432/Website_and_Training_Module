# First GitHub → Cloudflare deployment lab

## Goal
Deploy the repository's minimal Worker to Cloudflare, confirm its public URL, and demonstrate automatic deployment after a GitHub commit.

## Cloudflare form
- Repository: `jshksjfdjfskdfsdfsdf432/Website_and_Training_Module`
- Production branch: `main`
- Project name: `website-and-training-module`
- Build command: **leave blank**
- Deploy command: `npx wrangler deploy`
- Worker configuration: root `wrangler.toml`
- Preview command: leave the Cloudflare default initially

## Verification
1. Click Deploy after the files are merged into `main`.
2. Wait for a successful build/deploy status.
3. Open the generated `*.workers.dev` URL and confirm the heading "Website & Training Module".
4. Open `/health` and confirm the JSON contains `"status":"ok"`.
5. Record the live URL, deployment timestamp, screenshot and any troubleshooting.
6. Later, test a safe change on a feature branch and review it before merging.

## Troubleshooting
- **Entry point missing:** Verify `wrangler.toml` and `website/worker.js` are on the production branch.
- **Wrong root directory:** Use repository root for this demo.
- **Unauthorized repository:** Recheck Cloudflare's GitHub installation permissions.
- **Wrong project name:** Keep Cloudflare project name consistent with `wrangler.toml`.
- **Build command failure:** This demo needs no build command.

Do not add account tokens or credentials to the repository.

## Real deployment incident — Error 10021 (2026-10-09 UTC)

**Observed log:** `Can't set compatibility date in the future: 2026-10-10`.

**Cause:** `wrangler.toml` specified a date one day ahead of the Cloudflare build environment's UTC date.

**Fix:** Set `compatibility_date = "2026-10-09"` (or another supported date not in the future), commit to `main`, and retry deployment. Do not change account credentials or build commands to resolve this error.

**Verification:** Confirm Cloudflare deployment succeeds and `/health` returns JSON with `status: ok`.

## First successful deployment — learner verification record

- **Date:** 2026-10-10 (Philippines local date; original build log dated 2026-10-09 UTC)
- **Repository:** `jshksjfdjfskdfsdfsdf432/Website_and_Training_Module`
- **Branch:** `main`
- **Cloudflare Worker:** `website-and-training-module`
- **Production URL:** https://website-and-training-module.cmrecto007.workers.dev
- **Health endpoint:** https://website-and-training-module.cmrecto007.workers.dev/health
- **Evidence:** Cloudflare dashboard screenshot showed deployment Ready, and learner confirmed the homepage and health check working in the browser.
- **Troubleshooting completed:** Fixed error 10021 by changing future compatibility date; enabled the production workers.dev URL in the Domains tab.
- **Remaining acceptance test:** Make a safe repository change and confirm Cloudflare automatically deploys it, then record deployment commit and results.

### Student lesson: enabling the production URL
1. Open the deployed Worker in Cloudflare.
2. Select **Domains**.
3. In **Worker URL**, enable the **Production** toggle (leave Preview off for this lab).
4. Open the workers.dev production URL and verify the page.
5. Append `/health` and confirm the JSON status is `ok`.

### Instructor note
The deployment was confirmed by the learner; no direct independent HTTP probe was performed in this record. Avoid marking the automatic deployment exercise complete until a new commit has been observed in Cloudflare's deployment history.
