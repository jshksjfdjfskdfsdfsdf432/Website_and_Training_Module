const encoder = new TextEncoder();
function decodeBase64Url(value) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]+$/.test(value)) throw new Error("Invalid token encoding");
  const binary = atob(value.replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}
function decodeJson(value) {
  return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
}
function configured(env) {
  const team = env.ACCESS_TEAM_DOMAIN;
  const aud = env.ACCESS_AUD;
  const emails = env.ADMIN_EMAILS;
  if (!team || !aud || !emails) return null;
  // Only a Cloudflare Access team hostname, not a caller-controlled JWKS URL.
  if (!/^[a-z0-9-]+\.cloudflareaccess\.com$/i.test(team)) return null;
  const allow = emails.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (!allow.length || !aud.trim()) return null;
  return { team: team.toLowerCase(), aud: aud.trim(), allow };
}
export async function verifyAccess(request, env, fetchJwks = fetch) {
  const config = configured(env);
  if (!config) return { ok: false, status: 403, error: "Admin authentication not configured" };
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token || token.length > 8192) return { ok: false, status: 401, error: "Access token required" };
  try {
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("Invalid JWT");
    const header = decodeJson(parts[0]);
    const payload = decodeJson(parts[1]);
    if (header.alg !== "RS256" || typeof header.kid !== "string") throw new Error("Unsupported JWT algorithm");
    const jwksResponse = await fetchJwks(`https://${config.team}/cdn-cgi/access/certs`);
    if (!jwksResponse.ok) throw new Error("Unable to retrieve signing keys");
    const jwks = await jwksResponse.json();
    const jwk = jwks.keys?.find((key) => key.kid === header.kid && key.kty === "RSA" && key.use !== "enc");
    if (!jwk) throw new Error("Unknown signing key");
    const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const signatureValid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, decodeBase64Url(parts[2]), encoder.encode(`${parts[0]}.${parts[1]}`));
    if (!signatureValid) throw new Error("Invalid signature");
    const now = Math.floor(Date.now() / 1000);
    if (payload.iss !== `https://${config.team}` || !Array.isArray(payload.aud) && payload.aud !== config.aud || Array.isArray(payload.aud) && !payload.aud.includes(config.aud) || !Number.isInteger(payload.exp) || payload.exp <= now || !Number.isInteger(payload.iat) || payload.iat > now + 60 || payload.nbf != null && (!Number.isInteger(payload.nbf) || payload.nbf > now) || typeof payload.sub !== "string" || !payload.sub) {
      throw new Error("Invalid claims");
    }
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    if (!email || !config.allow.includes(email)) return { ok: false, status: 403, error: "Administrator not authorized" };
    return { ok: true, email };
  } catch {
    return { ok: false, status: 401, error: "Invalid or expired Access token" };
  }
}
