import test from "node:test";
import assert from "node:assert/strict";
import { adminDashboardHtml, requireAdmin } from "./src/admin.js";

test("dashboard preview is explicitly nonfunctional", () => {
  const html = adminDashboardHtml();
  assert.match(html, /Sign-in and editing are disabled/);
  assert.match(html, /Business profile/);
  assert.match(html, /Media library/);
});
test("admin guard denies unauthenticated access", async () => {
  const response = requireAdmin(new Request("https://example.test/admin"), {});
  assert.equal(response.status, 403);
  assert.match((await response.json()).error, /not configured/);
});
