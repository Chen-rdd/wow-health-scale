import type {ReviewedProfile,EvidenceParagraph} from './reviewed-profiles';
const p=(text:string,source:string,label:string):EvidenceParagraph=>({text,source,label});
const frail='https://pmc.ncbi.nlm.nih.gov/articles/PMC4515112/';
const rga='https://www.slu.edu/medicine/internal-medicine/geriatric-medicine/aging-successfully/-pdf/rapid-geriatric-assessment.pdf';
const tfi='https://www.tilburguniversity.edu/sites/default/files/download/tfieng_2.pdf';
const efs='https://pmc.ncbi.nlm.nih.gov/articles/PMC5955195/';
const efsLicense='https://edmontonfrailscale.org/what-about-copyright-and-licensing';
const efsResources='https://edmontonfrailscale.org/resources';
const lawton='https://hign.org/sites/default/files/2020-06/Try_This_General_Assessment_23.pdf';
const lawtonPage='https://hign.org/consultgeri/try-this-series/lawton-instrumental-activities-daily-living-iadl-scale';
export const frailtyFunctionProfiles:Record<string,ReviewedProfile>={
 'VR-AG-001-BASE':{
  reviewed:'2026-10-15',reviewScope:'2012开放正文的研究样本、FRAIL方法、讨论及Appendix 1核读，SLU一页RGA相关区域视觉核对；2018中文适配研究目前只核对正式摘要。',
  definition:[p('FRAIL为疲劳、上楼、步行、疾病及体重下降五项自报筛查；不是Fried表型的握力／步速实测工具。2012研究以圣路易斯998名49—65岁非裔美国人队列构造量表，分析按基线ADL筛选，不能称为中国老年人开发样本。',frail,'Morley等2012方法与研究范围')],
  scoring:[p('五项各0／1，总分0—5，0为健壮、1—2为衰弱前期、3—5为衰弱。2012疲劳回顾四周，疾病为11种中≥5；体重回顾12个月。正文体重界限写≥5%，附录却写>5与<5，恰好5%的边界不能静默补定。',frail,'方法与Appendix 1'),p('SLU的2016 RGA简表疾病写“多于5种”，体重写过去6个月>5%；其文字不同于2012研究，不把两份表拼成同一正式题本。',rga,'SLU公开原页')],
  translations:[{label:'Dong等中文社区适配研究',url:'https://pubmed.ncbi.nlm.nih.gov/28757330/',note:'2017在线、2018卷期；1235名城市社区老人。摘要报告最佳切点2、敏感度86.96%、特异度85.64%，与Fried表型κ＝0.274，KR-20＝0.485、重测ICC＝0.708。不能据AUC＝0.91忽略一致性和内部一致性限制；全文及确切中文题文待取。'}],
  limits:[p('RGA原页称其所列工具无版权、可免费纳入电子病历；该说明不自动覆盖所有中文改编和论文附件。缺失、边界题及具体用途按锁定版本处理，本批未新增施测表或自动分类。',rga,'原页使用说明')]
 },
 'VR-AG-002-BASE':{
  reviewed:'2026-10-15',reviewScope:'大学三页英文原件的公开可读文字、计分键已核；本地取得因TLS／403失败，原页视觉复核仍待。2010及2017大陆研究仅摘要，2021台湾研究正式XML相关方法／结果／局限已读。',
  definition:[p('TFI的A部分10题为衰弱决定因素，B部分15项才计入衰弱分：躯体8、心理4、社会3。官方完整题号为11—25，不把人口学和生活事件一并加分。',tfi,'大学英文原件')],
  scoring:[p('B总分0—15，三个分量表0—8／0—4／0—3，高分表示更衰弱，英文原件切点5。第11、22、25题“否”为1；记忆第19题“有时”为0，但情绪第20／21及社会第24题“有时”为1，不能统一二分。',tfi,'第三页计分键'),p('台湾2021研究使用KCL为参照，210人60—94岁，75.7%女性，AUC＝0.87，最佳ROC界限5.5；整数分相当于≥6，这是换算说明，不等同原英文≥5或普适诊断。横断面结果不证明未来不良结局预测。','https://doi.org/10.3390/healthcare9091193','TFI-T原研究方法、结果及局限')],
  translations:[{label:'2017大陆社区验证',url:'https://pubmed.ncbi.nlm.nih.gov/28734173/',note:'摘要：917人≥60岁，α＝0.71、重测r＝0.88；正文和完整中文表待取，不将摘要定位称为逐题对应完成。'},{label:'2021台湾TFI-T研究',url:'https://doi.org/10.3390/healthcare9091193',note:'已核读正式XML，研究采用当地适配；当前未找到完整中文题本或单列附件，不能以简繁转换替代独立译本。'}],
  limits:[p('大学提供英文及荷文获取入口和开发团队联系人，没有在已读原件中确认本项目中文改编或再分发许可；最低有效题数和漏答插补亦待核，不自行按比例补分。','https://www.tilburguniversity.edu/nl/onderzoek/instituten-en-researchgroepen/tranzo/academischewerkplaatsen/ouderen/praktijk-producten','大学官方获取入口')]
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
