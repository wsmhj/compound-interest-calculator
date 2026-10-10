import {brand,email,origin} from './site';
import {homeUpdated,compoundDefinitionSource,homeTitle,homeDescription} from './content';

export function homeSchema(){
 const url=(path:string)=>(origin??'')+path;
 const publisher={'@id':url('/#publisher')};
 return {'@context':'https://schema.org','@graph':[
  {'@type':'Organization',...publisher,name:brand,description:'Independent educational calculation tools.',email,url:url('/about/'),logo:url('/icon.svg')},
  {'@type':'WebSite','@id':url('/#website'),name:brand,url:url('/'),inLanguage:'en',publisher},
  {'@type':'WebPage','@id':url('/#webpage'),url:url('/'),name:homeTitle,description:homeDescription,inLanguage:'en',isPartOf:{'@id':url('/#website')},author:publisher,publisher,dateModified:homeUpdated,mainEntity:{'@id':url('/#calculator-app')},citation:[compoundDefinitionSource,'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator','https://support.microsoft.com/en-us/excel/functions/fv-function','https://support.microsoft.com/en-us/excel/functions/pmt-function']},
  {'@type':'WebApplication','@id':url('/#calculator-app'),name:'Compound Interest Calculator',url:url('/'),applicationCategory:'FinanceApplication',operatingSystem:'Any with a modern web browser',inLanguage:'en',author:publisher,publisher,dateModified:homeUpdated,description:'An educational compound interest calculator with growth, savings goal and withdrawal modes, monthly charts and worked examples.',offers:{'@type':'Offer',price:'0',priceCurrency:'USD'},isAccessibleForFree:true},
 ]};
}
