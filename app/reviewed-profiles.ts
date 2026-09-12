export type EvidenceParagraph = {text:string;source:string;label:string};
export type ReviewedProfile = {definition:EvidenceParagraph[];scoring:EvidenceParagraph[];translations:{label:string;url:string;note:string}[];limits:EvidenceParagraph[];reviewed:string};
const base='https://dass.psy.unsw.edu.au/';
const p=(text:string,path:string,label:string):EvidenceParagraph=>({text,source:base+path,label});
const scope=p('抑郁维度关注情绪低落、兴趣或愉悦感减少、自我贬低与缺乏主动性；焦虑维度侧重自主神经唤起、躯体紧张及恐惧体验；压力维度关注难以放松、持续紧绷、易激惹及不耐烦。三个维度相关，但测量内容不同。','over.htm','开发者对测量构念的定义');
const restriction=p('本页用于研究者选表和获取施测资料，不提供公众自测或自动诊断。开发者对开放网站施测、结果反馈有专门要求；正式实施调查前应核对。','DASSFAQ.htm','官方FAQ第9、21项');
export const reviewedProfiles:Record<string,ReviewedProfile>={
 'VR-PH-003-006':{
  reviewed:'2026-09-12',
  definition:[p('DASS-42是由42个自评条目组成的抑郁—焦虑—压力量表，分别量化过去一周三类负性情绪状态的程度，每个维度14题。它适用于描述症状水平及其变化，不直接判定某一种精神障碍。','over.htm','官方概述'),scope],
  scoring:[p('每题按正式选项赋0、1、2或3分。按评分键分别相加14题，得到抑郁、焦虑、压力三个0–42分的分量表分数；无反向题。分数越高表示对应症状越重。','Download%20files/Dass_template.pdf','原版评分键'),p('缺失值应按分量表处理并预先声明规则。官网给出的经验建议是每个14题分量表最多容许2题缺失；这不是统一强制标准。不能把空白直接当作0分。','DASSFAQ.htm','官方FAQ第27项')],
  translations:[
   {label:'简体中文：Zuo 与 Chang，42题',url:base+'Chinese/DASS42%20simplified%20Chinese.pdf',note:'已逐题核对原件；题序与英文一致。中文版验证研究的具体文本匹配仍在核查。'},
   {label:'繁体中文：Calais Chan，42题',url:base+'Chinese/Chinese%20DASS%20Calais.pdf',note:'官方收录，原件已取得；逐题复核进行中。'},
   {label:'台湾用语：Lu Hui Chun，42题',url:base+'Chinese/Taiwanese%20DASS%20Lu%20Hui%20Chun.pdf',note:'对既有中文译本的适配，不能与其他译本混称；逐题复核进行中。'},
   {label:'台湾用语：Shing-Ping Su，42题',url:base+'Chinese/Shing-Ping%20Taiwanese%20DASS.pdf',note:'独立列出的译本；原件已取得，逐题复核进行中。'}],
  limits:[restriction,p('官网允许复制问卷，禁止修改或出售量表本身。官网收录译本不构成对译本质量的保证；仍需核对目标人群的验证证据。','DASSFAQ.htm','官方FAQ第3、25项')]
 },
 'VR-PH-003-007':{
  reviewed:'2026-09-12',
  definition:[p('DASS-21由DASS-42的三个维度各选7题构成，共21题，仍评估过去一周的抑郁、焦虑和紧张/压力状态。它保留了三个维度，但不是原42题表的前21题。','over.htm','官方概述'),scope],
  scoring:[p('每题0–3分，各维度7题原始和为0–21分。官方评分模板要求将分量表原始和乘2，形成0–42分，用于与成人DASS常模或全版分数比较。报告时必须注明是否乘2，不能混用两种分值。','Chinese/Chinese%20DASS21%20scoring%20template.pdf','中文短版评分键'),p('缺失规则应在研究方案中明确；官网的经验建议是每个7题维度最多缺失1题，并利用该维度已回答条目处理。此建议不能与某篇研究的数据插补方法混为一谈。','DASSFAQ.htm','官方FAQ第27项')],
  translations:[{label:'繁体中文：Taouk Moussa、Lovibond 与 Laube，21题',url:base+'Chinese/Chinese%20DASS21.pdf',note:'由Calais Chan较早译本发展，官网提供专用评分键及2001年翻译研究报告；已核对题目与评分对应。'},
   {label:'中文版翻译及验证报告（2001）',url:base+'Chinese/Chinese%20DASS21%20Paper.pdf',note:'请按报告人群解释；此文件的PDF元数据标题有误，正文标题为中文DASS21研究。'},
   {label:'中国人群验证研究：Wang 等，2016',url:'https://pubmed.ncbi.nlm.nih.gov/26619091/',note:'研究包括大学生及精神分裂症患者/对照。正文采用0–21原始分，并说明译文来源于Taouk等；不能把该研究自动绑定到任何网上简体21题表。'}],
  limits:[restriction]
 },
 'VR-PH-003-008':{
  reviewed:'2026-09-12',
  definition:[p('DASS-Y是针对儿童青少年语言和体验开发的21题自评工具，评估过去一周的抑郁、焦虑及压力症状。开发者当前页面标注适用年龄为8–17岁。它是独立的青年版，不是给儿童直接填写成人DASS-21。','DASSY.htm','青年版官方说明')],
  scoring:[p('三个分量表各7题，每题0–3分，分别相加后各为0–21分。DASS-Y不乘2，不直接套用成人DASS或DASS-21的常模。','DASSY.htm','青年版评分说明'),p('官方青年版严重程度分界来自原开发样本的分位数，用于描述，不等于诊断阈值；用于其他地区或译本时需另核对。','DASS-Y%20cutoffs.htm','青年版分界值来源')],
  translations:[{label:'简体中文：Luo 与 Tian',url:base+'DASS-Y%20Chinese%20(simplified)/Luo%20Tian%20simplified%20Chinese.htm',note:'官方收录；译本原件已取得，逐题与研究匹配核验进行中。'},
   {label:'简体中文：Cao 与 Chen',url:base+'DASS-Y%20Chinese%20(simplified)/Cao%20Chen%20simplified%20Chinese.htm',note:'入口同时提供译本及2023年验证论文。原件选项为频率表述，与其他译本措辞不同，不自动互换。'},
   {label:'简体中文：Xie',url:base+'DASS-Y%20Chinese%20(simplified)/Xie%20simplified%20Chinese.htm',note:'官方目录列出，当前获取未成功，尚未核对完整表单。'},
   {label:'繁体中文：香港卫生署学生健康服务',url:base+'DASS-Y%20Chinese%20(traditional)/Hong%20Kong%20Health/Hong%20Kong%20Health%20traditional%20Chinese%20translation%20of%20DASS-Y.htm',note:'官方收录，原件已取得；按该译本原题序核对。'}],
  limits:[restriction]
 }
};
