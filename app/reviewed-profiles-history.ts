import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';

const e=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const cmu='https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/';
const leung='https://doi.org/10.1186/1471-2458-10-513';
const wang='https://doi.org/10.1371/journal.pone.0028610';
const ghq='https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs';
const swls='https://eddiener.com/satisfaction-with-life-scale-swls/';
const psqi='https://www.sleep.pitt.edu/research/measures-and-study-instruments';
const psqiScore='https://www.sleep.pitt.edu/sites/default/files/assets/Instrument%20Materials/Exhibit%20A-PSQI%20scoring.pdf';
const pssLimits=[e('PSS没有通用诊断界点。使用申请经MAPI提交；中文译本另核对译者权限。改换回顾时间不能继承原研究证据。',cmu+'index.html','开发者用途与权限说明')];
const leungTranslation={label:'Leung等2010：香港心脏病吸烟患者',url:leung,note:'研究补充文件提供团队翻译的繁体14题、指导语及五级选项；短版按该研究的选题关系形成。不是王振简体或台湾其他译本。'};
const pss=(n:number,reverse:string,extra:ReviewedProfile['translations'],study:string):ReviewedProfile=>({
 reviewed:'2026-10-14',reviewScope:'评分键、译本来源及指定研究；未开放题本导出，未完成所有中文译本核验。',
 definition:[e(`${n}题形式测量过去一个月的主观压力；短版选题来自14题版，总分不按比例换算。`,leung,'三种长度的直接研究')],
 scoring:[e(`各题0–4分，反向题为本版第${reverse}题，重编码为4减原分后相加；完整作答总分0–${n*4}。`,cmu+'html/pssscoring.html','开发者各长度评分键'),e('Leung研究排除14题中有漏答的60人，分析1800份完整记录；这是该研究的处理，不能当作统一漏答算法。',leung,'方法：完整记录分析')],
 translations:[leungTranslation,...extra],
 limits:[e(study,leung,'该样本的测量结果与限制'),...pssLimits]
});
const ghqProfile=(n:number,definition:string):ReviewedProfile=>({
 reviewed:'2026-10-14',reviewScope:'出版方公开规则；未取得许可题本，也未完成各中文译本与独立研究的对应。',
 definition:[e(definition,ghq,'出版方版本说明')],
 scoring:[e(`GHQ编码0、0、1、1得0–${n}；Likert编码0、1、2、3得0–${3*n}。高分表示困扰较多，无须再按题意反向；已汇总的Likert总分不能还原GHQ总分。`,ghq,'出版方计分FAQ'),e('出版方将漏答按低分处理；施测仍应记录漏答。界点须绑定编码及人群，不作为普遍诊断标准。',ghq,'漏答与筛查解释')],
 translations:[{label:'出版方译本与许可入口',url:ghq,note:'先取得出版方许可，再向MAPI询问译本；出版方收录译本不等于完成其验证。中文题文和研究仍待逐一核对。'}],
 limits:[e('需许可使用，不能据公开FAQ转载完整题本。出版方不推荐儿童使用；青少年研究须单独评估。',ghq,'权限及年龄范围')]
});

export const historicalProfiles:Record<string,ReviewedProfile>={
 'VR-PH-004-009':pss(14,'4、5、6、7、9、10、13',[], 'Leung样本主要为男性心脏病吸烟患者；14题总量表α为0.85，不能外推为所有中文人群的常模或诊断界点。'),
 'VR-PH-004-010':pss(10,'4、5、7、8',[
  {label:'王振简体PSS-10官网原件',url:cmu+'pdf/pss_10_simplified_chinese.pdf',note:'一页原件含10题、一个月指导语及五级频率选项，署王振（2008）；官网将其与2011年女警研究关联。论文未附完整施测题本，来源关联不等于逐字证明。'},
  {label:'Wang等2011：简体女警研究',url:wang,note:'240名年轻女警，总量表α=0.86；36人两周重测Spearman相关0.68。作者不建议临床分开解释两因子；研究未确认预测及区分效度。'},
  {label:'林以芬台湾繁体原件',url:cmu+'pdf/pss_10_taiwanese_chinese.pdf',note:'官网单独列出的台湾译本；不能借用香港或女警样本证明其验证。独立研究仍待确认。'}
 ],'Leung的10题繁体选题与王振简体译本分开登记，不把其中一个研究的信效度转给另一译本。'),
 'VR-PH-004-011':pss(4,'2、3',[],'Leung研究4题总量表α为0.67，负向两题因子α为0.51；不能宣称与长版具有同等测量精度。'),
 'VR-PH-006-015':ghqProfile(60,'GHQ-60为母版，提供心理困扰总体分，关注近期相对平时的状态变化。'),
 'VR-PH-006-016':ghqProfile(30,'GHQ-30从60题版去掉躯体症状相关问题，报告总体分。'),
 'VR-PH-006-017':ghqProfile(28,'GHQ-28含四组各7题：躯体症状1–7、焦虑／失眠8–14、社会功能15–21、严重抑郁22–28；筛查用总分，各分量表无独立界点。'),
 'VR-PH-006-018':ghqProfile(12,'GHQ-12提供总体分，不能套用28题版的四个分量表。'),
 'VR-QL-006-059':{
  reviewed:'2026-10-14',reviewScope:'英文原件、官网繁体研究版及使用条件；未完成中文独立验证研究核对。',
  definition:[e('SWLS用5题测量整体生活满意度的认知判断；“7级”指回答选项数，通常约一分钟完成。',swls,'开发者工具说明')],
  scoring:[e('英文原式各题1–7分，五题均正向，求和为5–35；20分为该原式的中性描述。分段解释不是精神疾病诊断或跨人群常模。','https://eddiener.com/wp-content/uploads/2024/09/SWLS-Scale.pdf','开发者英文原件')],
  translations:[{label:'官网繁体中英对照研究版',url:'https://eddiener.com/wp-content/uploads/2025/02/SWLS_Chinese.pdf',note:'已看原页：5题、七级回答，署Mantak Yuen于2002年11月1日翻译及修改。引用1993年综述不等于此2002年译本完成独立验证；不能用于证明简体或五级版。'}],
  limits:[e('开发者允许非商业研究使用并要求引用作者；商业用途不在该免费许可范围内。',swls,'当前使用许可')]
 },
 'VR-QL-006-060':{
  reviewed:'2026-10-14',reviewScope:'五级形式的开发者指引；完整五级题本及中文验证仍待核对。',
  definition:[e('该形式仍为5题，改用五级回答；没有变成五题短版，也不能继承七级分段解释。',swls,'开发者五级形式指引')],
  scoring:[e('若各题按1–5编码，总分范围推得5–25。官网指向Kobau等2010的五级常模研究；尚未核对研究全文中的全部锚点与漏答规则，不自造算法。',swls,'五级常模研究入口')],
  translations:[{label:'五级形式对应研究',url:'https://doi.org/10.1111/j.1758-0854.2010.01035.x',note:'官网所指为美国成人研究，不能作为中文五级译本的直接验证；七级中文原件不自动适配为五级。'}],
  limits:[e('非商业使用需注明作者；选择回答格式后采用对应研究解释。',swls,'使用条件及格式区分')]
 },
 'VR-SL-001-026':{
  reviewed:'2026-10-14',reviewScope:'英文问卷与评分原页；各中文译本及其他长度仍待独立核验。',
  definition:[e('原版回顾过去一个月，自评信息形成7个组成分；同住者观察不加入自评总分。不是把全部原始答案直接相加。',psqi,'开发者原版入口')],
  scoring:[e('各组成分0–3，总分0–21。原件将总分≤5与较好、>5与较差睡眠质量关联；这是筛查解释，不能代替诊断。',psqiScore,'Exhibit A第2页'),e('第1–9题原则上必须完整，缺失会传递到相关组成分和总分；特例是5j的原因文字或频率缺失时，5j计0。填写入睡分钟区间时取中点，不代表所有漏答均可填0。',psqiScore,'Exhibit A第1页'),e('已查看评分图像，确认≤／≥边界。PDF提取文字曾丢失等号，不能据提取结果重建评分程序。',psqiScore,'评分原页核对')],
  translations:[{label:'开发者译本与申请入口',url:psqi,note:'大陆、香港及台湾译本分别取得原件和研究后再核对；B-PSQI不能借用完整版中文验证。'}],
  limits:[e('按用途提交申请，复制须保持原件；商业资助研究另核对许可。公开下载不等于允许修改或任意转载。',psqi,'开发者使用条件')]
 }
};
