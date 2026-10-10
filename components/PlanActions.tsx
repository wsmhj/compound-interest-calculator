'use client';
import {useEffect,useRef,useState} from 'react';
import {PlanForm,PlanResult} from '../lib/planning';
import {PlanMode,encodePlan,planCsv,planSummary} from '../lib/plan-export';
import {planCard} from '../lib/downloads';
import {writeClipboard} from '../lib/clipboard';
import {trapDialogFocus} from '../lib/dialog';
import ExportDialog,{ExportAsset} from './ExportDialog';

export default function PlanActions({f,result,mode}:{f:PlanForm;result:PlanResult;mode:PlanMode}){
 const [asset,setAsset]=useState<ExportAsset|null>(null),[busy,setBusy]=useState(false),[status,setStatus]=useState(''),[copyText,setCopyText]=useState('');
 const epoch=useRef(0),trigger=useRef<HTMLButtonElement|null>(null),copyTrigger=useRef<HTMLButtonElement|null>(null),dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const pending=epoch;return()=>{pending.current++;};},[]);
 useEffect(()=>{if(copyText)dialog.current?.showModal();},[copyText]);
 async function copy(text:string,button:HTMLButtonElement){
  copyTrigger.current=button;const id=++epoch.current;setBusy(false);
  try{await writeClipboard(text);if(id===epoch.current)setStatus('Copied to clipboard.');}
  catch{if(id===epoch.current){setCopyText(text);setStatus('Clipboard unavailable. Copy the selectable text.');}}
 }
 function closeCopy(){epoch.current++;dialog.current?.close();setCopyText('');copyTrigger.current?.focus();}
 async function png(button:HTMLButtonElement){
  trigger.current=button;const id=++epoch.current;setBusy(true);setStatus('Preparing image…');
  try{const blob=await planCard(f,result,mode);if(id===epoch.current){setAsset({kind:'png',blob,name:`compound-interest-${mode}-plan.png`,description:planSummary(f,result,mode)});setStatus('Image ready to preview.');}}
  catch{if(id===epoch.current)setStatus('Image could not be created. Please try again.');}
  finally{if(id===epoch.current)setBusy(false);}
 }
 return <div className="no-print"><div className="export-actions">
  <button className="primary-button" disabled={busy} onClick={e=>void png(e.currentTarget)}>↓ {busy?'Preparing…':'Save image'}</button>
  <button onClick={e=>{trigger.current=e.currentTarget;epoch.current++;setBusy(false);const text=planCsv(f,result,mode);setAsset({kind:'csv',blob:new Blob([text],{type:'text/csv;charset=utf-8'}),name:`compound-interest-${mode}-monthly-schedule.csv`,description:planSummary(f,result,mode),preview:text});setStatus('Full monthly CSV ready to download.');}}>↓ CSV</button>
  <button onClick={e=>void copy(location.origin+location.pathname+encodePlan(f,mode),e.currentTarget)}>↗ Share</button>
  <button onClick={()=>window.print()}>Print this plan</button>
  <button onClick={e=>void copy(planSummary(f,result,mode),e.currentTarget)}>Copy summary</button>
 </div><p className="smallprint">Shared links include your entered amounts and settings.</p><p className="status" role="status">{status}</p>
 {asset&&<ExportDialog asset={asset} returnFocus={trigger.current} onClose={()=>setAsset(null)}/>}
 <dialog ref={dialog} onKeyDown={trapDialogFocus} aria-labelledby="plan-copy-title" onCancel={e=>{e.preventDefault();closeCopy();}}><div className="dialog-content"><h2 id="plan-copy-title">Copy your projection</h2><p>Sharing includes the amounts and assumptions entered. Anyone with the link can read them.</p><textarea aria-label="Text to copy" readOnly rows={8} value={copyText} onFocus={e=>e.target.select()}/><button onClick={closeCopy}>Close</button></div></dialog></div>;
}
