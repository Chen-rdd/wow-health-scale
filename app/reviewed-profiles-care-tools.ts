import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const psq='https://www.rand.org/health/surveys/psq.html';
const psqScoring='https://www.rand.org/content/dam/rand/www/external/health/surveys_tools/psq/psq18_scoring.pdf';
const mos='https://www.rand.org/health/surveys/mos/social-support.html';
const mosForm='https://www.rand.org/health/surveys/mos/social-support/survey-instrument.html';
const mosScoring='https://www.rand.org/health/surveys/mos/social-support/scoring.html';
const semcd='https://selfmanagementresource.com/wp-content/uploads/English_-_self-efficacy_for_managing_chronic_disease_6-item.pdf';
export const careToolsProfiles:Record<string,ReviewedProfile>={
 'VR-PE-001-BASE':{
  reviewed:'2026-10-15',reviewScope:'RAND官方PSQ-18说明和三页评分文件文字；原题本PDF原页及具体中文译本仍待核对。',
  definition:[p('PSQ-18是PSQ-III的18题短版，测量患者对医疗服务的满意度，分七个方面；不等同于一般健康或治疗依从性。',psq,'RAND量表说明')],
  scoring:[p('各题按原件方向重编码，使高分表示更满意；七个分量表分别取均值，不把18题总和冒充官方七维评分。',psqScoring,'评分文件印刷页23–25'),p('原回答1–5时，1、2、3、5、6、8、11、15、18题以6减原值；其他题保留原值。各分量表按已回答题均值计，不能把空白补零；全部缺失时无法得分。',psqScoring,'反向及漏答规则')],
  translations:[{label:'RAND正式题本与评分入口',url:psq,note:'本次未取得与某份中文译文逐字对应的验证研究；翻译许可与译本验证分别判断。'}],
  limits:[p('RAND说明非商业使用无需付费或申请，使用时须引用；商业用途向RAND确认。本页仅整理说明，未新增完整题本。',psq,'RAND权限说明')]
 },
 'VR-SS-005-076':{
  reviewed:'2026-10-15',reviewScope:'RAND当前19项英文问卷网页、四分量表和整体指数计分；具体中文题本、原研究全文和漏答协议待核。',
  definition:[p('MOS-SSS-19询问需要时可获得的功能性支持，涵盖情感／信息、实际帮助、关爱及积极社交。当前RAND网页列18个分量表项及1个额外项，不应漏掉后者。',mosForm,'RAND英文问卷')],
  scoring:[p('每项1–5，高分表示支持较多；分量表分别取均值，整体指数取全部19项均值。可用100×(均值−1)／4换算至0–100；不是只平均四个分量表。',mosScoring,'RAND计分说明')],
  translations:[{label:'RAND原版入口',url:mos,note:'当前中文完整题文与独立研究尚未匹配；不能用其他8题短版代替19题原版。'}],
  limits:[p('本次计分页未给出可直接套用的漏答数量阈值，暂不补零或自定插补。RAND非商业使用无需付费或申请，商业用途需另核对。',mos,'使用与核验范围')]
 },
 'VR-MA-005-BASE':{
  reviewed:'2026-10-15',reviewScope:'SMRC官方两页英文题本、计分及使用条件原页；具体中文译本和独立中文研究待核。',
  definition:[p('SEMCD6询问当前应对慢性病影响的信心，涵盖症状、情绪和管理活动。官方原件六题各选1–10，不是0–10，也不是用药依从性量表。',semcd,'官方题本第1页')],
  scoring:[p('以已作答题求均值，高分表示自我效能较高。缺失超过2题不计分；圈相邻两个数字取较低值，圈不相邻数字则该题不计分。',semcd,'官方计分第1页')],
  translations:[{label:'SMRC英文原件与来源',url:semcd,note:'所列605名慢性病受试者数据不能直接作为任何中文译本的验证结果；具体中文版本仍待匹配。'}],
  limits:[p('原件明确免费使用无需申请。它描述信心，不能据分数诊断疾病或决定治疗；不把六题均值换成未经支持的疾病风险等级。',semcd,'原件使用说明')]
 }
};
