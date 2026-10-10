# Keyword and calculation research

Research date: 2026-10-10. Sources below were opened in full through web browsing, not accepted from search snippets. No paid keyword dataset is available; no search volume, difficulty, traffic or ranking prediction is asserted.

## Sources and applicability

1. [SEC Investor.gov calculator](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator): observed inputs include principal, monthly contribution, years, estimated annual rate, variance and compounding frequency. Useful for task definition; browser operation is separately required in the competitive audit.
2. [SEC savings explanation](https://www.investor.gov/introduction-investing/investing-basics/save-and-invest/small-savings-add-big-money): educational background for reinvested interest and regular saving.
3. [CFPB current Regulation DD Appendix A](https://www.consumerfinance.gov/rules-policy/regulations/1030/a/): distinguishes annual percentage yield from stated interest and uses annualized interest/principal. Current-version banner verified. The initially discovered 2011 URL was explicitly superseded and is not the selected authority. Bank disclosure conventions are not a claim that this projection reproduces a bank ledger.
4. CFPB 'How does compound interest work?' search result was found, but direct fetch failed; not treated as opened evidence.

## Model derivation and definitions

P = initial principal (currency units), r = nominal annual interest rate as a decimal, n = compounding periods per year, t = years. At each compounding boundary, balance multiplies by 1+r/n. Repeated multiplication gives A=P(1+r/n)^(nt). This is a mathematical derivation, not a claim of an official proprietary algorithm.

For contributions C at m equally spaced intervals per year, use equivalent interval growth q=(1+r/n)^(n/m). For APY input y, q=(1+y)^(1/m); do not compound APY again as though it were a nominal rate. For K contribution intervals, end-of-period deposits give A=P*q^K+C*(q^K-1)/(q-1). Beginning deposits multiply the deposit term by q. When q=1 use A=P+C*K. End-of-period recurrence B[k]=B[k-1]*q+C provides an independently explainable implementation check. Beginning recurrence is (B[k-1]+C)*q.

Equivalent fractional-period growth is a modeling convention when contribution and compounding frequencies differ. Clearly disclose it; actual banks can use daily balance, posting calendars and their own rounding. Use whole months for duration and equal abstract months; do not imply calendar-day accuracy. Daily compounding uses 365 periods per abstract year.

Total contributions = P+C*K. Interest = A-total contributions. Effective annual yield = (1+r/n)^n-1. Inflation-adjusted final purchasing power, if adopted, = A/(1+i)^t; i is user-assumed annual inflation, not a forecast. Annual rows and charts derive from the same model, retaining precision until display. Currency is presentation, not FX conversion.

## Proposed bounds, to finalize in step 3

Finite numeric inputs only; no empty value silently treated as zero. Principal and deposit nonnegative; duration 0–100 years in whole months; nominal rate 0–100% initially (negative investment returns require an explicitly supported model); max principal/deposit 1e9. Reject invalid/overflow results and remove stale output. No withdrawals, taxes, fees, variable returns or guarantees in the initial core model. Final amounts display to two decimals; internal values remain unrounded.

## Independent acceptance cases (established before implementation)

| Case | Conditions | Independent expected |
|---|---|---|
| Annual lump sum | P=10000, r=5%, n=1, t=10, C=0 | 16288.94626777442 → $16,288.95; interest $6,288.95 |
| Monthly saving | P=10000, r=5%, n=m=12, t=10, C=100 at end | closed-form $31,998.322921469524; paid in $22,000; interest $9,998.32 |
| Two annual deposits/end | P=1000, r=10%, two years, C=100/year | year 1: 1200; year 2: 1420 |
| Two annual deposits/start | same, deposits at start | year 1: 1210; year 2: 1441 |
| Zero rate | P=1000, C=100 monthly, 12 months | 2200, zero interest |
| Zero duration | P=1000, any valid rate/deposit | 1000, no deposits applied |
| APY equivalence | 12% nominal monthly vs APY 12.68250301319698% | same growth; 1000 over year → 1126.82503013197 |
| Invalid | empty, NaN, infinity, negative principal, excessive duration | field error and no old result/download |

Closed-form values were calculated independently with arithmetic before application code existed. Hand-stepped two-period cases guard deposit timing. Final test implementation should use additional recurrence vs closed form cases.

## Keyword-to-task map

Exact seed supplied by user. Google observed related searches: monthly, daily, yearly, with monthly contributions, retirement, gov, Ramsey, SBI. These are search observations, not measured volume. Adopt frequency and regular-deposit explanations; government/commercial navigational terms do not warrant pretending affiliation. Retirement can be discussed as an illustration without adding a retirement advice product. APY, contribution timing, inflation and exports are functional hypotheses pending competition review.
