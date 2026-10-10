# Module 08 — AI-built admin dashboard foundation

**Status:** UI preview only. Authentication and editing are intentionally disabled.

## Objectives
Identify the admin dashboard sections, understand why a public preview is not an authenticated dashboard, and verify that protected endpoints fail closed.

## Guided exercise
1. Open the `feature/module-08-admin-foundation` branch in VS Code.
2. In `prototypes/cloudflare-business-api`, run `npm install` and `npm test`.
3. Run `npm run dev` and open `http://localhost:8787/admin-preview`.
4. Inspect the dashboard cards for profile, services, products, media, inquiries and settings.
5. Open `http://localhost:8787/admin` and verify HTTP 403.
6. Explain why a preview must not allow data edits or show private inquiries.

## Acceptance criteria
- Preview renders on phone and desktop widths.
- The preview clearly states that login and editing are disabled.
- The /admin route remains restricted.
- No credentials or customer information are exposed.

## Next gate
Choose a secure authentication provider, implement server-verified sessions and role-based access, and test authorization before any admin CRUD is enabled.
