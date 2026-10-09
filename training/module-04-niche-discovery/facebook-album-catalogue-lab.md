# Module 04 Practical Lab — Facebook Albums to a Verified Service and Product Catalogue

## Objective
Teach a learner to inspect a business's Facebook albums and photo posts, identify advertised services, physical products, bundles and promotions, extract grounded descriptions and prices, and build a source-linked catalogue for a proposed website and admin panel.

**Case study:** Bella Chica Beauty Studio — Santa Maria, Bulacan branch.
**Starting URL:** https://www.facebook.com/bellachicastamariabulacan/photos
**Status:** Example based on a user-provided Facebook page screenshot; complete album audit has NOT yet been performed.

## Requirements and permissions
- Browser with access to publicly available Facebook business content, or the learner's own normal Facebook login if needed.
- Screenshot tool and spreadsheet editor.
- No Facebook API token, ChatGPT Work or Codex required.
- Only view material you are authorized to access. Do not bypass login gates, CAPTCHAs, rate limits or platform protections.
- Do not use unapproved automated scraping or browser extensions to extract Facebook data in violation of its terms.
- Record business-level public information only. Avoid client identities, faces, personal profiles, testimonials or sensitive information.
- Do not download, redistribute, or publish the business's logos and photos on a client website without authorization or an appropriate license. For research, retain source URLs and minimal evidence; obtain written permission for production use.

## Step-by-step student procedure
1. **Create the lead record.** Record business name, branch, page URL, date checked, and reviewer. Check the About tab for official website and booking links; do not conclude 'no website' from the Photos tab alone.
2. **Inventory albums.** Open the Photos tab and then Albums if available. List each accessible album title, URL, approximate photo count if displayed, and status (reviewed / inaccessible / not reviewed). If there is no Albums view, record that and inspect accessible photos/posts individually.
3. **Inspect each accessible photo/post.** Open the photo to read its caption and publication date, if shown. Inspect image text, but do not infer details hidden or illegible. Capture the direct post/photo URL and album URL.
4. **Extract offerings.** Identify each distinct service, product, package, promotion or informational post. Transcribe the displayed name, category, description, price, currency, conditions and dates exactly as visible. Separate regular prices from promotional prices.
5. **Track evidence.** Enter one source observation per photo/post. Link each field to its source and label evidence as image text, caption, About section or official website. If only a screenshot is supplied, record the screenshot reference and that a direct source URL is pending.
6. **Normalize catalogue items.** Combine repeated mentions of the same offering into one catalogue entry while preserving every supporting source observation. Keep branches separate when pricing or availability differs.
7. **Verify conflicts.** Compare older and newer prices; flag discrepancies, expired promotions and missing terms. Never automatically treat the newest visible price as current. Set 'Needs business confirmation' where appropriate.
8. **Check completeness.** Reconcile the album inventory against inspected items; count reviewed, inaccessible and remaining photos. Never claim 'all albums' unless every accessible album/photo has been accounted for.
9. **Prepare website data.** Map confirmed services to Services, physical goods to Products, packages/promotions to Offers, and licensed/approved photos to Gallery. Include admin CRUD fields and a published/unpublished flag.
10. **Quality review and approval.** Check source links, typos, price currency, branch, permissions, and freshness. Ask the business to confirm catalogue and authorize media before publishing.

## Required data schema
### Album inventory
business_id | branch | album_title | album_url | visible_photo_count | reviewed_photo_count | inaccessible_count | review_status | reviewer | checked_at | notes

### Source observations (one row per photo/post offering)
observation_id | business_id | branch | album_url | photo_or_post_url | screenshot_reference | post_date | evidence_type | raw_text | offering_type | offering_name | description | price_text | amount_php | price_type (regular/promo/starting/from/unknown) | conditions | promotion_end | confidence | checked_at | reviewer

### Normalized catalogue
item_id | business_id | branch | type (service/product/package/promotion) | name | category | short_description | full_description | price_php | price_label | currency | duration | inclusions | exclusions | source_urls | last_observed | current_price_confirmed (yes/no) | media_permission (unknown/granted/denied) | verification_status | website_publish_status

**Missing data:** use 'Not stated' or blank with a verification note, never invent details. Price figures must not be extrapolated from unrelated services.

## Screenshot-based case study — cover photo only
From the supplied Facebook screenshot:
- Page: Bella Chica Beauty Studio - Santa Maria Bulacan Branch
- Advertised hours: Monday–Sunday, 10 AM–7 PM
- Public business phone shown: 0977 218 5320
- Category: Beauty, cosmetic & personal care
- Services and prices shown in the cover image (PHP): Sexy Brows 2,499; Men Brows 2,499; Ombre Brows 3,499; Microblading 1,999; Combo Brows 2,599; Top Eyeliner 1,499.
- These are **historically observed advertised prices**, not confirmed current prices.
- Album review status: NOT STARTED. Website and Tier 1 classification: UNVERIFIED.
- Source reference: user-supplied Facebook screenshot and https://www.facebook.com/bellachicastamariabulacan/photos (individual photo URL pending).

## Quality control / acceptance checklist
- [ ] Main page, About, and website links checked
- [ ] All accessible albums inventoried
- [ ] Every accessible photo accounted for, with inaccessible items counted separately
- [ ] Captions and image text examined, source URLs saved
- [ ] Services, products and promotions distinguished
- [ ] Duplicate offerings consolidated without deleting evidence
- [ ] Each price linked to a dated source and marked unconfirmed unless validated
- [ ] Unclear text, conflicting prices and missing information flagged
- [ ] Photos/logos cleared for reuse before publication
- [ ] Catalogue reviewed by business owner before going live
- [ ] Student can reproduce the steps on a second business

## Common problems
- **Facebook login required:** Use your own browser and provide permitted screenshots or manually recorded notes; do not share passwords or session cookies.
- **Album list missing:** Review visible photos and posts; note that album completeness cannot be established.
- **Old promotional image:** Capture the date and conditions; mark as historical/needs confirmation.
- **Photo with no caption:** Extract only legible image text and label evidence accordingly.
- **Conflicting prices:** Retain both source observations and request confirmation.
- **Photos show customers:** Do not extract customer identities or republish customer photos without consent.

## Instructor demonstration
Show one album inventory row, three source observations, and one normalized catalogue item. Explain why one image can advertise several services, and why several images can describe the same service. Demonstrate a missing-price case and an outdated-promotion case.

## Next practical milestone
Student supplies screenshots or publicly accessible individual photo/post URLs, preferably one album at a time. Populate the observations and catalogue, then perform a completeness audit before website design.
