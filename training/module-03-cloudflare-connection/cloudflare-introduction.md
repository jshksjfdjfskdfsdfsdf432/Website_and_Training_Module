# Module 03 — Cloudflare introduction and real-world examples

## Learning objectives
By the end of this lesson, learners can describe Cloudflare, explain five core services, identify documented customer examples, and distinguish Cloudflare security/CDN use from Cloudflare Workers hosting.

## Short company biography
Cloudflare is a US internet infrastructure and cybersecurity company founded in 2009 by Matthew Prince, Michelle Zatlyn and Lee Holloway. Its services launched publicly in 2010. Cloudflare provides DNS, content delivery, DDoS mitigation, web application firewalls, Zero Trust access, and developer infrastructure including Workers.

## Why Cloudflare in this course?
Our workflow is ChatGPT (planning and repository edits) → GitHub (source control) → Cloudflare (build and hosting). We will deploy a minimal demo first, then the actual website. Some Cloudflare customers use CDN or security without hosting their entire application on Workers.

## Ten documented websites/apps using Cloudflare
This is an illustrative selection, **not a ranking of the ten largest customers**. The cited pages are Cloudflare's own customer case studies; product usage may change.

| Website/app | Documented Cloudflare use | Source |
|---|---|---|
| Canva | CDN, WAF, DDoS, Workers, Zero Trust | https://www.cloudflare.com/case-studies/canva/ |
| Shopify | Commerce security, performance and personalization | https://www.cloudflare.com/case-studies/shopify/ |
| Zendesk | CDN, DDoS protection, bot management, WAF | https://www.cloudflare.com/case-studies/zendesk/ |
| HubSpot | SSL certificates and network performance | https://www.cloudflare.com/case-studies/hubspot/ |
| Stack Overflow | WAF, DDoS protection, bot management, Workers | https://www.cloudflare.com/case-studies/stack-overflow/ |
| CrazyGames | CDN, DNS, Workers, Images and DDoS protection | https://www.cloudflare.com/case-studies/crazygames/ |
| Hack The Box | WAF, CDN, Workers, Zero Trust | https://www.cloudflare.com/case-studies/hack-the-box/ |
| Picsart | WAF, DDoS mitigation and rate limiting | https://www.cloudflare.com/en-ca/case-studies/picsart/ |
| Skyscanner | Zero Trust and internal application access | https://www.cloudflare.com/en-au/case-studies/skyscanner/ |
| Polestar | Workers and global CDN for digital retail | https://www.cloudflare.com/case-studies/polestar/ |

## Key terminology
- **DNS:** Connects domain names to network destinations.
- **CDN:** Delivers cached content from locations near users.
- **DDoS mitigation:** Helps absorb and block disruptive attack traffic.
- **WAF:** Filters malicious HTTP requests using configurable rules.
- **Workers:** Runs application code on Cloudflare's serverless runtime.
- **Zero Trust:** Restricts access to applications based on identity and context.

## Instructor presentation outline
1. What is Cloudflare? (company background)
2. How DNS, CDN and security fit together
3. Cloudflare Workers and the GitHub deployment workflow
4. Ten documented customer examples (two slides)
5. CDN/security versus actual application hosting
6. First-time account creation and MFA
7. GitHub authorization and repository permissions
8. Demo deployment, verification and troubleshooting

## Learner exercise
Choose three examples from the table. For each, identify the business problem and Cloudflare product mentioned in its case study. Explain which service our own website will use and why.

## Completion checklist
- [ ] Read the introduction and definitions
- [ ] Verify three customer case studies
- [ ] Explain the difference between CDN and Workers hosting
- [ ] Complete the account and GitHub connection exercise
- [ ] Capture screenshots of the actual setup process (avoid exposing tokens or account secrets)
- [ ] Finalize presentation slides and instructor guide
