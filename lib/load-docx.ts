let loading:Promise<Record<string,any>>|undefined;
export function loadDocx(){
 if(loading)return loading;
 loading=new Promise<Record<string,any>>((resolve,reject)=>{
  const script=document.createElement('script');
  const timer=setTimeout(()=>{loading=undefined;script.remove();reject(new Error('Word生成工具加载超时，请重试。'));},20000);
  script.src=new URL('./vendor/docx-9.6.1.js',document.baseURI).href;
  script.onload=()=>{clearTimeout(timer);const library=(window as unknown as {docx?:Record<string,any>}).docx;if(library?.Packer)resolve(library);else{loading=undefined;script.remove();reject(new Error('Word生成工具加载不完整，请刷新后重试。'));}};
  script.onerror=()=>{clearTimeout(timer);loading=undefined;script.remove();reject(new Error('Word生成工具未能加载，请检查网络后重试。'));};
  document.head.appendChild(script);
 });return loading;
}
