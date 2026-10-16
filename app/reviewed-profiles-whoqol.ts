import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const workbook='https://cdn.who.int/media/docs/default-source/substance-use/who-msd-msb-00-2b.pdf';
const directory='https://www.who.int/tools/whoqol/whoqol-bref';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
export const whoqolProfiles:Record<string,ReviewedProfile>={
 'VR-QL-001-038':{
  reviewed:'2026-10-14',reviewScope:'WHO英文问卷与公开工作册BREF章节；中文原件、当前语法包及原页图像仍待取得或核对。',
  definition:[p('WHOQOL-BREF有26题，回顾近两周：24项形成身体、心理、社会关系、环境四领域，另两项总体生活质量与健康满意度分别报告。不是WHOQOL-100的前26题。','https://cdn.who.int/media/docs/default-source/publishing-policies/whoqol-bref/english_whoqol_bref.pdf','WHO英文原件')],
  scoring:[p('原号3、4、26反向为6减原分。身体题3、4、10、15、16、17、18；心理5、6、7、11、19、26；社会20、21、22；环境8、9、12、13、14、23、24、25。各领域均值乘4得4–20，再按指定转换方法报告0–100；不把26题加总。',workbook,'工作册第70–74页'),p('Table 3示例要求身体至少6／7题、心理5／6题、社会2／3题、环境6／8题有效，全表至少21／26题有效；超出1–5值先作为缺失。工作册正文对领域漏答的措辞与该语法不完全一致，研究须明确采用规则，不拼接成一个算法。',workbook,'第70页正文与第71页Table 3')],
  translations:[{label:'WHO中文译本和评分语法目录',url:directory,note:'本次中文ZIP及当前语法包下载403，英文原件文字可读；没有据目录条目宣称中文题文已取得。WHO明确译本由第三方提供，英文与译文冲突时以英文为准。'}],
  limits:[p('工作册BREF章节要求按原指导语、题序及相应使用条件实施，地区附加题独立报告。当前项目目录与具体译本权限继续核对，不能因WHO链接公开而任意改写题本。',workbook,'工作册第68–69页')]
 }
};
