export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ status: "ok", project: "Website_and_Training_Module" });
    }
    return new Response(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Website & Training Module — Deployment Demo</title>
<style>
:root{font-family:system-ui,sans-serif;color-scheme:light}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f9fc;color:#17233a}
main{max-width:650px;margin:24px;padding:36px;border-radius:18px;background:white;box-shadow:0 8px 30px #18263b12}
small{color:#666}h1{line-height:1.2}a{color:#145fc0}
</style>
</head>
<body><main>
<small>Cloudflare Workers · First Deployment</small>
<h1>Website & Training Module</h1>
<p>Our first website is live! This demonstration verifies the GitHub → Cloudflare deployment pipeline.</p>
<p>The production website and admin dashboard will be developed in later modules.</p>
<p><a href="/health">Check deployment health</a></p>
</main></body></html>`, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
  }
};
