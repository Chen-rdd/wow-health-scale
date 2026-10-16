import type {EvidenceParagraph,ReviewedProfile} from './reviewed-profiles';
const about='https://www.sdqinfo.org/a0.html';
const scoring='https://www.sdqinfo.org/c1.html';
const chinese='https://www.sdqinfo.org/py/sdqinfo/b3.py?language=Chinese';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
type SDQRecord={id:string;reporter:'parent'|'teacher'|'self';age:string;kind:'standard'|'impact'|'followup'};
// Historical age bands remain separate records; the developer now supplies a shared 4–17 form.
const bands:[SDQRecord['reporter'],string][]=[['parent','2–4'],['parent','4–10'],['parent','11–17'],['teacher','2–4'],['teacher','4–10'],['teacher','11–17'],['self','11–17']];
const labels={parent:'家长',teacher:'教师／幼教',self:'青少年本人'};
const records:SDQRecord[]=(['standard','impact','followup']as const).flatMap((kind,k)=>bands.map(([reporter,age],i)=>({id:`VR-MC-002-${101+7*k+i}`,reporter,age,kind})));
const sharedScores=[p('25项组成五个各5题的分量表，各0–10分；困难总分仅加情绪、品行、多动／注意和同伴四组，范围0–40。亲社会分独立报告，不能把25项全部相加。',about,'开发者结构说明'),p('回答按0、1、2编码，原号7、11、14、21、25反向为2减原分。公开SPSS示例在每个分量表至少3题有效时按均值乘5并取整；困难总分需四组均可计算。须注明所用算法及版本，不把空白计0。',scoring,'开发者公开评分示例')];

export const sdqProfiles:Record<string,ReviewedProfile>=Object.fromEntries(records.map(r=>{
 const preschool=r.age==='2–4', teacher=r.reporter==='teacher';
 const referenceAge=preschool?'2–4':r.reporter==='self'?'11–17':'4–17';
 const profile:ReviewedProfile={
  reviewed:'2026-10-14',reviewScope:'公开版本目录、年龄／报告者、回顾期及评分说明；每份施测原页、中文研究与具体界点仍待逐一核对。',
  definition:[p(`本记录由${labels[r.reporter]}报告${r.age}岁儿童／青少年的情况。${preschool?'幼儿版修改三项措辞，不能直接用大龄版题文。':r.reporter==='self'?'自评适用性还取决于理解和阅读能力，不由家长代答。':'开发者当前提供4–17岁表；本库4–10和11–17是历史年龄索引，不能理解成两套不同核心题。'}`,about,'开发者年龄及报告者说明')],
  scoring:[...sharedScores,p(r.kind==='followup'?'随访版回顾最近一个月，含影响补充及两道干预后变化问题，省略问题持续时间；干预变化题不加入25题分量表。':r.kind==='impact'?'标准加影响版回顾过去六个月或本学年；持续时间、困扰、功能影响及他人负担是补充信息，不加入困难总分。':'标准单面版回顾过去六个月或本学年，没有影响补充题；不能凭25题计算影响分。',about,'标准／补充／随访的区分'),...(r.kind==='standard'?[]:[p(`影响评分与困难分分开。困扰及适用功能领域按0、0、1、2重编码，${teacher?'教师版包括同伴和课堂领域，完整回答上限6分':'家长／自评版包括家庭、同伴、课堂及休闲领域，完整回答上限10分'}；总体无困难时按官方规则处理。`,scoring,'报告者对应的影响评分')])],
  translations:[{label:`中文${referenceAge}岁${labels[r.reporter]}原件入口`,url:chinese,note:r.kind==='followup'?'当前中文目录列标准及影响版，未列中文随访下载；不能据标准中文表宣称随访译本已确认。':'中文目录有对应年龄／报告者入口。官网列翻译及验证参与者，但不等于每个年龄、报告者均完成本库逐字和研究对应。'}],
  limits:[p('SDQ纸本须保持原样；建立或分发电子版本需开发方事先授权，评分程序也须核对许可。本网站没有复制SDQ电子题本或执行评分。', 'https://www.sdqinfo.org/','开发者版权条件'),p('筛查界点随年龄、报告者及常模而变；不把教师阈值移给自评，也不把幼儿临时界点当作大龄标准或诊断结果。','https://www.sdqinfo.org/py/sdqinfo/c0.py','对应年龄评分入口')]
 };
 return [r.id,profile];
}));
