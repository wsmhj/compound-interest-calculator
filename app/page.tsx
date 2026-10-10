import CalculatorWorkspace from '../components/CalculatorWorkspace';
import Guide from '../components/Guide';
import {metadata as makeMetadata,brand} from '../lib/site';
import {homeSchema} from '../lib/schema';
import {homeUpdated,homeUpdatedLabel,homeTitle,homeDescription} from '../lib/content';
export const metadata=makeMetadata(homeTitle,homeDescription);
export default function Home(){const schema=homeSchema();return <div className="page-shell"><header className="tool-intro no-print"><p className="tool-path">SAVINGS / PLANNING TOOLS</p><h1>Compound interest calculator</h1><p>Use this compound interest calculator to see how your savings could grow, work toward a goal, or plan regular withdrawals.</p><p className="content-byline">By <a href="/about/" rel="author">{brand}</a> · Updated <time dateTime={homeUpdated}>{homeUpdatedLabel}</time></p></header><CalculatorWorkspace/><Guide/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/></div>;}
