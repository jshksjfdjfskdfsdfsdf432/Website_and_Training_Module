# Module 06 — Isolated Cloudflare API prototype

This is a local-only proof of concept with fictional catalogue data. It does not provide a database, user authentication, customer inquiries or payments.

## In VS Code
1. Pull the feature branch and open this directory.
2. Run `npm install` and then `npm test`. Five tests should pass.
3. Run `npm run dev`.
4. Open `http://localhost:8787/health` and `http://localhost:8787/api/catalog`.
5. Confirm `http://localhost:8787/admin` returns HTTP 403.
6. Record your Node.js and Wrangler versions and capture safe screenshots.

The Worker name is different from the live ModuleLab website. Do not deploy without approval. Dependency versions remain provisional until verified and locked.
