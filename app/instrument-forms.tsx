import {verifiedForms} from './verified-forms';
export default function InstrumentForms({versionId}:{versionId:string}){
 const forms=verifiedForms.filter(f=>f.versionId===versionId);
 if(!forms.length)return null;
 return <section className="scale-introduction"><h2>正式题目与选项</h2><p>按具体语言和译者查看原文。这里是问卷资料预览，不收集作答，也不提供自测结果。</p>
 {forms.map(f=><details className="form-preview" key={f.id}><summary>{f.label} · {f.itemCount}题</summary>
 <p>{f.instructions}</p><ul>{f.options.map(o=><li key={o.value}><b>{o.printedCode===undefined?o.value:`原表编号 ${o.printedCode}`}</b>：{o.label}{o.printedCode!==undefined&&`（计分 ${o.value} 分）`}</li>)}</ul>
 {f.scoringNote&&<p className="intro-evidence-note">{f.scoringNote}</p>}
 <ol>{f.items.map(item=><li key={item.number} value={item.number}>{item.text}</li>)}</ol>
 {f.supplementaryItems?.map((item,i)=><div key={i}><h3>原表附加问题（不计入总分）</h3><p>{item.text}</p><ul>{item.options.map(option=><li key={option}>{option}</li>)}</ul></div>)}
 <p><a href={f.sourceUrl} target="_blank" rel="noreferrer">查看官方问卷原件 ↗</a> · <a href={f.scoringSource} target="_blank" rel="noreferrer">对应评分键 ↗</a></p>
 <p className="intro-evidence-note">{f.translationEvidence}</p><p className="intro-evidence-note">{f.usage}</p>
 </details>)}</section>;
}
