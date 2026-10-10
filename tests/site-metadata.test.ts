import {test} from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

function inspect(siteUrl:string,indexing:string){
 const script=`const {metadata}=require('./lib/site.ts');const robots=require('./app/robots.ts').default;const sitemap=require('./app/sitemap.ts').default;const {homeSchema}=require('./lib/schema.ts');const {GET}=require('./app/llms.txt/route.ts');(async()=>{console.log(JSON.stringify({metadata:metadata('Compound Interest Calculator','Description'),robots:robots(),sitemap:sitemap(),schema:homeSchema(),llms:await GET().text()}));})();`;
 return JSON.parse(execFileSync(process.execPath,['--import','tsx','--input-type=commonjs','-e',script],{encoding:'utf8',env:{...process.env,NEXT_PUBLIC_SITE_URL:siteUrl,NEXT_PUBLIC_ALLOW_INDEXING:indexing},stdio:['ignore','pipe','pipe']}));
}
test('local preview stays noindex without inventing a canonical or public domain',()=>{
 const state=inspect('','false');
 assert.equal(state.metadata.robots.index,false);
 assert.equal(state.metadata.alternates,undefined);
 assert.equal(state.robots.sitemap,undefined);
 assert.deepEqual(state.sitemap,[]);
 assert.ok(state.llms.includes('[Compound interest calculator](/)'));
 assert.ok(!JSON.stringify(state.schema).includes('127.0.0.1'));
});
test('public configuration aligns canonical, sitemap, brand and entity references',()=>{
 // Reserved example domain is only a test fixture, never written into the site configuration.
 const state=inspect('https://example.com','true');
 assert.equal(state.metadata.robots.index,true);
 assert.equal(state.metadata.alternates.canonical,'https://example.com/');
 assert.equal(state.robots.sitemap,'https://example.com/sitemap.xml');
 assert.equal(state.sitemap.length,7);
 assert.ok(state.sitemap.some((entry:{url:string})=>entry.url==='https://example.com/cookies/'));
 assert.ok(state.sitemap.some((entry:{url:string})=>entry.url==='https://example.com/disclaimer/'));
 assert.equal(state.sitemap[0].lastModified,'2026-10-10');
 assert.equal(state.metadata.openGraph.siteName,'Compound Interest Calculator');
 assert.equal(state.metadata.title.absolute,state.metadata.openGraph.title);
 assert.equal(state.metadata.twitter.title,state.metadata.openGraph.title);
 const graph=state.schema['@graph'],ids=new Set(graph.map((node:Record<string,unknown>)=>node['@id']));
 for(const node of graph){
  assert.ok(node['@id'].startsWith('https://example.com/'));
  for(const key of ['author','publisher','mainEntity','isPartOf'])if(node[key])assert.ok(ids.has(node[key]['@id']));
 }
 assert.ok(graph.some((node:Record<string,unknown>)=>node['@type']==='WebSite'&&node.name==='Compound Interest Calculator'));
 assert.ok(!JSON.stringify(graph).includes('sameAs'));
 assert.ok(!JSON.stringify(graph).includes('datePublished'));
 assert.ok(state.llms.includes('https://example.com/#formula'));
});
test('indexing requires an actual configured HTTPS origin',()=>{
 assert.throws(()=>inspect('','true'));
 assert.throws(()=>inspect('http://example.com','true'));
 assert.throws(()=>inspect('https://127.0.0.1','true'));
});
