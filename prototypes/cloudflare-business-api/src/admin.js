export function requireAdmin(request, env) {
  // Fail closed until an external identity provider and server-side session
  // verification are integrated and tested. Never trust a browser-supplied role.
  return new Response(JSON.stringify({ error: "Admin authentication is not configured" }), {
    status: 403,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

export function adminDashboardHtml() {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>ModuleLab Admin — Preview</title>
<style>
body{font-family:system-ui,sans-serif;margin:0;background:#f3f6fb;color:#172b4d}
header{background:#173d74;color:white;padding:1.4rem 2rem}
main{max-width:950px;margin:2rem auto;padding:0 1rem}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1rem}
article{background:white;border:1px solid #d9e3f1;border-radius:12px;padding:1.3rem}
small{color:#586a82}h1{margin:.2rem 0}
.notice{background:#fff6dc;border:1px solid #edcf82;padding:1rem;border-radius:8px;margin:1rem 0}
a{color:#195da9}
</style></head><body><header><strong>ModuleLab Business Admin</strong></header>
<main><h1>Admin dashboard preview</h1><p class="notice">Design preview only. Sign-in and editing are disabled until secure authentication is implemented.</p>
<div class="cards"><article><h2>Business profile</h2><small>Business name, locations, hours and social links</small></article>
<article><h2>Services</h2><small>Manage services, descriptions and price labels</small></article>
<article><h2>Products</h2><small>Manage catalogue and categories</small></article>
<article><h2>Media library</h2><small>Organize approved photos and attribution</small></article>
<article><h2>Inquiries</h2><small>View customer requests after access controls are ready</small></article>
<article><h2>Settings</h2><small>Roles, security and audit logs</small></article></div>
<p><a href="/health">API health</a> · <a href="/api/catalog">Sample catalogue</a></p>
</main></body></html>`;
}
