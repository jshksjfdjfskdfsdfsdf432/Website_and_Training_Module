# Lesson 07.2 — Customize Cloudflare D1 columns with AI or a visual designer

**Status:** Training documentation. The AI-assisted workflow can be requested now; the visual designer is a planned feature and is not implemented.

## Learning objectives
- Distinguish a database column from an admin form field.
- Describe a schema change in plain language.
- Review a migration and confirm API, UI, and tests change together.
- Understand why database schema changes require backups and approval.

## Option A — Ask ChatGPT to customize database columns (recommended today)
1. Describe the table, column names, data types, and intended use.
2. ChatGPT inspects the existing D1 schema and relevant Worker APIs.
3. ChatGPT drafts an additive migration, tests, API updates, admin-form updates (when available), and documentation.
4. Review the proposed pull request, including the impact on existing records.
5. Apply and test migrations against a local database first.
6. After approval and backup planning, apply to a separately configured remote database if required.

**Example request:** “In our Products catalogue, add SKU (optional text), unit (text), cost price and selling price (integer centavos), stock quantity (non-negative integer), and supplier name (optional text). Inspect the repository, implement and test on a feature branch, and open a PR. Do not merge, run remote migrations, or deploy without approval.”

**Exercise A:** Draft a prompt to add an optional `sku` column to `catalog_items`. Check that the proposed API and tests handle missing SKU values.

## Option B — Visual Database Designer (planned admin feature)
The proposed authenticated admin experience will let authorized administrators:
- Choose an approved business data entity, such as Products or Services.
- Add or edit **custom fields** with a display name, internal identifier, and supported type: text, number, currency, date, or boolean.
- Set optional/required status and safe default values.
- Preview validation rules and how fields appear on forms.
- Request a reviewed change before it affects live data.

**Important distinction:** A form-field designer does not automatically mean arbitrary physical D1 columns are safe to add at runtime. Implementation should prefer metadata-defined custom fields with validated storage for flexible business-specific attributes, while core schema changes use versioned migrations.

**Exercise B:** Design a Products field list with SKU, Selling Price, Stock Quantity, and Supplier. Explain which are core database columns and which could be metadata-defined custom fields.

## Optional advanced method — Cloudflare D1 SQL console
An administrator can use the Cloudflare dashboard's D1 SQL console to run authorized SQL, but direct edits can drift from the GitHub migrations and application code. This is for supervised troubleshooting or migrations, not the default workflow.

Example for a local/test database:
```sql
ALTER TABLE catalog_items ADD COLUMN sku TEXT;
```
Do not execute the example on a production database without checking whether the column already exists, backing up data, and coordinating the matching application changes.

## Safety and verification checklist
- [ ] Table and proposed fields are identified
- [ ] Existing data and migration compatibility are reviewed
- [ ] Sensitive and personal data requirements are assessed
- [ ] Permissions are enforced server-side
- [ ] SQL uses approved identifiers and parameterized values
- [ ] Local migration and rollback/recovery plan are documented
- [ ] API and admin forms support the new fields
- [ ] Automated tests cover missing and invalid values
- [ ] Remote changes require explicit owner approval

## Current project status
The Module 07 D1 prototype stores a published sample catalogue locally. No production D1 database or dynamic schema editor has been deployed. The Module 08 admin dashboard is a preview only; authentication and CRUD are not yet implemented.
