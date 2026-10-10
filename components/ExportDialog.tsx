'use client';

import {useEffect,useId,useRef,useState} from 'react';
import {trapDialogFocus} from '../lib/dialog';

export type ExportAsset={kind:'png'|'csv';blob:Blob;name:string;description:string;preview?:string};

export default function ExportDialog({asset,returnFocus,onClose}:{asset:ExportAsset;returnFocus:HTMLButtonElement|null;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 const titleId=useId();
 const[url,setUrl]=useState('');
 const[requested,setRequested]=useState(false);
 useEffect(()=>{
  const objectUrl=URL.createObjectURL(asset.blob);
  const dialog=ref.current;
  setUrl(objectUrl);
  dialog?.showModal();
  return()=>{dialog?.close();URL.revokeObjectURL(objectUrl);if(returnFocus?.isConnected)returnFocus.focus();};
 },[asset,returnFocus]);
 function close(){ref.current?.close();onClose();}
 return <dialog className="export-dialog" ref={ref} aria-labelledby={titleId} onKeyDown={trapDialogFocus} onCancel={event=>{event.preventDefault();close();}}>
  <div className="dialog-content">
   <button className="close-button" aria-label="Close export" onClick={close}>×</button>
   <p className="eyebrow">YOUR PROJECTION, READY TO KEEP</p>
   <h2 id={titleId}>{asset.kind==='png'?'Preview your image.':'Your monthly schedule.'}</h2>
   <p>{asset.kind==='png'?'Review the card, then download the PNG image.':'The CSV includes every month, including the starting balance, and your calculation assumptions.'}</p>
   {asset.kind==='png'&&url?<img className="export-preview" src={url} width={1200} height={800} alt={asset.description}/>:null}
   {asset.kind==='csv'?<textarea className="csv-preview" aria-label="CSV contents" readOnly value={asset.preview} rows={9} onFocus={event=>event.target.select()}/>:null}
   <p className="export-file">{asset.name} · {Math.max(1,Math.ceil(asset.blob.size/1024))} KB{asset.kind==='png'?' · 1200 × 800 pixels':''}</p>
   <div className="dialog-actions">
    {url?<a className="primary-button" href={url} download={asset.name} onClick={()=>setRequested(true)}>Download {asset.kind.toUpperCase()}</a>:null}
    <button onClick={close}>Back to calculator</button>
   </div>
   <p role="status" className="status">{requested?'Download requested. Check your browser’s downloads.':'Files are generated in your browser. Nothing is uploaded.'}</p>
   <p className="export-help">{asset.kind==='png'?'If the download does not start, right-click or long-press the image to save it.':'If the download does not start, select the CSV text above and copy it into a .csv file.'}</p>
  </div>
 </dialog>;
}
