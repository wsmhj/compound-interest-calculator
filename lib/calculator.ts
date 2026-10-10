export type Form = { principal:string; deposit:string; years:string; months:string; rate:string; frequency:string; contribution:string; timing:string; rateType:string; inflation:string; currency:string };
export const defaults:Form={principal:'10000',deposit:'200',years:'20',months:'0',rate:'5',frequency:'12',contribution:'12',timing:'end',rateType:'nominal',inflation:'0',currency:'USD'};
export type Row={month:number; balance:number; contributed:number; interest:number};
export type Projection={rows:Row[]; annual:Row[]; balance:number; contributed:number; interest:number; yield:number; real:number; months:number};
export type Validation={errors:Partial<Record<keyof Form,string>>; result:Projection|null};
export function calculate(f:Form):Validation {
 const errors:Validation['errors']={};
 const n=(k:keyof Form,min:number,max:number,integer=false)=>{const raw=f[k];const v=Number(raw);if(typeof raw!=='string'||raw.trim()===''||!Number.isFinite(v)||v<min||v>max||(integer&&!Number.isInteger(v)))errors[k]=`Enter ${integer?'a whole number':'a number'} from ${min.toLocaleString('en-US')} to ${max.toLocaleString('en-US')}.`;return v;};
 const p=n('principal',0,1e9),d=n('deposit',0,1e9),y=n('years',0,100,true),mo=n('months',0,11,true),r=n('rate',0,100)/100,inf=n('inflation',0,25)/100;
 const options:Partial<Record<keyof Form,string[]>>={frequency:['1','4','12','365'],contribution:['1','12'],timing:['start','end'],rateType:['nominal','apy'],currency:['USD','EUR','GBP','CAD','AUD']};
 for(const [key,values]of Object.entries(options)){if(!values!.includes(f[key as keyof Form]))errors[key as keyof Form]='Choose an available option.';}
 const months=y*12+mo;if(months>1200)errors.months='Total duration must not exceed 100 years.';
 if(Object.keys(errors).length)return{errors,result:null};
 const frequency=Number(f.frequency),interval=f.contribution==='12'?1:12;
 const logYear=f.rateType==='apy'?Math.log1p(r):frequency*Math.log1p(r/frequency);
 const growth=Math.expm1(logYear/12);
 let balance=p,contributed=p;const rows:Row[]=[{month:0,balance,contributed,interest:0}];
 for(let month=1;month<=months;month++){
  if(f.timing==='start'&&(month-1)%interval===0){balance+=d;contributed+=d;}
  balance+=balance*growth;
  if(f.timing==='end'&&month%interval===0){balance+=d;contributed+=d;}
  if(!Number.isFinite(balance)||balance>1e15)return{errors:{rate:'Projection exceeds 1 quadrillion. Reduce the amount, rate or duration.'},result:null};
  rows.push({month,balance,contributed,interest:balance-contributed});
 }
 return{errors,result:{rows,annual:rows.filter(row=>row.month===0||row.month%12===0||row.month===months),balance,contributed,interest:balance-contributed,yield:Math.expm1(logYear)*100,real:balance/Math.pow(1+inf,months/12),months}};
}
export const money=(amount:number,currency:string)=>new Intl.NumberFormat('en-US',{style:'currency',currency,minimumFractionDigits:2,maximumFractionDigits:2}).format(amount);
export function assumptions(f:Form){return `${Number(f.years)} years ${Number(f.months)} months · ${Number(f.rate)}% ${f.rateType==='apy'?'APY':`annual rate, compounded ${({'1':'annually','4':'quarterly','12':'monthly','365':'daily (365/year)'} as Record<string,string>)[f.frequency]}`} · ${money(Number(f.deposit),f.currency)} ${f.contribution==='12'?'monthly':'yearly'}, ${f.timing==='end'?'end':'start'} of period · ${Number(f.inflation)}% inflation`;}
export function summary(f:Form,p:Projection){return `Compound Interest Calculator — Compound interest projection\nInitial: ${money(Number(f.principal),f.currency)}\n${assumptions(f)}\nProjected balance: ${money(p.balance,f.currency)}\nTotal paid in: ${money(p.contributed,f.currency)}\nInterest earned: ${money(p.interest,f.currency)}\n${Number(f.inflation)>0?`Today's purchasing power: ${money(p.real,f.currency)}\n`:''}Hypothetical fixed-rate estimate. Excludes taxes and fees; actual returns vary.`;}
export function csv(f:Form,p:Projection){f=serializeForm(f);return `Compound Interest Calculator — Growth projection\r\nCurrency,${f.currency}\r\nInitial,${f.principal}\r\nDuration months,${p.months}\r\nRate percent,${f.rate}\r\nRate type,${f.rateType}\r\nCompounds per year,${f.rateType==='apy'?'Not applicable (APY)':f.frequency}\r\nDeposit,${f.deposit}\r\nDeposits per year,${f.contribution}\r\nDeposit timing,${f.timing}\r\nInflation percent,${f.inflation}\r\nHypothetical estimate excluding taxes and fees\r\nMonth,Total paid in,Interest earned,Balance\r\n`+p.rows.map(row=>[row.month,row.contributed.toFixed(2),row.interest.toFixed(2),row.balance.toFixed(2)].join(',')).join('\r\n');}
const numericKeys=new Set<keyof Form>(['principal','deposit','years','months','rate','inflation']);
function serializeForm(f:Form):Form{
 if(!calculate(f).result)throw new Error('Invalid projection');
 return Object.fromEntries((Object.keys(defaults) as (keyof Form)[]).map(key=>[key,numericKeys.has(key)?String(Number(f[key])):f[key]])) as Form;
}
export function encode(f:Form){return '#v1='+encodeURIComponent(JSON.stringify(serializeForm(f)));}
export function decode(hash:string):Form{
 if(hash.length>2048||!hash.startsWith('#v1='))throw new Error('Unsupported or damaged link');
 const data=JSON.parse(decodeURIComponent(hash.slice(4)));
 if(!data||typeof data!=='object'||Array.isArray(data)||Object.keys(data).length!==Object.keys(defaults).length)throw new Error('Invalid link');
 const f={} as Form;for(const key of Object.keys(defaults) as (keyof Form)[]){if(typeof data[key]!=='string'||data[key].length>30)throw new Error('Invalid input');f[key]=data[key];}
 if(!calculate(f).result)throw new Error('Invalid values');return f;
}
