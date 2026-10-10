import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("Usage: npm run check:staging -- <path-to-staging-wrangler.toml>");
  process.exit(1);
}
const config = readFileSync(resolve(file), "utf8");
const errors = [];
if (!/^name\s*=\s*"[^"]+-staging"/m.test(config)) errors.push("Use a distinct Worker name ending in -staging.");
if (!/\[\[d1_databases\]\]/.test(config)) errors.push("Missing D1 binding.");
if (!/^binding\s*=\s*"DB"/m.test(config)) errors.push('Missing D1 binding name "DB".');
const id = config.match(/^database_id\s*=\s*"([^"]+)"/m)?.[1];
if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) || id === "00000000-0000-0000-0000-000000000000") {
  errors.push("A real staging D1 database UUID is required; placeholder IDs are forbidden.");
}
if (!/^main\s*=\s*"src\/index\.js"/m.test(config)) errors.push("Expected Worker entrypoint src/index.js.");
if (errors.length) {
  for (const error of errors) console.error("ERROR: " + error);
  process.exitCode = 1;
} else {
  console.log("Staging config preflight passed (configuration shape only).");
  console.log("Still requires account authorization, Cloudflare Access policy review, and explicit deployment approval.");
}
