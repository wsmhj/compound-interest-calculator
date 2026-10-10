import type {Metadata} from 'next';
export const brand='Compound Interest Calculator';
export const email='websiteaftersales@gmail.com';
const configured=process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const origin=configured?new URL(configured).origin:undefined;
export const indexing=process.env.NEXT_PUBLIC_ALLOW_INDEXING==='true';
if(configured&&(new URL(configured).protocol!=='https:'||/localhost|127\.0\.0\.1/.test(configured)||new URL(configured).pathname!=='/'))throw new Error('SITE_URL must be a real HTTPS origin without a path.');
if(indexing&&!origin)throw new Error('Public indexing requires NEXT_PUBLIC_SITE_URL.');
export function metadata(title:string,description:string,path='/'):Metadata{const pageTitle=title.includes(brand)?title:`${title} | ${brand}`;return{title:{absolute:pageTitle},description,alternates:origin?{canonical:origin+path}:undefined,robots:{index:indexing,follow:true},openGraph:{title:pageTitle,description,siteName:brand,type:'website',...(origin?{url:origin+path,images:[{url:origin+'/og.png',width:1200,height:630,alt:'Compound Interest Calculator'}]}:{})},twitter:{card:'summary_large_image',title:pageTitle,description,...(origin?{images:[origin+'/og.png']}:{})}};}
