import {LibraryBig, Search, Layers3} from 'lucide-react';

export default function AtlasHeader({active,summary}:{active:'browse'|'search'|'builder';summary:string}){
 return <><header className="atlas-header"><a className="atlas-brand" href="#/"><span className="atlas-brand-icon"><LibraryBig size={25} strokeWidth={1.6}/></span><span>公共卫生量表库<small>PUBLIC HEALTH · SCALE ATLAS</small></span></a><span className="atlas-header-summary">{summary}</span></header><nav className="atlas-nav" aria-label="主要导航"><a href="#/" aria-current={active==='browse'?'page':undefined}><Layers3 size={17}/>分类浏览</a><a href="#/search" aria-current={active==='search'?'page':undefined}><Search size={17}/>量表检索</a><a href="#/builder" aria-current={active==='builder'?'page':undefined}><LibraryBig size={17}/>问卷方案</a></nav></>;
}
