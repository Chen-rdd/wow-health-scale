import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const root='https://agesandstages.com/';
const chart=root+'wp-content/uploads/2025/11/ASQ-3-Age-Administration-Chart.pdf';
const omitted=root+'wp-content/uploads/2015/02/ASQ-3_Score_Adjustment_Chart.pdf';
const product='https://products.brookespublishing.com/Ages-Stages-Questionnaires-in-Chinese-Third-Edition-ASQ-3-Chinese-P1118.aspx';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
// Month labels do not describe the full eligible age interval.
const intervals:[number,string][]=[
 [2,'1月0天至2月30天'],[4,'3月0天至4月30天'],[6,'5月0天至6月30天'],[8,'7月0天至8月30天'],
 [9,'9月0天至9月30天（该区间官方也允许选择10月表）'],[10,'10月0天至10月30天；9月0天至9月30天也可按官方选择10月表'],
 [12,'11月0天至12月30天'],[14,'13月0天至14月30天'],[16,'15月0天至16月30天'],[18,'17月0天至18月30天'],
 [20,'19月0天至20月30天'],[22,'21月0天至22月30天'],[24,'23月0天至25月15天'],[27,'25月16天至28月15天'],
 [30,'28月16天至31月15天'],[33,'31月16天至34月15天'],[36,'34月16天至38月30天'],[42,'39月0天至44月30天'],
 [48,'45月0天至50月30天'],[54,'51月0天至56月30天'],[60,'57月0天至66月0天']
];
const asq3=(month?:number,range?:string):ReviewedProfile=>({
 reviewed:'2026-10-14',reviewScope:'出版方月龄区间、公开计分及漏答说明、中文产品来源；21套许可题本与各月龄中文验证尚未全部取得。',
 definition:[p(month?`此为ASQ-3的${month}月龄表，官方适用区间为${range}。按施测时精确年龄选表，不只看表名或四舍五入月份。`:'ASQ-3有21个月龄表，覆盖1–66月龄；各表是具体施测版本，不把同一份题目连续用到所有月龄。',chart,'官方月龄表'),p('由家长／照护者结合儿童实际能力报告，涵盖沟通、粗大动作、精细动作、解决问题及个人社会五个能区；不是ASQ:SE-2社会情绪总分。',root+'products-pricing/asq3/','工具与报告者')],
 scoring:[p('每能区6项，回答“是／有时／还没”计10／5／0分，完整能区范围0–60。按对应月龄的能区界点与监测区解释，不把五个能区总和称为标准诊断总分。',product,'出版方中文产品说明'),p('每能区漏1或2项时，按已回答项均值补足至6项；漏超过2项则不计该能区。空白不能当作“还没”计0。',omitted,'公开漏答调整表'),p('未满2岁且早产至少3周时，按开发方规则先校正年龄再选表；2岁起采用实际年龄。先核对年龄与题本，再使用该月龄界点。',root+'free-resources/articles/considerations-screening-premature-children/','年龄校正说明')],
 translations:[{label:'出版方2019中文题本产品',url:product,note:'包含简体及繁体各21套，译者Ching-I Chen与Huichao Xie。产品存在不等于本库已取得全部题文或核对每个月龄的独立中文研究。'},...(month===16?[{label:'官网16月龄简体样表（SAMPLE）',url:root+'wp-content/uploads/2019/05/ASQ3-Simplified-Chinese-16-Month-Sample.pdf',note:'样表标简体V1.0、2019，包含指导语、题目与评分页；仅为公开样表线索，不将其当成已取得整套题本或网站电子分发许可。'}]:[])],
 limits:[p('完整题本及评分表通过出版方正式渠道取得并遵守许可。请从正式渠道取得对应月龄的题本和评分表。筛查结果需进一步评估，不能仅凭界点诊断发育障碍。',root+'products-pricing/asq3/','正式材料与使用范围')]
});
export const asqProfiles:Record<string,ReviewedProfile>={
 'VR-MC-005-130':asq3(),
 ...Object.fromEntries(intervals.map(([month,range],i)=>[`VR-MC-005-${168+i}`,asq3(month,range)])),
 'VR-MC-005-131':{
  reviewed:'2026-10-14',reviewScope:'公开月龄、评分及漏答说明；各月龄许可题本、中文译文与验证研究仍待核对。',
  definition:[p('ASQ:SE-2单独筛查社会情绪，有9个月龄表：2、6、12、18、24、30、36、48、60，覆盖1–72月龄；不能用ASQ-3的21表选龄区间。',root+'wp-content/uploads/2015/09/ASQSE-2-Age-Administration-Chart.pdf','SE-2月龄区间')],
  scoring:[p('能力行为与问题行为的回答方向不同，按各项0／5／10分计；标为家长担忧的计分项另加5。计分和非计分项目应分开，按相应月龄的总分界点解释。',root+'wp-content/uploads/2018/07/ASQSE-2-Scoring-Help.pdf','公开SE-2计分说明'),p('漏1–2项按原总分；漏3项且分数在监测区或界点上下5分内时按官方办法调整；漏答更多时不能沿用这条规则。不同于ASQ-3按能区处理。',root+'wp-content/uploads/2018/07/ASQSE-2-Scoring-Help.pdf','SE-2漏答处理')],
  translations:[{label:'出版方中文及正式材料入口',url:root+'products-pricing/asqse-2/',note:'中文具体月龄原件与独立研究尚待核对；不以ASQ-3中文验证作为SE-2依据。'}],
  limits:[p('完整题本和月龄界点须使用获许可的对应材料，不把一般规则当作完整评分手册，也不据筛查结果自行确诊。',root+'asq-age-administration/','正确选表与材料边界')]
 }
};
