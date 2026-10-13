import {registerHooks} from 'node:module';
import {existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

// Source uses bundler-style extensionless TS imports. Node 24 strips TS types.
registerHooks({resolve(specifier,context,nextResolve){
 if(specifier.startsWith('.')&&context.parentURL&&!/\.[a-z]+$/i.test(specifier)){
  const candidate=new URL(specifier+'.ts',context.parentURL);
  if(existsSync(candidate))return nextResolve(candidate.href,context);
 }
 return nextResolve(specifier,context);
}});

const {verifiedForms}=await import('../app/verified-forms.ts');
const {filterQuestionnaireForms,summarizeQuestionnaireForms}=await import('../app/questionnaire-catalog.ts');
const {parseDraft,moveForm}=await import('../app/questionnaire-draft.ts');
const {createQuestionnairePackage}=await import('../app/questionnaire-package.ts');
const {renderQuestionnairePrint}=await import('../app/questionnaire-print.ts');
const {createQuestionnaireDocx}=await import('../lib/questionnaire-docx.mjs');
const available=new Set(verifiedForms.map(form=>form.id));

test('availability filters partition the registry without changing records',()=>{
 const original=structuredClone(verifiedForms);
 const summary=summarizeQuestionnaireForms(verifiedForms);
 const ready=filterQuestionnaireForms(verifiedForms,'','exportable');
 const pending=filterQuestionnaireForms(verifiedForms,'','preview');
 assert.equal(summary.total,verifiedForms.length);
 assert.equal(summary.exportable,ready.length);
 assert.equal(summary.preview,pending.length);
 assert.equal(ready.length+pending.length,verifiedForms.length);
 assert.ok(ready.every(form=>form.exportReady));
 assert.ok(pending.every(form=>!form.exportReady));
 assert.deepEqual(verifiedForms,original);
});

test('name normalization and language aliases work across actual language codes',()=>{
 const expected=verifiedForms.filter(form=>form.id.startsWith('phq-9-'));
 assert.deepEqual(filterQuestionnaireForms(verifiedForms,' ＰＨＱ９ ','all'),expected);
 for(const [query,pattern]of [['简体中文',/^zh-(CN|Hans)(-|$)/],['繁体中文',/^zh-(TW|Hant)(-|$)/],['英语',/^en$/]]){
  assert.deepEqual(filterQuestionnaireForms(verifiedForms,query,'all'),verifiedForms.filter(form=>pattern.test(form.language)));
 }
 assert.equal(filterQuestionnaireForms(verifiedForms,'PHQ9','exportable').length,expected.filter(f=>f.exportReady).length);
 assert.ok(filterQuestionnaireForms(verifiedForms,'DASS21','exportable').length>0);
 assert.equal(filterQuestionnaireForms(verifiedForms,'不存在的题本','all').length,0);
});

test('instruction snapshots retain reverse keys, source pages, research limits and unscored additions',()=>{
 const registry=structuredClone(verifiedForms);
 const f=registry.find(f=>f.id==='phq-9-en');
 f.exportReady=true;
 f.items[0].reverse=true;
 f.items[0].sourcePage=9;
 f.studyEvidence=[{label:'Study',url:'https://example.org/study',status:'尚未确认',note:'Exact translation not established'}];
 const data=createQuestionnairePackage({schema:1,title:'研究用',formIds:[f.id]},registry,'2026-10-13T00:00:00Z');
 assert.equal(data.instructions[0].items[0].reverse,true);
 assert.equal(data.instructions[0].items[0].sourcePage,9);
 assert.deepEqual(data.instructions[0].supplementaryItems,data.questionnaire[0].supplementaryItems);
 assert.ok(data.instructions[0].supplementaryItems.length>0);
 const html=renderQuestionnairePrint(data,'instructions');
 assert.ok(html.includes('逐题评分与原件对应'));
 assert.ok(html.includes('Exact translation not established'));
 assert.ok(html.includes(data.instructions[0].supplementaryItems[0].text));
 registry[0].items[0].reverse=false;
 f.studyEvidence[0].note='changed';
 assert.equal(data.instructions[0].studyEvidence[0].note,'Exact translation not established');
});

test('export blockers describe file review, independently of translation validation',()=>{
 const registry=structuredClone(verifiedForms);
 const f=registry.find(f=>f.id==='dass21-en');
 f.exportReady=false;f.exportBlockReason='Source unavailable';f.translationEvidence='Translation is matched';
 const data=createQuestionnairePackage({schema:1,title:'研究用',formIds:[f.id]},registry,'2026-10-13T00:00:00Z');
 assert.equal(data.blockers[0].reason,'Source unavailable');
 assert.throws(()=>renderQuestionnairePrint(data,'instructions'),/核验/);
});

test('filtering keeps the stored selection and order, including pending forms',()=>{
 const draft={schema:1,title:'混合方案',formIds:['phq-9-en','dass21-en']};
 const original=structuredClone(draft);
 filterQuestionnaireForms(verifiedForms,'','exportable');
 assert.deepEqual(parseDraft(draft,available),original);
 assert.deepEqual(moveForm(draft,'dass21-en',-1).formIds,['dass21-en','phq-9-en']);
 assert.deepEqual(draft,original);
});

test('every unapproved form blocks both Word and print output',()=>{
 for(const form of verifiedForms.filter(form=>!form.exportReady)){
  const data=createQuestionnairePackage({schema:1,title:'待核验方案',formIds:['dass21-en',form.id]},verifiedForms,'2026-10-13T00:00:00Z');
  assert.equal(data.ready,false);
  assert.deepEqual(data.blockers.map(blocker=>blocker.formId),[form.id]);
  for(const kind of ['questionnaire','instructions']){
   assert.throws(()=>renderQuestionnairePrint(data,kind),/核验/);
   assert.throws(()=>createQuestionnaireDocx(data,kind,{}),/核验/);
  }
 }
});

test('exportable selections preserve order and share a detached snapshot',()=>{
 const registry=structuredClone(verifiedForms);
 const ids=['dass21-zh-tm','dass42-en'];
 const data=createQuestionnairePackage({schema:1,title:'<研究方案>',formIds:ids},registry,'2026-10-13T00:00:00Z');
 assert.equal(data.ready,true);
 assert.deepEqual(data.questionnaire.map(form=>form.formId),ids);
 assert.deepEqual(data.instructions.map(form=>form.formId),ids);
 const original=data.questionnaire[0].items[0].text;
 registry.find(form=>form.id===ids[0]).items[0].text='changed';
 assert.equal(data.questionnaire[0].items[0].text,original);
 for(const kind of ['questionnaire','instructions']){
  const html=renderQuestionnairePrint(data,kind);
  assert.ok(html.includes('&lt;研究方案&gt;'));
  assert.ok(html.includes(data.createdAt));
  assert.ok(!html.includes('<研究方案>'));
 }
});
