# Module 07 — AI-built database foundation

**Status:** Local D1 proof of concept, pending user verification. No production database provisioned.

## Objectives
Understand how the database schema, fictional seed data, Worker binding and catalogue endpoint work together.

## Guided local exercise
1. In VS Code switch to the `feature/module-07-d1-catalog` branch.
2. Open `prototypes/cloudflare-business-api`.
3. Run `npm install` and `npm test`.
4. Run `npx wrangler d1 migrations apply modulelab-business-poc --local --config wrangler.toml`.
5. Run `npx wrangler d1 execute modulelab-business-poc --local --config wrangler.toml --file=seeds/demo.sql`.
6. Run `npm run dev` and open `http://localhost:8787/api/catalog`.
7. Confirm the fictional example service appears and admin access remains denied.

## Verification
- Automated tests pass
- Migration applies locally
- Seed inserts only fictional data
- API returns published catalogue items from D1
- Admin routes still return HTTP 403

## Safety
Do not use `--remote`, create production databases, publish client data or deploy this prototype. No admin editing or login exists yet. Real client pricing requires verification.
