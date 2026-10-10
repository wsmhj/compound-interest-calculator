import {test} from 'node:test';
import assert from 'node:assert/strict';
import {writeClipboard} from '../lib/clipboard';

test('clipboard writes the exact text',async()=>{
 let saved='';
 await writeClipboard('A projection\n$1,234.56',async value=>{saved=value;},30);
 assert.equal(saved,'A projection\n$1,234.56');
});
test('clipboard rejection reaches the manual-copy fallback',async()=>{
 await assert.rejects(writeClipboard('test',async()=>{throw new Error('Denied');},30),/Denied/);
});
test('a pending clipboard prompt reaches the fallback instead of hanging',async()=>{
 await assert.rejects(writeClipboard('test',()=>new Promise(()=>{}),20),/timed out/);
});
