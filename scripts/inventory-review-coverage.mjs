import {registerHooks} from 'node:module';
import {existsSync,mkdirSync,writeFileSync} from 'node:fs';
registerHooks({resolve(s,c,next){if(s.startsWith('.')&&c.parentURL&&!/\.[a-z]+$/i.test(s)){const u=new URL(s+'.ts',c.parentURL);if(existsSync(u))return next(u.href,c);}return next(s,c);}});
const {versions}=await import('../app/data.ts');
const {reviewedProfiles}=await import('../app/reviewed-profiles.ts');
const {verifiedForms}=await import('../app/verified-forms.ts');
const {versionReferences}=await import('../app/references.ts');
const ids=new Set(versions.map(v=>v.id));
for(const id of Object.keys(reviewedProfiles))if(!ids.has(id))throw Error('Profile has no catalog record: '+id);
const records=versions.map(v=>{
 const profile=reviewedProfiles[v.id],forms=verifiedForms.filter(f=>f.versionId===v.id),ref=versionReferences[v.id];
 return {id:v.id,familyId:v.familyId,name:v.name,selectable:v.selectable,
  status:!v.selectable?'目录导航；不是独立施测表':profile?'已补充来源说明；完整核验范围须读具体说明':'历史索引；逐项证据复核待完成',
  reviewDate:profile?.reviewed??null,reviewScope:profile?.reviewScope??(profile?'按现有逐条来源说明；不得视作所有译本完整验证':'完整题文、选项、计分、漏答、中文研究及权限仍待逐一核对'),
  sources:profile?[...new Set([...profile.definition,...profile.scoring,...profile.limits].map(p=>p.source).concat(profile.translations.map(t=>t.url)))]:[],
  primaryReference:ref?{title:ref.title,url:ref.url,role:ref.role}:null,
  registeredForms:forms.map(f=>({id:f.id,language:f.language,sourceUrl:f.sourceUrl,exportReady:f.exportReady,blockReason:f.exportBlockReason??null,studyEvidence:f.studyEvidence??[]}))};
});
const summary={records:records.length,selectableRecords:records.filter(r=>r.selectable).length,
 recordsWithSourcedProfiles:records.filter(r=>r.selectable&&r.sources.length>0).length,
 selectableRecordsWithoutSourcedProfiles:records.filter(r=>r.selectable&&!r.sources.length).length,
 registeredForms:verifiedForms.length,exportableForms:verifiedForms.filter(f=>f.exportReady).length,
 warning:'说明覆盖数量不是完整题本、独立中文验证或授权完成数量。别名合并后的前台数量另计。'};
mkdirSync('audit',{recursive:true});
writeFileSync('audit/review-coverage.json',JSON.stringify({summary,records},null,2)+'\n');
const safe=s=>String(s).replaceAll('|','／').replaceAll('\n',' ');
writeFileSync('audit/REVIEW-COVERAGE.md','# 全量历史记录核验清单\n\n由 `node scripts/inventory-review-coverage.mjs` 生成。说明覆盖不等于完整科学核验；未将缺失材料标为完成。\n\n'+
 `登记${summary.records}条，其中${summary.selectableRecords}条可选择；${summary.recordsWithSourcedProfiles}条有单独来源说明，${summary.selectableRecordsWithoutSourcedProfiles}条仍待补充。原件表单${summary.registeredForms}份，开放导出${summary.exportableForms}份。\n\n`+
 '| 记录 | 名称 | 状态与核对范围 |\n| --- | --- | --- |\n'+records.map(r=>`| ${r.id} | ${safe(r.name)} | ${safe(r.status+'；'+r.reviewScope)} |`).join('\n')+'\n');
console.log(JSON.stringify(summary,null,2));
