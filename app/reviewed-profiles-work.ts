import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const cbi='https://nfa.dk/media/a4wheblj/cbi-scales.pdf';
const proqol='https://proqol.org/proqol-measure';
const manual='https://proqol.org/proqol-manual';
const eriBase='https://www.uniklinik-duesseldorf.de/fileadmin/Fuer-Patienten-und-Besucher/Kliniken-Zentren-Institute/Institute/Institut_fuer_Medizinische_Soziologie/';
const eriManual=eriBase+'Dateien/ERI/PsychometricProperties.pdf';
const eriLong=eriBase+'Forschung/Chinese_long_ERI.pdf';
const eriShort=eriBase+'Forschung/Chinese_short_ERI.pdf';
const cbiStudent='https://www.scielo.br/j/prc/a/FwPMLj7WGdFjFyBdrgDvFRw/?lang=en';
const eriStudy='https://www.jstage.jst.go.jp/article/joh/54/6/54_12-0106-BR/_article';
const olbiStudent='https://www.scielo.br/j/prc/a/7zgKNFznCFY6wTS4HvKGWMR/?lang=en';
export const workProfiles:Record<string,ReviewedProfile>={
 'VR-OH-003-151':{
  reviewed:'2026-10-15',reviewScope:'Campos等2012葡语学生版开放论文方法、结果、讨论及原页表2、图1已核读；中文译本、目标人群验证及计分方向需另锁定，不将职业版直接套用。',
  definition:[p('葡语OLBI-S改编将职业语境换为学习语境，原表16题、耗竭及疏离各8题；论文精简模型排除O5与O13，保留各7题共14题。原表与精简模型不能只用“学生版”统称后互换。',olbiStudent,'2012论文表2及图1')],
  scoring:[p('表2为1—4同意程度，按两个维度均分分析。该研究的反向标记与常见高分代表倦怠的编码方向需分别确认；尚未建立与具体中文表一致的评分键，不在本站开放自动计分或沿用职业版反向题号。',olbiStudent,'原论文表2、施测及效标分析方法')],
  translations:[{label:'葡语学生改编及验证原文',url:olbiStudent,note:'纳入巴西958人、葡萄牙602名完整作答者。耗竭α＝0.565、疏离α＝0.700，收敛效度有限且两国不等值；不能只引用整体一致性指标宣称所有维度验证良好，也不等于中文验证。'}],
  limits:[p('研究虽允许在线跳过问题，最终只纳入完整作答者；不据此推定量表允许漏答比例。没有核定中文题本、统一临床界点或中文再分发条件，继续列为待取得材料。',olbiStudent,'原论文样本方法与应用边界')]
 },
 'VR-OH-005-093':{
  reviewed:'2026-10-15',reviewScope:'官方简体长版三页、2012英文长版一页均核对原页；2014手册结构、编码及比值章节已核读。中文所列2004／2005验证论文全文尚未核读，不能把两代长版当同一表。',
  definition:[p('官网简体长版为23题：付出6、回报11、内在投入6。2012英文修订长版将上司／同事尊重两题合并，付出与回报共16题，内在投入另列；“长版”并不唯一对应23题。',eriLong,'简体原件与2014手册第4页版本变更')],
  scoring:[p('简体23题版按原页编码分别求和，付出6—24、回报11—44、内在投入6—24；第10—13及20题的回答代码已经反向印好，录入印刷代码后不要再次反向。',eriLong,'简体原件第2—3页'),p('该中文长版比值为E／(R×0.5454)，系数约为6／11。2012英文修订版改用回报10题，相应为(E／R)×10／6；若按手册省去体力付出题则为10／5。系数必须跟实际题本一致。',eriManual,'2014手册第4、9页；中文原页第3页'),p('ER＝1只是付出与回报的描述性平衡点，不是临床验证阈值。当前核读材料未锁定统一漏答算法，不自行按比例补分。',eriManual,'2014手册第9页解释边界')],
  translations:[{label:'李健提供的大陆简体23题长版',url:eriLong,note:'原件注明研发与提供者为李健，并列杨文杰／李健2004与Li等2005研究；已核对原件，相关研究全文证据仍待补。此中文表不能直接认定为2012英文修订版的逐题翻译。'}],
  limits:[p('简体原件允许科研免费使用，要求注明提供者并引用指定研究；商业用途须联系ERI中心，可能收费。免费科研使用不自动等于可在任何网站再分发完整题本。',eriLong,'简体原件第1页使用条件')]
 },
 'VR-OH-005-094':{
  reviewed:'2026-10-15',reviewScope:'官方简体短版三页、2012英文短版一页均核对原页；2014评分手册相关章节及Li等2012英文验证研究方法、结果、局限与第433页双语附录已核读；补充附件另记获取状态。',
  definition:[p('短版共16题，含付出3、回报7和内在投入6；英文标题“ERI-S 10 Items”仅数付出与回报，不包括另列的OC六题。',eriShort,'简体原件与2012英文表')],
  scoring:[p('四级回答按原件代码：付出3—12、回报7—28、内在投入6—24；简体第5—7和13题已将反向代码印入选项，录入该代码后不再反向。比值E／(R×0.4286)约等于(E／R)×7／3，内在投入不加进比值。',eriShort,'简体原件第2—3页'),p('Li等研究排除262名ERI缺失者，分析1916人；这是该研究的完整个案处理，不能解释为量表统一允许漏答或插补。手册也未将ER＝1作为临床诊断阈值。',eriStudy,'Li等2012方法及官方手册第9页')],
  translations:[{label:'大陆简体短版原件',url:eriShort,note:'李健翻译、商立回译、Siegrist审查回译的流程见Li等2012研究；第433页附录列出双语16项及四级回答，已对照官网简体原页。昆明30—65岁在职样本1916人，付出／回报／内在投入α为0.67／0.72／0.73。横断面、单一城市且皆已婚，不外推所有职业或推断因果。'}],
  limits:[p('科研免费使用须注明提供者并引用指定验证研究；商业用途须联系ERI中心。当前仅增加来源和计分概括，未新增完整题本或开放导出。',eriShort,'简体原件第1页使用条件')]
 },
 'VR-OH-002-152':{
  reviewed:'2026-10-15',reviewScope:'Campos等2013出版社开放原论文方法、结果、讨论及图1原页已核读；尚未锁定中文题本与独立中文验证，不把职业版19题直接改词代替学生版。',
  definition:[p('这项葡语学生改编把服务对象维度扩展为同学、教师，形成个人、学习、同学、教师四维。图1是25题初稿；验证模型删除原第10及22题，变为23题，两者应明确区分。',cbiStudent,'2013原论文图1及结果')],
  scoring:[p('图1回答为1—5频率，初稿第10题反向。精简模型已删除该题，四维分别6、6、6、5题；研究以维度均分作关联分析，不能直接套职业CBI的0—100计分、19题结构或最低作答题数。',cbiStudent,'原论文图1、结果与效标分析方法')],
  translations:[{label:'葡语学生版原始改编研究',url:cbiStudent,note:'完整作答纳入巴西958人、葡萄牙556人；研究没有支持两国测量不变性。该研究支持范围不包括中文学生样本，中文原件、漏答规则和适用阈值另待核。'}],
  limits:[p('原论文开放许可与具体译本、改编及题本再分发条件分别核对；不将该研究的内部交叉验证描述成跨文化等值，不提供通用临床诊断界点。',cbiStudent,'原论文跨国模型与适用边界')]
 },
 'VR-OH-002-BASE':{
  reviewed:'2026-10-15',reviewScope:'NFA的PUMA研究英文CBI题本两页，完整题项、回答类别及计分原页已核对；具体中文译本、学生改编及独立研究另待核。',
  definition:[p('CBI区分个人、工作相关、服务对象相关的身心耗竭，题量分别6、7、6；三个分量表独立，不能用简单总和替代。',cbi,'官方PUMA英文原件')],
  scoring:[p('各回答按100、75、50、25、0赋分，分量表取已回答题均值，范围0—100，高分表示更严重。工作分量表第7题反向，不能将其频率选项照其他题方向相加。',cbi,'原件第1—2页计分'),p('个人及服务对象分量表至少答3题，工作分量表至少答4题；低于该数量按无有效回答处理。不同题组分别使用频率或程度锚点，不能统一改成同一套回答词。',cbi,'原件最低有效答题数')],
  translations:[{label:'NFA完整英文表及评分',url:cbi,note:'尚未取得并匹配具体中文题本；职业版的服务对象维度不能仅替换名词就当作已验证的学生版。'}],
  limits:[p('NFA现行官网允许商业及非商业免费使用，要求明确引用Borritz等2006 PUMA研究；此原件未规定可通用的临床诊断分界。具体中文译本及其验证仍需单独核对。','https://nfa.dk/vaerktoejer/spoergeskemaer/spoergeskema-til-maaling-af-udbraendthed-cbi/copenhagen-burnout-inventory-cbi','NFA官方使用条件及原件边界')]
 },
 'VR-OH-004-BASE':{
  reviewed:'2026-10-15',reviewScope:'现行官网英文自评分表三页、简体护理语境表一页均已视觉核对；2010手册施测、评分、解释及FAQ相关章节已读，未宣称74页逐页检查。',
  definition:[p('ProQOL 5以30题询问助人职业工作中的过去30天体验，分别测量慈心满意、倦怠和继发性创伤压力；现行英文回答为1—5。',proqol,'现行英文表与官网目录')],
  scoring:[p('每分量表10题，原始和10—50。倦怠中的1、4、15、17、29题按6减原分反向；三维分开报告，不能合并为一个诊断总分。',proqol,'英文Self-Score第3页'),p('手册中的标准化分与英文自评分表原始分区间须区分；参考分段不是疾病诊断。当前核读材料未确认统一漏答数量阈值，不能仅凭手册SPSS的SUM函数默认行为推定允许缺失规则。',manual,'手册第5—6节及解释边界')],
  translations:[{label:'官网简体中文及另一Chinese版本入口',url:proqol,note:'已核对简体PDF为护士语境30项、过去30天及1—5锚点；原页未列出可锁定的译者和独立验证研究，不能将中文公开收录当作验证通过。官网提示部分译本计分文字过时，应另对现行英文自评分表。'}],
  limits:[p('现行英文原件要求保留作者、不修改且不销售；超出职业词替换的改写标为改编，不能保持原版验证标签。没有新增完整题本或导出开放。',proqol,'英文原件使用条件')]
 },
 'VR-OH-004-154':{
  reviewed:'2026-10-15',reviewScope:'官网IV到5修订对照一页已视觉核对，2010手册第72页FAQ已读；IV独立历史题本和完整评分附件仍待取得。',
  definition:[p('ProQOL IV为历史版本；官网对照显示第5版调整题目措辞及回答类别，不能只把IV改名为5。',proqol,'官方IV与5修订对照')],
  scoring:[p('IV保留0—5编码。手册FAQ对反向项目的0分规定仍为0，1—5才反向；这与第5版1—5的6减原值规则不同。完整历史表和对应解释尚待核，不直接套现行原始分段。',manual,'2010手册第72页FAQ')],
  translations:[{label:'历史与现行版本获取入口',url:proqol,note:'本站尚未锁定IV具体中文题本及验证研究；第5版简体护理题本不能代替IV。'}],
  limits:[p('历史原始总分与当前原始总分不直接比较；如研究使用标准化分，仍须报告标准化依据和样本，不因名称相近就默认跨版本等值。',manual,'历史版本解释限制')]
 }
};
