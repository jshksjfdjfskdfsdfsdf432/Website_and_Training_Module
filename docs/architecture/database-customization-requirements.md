# Database customization — functional requirements and implementation plan

## Scope
Support two complementary ways for business owners to tailor product and service information:
1. **AI-assisted schema updates:** owner describes requirements; ChatGPT prepares reviewed version-controlled migrations, API/form updates and tests.
2. **Visual field designer:** authenticated authorized admins configure business-specific fields through the application without writing SQL.

The Cloudflare D1 SQL console is a documented optional advanced route, not the normal end-user experience.

## Security and architecture
- Treat physical D1 schema as version-controlled infrastructure. Never expose unrestricted SQL or direct DDL execution through public/admin UI.
- Prefer a metadata-driven custom-field registry for flexible fields; store validated values using an appropriately indexed and scoped design chosen during implementation.
- Restrict custom fields to an allowlist of types and validation options; enforce max field counts, names, length, and data size.
- Enforce business/tenant scoping and permissions on the server. No trust in browser-submitted roles.
- Audit who proposed and approved field changes, and when. Prevent dangerous type changes/deletions without a migration and recovery plan.
- Protect sensitive data; do not store credentials, payment card details, or other secrets in custom fields.
- Provide previews, compatibility checks, and non-destructive changes by default.
- Avoid claiming live schema customization until authentication, persistence, and security tests exist.

## Planned UI
Admin > Settings > Data Fields
- Entity selector (Products, Services; more later)
- Current fields table with name, type, required, status
- Add field form with safe types: text, number, currency, date, yes/no
- Preview of generated business forms
- Review/apply workflow and audit history
- Field archival instead of destructive deletion by default

## Delivery phases
1. Training lesson and requirements (this PR).
2. Secure authentication and admin authorization.
3. Metadata schema and custom-field API with tests.
4. Visual field designer and dynamic product/service forms.
5. Change review, audit trail, backups and operational guidance.
6. Optional advanced migration-generation assistance for physical schema changes.

## Acceptance criteria
- Users can describe a field change to ChatGPT and receive a reviewable PR.
- An authenticated authorized admin can create a validated custom field and see it on the corresponding editor form.
- Unauthorized users cannot read protected metadata or mutate fields.
- Existing catalogue records remain readable after additions.
- Production changes are not silently deployed.
