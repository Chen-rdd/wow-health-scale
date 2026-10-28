import type {ReviewedProfile} from './reviewed-profiles';
import {historicalProfiles} from './reviewed-profiles-history';
export const largeBatchOneProfiles:Record<string,ReviewedProfile>={
  "VR-SL-001-027": {
    "reviewed": "2026-10-16",
    "reviewScope": "开发者一页英文六题原件此前已视觉核对；现从匹兹堡大学取得2021开发11页全文，相关方法、结果、讨论及表2—5文字核读，第116—118页视觉核对。总分结构与研究界点已补；完整逐项换档算法、中文原件、APA独立附件检查仍待。",
    "definition": [
      {
        "text": "B-PSQI保留六个问题，涉及就寝／起床时刻、入睡耗时、实际睡眠时数、夜间或过早醒来及总体质量；回顾过去一个月。六问形成五个计分项目，不是六个0—3组成分。",
        "source": "https://www.sleep.pitt.edu/research/measures-and-study-instruments",
        "label": "匹兹堡大学原件与版本入口"
      }
    ],
    "scoring": [
      {
        "text": "原研究明示六问形成五个计分项目：入睡潜伏期、睡眠时长、睡眠效率、夜间觉醒及主观质量；就寝／起床时刻用于睡眠效率计算，结合实际睡眠时数。总分0—15，高分睡眠较差。论文和此前一页表尚不足以核定全部连续量到0—3的换档键，不直接生成评分器。",
        "source": "https://www.sleep.pitt.edu/sites/default/files/assets/Instrument%20Materials/B-PSQI%202021.pdf",
        "label": "2021第115—117页结构、表2及图2"
      },
      {
        "text": "本样本以ISI≥8为参照，表5最优B-PSQI界点明确写>5（整数相当于≥6），敏感度75.82%、特异度76.99%，AUC0.846；这是相对另一自评量表的筛查表现，不是结构临床访谈诊断或所有中文人群阈值。不能借同一数字把完整PSQI计分或解释搬过来。",
        "source": "https://www.sleep.pitt.edu/sites/default/files/assets/Instrument%20Materials/B-PSQI%202021.pdf",
        "label": "2021第117—118页ROC及表5"
      },
      {
        "text": "研究分析609名西班牙非临床成年人18—75岁，来自线上滚雪球样本，女性437人；原文为ordinal α0.79、ordinal ω0.91。性别仅部分标量不变，需释放夜醒项目阈值；年龄组未通过度量不变，不能宣称所有年龄分数可直接比较。",
        "source": "https://www.sleep.pitt.edu/sites/default/files/assets/Instrument%20Materials/B-PSQI%202021.pdf",
        "label": "2021方法、表4与第119页局限"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.sleep.pitt.edu/research/measures-and-study-instruments",
        "note": "未取得该六题形式的完整中文题本及其独立验证；完整版中文证据不自动转移。"
      }
    ],
    "limits": [
      {
        "text": "原文与大学说明将学术／临床使用和商业许可分开，论文及题本版权亦分别处理；能公开下载论文不等于取得中文改编或网站完整再分发许可。完整中文题文、独立人群验证、漏答规则及完整评分键仍待，不新增公开题本。",
        "source": "https://www.sleep.pitt.edu/sites/default/files/assets/Instrument%20Materials/B-PSQI%202021.pdf",
        "label": "原文第111页版权及研究适用边界"
      }
    ]
  },
  "VR-SL-001-144": {
    "reviewed": "2026-10-15",
    "reviewScope": "2005直接开发摘要及大学技术说明取得；大学两页PDF为技术许可简介，非七题施测表。",
    "definition": [
      {
        "text": "PSQI-A围绕创伤相关的七类破坏性夜间行为，是PSQI的PTSD附加工具，不是PSQI七个组成分的另一个名称。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/15533706/",
        "label": "Germain等2005直接开发摘要"
      }
    ],
    "scoring": [
      {
        "text": "本批未取得完整七题锚点及评分原页，暂不以二手0—21范围代替核验。开发摘要的4分筛查表述有上下文局限，不转作普遍PTSD诊断界点，也不与PSQI总分相加。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/15533706/",
        "label": "Germain等2005直接开发摘要"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15533706/",
        "note": "中文具体译文、创伤人群独立研究及正式施测原件仍待取得。"
      }
    ],
    "limits": [
      {
        "text": "大学技术转让资料只说明用途及知识产权，不能代替题本、手册或电子公开权限。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/15533706/",
        "label": "Germain等2005直接开发摘要"
      }
    ]
  },
  "VR-PH-007-019": {
    "reviewed": "2026-10-15",
    "reviewScope": "1996直接研究正式摘要；28题历史结构与10题提取关系核读，未取得原始题本或评分全文。",
    "definition": [
      {
        "text": "WHO-28包含抑郁、焦虑、精力和积极幸福感四方面；不能与Bradley的22题或12题W-BQ混为一谈。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ],
    "scoring": [
      {
        "text": "研究来自八国十中心胰岛素治疗糖尿病样本，358人资料用于分析。原始锚点、反向键、缺失规则和界点待原件确认；不套用WHO-5的0—25或乘4转换。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "note": "未取得对应历史长度的完整中文施测表或独立中文验证。"
      }
    ],
    "limits": [
      {
        "text": "现行WHO-5资料的许可和验证范围不自动覆盖历史WHO-28／10；用途与原件条件继续核对。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ]
  },
  "VR-PH-007-020": {
    "reviewed": "2026-10-15",
    "reviewScope": "1996直接研究正式摘要；28题历史结构与10题提取关系核读，未取得原始题本或评分全文。",
    "definition": [
      {
        "text": "WHO-10由28题资料提取，结合正、负向感受形成整体幸福感指标；并非后来WHO-5全正向题的简单加长版。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ],
    "scoring": [
      {
        "text": "研究来自八国十中心胰岛素治疗糖尿病样本，358人资料用于分析。原始锚点、反向键、缺失规则和界点待原件确认；不套用WHO-5的0—25或乘4转换。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "note": "未取得对应历史长度的完整中文施测表或独立中文验证。"
      }
    ],
    "limits": [
      {
        "text": "现行WHO-5资料的许可和验证范围不自动覆盖历史WHO-28／10；用途与原件条件继续核对。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/8843498/",
        "label": "Bech等1996糖尿病研究摘要"
      }
    ]
  },
  "VR-PH-006-143": {
    "reviewed": "2026-10-15",
    "reviewScope": "2006芬兰直接比较研究及2008斐济研究正式摘要核读；正式GHQ-20许可题本未取得。",
    "definition": [
      {
        "text": "GHQ-20是不同于GHQ-12的20题历史形式。2006芬兰4580名22—27岁双生子资料中，四因子拟合优于三因子，出现额外快感缺失维度；不能外推为全年龄中文版常模。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/16987212/",
        "label": "2006 GHQ-12与20直接比较摘要"
      }
    ],
    "scoring": [
      {
        "text": "确切题组、回答锚点、GHQ／Likert编码及界点需对应20题手册。不能从12题总分换算，亦不把斐济研究删去两题的形式当作完整20题验证。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/16987212/",
        "label": "2006 GHQ-12与20直接比较摘要"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16987212/",
        "note": "中文20题版本、语言地区及独立验证仍待核对。"
      }
    ],
    "limits": [
      {
        "text": "需取得出版方许可与对应题本；学校能读论文不代表具有题本再分发权。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/16987212/",
        "label": "2006 GHQ-12与20直接比较摘要"
      },
      {
        "text": "斐济研究摘要说明去掉两项，需补全文确认具体删题及编码，不能以其代替全部20题原件。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/18181417/",
        "label": "斐济研究摘要的改编边界"
      }
    ]
  },
  "VR-OH-003-BASE": {
    "reviewed": "2026-10-15",
    "reviewScope": "2001开发背景摘要；2010作者公开研究附录文字；2022中文护士研究完整HTML方法、结果与附录核读，中文实际施测题文未取得。",
    "definition": [
      {
        "text": "成人OLBI为16题，耗竭与疏离各八题，包含正、负向措辞。成人工作版和学生学习改编版分别解释。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8685855/",
        "label": "Xu等2022中文护士验证全文"
      }
    ],
    "scoring": [
      {
        "text": "2022护士论文采用1完全不同意至4完全同意，原号1、5、7、10、13、14、15、16反向，合计16—64。此键绑定其附录题序，不可移用于不同排序或相反锚点的英文表。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8685855/",
        "label": "Xu等2022中文护士验证全文"
      },
      {
        "text": "2010作者公开附录从1强烈同意至4强烈不同意，对应反向原号2、3、4、6、8、9、11、12。两套原号与锚点必须一起记录，不能只复制反向题号。",
        "source": "https://doi.org/10.1037/a0019408",
        "label": "Demerouti等2010附录文字与版本差异"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8685855/",
        "note": "江苏641名临床护士便利样本，α0.905，未做重测。标题为Chinese version，但公开附录显示英文题文，不能将之当作完整中文施测原件。"
      }
    ],
    "limits": [
      {
        "text": "研究说明联系作者取得使用许可；本项目未因此取得独立译本或公开题文权限。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8685855/",
        "label": "Xu等2022中文护士验证全文"
      }
    ]
  },
  "VR-OH-004-153": {
    "reviewed": "2026-10-15",
    "reviewScope": "2005年29页手册取得，第三次修订沿革及评分章节核读，第2、11页视觉核对；尚未配齐同修订施测原件。",
    "definition": [
      {
        "text": "2005手册记载早期66题CSF经过第三次修订缩至30题，分同情满足、倦怠、同情疲劳／继发创伤三个十题分量表。",
        "source": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf",
        "label": "Stamm 2005手册评分原页"
      }
    ],
    "scoring": [
      {
        "text": "手册第11页反向1、4、15、17、29，明确0保持0，1与5互换、2与4互换、3不变。三量表分别求和，没有30题复合总分；不能套用现行V5的1—5编码或简单6减原分。",
        "source": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf",
        "label": "Stamm 2005手册评分原页"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf",
        "note": "III完整题本、中文译文及其独立验证待与2005手册逐字配套；现行V5中文表不能冒充历史III。"
      }
    ],
    "limits": [
      {
        "text": "手册允许注明来源、保持内容、不出售的复制条件；不代表不同版本分数天然可比。历史百分位不作临床诊断。",
        "source": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf",
        "label": "Stamm 2005手册评分原页"
      },
      {
        "text": "该手册历史SPSS示例按已答题求和，且承认拒答可能未被充分处理；这不是已验证的任意缺失插补规则，本网站不据此自动漏答计0。",
        "source": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf",
        "label": "历史缺失处理的局限"
      }
    ]
  },
  "VR-OH-001-089": {
    "reviewed": "2026-10-15",
    "reviewScope": "出版方公开版本目录与截点撤销说明；未取得正式题本、第四版手册或中文许可材料。",
    "definition": [
      {
        "text": "MBI-HSS用于助人服务职业，共22题，分别评价情绪耗竭、去人格化、个人成就感。职业措辞及对象需锁定对应形式。",
        "source": "https://www.mindgarden.com/314-mbi-human-services-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "scoring": [
      {
        "text": "分维度解释，成就感／效能与耗竭方向不同；本批不提供未经许可手册核对的完整题序键或一个合并诊断总分。",
        "source": "https://www.mindgarden.com/314-mbi-human-services-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.mindgarden.com/314-mbi-human-services-survey",
        "note": "官方提供译本与完成中文独立验证是两件事；需取得该形式、地区语言、评分键及使用许可后逐项配对。"
      }
    ],
    "limits": [
      {
        "text": "公开目录不是题本许可。研究施测、电子实施及公开网站完整展示的条件需分别确认。",
        "source": "https://www.mindgarden.com/314-mbi-human-services-survey",
        "label": "Mind Garden对应形式说明"
      },
      {
        "text": "2016第四版手册撤去旧高／中／低截点，因旧分组不具诊断效度；不得继续把这些分组包装为统一临床诊断。",
        "source": "https://www.mindgarden.com/documents/MBI-Cutoff-Caveat.pdf",
        "label": "出版方2018截点撤销说明"
      }
    ]
  },
  "VR-OH-001-090": {
    "reviewed": "2026-10-15",
    "reviewScope": "出版方公开版本目录与截点撤销说明；未取得正式题本、第四版手册或中文许可材料。",
    "definition": [
      {
        "text": "MBI-HSS(MP)用于医务人员，共22题，分别评价情绪耗竭、去人格化、个人成就感。MP调整为患者措辞，不把通用HSS直接替代医务形式。",
        "source": "https://www.mindgarden.com/315-mbi-human-services-survey-medical-personnel",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "scoring": [
      {
        "text": "分维度解释，成就感／效能与耗竭方向不同；本批不提供未经许可手册核对的完整题序键或一个合并诊断总分。",
        "source": "https://www.mindgarden.com/315-mbi-human-services-survey-medical-personnel",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.mindgarden.com/315-mbi-human-services-survey-medical-personnel",
        "note": "官方提供译本与完成中文独立验证是两件事；需取得该形式、地区语言、评分键及使用许可后逐项配对。"
      }
    ],
    "limits": [
      {
        "text": "公开目录不是题本许可。研究施测、电子实施及公开网站完整展示的条件需分别确认。",
        "source": "https://www.mindgarden.com/315-mbi-human-services-survey-medical-personnel",
        "label": "Mind Garden对应形式说明"
      },
      {
        "text": "2016第四版手册撤去旧高／中／低截点，因旧分组不具诊断效度；不得继续把这些分组包装为统一临床诊断。",
        "source": "https://www.mindgarden.com/documents/MBI-Cutoff-Caveat.pdf",
        "label": "出版方2018截点撤销说明"
      }
    ]
  },
  "VR-OH-001-091": {
    "reviewed": "2026-10-15",
    "reviewScope": "出版方公开版本目录与截点撤销说明；未取得正式题本、第四版手册或中文许可材料。",
    "definition": [
      {
        "text": "MBI-GS用于一般职业人群，共16题，分别评价耗竭、玩世不恭、职业效能。职业措辞及对象需锁定对应形式。",
        "source": "https://www.mindgarden.com/312-mbi-general-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "scoring": [
      {
        "text": "分维度解释，成就感／效能与耗竭方向不同；本批不提供未经许可手册核对的完整题序键或一个合并诊断总分。",
        "source": "https://www.mindgarden.com/312-mbi-general-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.mindgarden.com/312-mbi-general-survey",
        "note": "官方提供译本与完成中文独立验证是两件事；需取得该形式、地区语言、评分键及使用许可后逐项配对。"
      }
    ],
    "limits": [
      {
        "text": "公开目录不是题本许可。研究施测、电子实施及公开网站完整展示的条件需分别确认。",
        "source": "https://www.mindgarden.com/312-mbi-general-survey",
        "label": "Mind Garden对应形式说明"
      },
      {
        "text": "2016第四版手册撤去旧高／中／低截点，因旧分组不具诊断效度；不得继续把这些分组包装为统一临床诊断。",
        "source": "https://www.mindgarden.com/documents/MBI-Cutoff-Caveat.pdf",
        "label": "出版方2018截点撤销说明"
      }
    ]
  },
  "VR-OH-001-092": {
    "reviewed": "2026-10-15",
    "reviewScope": "出版方公开版本目录与截点撤销说明；未取得正式题本、第四版手册或中文许可材料。",
    "definition": [
      {
        "text": "MBI-ES用于教育工作者，共22题，分别评价情绪耗竭、去人格化、个人成就感。职业措辞及对象需锁定对应形式。",
        "source": "https://www.mindgarden.com/316-mbi-educators-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "scoring": [
      {
        "text": "分维度解释，成就感／效能与耗竭方向不同；本批不提供未经许可手册核对的完整题序键或一个合并诊断总分。",
        "source": "https://www.mindgarden.com/316-mbi-educators-survey",
        "label": "Mind Garden对应形式说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.mindgarden.com/316-mbi-educators-survey",
        "note": "官方提供译本与完成中文独立验证是两件事；需取得该形式、地区语言、评分键及使用许可后逐项配对。"
      }
    ],
    "limits": [
      {
        "text": "公开目录不是题本许可。研究施测、电子实施及公开网站完整展示的条件需分别确认。",
        "source": "https://www.mindgarden.com/316-mbi-educators-survey",
        "label": "Mind Garden对应形式说明"
      },
      {
        "text": "2016第四版手册撤去旧高／中／低截点，因旧分组不具诊断效度；不得继续把这些分组包装为统一临床诊断。",
        "source": "https://www.mindgarden.com/documents/MBI-Cutoff-Caveat.pdf",
        "label": "出版方2018截点撤销说明"
      }
    ]
  },
  "VR-KA-001-BASE": {
    "reviewed": "2026-10-15",
    "reviewScope": "2015原研究11页作者公开PDF取得，方法、讨论及Appendix B十题文字核读；本条是开发来源入口，与家长具体题组分开标注。",
    "definition": [
      {
        "text": "SAGE工作组整理情境、个体／群体、疫苗特异因素，并提供封闭、Likert及开放提问菜单。Appendix B为十项儿童疫苗态度，不是将整套问题菜单合成一个量表。",
        "source": "https://doi.org/10.1016/j.vaccine.2015.04.037",
        "label": "Larson等2015原文与附录"
      }
    ],
    "scoring": [
      {
        "text": "附录B原始同意程度由1强烈不同意至5强烈同意，包含正负向表述；原文要求各场景试用与验证，不能以开发菜单宣称十题已完成普适心理测量验证。",
        "source": "https://doi.org/10.1016/j.vaccine.2015.04.037",
        "label": "Larson等2015原文与附录"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://doi.org/10.1016/j.vaccine.2015.04.037",
        "note": "中文需区分儿童接种决策者与成人自身接种，不能把任一改写泛称原始中文版。"
      }
    ],
    "limits": [
      {
        "text": "本批只补来源说明，不新增完整十题公开数据。实际译本及改编需单独确认。",
        "source": "https://doi.org/10.1016/j.vaccine.2015.04.037",
        "label": "Larson等2015原文与附录"
      }
    ]
  },
  "VR-KA-001-163": {
    "reviewed": "2026-10-28",
    "reviewScope": "2015原十题附录已核；2018家长验证八页原PDF及独立DOCX补充材料现经交大机构权限取得。相关方法、结果、局限与补充表A1—A3、A10—A12文字核读，原文第661—664页视觉核对；独立DOCX已只读渲染并查看全部八页、表A1—A15，完整英法题表、编码及表注已视觉核对；渲染分页和字体不作为作者印刷样张。中文原件与许可仍未取得。",
    "definition": [
      {
        "text": "本记录保留2015家长原十题。2018验证从十题施测，因原第10题交叉载荷及CFA表现删除该题，形成九题分析形式：信心不足七题、风险两题。九题与十题分别说明，不将九题结果当作原十题验证完全相同。",
        "source": "https://doi.org/10.1016/j.vaccine.2017.12.043",
        "label": "2018第662—664页原文及表2—4"
      },
      {
        "text": "加拿大线上调查家长的子女9—16岁，4606人完成、清理排除827人后分析3779人；英语2801、法语978。EFA／CFA随机拆分1887／1892，并非两个独立新队列；不能视为中文验证或幼童家长通用常模。",
        "source": "https://doi.org/10.1016/j.vaccine.2017.12.043",
        "label": "2018第661—663页方法与样本"
      }
    ],
    "scoring": [
      {
        "text": "补充表A1／A2列完整英／法十题与编码：原1、2、3、4、6、7、8为反向，原5、9、10正向，均转为1—5且高分更犹豫；按表中已给分值记录时不再反向一次。九题分析删原10，风险保留原5／9，其他七题为信心不足。",
        "source": "https://ars.els-cdn.com/content/image/1-s2.0-S0264410X17317966-mmc1.docx",
        "label": "独立补充材料表A1—A3及正文表2"
      },
      {
        "text": "研究分别呈现两个分量表的水平及关联，不据此设单一十题／九题临床诊断截点。成人改编版10—50或25分探索界限不能移植；本次原文未确立通用漏答插补，不把清理低质量受访者的程序当作漏答评分规则。",
        "source": "https://doi.org/10.1016/j.vaccine.2017.12.043",
        "label": "2018分析方法、结果及适用边界"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29289384/",
        "note": "2018独立附件提供英语／法语完整十题施测表与评分键，不是中文表。2018加拿大验证九题形式删除原10，与此登记的原十题及成人改编分别对应；中文施测原件、地区独立验证与许可仍待。"
      }
    ],
    "limits": [
      {
        "text": "信心不足七题α0.92，风险仅两题α0.64、题间相关0.47。最终九题合并CFA虽CFI0.96、TLI0.95，但RMSEA0.09，不能只摘良好指标说所有拟合充分；内容与正负措辞方向混杂。原文明确未来仍需重测、预测效度及其他人群检验。",
        "source": "https://doi.org/10.1016/j.vaccine.2017.12.043",
        "label": "2018第663—664页表4、信度及第666页局限"
      },
      {
        "text": "原文第664页脚注谈项目间负相关，表5报告两个因子相关0.44；项目原始／重编码相关与分量表相关的口径不可混同，不据该脚注擅自改变附件明列评分键。网站不新增完整题文，中文翻译、改编和再分发条件仍须确认。",
        "source": "https://doi.org/10.1016/j.vaccine.2017.12.043",
        "label": "正文脚注、表5与补充表的核查边界"
      }
    ]
  },
  "VR-KA-001-164": {
    "reviewed": "2026-10-15",
    "reviewScope": "2021成人改编全文HTML方法与结果核读；包含中国、美国三轮线上调查，未取得完整中文施测附件。",
    "definition": [
      {
        "text": "aVHS将儿童疫苗语境改成成人接种，十题。中国与美国部分政策措辞不同，不能当成只更换标题的原家长表。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8475604/",
        "label": "Akel等2021成人改编全文"
      }
    ],
    "scoring": [
      {
        "text": "十题重编码后各1—5，高分更犹豫，总分10—50；其中七项需反向。研究以COVID-19接受意向曲线的拐点探索≥25分，不是普适诊断界点。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8475604/",
        "label": "Akel等2021成人改编全文"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8475604/",
        "note": "中国2020年线上调查构成中文应用证据，但全文未提供实际完整中文措辞；不能据英文正文声称已取得中文题本。"
      }
    ],
    "limits": [
      {
        "text": "部分条目与整体关联较弱；研究讨论删项不等于所有aVHS都正式改成九题。跨调查反向表述须先对齐。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8475604/",
        "label": "Akel等2021成人改编全文"
      }
    ]
  },
  "VR-KA-002-141": {
    "reviewed": "2026-10-28",
    "reviewScope": "2018原研究完整HTML及七份DOCX补充材料取得；正式最终版表格与相关计分文字已核读；七份DOCX只读渲染共20页，全部页图已查看，含S1—S6表与S1图。S4为明示不可施用的中间版本；S1图为既有量表经POMP转为0—100的均值及95%置信区间，不是5C临床界点。中文原件与独立验证未取得。",
    "definition": [
      {
        "text": "5C最终15题形式评价信心、自满、限制、计算及集体责任五个疫苗接种心理前因。每维三项。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ],
    "scoring": [
      {
        "text": "最终形式为1—7同意度；每维三项求均值。集体责任首项为搭便车反向题，按8减原分处理。五维不合成一个“犹豫总分”，开发过程五级回答不混入最终七级版。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "note": "正式论文给出英语／德语，中文实际施测原件与独立验证仍待对应。德语最终集体责任新增条目在原文中注明尚待检验，不能泛称全部语言均充分验证。"
      }
    ],
    "limits": [
      {
        "text": "长短形式用于研究不同心理前因，没有统一临床诊断界点。附件中候选题、历史五级题、最终题组需分清；不新增整表题文。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ]
  },
  "VR-KA-002-142": {
    "reviewed": "2026-10-28",
    "reviewScope": "2018原研究完整HTML及七份DOCX补充材料取得；正式最终版表格与相关计分文字已核读；七份DOCX只读渲染共20页，全部页图已查看，含S1—S6表与S1图。S4为明示不可施用的中间版本；S1图为既有量表经POMP转为0—100的均值及95%置信区间，不是5C临床界点。中文原件与独立验证未取得。",
    "definition": [
      {
        "text": "5C最终5题形式评价信心、自满、限制、计算及集体责任五个疫苗接种心理前因。每维取最终表中加粗首项，属于五个单题指标。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ],
    "scoring": [
      {
        "text": "最终形式为1—7同意度；各维分别报告一个题分。集体责任首项为搭便车反向题，按8减原分处理。五维不合成一个“犹豫总分”，开发过程五级回答不混入最终七级版。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "note": "正式论文给出英语／德语，中文实际施测原件与独立验证仍待对应。德语最终集体责任新增条目在原文中注明尚待检验，不能泛称全部语言均充分验证。"
      }
    ],
    "limits": [
      {
        "text": "长短形式用于研究不同心理前因，没有统一临床诊断界点。附件中候选题、历史五级题、最终题组需分清；不新增整表题文。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6285469/",
        "label": "Betsch等2018最终版本表及评分说明"
      }
    ]
  },
  "VR-SS-005-077": {
    "reviewed": "2026-10-16",
    "reviewScope": "2012原研究完整HTML相关方法、结果及表格已核读；本轮取得独立9页补充PDF，七张表及页序文字核读，第3／5／8页模型与老年子样本原页视觉核对。附件不含完整题文、中文表或通用漏答算法。",
    "definition": [
      {
        "text": "mMOS-SS为八题，两类支持各四项：工具性与情感性。开发分析来自三组美国女性完整资料共3241人，不是任意MOS八题摘录。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4119888/",
        "label": "Moser等2012直接开发全文"
      }
    ],
    "scoring": [
      {
        "text": "论文以量表均值转换成0—100，高分支持更多。需按选定完整原表回答锚点和维度键计算；本批不把样本分析中的多重插补当作日常施测的漏答补分规则。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4119888/",
        "label": "Moser等2012直接开发全文"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4119888/",
        "note": "确切八题中文措辞与独立中文验证待补；MOS-SSS十九题中文验证不能自动给此八题背书。"
      }
    ],
    "limits": [
      {
        "text": "一组独立施测八题，另两组在十九题内提取八题；嵌套比较不等于三组都独立施测长短版。独立附件现已取得，但具体中文表及漏答指南仍待。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4119888/",
        "label": "Moser等2012直接开发全文"
      },
      {
        "text": "补充表2的三组双因子RMSEA为0.054／0.065／0.074，但TLI为0.874／0.859／0.874，不能仅凭摘要或某一指标说所有拟合指标均优秀。表4的≥65岁子样本分别660／216／373人、标准化α为0.88／0.93／0.92；这不是独立中文验证或重测信度。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/instance/4119888/bin/NIHMS590169-supplement-Moser_JCE_Suppl_12.pdf",
        "label": "独立补充表2、4、6原页"
      }
    ]
  },
  "VR-QL-001-037": {
    "reviewed": "2026-10-15",
    "reviewScope": "WHO官方澳大利亚89页手册及问卷包、粤语资料包取得；澳版评分相关页核读，第31、33页渲染，其中第31页视觉核对；香港自填第一页文字确认112题试用标记。",
    "definition": [
      {
        "text": "WHOQOL-100为24方面各四题，加总体生活质量／健康四题。澳版手册按六领域计分；后续研究四领域模型须单独注明，不抹去原六领域结构。",
        "source": "https://www.who.int/tools/whoqol/whoqol-100",
        "label": "WHO官方澳大利亚手册评分章"
      }
    ],
    "scoring": [
      {
        "text": "澳版各方面四项合计4—20，部分项目先按6减原分；疼痛、负性情绪、治疗依赖三个负向方面在合成领域时还须按24减方面分。领域按方面数平均至4—20，可用(分数−4)÷16×100转换，不能把100题直接加总。",
        "source": "https://www.who.int/tools/whoqol/whoqol-100",
        "label": "WHO官方澳大利亚手册评分章"
      }
    ],
    "translations": [
      {
        "label": "对应语言与原件获取",
        "url": "https://www.who.int/tools/whoqol/whoqol-100",
        "note": "WHO粤语包中的香港自填原件首页写明112题、试用版本02年05月／Dec2003，不能冒充未加地方项目的100题；访谈、自填及不同年份分别锁定。"
      }
    ],
    "limits": [
      {
        "text": "澳大利亚题序与原始方面编号有对照，不能把澳版Q题号键直接套给香港表。未确认跨地区统一漏答或诊断界点；网站再分发条件继续核对。",
        "source": "https://www.who.int/tools/whoqol/whoqol-100",
        "label": "WHO官方澳大利亚手册评分章"
      }
    ]
  }
};
largeBatchOneProfiles['VR-SL-001-BASE']={...historicalProfiles['VR-SL-001-026'],reviewScope:'PSQI通用登记别名；复用已核对的026原版来源说明，本次不是新增独立工具或再完成一份中文原件核验。'};
