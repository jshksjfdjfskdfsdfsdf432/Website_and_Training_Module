import test from "node:test";
import assert from "node:assert/strict";
import { verifyAccess } from "./src/access.js";
const b64 = (value) => Buffer.from(typeof value === "string" ? value : JSON.stringify(value)).toString("base64url");
const env = { ACCESS_TEAM_DOMAIN: "example.cloudflareaccess.com", ACCESS_AUD: "audience-1", ADMIN_EMAILS: "admin@example.com" };
async function signedToken(overrides = {}) {
  const keypair = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1,0,1]), hash: "SHA-256" }, true, ["sign", "verify"]);
  const publicKey = { ...await crypto.subtle.exportKey("jwk", keypair.publicKey), kid: "test-key", use: "sig" };
  const now = Math.floor(Date.now()/1000);
  const payload = { iss: "https://example.cloudflareaccess.com", aud: ["audience-1"], sub: "person-1", email: "admin@example.com", iat: now, exp: now + 600, ...overrides };
  const input = b64({ alg: "RS256", kid: "test-key", typ: "JWT" }) + "." + b64(payload);
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", keypair.privateKey, new TextEncoder().encode(input));
  const token = input + "." + Buffer.from(signature).toString("base64url");
  const fetchKeys = async () => ({ ok: true, json: async () => ({ keys: [publicKey] }) });
  return { token, fetchKeys };
}
test("fails closed when configuration is missing", async () => {
  const result = await verifyAccess(new Request("https://example.test/admin"), {});
  assert.equal(result.status, 403);
});
test("requires a token when configured", async () => {
  const result = await verifyAccess(new Request("https://example.test/admin"), env);
  assert.equal(result.status, 401);
});
test("accepts correctly signed, scoped and allowlisted token", async () => {
  const {token, fetchKeys} = await signedToken();
  const result = await verifyAccess(new Request("https://example.test/admin", {headers: {"Cf-Access-Jwt-Assertion": token}}), env, fetchKeys);
  assert.equal(result.ok, true);
  assert.equal(result.email, "admin@example.com");
});
test("rejects unauthorized email", async () => {
  const {token, fetchKeys} = await signedToken({email: "visitor@example.com"});
  const result = await verifyAccess(new Request("https://example.test/admin", {headers: {"Cf-Access-Jwt-Assertion": token}}), env, fetchKeys);
  assert.equal(result.status, 403);
});
test("rejects incorrect audience and expired tokens", async () => {
  for (const payload of [{aud: ["other"]}, {exp: Math.floor(Date.now()/1000)-1}]) {
    const {token, fetchKeys} = await signedToken(payload);
    const result = await verifyAccess(new Request("https://example.test/admin", {headers: {"Cf-Access-Jwt-Assertion": token}}), env, fetchKeys);
    assert.equal(result.status, 401);
  }
});
test("rejects tampered signature", async () => {
  const {token, fetchKeys} = await signedToken();
  const parts = token.split(".");\n  const tampered = parts[0] + "." + parts[1] + "." + (parts[2][0] === "A" ? "B" : "A") + parts[2].slice(1);
  const result = await verifyAccess(new Request("https://example.test/admin", {headers: {"Cf-Access-Jwt-Assertion": tampered}}), env, fetchKeys);
  assert.equal(result.status, 401);
});
