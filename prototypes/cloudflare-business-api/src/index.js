import { getPublishedCatalog } from "./catalog.js";
const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" };
const respond = (body, status = 200) => new Response(JSON.stringify(body), { status, headers });
export async function handleRequest(request, env = {}) {
  const path = new URL(request.url).pathname;
  if (request.method !== "GET") return respond({ error: "Method not allowed" }, 405);
  if (path === "/health") return respond({ ok: true, service: "modulelab-business-api-poc" });
  if (path === "/api/catalog") {
    try {
      const result = await getPublishedCatalog(env.DB);
      return result.error ? respond({ error: result.error }, result.status) : respond(result);
    } catch {
      return respond({ error: "Database unavailable" }, 503);
    }
  }
  if (path.startsWith("/admin")) return respond({ error: "Authentication not configured" }, 403);
  return respond({ error: "Not found" }, 404);
}
export default { fetch: handleRequest };
