import {familyIntroductions,versionIntroductions} from './introduction-data';
import {reviewedProfiles} from './reviewed-profiles';

export default function ScaleIntroduction({familyId,versionId}:{familyId:string;versionId?:string}){
 const family=familyIntroductions[familyId];
 const version=versionId?versionIntroductions[versionId]:undefined;
 if(!family)return null;
 const reviewed=versionId?reviewedProfiles[versionId]:undefined;
 const sources=[...new Map([...family.sources,...(version?.sources||[])].map(s=>[s.url,s])).values()];
 return <section className="scale-introduction" aria-label="量表简介与版本关系">
  <h2>量表简介</h2>{reviewed?reviewed.definition.map((p,i)=><p key={i}>{p.text} <a href={p.source} target="_blank" rel="noreferrer">〔{p.label}〕</a></p>):<p>{family.summary}</p>}
  <div className="origin-description"><h3>原版与发展</h3><p className="origin-name">{family.original}</p><p>{family.history}</p></div>
  {version&&<div className="variant-description"><h3>本记录与原版的关系</h3><p>{version.relation}</p>{version.evidenceNote&&<p className="intro-evidence-note">{version.evidenceNote}</p>}</div>}
  <details className="intro-sources"><summary>简介与版本说明依据（{sources.length}）</summary><ul>{sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></li>)}</ul></details>
 </section>;
}
