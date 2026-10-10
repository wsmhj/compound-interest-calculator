'use client';
import {useRef} from 'react';

export default function MobileResultBar({label,value}:{label:string;value:string|null}){
 const ref=useRef<HTMLDivElement>(null);
 function jump(selector:string){
  const target=ref.current?.closest('section')?.querySelector<HTMLElement>(selector);
  if(!target)return;
  target.tabIndex=-1;
  target.focus({preventScroll:true});
  target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 return <div ref={ref} className="mobile-result-bar no-print" aria-label="Quick calculator navigation"><div><span>{value?label:'Check your inputs'}</span><strong>{value??'—'}</strong></div><button onClick={()=>jump('.input-card')}>Inputs ↑</button><button onClick={()=>jump('.result-card')}>Results ↓</button></div>;
}
