import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const temp = mkdtempSync(join(tmpdir(), "modulelab-staging-"));
try {
  const path = join(temp, "wrangler.staging.toml");
  const run = (text) => {
    writeFileSync(path, text);
    return spawnSync(process.execPath, ["scripts/check-staging-config.mjs", path], { encoding: "utf8" });
  };
  const base = `name = "modulelab-business-api-staging"
main = "src/index.js"
[[d1_databases]]
binding = "DB"
database_id = "11111111-2222-4333-8444-555555555555"
`;
  test("staging config preflight accepts structurally valid config", () => {
    assert.equal(run(base).status, 0);
  });
  test("staging config preflight rejects placeholder D1 database", () => {
    assert.notEqual(run(base.replace("11111111-2222-4333-8444-555555555555", "00000000-0000-0000-0000-000000000000")).status, 0);
  });
  test("staging config preflight rejects non-staging worker name", () => {
    assert.notEqual(run(base.replace("modulelab-business-api-staging", "modulelab-business-api-poc")).status, 0);
  });
} finally {
  // Cleanup after the tests finish via process exit.
  process.on("exit", () => rmSync(temp, { recursive: true, force: true }));
}
