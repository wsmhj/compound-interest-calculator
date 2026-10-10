import type {MetadataRoute} from 'next';
import {indexing,origin} from '../lib/site';
import {homeUpdated} from '../lib/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return indexing&&origin?['/','/about/','/contact/','/privacy/','/terms/','/cookies/','/disclaimer/'].map(path=>({url:origin+path,...(path==='/'?{lastModified:homeUpdated}:{})})):[];}
