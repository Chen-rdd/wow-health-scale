"use client";
import AtlasHeader from "../atlas-header";

import { useEffect, useMemo, useState } from "react";
import { families, versions } from "../data";
import {recordUrl,seriesNode,visibleRecords,catalog} from "../taxonomy";
import AdministrationPanel from "../administration-panel";
import ScaleIntroduction from "../scale-introduction";
import { versionReferences } from "../references";
import { Search, LibraryBig, BookOpen, ShieldCheck, ExternalLink, X, SlidersHorizontal, ChevronDown, GitBranch, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const topics = [...new Set(families.map((f) => f.topic))];
const aliases: [RegExp,string][] = [[/老年人|老年者|老人家|老人|老龄化|老龄|高龄/g,"老年"],[/青少年|青春期/g,"青年"],[/儿童|小孩|孩子/g,"儿童"],[/抑郁症|抑郁情绪/g,"抑郁"],[/焦虑症|焦虑情绪/g,"焦虑"],[/睡不好|睡眠障碍/g,"睡眠"],[/生活品质/g,"生活质量"],[/问卷|测验/g,"量表"]];
const familyById = new Map(families.map((f) => [f.id, f]));

function normalize(text:string) { let value=text.toLowerCase().normalize("NFKC"); for(const [from,to] of aliases) value=value.replace(from,to); return value.replace(/[\s\-–—_/（）()，,。.；;:：]+/g,""); }
function riskClass(risk:string) { return risk.includes("高")?"high":risk.includes("中")?"mid":"low"; }

export default function Home(){
  const [query,setQuery]=useState(""); const [topic,setTopic]=useState("全部主题"); const [selectable,setSelectable]=useState("全部记录"); const [risk,setRisk]=useState("全部风险"); const [selectedId,setSelectedId]=useState("VR-PH-001-001"); const [filtersOpen,setFiltersOpen]=useState(true);
  const results=useMemo(()=>{ const q=normalize(query); return visibleRecords.filter(v=>{ const f=familyById.get(v.familyId)!; if(topic!=="全部主题"&&v.topic!==topic)return false; if(selectable==="具体版本"&&!v.selectable)return false; if(selectable==="量表大类"&&v.selectable)return false; if(risk!=="全部风险"&&!v.copyrightRisk.includes(risk))return false; const hay=normalize([v.id,v.name,v.abbreviation,v.role,v.itemCount,v.parent,v.relation,v.population,v.scoring,v.chinese,f?.target,f?.plannedVersions].join(" ")); return !q||hay.includes(q); }); },[query,topic,selectable,risk]);
  const selected=versions.find(v=>v.id===selectedId)??results[0]??versions[0]; const family=familyById.get(selected.familyId)!; const related=visibleRecords.filter(v=>seriesNode(v)===seriesNode(selected)); const reference=(versionReferences as Record<string,{title:string;authors:string;journal:string;year:string;doi:string;pmid:string;url:string;role:string;confidence:string}>)[selected.id];

  useEffect(()=>{ const context=(document as typeof document&{modelContext?:{registerTool:(tool:object,options?:{signal?:AbortSignal})=>void|Promise<void>}}).modelContext; if(!context?.registerTool)return; const lifecycle=new AbortController(); void Promise.resolve(context.registerTool({name:"search_scale_versions",title:"检索量表版本",description:"使用关键词和可选主题检索量表版本；支持老人、老龄等中文近义表达。",inputSchema:{type:"object",properties:{keyword:{type:"string"},topic:{type:"string",enum:["全部主题",...topics]}},required:["keyword"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input:unknown){if(!input||typeof input!=="object"||typeof(input as {keyword?:unknown}).keyword!=="string")throw new Error("keyword 必须是字符串");const x=input as {keyword:string;topic?:string};if(x.topic&&!["全部主题",...topics].includes(x.topic))throw new Error("无效主题");const t=x.topic??"全部主题",q=normalize(x.keyword);const hits=visibleRecords.filter(v=>(t==="全部主题"||v.topic===t)&&normalize([v.name,v.abbreviation,v.population,v.role,v.itemCount,familyById.get(v.familyId)?.target].join(" ")).includes(q));setQuery(x.keyword);setTopic(t);if(hits[0])setSelectedId(hits[0].id);return{versionCount:hits.length,firstVersionId:hits[0]?.id??null};}},{signal:lifecycle.signal})).catch(()=>undefined);return()=>lifecycle.abort();},[]);

  return <main className="search-atlas min-h-screen text-slate-950">
    <AtlasHeader active="search" summary={`${catalog.reduce((n,t)=>n+t.children.length,0)} 个系列 · ${visibleRecords.length} 条索引记录`}/>

    <div className="mx-auto max-w-[1700px] px-3 py-4 sm:px-6">
      <section className="showcase-panel">
        <div className="panel-title"><Search size={16}/><h2>量表版本检索</h2><button onClick={()=>setFiltersOpen(!filtersOpen)} className="ml-auto flex items-center gap-1 text-[12px] font-normal text-blue-100">{filtersOpen?"收起":"展开"}<ChevronDown size={14} className={filtersOpen?"rotate-180":""}/></button></div>
        <div className="p-4"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={19}/><Input value={query} onChange={e=>setQuery(e.target.value)} placeholder="输入量表名、简称、用途、适用人群、题量或版本关系；支持近义词，例如“老人”可匹配“老年人”" className="h-11 rounded-none border-slate-400 bg-white pl-10 pr-10 text-[15px] focus-visible:ring-1 focus-visible:ring-[#24618d]"/>{query&&<button aria-label="清空" onClick={()=>setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"><X size={17}/></button>}</div>
          {filtersOpen&&<div className="mt-4 grid gap-3 md:grid-cols-3"><Filter label="研究主题" value={topic} onChange={setTopic} options={["全部主题",...topics]}/><Filter label="记录层级" value={selectable} onChange={setSelectable} options={["全部记录","具体版本","量表大类"]}/><Filter label="版权风险" value={risk} onChange={setRisk} options={["全部风险","低","中","高"]}/></div>}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3 text-[12px] text-slate-600"><SlidersHorizontal size={14}/><b className="text-slate-900">{results.length}</b> 条记录{query&&<Badge className="rounded-sm bg-[#e8f1f7] text-[#174e74]">检索词：{query}</Badge>}<button onClick={()=>{setQuery("");setTopic("全部主题");setSelectable("全部记录");setRisk("全部风险")}} className="ml-auto text-[#1c5d89] hover:underline">重置全部条件</button></div>
        </div>
      </section>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(680px,1.45fr)_minmax(380px,.75fr)]">
        <section className="showcase-panel min-w-0"><div className="panel-title"><FileText size={16}/><h2>搜索结果</h2><span className="ml-auto text-[11px] font-normal text-blue-100">点击一行查看完整元数据</span></div><div className="overflow-x-auto"><Table><TableHeader><TableRow className="bg-[#e9edf1] hover:bg-[#e9edf1]"><TableHead className="w-[116px]">记录 ID</TableHead><TableHead>量表名称</TableHead><TableHead className="w-[120px]">题量 / 类型</TableHead><TableHead className="w-[122px]">主题</TableHead><TableHead className="w-[150px]">相关文献</TableHead></TableRow></TableHeader><TableBody>{results.map(v=>{const ref=(versionReferences as Record<string,{url:string;role:string}>)[v.id];return <TableRow key={v.id} onClick={()=>setSelectedId(v.id)} className={`cursor-pointer ${selected.id===v.id?"selected-row":""}`}><TableCell><span className="record-id">{v.id}</span></TableCell><TableCell><a href={recordUrl(v)} className="font-semibold text-[#174e74] underline">{v.abbreviation}{!v.selectable&&" 系列"}</a><div className="mt-0.5 max-w-[440px] text-[12px] leading-4 text-slate-600">{v.name}</div><div className="mt-1"><span className={v.selectable?"status-select":"status-nav"}>{v.selectable?"具体量表":"量表大类"}</span></div></TableCell><TableCell><div className="text-[13px]">{v.itemCount}</div><div className="text-[11px] text-slate-500">{v.role}</div></TableCell><TableCell className="text-[12px]">{v.topic}</TableCell><TableCell><a onClick={e=>e.stopPropagation()} href={ref.url} target="_blank" rel="noreferrer" className="citation-link">查看单篇文献 <ExternalLink size={11}/></a><div className="mt-1 text-[10px] text-slate-500">{ref.role}</div></TableCell></TableRow>})}</TableBody></Table>{!results.length&&<div className="p-12 text-center text-sm text-slate-500">没有符合全部条件的记录，请减少筛选条件或更换关键词。</div>}</div></section>

        <aside className="showcase-panel detail"><div className="panel-title"><BookOpen size={16}/><h2>版本记录</h2><span className="ml-auto font-mono text-[11px] font-normal text-blue-100">{selected.id}</span></div><div className="p-5"><div className="flex flex-wrap items-center gap-2"><span className={selected.selectable?"status-select":"status-nav"}>{selected.selectable?"具体量表":"量表大类"}</span><span className={`risk ${riskClass(selected.copyrightRisk)}`}>版权风险 {selected.copyrightRisk}</span></div><h2 className="mt-3 text-2xl font-bold text-[#163f5d]">{selected.abbreviation}{!selected.selectable&&" 系列"}</h2><p className="mt-1 text-[14px] leading-5 text-slate-600">{selected.name}</p>
          <ScaleIntroduction familyId={family.id} versionId={selected.id}/><AdministrationPanel familyId={family.id}/><dl className="metadata"><Meta term="所属系列" value={seriesNode(selected)?.label||family.name}/><Meta term="主题" value={selected.topic}/><Meta term="版本角色" value={selected.role}/><Meta term="题量" value={selected.itemCount}/><Meta term="适用人群" value={selected.population}/><Meta term={selected.id.endsWith("BASE")?"使用说明":"计分与解释"} value={selected.scoring}/><Meta term="中文版本" value={selected.chinese}/><Meta term="资料状态" value={('status' in selected ? selected.status : '待核验')}/></dl>
          <div className="mt-5 border-t border-slate-200 pt-4"><h3 className="flex items-center gap-2 text-sm font-bold text-slate-800"><GitBranch size={15}/>同系列量表（{related.length}）</h3><div className="mt-2 flex flex-wrap gap-1.5">{related.map(v=><button key={v.id} onClick={()=>setSelectedId(v.id)} className={`related-chip ${selected.id===v.id?"active":""}`}>{v.abbreviation}</button>)}</div></div>
          <div className="mt-5 border-t border-slate-200 pt-4"><h3 className="text-sm font-bold text-slate-800">相关文献</h3><span className="mt-2 inline-block rounded-sm bg-[#e8f1f7] px-2 py-1 text-[10px] font-bold text-[#174e74]">{reference.role}</span><p className="mt-2 text-[13px] font-semibold leading-5 text-slate-800">{reference.title}</p>{reference.authors&&<p className="mt-1 text-[12px] leading-5 text-slate-600">{reference.authors}</p>}<p className="mt-1 text-[11px] text-slate-500">{[reference.journal,reference.year,reference.pmid&&`PMID ${reference.pmid}`,reference.doi&&`DOI ${reference.doi}`].filter(Boolean).join(" · ")}</p><a href={reference.url} target="_blank" rel="noreferrer" className="index-button mt-3">打开单篇文章记录 <ExternalLink size={13}/></a></div>
          <div className="mt-5 rounded-sm border-l-4 border-[#e3b341] bg-[#fff9e7] p-3"><div className="flex items-center gap-2 text-[13px] font-bold text-slate-800"><ShieldCheck size={15}/>正式使用前核对</div><p className="mt-1 text-[12px] leading-5 text-slate-600">{family.verification}。本库用于研究设计导航，不替代量表手册和正式授权。</p></div>
        </div></aside>
      </div>
    </div>
  </main>;
}

function Filter({label,value,onChange,options}:{label:string;value:string;onChange:(v:string)=>void;options:string[]}){return <label className="text-[12px] font-semibold text-slate-700">{label}<select value={value} onChange={e=>onChange(e.target.value)} className="mt-1 block h-9 w-full rounded-none border border-slate-400 bg-white px-2 text-[13px] font-normal outline-none focus:border-[#24618d]">{options.map(x=><option key={x}>{x}</option>)}</select></label>}
function Meta({term,value}:{term:string;value:string}){return <div><dt>{term}</dt><dd>{value||"待核验"}</dd></div>}






