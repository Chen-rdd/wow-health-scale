import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const ess='https://epworthsleepinessscale.com/about-the-ess/';
const essLicense='https://www.mapi-trust.org/news-events/events/webinars/epworth-sleepiness-scale';
const chad='https://pubmed.ncbi.nlm.nih.gov/28449902/';
const book='https://css-scs.ca/wp-content/uploads/2016/05/Insomnia_Adult_Child.pdf';
const ais='https://pubmed.ncbi.nlm.nih.gov/11033374/';
const aisCut='https://pubmed.ncbi.nlm.nih.gov/12932801/';
const nca='https://access.gesis.org/zis/1308';
const ncaCn='https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1183919/full';
export const sleepEssAisProfiles:Record<string,ReviewedProfile>={
 'VR-SL-003-032':{
  reviewed:'2026-10-15',reviewScope:'开发者公开索引文字核对构念、0—24及1997指导语改动；Canadian Sleep Society公开重印第24页视觉查看，1991研究仅正式摘要。现行许可题本未取得。',
  definition:[p('ESS询问八种情境中打盹／入睡的通常机会，测量近期日间睡眠倾向，不是仅问疲劳或昨夜睡得好不好。开发者说明1997主要增加提醒逐题尽力作答的指导句，不据此建立新的疾病诊断。',ess,'开发者版本说明（公开索引文字）')],
  scoring:[p('八项各0—3，总分0—24，高分日间睡意较多；情境近期未发生时仍按原指导语估计可能性，不等于允许漏答填0。没有统一的缺失插补依据。',ess,'开发者公开计分说明'),p('开发者现行分段0—5、6—10为正常范围的较低／较高段，11—12、13—15、16—24分别为轻／中／重度过多睡意的描述；不能独立诊断嗜睡病或睡眠呼吸暂停。',ess,'开发者解释分段')],
  translations:[{label:'ESS正式许可与译本',url:'https://eprovide.mapi-trust.org/instruments/epworth-sleepiness-scale',note:'许可与官方语言版本经Mapi Research Trust办理；本次没有取得正式中文题本、电子施测许可或逐字验证材料。'}],
  limits:[p('1991摘要样本180名成人，其中30名正常对照、150名不同睡眠障碍患者；不能当作中国一般人群常模。八种场景不适用的特殊人群及改编表需独立证据。','https://pubmed.ncbi.nlm.nih.gov/1798888/','Johns原始研究摘要'),p('官方作者介绍明确包括许可办理。本次查看的公开重印不能代替现行许可原件或证明可自行修改／公开施测。',essLicense,'Mapi开发者讲座与许可入口')]
 },
 'VR-SL-003-033':{
  reviewed:'2026-10-15',reviewScope:'2017学校样本及2022发作性睡病研究正式摘要核对，官方获取入口已定位；官网PDF请求TLS失败，未称原文或完整ESS-CHAD许可题本已取。',
  definition:[p('ESS-CHAD为ESS儿童青少年适配，修改成人饮酒／驾驶等场景。2017直接验证为澳大利亚两校297名12—18岁青少年，单维结构证据不能外推到所有更低年龄或所有疾病。',chad,'Janssen等2017直接验证摘要')],
  scoring:[p('标准结构为八项、每项0—3、总分0—24，需按所获正式题本确定回顾期和报告者。2017研究要求进一步确定儿童／青少年准确界限，不能直接照搬成人ESS解释分段。',chad,'直接验证与年龄限制'),p('2022研究验证的是一周回顾ESS-CHAD，100名7—16岁伴猝倒发作性睡病受试者；α＝0.750，重测ICC＝0.755来自64人。不能用这项治疗研究证明同年龄健康儿童的任意回顾期均已验证。','https://pubmed.ncbi.nlm.nih.gov/34920345/','特定临床人群研究摘要')],
  translations:[{label:'ESS-CHAD官方许可与译本获取',url:'https://eprovide.mapi-trust.org/instruments/epworth-sleepiness-scale-child-adolescent',note:'需明确语言、年龄、自报／代报和施测方式取得对应文件；中文原件、具体儿童群体验证及漏答规则仍待确认。'}],
  limits:[p('许可由正式渠道办理；成人ESS、ESS-CHAD和不同报告者不能只因都是八题而互相替代。2017及2022全文／附件尚未取得，本批只提供来源说明。',essLicense,'许可与证据边界')]
 },
 'VR-SL-004-034':{
  reviewed:'2026-10-15',reviewScope:'2000开发及2003界点研究正式摘要核对；Canadian Sleep Society公开手册第25页八题、锚点及指导语全部视觉查看，不称两篇研究全文已读。',
  definition:[p('AIS-8前五项为入睡、夜醒、早醒、总睡眠时间和质量，后三项为日间幸福感、功能和睡意。基于ICD-10睡眠困难构念，与ESS日间睡眠倾向不同。',ais,'Soldatos等2000开发摘要')],
  scoring:[p('原重印各项0—3，总分0—24，高分困难较重，无反向。指导语为过去一月、至少每周三次；不能把这些回顾及频次条件省去后仍称同一原式。',book,'第25页AIS原件重印'),p('2003摘要：299人中以ICD-10为参照，≥6敏感度93%、特异度85%；预测值依人群而异。此为八题表研究的筛查界限，不是五题或NCA的统一诊断阈值。',aisCut,'界点研究摘要')],
  translations:[{label:'原开发来源与中文核对边界',url:ais,note:'2000验证包含105名原发失眠、144名精神科患者及50名对照；具体台湾／大陆译本、完整施测题文及各自阈值仍待独立核对。NCA中文六题研究不替代AIS-8。'}],
  limits:[p('公开重印手册第27页另列AIS“正常<10”，与原开发者2003研究阈值6不同，未将手册这一简略解释当作通用规范。漏答及复制／翻译许可尚未确认。',book,'公开重印与开发研究分开')]
 },
 'VR-SL-004-035':{
  reviewed:'2026-10-15',reviewScope:'2000原研究摘要明确AIS-5为前五项；公开八题重印原页用于核查其项目与锚点，独立五题原件、全文及中文材料未取得。',
  definition:[p('AIS-5是AIS-8前五项的嵌套形式，聚焦夜间睡眠，不含日间幸福感、功能与睡意后三项；并非NCA七题改编版。',ais,'原开发摘要')],
  scoring:[p('五项各0—3，相加范围推得0—15；保持原项目和适用指导语。2000研究摘要同时评估AIS-8与AIS-5，但八题表≥6及中文其他长度的界限不能直接转给五题表。',ais,'结构与范围推算')],
  translations:[{label:'AIS-5直接开发来源',url:ais,note:'独立中文五题原件、评分解释与目标人群验证仍待取得；不把已知中文AIS-8研究当作五题版验证完成。'}],
  limits:[p('摘要给AIS-8／AIS-5与Sleep Problems Scale相关分别0.90／0.85；这是该开发样本，不是所有译本的精度保证。漏答、独立界限与用途许可未确认，不按长度比例换算。',ais,'开发摘要及未完成范围')]
 },
 'VR-SL-004-036':{
  reviewed:'2026-10-15',reviewScope:'作者GESIS 2022技术说明33页取得，前五页的英德题文、指导语、计分及许可相关原页核对；中文2023正文PDF／XML方法、结构、信度与局限已读，第6—7页删题与模型视觉查看。未称全部33页研究图表已复核。',
  definition:[p('AIS-NCA原开发形式七题、五级1—5，睡眠问题四项与日间功能三项，可形成分量表及总体指标。作者提供12个月或四周的研究回顾期选项；它改变题目与回答格式，不能按AIS-8的0—24或≥6解释。',nca,'作者GESIS技术说明')],
  scoring:[p('全部按问题较重方向编码，无反向；若直接相加，七题范围推得7—35，不能当作已确认所有研究均采用的唯一汇总方式。作者说明分析排除缺失，尚未验证任意漏答补值方案。',nca,'第3页计分与缺失说明'),p('Tan等2023中文研究删除原第4项“总体睡眠质量”，六题模型为前三项睡眠问题及原5—7项日间功能。研究可先答七题但该项不计入分析；不能把其信效度转授给未删题中文七题总分。',ncaCn,'中文研究第6—7页及讨论')],
  translations:[{label:'Tan等2023中文运动员与学生研究',url:ncaCn,note:'上海426名职业运动员、779名高中生，四周回顾；六题运动员α＝0.729、ω＝0.708，一周总ICC＝0.737、两周＝0.517。跨职业部分不变性和样本限制保留；原文未提供完整中文施测表，确切措辞仍待取得。'}],
  limits:[p('GESIS说明为CC BY-NC-SA 4.0，作者及用途／再分发条件须保留；原开发七题、中文六题和临床AIS-8／5均分开，不新增自动分类或完整题本。',nca,'技术说明许可与改编边界'),p('中文研究曾获作者翻译许可，不等于本项目已继承该许可；确切中文施测原件仍待取得。',ncaCn,'研究翻译程序与项目权限分开')]
 }
};
