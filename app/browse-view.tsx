import {evidenceStatus} from './evidence-status';
import AtlasHeader from './atlas-header';
import {families,versions} from './data';
import ScaleIntroduction from './scale-introduction';
import AdministrationPanel from './administration-panel';
import {versionReferences} from './references';
import {catalog,nodes,nodeUrl,recordUrl,visibleRecords,lineageSources,type CatalogNode} from './taxonomy';
import {notFound,redirect} from '../lib/navigation';
import type {ReactNode} from 'react';
const count=(n:CatalogNode):number=>n.versionId?1:n.children.reduce((s,c)=>s+count(c),0);
export default function Browse({path}:{path:string[]}){
 const key=path.join('/');const current=nodes.find(n=>n.path.join('/')===key);
 if(path.length&&!current){const v=versions.find(v=>v.id===path.at(-1));if(v)redirect(recordUrl(v));const f=families.find(f=>f.id===path.at(-1));if(f){const n=nodes.find(n=>n.familyId===f.id);if(n)redirect(nodeUrl(n));}notFound();}
 const version=current?.versionId?versions.find(v=>v.id===current.versionId):undefined;
 const family=families.find(f=>f.id===current?.familyId);
 const ref=version?(versionReferences as Record<string,{title:string;url:string;role:string}>)[version.id]:undefined;
 const crumbs=current?current.path.map((_,i)=>nodes.find(n=>n.path.join('/')===current.path.slice(0,i+1).join('/'))!):[];
 const children=current?.children||catalog;
 return <main className="atlas"><AtlasHeader active="browse" summary={`${catalog.length} 个类型 · ${catalog.reduce((s,n)=>s+n.children.length,0)} 个系列 · ${visibleRecords.filter(v=>v.selectable).length} 条记录`}/><div className="atlas-body"><nav className="breadcrumbs" aria-label="当前位置"><a href="#/">全部量表</a>{crumbs.map(n=><span key={n.id}> › <a href={nodeUrl(n)} aria-current={n===current?'page':undefined}>{n.label}</a></span>)}</nav><div className="browse-layout"><aside className="tree-panel"><h2>量表分类树</h2><ul className="category-tree">{catalog.map(n=><Tree key={n.id} node={n} active={current}/>)}</ul></aside><article className="browse-content"><div className="browse-heading"><p>{current?.kind||'分类目录'}</p><h1>{current?.label||'按量表类型浏览'}</h1></div>
 {!current&&<p className="browse-intro">量表类型 → 同源系列 → 量表／适用形式 → 具体版本。不同报告者、年龄和回顾时间在相应工具下继续展开。</p>}
 {current?.description&&<section className="scale-introduction"><h2>系列关系</h2><p>{current.description}</p><ul>{lineageSources[current.id]?.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a></li>)}</ul></section>}
 {family&&!current?.description&&<ScaleIntroduction familyId={family.id} versionId={version?.id}/>}
 {!current&&<div className="category-cards">{children.map((n,i)=><a className="category-card" key={n.id} href={nodeUrl(n)}><span className="category-number">{String(i+1).padStart(2,'0')}</span><h2>{n.label}</h2><span className="category-card-bottom"><span>{n.children.length} 个系列 · {count(n)} 条记录</span><span className="category-arrow" aria-hidden="true">↗</span></span></a>)}</div>}
 {current&&children.length>0&&<Panel title="下级目录"><table><thead><tr><th>名称</th><th>层级</th><th>记录数</th></tr></thead><tbody>{children.map(n=><tr key={n.id}><td><a href={nodeUrl(n)}>{n.label}</a></td><td>{n.kind}</td><td>{count(n)}</td></tr>)}</tbody></table></Panel>}
 {version&&family&&<><AdministrationPanel familyId={family.id} versionId={version.id}/><Panel title="量表资料"><dl className="browse-metadata">{([['资料审核范围',evidenceStatus(version.id)],['完整名称',version.name],['记录编号',version.id],['题量',version.itemCount],['版本角色',version.role],['适用人群',version.population],['计分与解释',version.scoring],['中文版本',version.chinese]] as [string,ReactNode][]).map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></Panel>{ref&&<Panel title="相关文献"><p>{ref.role}</p><a href={ref.url} target="_blank" rel="noreferrer">{ref.title} ↗</a></Panel>}</>}
 {current&&<Panel title="上级目录"><a href={crumbs.length>1?nodeUrl(crumbs.at(-2)!):'#/'}>↑ {crumbs.length>1?crumbs.at(-2)!.label:'全部量表'}</a></Panel>}
 </article></div></div></main>;
}
function Tree({node,active}:{node:CatalogNode;active?:CatalogNode}){const open=active?.path.slice(0,node.path.length).join('/')===node.path.join('/');return <li>{node.children.length?<details open={open}><summary><a href={nodeUrl(node)} aria-current={node===active?'page':undefined}>{node.label}</a></summary><ul>{node.children.map(n=><Tree key={n.id} node={n} active={active}/>)}</ul></details>:<a href={nodeUrl(node)} aria-current={node===active?'page':undefined}>{node.label}</a>}</li>;}
function Panel({title,children}:{title:string;children:ReactNode}){return <section className="browse-panel"><h2>{title}</h2><div className="panel-scroll">{children}</div></section>;}
