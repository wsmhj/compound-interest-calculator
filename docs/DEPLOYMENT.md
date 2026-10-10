## 2026-10-10 — Source release preparation

User authorized pushing and deploying the complete source. Remote `origin/main` was inspected at `d0e3af7` before the first source push. Added static Vercel source-build configuration (`npm ci`, `npm run build`, output `out/`) and ignored `.vercel/`; no calculator behavior or page copy changed in this release step.

The complete staged source was exported with `git checkout-index` into an independent new temporary directory outside the workspace. Windows / Node 22.22.0 / npm 10.9.4: fresh `npm ci`, all 28 tests, TypeScript, ESLint and production build passed; installation audit reported zero known vulnerabilities. No existing node_modules or build cache was reused. Credential-pattern scan and staged file review excluded local evidence, caches and credentials; tracked environment files contain public metadata only.

Prior working deployment for recovery: `dpl_J78tuuyoTZHhcK4jPsAx5RYhEA5e`. Production origin remains https://compound-interest-calculator.co. Push and cloud-build results will be recorded separately after completion. Existing QA limitations and the planned October 14 framework-security follow-up remain applicable.

## Current release — 2026-10-10 (supersedes historical status below)

- Published the static `out/` artifact to Vercel project `compound-interest-calculator`, scope `maojunjuns-projects`. Deployment: `dpl_J78tuuyoTZHhcK4jPsAx5RYhEA5e` (READY).
- Public release: https://compound-interest-calculator-ecru-xi.vercel.app . No source commit or Git push performed.
- Connected `compound-interest-calculator.co`: added the sole apex A `@` → `76.76.21.21` (TTL 30 minutes) in Spaceship after its security check completed. Existing DNS list had zero records. Nameservers remain launch1/launch2.spaceship.net; no unrelated records/services changed. Vercel verifies the domain as valid and attached; it optionally recommends newer IPs, but accepts this configured address. Certificate issuance succeeded.
- HTTPS production alias: seven content routes, robots.txt, sitemap.xml and llms.txt return 200; unknown route returns 404. No noindex response header observed. Browser confirms index/follow and canonical https://compound-interest-calculator.co/.
- Homepage Title now 53 characters; Description 154. Monthly/yearly guidance stays on homepage. Build passed; browser verified monthly $1,104.71 and yearly $1,100.00 for $1,000 / 10% / one year / no deposits. Growth, goal and withdrawal default results match local benchmarks; no browser console errors captured.
- Evidence: `docs/evidence/local/production-browser-audit.json`, `production-home.png`, `monthly-yearly-audit.json`, `monthly-yearly-copy.png`. Native Save As, other browser engines/real devices and the October 14 framework-security follow-up remain outstanding as previously documented.
- Custom-domain verification completed using curl with normal certificate validation, direct connection pinned to the DNS-verified Vercel address: all seven content routes and robots/sitemap/llms return 200, missing page 404, correct metadata and HSTS, no noindex header. Evidence: `production-http-audit.json` and `domain-dns.png`. The current system proxy/browser route still fails the custom-domain connection; no proxy settings or TLS protections were changed. Browser functional smoke testing used the working Vercel alias. No Search Console submission performed.

## Historical pre-release test status — 2026-10-10

Sole website name: Compound Interest Calculator. Homepage Title 45 characters / Description 148; canonical and production indexing verified in the static build. Final check/build pass (28 automated tests), plus 283 browser checks. Generated PNG/CSV contents and browser-printed PDFs verified. Native Save As final completion still awaits the user; public domain/TLS/headers have not been tested. This supersedes older blanket print-content gaps below. Browser/real-device and October 14 framework-security follow-ups remain documented in QA-REPORT.

## Policy release follow-up — 2026-10-10

Static site now includes seven content routes: /, /about/, /contact/, /privacy/, /terms/, /cookies/, /disclaimer/. Sitemap and llms.txt include both new policy pages. Detailed policies reflect current browser-only calculations and voluntary correspondence. Before public operation, verify actual hosting/security logs and their retention, email retention practice, processing/transfer locations and any required safeguards, and applicable website/operator identity disclosures. Postal addresses and developer details are intentionally omitted from public pages at the user's request; do not claim this resolves every jurisdiction's disclosure requirements. New ads, analytics, accounts or payments require corresponding notice and consent review before introduction.

## Latest status — 2026-10-10

Domain supplied and configured: https://compound-interest-calculator.co. Production export contains correct indexable metadata, canonical URLs, robots Sitemap reference and absolute entity/llms links. No deployment performed. Local preview retains its protective noindex HTTP header; older notes below describe the previous missing-domain state.

# Deployment status and preparation

2026-10-10: local preview only. No commit, push, hosting project, DNS changes or public deployment performed. User-confirmed public origin: https://compound-interest-calculator.co. Production metadata is configured and verified; hosting/DNS/TLS have not been deployed or verified. Existing initial commit: `d0e3af7`; implementation remains in the working tree. No known previously deployed version exists to restore.

## GEO audit readiness (2026-10-10)

Local audit flags for HTTP, noindex and absent public canonical/sitemap origin are expected before launch. Configure the real HTTPS origin and indexing flag together, build again, deploy `out/`, and verify deployed headers do not include X-Robots-Tag:noindex. Metadata configuration has automated local/public coverage, but live HTTPS and crawler reachability have not been verified. `/llms.txt` is generated in the static export. sameAs is intentionally absent until genuine external brand profiles are supplied; datePublished is omitted until there is a known publication date. Update `lib/content.ts` only after substantive content/methodology changes, not automatically on each build.

## Before public release

1. Recheck current Next.js security releases and update compatible patched dependencies. During this session the official [upcoming October 2026 security notice](https://nextjs.org/blog/upcoming-nextjs-security-update-october-2026) described an October 14 update; affected-version and patch details were not yet available. Static export does not by itself prove non-impact. An npm audit result is not a substitute for that follow-up.
2. Use the confirmed domain compound-interest-calculator.co and select the actual hosting target. Confirm actual operator/infrastructure facts that affect privacy disclosures. Do not copy the historical Catkind settings in the supplied SOP.
3. `.env.production` now sets `NEXT_PUBLIC_SITE_URL=https://compound-interest-calculator.co` and `NEXT_PUBLIC_ALLOW_INDEXING=true`. Ensure hosting environment overrides agree at build time. Rebuild, then inspect actual canonical, OG, Twitter, sitemap and robots HTML/headers. Hash scenarios retain the home canonical.
4. Resolve the remaining acceptance gaps in QA-REPORT and the competitor audit. Inspect the actual user-facing download and print-dialog behavior in the target browser.
5. If pushing is authorized, inspect branch/remotes/history and all staged content, exclude local evidence and credentials, then run `npm ci`, checks and build in an isolated clean directory. No clean-checkout claim is made for current local checks.
6. This project intentionally uses `output: 'export'`. Publish `out/` using a compatible static host; the SOP's ordinary Next runtime output rule does not apply to this explicitly chosen static build. Do not publish `scripts/preview.mjs` as the public server because its responses always carry noindex.
7. Verify HTTPS, canonical redirects, seven pages, assets, real 404 status, indexing policy and an actual calculation/export path on the deployed URL. Record deployment ID, commit and environment separately from push success.

## Recovery

For the first deployment there is no verified prior public version. Retain the last known good static artifact and its build-time environment. On later releases, use the hosting provider's previous deployment restore operation within user authorization, or create a traceable fix/revert commit. Verify the restored site and indexing configuration; do not force-push shared history.

Search Console ownership, sitemap submission, indexing and traffic observation have not been performed. No ranking or rich-result outcome is promised.
