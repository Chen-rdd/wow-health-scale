export type EvidenceParagraph = {text:string;source:string;label:string};
export type ReviewedProfile = {definition:EvidenceParagraph[];scoring:EvidenceParagraph[];translations:{label:string;url:string;note:string}[];limits:EvidenceParagraph[];reviewed:string};
const base='https://dass.psy.unsw.edu.au/';
const p=(text:string,path:string,label:string):EvidenceParagraph=>({text,source:base+path,label});
const scope=p('抑郁维度关注情绪低落、兴趣或愉悦感减少、自我贬低与缺乏主动性；焦虑维度侧重自主神经唤起、躯体紧张及恐惧体验；压力维度关注难以放松、持续紧绷、易激惹及不耐烦。三个维度相关，但测量内容不同。','over.htm','开发者对测量构念的定义');
const restriction=p('本页用于研究者选表和获取施测资料，不提供公众自测或自动诊断。开发者对开放网站施测、结果反馈有专门要求；正式实施调查前应核对。','DASSFAQ.htm','官方FAQ第9、21项');
export const reviewedProfiles:Record<string,ReviewedProfile>={
"VR-PH-005-014":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "K6或K10含补充问题的表单，在核心情绪症状之外询问持续性、功能影响等信息。它直接扩展相应核心版本；补充问题不是新的核心症状条目。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ],
  "scoring": [
    {
      "text": "核心分数仍按K6或K10计算，附加问题不加入核心总分。访谈版与自填版分别提供，访谈跳转需依原件。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "作者评分FAQ"
    },
    {
      "text": "部分官方表单所印1–5是回答代码，顺序从“全部时间”到“无”。计算0–4症状分时需反向重编码，不能直接相加。缺失处理没有唯一官方算法，应事先确定研究规则。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "评分与缺失FAQ"
    }
  ],
  "translations": [
    {
      "label": "作者官网 普通话及粤语译本",
      "url": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "note": "普通话K6/K10、粤语K6已取得；具体题文、访谈跳转及中文验证研究仍在核对。"
    }
  ],
  "limits": [
    {
      "text": "作者允许免费使用，要求保留版权并引用指定文献。网站收录或免费使用不等于已完成目标人群验证。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ]
},
"VR-PH-005-013":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "K6从K10删去四题，是六项心理困扰短版；直接来源为K10。它缩短施测时间，并非把K10分数按比例换算。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ],
  "scoring": [
    {
      "text": "六题重编码后各0–4分，总分0–24；另一套1–5编码总分为6–30。13分及以上的常见筛查界点对应0–24体系及特定校准背景，不是普遍诊断标准。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "作者评分FAQ"
    },
    {
      "text": "部分官方表单所印1–5是回答代码，顺序从“全部时间”到“无”。计算0–4症状分时需反向重编码，不能直接相加。缺失处理没有唯一官方算法，应事先确定研究规则。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "评分与缺失FAQ"
    }
  ],
  "translations": [
    {
      "label": "作者官网 普通话及粤语译本",
      "url": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "note": "普通话K6/K10、粤语K6已取得；具体题文、访谈跳转及中文验证研究仍在核对。"
    }
  ],
  "limits": [
    {
      "text": "作者允许免费使用，要求保留版权并引用指定文献。网站收录或免费使用不等于已完成目标人群验证。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ]
},
"VR-PH-005-012":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "K10以十项情绪相关症状评估非特异性心理困扰，官网表单回顾过去30天。它用于筛查和描述困扰程度，不把抑郁、焦虑等疾病分别确诊。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ],
  "scoring": [
    {
      "text": "十题重编码后各0–4分，总分0–40。澳大利亚另有每题1–5分、总分10–50的体系，必须注明所用体系。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "作者评分FAQ"
    },
    {
      "text": "部分官方表单所印1–5是回答代码，顺序从“全部时间”到“无”。计算0–4症状分时需反向重编码，不能直接相加。缺失处理没有唯一官方算法，应事先确定研究规则。",
      "source": "https://rckessler.scholars.harvard.edu/sites/g/files/omnuum8166/files/2026-03/Scoring_K6_K10.pdf",
      "label": "评分与缺失FAQ"
    }
  ],
  "translations": [
    {
      "label": "作者官网 普通话及粤语译本",
      "url": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "note": "普通话K6/K10、粤语K6已取得；具体题文、访谈跳转及中文验证研究仍在核对。"
    }
  ],
  "limits": [
    {
      "text": "作者允许免费使用，要求保留版权并引用指定文献。网站收录或免费使用不等于已完成目标人群验证。",
      "source": "https://rckessler.scholars.harvard.edu/k10-and-k6-scales",
      "label": "作者官方说明"
    }
  ]
},
"VR-PH-002-005":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "GAD-2由GAD-7前两题组成，关注过去两周紧张焦虑及难以控制担忧，用于简短的焦虑初筛。它的直接来源为GAD-7，并非完整PHQ旧焦虑模块的缩写。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "scoring": [
    {
      "text": "两题各0–3分，总分0–6。手册建议达到3分时进一步使用GAD-7并作临床评估；两题分数不能代替完整症状和病程评估。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "translations": [
    {
      "label": "官方译本与短版派生说明",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "note": "手册第7页允许从正式译本选择对应条目形成短版。必须保留所用译本和题号；这不自动证明短版在目标人群的效度。"
    }
  ],
  "limits": [
    {
      "text": "本条已核对结构与计分关系，完整施测材料和具体中文验证证据仍在整理。未核实的题目或缺失规则不以推测补全。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ]
},
"VR-PH-001-004":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "PHQ-4由PHQ-2与GAD-2组合，分别覆盖抑郁和焦虑的两个核心症状。它有两个直接来源，不能称为从PHQ-9选出的四题短版。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "scoring": [
    {
      "text": "四题各0–3分；抑郁与焦虑两部分各0–6分，总和0–12分。应区分分量表和总分，不能套用PHQ-9或GAD-7阈值。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "translations": [
    {
      "label": "官方译本与短版派生说明",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "note": "手册第7页允许从正式译本选择对应条目形成短版。必须保留所用译本和题号；这不自动证明短版在目标人群的效度。"
    }
  ],
  "limits": [
    {
      "text": "本条已核对结构与计分关系，完整施测材料和具体中文验证证据仍在整理。未核实的题目或缺失规则不以推测补全。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ]
},
"VR-PH-001-003":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "PHQ-8从PHQ-9删除第9题，即死亡或自伤想法题，保留其他八题，评估过去两周抑郁症状。它可用于人群研究，但不包含这一风险信息。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "scoring": [
    {
      "text": "八题各0–3分，总分0–24，不应报告为PHQ-9的0–27分。缺少第9题的回答不能被解释为该风险不存在。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "translations": [
    {
      "label": "官方译本与短版派生说明",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "note": "手册第7页允许从正式译本选择对应条目形成短版。必须保留所用译本和题号；这不自动证明短版在目标人群的效度。"
    }
  ],
  "limits": [
    {
      "text": "本条已核对结构与计分关系，完整施测材料和具体中文验证证据仍在整理。未核实的题目或缺失规则不以推测补全。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ]
},
"VR-PH-001-002":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "PHQ-2是PHQ-9前两题组成的抑郁初筛工具，询问过去两周兴趣或愉悦减少、情绪低落。直接来源是PHQ-9，更早来源为完整PHQ的抑郁模块。它减少施测负担，同时减少症状覆盖。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "scoring": [
    {
      "text": "两题各0–3分，总分0–6。手册建议达到3分时进一步使用PHQ-9并作临床评估；它不直接确诊抑郁症。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "translations": [
    {
      "label": "官方译本与短版派生说明",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "note": "手册第7页允许从正式译本选择对应条目形成短版。必须保留所用译本和题号；这不自动证明短版在目标人群的效度。"
    }
  ],
  "limits": [
    {
      "text": "本条已核对结构与计分关系，完整施测材料和具体中文验证证据仍在整理。未核实的题目或缺失规则不以推测补全。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ]
},
"VR-PH-001-001":{
  "reviewed": "2026-09-13",
  "definition": [
    {
      "text": "完整PHQ由PRIME-MD发展为患者自填问卷，涵盖抑郁、焦虑、躯体症状、饮酒和进食问题。PHQ-9是其中的抑郁模块，完整PHQ不能按PHQ-9总分解释。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "scoring": [
    {
      "text": "各模块按自身题型和算法处理，不相加形成一个统一的“心理疾病总分”。其旧诊断算法依据DSM-IV，不能当作现行诊断标准的完整替代。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ],
  "translations": [
    {
      "label": "官方译本与短版派生说明",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "note": "手册第7页允许从正式译本选择对应条目形成短版。必须保留所用译本和题号；这不自动证明短版在目标人群的效度。"
    }
  ],
  "limits": [
    {
      "text": "本条已核对结构与计分关系，完整施测材料和具体中文验证证据仍在整理。未核实的题目或缺失规则不以推测补全。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者手册 第2至3页"
    }
  ]
},
"VR-PH-002-BASE":{
  "reviewed": "2026-09-15",
  "definition": [
    {
      "text": "GAD-7（广泛性焦虑障碍七项量表）是一份自评症状工具，最初面向基层医疗中的广泛性焦虑问题开发。内容包括紧张、难以控制担忧、过度担忧、难以放松、坐立不安、易激惹及害怕不良事情发生，用于筛查和量化焦虑症状；不能单凭分数确诊某一种焦虑障碍。",
      "source": "https://pubmed.ncbi.nlm.nih.gov/16717171/",
      "label": "Spitzer等，2006开发研究"
    },
    {
      "text": "GAD-7在PHQ之后独立开发，后来纳入PHQ-SADS组合；它不是完整PHQ中旧焦虑模块的直接同名复制。GAD-2取其前两题形成超短筛查形式。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    }
  ],
  "scoring": [
    {
      "text": "评估过去两周，七题各0–3分，总分0–21分，无反向题。5、10、15是常用严重程度分界，需结合研究人群解释。功能影响信息不能擅自加入七题总分。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    }
  ],
  "translations": [
    {
      "label": "GAD-7：官方英文表",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10060481/f/201412/GAD-7_English.pdf",
      "note": "已对照官方原件核对题目和选项。"
    },
    {
      "label": "GAD-7：官方目录大陆简体中文表",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10060481/f/201412/GAD7_Simplified%20Chinese%20for%20Mainland%20China.pdf",
      "note": "已对照官方目录大陆简体表核对；香港、台湾等其他译本已取得，尚未完成逐题审核。"
    }
  ],
  "limits": [
    {"text":"何筱衍等2010年研究采用自行组织翻译和回译的版本，调查600名成人普通门诊患者，其中96人接受SCID诊断访谈。研究采用既有的10分阈值，未通过ROC重新确定本地最佳界值；其研究译本与本目录现存大陆简体表的完整题文对应仍待核对。","source":"https://www.researchgate.net/publication/281360109_Reliability_and_validity_of_a_generalized_anxiety_scale_in_general_hospital_outpatients","label":"何筱衍等，2010：作者公开全文，方法与讨论"},
    {
      "text": "中文版本应按具体地区和正式题文选择。官方提供译本不意味着已在所有目标人群验证。未确定漏答规则时，不进行自动插补或生成诊断。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    },
    {
      "text": "开发者允许复制、翻译、展示和分发官网量表，保留开发者署名及具体来源。",
      "source": "https://www.phqscreeners.com/select-screener",
      "label": "官方使用说明"
    }
  ]
},
"VR-PH-001-BASE":{
  "reviewed": "2026-09-12",
  "definition": [
    {
      "text": "PHQ-9（患者健康问卷九项抑郁量表）是完整PHQ中的抑郁模块，采用自评方式量化抑郁症状严重程度。九题对应抑郁相关症状，涉及兴趣、情绪、睡眠、精力、食欲、自我评价、注意力、精神运动变化及死亡或自伤想法。它可用于筛查和追踪症状，但分数本身不能完成临床诊断。",
      "source": "https://pubmed.ncbi.nlm.nih.gov/11556941/",
      "label": "Kroenke等，2001原始验证研究"
    },
    {
      "text": "原始研究包括基层医疗和妇产科就诊者。将其用于儿童、其他特定人群或不同语言时，应另核对适用性；成人PHQ-9也不能与PHQ-A或其他青少年改编表混称。",
      "source": "https://pubmed.ncbi.nlm.nih.gov/11556941/",
      "label": "原始研究样本"
    }
  ],
  "scoring": [
    {
      "text": "回顾过去两周，每题按频率计0–3分，九题相加为0–27分；高分表示症状更重。原表的功能受影响附加题不计入总分。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    },
    {
      "text": "5、10、15、20是原始研究所用症状严重程度分界；阈值表现依人群和用途而变，不等于确诊。",
      "source": "https://pubmed.ncbi.nlm.nih.gov/11556941/",
      "label": "原始研究评分解释"
    }
  ],
  "translations": [
    {
      "label": "PHQ-9：官方英文表",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10060481/f/201412/PHQ-9_English.pdf",
      "note": "已对照官方原件核对题目和选项。"
    },
    {
      "label": "PHQ-9：官方目录大陆简体中文表",
      "url": "https://www.phqscreeners.com/images/sites/g/files/g10060481/f/201412/PHQ9_Simplified%20Chinese%20for%20Mainland%20China.pdf",
      "note": "已对照官方目录大陆简体表核对；香港、台湾等其他译本已取得，尚未完成逐题审核。"
    }
  ],
  "limits": [
    {"text":"Wang等2014年在上海一个社区1045名参与者中，以MINI访谈为诊断对照，报告PHQ-9≥7的筛查阈值。此结果有具体样本和译本背景，不应替代所有人群的适用性核对；本目录题本与该研究施测中文题文尚未完成逐项匹配。","source":"https://pubmed.ncbi.nlm.nih.gov/25023953/","label":"Wang等，2014：中文社区验证研究"},
    {
      "text": "第9题阳性需要进一步评估，不能仅凭该题或总分判断自伤风险。调查实施前应安排相应的专业评估和转介流程。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    },
    {
      "text": "本目录中文原件已取得并核对；具体译文与中文验证研究的逐项对应尚未完成。未设定有来源的漏答规则前，不自动补零或插补。",
      "source": "https://www.phqscreeners.com/images/sites/g/files/g10016261/f/201412/instructions.pdf",
      "label": "开发者使用手册"
    },
    {
      "text": "开发者允许复制、翻译、展示和分发官网量表，保留开发者署名及具体来源。",
      "source": "https://www.phqscreeners.com/select-screener",
      "label": "官方使用说明"
    }
  ]
},
 'VR-PH-007-BASE':{
  "reviewed": "2026-09-12",
  "definition": [
    {
      "text": "WHO-5（世界卫生组织五项心理幸福感指数）是一份5题自评工具，询问过去两周的积极心理状态，包括愉快、平静、活力、醒后恢复感和日常兴趣。它帮助研究者描述心理幸福感水平及其变化；不直接诊断抑郁症，也不覆盖健康相关生活质量的全部领域。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    },
    {
      "text": "该工具由Per Bech及其所在中心于20世纪90年代发展。2024年WHO接受版权并重新出版；2024是本文件的再版年份，不能当作量表最初开发年份。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    }
  ],
  "scoring": [
    {
      "text": "每题按正式六级选项计0–5分，5题相加为0–25原始分，再乘4得到0–100分。分数越高表示心理幸福感越好；五题均正向表述，无需反向计分。报告必须说明采用原始分还是转换分。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    },
    {
      "text": "当前英文说明建议原始总分低于13分时进一步评估心理健康状况；这不是确诊抑郁症的标准。旧中文表另列任一题0分或1分的进一步评估建议，使用时应明确采用哪份说明，不能将不同文件的规则混合后称为统一标准。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    },
    {
      "text": "当前英文文件未给出缺失题目的统一计分算法。若有漏答，应预先规定处理办法并说明依据，不应直接将漏答计为0分。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    }
  ],
  "translations": [
    {
      "label": "WHO网站收录的中文译本（2007年9月，标注1998年版）",
      "url": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_chinese.pdf?download=true&sfvrsn=ed43f352_11",
      "note": "由Xu等翻译、Volinn协调。WHO附加说明指出该翻译早于2024年版权转让，不保证译文准确性，冲突以英文为准。具体译文与中文验证研究的对应关系仍在核查。"
    }
  ],
  "limits": [
    {
      "text": "英文2024版采用CC BY-NC-SA 3.0 IGO许可，要求非商业使用、适当署名及适用的相同方式共享；不得使用WHO标志或暗示WHO背书。旧中文译本的具体转载条件仍需单独确认，当前提供原件链接。",
      "source": "https://cdn.who.int/media/docs/default-source/mental-health/who-5_english-original4da539d6ed4b49389e3afe47cda2326a.pdf?download=true&sfvrsn=ed43f352_11",
      "label": "WHO 2024英文原件"
    }
  ]
},
 'VR-PH-003-006':{
  reviewed:'2026-09-12',
  definition:[p('DASS-42是由42个自评条目组成的抑郁—焦虑—压力量表，分别量化过去一周三类负性情绪状态的程度，每个维度14题。它适用于描述症状水平及其变化，不直接判定某一种精神障碍。','over.htm','官方概述'),scope],
  scoring:[p('每题按正式选项赋0、1、2或3分。按评分键分别相加14题，得到抑郁、焦虑、压力三个0–42分的分量表分数；无反向题。分数越高表示对应症状越重。','Download%20files/Dass_template.pdf','原版评分键'),p('缺失值应按分量表处理并预先声明规则。官网给出的经验建议是每个14题分量表最多容许2题缺失；这不是统一强制标准。不能把空白直接当作0分。','DASSFAQ.htm','官方FAQ第27项')],
  translations:[
   {label:'简体中文：Zuo 与 Chang，42题',url:base+'Chinese/DASS42%20simplified%20Chinese.pdf',note:'已逐题核对原件；题序与英文一致。中文版验证研究的具体文本匹配仍在核查。'},
   {label:'繁体中文：Calais Chan，42题',url:base+'Chinese/Chinese%20DASS%20Calais.pdf',note:'官方收录，原件已取得；逐题复核进行中。'},
   {label:'台湾用语：Lu Hui Chun，42题',url:base+'Chinese/Taiwanese%20DASS%20Lu%20Hui%20Chun.pdf',note:'对既有中文译本的适配，不能与其他译本混称；逐题复核进行中。'},
   {label:'台湾用语：Shing-Ping Su，42题',url:base+'Chinese/Shing-Ping%20Taiwanese%20DASS.pdf',note:'独立列出的译本；原件已取得，逐题复核进行中。'}],
  limits:[restriction,p('官网允许复制问卷，禁止修改或出售量表本身。官网收录译本不构成对译本质量的保证；仍需核对目标人群的验证证据。','DASSFAQ.htm','官方FAQ第3、25项')]
 },
 'VR-PH-003-007':{
  reviewed:'2026-09-12',
  definition:[p('DASS-21由DASS-42的三个维度各选7题构成，共21题，仍评估过去一周的抑郁、焦虑和紧张/压力状态。它保留了三个维度，但不是原42题表的前21题。','over.htm','官方概述'),scope],
  scoring:[p('每题0–3分，各维度7题原始和为0–21分。官方评分模板要求将分量表原始和乘2，形成0–42分，用于与成人DASS常模或全版分数比较。报告时必须注明是否乘2，不能混用两种分值。','Chinese/Chinese%20DASS21%20scoring%20template.pdf','中文短版评分键'),p('缺失规则应在研究方案中明确；官网的经验建议是每个7题维度最多缺失1题，并利用该维度已回答条目处理。此建议不能与某篇研究的数据插补方法混为一谈。','DASSFAQ.htm','官方FAQ第27项')],
  translations:[{label:'繁体中文：Taouk Moussa、Lovibond 与 Laube，21题',url:base+'Chinese/Chinese%20DASS21.pdf',note:'由Calais Chan较早译本发展，官网提供专用评分键及2001年翻译研究报告；已核对题目与评分对应。'},
   {label:'中文版翻译及验证报告（2001）',url:base+'Chinese/Chinese%20DASS21%20Paper.pdf',note:'请按报告人群解释；此文件的PDF元数据标题有误，正文标题为中文DASS21研究。'},
   {label:'中国人群验证研究：Wang 等，2016',url:'https://pubmed.ncbi.nlm.nih.gov/26619091/',note:'研究包括大学生及精神分裂症患者/对照。正文采用0–21原始分，并说明译文来源于Taouk等；不能把该研究自动绑定到任何网上简体21题表。'}],
  limits:[restriction]
 },
 'VR-PH-003-008':{
  reviewed:'2026-09-12',
  definition:[p('DASS-Y是针对儿童青少年语言和体验开发的21题自评工具，评估过去一周的抑郁、焦虑及压力症状。开发者当前页面标注适用年龄为8–17岁。它是独立的青年版，不是给儿童直接填写成人DASS-21。','DASSY.htm','青年版官方说明')],
  scoring:[p('三个分量表各7题，每题0–3分，分别相加后各为0–21分。DASS-Y不乘2，不直接套用成人DASS或DASS-21的常模。','DASSY.htm','青年版评分说明'),p('官方青年版严重程度分界来自原开发样本的分位数，用于描述，不等于诊断阈值；用于其他地区或译本时需另核对。','DASS-Y%20cutoffs.htm','青年版分界值来源')],
  translations:[{label:'简体中文：Luo 与 Tian',url:base+'DASS-Y%20Chinese%20(simplified)/Luo%20Tian%20simplified%20Chinese.htm',note:'官方收录；21题与四级选项已对照原件整理。具体译文与验证研究匹配仍在核查。'},
   {label:'简体中文：Cao 与 Chen',url:base+'DASS-Y%20Chinese%20(simplified)/Cao%20Chen%20simplified%20Chinese.htm',note:'入口同时提供译本及2023年验证论文。原件选项为频率表述，与其他译本措辞不同，不自动互换。'},
   {label:'简体中文：Xie',url:base+'DASS-Y%20Chinese%20(simplified)/Xie%20simplified%20Chinese.htm',note:'官方目录列出，当前获取未成功，尚未核对完整表单。'},
   {label:'繁体中文：香港卫生署学生健康服务',url:base+'DASS-Y%20Chinese%20(traditional)/Hong%20Kong%20Health/Hong%20Kong%20Health%20traditional%20Chinese%20translation%20of%20DASS-Y.htm',note:'官方收录；21题及选项已对照原件整理，保留香港用语。匹配的独立验证证据尚待补充。'},
   {label:'Cao等2023年验证研究',url:'https://doi.org/10.1186/s13034-023-00655-2',note:'研究分析对部分条目合并了回答类别。该研究处理不能直接替代原表0–3四级评分，也不能将修正后的测量结果直接归于未修正版本。'}],
  limits:[restriction]
 }
};

