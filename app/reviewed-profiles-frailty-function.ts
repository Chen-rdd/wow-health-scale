import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const frail2018='https://doi.org/10.1016/j.jamda.2017.06.011';
const frail='https://pmc.ncbi.nlm.nih.gov/articles/PMC4515112/';
const rga='https://www.slu.edu/medicine/internal-medicine/geriatric-medicine/aging-successfully/-pdf/rapid-geriatric-assessment.pdf';
const tfi='https://www.tilburguniversity.edu/sites/default/files/download/tfieng_2.pdf';
const tfi2010='https://doi.org/10.1016/j.jamda.2009.11.003';
const tfi2017='https://doi.org/10.1016/j.archger.2017.07.001';
const tfi2017Appendix='https://ars.els-cdn.com/content/image/1-s2.0-S0167494316303193-mmc1.docx';
const efs='https://pmc.ncbi.nlm.nih.gov/articles/PMC5955195/';
const efsLicense='https://edmontonfrailscale.org/what-about-copyright-and-licensing';
const efsResources='https://edmontonfrailscale.org/resources';
const lawton='https://hign.org/sites/default/files/2020-06/Try_This_General_Assessment_23.pdf';
const lawtonPage='https://hign.org/consultgeri/try-this-series/lawton-instrumental-activities-daily-living-iadl-scale';
export const frailtyFunctionProfiles:Record<string,ReviewedProfile>={
 'VR-AG-001-BASE':{
  reviewed:'2026-10-16',reviewScope:'2012开放正文相关章节与Appendix 1已核读，SLU一页RGA相关区域视觉核对；2018大陆研究正式全文及六页PDF已取得，方法、结果、讨论、两附录文字核读，印刷13—17页及表1—5／附录视觉核对。附录标题为Chinese Version但实际题文为英文，完整中文施测措辞仍缺。',
  definition:[p('FRAIL为疲劳、上楼、步行、疾病及体重下降五项自报筛查；不是Fried表型的握力／步速实测工具。2012研究以圣路易斯998名49—65岁非裔美国人队列构造量表，分析按基线ADL筛选，不能称为中国老年人开发样本。',frail,'Morley等2012方法与研究范围')],
  scoring:[p('五项各0／1，总分0—5，0为健壮、1—2为衰弱前期、3—5为衰弱。2012疲劳回顾四周，疾病为11种中≥5；体重回顾12个月。正文体重界限写≥5%，附录却写>5与<5，恰好5%的边界不能静默补定。',frail,'方法与Appendix 1'),p('2018济南研究将疲劳改为过去一月是否经常疲倦的二分回答，步行距离改为200或300米，疾病≥5种记1；其附录分类为0健壮、1衰弱前期、≥2衰弱，不直接替换其他版本的≥3。PDF附录体重写>5%记1、<5%记0，恰好5%未覆盖；正式网页却写≥5%，两种载体差异保留，不静默补定。',frail2018,'2018原PDF第13及17页／出版社网页附录1'),p('SLU的2016 RGA简表疾病写“多于5种”，体重写过去6个月>5%；其文字不同于2012研究，不把两份表拼成同一正式题本。',rga,'SLU公开原页')],
  translations:[{label:'Dong等大陆社区适配全文',url:frail2018,note:'2017在线、2018卷期；1235名济南22社区60—95岁老人，面对面，排除严重认知受损；两人正译、两人盲回译、专家及30人认知预试。Fried交叉表有效1188人，不是全部1235；≥2的敏感度86.96%、特异度85.64%、阳性预测值19.61%、阴性预测值99.39%，受此样本患病率影响，不当普适诊断。与Fried κ＝0.274、KR-20＝0.485，不能仅凭AUC＝0.91称各项性能均高。完整中文施测原件仍待。'}],
  limits:[p('2018重测为43人、间隔7—15天，结果0.708；方法文字同时出现Pearson及ICC，摘要／讨论称ICC，统计口径不一致保留。横断面、单城市研究不能证明未来不良结局预测，也不推广至所有中文地区。附录2的Fried参照活动项采用IPAQ短表，与原Minnesota方案分别标注；未确认漏答处理和本项目中文再分发许可。',frail2018,'2018第13—17页方法、表4、局限与附录'),p('RGA原页称其所列工具无版权、可免费纳入电子病历；该说明不自动覆盖所有中文改编和论文附件。缺失、边界题及具体用途按锁定版本处理，本批未新增施测表或自动分类。',rga,'原页使用说明')]
 },
 'VR-AG-002-BASE':{
  reviewed:'2026-10-16',reviewScope:'大学独立三页英文PDF本地获取及原页视觉仍待；其公开可读计分键已核。2010原PDF12页相关方法、信度、并存效度、讨论及Appendix 1文字核读，348／349／352／354／355视觉核对。2017大陆原PDF8页与独立中文DOCX已取得，方法、结果、局限及附件15项文字核读，22／24／27及表5视觉核对；独立DOCX在WPS中原生打开，全一页15项、列头及不适用“有时”格视觉核对。2021台湾正式XML相关章节已读，不等于台湾中文原件取得。',
  definition:[p('TFI的A部分10题为衰弱决定因素，B部分15项才计入衰弱分：躯体8、心理4、社会3。官方完整题号为11—25，不把人口学和生活事件一并加分。',tfi2010,'2010原文Appendix 1：第354—355页')],
  scoring:[p('B总分0—15，三个分量表0—8／0—4／0—3，高分表示更衰弱，英文原件切点5。原研究以总分≥5作为筛查界限，不作所有人群诊断；第11、22、25题“否”为1；记忆第19题“有时”为0，但情绪第20／21及社会第24题“有时”为1，不能统一二分。',tfi2010,'2010原文第355页计分键'),p('2017济南研究表5采用总分≥4：以Fried表型为参照敏感度73.8%、特异度84.9%、AUC＝0.87；以FI为参照分别67.6%、86.4%、0.86。Fried活动量部分改用IPAQ短表，并非原表型完全原样复现；各参照有效人数不同，不能将917作为全部ROC分母。该样本内随机分组均取4不等于独立外部验证，也不替换原英文≥5。',tfi2017,'2017正文方法、表2及表5'),p('台湾2021研究使用KCL为参照，210人60—94岁，75.7%女性，AUC＝0.87，最佳ROC界限5.5；整数分相当于≥6，这是换算说明，不等同原英文≥5或普适诊断。横断面结果不证明未来不良结局预测。','https://doi.org/10.3390/healthcare9091193','TFI-T原研究方法、结果及局限')],
  translations:[{label:'2017大陆社区验证正文',url:tfi2017,note:'济南城市社区917人，60—92岁，采用面对面访谈而非原版自填。研究报告三名作者正译、专家核对、盲回译及10人认知预试；该研究取得的翻译使用授权不自动转给本项目。总分α＝0.71，躯体／心理／社会为0.71／0.51／0.25；103人间隔10—25天重测，总分0.88，统计方法指定ICC，不把它无条件改称Pearson相关。'},{label:'Dong等2017独立中文附件',url:tfi2017Appendix,note:'已取得完整15项中文B部分，附件编号1—15对应原完整表11—25，不含A部分10项。中文题文及“是／有时／否”的适用行已核；附件未列逐题分值或完整指导语，不能把该文件单独称为完整计分手册。仅留本地核验，未新增题本下载。'},{label:'2021台湾TFI-T研究',url:'https://doi.org/10.3390/healthcare9091193',note:'已核读正式XML，研究采用当地适配；当前未找到完整中文题本或单列附件，不能以简繁转换替代独立译本。'}],
  limits:[p('2010附录英文采用回译程序，不据英语附录直接声称英语人群或中文已验证。各题时间窗不同：体重非意愿下降为过去六个月≥6kg或过去一月≥3kg，情绪两项问过去一月，不能把整表统一改为一个回顾期。表1各项目／总分有效人数不同，不据研究有缺失自行发明插补。',tfi2010,'2010第347—348、354—355页原表及脚注'),p('2010开发验证为两组≥75岁社区老人（245／234人）；合并样本总分α＝0.73，躯体／心理／社会分别0.70／0.63／0.34，不能把总分信度外推为各维度均高。总分一年重测0.79、两周重测0.90，对应方法段343／226名再测参与者，不把所有479人当作完整重测分母；时间间隔须区分；文中称predictive (concurrent) validity的分析不等于未来结局的前瞻预测验证。',tfi2010,'Gobbens等2010原PDF：第345、349、352页'),p('2017为城市社区横断面研究，排除不能沟通或严重认知受损者，不能直接推广至农村、严重受损人群或未来不良结局预测。作者指出心理维度区分效度不足，且与抑郁／社会支持参照存在条目重叠；总分α不能掩盖心理0.51及社会0.25的内部一致性。中文附件取得不补足漏答规则、译本再分发许可或台湾原件。',tfi2017,'2017第24—27页及局限'),p('大学提供英文及荷文获取入口和开发团队联系人，没有在已读原件中确认本项目中文改编或再分发许可；最低有效题数和漏答插补亦待核，不自行按比例补分。','https://www.tilburguniversity.edu/nl/onderzoek/instituten-en-researchgroepen/tranzo/academischewerkplaatsen/ouderen/praktijk-producten','大学官方获取入口')]
 },
 'VR-AG-003-BASE':{
  reviewed:'2026-10-15',reviewScope:'2006正式开放XML正文、Table 1及结果已读；独立补充ZIP及内含一页GCIF原件已取得、文字与原页均核对。现行官网许可、版本及培训要求另查，未取得现行许可题本。',
  definition:[p('EFS为多维床旁衰弱评估，含画钟和起立行走等表现项目，并非全部自报。2006研究纳入转介综合老年评估的158人，平均80.4岁；结果不能直接当作未筛选社区人群常模。',efs,'Rolfson等2006原研究')],
  scoring:[p('2006 Table 1为11个计分项目，按各项0／1或0／1／2求和，总分0—17，高分更衰弱。附录GCIF为比较工具、总分0—35，不是EFS题本，也不能以其评分替代。',efs,'Table 1及独立GCIF附录'),p('官网现行正式表及计分解释经2018—2019修订整理；急性照护版、Reported EFS及Modified REFS的替代项目分别核对，不能把非官方严重程度分档或0—18规则混入本条0—17记录。','https://edmontonfrailscale.org/do-you-need-training-to-use-the-efs','官网现行标准化与培训说明')],
  translations:[{label:'官网语言和版本目录',url:efsResources,note:'列Mandarin及Traditional Chinese，需要联系取得正式授权版本。公开列名不代表本项目已持有该表，也不证明任意中文翻译均为正式译本。'}],
  limits:[p('研究α＝0.62，评分者一致性κ＝0.77来自18人子样本；不能笼统说所有人群均高信度。',efs,'原研究结果与限制'),p('原论文OA许可与量表许可不同，官网明确复制、发布、翻译及修改须大学许可；小样本或个人临床用途可能免收费，仍需核定许可。',efsLicense,'大学许可要求')]
 },
 'VR-AG-005-BASE':{
  reviewed:'2026-10-15',reviewScope:'HIGN 2019修订两页原件全部视觉核对：当前指南、八项题目和分值、使用注记；1969原研究目前只确认书目，全文未取得。',
  definition:[p('Lawton IADL评估电话、购物、备餐、家务、洗衣、交通、用药和财务等八类较复杂独立生活能力；与基本自理ADL分开。指南用于社区、门诊或医院老人，机构生活者的适用限制单列。',lawton,'HIGN 2019指南')],
  scoring:[p('各类按原页选最接近的功能描述并记0或1，总分0—8，高分更独立。多个回答描述可同分，不能把回答序号当等级分；例如家务中部分需帮助的描述仍记1，须保留具体评分键。',lawton,'HIGN原件第2页'),p('当前建议男女均评估八项。历史男性省略备餐／家务／洗衣的0—5协议见独立历史条目，不作为默认现代评分。',lawtonPage,'HIGN现行建议')],
  translations:[{label:'HIGN英文原件及说明',url:lawtonPage,note:'具体中文措辞、地区及评分口径仍待核，不将其他ADL总分或多档中文版直接等同八项0—8。'}],
  limits:[p('指南说明自报／代报可能高估或低估能力，且对细小功能变化不敏感。其材料允许按条件完整用于非营利教育并注明出处；其中原始量表另有版权及获准再现注记，不把机构已有许可转称本项目任意改编许可。漏答规则未确认。',lawton,'HIGN限制及使用条件')]
 },
 'VR-AG-005-155':{
  reviewed:'2026-10-15',reviewScope:'HIGN 2019指南对历史性别协议和现代八项建议的明确区分已核；旧版下载链接404，未取得1969原论文及旧版原页。',
  definition:[p('此条为Lawton IADL的历史性别计分协议。女性评八项，男性历史上省去备餐、家务、洗衣三项，反映当时角色安排；并非另开发了五题通用短版。',lawtonPage,'HIGN历史说明')],
  scoring:[p('历史口径女0—8、男0—5，高分更独立；不同分母的原始总分不能直接比较，也不能不经验证按比例换成八项。当前HIGN建议男女评全八项，使用旧资料时应明确标记历史协议。',lawtonPage,'现行指南与历史计分边界')],
  translations:[{label:'现代与历史协议说明',url:lawtonPage,note:'中文应用需查看实际保留的项目、选项和分母，不能只凭“Lawton”名称推定采用5／8。'}],
  limits:[p('本条只保留历史协议说明，不另生成题本或自动性别跳答。1969全文、旧版原件和中文对应待取得；漏答不能当作因为性别而结构性省略的项目。',lawton,'证据范围及未完成事项')]
 }
};
