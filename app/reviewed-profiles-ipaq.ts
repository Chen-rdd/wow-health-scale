import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const root='https://sites.google.com/view/ipaq/';
const protocol='https://drive.google.com/file/d/1gehdq1-04eSWfbxscwtzXa1MUlD8Mffa/view';
const study='https://pubmed.ncbi.nlm.nih.gov/12900694/';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const records:[number,boolean,boolean,boolean][]=[
 [78,false,false,false],[79,false,true,false],[80,true,false,false],[81,true,true,false],
 [145,false,false,true],[146,false,true,true],[147,true,false,true],[148,true,true,true]
];
const processing=[p('2005协议先转换分钟单位；活动天数或时长缺失、“不知道”或拒答时不生成总量，不填0。每日步行、中等及剧烈时长之和>960分钟先排除，再按协议处理<10分钟活动及180分钟截断。长版截断按跨领域强度合计处理，不能逐小题随意截断。',protocol,'2005协议第10–12页'),p('低／中／高分类同时依赖活动天数和量，不只看600或3000 MET-分钟。坐着的时间单独报告，不加入活动总量，也不从总量中相减。',protocol,'2005协议分类与久坐说明')];
export const ipaqProfiles:Record<string,ReviewedProfile>=Object.fromEntries(records.map(([id,long,telephone,usual])=>{
 const profile:ReviewedProfile={
  reviewed:'2026-10-14',reviewScope:'原始八种形式的研究摘要及2005评分协议全文；各中文原件、跳答和独立研究仍待逐一核对。',
  definition:[p(`此记录为${long?'长版':'短版'}、${telephone?'电话访谈':'自填'}，回顾${usual?'通常一周':'过去七天'}。2003年开发研究明确包括长度、施测方式与两种回顾期的八种组合；这些标签不能互相替换。`,study,'八种形式的原始研究'),p(long?'长版分别询问工作、交通、家务园艺及休闲领域，可报告领域分量。':'短版汇总步行、中等和剧烈活动，不能据它拆出工作或休闲领域得分。',protocol,'协议第2–3页')],
  scoring:[p(long?'按领域采用相应MET值：步行3.3，中等工作／休闲4，剧烈工作／休闲8；交通骑车6，剧烈园艺5.5、一般园艺4、室内家务3。骑车及剧烈园艺按协议进入中等强度合计，不一律按剧烈8分。':'步行3.3、中等4、剧烈8，各乘每日分钟及每周天数，求和得MET-分钟／周；不是热量或Likert总分。',protocol,long?'2005协议第7–8页':'2005协议第5页'),...processing,p(usual?'通常一周形式的原件与回顾问题仍待取得；已核对评分协议不等于本库该历史中文表单已逐字核验，不用七天中文译文直接冒充。':'此七天形式仍需锁定对应中文、施测方式及跳答原件，不能由“都是IPAQ”继承其他表单的验证。',root+'download','具体施测表的核对边界')],
  translations:[{label:'开发者语言、长度与施测方式目录',url:root+'download',note:'官网说明很多译本由独立研究者提交，未逐一检查翻译准确性。本次下载页简写长版为通常活动，不能据目录简写否定原研究的八种形式；以实际原件为准。'}],
  limits:[p('现行官网声明CC BY 4.0，使用和改编需适当署名、链接许可及注明改动；获得许可不等于修改后仍保持原信效度。',root+'faq','当前使用说明'),p('2005协议用于人群活动研究，给出的主要年龄范围为15–69；原开发研究摘要结论为18–65。应用于其他年龄需具体证据。其10分钟及分类处理是该版研究算法，不作为个人运动处方。',protocol,'协议第2页及解释范围')]
 };
 return [`VR-HB-001-${String(id).padStart(3,'0')}`,profile];
}));
