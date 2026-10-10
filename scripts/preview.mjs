import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('out');await stat(root);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.xml':'application/xml','.txt':'text/plain; charset=utf-8','.json':'application/json'};
const server=http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end();}try{if((await stat(file)).isDirectory())file=resolve(file,'index.html');}catch{file=resolve(root,'404.html');res.statusCode=404;}const content=await readFile(file);res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.setHeader('X-Robots-Tag','noindex');res.setHeader('X-Content-Type-Options','nosniff');res.end(content);}catch{res.writeHead(404);res.end('Not found');}});
server.listen(Number(process.env.PORT||3000),'127.0.0.1',()=>console.log('Local production preview: http://127.0.0.1:'+server.address().port));
