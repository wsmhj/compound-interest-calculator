import type {MetadataRoute} from 'next';
import {indexing,origin} from '../lib/site';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},...(indexing&&origin?{sitemap:origin+'/sitemap.xml'}:{})};}
