# Module 05 — Requirements and system architecture

**Status:** Draft for review. No new business website code has been deployed.

## Learning outcomes
By the end, learners can define a minimum viable website, distinguish public and admin functions, draw a data model, explain security boundaries, and compare candidate stacks before coding.

## Prerequisites
Complete Modules 00–04 or review the existing repository, Cloudflare deployment and business lead-research workflow.

## Visual walkthrough and practical steps
### Step 1 — Inspect existing project
Open GitHub → `Website_and_Training_Module` → `website/`, `training/`, `docs/` and `project-management/`.
**Expected:** Learner identifies which files power the live ModuleLab training Worker.

### Step 2 — Review product requirements
Open `docs/architecture/module-05-requirements.md`.
**Expected:** Learner distinguishes public pages from admin CRUD, and understands Release 1 exclusions.

### Step 3 — Map user roles
Draw Visitor → Public site, Admin/Editor → protected dashboard, Learner → training website.
**Expected:** Admin content changes require authentication and server authorization.

### Step 4 — Draw the architecture
Open `docs/architecture/module-05-system-design.md` and inspect the Mermaid diagram.
**Expected:** Learner identifies frontend, API, database, media and existing training Worker.

### Step 5 — Study the ERD
Find BUSINESS, CATALOG_ITEM, CATEGORY, MEDIA, INQUIRY and ADMIN_USER relationships.
**Expected:** Learner can explain how an item is linked to a category and approved images.

### Step 6 — Evaluate technology choices
Compare a Cloudflare-compatible React/Next.js solution, relational database, authentication and object storage.
**Expected:** Learner can explain why versions and runtime compatibility must be tested before selection.

### Step 7 — Define acceptance tests
Write one test for publishing a service, one for unauthorized admin access, and one for inquiry submission.
**Expected:** Tests are observable and can be reproduced by another learner.

## Hands-on exercise
Create a requirements brief for a sample beauty studio, dental clinic or interior fit-out business. Define 6 public pages, 5 admin capabilities, 3 user roles, 6 data entities, 3 security controls and 5 acceptance tests. Do not reuse real client photos without permission.

## Evidence to capture
- GitHub screenshot of requirements document
- Mermaid architecture and ERD diagrams
- Completed feature-priority worksheet
- Written technology decision with tradeoffs

## Instructor notes
Use Module 04's Bella Chica case as an example, but do not claim the business has approved a website. Explain why its advertised prices are not necessarily current and why media permission must be recorded. Walk learners through one requirement and trace it to database fields and an acceptance test.

## Knowledge check
1. Why must admin authorization be checked on the server?
2. What is the difference between a service catalogue and checkout?
3. Why are database and authentication providers still candidates?
4. What evidence proves a requirement is implemented?
5. Why must the training website remain operational during development?

## Completion criteria
Requirements and ERD reviewed, tradeoffs documented, exercise and verification checklist completed. Actual product development begins after architecture review.
