import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { join, relative } from "node:path";

const root = process.cwd();
const ignore = new Set(["node_modules", ".git", ".wrangler", "dist", "coverage"]);
const targets = [];
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    if (ignore.has(item.name)) continue;
    const path = join(dir, item.name);
    if (item.isDirectory()) await walk(path);
    else if (item.isFile() && /\.(?:js|mjs|cjs)$/.test(item.name)) targets.push(path);
  }
}
await walk(root);
if (!targets.length) {
  console.error("No JavaScript files found to check.");
  process.exitCode = 1;
} else {
  let failures = 0;
  for (const file of targets.sort()) {
    const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
    if (result.status !== 0) {
      failures++;
      console.error(`FAIL ${relative(root, file)}\n${result.stderr || result.stdout}`);
    }
  }
  if (failures) {
    console.error(`Syntax check failed for ${failures} file(s).`);
    process.exitCode = 1;
  } else {
    console.log(`Syntax OK: ${targets.length} JavaScript files.`);
  }
}
