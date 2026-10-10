import test from "node:test";
import assert from "node:assert/strict";
import { handleRequest } from "./src/index.js";
for (const [path, expected] of [["/health",200],["/api/catalog",503],["/admin",403],["/unknown",404]]) {
  test(path, async () => assert.equal((await handleRequest(new Request("https://example.test"+path))).status,expected));
}
test("POST rejected",async()=>assert.equal((await handleRequest(new Request("https://example.test/api/catalog",{method:"POST"}))).status,405));
test("catalog reads from bound D1 database",async()=>{
  const env={DB:{prepare:()=>({bind:()=>({all:async()=>({results:[]})})})}};
  const response=await handleRequest(new Request("https://example.test/api/catalog"),env);
  assert.equal(response.status,200);
  assert.deepEqual((await response.json()).items,[]);
});
