import {families,versions} from './data.ts';
export const recordAliases:Record<string,string>={'VR-SL-001-BASE':'VR-SL-001-026','VR-QL-004-049':'VR-QL-004-165'};
export const visibleRecords=versions.filter(v=>!recordAliases[v.id]);
export const lineageSources:Record<string,{label:string;url:string}[]>={
 'QL-002':[{label:'SF-36与SF-12开发方资料',url:'https://www.qualitymetric.com/wp-content/uploads/2022/03/QM-SF-36v2-and-SF-12v2-DataSheet-v2.pdf'},{label:'RAND说明同源题目与评分区别',url:'https://www.rand.org/health/surveys/mos/36-item-short-form/scoring.html'}],
 'HL-001':[{label:'HLS工具谱系与各短表比较',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC9727937/'}],
 'HB-003':[{label:'NIAAA说明AUDIT-C来源',url:'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/screen-and-assess-use-quick-effective-methods'}],
 'MARS-Rating':[{label:'Rating Scale开发研究',url:'https://doi.org/10.1016/S0920-9964(99)00130-9'}],
 'MARS-Report':[{label:'Report Scale开发者研究',url:'https://doi.org/10.1111/bcp.14193'}],
};
export type CatalogNode={id:string;label:string;kind:'类型'|'系列'|'量表'|'形式'|'版本';path:string[];familyId?:string;versionId?:string;description?:string;children:CatalogNode[]};
export const catalog:CatalogNode[]=[];
const rootNames:Record<string,string>={'QL-002':'SF 健康调查系列','HL-001':'HLS 健康素养调查系列','HB-003':'AUDIT 系列','PH-007':'WHO 幸福感量表系列','HL-003':'TOFHLA 系列','PE-001':'PSQ 患者满意度问卷系列','HB-005':'Fagerström 尼古丁依赖量表系列'};
const merged:Record<string,string>={'QL-003':'QL-002','HL-002':'HL-001','HB-004':'HB-003'};
const descriptions:Record<string,string>={
 'QL-002':'SF-12由SF-36选题形成，二者属于同源健康调查系列。先选择SF-36或SF-12，再选择版本及回顾时间。RAND-36与早期SF-36的题目渊源相同，但评分方法须区分。',
 'HL-001':'HLS-EU-Q47是共同测量框架和题目来源；Q16、HLS-SF12与后续HLS19-Q12有各自的选题及验证过程。两个12题工具不是同一短表。',
 'HB-003':'AUDIT-C来自10题AUDIT的前3个饮酒消费问题，合并在同一系列下；完整版与消费短表分别选择。',
};
function child(parent:CatalogNode,id:string,label:string,kind:CatalogNode['kind'],familyId?:string){let n=parent.children.find(n=>n.id===id);if(!n){n={id,label,kind,path:[...parent.path,id],familyId,children:[]};parent.children.push(n);}return n;}
for(const f of families){
 const topicId=f.id.split('-')[0];let topic=catalog.find(n=>n.id===topicId);
 if(!topic){topic={id:topicId,label:f.topic,kind:'类型',path:[topicId],children:[]};catalog.push(topic);}
 if(f.id==='MA-002')continue;
 const rootId=merged[f.id]||f.id;
 const root=child(topic,rootId,rootNames[rootId]||f.abbreviation+' 系列','系列',rootId);root.description=descriptions[rootId];
 let parent=root;
 if(['QL-002','QL-003'].includes(f.id))parent=child(root,f.abbreviation,f.abbreviation,'量表',f.id);
 if(['HB-003','HB-004'].includes(f.id))parent=child(root,f.abbreviation,f.abbreviation,'量表',f.id);
 for(const v of visibleRecords.filter(v=>v.familyId===f.id&&v.selectable)){
  let p=parent;const num=Number(v.id.split('-').at(-1));
  const branch=(id:string,label:string,kind:CatalogNode['kind']='量表')=>{p=child(p,id,label,kind,f.id);};
  if(['HL-001','HL-002'].includes(f.id))branch(f.id==='HL-002'?'HLS-SF12':num===63?'HLS19':'HLS-EU',f.id==='HL-002'?'HLS-SF12':num===63?'HLS19调查工具':'HLS-EU调查工具');
  if(f.id==='MC-002'){const m=v.abbreviation.match(/SDQ-([PTS])(\d+-\d+)/)!;branch('reporter-'+m[1],({P:'家长报告',T:'教师报告',S:'儿童青少年自评'} as Record<string,string>)[m[1]],'形式');branch('age-'+m[2],m[2]+'岁','形式');}
  if(f.id==='MC-003')branch(num===122||num===123?'generic':'modules',num===122||num===123?'4.0通用核心':'疾病专项模块');
  if(f.id==='MC-004'){const size=v.abbreviation.match(/KIDSCREEN-(\d+)/)![1];branch('KIDSCREEN-'+size,'KIDSCREEN-'+size);}
  if(f.id==='MC-005')branch(num===131?'ASQ-SE':'ASQ-3',num===131?'ASQ社会情绪分支':'ASQ-3发育筛查');
  if(f.id==='HB-001')branch(v.abbreviation.includes('-LF')?'long':'short',v.abbreviation.includes('-LF')?'IPAQ长表':'IPAQ短表');
  if(f.id==='QL-005')branch(num<=55?'adult':num<=57?'pediatric':'early-childhood',num<=55?'成人Global Health':num<=57?'儿童Global Health':'幼儿Global Health');
  if(f.id==='QL-004')branch(num===46||num===47?'adult':'youth',num===46||num===47?'成人EQ-5D':'儿童青少年EQ-5D-Y');
  if(f.id==='PE-002')branch(num<=135?'clinician':num===136?'hospital':num===137?'home':'health-plan',num<=135?'CG-CAHPS门诊':num===136?'HCAHPS住院':num===137?'HHCAHPS居家照护':'健康计划调查');
  const leaf=child(p,v.id,v.abbreviation,'版本',f.id);leaf.versionId=v.id;
 }
}
const ma=catalog.find(n=>n.id==='MA')!;
for(const [id,label,vid,description] of [
 ['MARS-Rating','MARS 用药依从性评定量表','VR-MA-002-BASE','Thompson等开发的Medication Adherence Rating Scale，最初用于精神疾病用药；与Horne的Report Scale不是同一原版。'],
 ['MARS-Report','MARS 用药依从性报告量表','VR-MA-002-150','Horne的Medication Adherence Report Scale，MARS-5属于此工具；不能归为Thompson评定量表的短版。']]){
 const n=child(ma,id,label,'系列','MA-002');n.description=description;const v=versions.find(v=>v.id===vid)!;child(n,vid,v.abbreviation,'版本','MA-002').versionId=vid;
}
export const nodes:CatalogNode[]=[];
function flatten(n:CatalogNode){nodes.push(n);n.children.forEach(flatten);}catalog.forEach(flatten);
export const nodeUrl=(n:CatalogNode)=>'#/browse/'+n.path.join('/');
export const versionNode=(id:string)=>nodes.find(n=>n.versionId===(recordAliases[id]||id));
export const seriesNode=(v:typeof versions[number])=>{const leaf=versionNode(v.id)||nodes.find(n=>n.familyId===v.familyId);return leaf?nodes.find(n=>n.path.length===2&&n.path[1]===leaf.path[1]):undefined;};
export const recordUrl=(v:typeof versions[number])=>{const n=versionNode(v.id)||nodes.find(n=>n.familyId===v.familyId);return n?nodeUrl(n):'#/';};
