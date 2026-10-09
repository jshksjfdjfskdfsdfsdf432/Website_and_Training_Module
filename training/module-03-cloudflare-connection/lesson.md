# Module 03 — Connect Cloudflare to GitHub (first-time users)

## Prerequisites
Cloudflare account, accessible GitHub repository, and a deployable demo application.

## Procedure
1. Create or sign in to a Cloudflare account at https://dash.cloudflare.com/ and secure it with MFA.
2. Open Workers & Pages in the dashboard and choose the Git-connected Workers deployment flow (UI labels may change).
3. Authorize Cloudflare's GitHub integration, restricting access to the intended repository where possible.
4. Select the repository and branch containing the demo application.
5. Configure the appropriate framework build command, output, and Wrangler configuration for the chosen runtime.
6. Add required environment variables or secrets in Cloudflare settings, not in Git.
7. Deploy and verify the assigned `workers.dev` URL.
8. Commit a harmless change and confirm the automatic deployment pipeline works.
9. Record deployment logs, troubleshooting, and rollback instructions.

## Important
The final Next.js hosting adapter/runtime and version compatibility must be verified before choosing exact build commands. Do not assume a generic Next.js build can be deployed as-is.

## Exercise
Deploy a minimal compatible demo and document its URL and deployment verification.
