import {ReactNode} from 'react';
import {email} from '../lib/site';

export type LegalSection={id:string;title:string;content:ReactNode};
export default function LegalDocument({title,intro,sections}:{title:string;intro:string;sections:LegalSection[]}){
 return <article className="legal-page policy-page"><p className="eyebrow">WEBSITE POLICIES</p><h1>{title}</h1><p className="legal-date">Effective and last updated: <time dateTime="2026-10-10">October 10, 2026</time></p><p className="lead">{intro}</p><nav className="policy-toc no-print" aria-label="On this page"><strong>On this page</strong><ol>{sections.map(section=><li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav>{sections.map((section,index)=><section key={section.id} id={section.id}><h2>{index+1}. {section.title}</h2>{section.content}</section>)}<aside className="policy-related"><h2>Related policies and contact</h2><nav aria-label="Related policies"><a href="/terms/">Terms of Use</a><a href="/privacy/">Privacy Policy</a><a href="/cookies/">Cookies & Browser Storage</a><a href="/disclaimer/">Financial Disclaimer</a></nav><p>For questions about these policies or the website, email <a href={`mailto:${email}`}>{email}</a>. Please use a short description of your request and avoid unnecessary sensitive information.</p></aside></article>;
}
