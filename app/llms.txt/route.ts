import {brand,origin} from '../../lib/site';
import {homeUpdated} from '../../lib/content';
export const dynamic='force-static';
export function GET(){
 const link=(path:string)=>(origin??'')+path;
 const text=`# ${brand}

> Free compound interest calculator for savings growth, savings goals, and regular withdrawals. Educational estimates, not personalized financial advice.

Homepage content updated: ${homeUpdated}. This file is a navigation aid; the linked pages are the source of truth.

## Calculator and methodology

- [Compound interest calculator](${link('/')}): Three modes, interactive monthly charts, annual or monthly schedules, PNG and CSV exports, share links, and print views.
- [Formula and examples](${link('/#formula')}): Nominal rates, compounding frequency, and contributions.
- [Savings goals](${link('/#goal-guide')}): Required monthly deposits rounded upward to cents.
- [Withdrawals](${link('/#withdrawal-guide')}): Actual payments, depleted balances, and payment shortfalls.
- [Excel examples](${link('/#excel-guide')}): FV and PMT expressions matching the worked examples.
- [Sources](${link('/#sources')}): Public references and calculation notes.

The calculator uses fixed nonnegative rates and equal-month periods. Daily compounding uses 365 periods per year. Currency selection changes formatting, not exchange rates. Inflation is optional in growth mode. Taxes, fees, investment losses, and actual transaction dates are not modeled. Rates shown are assumptions, not product offers. Share links contain the entered amounts and settings.

## Site information

- [About ${brand}](${link('/about/')}): Purpose and calculation approach.
- [Contact](${link('/contact/')}): Questions and corrections.
- [Privacy](${link('/privacy/')}): Data handling and shared links.
- [Terms](${link('/terms/')}): Conditions for using the website and its outputs.
- [Cookies & Browser Storage](${link('/cookies/')}): Page memory, caching, shared links, and storage choices.
- [Financial Disclaimer](${link('/disclaimer/')}): Assumptions, exclusions, and limits of projections.
`;
 return new Response(text,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
