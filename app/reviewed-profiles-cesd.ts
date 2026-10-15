import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const cesd='https://www.apa.org/depression-guideline/epidemiologic-studies-scale.pdf';
const cesdr='https://cesd-r.com/cesdr/';
const child='https://www.aacap.org/App_Themes/AACAP/docs/member_resources/toolbox_for_clinical_practice_and_outcomes/symptoms/ces_dc.pdf';
const tilda='https://tilda.tcd.ie/data/resource-hub/scale-docs/CESD-8.html';
const hrs='https://hrs.isr.umich.edu/sites/default/files/biblio/dr-005_0.pdf';
export const cesdProfiles:Record<string,ReviewedProfile>={
 'VR-PH-008-021':{
  reviewed:'2026-10-15',reviewScope:'APA公开20题英文表及说明；中文原件、具体研究对应及漏答方案待核。',
  definition:[p('CES-D-20是过去一周抑郁症状的20题自评工具；与后来的CESD-R及儿童CES-DC分别辨认。',cesd,'公开英文原表')],
  scoring:[p('每题0–3，4、8、12、16为正向体验，需反向后求和，范围0–60。筛查分数不能代替诊断，也不能把短版分数按题量直接放大。',cesd,'题本与反向方向')],
  translations:[{label:'APA量表入口',url:'https://www.apa.org/depression-guideline/assessment',note:'APA将CES-D列为公有领域；不据此推断任一中文译文已验证。'}],
  limits:[p('本轮尚未确认具体中文题本、研究人群及统一漏答算法；不新增自动计分。',cesd,'尚待核对范围')]
 },
 'VR-PH-008-022':{
  reviewed:'2026-10-15',reviewScope:'CESD-R开发团队站点的20题结构及计分说明；具体中文原件、研究和漏答协议待核。',
  definition:[p('CESD-R仍为20题，但按九组症状组织，并增加持续两周的回答类别；不能当作CES-D-20仅改名称的同一题本。',cesdr,'开发团队说明')],
  scoring:[p('原回答编码0–4；网站为与旧CES-D范围一致的CESD-style分数，将最高两档均记3，总分0–60。它与直接相加0–80的原编码和症状类别算法分别报告。',cesdr,'原编码与CESD-style计分')],
  translations:[{label:'CESD-R说明与译本目录入口',url:cesdr,note:'本次未核对具体中文全文及目标人群验证，不将网站的症状类别自动设为诊断。'}],
  limits:[p('站点声明CESD-R为公有领域；计分形式须事先说明，不能混用范围或套用其他长度阈值。',cesdr,'使用与解释边界')]
 },
 'VR-PH-008-023':{
  reviewed:'2026-10-15',reviewScope:'Andresen等1994原始研究记录与摘要；完整题本、反向键及中文对应尚待全文核对。',
  definition:[p('本记录限定Andresen等1994研究的CESD-10。不同十题组合和回答格式不能因同名直接合并。', 'https://pubmed.ncbi.nlm.nih.gov/8037935/','Andresen等原始研究记录')],
  scoring:[p('已定位原研究，尚未取得其完整施测与计分原页。本条不推测反向题或漏答规则，不把CES-D-20阈值除以二作为本版算法。','https://pubmed.ncbi.nlm.nih.gov/8037935/','本轮证据范围')],
  translations:[{label:'原始研究记录',url:'https://pubmed.ncbi.nlm.nih.gov/8037935/',note:'本条只完成原研究锁定，不表示中文独立验证、题本或授权已完成。'}],
  limits:[p('完整研究与原题本仍待取得；不得将其他CES-D十题研究的题号或解释规则移植到本版。','https://pubmed.ncbi.nlm.nih.gov/8037935/','版本边界')]
 },
 'VR-PH-008-024':{
  reviewed:'2026-10-15',reviewScope:'TILDA八题与计分说明，以及HRS报告第II节；目录尚未指定唯一回答格式，中文对应待核。',
  definition:[p('CES-D-8名称不足以确定施测形式。TILDA用四级频率；HRS第二波起采用是／否，两者都问过去一周。',tilda,'TILDA八题说明')],
  scoring:[p('TILDA先将1–4重编码为0–3，再反向第4和6题，总分0–24。该站点列出的9分界值仅按对应研究解释。',tilda,'TILDA计分'),p('HRS是／否形式经正向体验反向后累计0–8；不能把TILDA的0–24和界值移植过来，也不能简单折叠频率选项后宣称两种形式等价。',hrs,'HRS报告第II、V节')],
  translations:[{label:'TILDA版本说明',url:tilda,note:'具体中文八题原件、回答格式和验证研究尚未逐项匹配；正式使用前先锁定版本。'}],
  limits:[p('本条属于存在不同回答格式的历史记录，不给统一算法；两类原始数据不可未经检验直接合并。',hrs,'跨格式比较边界')]
 },
 'VR-PH-008-025':{
  reviewed:'2026-10-15',reviewScope:'AACAP提供的Bright Futures两页CES-DC英文题本及计分说明；中文研究和转载条件仍待核。',
  definition:[p('CES-DC是儿童青少年用的20题自评形式，询问过去一周，使用适合儿童的措辞；不能直接套用成人原文。',child,'英文儿童表第2页')],
  scoring:[p('四档0–3，4、8、12、16题反向，总分0–60。来源将15作为进一步评估线索，同时写作“超过15”；本页不把该表述差异改造成精确自动诊断界点。',child,'计分与进一步评估第1页')],
  translations:[{label:'AACAP公开原件',url:child,note:'这里是英文儿童表，并不证明任何中文译本在人群中完成验证。'}],
  limits:[p('筛查后仍需评估；出现症状但分数不高也不能据此排除。未确认统一漏答规则及中文复制条件，未开放完整题本。',child,'原件说明与核验边界')]
 }
};
