/** Clipboard permission prompts can leave writeText pending indefinitely. */
export async function writeClipboard(
 text:string,
 write:(value:string)=>Promise<void>=value=>navigator.clipboard.writeText(value),
 timeoutMs=2000,
){
 let timer:ReturnType<typeof setTimeout>|undefined;
 try{
  await Promise.race([
   write(text),
   new Promise<never>((_,reject)=>{timer=setTimeout(()=>reject(new Error('Clipboard timed out')),timeoutMs);}),
  ]);
 }finally{clearTimeout(timer);}
}
