import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const bc='https://www.bc.edu/content/bc-web/schools/ssw/sites/lubben/description/';
const files='https://www.bc.edu/content/dam/bc1/schools/sw/lubben/';
const ucla='https://peplau.psych.ucla.edu/wp-content/uploads/sites/141/2017/07/Russel-Peplau-Cutrona-80.pdf';
const mna='https://www.mna-elderly.com/mna-forms';
const mnaFiles='https://www.mna-elderly.com/sites/default/files/';
const sf=mnaFiles+'2024-10/MNA_AU2.0_eng-USori.pdf';
const full=mnaFiles+'2024-10/Long-MNA_AU1.0_eng-USori.pdf';
const guide=mnaFiles+'2021-10/mna-guide-english-sf.pdf';
const lsns=(n:number,definition:string,scoring:EvidenceParagraph[],translationNote:string):ReviewedProfile=>({
 reviewed:'2026-10-14',reviewScope:'开发者原件、选项及使用要求；中文独立研究、漏答算法及原件冲突仍需核对。',
 definition:[p(definition,files+(n===12?'LSNSR':`LSNS${n}`)+'.pdf','开发者对应长度原件')],
 scoring,
 translations:[{label:'开发者收录的LSNS-R中文原件',url:files+'LSNSR%20Chinese.pdf',note:translationNote}],
 limits:[p('开发者欢迎研究使用，并要求填写研究资料表发给作者；本网站未代为提交。评分页引用6题研究，不应把它当作12题或18题中文验证。',bc+'permission-to-use-scales.html','研究使用要求'),p('漏答处理及各语言、长度的界点需绑定独立依据，本轮未确认统一算法。',bc+'scoring.html','开发者评分入口及核对边界')]
});
const mnaTranslations=(isFull:boolean)=>[{label:'官网简体中文原件',url:mnaFiles+'2024-10/'+(isFull?'Long-MNA_AU1.0_chinese%28Simplified%29.nonMapi.pdf':'MNA_AU2.0_cmn-CN_28FEB2024.pdf'),note:isFull?'一页A–R完整表，保留半分计分项目。文件路径标为简体，原页仍混用部分繁体字；不得自行统一字形后宣称原件一致。独立中文研究对应待核对。':'原页标China/Simplified Chinese、28 Feb 2024，含F1与F2互斥指导语；BMI中文字面区间上限需结合英文原件核对。中文验证及译者信息仍待核对。'}];
const mnaLimits=[p('用于老年人的营养筛查，结果应结合专业评估；不能外推到所有年龄。官网区分临床个人、机构学术及商业用途，机构学术使用需许可协议；本网站只提供原件入口，不复制许可题本。',mna,'当前用途与使用条件'),p('本轮未确认任意漏答的统一插补算法；表中“不知道”是有规定分值的回答，不能当作空白数据。',sf,'原件回答类别与核对边界')];
const mnaSf=(calf:boolean):ReviewedProfile=>({
 reviewed:'2026-10-14',reviewScope:'英文与简体中文原页、BMI／小腿围替代条件、计分及使用要求；独立中文研究仍待核对。',
 definition:[p('MNA-SF为六项筛查，饮食、体重和急性压力问题涉及过去三个月；部分项目是当前活动或测量状态，不能给所有项目强加同一回顾期。',sf,'开发者短版原件')],
 scoring:[p(calf?'BMI不可得时以F2小腿围替代F1；小腿围<31厘米计0，≥31计3。F1与F2不能同时计分。':'F1按BMI计分：<19为0，19至<21为1，21至<23为2，≥23为3。可取得BMI时优先采用F1。',sf,'短版F1／F2评分'),p('其余各题按各自选项计分，总分0–14；原件分为12–14正常、8–11有营养不良风险、0–7营养不良。不能把各题都编码成同一Likert尺度。',sf,'原件分层'),p('小腿围替代BMI后，不能直接接完整MNA继续计分，否则小腿围会在完整表R项被重复计算。',guide,'用户指南第8页')],
 translations:mnaTranslations(false),limits:mnaLimits
});

export const networksNutritionProfiles:Record<string,ReviewedProfile>={
 'VR-SS-003-073':lsns(18,'LSNS-18包括家庭、邻居和非同社区朋友三组各6题；不是把6题得分乘3。',[
  p('表内18项各0–5，逐项等权求和范围推得0–90。人数、联系频率与支持频率使用不同回答锚点，不能仅凭同为六级而替换选项。',files+'LSNS18.pdf','18题选项及范围'),
  p('当前18题原件页脚沿用了“LSNS-R／十二项”的文字，但正文确有18项并列0–90。该内部冲突保留记录，正式施测前向开发方确认；不依页脚误删6题。',files+'LSNS18.pdf','第2页原件冲突')
 ],'该中文PDF是12题LSNS-R，不是18题表；不能直接作为LSNS-18中文原件或验证依据。'),
 'VR-SS-003-074':lsns(12,'LSNS-R为12题修订版，家庭与朋友各6题；原件没有独立的邻居组。',[
  p('英文原件各题0–5，12题等权求和0–60；不能误用平均数作0–60分报告。不同题采用人数或频率类别。',files+'LSNSR.pdf','英文原件计分说明'),
  p('官网中文第2、8题采用笼统频率词，英文相应选项为具体联系周期；中文朋友范围也与英文不完全相同，页脚计分用语存在歧义。已记录差异，尚不能称逐项等价。',files+'LSNSR%20Chinese.pdf','中文原页与英文比较')
 ],'已看完整中文原页，但译者署名和独立中文验证未确认；不替换为自己翻译的选项，不从6题研究继承效度。'),
 'VR-SS-003-075':lsns(6,'LSNS-6关注家庭与朋友两组各3题，衡量联系及可交流、可求助的人际网络。',[
  p('6题各0–5分，人数由无到九人及以上分档，等权求和0–30；不是把原始人数相加。',files+'LSNS6.pdf','开发者6题原件'),
  p('官网评分页指向Lubben等2006的欧洲社区老年人研究；该研究界点须结合目标人群，不据此确诊孤独或心理疾病。',bc+'scoring.html','6题评分研究入口')
 ],'此中文原件是12题版。6题中文研究须锁定其实际施测表，不能直接继承12题翻译。'),
 'VR-SS-002-066':{
  reviewed:'2026-10-14',reviewScope:'1980年开发论文、Table 1及评分键；中文译本、统一漏答规则与权限仍待核对。',
  definition:[p('1980年修订UCLA为20题，加入积极措辞以降低全负向题带来的回答偏差；不是1996年的第三版。',ucla,'原论文第473–475页')],
  scoring:[p('Table 1四级回答计1–4；原号1、4、5、6、9、10、15、16、19、20反向为5减原分，20项求和20–80。该题号不能移用第三版。',ucla,'第475页Table 1及脚注')],
  translations:[{label:'开发者论文原件',url:ucla,note:'直接提供英文20题。本文不能证明本库某份中文译文已经逐字对应或获得使用许可；缺失处理及诊断界点未确认。'}],
  limits:[p('研究包含大学生样本，不能直接外推所有年龄与文化，也不把后续应用论文的分段当作原版统一诊断界点。',ucla,'原研究人群及解释范围')]
 },
 'VR-SS-002-070':{
  reviewed:'2026-10-14',reviewScope:'1980年四题选题、反向键及开发样本；中文译本、漏答与许可仍待核对。',
  definition:[p('此记录对应1980年修订UCLA的调查四题版：原论文第474页脚注1以最优子集回归选择Table 1原号1、13、15、18，样本内α=0.75。',ucla,'四题版直接开发依据')],
  scoring:[p('沿用Table 1四级1–4编码，其中原号1、15反向，13、18正向；若按该顺序重编号，则短版第1、3题反向，求和4–16。',ucla,'第475页Table 1'),p('“四题UCLA”并非唯一题组。后来采用其他四题、五级回答或加入直接孤独问题的研究，不能据名称相同套用本版题号与范围。',ucla,'本记录明确限定的选题来源')],
  translations:[{label:'四题版所在原论文',url:ucla,note:'英文选题及评分已确认；中文完整译文和对应独立验证未取得，不用6题或第三版验证替代。'}],
  limits:[p('这是具体调查短版，不继承20题所有信效度或总分界点；原论文未确立普遍诊断阈值和统一漏答算法。',ucla,'研究及解释边界')]
 },
 'VR-AG-006-098':mnaSf(false),
 'VR-AG-006-099':mnaSf(true),
 'VR-AG-006-100':{
  reviewed:'2026-10-14',reviewScope:'英文及官网简体完整表、分值与使用条件；中文验证和全部测量细则仍待核对。',
  definition:[p('完整MNA按A–R共18项，前6项为筛查，其余12项进一步评估；不是短版六题总分的比例换算。',full,'开发者完整表')],
  scoring:[p('前段最高14、后段最高16，总分0–30；24–30正常、17–23.5风险、<17营养不良。K、M、P、Q等有半分，不能全部取整。',full,'完整表分层与逐题选项'),p('完整表采用F项BMI，并另在R项评估小腿围；不能把短版F2替代的得分直接接入完整表。',guide,'短版指南第8页')],
  translations:mnaTranslations(true),limits:mnaLimits
 }
};
