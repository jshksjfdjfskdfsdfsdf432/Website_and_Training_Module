# Training Academy v1 — Review and verification

## Scope
A responsive training website served by the existing Cloudflare Worker. No new framework, database or paid service is required.

## Pages and features
- Module sidebar for Modules 00–12, with completed status and planned labels.
- Lesson pages for Modules 00–04 with step-by-step activities, practical exercises, evidence/screenshot instructions and source links.
- Progress indicator based on completed available lessons.
- Completion checkbox and toggle, persisted in browser localStorage.
- Mobile navigation and /health endpoint.
- Future Modules 05–12 are explicitly marked planned.
- Evidence blocks are placeholders, not actual screenshots.

## Deploy
1. Review this branch and merge its pull request into main.
2. Wait for Cloudflare's connected GitHub deployment to report Ready.
3. Visit https://website-and-training-module.cmrecto007.workers.dev
4. Visit /health and check status=ok and app=training-academy-v1.

## Acceptance tests
- [ ] Desktop sidebar navigates Modules 00–12.
- [ ] On mobile, the menu opens and closes after selecting a module.
- [ ] Each of Modules 00–04 displays a lesson, exercise, screenshot/evidence placeholder and resource link.
- [ ] Modules 05–12 are labeled planned and cannot be marked complete.
- [ ] Mark Module 00 complete; count changes from 0/5 to 1/5.
- [ ] Refresh page; completion remains in the same browser.
- [ ] Mark incomplete; count decreases.
- [ ] Hash navigation (#module-03) loads Cloudflare lesson.
- [ ] /health returns HTTP 200 JSON.
- [ ] Confirm no secrets, personal photos or Facebook credentials are stored.

## Limitations
- Progress is local to the browser; clearing site data removes it. There is no authentication or cloud synchronization.
- Screenshots and image galleries are not uploaded yet; each lesson describes the evidence to capture.
- Lessons are concise adapted summaries; full detail remains in repository Markdown.
- Module 04 album-extraction lesson and prompts were proposed in PR #3 and must be merged separately before the source links work on main.
- Completion is self-attested and not instructor-verified.
- The project has no CMS/admin panel yet.

## Next iteration
Add actual authorized screenshots, instructor walkthroughs, searchable lessons, quizzes, downloadable templates, and then user accounts and synced progress after database design.
