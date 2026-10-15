import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const manual='https://alcoholscreen.org/cmsb/uploads/2001-audit-the-alcohol-use-disorders-identification-test-guidelines-for-use-in-primary-care-geneva-world-health-organization-2001-second-edition.pdf';
const translations='https://auditscreen.org/translations/';
const faq='https://alcoholscreen.org/about/faqs/';
const bush='https://alcoholscreen.org/cmsb/uploads/1998-the-audit-alcohol-consumption-questions-(audit-c)an-effective-brief-screening-test-for-problem-drinking.pdf';
const niaaa='https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/screen-and-assess-use-quick-effective-methods';
const ftnd='https://cpb-us-e1.wpmucdn.com/sites.dartmouth.edu/dist/4/869/files/2010/10/91_Heatherton_etal_BJA.pdf';
const ftq='https://www.apa.org/pubs/videos/4310588-scale';
const cage='https://www.hiv.uw.edu/page/substance-use/cage';
const cageReview='https://jamanetwork.com/journals/jama/fullarticle/182810';
const aid='https://adai.uw.edu/instruments/pdf/CAGE-AID.pdf';
export const alcoholTobaccoProfiles:Record<string,ReviewedProfile>={
 'VR-HB-003-082':{
  reviewed:'2026-10-15',reviewScope:'WHO 2001手册开发、施测、计分及附录B/C相关章节核读，英文访谈表和计分原页视觉核对；开发者列出的四种中文原件五页全部查看。1993直接开发论文全文另待取得。',
  definition:[p('AUDIT为10题饮酒风险筛查，1—3题消费，4—6题依赖症状，7—10题相关伤害。主要回顾过去一年，末两题另保留更早经历；访谈与自填格式分别使用。',manual,'WHO手册第10—11、17、31页')],
  scoring:[p('前8题各0—4，末2题各0／2／4，总分0—40。访谈表有跳答，不照搬成纸质自填漏答规则；未确认统一缺失插补方案。',manual,'WHO题本及附录B'),p('手册以≥8提示风险，女性及65岁以上男性可考虑7以增加敏感度。8—15、16—19、≥20的干预建议仍须临床判断，不能直接当作诊断。',manual,'WHO手册第19—20页'),p('原国际表以每标准杯10克纯酒精设计。不同地区杯量和酒精浓度须核定，不能将一瓶酒固定等同一标准杯。',manual,'WHO手册附录C')],
  translations:[{label:'开发者中文原件目录',url:translations,note:'简体两页含10克及本地酒量例子；繁体一页为自填并有饮品插图；港／台各一页为访谈，列RWS Life Sciences来源。四份分别核对，不据此认定与某项中文验证研究逐字相同。'}],
  limits:[p('开发者FAQ允许非商业使用且保留WHO来源、不实质改题；2001手册另有非商业复制条件。题本使用与论文全文再分发分开核对。',faq,'开发者使用说明'),p('具体中文研究题文对应、目标人群阈值和漏答规则仍待补；本批未新增正式题本。',translations,'中文原件与研究边界')]
 },
 'VR-HB-004-083':{
  reviewed:'2026-10-15',reviewScope:'1998七页原始研究的方法、结果及讨论核读，第1790页回答与计分视觉核对；VA两页卡片取得，2007男女阈值研究仅核对正式摘要。',
  definition:[p('AUDIT-C截取饮酒频率、通常数量及单次大量饮酒频率三题，回顾过去一年。1998研究纳入243名男性VA饮酒者，平均67岁；不能当作女性或中国一般人群验证。',bush,'Bush等1998原始研究')],
  scoring:[p('每题0—4，加总0—12。1998研究对第1题细分两档但均记4分，第2题允许不饮酒为0；不能仅凭总分范围认定不同表单完全相同。',bush,'原研究第1790页'),p('原国际版第3题为一次≥6杯；USAUDIT-C等美国适配工具可用男性5杯／女性4杯。必须同时注明版本与标准杯，不能拼接题目和阈值。',niaaa,'NIAAA版本说明'),p('2007美国家庭医学研究392男、927女，摘要报告男≥4、女≥3分别敏感度／特异度0.86／0.89、0.73／0.91。1998论文则建议≥3后进一步评估；界点依人群与目标而异。', 'https://pubmed.ncbi.nlm.nih.gov/17451397/','Bradley等2007摘要；与1998建议区分')],
  translations:[{label:'母版中文获取目录',url:translations,note:'AUDIT中文全表不自动等于已验证的独立AUDIT-C译本；本项目尚未锁定具体中文短表与研究。'}],
  limits:[p('筛查阳性需进一步评估；三题分数不能按比例换算完整AUDIT，也不补入其伤害／依赖项目。1998完整AUDIT“至少答五题”的研究处理不能套用于三题版；本批未建立漏答插补。',bush,'长度与研究实施边界')]
 },
 'VR-HB-005-084':{
  reviewed:'2026-10-15',reviewScope:'1978提出文献书目及出版社摘要定位；1991原论文对FTQ逐项计分与修订原因已读，APA公开八题页面文字交叉核对。1978完整原件尚未取得。',
  definition:[p('FTQ是八题历史工具，包含品牌尼古丁产量和吸入习惯两项；FTND删除两项并改变首支烟时间及日吸烟量计分，不能只从FTQ减两题而沿用其他分值。',ftnd,'1991修订原研究')],
  scoring:[p('1991论文描述的FTQ总分范围按八题最高值推得0—11。首支烟30分钟内为1，日吸烟量1—15／16—25／≥26支记0／1／2；另两项各最高2分。该结构不同于FTND的0—10。',ftnd,'原研究逐项计分'),p('APA页面列八题、0—11和≥7提示，但日吸烟量最高档写“More than 26”，与1991论文“26 or more”有边界差异；未静默修订或据该页面制造统一原始表。',ftq,'APA公开历史表及差异')],
  translations:[{label:'1978提出文献',url:'https://doi.org/10.1016/0306-4603(78)90024-2',note:'已定位出版社摘要，全文和准确历史中文译本待取得；不能以1991修订版中文表替代。'}],
  limits:[p('1991同一样本FTQ α＝0.48、FTND α＝0.61；研究基于254名17—77岁科学中心访客，不能据此宣称通用高信度或戒烟预测已获证明。原始FTQ许可、漏答与具体译本仍待核。',ftnd,'研究方法及讨论')]
 },
 'VR-HB-005-085':{
  reviewed:'2026-10-15',reviewScope:'作者机构仓储1991十页文件取得；相关方法、计分、信度与讨论核读，期刊第1125页Table 3全部六题及权限脚注视觉核对。',
  definition:[p('FTND由FTQ修订为六题，删除尼古丁产量和吸入项，重划首支烟时间及日支数；针对卷烟行为，不能直接代替电子烟或所有烟草使用的依赖诊断。',ftnd,'1991原研究及Table 3')],
  scoring:[p('首支烟≤5／6—30／31—60／>60分钟记3／2／1／0；日支数≤10／11—20／21—30／≥31记0／1／2／3，另四题各0或1，总分0—10，无反向项。',ftnd,'Table 3'),p('未在本次原研究建立常见“五级严重程度”统一界值或漏答补值；不把其他资料的分组写成该表原始诊断标准。',ftnd,'已核对范围')],
  translations:[{label:'原始英文表及修订研究',url:ftnd,note:'当前核对限英文原表；确切中文译本、地区及目标人群验证待补。'}],
  limits:[p('原研究254人，α＝0.61；作者明确未测量戒烟成败，结果受选择样本限制。Table 3脚注要求研究以外用途向K. O. Fagerström取得许可；公开全文不代表任意用途均已获许可。',ftnd,'方法、讨论及权限脚注')]
 },
 'VR-HB-006-BASE':{
  reviewed:'2026-10-15',reviewScope:'大学公开CAGE英文四题及计分、JAMA 2008历史评论核读；1984原论文仅出版社摘要与书目确认，未宣称全文已读。',
  definition:[p('CAGE为四题饮酒问题筛查，通常问曾经经历，不提供饮酒频率或数量。2008历史评论说明1970已作会议报告，1984 JAMA使其广为人知，不能把1984说成首次提出。',cageReview,'JAMA历史评论')],
  scoring:[p('是1、否0，总分0—4，无反向。传统≥2提示需进一步调查，不能据高分直接诊断；终生问法可能使已戒酒者仍阳性，修改为近期问法须另说明。',cageReview,'计分另见大学获取页；阈值与终生问法见JAMA评论')],
  translations:[{label:'英文临床获取页',url:cage,note:'中文具体措辞、回顾期及验证材料尚未锁定；CAGE与包含其他药物的CAGE-AID不同。'}],
  limits:[p('JAMA评论明确其为筛查工具。没有消费量项目，不能替代近期危险饮酒筛查；旧文中接近诊断的措辞不作为本站诊断结论。漏答及完整中文来源仍待核。',cageReview,'2008评论的适用边界')]
 },
 'VR-HB-006-086':{
  reviewed:'2026-10-15',reviewScope:'大学提供两页英文题本、计分及权限注记全部视觉核对；1995研究书目与摘要确认，正文未取得，统计数值按工具包所引研究呈现。',
  definition:[p('CAGE-AID将CAGE四项扩展为饮酒或药物，包含非法药物及非医嘱使用处方药，通常问终生经历。不是增加题数，也不分别给酒精和药物两套总分。',aid,'大学提供的STABLE工具包')],
  scoring:[p('每个是记1、否0，总分0—4。工具包采用≥1阳性，其所引1995研究敏感度／特异度为0.79／0.77；≥2则0.70／0.85，不能与CAGE传统阈值混为唯一规则。',aid,'工具包第1页'),p('Brown／Rounds 1995摘要记载124名社区家庭医学患者，参照DIS-R的DSM-III-R诊断；没有据此认定中文或青少年人群已验证。', 'https://pubmed.ncbi.nlm.nih.gov/7778330/','原研究摘要')],
  translations:[{label:'英文题本与工具包',url:aid,note:'中文独立题文和验证待补。原目录2009青少年研究不是成人原始开发依据，本批改为1995直接研究。'}],
  limits:[p('第2页注明Richard Brown准许使用，但该工具包许可注记不自动解决本项目中文翻译、改编或商业用途权限。漏答处理与原研究全文仍待取得；阳性提示进一步评估。',aid,'原页权限和核对边界')]
 }
};
