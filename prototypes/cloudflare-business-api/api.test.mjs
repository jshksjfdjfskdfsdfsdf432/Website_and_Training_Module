import test from "node:test";
import assert from "node:assert/strict";
import { handleRequest } from "./src/index.js";
for (const [path, expected] of [["/health",200],["/api/catalog",200],["/admin",403],["/unknown",404]]) {
  test(path, () => assert.equal(handleRequest(new Request("https://example.test"+path)).status,expected));
}
test("POST rejected",()=>assert.equal(handleRequest(new Request("https://example.test/api/catalog",{method:"POST"})).status,405));
