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
    "reviewed": "2026-10-15",
    "reviewScope": "Alberta Health Services 2015髋部骨折路径采用的两页0—20题本与指导语全部视觉核对；Collin等1988仅正式摘要。中文该形式原件和原论文全文仍待取。",
    "definition": [
      {
        "text": "十项基本活动的0—20形式，记录实际完成情况与所需帮助。AHS原页给出具体报告来源和指导语；不是十题每题统一0—2。",
        "source": "https://www.albertahealthservices.ca/assets/about/scn/ahs-scn-bjh-hf-barthel-index-of-adls.pdf",
        "label": "医疗机构正式路径题本"
      }
    ],
    "scoring": [
      {
        "text": "修饰／洗浴各0—1，六项各0—2，转移／移动各0—3，总分0—20，高分更独立。只有项目、锚点与规则对应时，乘5才是相同档次的数值换算；不能因此变为Shah五档改良版。",
        "source": "https://www.albertahealthservices.ca/assets/about/scn/ahs-scn-bjh-hf-barthel-index-of-adls.pdf",
        "label": "两页原件权重与结构"
      },
      {
        "text": "通常参考24—48小时；排便／排尿指导另问过去一周。AHS表页与指导页对排尿“偶发”的边界分别写每日最多一次和少于每日一次，实施前应依正式协议澄清，不能只写统一两天回顾。",
        "source": "https://www.albertahealthservices.ca/assets/about/scn/ahs-scn-bjh-hf-barthel-index-of-adls.pdf",
        "label": "不同项目时间窗与原页边界"
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
        "text": "1988研究25名患者，以自报、熟悉患者的护士及两名观察者比较，摘要称4／20分差可能反映真实差异；AHS重印另写变化>2分。两者不是统一MCID，不能直接作所有患者的康复达标线。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/3403500/",
        "label": "原研究摘要与路径重印的解释差异"
      },
      {
        "text": "MedChi版权方现行入口引向Mapi查询。公开重印的非商业使用说明与现行具体用途、改编、译本或网站再分发条件分别确认；学校文献权限不替代这些条件。",
        "source": "https://www.medchi.org/Your-Resource/Barthel-Index",
        "label": "版权方现行获取入口"
      }
    ]
  },
  "VR-AG-004-097": {
    "reviewed": "2026-10-15",
    "reviewScope": "Shah等1989及Leung等2007直接研究均仅正式摘要；马耳他临床养老机构公开四页Shah重印全部视觉查看，仅作结构核对。中文论文全文和附录尚未取得，未新增完整题本。",
    "definition": [
      {
        "text": "Shah改良扩大每项分档以区分较细的依赖程度，原开发摘要为澳大利亚258名首次卒中住院康复患者。α＝0.90对比原计分0.87，是该样本证据，不等于所有译本均提高相同程度。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/2760661/",
        "label": "1989直接开发摘要"
      }
    ],
    "scoring": [
      {
        "text": "临床重印各项五档，最高5、10、15分的项目分别采用0／1／3／4／5、0／2／5／8／10、0／3／8／12／15；总分0—100。档次非等间隔，不能把0—20的题分乘5后冒充此版本。",
        "source": "https://elderlyhomes.church.mt/wp-content/uploads/2021/04/3.-Modified-Barthel-Index-SHAH-VERSION-SELF-CARE-ASSESSMENT.pdf",
        "label": "四页重印五档权重"
      },
      {
        "text": "轮椅仅在步行项为0且受过轮椅训练时替代评定，不额外相加。重印第4页依赖分段和回家预测仅作为该重印的说明；未将其不清晰排版或未经中文验证的预测变成自动分级规则。",
        "source": "https://elderlyhomes.church.mt/wp-content/uploads/2021/04/3.-Modified-Barthel-Index-SHAH-VERSION-SELF-CARE-ASSESSMENT.pdf",
        "label": "替代项目及解释边界"
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
