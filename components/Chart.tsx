'use client';

import {useMemo,useState,useSyncExternalStore} from 'react';
import type {KeyboardEvent,PointerEvent,CSSProperties} from 'react';
import {Projection,money} from '../lib/calculator';

const narrowQuery='(max-width: 540px)';
function subscribe(listener:()=>void){const query=window.matchMedia(narrowQuery);query.addEventListener('change',listener);return()=>query.removeEventListener('change',listener);}
function period(month:number){
 if(month===0)return 'Today';
 const years=Math.floor(month/12),months=month%12;
 return [years?`${years} ${years===1?'year':'years'}`:'',months?`${months} ${months===1?'month':'months'}`:''].filter(Boolean).join(' · ');
}

export default function Chart({p,currency,withdrawals=false,milestone}:{p:Projection;currency:string;withdrawals?:boolean;milestone?:{month:number;label:string}}){
 const narrow=useSyncExternalStore(subscribe,()=>window.matchMedia(narrowQuery).matches,()=>false);
 const [selection,setSelection]=useState<{projection:Projection;month:number}|null>(null);
 const month=selection?.projection===p?Math.min(selection.month,p.months):p.months;
 const row=p.rows[month],width=narrow?360:690,height=narrow?300:290,left=narrow?48:58,right=width-(narrow?16:32),bottom=height-40,top=36;
 const max=Math.max(1,...p.rows.map(r=>r.balance),...(withdrawals?[]:p.rows.map(r=>r.contributed))),x=(m:number)=>left+m/Math.max(p.months,1)*(right-left),y=(v:number)=>bottom-v/max*(bottom-top);
 const shape=useMemo(()=>{
  const max=Math.max(1,...p.rows.map(r=>r.balance),...(withdrawals?[]:p.rows.map(r=>r.contributed)));
  const point=(m:number,v:number)=>`${left+m/Math.max(p.months,1)*(right-left)},${bottom-v/max*(bottom-top)}`;
  const balance=p.rows.map(r=>point(r.month,r.balance)).join(' ');
  const paid=p.rows.map(r=>point(r.month,r.contributed)).join(' ');
  return {balance,paid,interest:balance+' '+[...p.rows].reverse().map(r=>point(r.month,r.contributed)).join(' ')};
 },[p,left,right,bottom,withdrawals]);
 function pick(event:PointerEvent<SVGSVGElement>){
  const bounds=event.currentTarget.getBoundingClientRect();
  if(!bounds.width)return;
  const fraction=Math.max(0,Math.min(1,((event.clientX-bounds.left)/bounds.width*width-left)/(right-left)));
  setSelection({projection:p,month:Math.round(fraction*p.months)});
 }
 function navigate(event:KeyboardEvent<SVGSVGElement>){
  const next=event.key==='Home'?0:event.key==='End'?p.months:event.key==='ArrowRight'||event.key==='ArrowUp'?month+1:event.key==='ArrowLeft'||event.key==='ArrowDown'?month-1:event.key==='PageUp'?month+12:event.key==='PageDown'?month-12:null;
  if(next===null)return;
  event.preventDefault();setSelection({projection:p,month:Math.max(0,Math.min(p.months,next))});
 }
 const anchor=x(month)/width*100;
 const tooltipStyle={left:`clamp(8px, calc(${anchor}% ${anchor>55?'- var(--tip-width) - 12px':'+ 12px'}), calc(100% - var(--tip-width) - 8px))`,top:`clamp(8px, calc(${y(row.balance)/height*100}% - 126px), calc(100% - 148px))`} as CSSProperties;
 return <div className="chart-wrap">
  <p id="chart-help" className="chart-help">Drag on the chart to explore each month.</p>
  <div className="chart-stage">
   <svg className="growth-chart interactive-chart" viewBox={`0 0 ${width} ${height}`} role="slider" tabIndex={0} aria-label="Explore savings growth by month" aria-describedby="chart-help" aria-valuemin={0} aria-valuemax={p.months} aria-valuenow={month} aria-valuetext={`${period(month)}: balance ${money(row.balance,currency)}, ${withdrawals?'total withdrawn':'total paid in'} ${money(row.contributed,currency)}, interest earned ${money(row.interest,currency)}`} onKeyDown={navigate}
    onPointerDown={event=>{if(event.button!==0)return;event.currentTarget.setPointerCapture(event.pointerId);pick(event);}}
    onPointerMove={event=>{if(event.pointerType==='mouse'||event.currentTarget.hasPointerCapture(event.pointerId))pick(event);}}
    onPointerUp={event=>{if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);}}>
    <title>{withdrawals?'Projected remaining balance':'Projected savings growth'}</title>
    {milestone&&<g aria-hidden="true"><line x1={x(milestone.month)} x2={x(milestone.month)} y1={top} y2={bottom} stroke="#b84216" strokeDasharray="2 5"/><text x={left} y={17} className="chart-label">{milestone.label} · month {milestone.month}</text></g>}
    {[0,.25,.5,.75,1].map(fr=><g key={fr}><line x1={left} x2={right} y1={y(max*fr)} y2={y(max*fr)} stroke="#e0e2e4"/><text x={left-10} y={y(max*fr)+4} textAnchor="end" className="chart-label">{new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:1}).format(max*fr)}</text></g>)}
    {!withdrawals&&<><polygon points={`${left},${bottom} ${shape.paid} ${x(p.months)},${bottom}`} fill="#f0f1f2"/><polygon points={shape.interest} fill="#e96938" fillOpacity=".16"/></>}
    {!withdrawals&&<polyline points={shape.paid} fill="none" stroke="#8a8e92" strokeWidth="2" strokeDasharray="5 4"/>}<polyline points={shape.balance} fill="none" stroke="#202124" strokeWidth="2.5" strokeLinejoin="round"/>
    <g className="chart-cursor" aria-hidden="true"><line x1={x(month)} x2={x(month)} y1={top-8} y2={bottom} stroke="#62666b" strokeWidth="1" strokeDasharray="3 4"/>{!withdrawals&&<circle cx={x(month)} cy={y(row.contributed)} r="4" fill="#8a8e92" stroke="white" strokeWidth="2"/>}<circle cx={x(month)} cy={y(row.balance)} r="6" fill="#202124" stroke="white" strokeWidth="2"/></g>
    <text x={left} y={height-10} className="chart-label">Today</text>{p.months>0&&<>{!narrow&&p.months>1&&<text x={(left+right)/2} y={height-10} textAnchor="middle" className="chart-label">{period(Math.round(p.months/2))}</text>}<text x={right} y={height-10} textAnchor="end" className="chart-label">{period(p.months)}</text></>}
   </svg>
   <div className="chart-tooltip" style={tooltipStyle} aria-hidden="true">
    <strong data-testid="chart-period">{period(month)}</strong>
    <dl><div><dt>Balance</dt><dd data-testid="chart-balance">{money(row.balance,currency)}</dd></div><div><dt>{withdrawals?'Withdrawn':'Total paid in'}</dt><dd data-testid="chart-contributed">{money(row.contributed,currency)}</dd></div><div><dt>Interest earned</dt><dd data-testid="chart-interest">{money(row.interest,currency)}</dd></div></dl>
   </div>
  </div>
  <div className="legend"><span><i className="legend-growth"/> Projected balance</span>{!withdrawals&&<><span><i className="legend-paid"/> Total paid in</span><span><i className="legend-interest"/> Interest earned</span></>}</div>
 </div>;
}
