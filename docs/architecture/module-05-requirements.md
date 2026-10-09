# Module 05 — Product requirements (draft v0.1)

## Purpose
Build a reusable, responsive business website and a secure content-management dashboard. Develop the real application and its reproducible training curriculum together in this repository.

## Personas
- **Visitor:** browse business information, services, product listings, galleries and contact options; submit inquiries.
- **Business administrator:** manage content, media, catalogue, business settings and inquiries.
- **Content editor (optional):** edit permitted content without access to account or security settings.
- **Instructor/student:** use the separate ModuleLab learning website and record training progress (currently local-browser only).

## Release 1: Public website
| ID | Feature | Acceptance criteria | Priority |
|---|---|---|---|
| WEB-01 | Home page | Business name, primary message, service highlights and contact CTA render on desktop/mobile | Must |
| WEB-02 | About | Editable business description and branding | Must |
| WEB-03 | Services | List/detail pages with category, description, optional displayed price/price qualifier and gallery | Must |
| WEB-04 | Products | Catalogue with category, description, optional displayed price and inquiry CTA; **no checkout** | Must |
| WEB-05 | Gallery | Categorized images with captions, alt text, attribution/permission metadata | Must |
| WEB-06 | Contact | Validated inquiry form with spam controls, consent notice and admin-visible record | Must |
| WEB-07 | Locations | Address, business hours and map links where provided | Should |
| WEB-08 | SEO | Metadata, semantic headings, canonical URLs, sitemap and robots rules | Must |
| WEB-09 | Accessibility | Keyboard navigation, visible focus, labels, alt text and WCAG 2.2 AA target | Must |
| WEB-10 | Responsive | Phone, tablet and desktop layouts | Must |

## Release 1: Admin
| ID | Feature | Acceptance criteria | Priority |
|---|---|---|---|
| ADM-01 | Authentication | Authorized users sign in securely; private admin routes are protected server-side | Must |
| ADM-02 | Roles | Admin and editor permissions enforced server-side, not only by hidden UI | Must |
| ADM-03 | Content CRUD | Draft/publish pages and edit text without modifying code | Must |
| ADM-04 | Catalogue CRUD | Create, edit, archive services/products/categories; maintain price labels and currency | Must |
| ADM-05 | Media | Upload, validate, organize and remove media; store rights/permission state | Must |
| ADM-06 | Inquiry inbox | Review, status, timestamps and restricted access; avoid exposing personal data publicly | Must |
| ADM-07 | Business settings | Update brand name, hours, locations and social links | Must |
| ADM-08 | Audit log | Record who changed content and when | Should |

## Constraints
- Preserve current Cloudflare Worker and ModuleLab training website during development.
- No hardcoded real client name, phone, logo or business photos in reusable templates.
- Only authorized photos and public business-level information may be published.
- Never present scraped or historical advertised prices as verified current prices.
- Avoid unnecessary collection of customer personal information.
- Prefer free-tier-compatible services while checking current limits and lock-in.
- Develop in feature branches; merge after review and test.
- Do not store passwords, API keys or tokens in the repository.

## Out of scope for Release 1
Online checkout, payment gateway, inventory deduction, shipping, customer login, multi-tenant billing, appointment calendar integrations, AI-generated customer testimonials.

## Open decisions
1. Single business per deployment or multi-tenant platform? **Proposed: single business per deployment** for Release 1.
2. Technology: Next.js/TypeScript versus lighter Cloudflare-native framework; validate actual deployment support first.
3. Database/auth provider: Supabase versus Cloudflare D1 + separate auth; evaluate security and costs.
4. Media hosting, image optimization, privacy retention and backup policies.
5. Contact form delivery and spam mitigation.
6. Business owner approval of catalogue, pricing and image rights.

## Definition of done
Requirements reviewed; architecture choice documented with tradeoffs; ERD and API contracts drafted; security/accessibility/privacy checklist created; proof-of-concept validates Cloudflare deployment; lesson and instructor materials prepared.
