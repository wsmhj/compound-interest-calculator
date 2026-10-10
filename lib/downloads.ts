import {Form,Projection,assumptions,money} from './calculator';
import {PlanForm,PlanResult} from './planning';
import {PlanMode,planSummary} from './plan-export';
type CardDetails={title:string;value:number;metric:string;notes:string};
export function planCard(f:PlanForm,r:PlanResult,mode:PlanMode){return card(f,r.projection,{title:mode==='goal'?'MONTHLY SAVING NEEDED':'REMAINING BALANCE',value:mode==='goal'?r.payment!:r.projection.balance,metric:mode==='goal'?`Projected balance  ${money(r.projection.balance,f.currency)}`:`Actually withdrawn  ${money(r.withdrawn!,f.currency)}`,notes:planSummary(f,r,mode).split('\n').slice(1,-1).join(' · ')});}
export async function card(f:Form,p:Projection,details?:CardDetails):Promise<Blob>{const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=800;const c=canvas.getContext('2d');if(!c)throw new Error('Canvas unavailable');
 c.fillStyle='#f2f3f3';c.fillRect(0,0,1200,800);c.fillStyle='#fff';c.beginPath();c.roundRect(32,32,1136,736,2);c.fill();c.fillStyle='#202124';c.beginPath();c.roundRect(72,66,44,44,2);c.fill();c.strokeStyle='#fff';c.lineWidth=4;c.lineCap='round';for(let i=0;i<3;i++){c.beginPath();c.moveTo(82+i*12,99);c.lineTo(82+i*12,92-i*7);c.stroke();}
 c.strokeStyle='#ed6b3b';c.lineWidth=2;c.beginPath();c.moveTo(82,84);c.bezierCurveTo(91,84,94,75,106,75);c.stroke();
 c.fillStyle='#202124';c.font='bold 30px Arial';c.fillText('Compound Interest Calculator',132,99);c.fillStyle='#62666b';c.font='18px Arial';c.fillText(details?.title??'COMPOUND INTEREST PROJECTION',72,153);c.fillStyle='#202124';c.font='bold 57px Consolas, monospace';const value=money(details?.value??p.balance,f.currency);if(c.measureText(value).width>1000)c.font='bold 42px Arial';c.fillText(value,72,219);c.font='19px Arial';c.fillStyle='#62666b';c.fillText(details?.metric??`Total paid in  ${money(p.contributed,f.currency)}`,72,266,490);c.fillStyle='#b84216';c.fillText(`Interest earned  ${money(p.interest,f.currency)}`,620,266,490);
 const max=Math.max(...p.rows.map(row=>row.balance),1),x=(m:number)=>80+m/Math.max(p.months,1)*1030,y=(v:number)=>528-v/max*200;
 c.strokeStyle='#e0e2e4';c.lineWidth=1;for(let i=0;i<4;i++){c.beginPath();c.moveTo(80,328+i*67);c.lineTo(1110,328+i*67);c.stroke();}c.strokeStyle='#202124';c.lineWidth=4;c.beginPath();p.rows.forEach((r,i)=>{if(i)c.lineTo(x(r.month),y(r.balance));else c.moveTo(x(r.month),y(r.balance));});c.stroke();c.fillStyle='#202124';c.beginPath();c.arc(x(p.months),y(p.balance),5,0,Math.PI*2);c.fill();c.fillStyle='#62666b';c.font='17px Arial';c.fillText('Today',80,556);c.textAlign='right';c.fillText(`${p.months} months`,1110,556);c.textAlign='left';
 c.fillStyle='#202124';c.font=details?'16px Arial':'18px Arial';
 const notes=details?.notes??`Starting amount: ${money(Number(f.principal),f.currency)} · ${assumptions(f)}${Number(f.inflation)>0?` · Today's purchasing power: ${money(p.real,f.currency)}`:''}`;
 const words=notes.split(' ');let line='',lineY=594;for(const word of words){if(c.measureText(line+word).width>1040){c.fillText(line,72,lineY);lineY+=23;line='';}line+=word+' ';}c.fillText(line,72,lineY);
 c.fillStyle='#62666b';c.font='16px Arial';c.fillText('Hypothetical fixed-rate estimate. Excludes taxes and fees; actual returns vary.',72,743);

 return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Image creation failed')),'image/png'));
}
