export const DRAFT_KEY='wow-health-scale:questionnaire:v1';
export type QuestionnaireDraft={schema:1;title:string;formIds:string[]};
export const emptyDraft=():QuestionnaireDraft=>({schema:1,title:'我的调查问卷',formIds:[]});
export function parseDraft(value:unknown,available:ReadonlySet<string>):QuestionnaireDraft{
 if(!value||typeof value!=='object')return emptyDraft();
 const x=value as Partial<QuestionnaireDraft>;
 if(x.schema!==1||!Array.isArray(x.formIds))return emptyDraft();
 return {schema:1,title:typeof x.title==='string'?x.title.slice(0,160):'我的调查问卷',formIds:[...new Set(x.formIds.filter((id):id is string=>typeof id==='string'&&available.has(id)))]};
}
export function moveForm(draft:QuestionnaireDraft,id:string,offset:number):QuestionnaireDraft{
 const ids=[...draft.formIds],from=ids.indexOf(id),to=from+offset;
 if(from<0||to<0||to>=ids.length)return draft;
 [ids[from],ids[to]]=[ids[to],ids[from]];return {...draft,formIds:ids};
}
