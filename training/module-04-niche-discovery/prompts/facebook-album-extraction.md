# Reusable ChatGPT Prompts — Facebook Album Catalogue Extraction

These prompts work with screenshots, copied public post text and photo/post URLs that ChatGPT can actually access. ChatGPT cannot automatically access private Facebook content or guarantee a complete album crawl.

## Prompt A — Inventory an album
```text
You are a business catalogue researcher preparing a training exercise and a website requirements dataset.

Business: [BUSINESS NAME]
Branch: [BRANCH]
Facebook page: [PAGE URL]
Album name and URL: [ALBUM NAME / URL]
Evidence provided: [SCREENSHOTS / PHOTO LINKS / COPIED CAPTIONS]
Research date: [YYYY-MM-DD]

Review only the evidence I supply or content you can actually access. Do not claim you opened photos or albums you could not access. First create an album inventory: album name, source URL, visible photo count (only if shown), photos inspected, inaccessible/uninspected photos and completeness status. Ask me for the next screenshots if coverage is incomplete.

Do not identify customers in photos, infer sensitive details, or copy/download business media for republication.
```

## Prompt B — Extract every offering from photos
```text
Using the Facebook business screenshots, captions and post links I provide, extract every explicitly advertised SERVICE, PHYSICAL PRODUCT, PACKAGE or PROMOTION.

For each observation, return a table with:
business | branch | offering type | exact displayed name | category | factual description | price as shown | normalized PHP amount | regular/promo/from/unknown | conditions | post date if visible | album URL | individual photo/post URL if provided | screenshot ID | evidence location (image text/caption) | confidence | missing information.

Rules:
1. Do not invent names, descriptions, prices, durations, inclusions or dates.
2. If a price is missing, write 'Not stated'.
3. Do not treat historical advertised prices as confirmed current prices.
4. Distinguish 'starting at', promotional and regular prices.
5. If one photo lists six services, extract six separate observations.
6. If the same service appears in multiple photos, retain every source observation and propose one normalized catalogue item with all supporting source references.
7. Flag unreadable text, contradictions and branch ambiguity.
8. Do not identify people or extract private personal information.
9. Finish with counts: photos supplied, photos inspected, offerings extracted, ambiguous items, and items needing verification.
```

## Prompt C — Normalize and build website-ready catalogue
```text
Transform the verified observation table into a website-ready catalogue for [BUSINESS NAME] [BRANCH].

Return separate sections for Services, Products, Packages/Promotions, and Gallery candidates. For each catalogue item include a stable item ID, title, category, short description grounded in the sources, long description only where evidence supports it, displayed price and price label, source URLs, last observed date, verification status, media permission status and publish status.

Deduplicate equivalent items but preserve a source-to-item mapping. Never publish unverified pricing as current. Mark all photos as permission pending unless the business explicitly authorizes their use.

Then propose admin-panel fields, a data validation checklist, and the specific questions the business owner must answer before publication.
```

## Prompt D — Training reproducibility audit
```text
Audit our Facebook album research for completeness and reproducibility. Compare the album inventory, supplied screenshots, extracted observations and normalized catalogue.

List missing albums/photos, source links without evidence, prices without dates, possible duplicate offerings, unresolved branch conflicts, permissions needed, and any unsupported assumptions.

Give a step-by-step student checklist that another learner could follow with their own business page. State clearly what has been verified and what remains unknown.
```

## Worked example: Bella Chica
Paste Prompt B with the user-provided Santa Maria branch cover screenshot. Six services are legible: Sexy Brows ₱2,499, Men Brows ₱2,499, Ombre Brows ₱3,499, Microblading ₱1,999, Combo Brows ₱2,599, Top Eyeliner ₱1,499. These are cover-photo observations only, not a full album audit or confirmed current prices.
