import {money} from './calculator';
import {plan,planDefaults,PlanForm,PlanResult} from './planning';

export type PlanMode='goal'|'withdrawal';
const common=['principal','years','months','rate','frequency','timing','currency'] as const;
const keys=(mode:PlanMode)=>[...common,...(mode==='goal'?['target'] as const:['withdrawal','withdrawalFrequency'] as const)];
function normalize(f:PlanForm,mode:PlanMode){
 const clean={...planDefaults};
 for(const key of keys(mode))clean[key]=['timing','currency'].includes(key)?f[key]:String(Number(f[key]));
 if(!plan(f,mode).result||!plan(clean,mode).result)throw new Error('Invalid plan');
 return clean;
}
export function encodePlan(f:PlanForm,mode:PlanMode){
 const clean=normalize(f,mode);
 return '#plan1='+encodeURIComponent(JSON.stringify({mode,inputs:Object.fromEntries(keys(mode).map(key=>[key,clean[key]]))}));
}
export function decodePlan(hash:string):{mode:PlanMode;form:PlanForm}{
 if(hash.length>2048||!hash.startsWith('#plan1='))throw new Error('Unsupported plan link');
 const data=JSON.parse(decodeURIComponent(hash.slice(7)));
 if(!data||!['goal','withdrawal'].includes(data.mode)||!data.inputs||Array.isArray(data.inputs)||Object.keys(data).length!==2)throw new Error('Invalid plan link');
 const mode=data.mode as PlanMode,fields=keys(mode),form={...planDefaults};
 if(Object.keys(data.inputs).length!==fields.length)throw new Error('Invalid inputs');
 for(const key of fields){const value=data.inputs[key];if(typeof value!=='string'||value.length>30)throw new Error('Invalid input');form[key]=value;}
 if(!plan(form,mode).result)throw new Error('Invalid values');
 return {mode,form:normalize(form,mode)};
}
export function planSummary(f:PlanForm,r:PlanResult,mode:PlanMode){
 const w=mode==='withdrawal';
 return [`Compound Interest Calculator — ${w?'Withdrawal':'Savings goal'} plan`,
 `Starting balance: ${money(Number(f.principal),f.currency)}`,
 `${r.projection.months} months · ${Number(f.rate)}% nominal annual rate · ${f.frequency} compounding periods/year · ${f.timing} of period`,
 ...(w?[`Requested withdrawal: ${money(Number(f.withdrawal),f.currency)} ${f.withdrawalFrequency==='12'?'monthly':'yearly'}`,`Actually withdrawn: ${money(r.withdrawn!,f.currency)} · Unfunded: ${money(r.shortfall!,f.currency)}`,`Depleted: ${r.depleted===null?'Not within horizon':`Month ${r.depleted}`}`]:[`Target: ${money(Number(f.target),f.currency)} · Save ${money(r.payment!,f.currency)} monthly`]),
 `Final balance: ${money(r.projection.balance,f.currency)} · Interest: ${money(r.projection.interest,f.currency)}`,
 'Equal-month, fixed-rate estimate. Excludes taxes, fees and inflation; actual returns vary.'].join('\n');
}
export function planCsv(f:PlanForm,r:PlanResult,mode:PlanMode){
 const clean=normalize(f,mode),w=mode==='withdrawal';
 return [`Compound Interest Calculator ${w?'withdrawal':'savings goal'} plan`,...keys(mode).map(key=>`${key},${clean[key]}`),
 ...(w?[`Actually withdrawn,${r.withdrawn!.toFixed(2)}`,`Unfunded withdrawals,${r.shortfall!.toFixed(2)}`,`Depleted month,${r.depleted??'Not within horizon'}`,`First shortfall month,${r.underfunded??'Not within horizon'}`]:[`Monthly saving,${r.payment!.toFixed(2)}`,`Target reached month,${r.reached??'Not within horizon'}`]),
 'Nominal annual rate; equal-month estimate excluding taxes fees and inflation',
 `Month,${w?'Actually withdrawn':'Total paid in'},Interest earned,Balance`,
 ...r.projection.rows.map(row=>[row.month,row.contributed.toFixed(2),row.interest.toFixed(2),row.balance.toFixed(2)].join(','))].join('\r\n');
}
