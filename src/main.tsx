import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import Browse from '../app/browse-view';
import Search from '../app/search/page';
import QuestionnaireBuilder from '../app/questionnaire-builder';
import '../app/globals.css';
class RouteBoundary extends React.Component<{children:React.ReactNode},{error:Error|null}>{
 state:{error:Error|null}={error:null};
 static getDerivedStateFromError(error:Error){return{error};}
 componentDidCatch(error:Error&{destination?:string}){if(error.destination)location.replace(error.destination);}
 render(){if(this.state.error)return <main className="portal-shell"><h1>找不到这个目录</h1><p>链接可能已经变更，请返回分类目录继续浏览。</p><a href="#/">返回全部量表</a></main>;return this.props.children;}
}
function App(){const [route,setRoute]=useState(location.hash.slice(1)||'/');useEffect(()=>{const change=()=>{setRoute(location.hash.slice(1)||'/');window.scrollTo(0,0);};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);let page:React.ReactNode;try{const p=decodeURIComponent(route);page=p==='/builder'?<QuestionnaireBuilder/>:p==='/search'?<Search/>:p==='/'?<Browse path={[]}/>:p.startsWith('/browse/')?<Browse path={p.slice(8).split('/').filter(Boolean)}/>:<main className="portal-shell"><h1>页面不存在</h1><a href="#/">返回全部量表</a></main>;}catch{page=<a href="#/">链接格式不正确，返回全部量表</a>;}return <RouteBoundary key={route}>{page}</RouteBoundary>;}
createRoot(document.getElementById('root')!).render(<App/>);
