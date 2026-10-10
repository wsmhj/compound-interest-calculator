> Superseded implementation scope: user subsequently required one homepage calculator with three modes and inline formula/Excel copy. Separate-page recommendations below are historical. See IMPLEMENTATION-STATUS.md latest entry.

# 2026-10-10 — Research validation and implementation decision

User authorized verification and execution of the proposed task-based expansion. This continues the existing local project; no publishing target is configured.

## Evidence and limits

- Opened The Calculator Site's real page: https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php . Its title covers daily/monthly/yearly compounding and its visible form offers deposits and withdrawals. This resolves the supplied report's missing URL, not a new full-control competitor audit.
- Opened SEC compound-interest and savings-goal calculators: https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator and https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator . These support distinct forward-growth and target-saving tasks. Their presence does not verify the reported keyword volumes.
- Opened Microsoft FV documentation: https://support.microsoft.com/en-us/excel/functions/fv-function . It documents periodic rate, number of periods, payment, present value and timing. Our formulas and examples will be independently checked.
- Moneychimp web fetch returned an internal error. Existing browser audit remains historical evidence; no new title, schema or ranking claim is verified.
- User-supplied volumes/KD/DR/revenue estimates have no raw export here. Twelve supplied monthly volumes average 750,333.33, not 823,000. Keyword Planner close variants are grouped; advertising competition is not organic difficulty. No paid data access or new US top-ten snapshot was available in this verification.
- Google documentation: https://developers.google.com/search/docs/appearance/ranking-systems-guide ; https://developers.google.com/search/docs/appearance/page-experience ; https://support.google.com/google-ads/answer/3022575 . Homepage URLs and superior usability do not guarantee rankings; exact-match domains are unnecessary.

## Scope and acceptance specification (before implementation)

1. Homepage naturally covers compound/compounding synonyms. Add discoverable links to four distinct new routes; no synonym clone pages.
2. Withdrawal tool: initial balance, fixed nominal annual rate, compounding frequency, withdrawal amount, monthly/yearly withdrawal frequency, start/end timing, whole-month horizon, currency. Monthly recurrence, withdrawals capped at available funds, separate actual withdrawals/interest/shortfall, first depletion and first underfunded scheduled payment. No negative balances or borrowing. Zero duration applies no payments. Chart must scale to the maximum historical balance and show actual withdrawn amounts inside the graph.
3. Savings-goal tool: target, initial balance, years/months, fixed nominal rate/frequency, start/end monthly deposits, currency. Solve required monthly contribution analytically, round upward to cents, and project that actual rounded payment using the existing engine. Already-funded and zero-duration/unreachable cases explicit. Display target crossing and schedule.
4. Formula guide and Excel tutorial: distinct learning tasks, selectable formulas, independently checked examples, explicit units, timing and equal-month assumptions. No pretend spreadsheet download.
5. Preserve current graphite/white/orange design. Desktop inputs left/results right; <=850px stacked. Inline chart readouts and keyboard navigation retained. New tool pages provide substantive task-specific explanations (>1,000 visible English words including tool text).
6. Shared layout/metadata/canonical generation, internal links, sitemap and llms listing updated. Local noindex preserved. Existing home share and exports unchanged; new tools offer schedule and browser print, with no unimplemented buttons.
7. Test closed-form versus recurrence, zero/invalid/extreme values, depletion/partial payments, timing, target round trips and goal met initially. Run existing checks/build and actual browser desktop/narrow-screen interaction on new features. Record remaining limits honestly.
