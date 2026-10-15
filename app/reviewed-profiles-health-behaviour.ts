import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const guide='https://www.who.int/docs/default-source/ncds/ncd-surveillance/gpaq-analysis-guide.pdf?sfvrsn=1e83d571_2';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
export const healthBehaviourProfiles:Record<string,ReviewedProfile>={
 'VR-HB-002-BASE':{
  reviewed:'2026-10-15',reviewScope:'WHO v2英文分析指南及题本、清理表原页；中文原件、中文研究及再分发条件尚待核对。',
  definition:[p('GPAQ v2有P1–P16共16个编号问题，询问通常一周的工作、交通、休闲活动及久坐。由受训访员面对面询问并配合当地活动示意卡，不等同于IPAQ过去七天表。',guide,'指南印刷页2、4–5')],
  scoring:[p('剧烈活动赋8 MET，中等活动及交通步行／骑车赋4 MET；各项乘每天分钟和每周天数再求和，报告MET-分钟／周。P16久坐独立报告，不加入活动总量。',guide,'指南印刷页3、15–16'),p('本版保留连续至少10分钟的提问。清理规则按子领域检查：任一子领域每天超过16小时、天数超过7或天数与时长矛盾时排除该案例；不是把五个子领域时长之和与16小时比较。',guide,'指南印刷页4–5、9'),p('整段子领域缺失且其他回答有效时，本指南允许该段按零活动纳入，但至少一个子领域须有有效回答。不能把此条件推广为所有空白填零，也不能套用IPAQ的缺失处理。',guide,'指南印刷页9')],
  translations:[{label:'WHO正式问卷目录',url:'https://www.who.int/publications/m/item/global-physical-activity-questionnaire',note:'本次目录所列语言未包含中文；具体中文题本及目标人群研究尚未逐项匹配。'}],
  limits:[p('这是对应版本的调查和清理规则，不是个体运动处方；没有实现自动计分或诊断。中文题文、独立验证及完整电子复制条件仍需另核对。',guide,'应用与核验边界')]
 },
 'VR-HB-002-149':{
  reviewed:'2026-10-15',reviewScope:'确认WHO分析指南仅适用于v2；v1完整施测原件及独立计分尚未取得。',
  definition:[p('此为GPAQ早期v1历史记录。WHO现行分析指南明确说明其内容针对v2，并建议使用v2；v1数据分析需另查对应资料。',guide,'指南印刷页2')],
  scoring:[p('不能将v2的16题编号、跳答或清理代码直接冒充v1规则。本条尚未确认v1完整计分与漏答协议，不提供推测算法。',guide,'v1／v2适用范围')],
  translations:[{label:'WHO当前问卷入口',url:'https://www.who.int/publications/m/item/global-physical-activity-questionnaire',note:'当前入口不能证明历史v1中文表已取得或验证。'}],
  limits:[p('历史索引用于辨认版本；具体中文原件、人群研究、许可与原页核对仍未完成。',guide,'历史资料边界')]
 }
};
