import {calculate, defaults, Form, Projection, Row} from './calculator';

export type PlanForm = Form & {target:string; withdrawal:string; withdrawalFrequency:string};
export const planDefaults:PlanForm={...defaults,principal:'10000',deposit:'0',years:'10',target:'50000',withdrawal:'200',withdrawalFrequency:'12'};
export type PlanResult={projection:Projection; payment?:number; withdrawn?:number; shortfall?:number; depleted?:number|null; underfunded?:number|null; reached?:number|null};
export type PlanValidation={result:PlanResult|null; errors:Partial<Record<keyof PlanForm,string>>};
export function plan(f:PlanForm,mode:'goal'|'withdrawal'):PlanValidation{
 const base=calculate({...f,deposit:'0',contribution:'12',inflation:'0',...(mode==='withdrawal'?{years:'0',months:'0'}:{})});
 const errors:PlanValidation['errors']={...base.errors};
 if(mode==='withdrawal')Object.assign(errors,calculate({...f,deposit:'0',principal:'0',contribution:'12',inflation:'0'}).errors);
 const key=mode==='goal'?'target':'withdrawal';
 const amount=Number(f[key]);
 if(f[key].trim()===''||!Number.isFinite(amount)||amount<0||amount>1e9)errors[key]='Enter a number from 0 to 1,000,000,000.';
 if(mode==='withdrawal'&&!['1','12'].includes(f.withdrawalFrequency))errors.withdrawalFrequency='Choose an available option.';
 if(Object.keys(errors).length||!base.result)return{result:null,errors};
 const months=Number(f.years)*12+Number(f.months),principal=Number(f.principal),rate=Number(f.rate)/100,frequency=Number(f.frequency);
 const logMonth=(f.rateType==='apy'?Math.log1p(rate):frequency*Math.log1p(rate/frequency))/12;
 const growth=Math.expm1(logMonth);
 if(mode==='goal'){
  if(months===0&&amount>principal)return{result:null,errors:{years:'Allow at least one month to reach a target above your starting balance.'}};
  const factor=growth===0?months:Math.expm1(logMonth*months)/growth*(f.timing==='start'?1+growth:1);
  const raw=amount<=base.result.balance?0:(amount-base.result.balance)/factor;
  // Round upward to a spendable cent; the forward projection uses this actual payment.
  const cents=raw*100;
  const payment=Math.ceil(cents-4*Number.EPSILON*Math.abs(cents))/100;
  const projected=calculate({...f,deposit:String(payment),contribution:'12',inflation:'0'});
  if(!projected.result)return{result:null,errors:{target:'This plan exceeds the supported calculation range. Reduce the target, rate or duration.'}};
  return{errors:{},result:{payment,projection:projected.result,reached:projected.result.rows.find(r=>r.balance>=amount-1e-7)?.month??null}};
 }
 let balance=principal,withdrawn=0,interest=0,shortfall=0,depleted:number|null=principal===0?0:null,underfunded:number|null=null;
 const rows:Row[]=[{month:0,balance,contributed:0,interest:0}],interval=f.withdrawalFrequency==='12'?1:12;
 function withdraw(month:number){const paid=Math.min(balance,amount);balance-=paid;withdrawn+=paid;shortfall+=amount-paid;if(amount-paid>1e-7&&underfunded===null)underfunded=month;if(balance<=1e-9&&depleted===null)depleted=month;}
 for(let month=1;month<=months;month++){
  if(f.timing==='start'&&(month-1)%interval===0)withdraw(month-1);
  const earned=balance*growth;interest+=earned;balance+=earned;
  if(f.timing==='end'&&month%interval===0)withdraw(month);
  if(!Number.isFinite(balance)||balance>1e15)return{result:null,errors:{rate:'Projection exceeds 1 quadrillion. Reduce the amount, rate or duration.'}};
  rows.push({month,balance,contributed:withdrawn,interest});
 }
 return{errors:{},result:{withdrawn,shortfall,depleted,underfunded,projection:{rows,annual:rows.filter(r=>r.month===0||r.month%12===0||r.month===months),balance,contributed:withdrawn,interest,yield:base.result.yield,real:balance,months}}};
}
