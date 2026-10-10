import {test} from 'node:test';
import assert from 'node:assert/strict';
import {decodePlan,encodePlan,planCsv,planSummary} from '../lib/plan-export';
import {plan,planDefaults} from '../lib/planning';

test('plan links restore mode, currency, frequency and timing without copying inactive fields',()=>{
 for(const mode of ['goal','withdrawal'] as const){
  const f={...planDefaults,principal:'12345.67',target:'65000',currency:'EUR',timing:'start',frequency:'365',withdrawal:'345.67',withdrawalFrequency:'1',years:'15',months:'7'};
  const restored=decodePlan(encodePlan(f,mode));
  assert.equal(restored.mode,mode);assert.deepEqual(plan(restored.form,mode),plan(f,mode));
  assert.equal(restored.form[mode==='goal'?'withdrawal':'target'],planDefaults[mode==='goal'?'withdrawal':'target']);
 }
});
test('damaged and hostile plan links are rejected',()=>{
 const hash=encodePlan(planDefaults,'goal'),data=JSON.parse(decodeURIComponent(hash.slice(7)));
 const pack=(x:unknown)=>'#plan1='+encodeURIComponent(JSON.stringify(x));
 for(const bad of ['#plan2='+hash.slice(7),'#plan1=%ZZ','#plan1=null',pack({...data,mode:'growth'}),pack({...data,inputs:{...data.inputs,rate:'Infinity'}}),pack({...data,inputs:{...data.inputs,target:'=1+1'}}),pack({...data,inputs:{...data.inputs,months:'12'}}),pack({...data,inputs:{...data.inputs,unknown:'1'}}),pack({...data,inputs:{...data.inputs,target:50000}}),'#plan1='+'x'.repeat(2050)])assert.throws(()=>decodePlan(bad));
});
test('withdrawal CSV records actual payments, shortages and all monthly rows',()=>{
 const f={...planDefaults,principal:'250',withdrawal:'100',years:'0',months:'3',rate:'0'},r=plan(f,'withdrawal').result!;
 const text=planCsv(f,r,'withdrawal');
 assert.ok(text.includes('Actually withdrawn,250.00\r\nUnfunded withdrawals,50.00\r\nDepleted month,3'));
 assert.ok(text.endsWith('3,250.00,0.00,0.00'));
 assert.ok(text.includes('0,0.00,0.00,250.00'));
 assert.ok(!text.includes('Total paid in'));
 assert.ok(planSummary(f,r,'withdrawal').includes('Unfunded: $50.00'));
});
test('goal exports agree with rounded forward projection and sanitize numeric CSV input',()=>{
 const f={...planDefaults,principal:' +1e3\n',target:'2200',rate:'0',years:'1'},r=plan(f,'goal').result!;
 assert.equal(r.payment,100);
 const text=planCsv(f,r,'goal');
 assert.ok(text.includes('principal,1000\r\n'));
 assert.ok(text.includes('Monthly saving,100.00'));
 assert.ok(text.endsWith('12,2200.00,0.00,2200.00'));
 assert.ok(planSummary(f,r,'goal').includes('Save $100.00 monthly'));
});
