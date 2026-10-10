import {test} from 'node:test';
import assert from 'node:assert/strict';
import {plan,planDefaults,PlanForm} from '../lib/planning';
const near=(a:number,b:number)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);
const run=(mode:'goal'|'withdrawal',patch:Partial<PlanForm>={})=>{const v=plan({...planDefaults,...patch},mode);assert.ok(v.result,JSON.stringify(v.errors));return v.result;};
test('withdrawals agree with hand-stepped end and beginning cash flows',()=>{
 const f={principal:'1000',withdrawal:'100',years:'0',months:'2',rate:'12'};
 const end=run('withdrawal',f);near(end.projection.balance,819.1);near(end.projection.interest,19.1);near(end.withdrawn!,200);
 const start=run('withdrawal',{...f,timing:'start'});near(start.projection.balance,817.09);near(start.projection.interest,17.09);
});
test('partial withdrawals, exact depletion and first underfunded payment are distinct',()=>{
 const f={principal:'250',withdrawal:'100',years:'0',months:'3',rate:'0'};
 const p=run('withdrawal',f);near(p.withdrawn!,250);near(p.shortfall!,50);assert.equal(p.depleted,3);assert.equal(p.underfunded,3);
 const exact=run('withdrawal',{...f,principal:'200'});assert.equal(exact.depleted,2);assert.equal(exact.underfunded,3);
 const immediate=run('withdrawal',{...f,principal:'50',timing:'start'});assert.equal(immediate.depleted,0);assert.equal(immediate.underfunded,0);near(immediate.shortfall!,250);
});
test('yearly timing, partial year, zero horizon and zero request',()=>{
 const f={principal:'1000',withdrawal:'100',rate:'0',years:'1',months:'6',withdrawalFrequency:'1'};
 near(run('withdrawal',f).withdrawn!,100);near(run('withdrawal',{...f,timing:'start'}).withdrawn!,200);
 near(run('withdrawal',{...f,years:'0',months:'0',timing:'start'}).withdrawn!,0);
 near(run('withdrawal',{...f,withdrawal:'0'}).projection.balance,1000);
});
test('withdrawal conservation across frequencies and timings; no negative balances',()=>{
 for(const frequency of ['1','4','12','365'])for(const timing of ['start','end'])for(const withdrawalFrequency of ['1','12']){
  const r=run('withdrawal',{frequency,timing,withdrawalFrequency,years:'40'});
  near(r.projection.balance+r.withdrawn!,10000+r.projection.interest);
  assert.ok(r.projection.rows.every(row=>Number.isFinite(row.balance)&&row.balance>=0));
 }
});
test('goal independent zero and positive-rate examples; cent rounding',()=>{
 near(run('goal',{principal:'1000',target:'2200',rate:'0',years:'1'}).payment!,100);
 near(run('goal',{principal:'0',target:'201',rate:'12',years:'0',months:'2'}).payment!,100);
 const p=run('goal',{principal:'0',target:'100',rate:'0',years:'0',months:'3'});near(p.payment!,33.34);near(p.projection.balance,100.02);
});
test('rounded goal payments meet targets and one cent less misses for nonzero payments',()=>{
 for(const rate of ['0','0.000001','5','12'])for(const timing of ['start','end'])for(const frequency of ['1','4','12','365']){
  const p=run('goal',{rate,timing,frequency});assert.ok(p.projection.balance>=50000-1e-6);
  const q=(1+Number(rate)/100/Number(frequency))**(Number(frequency)/12);
  const s=rate==='0'?120:((q**120-1)/(q-1))*(timing==='start'?q:1);
  const lower=10000*q**120+(p.payment!-.01)*s;
  assert.ok(lower<50000+.001);
 }
});
test('goal already funded, interest-only target and impossible zero horizon',()=>{
 assert.equal(run('goal',{target:'9000'}).payment,0);assert.equal(run('goal',{target:'9000'}).reached,0);
 assert.equal(run('goal',{target:'11000',years:'10'}).payment,0);
 assert.equal(plan({...planDefaults,years:'0',months:'0'},'goal').result,null);
 near(run('goal',{target:'10000',years:'0',months:'0'}).projection.balance,10000);
});
test('invalid and unsafe planning values remove the result',()=>{
 for(const mode of ['goal','withdrawal'] as const)for(const [key,value]of [['principal',''],['years','1.2'],['months','12'],['rate','101'],['currency','XXX'],[mode==='goal'?'target':'withdrawal','-1'],[mode==='goal'?'target':'withdrawal','Infinity']])assert.equal(plan({...planDefaults,[key]:value},mode).result,null);
 assert.equal(plan({...planDefaults,withdrawalFrequency:'2'},'withdrawal').result,null);
 assert.equal(plan({...planDefaults,years:'100',rate:'100'},'goal').result,null);
});
