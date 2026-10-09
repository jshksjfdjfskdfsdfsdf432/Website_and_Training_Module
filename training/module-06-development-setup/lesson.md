# Module 06 — Development environment and Cloudflare proof of concept

**Status:** Prepared for local testing; not deployed.

## Objectives
Learn to run an isolated Worker, test JSON endpoints, and understand why admin routes must be closed before authentication is configured.

## Exercise
Open `prototypes/cloudflare-business-api` in VS Code, install packages, run five automated tests and start the local development server. Verify health returns HTTP 200, the sample catalogue is marked as demo data, and admin returns HTTP 403. Add a test for another missing route.

## Evidence
Record the five test results, local endpoint screenshots, Node.js/Wrangler versions, and one paragraph explaining the difference between a prototype and a production system.

## Next gate
Validate database connectivity, authentication and a Cloudflare-compatible frontend without altering the existing ModuleLab training Worker.
