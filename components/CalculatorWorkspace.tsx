'use client';
import {useEffect,useRef,useState} from 'react';
import Calculator from './Calculator';
import PlanningCalculator from './PlanningCalculator';
import {defaults} from '../lib/calculator';
import {planDefaults} from '../lib/planning';
import {decodePlan} from '../lib/plan-export';

const modes=[{id:'growth',label:'Grow savings',hash:'#calculator'},{id:'goal',label:'Savings goal',hash:'#savings-goal'},{id:'withdrawal',label:'Withdrawals',hash:'#withdrawals'}] as const;
type Mode=typeof modes[number]['id'];
export default function CalculatorWorkspace(){
 const [mode,setMode]=useState<Mode>('growth');
 const [shareNotice,setShareNotice]=useState('');
 const [growth,setGrowth]=useState(defaults),[goal,setGoal]=useState(planDefaults),[withdrawal,setWithdrawal]=useState(planDefaults);
 const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 useEffect(()=>{function restore(){const hash=location.hash;setShareNotice('');if(hash.startsWith('#plan')){try{const restored=decodePlan(hash);if(restored.mode==='goal')setGoal(restored.form);else setWithdrawal(restored.form);setMode(restored.mode);setShareNotice('Shared plan restored. Review the assumptions below.');}catch{setMode('goal');setGoal(planDefaults);setShareNotice('This shared link could not be restored. The example below is shown instead.');}}else if(hash==='#savings-goal')setMode('goal');else if(hash==='#withdrawals')setMode('withdrawal');else if(hash==='#calculator'||hash.startsWith('#v'))setMode('growth');}restore();window.addEventListener('hashchange',restore);return()=>window.removeEventListener('hashchange',restore);},[]);
 function choose(index:number,focus=false){const item=modes[index];setShareNotice('');setMode(item.id);history.replaceState(null,'',location.pathname+location.search+item.hash);if(focus)tabs.current[index]?.focus();}
 return <div id="calculator" className="calculator-workspace"><div className="calculator-modes no-print" role="tablist" aria-label="Calculation mode">{modes.map((item,index)=><button key={item.id} id={`mode-${item.id}`} role="tab" aria-selected={mode===item.id} aria-controls="calculator-panel" tabIndex={mode===item.id?0:-1} ref={element=>{tabs.current[index]=element;}} onClick={()=>choose(index)} onKeyDown={event=>{const next=event.key==='ArrowRight'?(index+1)%3:event.key==='ArrowLeft'?(index+2)%3:event.key==='Home'?0:event.key==='End'?2:null;if(next!==null){event.preventDefault();choose(next,true);}}}>{item.label}</button>)}</div><div id="calculator-panel" onChange={()=>setShareNotice('')} role="tabpanel" aria-labelledby={`mode-${mode}`}>{shareNotice&&<p className="notice no-print" role="status">{shareNotice}</p>}{mode==='growth'?<Calculator f={growth} setF={setGrowth}/>:<PlanningCalculator onEdit={()=>setShareNotice('')} key={mode} mode={mode} f={mode==='goal'?goal:withdrawal} setF={mode==='goal'?setGoal:setWithdrawal}/>}</div></div>;
}
