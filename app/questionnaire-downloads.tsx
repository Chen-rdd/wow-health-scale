import {useEffect,useRef,useState} from 'react';
import type {QuestionnaireDraft} from './questionnaire-draft';
import {verifiedForms} from './verified-forms';
import {createQuestionnairePackage} from './questionnaire-package';
import {createQuestionnaireDocx} from '../lib/questionnaire-docx.mjs';
import {loadDocx} from '../lib/load-docx';

export default function QuestionnaireDownloads({draft}:{draft:QuestionnaireDraft}){
 const [busy,setBusy]=useState(false),[error,setError]=useState(''),[files,setFiles]=useState<string[]>([]);
 const alive=useRef(true),urls=useRef<string[]>([]),running=useRef(false);
 useEffect(()=>{alive.current=true;return()=>{alive.current=false;urls.current.forEach(URL.revokeObjectURL);};},[]);
 const blocked=draft.formIds.map(id=>verifiedForms.find(f=>f.id===id)!).filter(f=>!f.exportReady);
 async function generate(){
  if(running.current)return;
  running.current=true;setBusy(true);setError('');
  try{
   const data=createQuestionnairePackage(draft,verifiedForms,new Date().toISOString());
   const library=await loadDocx();
   const blobs=await Promise.all(['questionnaire','instructions'].map(kind=>library.Packer.toBlob(createQuestionnaireDocx(data,kind,library))));
   if(!alive.current)return;
   const next:string[]=[];
   try{for(const blob of blobs)next.push(URL.createObjectURL(blob));}catch(e){next.forEach(URL.revokeObjectURL);throw e;}
   urls.current.forEach(URL.revokeObjectURL);urls.current=next;setFiles(next);
  }catch(e){if(alive.current)setError(e instanceof Error?e.message:'文件生成失败，请重试。');}
  finally{running.current=false;if(alive.current)setBusy(false);}
 }
 return <section aria-labelledby="paired-export"><h3 id="paired-export">生成配套 Word 文件</h3><p>按当前选表顺序生成问卷和使用说明，两份文件使用同一份题文与计分资料。修改方案后需重新生成。</p>
 {!draft.formIds.length?<p>请先加入表单。</p>:blocked.length>0?<><p>以下表单仍有核验待办，暂不能导出本方案。可保留方案备份，或移除这些表单后生成：</p><ul>{blocked.map(f=><li key={f.id}>{f.label}：{f.translationEvidence}</li>)}</ul></>:<p>目前支持成人 DASS 四份已核对题本。译本与目标人群的验证证据仍需核对；使用条件随说明文件提供。</p>}
 <button type="button" disabled={!draft.formIds.length||blocked.length>0||busy} onClick={()=>void generate()}>{busy?'正在生成两份文件…':'生成问卷与使用说明'}</button>
 <p role="status">{error|| (files.length?'两份文件已生成，请分别下载保存。':'')}</p>
 {files.length>0&&<div className="builder-actions"><a href={files[0]} download="调查问卷.docx">下载当前问卷 Word</a><a href={files[1]} download="量表使用说明.docx">下载当前使用说明 Word</a></div>}
 <p>组合 PDF 导出仍在完善；可用 Word 打开文件后另存为 PDF。</p></section>;
}
