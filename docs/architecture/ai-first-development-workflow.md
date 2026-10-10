# AI-first development workflow

## Goal
Minimize manual coding while building a secure, maintainable business website and the matching ModuleLab training curriculum. ChatGPT uses the authorized GitHub integration to propose changes; the repository remains the source of truth.

## Division of responsibility
| ChatGPT | Project owner |
|---|---|
| Inspect existing files and dependencies before edits | Approve requirements and important design choices |
| Write implementation, migrations, tests, and lesson documentation | Connect accounts and grant only needed permissions |
| Work in feature branches and create reviewable pull requests | Review PRs and verify browser experience |
| Explain commands only when local verification is necessary | Approve production deployment and sensitive changes |
| Report tested versus untested behavior accurately | Own credentials, billing and external-service configuration |

## Standard feature cycle
1. Owner describes desired behavior in plain language.
2. ChatGPT inspects repository and identifies impacted files.
3. ChatGPT writes a short acceptance checklist.
4. ChatGPT creates a feature branch and implements the smallest complete slice.
5. ChatGPT adds tests, security checks, documentation and the matching training lesson.
6. ChatGPT runs available verification; if remote-only tests cannot be run, mark them pending.
7. ChatGPT opens a PR explaining changes, risks and exact verification steps.
8. Owner approves; changes merge and deploy only to the authorized environment.
9. Verify the live behavior and capture screenshots for the lesson.

## Guardrails
- Do not request passwords, tokens, session cookies or production secrets in chat.
- Never commit .env files, secrets, customer records or unauthorized business imagery.
- No automatic merges, production deployments, schema-destructive migrations or billing changes without explicit approval.
- Preserve the live ModuleLab training Worker while business application development remains isolated.
- Database access, authentication and admin permissions must be enforced server-side.
- Prefer managed, documented services; keep cost and lock-in decisions visible.
- A passing unit test is not proof of end-to-end runtime or production readiness.
- Avoid generating large speculative codebases; implement vertical slices with measurable acceptance criteria.

## Module 06 next gates
1. Owner confirms `npm run dev` runs the isolated Cloudflare Worker locally.
2. Select a database and authentication provider after checking current compatibility, cost and security requirements.
3. Create an isolated persistent catalogue API with migrations, seeded demo data and tests.
4. Add authenticated admin read/write operations and audit logging.
5. Add the first responsive business site pages, then repeat the training documentation workflow.

## Request template
**Feature:** [plain-language outcome]

**Who uses it:** [visitor/admin]

**Expected behavior:** [what should happen]

**Acceptance checks:** [observable results]

**Constraints:** [do not change live website, privacy, permissions, budget]

**Instruction to ChatGPT:** Inspect the repository, implement on a feature branch, add tests and ModuleLab lesson updates, open a PR, and report any checks that could not be run. Do not merge or deploy without approval.
