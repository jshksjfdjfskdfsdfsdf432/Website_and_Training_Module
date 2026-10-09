# Real annotated screenshot rollout — Modules 03 and 04

## Source and provenance
Five screenshots were supplied in the current ChatGPT project conversation:
- Cloudflare project setup (image.png)
- Cloudflare Worker overview (image(1).png)
- Cloudflare domains (image(2).png)
- Cloudflare deployments (image(3).png)
- Bella Chica Beauty Studio Facebook page (image(4).png)

They have been annotated with numbered yellow callouts. They are genuine learner-provided screenshots, not AI-generated or reconstructed interfaces. Their screen contents are historical, and should not be treated as current UI instructions without verification.

## Files prepared for upload
The annotated JPEGs are available in a separate ZIP generated in ChatGPT. They **are not committed to GitHub yet**, because the available GitHub integration accepts UTF-8 text but not binary image uploads.

Extract the ZIP and upload these five files through GitHub's Add file → Upload files interface, preserving the exact directory paths:
- website/assets/screenshots/m03-01-cloudflare-setup.jpg
- website/assets/screenshots/m03-02-cloudflare-overview.jpg
- website/assets/screenshots/m03-03-cloudflare-domains.jpg
- website/assets/screenshots/m03-04-cloudflare-deployments.jpg
- website/assets/screenshots/m04-01-bella-chica-facebook.jpg

**Before uploading:** inspect the images and redact any personally identifying or sensitive account details you do not want in the repository or publicly served on the Worker. Do not publish third-party copyrighted business photographs without authorization. In particular, Bella Chica's Facebook screenshot includes its branding and promotional photography; use for internal training review only until rights/permission have been assessed.

## How website display works
- Module 03: actual screenshots are mapped to steps 1–4, with captions explaining when a screenshot is related but not an exact match.
- Module 04: the Bella Chica screenshot is mapped to business verification and price extraction. It does not substitute for an actual About or album screenshot.
- If an asset is missing, the website displays the original **labeled mockup** instead of a broken image.
- Modules 00–02 still need actual authorized setup screenshots.
- Worker uses the Cloudflare static assets binding configured in wrangler.toml.

## Deployment and verification
1. Review and merge this branch after checking Wrangler static asset compatibility.
2. Upload the five image files to the specified paths (on a branch and merge, or directly to main after review).
3. Wait for GitHub → Cloudflare automatic deployment.
4. Open Module 03, navigate steps 1–4, and verify real annotated images display.
5. Open Module 04, navigate steps 2 and 4, and verify the Bella Chica screenshot displays with caveats.
6. Check mobile sizing, image alt text, navigation, and /health.
7. Verify that any unavailable screenshot displays a labeled mockup rather than pretending to be real evidence.

## Remaining work
Capture actual screenshots for Modules 00–02; obtain a true Cloudflare Git-connection screenshot and deployment configuration screenshot; capture Facebook About and Albums screens with permission; replace each related-but-not-identical screenshot after verification.
