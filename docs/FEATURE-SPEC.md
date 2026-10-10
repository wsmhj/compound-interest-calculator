## 2026-10-10 — Latest user correction

Only one tool landing page: homepage compound interest calculator. Growth, savings goal and withdrawals are modes in the same module. Formula and Excel instruction are homepage sections. Four experimental standalone routes and related cards removed. Tool-page-only exact-phrase density3.5%–5%, >=1,000 English words, one H1 with nested H2–H4; see current QA and SOP4.1 for counting. This supersedes the expansion-page plan below.

## 2026-10-10 expansion

Current added scope, calculation conventions, layout and acceptance cases: [expansion specification](research/expansion-validation.md). Implemented: withdrawal planning, savings-goal solving, formula and Excel articles; homepage synonyms remain consolidated.

# Feature specification — before implementation

2026-10-10. Working brand: **Accrue** (original wordmark/artwork, no trademark clearance asserted). One savings-projection task. Research acceptance gaps remain in google-top10-audit.md.

## Inputs and results

Default illustrative scenario: USD10,000 initial, USD200 monthly, 20 years, nominal5% compounded monthly, end-of-period deposits, inflation0. Defaults are examples, not predictions/recommendations.

Primary: initial amount0–1e9; recurring amount0–1e9; deposits monthly or annually; years0–100 plus months0–11 with total<=1200; rate0–100%; nominal compounding annually/quarterly/monthly/daily365. Currency USD/EUR/GBP/CAD/AUD changes display only. Advanced: nominal vs APY; start/end contribution timing; annual inflation0–25%. APY ignores nominal frequency and explains why. Equal-month equivalent-rate model from keyword.md. Annual deposits at period start occur at months0,12,... only when duration includes that period; end deposits months12,24,...; partial years earn interest but do not create an end annual deposit.

Outputs: ending balance, total paid in, interest; effective yield; inflation-adjusted end purchasing power when >0; growth area/line chart with accessible table; annual/monthly detail rows. USD baseline and monthly case from research must pass. Model supports zero duration and zero rates; prevents output above1e15 for meaningful numeric precision.

## States and actions

- Live recalculation after edits. Invalid field shows adjacent error; invalid result/chart/actions replaced with clear correction prompt. Blank is invalid (all numeric fields, including0 optional defaults). Input editing preserves raw strings without currency masks.
- Advanced disclosure; explanatory labels; table view via buttons with aria-pressed; full CSV always monthly schedule regardless displayed view, clearly labeled.
- Reset restores example and removes share fragment. Share button produces versioned URL fragment only after validation. Treat URL content as untrusted: strict schema, bound length2048, version1, numeric ranges/enums. On corrupt fragment show warning and valid default example, never silently claim restoration.
- Copy summary/link via Clipboard API with success only after await. Fall back to selectable text in dialog. Async generation token prevents stale callback messages after changes or close.
- PNG1200x800 locally drawn card includes brand, assumptions, exact balance/contributions/interest, limits and simplified chart. Canvas path avoids remote image dependencies.
- Print: CSS print layout shows current assumptions, results and annual table, hides controls/nav/articles/dialog. Actual PDF verification required.
- Contact/feedback dialog with native dialog focus trap, Escape and focus restoration, selectable websiteaftersales@gmail.com, mailto, copy plus manual fallback. Never sends mail automatically.

## Content and routing

Home: one H1, tool, explanation, instructions, selectable formulas/variables, fully substituted worked example, monthly/daily/APY/timing/inflation limits, common mistakes, visible FAQs and primary sources. Default visible English text >1000 words measured without hidden advanced/print duplication. About, Contact, Privacy, Terms routes have unique metadata, dates and internal links. No invented operator/company/credentials.

Privacy must match actual code: inputs stay in page memory; user-triggered hash sharing includes amounts; clipboard/download/print local; email shares what sender chooses; web server can receive request metadata; no analytics/cookies/localStorage in app. Hosting operator retention unknown: no fabricated promise. No payment/account features.

## Technical and acceptance

Next.js + TypeScript; pure calculation library separated from UI/exports. Static export chosen explicitly: all functionality browser-local and no runtime server needed. `out` production artifact must be validated on local static HTTP server. No Server Actions. Next16.4.0 and React19.3.0 npm stable tags and official docs observed; run audit before accepting safety. Official upcoming advisory status must be recorded before public deployment.

Preview noindex default; no bogus localhost canonical. Public build requires explicit HTTPS origin plus indexing=true; canonical/OG/sitemap created only when origin configured. Preview sitemap empty. robots allows crawling so noindex can be seen. JSON-LD WebApplication with truthful free pricing; no fabricated reviews/FAQ rich-result promise. OG asset generated locally. No llms.txt needed for a single educational tool.

QA: arithmetic independent tests, invalid/hash boundaries, output consistency; lint/type/build/audit; real browser all actions and mobile320/390/tablet/desktop, focus and dialog, actual exports opened, print PDF, logs/resources/404/SEO and final checklist. Unverified items remain unverified.

## Accepted implementation refinement — 2026-10-10

PNG and CSV now open an accessible preview dialog before an explicit download link is activated. CSV offers selectable full text; PNG offers a visible image for browser save gestures. Status says download requested, not completed. URLs are released on close. Numeric inputs serialize to canonical numeric strings for reliable share round trips and structurally safe CSV metadata. Error summaries name fields and reopen advanced controls when needed.

## Deep competitor evidence — 2026-10-10

See [original-ten audit](research/google-top10-audit.md) for verified cases and access gaps. Preserve invalid-input result removal, explicit nominal/APY and timing assumptions, zero-duration consistency, semantic keyboard controls, and share restoration of both inputs and result. Competitor observations now provide concrete regression scenarios: stale results after invalid inputs, zero-year NaN, and shared inputs displaying unrelated default results. These are requirements to preserve, not claims that this round retested our app.

Optional future withdrawal/deposit-growth features require distinct specifications: annually stepped growth (TCS) versus equivalent per-period growth (Omni), and whether each actual withdrawal is rounded to cents. Do not mix these models or claim internal competitor algorithms are fully known. Broad UX superiority remains unproven.

After network-node recovery, four further competitors produced direct evidence. Preserve explicit zero-rate handling (Bankrate displayed currency symbols without amounts), positive compounding-frequency validation (Moneychimp accepted0 and returned0), and usable narrow-screen forms (Moneychimp overflowed). Explain actual contribution timing: Bankrate prorates annual/quarterly contributions into compounding periods, unlike discrete end-of-year/quarter deposits. Bank hosts round1.5years to2; our duration rules should be explicit. These are research findings, not a new claim of app regression-test completion.
