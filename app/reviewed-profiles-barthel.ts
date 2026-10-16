import type {ReviewedProfile} from './reviewed-profiles';
export const barthelProfiles:Record<string,ReviewedProfile>={
  "VR-AG-004-095": {
    "reviewed": "2026-10-15",
    "reviewScope": "1965 PubMed书目核对，无摘要；SRA Lab托管Internet Stroke Center两页0—100重印全部视觉查看。该表合列后期指导语与引用，尚未与1965期刊原页逐字匹配；不称原始全文已取得。",
    "definition": [
      {
        "text": "Barthel评估进食、洗浴、修饰、穿衣、排便、排尿、如厕、转移、移动和楼梯十项基本生活活动中的独立程度。按实际表现而非潜在能力记录，所需监督也影响独立性判断。",
        "source": "https://www.sralab.org/sites/default/files/2017-07/barthel.pdf",
        "label": "0—100公开重印及指导语"
      }
    ],
    "scoring": [
      {
        "text": "此重印十项权重不同：洗浴／修饰最高5，转移／移动最高15，其余最高10，合计0—100，高分更独立。辅助器具可允许使用；轮椅与步行归在移动项目，不能额外加为第11项。",
        "source": "https://www.sralab.org/sites/default/files/2017-07/barthel.pdf",
        "label": "两页重印计分框架"
      },
      {
        "text": "重印通常参考过去24—48小时，个别情况更长；这是该重印指导语，不称已确认1965所有原始措辞。没有查得允许任意漏答填0或按比例补总分的直接规则。",
        "source": "https://www.sralab.org/sites/default/files/2017-07/barthel.pdf",
        "label": "施测与缺失边界"
      }
    ],
    "translations": [
      {
        "label": "正式版本与地区译本获取",
        "url": "https://eprovide.mapi-trust.org/instruments/barthel-index",
        "note": "中文应用广泛不等于本记录具体译本已核验。香港2007研究是经文化适配的Shah改良版，不能作为原始BI-100完整中文题文的验证。"
      }
    ],
    "limits": [
      {
        "text": "1965原论文正式书目为Md State Med J 14:61—65；公开重印写56—61，书目采用PubMed并保留重印差异。现有重印不足以证明逐字还原1965首刊原件。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/14258950/",
        "label": "1965正式书目与原页缺口"
      },
      {
        "text": "MedChi版权方现行入口引向Mapi查询。公开重印的非商业使用说明与现行具体用途、改编、译本或网站再分发条件分别确认；学校文献权限不替代这些条件。",
        "source": "https://www.medchi.org/Your-Resource/Barthel-Index",
        "label": "版权方现行获取入口"
      }
    ]
  },
  "VR-AG-004-096": {
    "reviewed": "2026-10-16",
    "reviewScope": "1988原论文经Taylor & Francis交大SSO取得，四页文件含出版封页及印刷61—63页，三页论文、Table1／2和完整Appendix均文字及视觉核对。AHS2015两页仍作为后期机构协议分别记录；确切中文和用途许可仍待。附录星号为研究后修改，不能称所有修订细则均按原研究直接验证。",
    "definition": [
      {
        "text": "十项基本活动的0—20形式，记录实际完成情况与所需帮助。AHS原页给出具体报告来源和指导语；不是十题每题统一0—2。",
        "source": "https://www.albertahealthservices.ca/assets/about/scn/ahs-scn-bjh-hf-barthel-index-of-adls.pdf",
        "label": "医疗机构正式路径题本"
      },
      {
        "text": "原研究明确把0—100的五分步长重记为0—20的一分步长，以免制造过高精度印象。发表附录部分细则在研究后修改并加星号，不能把修订后全部指导语都当作已经在本研究原样检验。",
        "source": "https://doi.org/10.3109/09638288809164103",
        "label": "1988第61页方法及第63页附录星号"
      }
    ],
    "scoring": [
      {
        "text": "修饰／洗浴各0—1，六项各0—2，转移／移动各0—3，总分0—20，高分更独立。只有项目、锚点与规则对应时，乘5才是相同档次的数值换算；不能因此变为Shah五档改良版。",
        "source": "https://www.albertahealthservices.ca/assets/about/scn/ahs-scn-bjh-hf-barthel-index-of-adls.pdf",
        "label": "两页原件权重与结构"
      },
      {
        "text": "通常参考过去24—48小时，但排便／排尿另按前一周。1988原附录与AHS后期重印均存在排尿“偶发”的表内／指南边界差别：表列每日最多一次，指南少于每日一次；不自行裁定恰好每日一次。须依据所选正式协议澄清并记录。",
        "source": "https://doi.org/10.3109/09638288809164103",
        "label": "第63页原附录与AHS后期协议分别核对"
      }
    ],
    "translations": [
      {
        "label": "正式版本与地区译本获取",
        "url": "https://eprovide.mapi-trust.org/instruments/barthel-index",
        "note": "需确认具体0—20地区中文译本、项目细则与目标人群研究；不能仅用中文Shah MBI-C研究或其他0—100中文表代替。"
      }
    ],
    "limits": [
      {
        "text": "25名患者中卒中13、头伤11、非器质性症状1，含12—25岁8人；不是纯老年或纯卒中样本。排除七名各次均满分及三名未完成四次评定者。四种信息方式Kendall一致系数W0.93，不是Pearson相关或ICC；仅一人四种总分完全一致，且该人仍有项目分歧，高系数不等同逐项一致。",
        "source": "https://doi.org/10.3109/09638288809164103",
        "label": "第61—62页样本、排除及一致性"
      },
      {
        "text": "MedChi版权方现行入口引向Mapi查询。公开重印的非商业使用说明与现行具体用途、改编、译本或网站再分发条件分别确认；学校文献权限不替代这些条件。",
        "source": "https://www.medchi.org/Your-Resource/Barthel-Index",
        "label": "版权方现行获取入口"
      },
      {
        "text": "原文讨论同时写总分变化>2分“可能”真实、4／20分差“高度可能”真实，两种表述均在同篇原文，不能仅据摘要与AHS表述不同而断定相互矛盾。这是该小样本的测量差异解释，不是统一MCID、康复目标或所有人群达标线。认知受损时自报可能明显高估，须结合知情护士／家属和实际表现。",
        "source": "https://doi.org/10.3109/09638288809164103",
        "label": "第62页讨论与方法解释边界"
      }
    ]
  },
  "VR-AG-004-097": {
    "reviewed": "2026-10-16",
    "reviewScope": "Shah等1989七页原PDF经交大ScienceDirect权限取得，相关开发方法、结果、讨论及两页Appendix全文核读，印刷页705表2、707表4和708—709附录全部视觉核对；Leung等2007仍仅摘要，完整中文施测原件与许可仍待。",
    "definition": [
      {
        "text": "Shah改良为各功能设五个依赖档次。原研究使用1984年澳大利亚布里斯班258名首次卒中住院康复者的入院与出院资料；本研究主要比较内部一致性及项目分布，不把作者所称敏感性改善当作已确立所有人群的MCID或诊断效度。",
        "source": "https://doi.org/10.1016/0895-4356(89)90065-6",
        "label": "1989原文第703、705—707页"
      }
    ],
    "scoring": [
      {
        "text": "表2的1—5是档位代码，须换算为项目加权分：最高5、10、15的项目分别用0／1／3／4／5、0／2／5／8／10、0／3／8／12／15，再合计0—100。不是把十项代码直接相加，也不是将0—20表乘5得到五档改良版。",
        "source": "https://doi.org/10.1016/0895-4356(89)90065-6",
        "label": "1989第705页Table 2及代码转换说明"
      },
      {
        "text": "轮椅仅在步行档位代码为1（步行加权分为0）且患者已受轮椅训练时替代步行评定，最高5分，不与步行额外相加。原附录步行／轮椅距离写50 metres/yards，保留原文单位写法，不能声称两单位物理等价。速度慢本身不在无需他人帮助时扣分；监督、安全及具体操作须依项目说明。",
        "source": "https://doi.org/10.1016/0895-4356(89)90065-6",
        "label": "1989表2脚注及第705、708—709页Appendix"
      }
    ],
    "translations": [
      {
        "label": "香港中文MBI-C直接开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17981850/",
        "note": "Leung、Chan、Shah2007：香港116名老年卒中者用于结构，另15人用于信度。研究明确按文化调整题目内容与评分标准；全文、完整中文附录与现行权限尚未取得，不推广到所有地区或原始／0—20 BI。"
      }
    ],
    "limits": [
      {
        "text": "表4入院时改良／原计分α为0.9004／0.8673，出院为0.9276／0.9238；这是同一样本内部一致性，不是本研究新测的评定者间或重测系数。原文提示康复中心表现不必等同家中表现，其他损伤类别仍需研究。原文未建立统一漏答插补，不据其分段或旧重印回家预测自动决定照护或去向。",
        "source": "https://doi.org/10.1016/0895-4356(89)90065-6",
        "label": "1989第707页Table 4、讨论及结论"
      },
      {
        "text": "2007摘要研究目的称评定者间信度，结果段却写重测信度；只有摘要时不替作者消除该差异。本批保留两组样本和两因子解释75.7%的信息，不把摘要κ值当作所有设计细节已核实。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/17981850/",
        "label": "中文研究设计与摘要限制"
      },
      {
        "text": "MedChi版权方现行入口引向Mapi查询。公开重印的非商业使用说明与现行具体用途、改编、译本或网站再分发条件分别确认；学校文献权限不替代这些条件。",
        "source": "https://www.medchi.org/Your-Resource/Barthel-Index",
        "label": "版权方现行获取入口"
      }
    ]
  }
};
