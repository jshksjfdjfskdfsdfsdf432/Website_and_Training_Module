const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
const respond = (body, status = 200) => new Response(JSON.stringify(body), { status, headers });
export function handleRequest(request) {
  const path = new URL(request.url).pathname;
  if (request.method !== "GET") return respond({ error: "Method not allowed" }, 405);
  if (path === "/health") return respond({ ok: true, service: "modulelab-business-api-poc" });
  if (path === "/api/catalog") return respond({ demo: true, items: [{ id: "example-1", type: "service", name: "Example consultation", priceLabel: "Request a quote" }] });
  if (path.startsWith("/admin")) return respond({ error: "Authentication not configured" }, 403);
  return respond({ error: "Not found" }, 404);
}
export default { fetch: handleRequest };
