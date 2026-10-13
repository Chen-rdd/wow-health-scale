import type {VerifiedForm} from './form-types';

export type FormAvailability='all'|'exportable'|'preview';

function normalize(text:string){
 return text.normalize('NFKC').toLowerCase().replace(/[\s\-–—_（）()]/g,'');
}

export function filterQuestionnaireForms(forms:readonly VerifiedForm[],query:string,availability:FormAvailability){
 const keyword=normalize(query);
 return forms.filter(form=>{
  if(availability==='exportable'&&!form.exportReady)return false;
  if(availability==='preview'&&form.exportReady)return false;
  const language=/^zh-(CN|Hans)(-|$)/.test(form.language)?'简体中文':/^zh-(TW|Hant)(-|$)/.test(form.language)?'繁体中文':form.language==='en'?'英文 英语':form.language;
  return normalize(`${form.label} ${form.language} ${language}`).includes(keyword);
 });
}

export function summarizeQuestionnaireForms(forms:readonly VerifiedForm[]){
 const exportable=forms.filter(form=>form.exportReady).length;
 return {total:forms.length,exportable,preview:forms.length-exportable};
}
