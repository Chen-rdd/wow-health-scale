import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const base='https://www.kidscreen.org/english/';
const languages=base+'questionnaires/language-versions-view-and-download/';
const scoring=base+'analysis/evaluation-by-hand/';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const specs:[number,number,string][]=[
 [124,52,'52题组成10个领域：身体、心理、心境情绪、自我认知、自主、家庭关系、经济资源、同伴支持、学校及欺凌。'],
 [126,27,'27题组成5个领域：身体、心理、自主与家庭关系、同伴支持、学校；不是52题版的前27题。'],
 [128,10,'10题形成总体健康相关生活质量指数，来源于27题形式；不是任意抽取10题或取10个领域的均值。']
];
export const kidscreenProfiles:Record<string,ReviewedProfile>=Object.fromEntries(specs.flatMap(([start,n,definition])=>[false,true].map(proxy=>{
 const instrument=base+`questionnaires/kidscreen-${n}${n===10?'-index':''}/`;
 const profile:ReviewedProfile={
  reviewed:'2026-10-14',reviewScope:'开发者长度／报告者结构、评分及语言目录；全部施测原页与独立中文验证仍待核对。',
  definition:[p(`适用8–18岁。此记录为${proxy?'家长／主要照护者代理报告':'儿童／青少年自评'}，不能将代理回答解释成儿童自己的判断。`,base+'questionnaires/','年龄与报告者'),p(definition,instrument,'具体长度说明')],
  scoring:[p(n===10?'原式五级编码；10题表内第3、4项负向重编码为6减原分。完整回答求和10–50，一般健康附加题不加入；再查该报告者的Rasch与T分数转换表。':'52题与27题没有全表总分，应分别计算对应领域。反向题及身体领域特殊重编码须按对应题号表；不能把全题平均当作总体生活质量指数。',scoring,'开发者评分步骤'),p('手工求和要求所有对应项目完整，不能随意插补。10题至多一项缺失时，官网提供SPSS方式估计Rasch参数；这不等于允许补0或套用所有长度同一漏答规则。',scoring,'缺失与转换边界')],
  translations:[{label:'官网按语言、长度与报告者的目录',url:languages,note:proxy?(n===10?'本次目录列出粤语10题代理表；普通话各长度代理栏均未列。不能把自评普通话表改为代理后宣称官方译本。':'本次目录未列普通话或粤语的该长度代理表；其他语言代理表不能证明中文已可用。'):'本次目录列普通话自评10／27／52，也另列粤语及“Chinese”；这些标签不能合并成同一译本。原件、译者和独立研究须继续核对。'}],
  limits:[p('现已开放获取，无需原合作登记表；版权仍归KIDSCREEN组。不可擅改、缩写、扩展或转授题本，翻译须与开发组合作；本网站提供原件入口。',base+'terms-of-use/','当前使用要求'),p('T分数解释依对应年龄、性别、国家及报告者常模。不是疾病诊断，也不将欧洲常模直接称为中国常模。',scoring,'常模与解释')]
 };
 return [`VR-MC-004-${start+(proxy?1:0)}`,profile];
})));
