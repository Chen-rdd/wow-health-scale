import type {VerifiedForm} from './form-types';
import type {QuestionnaireDraft} from './questionnaire-draft';
import {reviewedProfiles} from './reviewed-profiles';

/** Freeze one selection for both documents; later registry changes cannot alter it. */
export function createQuestionnairePackage(draft:QuestionnaireDraft,registry:VerifiedForm[],createdAt:string){
 if(!draft.formIds.length)throw new Error('请先选择量表。');
 if(new Set(draft.formIds).size!==draft.formIds.length)throw new Error('方案中存在重复表单。');
 const forms=draft.formIds.map(id=>{
  const form=registry.find(f=>f.id===id);
  if(!form)throw new Error('方案中的表单已不可用，请重新选择。');
  return structuredClone(form);
 });
 const blockers=forms.filter(f=>!f.exportReady).map(f=>({formId:f.id,label:f.label,reason:f.translationEvidence}));
 return {
  schema:1 as const,createdAt,title:draft.title.trim()||'调查问卷',
  ready:blockers.length===0,blockers,
  questionnaire:forms.map(f=>({formId:f.id,label:f.label,instructions:f.instructions,
   options:f.options.map(o=>({label:o.label,responseCode:o.printedCode??o.value})),
   items:f.items.map(i=>({number:i.number,text:i.text})),
   supplementaryItems:f.supplementaryItems??[],sourceUrl:f.sourceUrl,usage:f.usage})),
  instructions:forms.map(f=>({formId:f.id,label:f.label,sourceSha256:f.sourceSha256,
   sourceUrl:f.sourceUrl,scoringSource:f.scoringSource,rightsSource:f.rightsSource,
   options:f.options,items:f.items,dimensions:f.dimensions,
   rawSubscaleRange:f.rawSubscaleRange,comparisonMultiplier:f.comparisonMultiplier,
   scoringNote:f.scoringNote??'',translationEvidence:f.translationEvidence,
   usage:f.usage,review:f.review,verifiedAt:f.verifiedAt,
   profile:structuredClone(reviewedProfiles[f.versionId]??null)})),
 };
}
