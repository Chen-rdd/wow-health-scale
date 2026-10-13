# 量表资料与配套输出核验记录

核验日期：2026-10-13。基础版本：main `efda0ef8a29802704edbd366f70b5e7210e0b087`。

本轮是全部待办的第一批成果，**不是全部核验完成**。先完成全量目录盘点、引用纠错和现有题本输出修复；无法取得的材料与未完成的浏览器打印检查仍保留待办。量表检索 skill 尚未开发。

## 全量历史资料

- 盘点60个登记系列、248条版本与分类记录。已有目录合并与别名规则，前台实际显示58个系列、246条索引；不能将登记条数等同于独立量表数量。
- 60个系列都有施测资料。逐条检查248条主要引用的题名与版本关系；有对应关键词不等于完整题本或中文译本相同。
- 检查200个不同来源链接：152个收到HTTP响应，48个发生403、404、超时或证书校验错误。200响应可能是重定向、登录或访问检查页面，不算正文已经核验。403不意味着来源不存在。
- 从PubMed获取100个不同PMID，对应179条登记引用；从Crossref读取118个不同DOI，115个成功、3个429限流。原始报告保留原记录与新元数据，未把限流当作文献无效。
- 更新200条引用的元数据或版本对应。PubMed卷期年与在线发表年分开；WHO-10的1996年原始卷期不能被Crossref的2010年数字化上线日期覆盖。WHOQOL-100的DOI单斜杠形式由Crossref确认，保留而不机械采用PubMed旧别名。

主要纠错：

| 记录 | 原问题 | 本轮处理 |
| --- | --- | --- |
| PHQ系列 | DOI缺少`.x` | 按[PubMed原始论文](https://pubmed.ncbi.nlm.nih.gov/11556941/)修正 |
| HLS-SF12系列 | 期刊及DOI登记错误 | 改为[2019年HLRP开发研究](https://pubmed.ncbi.nlm.nih.gov/31294310/) |
| CAGE系列 | DOI中期次编码错误 | 与已有单篇引用一致，修正为`10.1001/jama.1984.03350140051025` |
| WHO-28 / WHO-10 | 分别误绑定WHO-10 / WHO-5论文 | WHO-10恢复[1996年对应研究](https://pubmed.ncbi.nlm.nih.gov/8843498/)；WHO-28仅保留官方历史线索，不伪造28题验证 |
| PROMIS儿童、代理、幼儿Global | 同伴关系、愤怒、成人工具论文被混用 | 改用[对应年龄与报告者的官方评分手册](https://www.healthmeasures.net/images/PROMIS/manuals/Scoring_Manual_Only/PROMIS_Global_Health_Scoring_Manual_30Aug2024.pdf)，独立译本验证仍待确认 |
| SF-36v2 | 以SF-6Dv2研究代替整体版本验证 | 改为[开发方版本资料](https://coas.iqvia.com/COAs/sf-36v2-health-survey-standard) |
| UCLA原版 / 3题 / 4题 | 分别引用V3 / 6题 / 6题研究 | 原版用[1978年开发研究](https://pubmed.ncbi.nlm.nih.gov/660402/)，3题用[Hughes等2004](https://pubmed.ncbi.nlm.nih.gov/18504506/)，4题保留待确认状态 |
| LSNS-18 / LSNS-R | 6题研究被当作其他长度依据 | 改用[开发者各版本原件入口](https://www.bc.edu/content/bc-web/schools/ssw/sites/lubben/description/versions-of-the-lsns.html) |
| MNA18题完整版 | 以短版验证作为该版研究 | 改用[官方完整版入口](https://www.mna-elderly.com/mna-forms) |
| ASQ:SE-2 | ASQ-3手册冒作社会情绪工具来源 | 改用[开发者月龄与工具说明](https://agesandstages.com/asq-age-administration/) |
| SDM-Q-Doc | 患者版论文被用于医生版 | 改用[2012年医生版研究](https://pubmed.ncbi.nlm.nih.gov/22480628/) |
| 成人VHS | 儿童家长研究被用于成人改编 | 改用[美国与中国成人改编研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8475604/) |

## 16份题本

14份官方PDF成功下载，SHA256与登记一致；逐题文本去掉换行、标点和回答栏后均匹配，另结合原页检查指导语、选项及附加题。该规范化文本检查不能单独证明逐字或版式一致。PHQ-9大陆表首项选项保留官方原件的“从来沒有”字形。

| 表单组 | 已完成 | 仍需材料或检查 |
| --- | --- | --- |
| 成人DASS4份 | 官方题文、评分键、来源关联、配套文件修复 | 中文验证研究完整施测题本逐字匹配 |
| DASS-Y英文及3份中文 | 官方题本；Luo/Tian与Cao/Chen研究补充表的21条题文对应 | 补充表未给完整指导语／回答锚点；香港译本匹配研究未确认 |
| PHQ-9英文与大陆中文 | 官方题本、9项评分及不计分的功能影响问题 | 中文研究完整译文与目录原件对应 |
| GAD-7英文与大陆中文 | 官方题本与0–21分；采用10分的研究与本地最优界值区分 | 中文研究完整施测题本对应 |
| PHQ-8大陆与台湾 | 两份原件分别登记、0–24分、不继承PHQ-9验证 | 各译本独立研究及漏答处理依据 |
| K6/K10普通话核心 | 保留既有预览、核心与“+”表区分 | 当前官方PDF403、旧地址503／超时；新原件与完整跳答无法核对 |

### DASS-Y研究对应

- [Luo等2025](https://link.springer.com/article/10.1007/s12144-025-08057-7)：21题与补充表S1中文列逐题对应；404名苏州14–17岁高职学生。不能外推所有儿童年龄，也不能据补充表断定指导语及回答锚点相同。
- [Cao等2023](https://doi.org/10.1186/s13034-023-00655-2)：S1按维度分组，恢复题序后21题对应；1507名小学生、1131名中学生。部分分析合并回答类别，其修正模型不能直接归于原件四级计分。
- [Taouk等官方报告](https://dass.psy.unsw.edu.au/Chinese/tmhc.htm)：报告与译本由官网直接关联，但报告没有全部施测题文，不能标为逐字匹配。

## 输出检查与开放状态

- 问卷与说明继续使用同一份独立快照；说明新增原题号、反向、维度与原件页码，以及附加问题和研究对应边界。
- 14组候选、28份Word，经文档编译器转换为76页PDF，逐页查看图像。修正中文字体、段落分隔和PHQ-9附加问题跨页拆散；个别来源区仍有较空的末页，没有隐藏内容。
- 浏览器真实生成PHQ-9问卷与说明成功，问卷Word下载成功。
- 浏览器工具安全策略拦截blob打印版导航，**实际浏览器打印预览及另存PDF没有完成**。Word转出的PDF不能代替浏览器打印PDF的分页检查。
- 现有4份成人DASS仍开放；新增10份原件已核对的候选继续关闭，等待打印检查。K6/K10继续关闭。研究匹配状态与文件开放状态分别显示。
- 7项行为检查、TypeScript检查、Vite生产构建通过。生产构建保留原有大体积chunk警告，该警告不阻止构建。

## 复核脚本

Node24执行`node scripts/inventory-catalog.mjs`生成当前登记快照。使用含pdfplumber的Python运行`audit-sources.py`、`compare-source-text.py`、`audit-catalog-links.py`、`audit-reference-metadata.py`、`audit-doi-metadata.py`。它们只检查资料与记录差异，均不自动修改批准状态。

`node scripts/prepare-export-review.mjs /absolute/path/to/docx/dist/index.mjs --include-candidates`仅在本地创建已成功校验原件的候选Word与HTML，正式登记不改变。不得将此标志作为上线批准。使用文档skill编译器检查所有页面；macOS环境需要让Fontconfig能发现中文字体。

本地来源PDF、补充文件、候选Word及渲染图片均不进入公开构建或提交；仅提交核验报告、元数据和脚本。不得因公开论文或样表存在而擅自开放受许可限制的完整题目。
