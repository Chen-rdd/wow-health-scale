import {familyIntroductions,versionIntroductions} from './introduction-data';

export default function ScaleIntroduction({familyId,versionId}:{familyId:string;versionId?:string}){
 const family=familyIntroductions[familyId];
 const version=versionId?versionIntroductions[versionId]:undefined;
 if(!family)return null;
 const sources=version?.sources||family.sources;
 return <section className="scale-introduction" aria-label="量表简介与版本关系">
  <h2>量表简介</h2><p>{family.summary}</p>
  <div className="origin-description"><h3>原版与发展</h3><p className="origin-name">{family.original}</p><p>{family.history}</p></div>
  {version&&<div className="variant-description"><h3>本记录与原版的关系</h3><p>{version.relation}</p>{version.evidenceNote&&<p className="intro-evidence-note">{version.evidenceNote}</p>}</div>}
  <details className="intro-sources"><summary>简介与版本说明依据（{sources.length}）</summary><ul>{sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></li>)}</ul></details>
 </section>;
}
