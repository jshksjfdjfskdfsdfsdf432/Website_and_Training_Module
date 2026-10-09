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
