import {registerHooks}from'node:module';
import {existsSync,mkdirSync,writeFileSync,readFileSync}from'node:fs';
registerHooks({resolve(s,c,next){if(s.startsWith('.')&&c.parentURL&&!/\.[a-z]+$/i.test(s)){const u=new URL(s+'.ts',c.parentURL);if(existsSync(u))return next(u.href,c);}return next(s,c);}});
const {verifiedForms}=await import('../app/verified-forms.ts');
const {createQuestionnairePackage}=await import('../app/questionnaire-package.ts');
const {renderQuestionnairePrint}=await import('../app/questionnaire-print.ts');
const {createQuestionnaireDocx}=await import('../lib/questionnaire-docx.mjs');
// Pass the documented artifact runtime's docx module path explicitly.
const d=await import(process.argv[2]);
const candidates=process.argv.includes('--include-candidates');
const checked=candidates?new Set(JSON.parse(readFileSync('audit/source-checks.json','utf8')).filter(r=>r.matchesRegisteredHash).map(r=>r.id)):new Set();
const registry=structuredClone(verifiedForms);
// Explicitly named QA mode creates LOCAL review documents only; production registry is never modified.
if(candidates)for(const f of registry)if(checked.has(f.id))f.exportReady=true;
mkdirSync('audit/exports',{recursive:true});mkdirSync('audit/html-review',{recursive:true});
for(const f of registry.filter(f=>f.exportReady)){
 const data=createQuestionnairePackage({schema:1,title:f.label,formIds:[f.id]},registry,new Date().toISOString());
 for(const kind of ['questionnaire','instructions']){
  const stem=f.id+'-'+kind;
  writeFileSync('audit/exports/'+stem+'.docx',await d.Packer.toBuffer(createQuestionnaireDocx(data,kind,d)));
  writeFileSync('audit/html-review/'+stem+'.html',renderQuestionnairePrint(data,kind));
 }
}
console.log(`Prepared ${registry.filter(f=>f.exportReady).length} LOCAL review pairs; production approvals unchanged.`);
