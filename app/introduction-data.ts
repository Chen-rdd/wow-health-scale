export type IntroSource = {label:string;url:string};
export const familyIntroductions: Record<string,{original:string;summary:string;history:string;sources:IntroSource[]}> = {
  "PH-001": {
    "original": "PHQ 完整问卷（源自 PRIME-MD）",
    "summary": "PHQ 是一组帮助基层医疗人员了解常见心理问题的患者自填问卷。完整问卷覆盖抑郁、焦虑等多个问题领域，各模块分别解释；它的作用是把需要进一步询问的症状整理出来。最常见的 PHQ-9 只关注抑郁症状，并不代表整套 PHQ。",
    "history": "PHQ 是 PRIME-MD 的自填形式；PHQ-9 是其中的抑郁模块，PHQ-2、PHQ-8再从PHQ-9发展，PHQ-4还结合GAD系列的内容。",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "PH-002": {
    "original": "GAD-7",
    "summary": "GAD-7 用7个问题了解一个人近两周是否经常紧张、难以停止担忧，以及这些焦虑体验的程度。最初在基层医疗成人中开发，可用于发现需要进一步评估的焦虑问题和跟踪症状变化。它测的是焦虑症状，不能仅凭分数确定诊断。",
    "history": "GAD-7是本系列的原始7题工具；GAD-2保留其中两个核心问题。它与PHQ都常用于心理筛查，但不是PHQ-9的缩短版。",
    "sources": [
      {
        "label": "A brief measure for assessing generalized anxiety disorder: the GAD-7.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16717171/"
      }
    ]
  },
  "PH-003": {
    "original": "DASS-42",
    "summary": "DASS是一组自评工具，用于量化过去一周抑郁、焦虑及紧张/压力三类相关负性情绪状态。原版42题，每个维度14题，按0–3级回答。抑郁维度侧重情绪低落、兴趣与愉悦感减少等体验；焦虑维度侧重自主神经唤起与恐惧；压力维度侧重紧绷、难以放松和易激惹。分数用于描述症状程度及变化，不直接对应精神障碍诊断。不同长度、年龄和中文译本须分别选用。",
    "history": "DASS-42是原版；DASS-21缩减每个维度的题目，DASS-Y则针对儿童青少年的语言和体验另行适配。",
    "sources": [
      {
        "label": "DASS开发者：工具及版本",
        "url": "https://dass.psy.unsw.edu.au/"
      }
    ]
  },
  "PH-004": {
    "original": "PSS-14",
    "summary": "PSS 关注人怎样感受生活中的压力，而不是统计发生过多少件困难事件。原版14题询问过去一个月是否觉得生活难以预测、无法控制或负担过重，可用于社区、学校及工作人群研究。它反映主观压力程度，没有适用于所有人的诊断分界。",
    "history": "PSS-14为原版，PSS-10与PSS-4从原版选取更少题目；短版节省时间，同时减少所覆盖的信息。",
    "sources": [
      {
        "label": "PSS原始开发研究",
        "url": "https://kilthub.cmu.edu/articles/journal_contribution/A_Global_Measure_of_Perceived_Stress/6613130"
      },
      {
        "label": "PSS各长度形式研究",
        "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/pdf/cohen%2C-s.--williamson%2C-g.-1988.pdf"
      }
    ]
  },
  "PH-005": {
    "original": "K10及其内嵌短版K6",
    "summary": "Kessler心理困扰量表用于简短了解一个人是否受到紧张、无望、低落等情绪的困扰，常用于人群健康调查。K10有10题，K6有6题；它们关注非特异性心理困扰，不用来区分某一种具体疾病。分数可帮助识别需要进一步了解的人群。",
    "history": "K10和K6在同一开发研究中形成，K6是K10中内嵌的6题子集；不能简单理解为K10发布多年后的修订版。补充问题另询问持续时间或功能影响。",
    "sources": [
      {
        "label": "K10与K6共同开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12214795/"
      }
    ]
  },
  "PH-006": {
    "original": "GHQ-60",
    "summary": "GHQ 用于发现一个人近期相较平常状态是否出现心理困扰或日常功能下降。原始60题版关注情绪、睡眠、应对和社会功能，适合一般医疗及人群调查中的初步识别。它不是测量所有精神疾病的综合诊断工具。",
    "history": "GHQ-60是早期完整版本；GHQ-30、GHQ-28、GHQ-12采用不同的缩减与组织方式，不能只按题数互换得分。",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "PH-007": {
    "original": "WHO幸福感问卷的早期28题版本",
    "summary": "WHO幸福感系列从积极体验出发，了解一个人是否感到心情愉快、精力充沛、休息良好，并对日常生活有兴趣。常用WHO-5用5题概括近两周的主观幸福感，可用于健康调查及变化监测。幸福感低提示值得进一步了解，不等于已经患有抑郁症。",
    "history": "本系列经历早期28题问卷、10题版本及5题版本的发展；WHO-5聚焦积极幸福感。当前常用版不是历史上最早的版本。",
    "sources": [
      {
        "label": "WHO-5官方介绍",
        "url": "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01"
      },
      {
        "label": "WHO-5历史综述",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25831962/"
      }
    ]
  },
  "PH-008": {
    "original": "CES-D 20题原版",
    "summary": "CES-D 最初为一般人群研究设计，用20个问题了解过去一周抑郁相关体验出现的频率，例如情绪低落、缺少积极感受及人际困扰。它适合比较群体症状负担或跟踪变化。它衡量症状，不取代临床访谈。",
    "history": "20题CES-D是原版；10题和8题表是缩短形式，CESD-R更新症状框架，CES-DC面向儿童青少年。",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "SL-001": {
    "original": "PSQI 原版",
    "summary": "PSQI 用于了解过去一个月整体睡眠质量，而不只询问是否失眠。它将入睡速度、睡眠时长、睡眠效率、夜间干扰、安眠药使用及日间功能等信息整理成7个组成分和总体分。适合研究睡眠质量及随时间的变化。",
    "history": "原版包含19项自评问题，并附有同住者观察问题；B-PSQI减少评估内容，PSQI-A另补充创伤相关的夜间行为。",
    "sources": [
      {
        "label": "The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2748771/"
      }
    ]
  },
  "SL-002": {
    "original": "ISI 原始7题工具",
    "summary": "ISI用7个问题了解失眠给人的实际困扰：入睡或维持睡眠是否困难、对睡眠是否满意，以及是否影响白天生活。它可用于评估主观失眠严重程度和观察干预后的变化。它与睡眠记录或客观睡眠检查提供的信息不同。",
    "history": "自评、临床人员评定、重要他人评定都是ISI的施测形式；2周和1个月表示回顾时间，不能当作不同题数量表。",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "SL-003": {
    "original": "ESS 成人原版",
    "summary": "ESS让受试者判断在8种日常情境中打瞌睡或睡着的可能性，例如安静坐着时。它评估的是白天嗜睡倾向，而不是疲劳、睡眠时长或夜间睡眠质量。常用于睡眠相关评估，并结合病史判断原因。",
    "history": "ESS最初面向成人；成人表单后有措辞调整，ESS-CHAD为儿童青少年替换不合年龄的情境。",
    "sources": [
      {
        "label": "A new method for measuring daytime sleepiness: the Epworth sleepiness scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1798888/"
      }
    ]
  },
  "SL-004": {
    "original": "AIS-8及其5题形式",
    "summary": "AIS根据失眠相关表现组织问题，帮助量化入睡困难、夜间醒来、早醒、睡眠时间和质量，以及白天的影响。完整AIS-8包含夜间和日间两部分，适合主观睡眠问题评估。它不能单独说明睡不好是由哪一种原因造成的。",
    "history": "原始验证同时介绍8题版和仅取前5个夜间问题的AIS-5；AIS-NCA是针对非临床使用重新适配的分支。",
    "sources": [
      {
        "label": "Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
      }
    ]
  },
  "QL-001": {
    "original": "WHOQOL-100",
    "summary": "WHOQOL了解一个人如何评价自己的生活处境，包括身体感受、心理状态、独立生活、社会关系、环境及个人信念。原始WHOQOL-100强调跨文化的生活质量评价，既可用于健康人群，也可用于患者。它不限于疾病症状或治疗效果。",
    "history": "WHOQOL-100为完整原版；WHOQOL-BREF从中形成26题简版，汇总为身体、心理、社会关系和环境4个领域。",
    "sources": [
      {
        "label": "WHOQOL官方工具说明",
        "url": "https://www.who.int/tools/whoqol"
      }
    ]
  },
  "QL-002": {
    "original": "MOS SF-36",
    "summary": "SF-36 用36个问题描述健康对日常生活的影响，覆盖身体活动、疼痛、精力、情绪和社会角色等8个方面。它适合比较不同疾病或一般人群的健康相关生活质量。结果是各领域及汇总得分，不是单纯把36个答案相加。",
    "history": "MOS SF-36是本系列早期版本；SF-36v2调整题目或回答格式，标准版与急性版还区别回顾时间。",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "QL-003": {
    "original": "SF-36 → SF-12",
    "summary": "SF-12用较少问题概括身体和心理健康对生活的影响，适合大型调查或填写时间有限的场景。它主要提供身体健康与心理健康两个汇总结果，相比SF-36更简便，但不保留同等丰富的领域信息。",
    "history": "SF-12原本就是从SF-36选题并建立计分模型得到的短版；随后才出现SF-12v2等修订形式。",
    "sources": [
      {
        "label": "A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8628042/"
      }
    ]
  },
  "QL-004": {
    "original": "EQ-5D-3L（早期EuroQol发展后的标准形式）",
    "summary": "EQ-5D用行动、自我照顾、日常活动、疼痛或不适、焦虑或抑郁5个方面描述健康状态，并用视觉刻度表达个人对总体健康的评价。它常用于比较治疗和疾病负担；配合匹配的价值集，还可用于卫生经济学评价。",
    "history": "标准3L版每个维度有3个水平；5L增加回答水平，Y版改用适合儿童青少年的表述。价值集是把健康状态转成效用值的规则，不是问卷短版。",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "QL-005": {
    "original": "PROMIS成人Global Health 10题工具",
    "summary": "PROMIS Global Health用少量问题了解总体身体、心理和社会健康感受，例如功能、疼痛、疲劳和生活质量。成人10题工具可形成身体和心理健康汇总结果，适合跨疾病研究。它属于PROMIS测量体系的一部分，不等于整个PROMIS题库。",
    "history": "成人10题工具形成早期基准；2题、4题形式针对特定汇总领域，儿童、代理及幼儿形式按年龄和报告者另行开发。",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "QL-006": {
    "original": "SWLS原始5题、7级评分形式",
    "summary": "SWLS用5个问题让人整体评价自己对生活是否满意，重点是对生活的认知判断。它不具体测当天心情，也不把幸福等同于没有焦虑或抑郁。适合一般人群生活满意度研究，原始形式每题采用7级回答。",
    "history": "7级和5级指回答选项数量，两种记录均为5题。5级回答属于格式适配，不能称为原版的5题短版。",
    "sources": [
      {
        "label": "The Satisfaction With Life Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16367493/"
      }
    ]
  },
  "HL-001": {
    "original": "HLS-EU-Q47",
    "summary": "HLS-EU-Q询问人们在获取、理解、判断和使用健康信息时觉得有多困难，覆盖就医、疾病预防和健康促进。核心47题有助于发现人群在哪些健康决策环节需要支持。它测量自报困难，区别于直接测试阅读或计算能力。",
    "history": "HLS-EU-Q47为完整核心问卷；Q16是短版，HLS19-Q12属于后续调查项目中开发的12题形式。",
    "sources": [
      {
        "label": "Measuring health literacy in populations: illuminating the design and development process of the European Health Literacy Survey Questionnaire (HLS-EU-Q).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24112855/"
      }
    ]
  },
  "HL-002": {
    "original": "HLS-EU-Q47 → HLS-SF12",
    "summary": "HLS-SF12用12个问题简要了解人们处理健康信息的困难，保留就医、预防和健康促进的综合视角。它面向填写负担较小的人群健康素养调查，尤其有亚洲人群开发与验证依据。它不是一套医学知识考试。",
    "history": "HLS-SF12从HLS-EU框架和题目中缩减形成；与同为12题的HLS19-Q12不是同一工具。",
    "sources": [
      {
        "label": "HLS-SF12开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31294310/"
      },
      {
        "label": "12题工具早期研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28388977/"
      }
    ]
  },
  "HL-003": {
    "original": "TOFHLA → S-TOFHLA",
    "summary": "S-TOFHLA通过阅读医疗相关材料并完成任务，了解一个人能否实际理解健康信息，而不是只询问他觉得自己懂不懂。它可帮助识别需要更清楚解释或辅助材料的患者。题目依赖语言和材料，跨语言使用要匹配经过验证的版本。",
    "history": "S-TOFHLA本身是完整TOFHLA的短版，减少阅读材料与数字理解任务；只采用阅读部分的研究还需另行说明。",
    "sources": [
      {
        "label": "Development of a brief test to measure functional health literacy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14528569/"
      }
    ]
  },
  "HL-004": {
    "original": "Newest Vital Sign（NVS）",
    "summary": "NVS围绕一张营养标签提出6个问题，观察受试者是否能找到信息、理解含义并做简单计算。它用于快速识别可能存在健康信息理解困难的人，便于调整沟通方式。它不是营养摄入评估，也不代表全部健康素养能力。",
    "history": "本库记录为原始6题工具；翻译或改换标签材料属于适配，需要核对相应语言版本证据。",
    "sources": [
      {
        "label": "Quick assessment of literacy in primary care: the newest vital sign.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16338915/"
      }
    ]
  },
  "HL-005": {
    "original": "eHEALS 8题工具",
    "summary": "eHEALS了解人们对自己查找、判断和使用网络健康信息能力的评价。它有8个核心问题，适合研究线上健康服务的可用性或培训需求。得分反映感知能力，不能直接证明一个人实际能识别网络谣言或完成数字任务。",
    "history": "本库收录8题形式；它源于早期电子健康素养框架，针对新数字环境的其他工具不应自动看成eHEALS的修订版。",
    "sources": [
      {
        "label": "eHEALS: The eHealth Literacy Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17213046/"
      }
    ]
  },
  "SS-001": {
    "original": "MSPSS 12题工具",
    "summary": "MSPSS了解一个人觉得自己从家庭、朋友和重要他人那里获得多少支持。12个问题分成3类支持来源，可用于研究社会支持与健康、压力或康复之间的关系。它测的是感知到的支持，不是简单统计认识多少人。",
    "history": "本库收录原始12题结构；中文译本或特定人群应用通常保留结构，但语言适配与量表缩短应分开说明。",
    "sources": [
      {
        "label": "MSPSS原始开发研究",
        "url": "https://doi.org/10.1207/s15327752jpa5201_2"
      }
    ]
  },
  "SS-002": {
    "original": "UCLA孤独量表1978年版",
    "summary": "UCLA孤独量表衡量主观孤独感，即一个人觉得自己的关系是否缺少陪伴、亲近或归属。原始形式有20题，适合研究社会关系的主观体验。一个人社交对象多仍可能孤独，因此它不能替代社会网络规模测量。",
    "history": "1978年版之后形成修订版及第3版；不同3题、4题、6题、8题和10题形式来自不同选题研究，不能只凭简称认定完全等价。",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "SS-003": {
    "original": "LSNS早期社会网络量表",
    "summary": "LSNS面向老年人，了解家庭和朋友联系是否足够，以及需要帮助时是否有人可依靠。它有助于识别社会隔离风险，关注实际联系及支持资源，区别于单纯的孤独感。结果可帮助社区或养老服务安排进一步评估。",
    "history": "本系列起源于早期LSNS；LSNS-R、LSNS-18和LSNS-6是后续修订或不同覆盖范围的形式，18题版不是最初原版。",
    "sources": [
      {
        "label": "开发者：LSNS发展与用途",
        "url": "https://www.bc.edu/bc-web/schools/ssw/sites/lubben/description.html"
      }
    ]
  },
  "SS-004": {
    "original": "Oslo Social Support Scale 3题形式",
    "summary": "OSSS-3用3个问题快速了解可依靠的人、他人关心程度及获得邻里实际帮助的难易。适合在大型调查中加入简短社会支持指标。它提供总体概况，不能像较长量表那样细分各种支持功能。",
    "history": "本库仅收录3题形式；这里不将其断言为所有社会支持量表的源头，最早提出文献仍需与后续验证研究区分。",
    "sources": [
      {
        "label": "OSSS-3标准化研究（非最早开发文献）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30016997/"
      }
    ]
  },
  "SS-005": {
    "original": "MOS Social Support Survey",
    "summary": "MOS社会支持调查最初用于慢性病患者研究，了解需要时能否得到情感、信息、实际照料、亲密表达和共同活动方面的帮助。它关注支持的功能，可描述不同支持领域及总体水平。它不只是调查家庭人数或婚姻状况。",
    "history": "原工具有19个功能支持题；mMOS-SS等短版减少题目和覆盖维度，需按各自方案解释。",
    "sources": [
      {
        "label": "The MOS social support survey.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2035047/"
      }
    ]
  },
  "HB-001": {
    "original": "IPAQ长短表并行开发体系",
    "summary": "IPAQ用于回顾一个人进行身体活动的频率和时长，例如步行、中等强度及高强度活动，也记录久坐。它适合人群活动水平比较，长表还区分工作、交通、家务和休闲等领域。自报结果并不等于运动设备的客观记录。",
    "history": "开发项目同时测试长短表、电话与自填，以及过去7天与通常一周的形式；不能把所有形式排列成单一先后修订链。",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "HB-002": {
    "original": "GPAQ早期版本及后续v2",
    "summary": "GPAQ是世界卫生组织用于身体活动监测的问卷，区分工作、往来交通和休闲中的活动，并记录久坐。它帮助了解活动来自哪些生活领域，适用于人群监测。它与IPAQ用途相近，但题目组织和分析规则不同。",
    "history": "GPAQ有早期v1和后续v2；v2是版本更新，不是从IPAQ直接删题形成的短版。",
    "sources": [
      {
        "label": "WHO身体活动监测工具",
        "url": "https://www.who.int/teams/noncommunicable-diseases/surveillance/systems-tools/physical-activity-surveillance"
      }
    ]
  },
  "HB-003": {
    "original": "AUDIT 10题原版",
    "summary": "AUDIT通过10个问题了解饮酒量、饮酒行为及相关问题，帮助发现危险或有害饮酒。它最初为基层医疗的早期识别设计，可支持进一步询问和干预。它比只问喝多少更全面，但分数本身不等于酒精依赖诊断。",
    "history": "AUDIT是完整原版；AUDIT-C选取其中3个饮酒消费问题，减少了对依赖表现和危害的覆盖。",
    "sources": [
      {
        "label": "Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption--II.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8329970/"
      }
    ]
  },
  "HB-004": {
    "original": "AUDIT → AUDIT-C",
    "summary": "AUDIT-C用3个问题概括饮酒频率、通常饮酒量和大量饮酒的情况，适合时间较短的筛查。它帮助发现可能需要进一步了解的饮酒模式，但没有完整AUDIT对酒精相关问题的覆盖。",
    "history": "AUDIT-C直接取自10题AUDIT的前3个消费问题，本身就是短版；原始验证人群与后续推广人群应分开考虑。",
    "sources": [
      {
        "label": "The AUDIT alcohol consumption questions (AUDIT-C): an effective brief screening test for problem drinking. Ambulatory Care Quality Improvement Project (ACQUIP). Alcohol Use Disorders Identification Test.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9738608/"
      }
    ]
  },
  "HB-005": {
    "original": "Fagerström Tolerance Questionnaire（FTQ）",
    "summary": "Fagerström系列用于了解吸烟者对尼古丁的依赖程度，关注起床后多久吸烟、每天吸多少等行为。常用FTND为6题，可为戒烟评估提供信息。它不测戒烟意愿，也不宜自动用于电子烟等其他产品。",
    "history": "早期FTQ有8题；FTND删去表现较差的题目并调整部分计分，属于修订而不仅是等比例缩短。",
    "sources": [
      {
        "label": "The Fagerström Test for Nicotine Dependence: a revision of the Fagerström Tolerance Questionnaire.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1932883/"
      }
    ]
  },
  "HB-006": {
    "original": "CAGE 4题工具",
    "summary": "CAGE用4个简短问题了解饮酒是否已引起减少饮酒的想法、被他人批评、内疚或晨起饮酒等经历。它用于发现值得进一步评估的酒精问题，侧重问题经历而非精确饮酒量。",
    "history": "CAGE-AID把提问范围扩展到酒精及其他药物或物质；不能把它理解成单纯更短或更长的CAGE。",
    "sources": [
      {
        "label": "CAGE经典文献",
        "url": "https://doi.org/10.1001/jama.1984.03350140051025"
      }
    ]
  },
  "MA-001": {
    "original": "Morisky 4题依从性测量",
    "summary": "Morisky依从性量表询问患者是否会忘记服药、疏忽或自行停药，帮助了解未按医嘱用药的行为。早期4题工具在高血压研究中使用，后续8题形式增加情境和信息。结果是自报行为，不等于实际药物浓度或客观服药记录。",
    "history": "4题形式是早期基础，MMAS-8是扩展形式；两者题目、回答和计分规则不同，不能直接换算。",
    "sources": [
      {
        "label": "Concurrent and predictive validity of a self-reported measure of medication adherence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3945130/"
      }
    ]
  },
  "MA-002": {
    "original": "两种同简称MARS工具，须区分",
    "summary": "本目录涉及两种简称都叫MARS的用药依从性工具。Thompson等的Medication Adherence Rating Scale最初用于精神疾病用药；Horne的Medication Adherence Report Scale关注患者自报的漏服及主动改变用药行为。它们名字相近，但不是同一条修订链。",
    "history": "MARS-5属于Horne的Report Scale短版，不能写成Thompson的Rating Scale删去5题而来。选择前须核对英文全名和开发者。",
    "sources": [
      {
        "label": "Rating Scale开发研究",
        "url": "https://doi.org/10.1016/S0920-9964(99)00130-9"
      },
      {
        "label": "Report Scale开发者研究",
        "url": "https://doi.org/10.1111/bcp.14193"
      }
    ]
  },
  "MA-003": {
    "original": "ARMS 12题工具",
    "summary": "ARMS用12个问题了解患者是否按要求服药，以及是否及时补充或领取药物。它特别考虑阅读能力较低人群的理解需要，可帮助把用药执行问题与续药获取问题分开。它适用于慢性病管理中的依从性评估。",
    "history": "本库记录为12题工具；不同疾病或语言的验证是应用扩展，不应仅因人群不同就称为新原版。",
    "sources": [
      {
        "label": "Development and evaluation of the Adherence to Refills and Medications Scale (ARMS) among low-literacy patients with chronic disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19911444/"
      }
    ]
  },
  "MA-004": {
    "original": "SDSCA早期工具及2000年修订",
    "summary": "SDSCA询问糖尿病患者过去一周在饮食、活动、血糖监测、足部护理等方面做了多少天，帮助描述日常自我管理行为。它适合发现需要支持的行为领域及观察教育干预变化。不同领域应分别解释，不宜机械合成一个总分。",
    "history": "本库主要收录2000年修订的核心及扩展题组；这些源于更早的SDSCA，而不是彼此独立发明的问卷。",
    "sources": [
      {
        "label": "The summary of diabetes self-care activities measure: results from 7 studies and a revised scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10895844/"
      }
    ]
  },
  "MA-005": {
    "original": "慢性病自我效能测量体系 → SEMCD-6",
    "summary": "SEMCD-6评估患者对自己管理慢性病是否有信心，例如应对症状、情绪影响和日常活动。它测量的是自我效能，适合评价自我管理教育的一个方面；高信心不等于已经完成相应行为。",
    "history": "6题形式源于慢性病自我管理项目的自我效能测量体系；不能把项目效果研究直接当成量表全部开发史。",
    "sources": [
      {
        "label": "开发团队6题量表说明",
        "url": "https://selfmanagementresource.com/wp-content/uploads/English_-_self-efficacy_for_managing_chronic_disease_6-item.pdf"
      }
    ]
  },
  "OH-001": {
    "original": "MBI早期助人职业版本",
    "summary": "MBI用于了解工作倦怠的不同方面，例如情绪耗竭、对服务对象的疏离以及工作成就感。它最初围绕与人打交道的职业开发，后来扩展到教育和一般职业。各维度应分别解释，倦怠分数不能作为精神疾病诊断。",
    "history": "HSS延续助人职业框架，ES面向教育人员，GS把内容改为一般工作体验；MP则是HSS的医务人员措辞形式。",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "OH-002": {
    "original": "CBI 19题原版",
    "summary": "CBI把倦怠理解为疲惫和耗竭，并区分个人、工作相关及服务对象相关的耗竭。它有助于了解疲惫更集中于哪个生活或工作情境，适用于职业健康研究。它与MBI的维度框架不同。",
    "history": "原版为19题；学生适配将工作或服务情境转为学习相关情境，具体题目数取决于所用研究版本。",
    "sources": [
      {
        "label": "CBI开发机构",
        "url": "https://nfa.dk/vaerktoejer/spoergeskemaer/spoergeskema-til-maaling-af-udbraendthed-cbi/copenhagen-burnout-inventory-cbi"
      }
    ]
  },
  "OH-003": {
    "original": "OLBI原始职业版",
    "summary": "OLBI用耗竭和工作疏离两个维度描述倦怠，兼顾身体、认知与情绪的疲惫以及对工作的距离感。它采用正向和反向表述，适合多种职业人群的工作健康研究。它不把倦怠简单等同于抑郁。",
    "history": "OLBI-S把职业表述改为学习情境，属于学生适配，不是原版的短表。",
    "sources": [
      {
        "label": "The job demands-resources model of burnout.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11419809/"
      }
    ]
  },
  "OH-004": {
    "original": "早期同情疲劳测量 → ProQOL",
    "summary": "ProQOL关注助人工作带来的正负体验：从帮助他人获得的满足、工作倦怠，以及接触他人创伤后的继发性创伤压力。适用于医务、救援和社会服务等人员研究。三个维度应分别看，不能把它们简单相加。",
    "history": "本系列承接早期同情疲劳和同情满足测量；III、IV、5是历史修订版本，ProQOL 5不是最初原版。",
    "sources": [
      {
        "label": "ProQOL官方说明",
        "url": "https://proqol.org/faq"
      },
      {
        "label": "ProQOL历史手册",
        "url": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf"
      }
    ]
  },
  "OH-005": {
    "original": "努力—回报失衡问卷",
    "summary": "ERI评估一个人在工作中付出的努力与得到的报酬、认可、安全感或发展机会是否失衡，并可评估过度投入。它用于研究工作压力的社会条件，区别于直接询问疲惫程度。结果需要按匹配版本计算努力与回报关系。",
    "history": "长表承载较完整的理论测量，短表减少题目；缩短后的维度题量不同，计算比值时不能沿用未经调整的规则。",
    "sources": [
      {
        "label": "ERI原始理论与测量",
        "url": "https://doi.org/10.1037/1076-8998.1.1.27"
      }
    ]
  },
  "AG-001": {
    "original": "FRAIL 5项筛查",
    "summary": "FRAIL通过疲劳、上下楼能力、步行能力、疾病负担和体重下降5个方面快速了解身体衰弱风险。它适合老年人初步筛查，便于识别需要进一步评估的人。它不是完整老年综合评估，也不直接判断某种具体疾病。",
    "history": "本库仅收录5项形式；它与Fried表型或其他衰弱指数概念相关，但不是它们的简单同义名称。",
    "sources": [
      {
        "label": "Frailty consensus: a call to action.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23764209/"
      }
    ]
  },
  "AG-002": {
    "original": "TFI",
    "summary": "TFI从身体、心理和社会三个方面理解老年衰弱。其核心15项帮助发现一个人除身体虚弱外是否还面临心理困扰或社会支持不足，可用于社区老年健康研究。它强调多方面的脆弱性。",
    "history": "15项对应衰弱成分部分，问卷还可含背景与决定因素部分；不能把背景问题都当成衰弱评分题。",
    "sources": [
      {
        "label": "The Tilburg Frailty Indicator: psychometric properties.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20511102/"
      }
    ]
  },
  "AG-003": {
    "original": "Edmonton Frail Scale",
    "summary": "EFS通过认知、功能、营养、药物、情绪、支持及表现任务等信息评估老年衰弱。它不仅依靠自评，还包含需要实际完成或观察的任务，可为进一步老年评估提供线索。",
    "history": "本库记录为原工具；它与纯问卷式衰弱筛查在施测要求上不同，删去表现任务后不能默认仍为标准EFS。",
    "sources": [
      {
        "label": "Validity and reliability of the Edmonton Frail Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16757522/"
      }
    ]
  },
  "AG-004": {
    "original": "Barthel Index原版",
    "summary": "Barthel指数评估一个人在进食、洗澡、穿衣、如厕、转移和行走等基本生活活动中需要多少帮助。常用于康复、卒中和老年照护，便于描述独立程度和护理需求。它不直接衡量生活满意度或认知能力。",
    "history": "原版后出现0–20评分形式和修改版MBI；前者涉及计分尺度，后者还可能改变各项目的等级划分。",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14258950/"
      }
    ]
  },
  "AG-005": {
    "original": "Lawton IADL",
    "summary": "Lawton IADL关注独立生活所需的较复杂活动，如购物、交通、用药和财务管理，帮助了解一个人能否在社区生活。它补充进食、穿衣等基本生活能力测量。结果也会受个人生活分工和实际机会影响。",
    "history": "历史版本曾采用与性别分工有关的5项或8项评分；现代应用须明确评分规则，不能把未做过的活动直接等同于失能。",
    "sources": [
      {
        "label": "Assessment of older people: self-maintaining and instrumental activities of daily living.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/5349366/"
      }
    ]
  },
  "AG-006": {
    "original": "MNA完整版",
    "summary": "MNA用于发现老年人的营养不良或营养风险，综合饮食摄入、体重变化、活动和健康状况等信息。完整版提供较全面的营养评估，短版用于快速识别需要更多关注的人。它不是只测体重或体重指数。",
    "history": "18项完整版是短版的来源；MNA-SF选取6项，修订后可在无法获取BMI时采用小腿围的替代形式。",
    "sources": [
      {
        "label": "Screening for undernutrition in geriatric practice: developing the short-form mini-nutritional assessment (MNA-SF).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11382797/"
      }
    ]
  },
  "MC-001": {
    "original": "EPDS 10题原版",
    "summary": "EPDS最初用于社区产后妇女，通过10个自评问题了解近期抑郁相关感受。它可帮助识别需要进一步心理评估的孕产妇，并跟踪症状变化。后来也用于孕期，但须采用相应人群的验证依据。",
    "history": "EPDS为10题原版；EPDSR-5及EPDSR-3是特定研究提出的短形式，不能自动继承原版的筛查界点。",
    "sources": [
      {
        "label": "Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3651732/"
      }
    ]
  },
  "MC-002": {
    "original": "SDQ 25题核心工具",
    "summary": "SDQ同时了解儿童青少年的困难和优势，包括情绪、行为、多动或注意、同伴关系及亲社会行为。它可由家长、教师或年龄合适的孩子填写，适合初步了解行为情绪情况。不同报告者提供的是不同观察视角。",
    "history": "25题核心结构是共同基础；年龄表、报告者表、影响补充表和随访表按用途适配，不是连续缩短的版本链。",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "MC-003": {
    "original": "PedsQL早期体系与4.0通用核心",
    "summary": "PedsQL了解健康或疾病怎样影响儿童的身体活动、情绪、同伴交往和学校生活。常用4.0通用核心工具可由孩子自评或家长代理报告，并可配合疾病专项模块。它反映健康相关生活质量，不是儿童发育筛查。",
    "history": "4.0是已经历发展后的通用核心，不能称为历史第一版；疾病模块与通用核心配套，按病种开发而非从核心单纯删题。",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "MC-004": {
    "original": "KIDSCREEN-52",
    "summary": "KIDSCREEN面向儿童青少年，了解身体和心理感受、家庭、同伴、学校等方面的健康相关生活质量。52题版本提供较细的10个领域画像，也有家长代理表。它适合人群调查或服务评价，不是某种儿童疾病的诊断量表。",
    "history": "KIDSCREEN-52为详细形式，27题短表汇总为5个领域，10题指数提供总体指标；自评与代理版要分开解释。",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "MC-005": {
    "original": "ASQ早期发育筛查体系",
    "summary": "ASQ让家长根据孩子平时能完成的活动，报告沟通、动作、问题解决和个人社会能力，帮助发现需要进一步发育评估的儿童。不同月龄使用不同问题，不能让所有孩子填同一张表。它是筛查工具，不是智力测验或诊断。",
    "history": "ASQ-3是发育筛查的第3版，月龄表是同一版内的年龄适配；ASQ:SE-2专注社会情绪，属于另一分支而非ASQ-3短版。",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "PE-001": {
    "original": "PSQ原版 → PSQ-III → PSQ-18",
    "summary": "PSQ系列询问患者如何评价医疗服务，包括沟通、专业照护、人际态度、费用、就医便利及医生投入时间等。常用PSQ-18适合时间有限的满意度调查。它测量患者评价，不直接代表医疗技术质量或治疗效果。",
    "history": "最早PSQ有80题，后有50题PSQ-III；18题版从较长版本缩减而来，保留多方面满意度结构。",
    "sources": [
      {
        "label": "RAND：PSQ发展与短版",
        "url": "https://www.rand.org/health/surveys/psq.html"
      }
    ]
  },
  "PE-002": {
    "original": "CAHPS调查项目（无单一通用原版）",
    "summary": "CAHPS是一组患者体验调查，询问就医中实际发生了什么，例如能否及时获得照护、医护是否解释清楚、服务是否协调。不同调查面向门诊、医院、居家照护或保险计划。它强调服务体验，区别于只问满意不满意。",
    "history": "这些问卷属于同一项目下的场景工具，不应全部写成由某一张原表删改而来；需按具体调查及版本追溯。",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "PE-003": {
    "original": "早期SDM-Q → SDM-Q-9",
    "summary": "SDM-Q了解一次诊疗中患者是否参与共同决策，例如是否知道存在选择、理解不同方案并表达偏好。它适合评价医患决策过程或相关干预。患者认为参与充分，不一定等于最终选项医学上更优。",
    "history": "SDM-Q-9由早期SDM-Q修订而来；SDM-Q-Doc以医生视角对应描述同一过程，并非患者版的简版。",
    "sources": [
      {
        "label": "The 9-item Shared Decision Making Questionnaire (SDM-Q-9). Development and psychometric properties in a primary care sample.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19879711/"
      }
    ]
  },
  "KA-001": {
    "original": "SAGE疫苗犹豫框架及VHS",
    "summary": "VHS围绕对疫苗的信任、风险顾虑和接种态度了解疫苗犹豫，有助于分析为什么有人迟疑或拒绝接种。早期应用重点包括家长对儿童疫苗的态度。它测的是态度与顾虑，不能直接当作实际接种率。",
    "history": "工具源于SAGE疫苗犹豫工作；家长形式与成人改编应区分，成人版不是把原表换个标题就能通用。",
    "sources": [
      {
        "label": "Measuring vaccine hesitancy: The development of a survey tool.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25896384/"
      }
    ]
  },
  "KA-002": {
    "original": "5C长短形式共同开发",
    "summary": "5C评估影响接种决定的5类心理因素：信任、对疾病风险的忽视、实际或心理障碍、信息权衡以及保护他人的意愿。它帮助把不接种背后的原因拆开，而不是只给一个犹豫总分。",
    "history": "开发研究同时提供15题长表与5题短表；短表每个维度只用1题，减少填答时间也减少维度信息。",
    "sources": [
      {
        "label": "Beyond confidence: Development of a measure assessing the 5C psychological antecedents of vaccination.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30532274/"
      }
    ]
  }
};
export const versionIntroductions: Record<string,{relation:string;evidenceNote:string;sources:IntroSource[]}> = {
  "VR-PH-001-BASE": {
    "relation": "本记录是PHQ-9，来自完整PHQ的抑郁模块，用9题了解近两周抑郁症状及程度。它不是PHQ完整问卷；PHQ-2与PHQ-8分别从它形成更短形式。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "VR-PH-002-BASE": {
    "relation": "本记录为GAD-7原始7题形式，关注近两周焦虑症状；后续GAD-2保留两个核心问题。它与PHQ-9测量的抑郁领域不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A brief measure for assessing generalized anxiety disorder: the GAD-7.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16717171/"
      }
    ]
  },
  "VR-PH-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。DASS-42是原版；DASS-21缩减每个维度的题目，DASS-Y则针对儿童青少年的语言和体验另行适配。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "DASS开发者：工具及版本",
        "url": "https://dass.psy.unsw.edu.au/"
      }
    ]
  },
  "VR-PH-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。PSS-14为原版，PSS-10与PSS-4从原版选取更少题目；短版节省时间，同时减少所覆盖的信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PSS原始开发研究",
        "url": "https://kilthub.cmu.edu/articles/journal_contribution/A_Global_Measure_of_Perceived_Stress/6613130"
      },
      {
        "label": "PSS各长度形式研究",
        "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/pdf/cohen%2C-s.--williamson%2C-g.-1988.pdf"
      }
    ]
  },
  "VR-PH-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。K10和K6在同一开发研究中形成，K6是K10中内嵌的6题子集；不能简单理解为K10发布多年后的修订版。补充问题另询问持续时间或功能影响。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "K10与K6共同开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12214795/"
      }
    ]
  },
  "VR-PH-006-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。GHQ-60是早期完整版本；GHQ-30、GHQ-28、GHQ-12采用不同的缩减与组织方式，不能只按题数互换得分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "VR-PH-007-BASE": {
    "relation": "本记录为WHO-5，保留5个积极幸福感问题，是较长WHO幸福感工具发展后的形式。它不包括WHO-10中相同的正负向题结构。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHO-5官方介绍",
        "url": "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01"
      },
      {
        "label": "WHO-5历史综述",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25831962/"
      }
    ]
  },
  "VR-PH-008-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。20题CES-D是原版；10题和8题表是缩短形式，CESD-R更新症状框架，CES-DC面向儿童青少年。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-SL-001-BASE": {
    "relation": "本记录指PSQI原始工具，与同目录另一PSQI记录不是两种不同问卷。完整工具的7个组成分概括一个月睡眠质量。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2748771/"
      }
    ]
  },
  "VR-SL-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。自评、临床人员评定、重要他人评定都是ISI的施测形式；2周和1个月表示回顾时间，不能当作不同题数量表。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "VR-SL-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。ESS最初面向成人；成人表单后有措辞调整，ESS-CHAD为儿童青少年替换不合年龄的情境。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A new method for measuring daytime sleepiness: the Epworth sleepiness scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1798888/"
      }
    ]
  },
  "VR-SL-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。原始验证同时介绍8题版和仅取前5个夜间问题的AIS-5；AIS-NCA是针对非临床使用重新适配的分支。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
      }
    ]
  },
  "VR-QL-001-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。WHOQOL-100为完整原版；WHOQOL-BREF从中形成26题简版，汇总为身体、心理、社会关系和环境4个领域。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHOQOL官方工具说明",
        "url": "https://www.who.int/tools/whoqol"
      }
    ]
  },
  "VR-QL-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。MOS SF-36是本系列早期版本；SF-36v2调整题目或回答格式，标准版与急性版还区别回顾时间。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "VR-QL-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。SF-12原本就是从SF-36选题并建立计分模型得到的短版；随后才出现SF-12v2等修订形式。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8628042/"
      }
    ]
  },
  "VR-QL-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。标准3L版每个维度有3个水平；5L增加回答水平，Y版改用适合儿童青少年的表述。价值集是把健康状态转成效用值的规则，不是问卷短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-QL-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。成人10题工具形成早期基准；2题、4题形式针对特定汇总领域，儿童、代理及幼儿形式按年龄和报告者另行开发。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-006-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。7级和5级指回答选项数量，两种记录均为5题。5级回答属于格式适配，不能称为原版的5题短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Satisfaction With Life Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16367493/"
      }
    ]
  },
  "VR-HL-001-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。HLS-EU-Q47为完整核心问卷；Q16是短版，HLS19-Q12属于后续调查项目中开发的12题形式。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring health literacy in populations: illuminating the design and development process of the European Health Literacy Survey Questionnaire (HLS-EU-Q).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24112855/"
      }
    ]
  },
  "VR-HL-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。HLS-SF12从HLS-EU框架和题目中缩减形成；与同为12题的HLS19-Q12不是同一工具。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "HLS-SF12开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31294310/"
      },
      {
        "label": "12题工具早期研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28388977/"
      }
    ]
  },
  "VR-HL-003-BASE": {
    "relation": "S-TOFHLA本身就是TOFHLA的短形式，原开发研究减少阅读材料和数字理解任务。它并非没有前身的原版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Development of a brief test to measure functional health literacy.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14528569/"
      }
    ]
  },
  "VR-HL-004-BASE": {
    "relation": "本记录为NVS原始6题工具，围绕营养标签完成理解与计算任务。更换标签或语言后，应另核对适配依据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Quick assessment of literacy in primary care: the newest vital sign.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16338915/"
      }
    ]
  },
  "VR-HL-005-BASE": {
    "relation": "本记录为8题eHEALS，主要测自报网络健康信息能力。它不是对实际网络操作表现的直接测试。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "eHEALS: The eHealth Literacy Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17213046/"
      }
    ]
  },
  "VR-SS-001-BASE": {
    "relation": "本记录保留MSPSS的12题、3个支持来源结构。特定语言或人群验证不代表改变了原始维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MSPSS原始开发研究",
        "url": "https://doi.org/10.1207/s15327752jpa5201_2"
      }
    ]
  },
  "VR-SS-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。1978年版之后形成修订版及第3版；不同3题、4题、6题、8题和10题形式来自不同选题研究，不能只凭简称认定完全等价。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。本系列起源于早期LSNS；LSNS-R、LSNS-18和LSNS-6是后续修订或不同覆盖范围的形式，18题版不是最初原版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发者：LSNS发展与用途",
        "url": "https://www.bc.edu/bc-web/schools/ssw/sites/lubben/description.html"
      }
    ]
  },
  "VR-SS-004-BASE": {
    "relation": "本记录为OSSS-3简短形式。这里提供其用途和标准化依据；最早开发文献与后续验证不能混为一谈。",
    "evidenceNote": "具体历史表单或选题关系尚未完全核实；不据此认定版本等价。",
    "sources": [
      {
        "label": "OSSS-3标准化研究（非最早开发文献）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30016997/"
      }
    ]
  },
  "VR-SS-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。原工具有19个功能支持题；mMOS-SS等短版减少题目和覆盖维度，需按各自方案解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The MOS social support survey.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2035047/"
      }
    ]
  },
  "VR-HB-001-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。开发项目同时测试长短表、电话与自填，以及过去7天与通常一周的形式；不能把所有形式排列成单一先后修订链。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-002-BASE": {
    "relation": "本记录对应目录原先标注的GPAQ v2常用形式，是早期v1之后的更新。它与IPAQ属于不同问卷体系。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHO身体活动监测工具",
        "url": "https://www.who.int/teams/noncommunicable-diseases/surveillance/systems-tools/physical-activity-surveillance"
      }
    ]
  },
  "VR-HB-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。AUDIT是完整原版；AUDIT-C选取其中3个饮酒消费问题，减少了对依赖表现和危害的覆盖。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption--II.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8329970/"
      }
    ]
  },
  "VR-HB-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。AUDIT-C直接取自10题AUDIT的前3个消费问题，本身就是短版；原始验证人群与后续推广人群应分开考虑。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The AUDIT alcohol consumption questions (AUDIT-C): an effective brief screening test for problem drinking. Ambulatory Care Quality Improvement Project (ACQUIP). Alcohol Use Disorders Identification Test.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9738608/"
      }
    ]
  },
  "VR-HB-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。早期FTQ有8题；FTND删去表现较差的题目并调整部分计分，属于修订而不仅是等比例缩短。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Fagerström Test for Nicotine Dependence: a revision of the Fagerström Tolerance Questionnaire.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1932883/"
      }
    ]
  },
  "VR-HB-006-BASE": {
    "relation": "本记录为CAGE的4题工具，侧重饮酒问题经历。CAGE-AID扩大到其他物质，不改变本记录的原始目标。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CAGE经典文献",
        "url": "https://doi.org/10.1001/jama.1984.03350140051025"
      }
    ]
  },
  "VR-MA-001-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。4题形式是早期基础，MMAS-8是扩展形式；两者题目、回答和计分规则不同，不能直接换算。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Concurrent and predictive validity of a self-reported measure of medication adherence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3945130/"
      }
    ]
  },
  "VR-MA-002-BASE": {
    "relation": "本记录是Thompson等开发的Medication Adherence Rating Scale，最初针对精神疾病用药。目录中的MARS-5属于Horne的Report Scale，二者不是父子版本关系。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Rating Scale开发研究",
        "url": "https://doi.org/10.1016/S0920-9964(99)00130-9"
      },
      {
        "label": "Report Scale开发者研究",
        "url": "https://doi.org/10.1111/bcp.14193"
      }
    ]
  },
  "VR-MA-003-BASE": {
    "relation": "本记录为ARMS的12题形式，区分服药执行与按时续药两个方面，是该工具的开发结构。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Development and evaluation of the Adherence to Refills and Medications Scale (ARMS) among low-literacy patients with chronic disease.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19911444/"
      }
    ]
  },
  "VR-MA-004-BASE": {
    "relation": "本记录泛指修订SDSCA，目录另列核心11题与扩展题组。实际使用应进入具体题组记录，并说明采用哪些行为领域。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The summary of diabetes self-care activities measure: results from 7 studies and a revised scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10895844/"
      }
    ]
  },
  "VR-MA-005-BASE": {
    "relation": "本记录为SEMCD-6，来自慢性病自我管理项目的自我效能测量。它衡量管理信心，与SDSCA等行为频率工具不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发团队6题量表说明",
        "url": "https://selfmanagementresource.com/wp-content/uploads/English_-_self-efficacy_for_managing_chronic_disease_6-item.pdf"
      }
    ]
  },
  "VR-OH-001-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。HSS延续助人职业框架，ES面向教育人员，GS把内容改为一般工作体验；MP则是HSS的医务人员措辞形式。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "VR-OH-002-BASE": {
    "relation": "本记录为CBI原始19题职业工具，区分个人、工作及服务对象相关耗竭。学生形式需另作学习情境适配。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CBI开发机构",
        "url": "https://nfa.dk/vaerktoejer/spoergeskemaer/spoergeskema-til-maaling-af-udbraendthed-cbi/copenhagen-burnout-inventory-cbi"
      }
    ]
  },
  "VR-OH-003-BASE": {
    "relation": "本记录为OLBI职业版，关注耗竭与工作疏离。学生OLBI-S改变工作情境表述，不是这张表的短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The job demands-resources model of burnout.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11419809/"
      }
    ]
  },
  "VR-OH-004-BASE": {
    "relation": "本记录为ProQOL 5，已经历早期工具及III、IV等发展阶段。应分别解释同情满足、倦怠和继发性创伤压力。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ProQOL官方说明",
        "url": "https://proqol.org/faq"
      },
      {
        "label": "ProQOL历史手册",
        "url": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf"
      }
    ]
  },
  "VR-OH-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。长表承载较完整的理论测量，短表减少题目；缩短后的维度题量不同，计算比值时不能沿用未经调整的规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ERI原始理论与测量",
        "url": "https://doi.org/10.1037/1076-8998.1.1.27"
      }
    ]
  },
  "VR-AG-001-BASE": {
    "relation": "本记录为FRAIL的5项简短筛查。它与其他衰弱工具是不同操作化方法，不按同一分数互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Frailty consensus: a call to action.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23764209/"
      }
    ]
  },
  "VR-AG-002-BASE": {
    "relation": "本记录所述15项是TFI的衰弱成分部分；背景决定因素部分与这15项的评分用途不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Tilburg Frailty Indicator: psychometric properties.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20511102/"
      }
    ]
  },
  "VR-AG-003-BASE": {
    "relation": "本记录为EFS原工具，包括评定或表现任务。未经验证删除这些任务的纯自填表不能直接视为原工具。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validity and reliability of the Edmonton Frail Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16757522/"
      }
    ]
  },
  "VR-AG-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。原版后出现0–20评分形式和修改版MBI；前者涉及计分尺度，后者还可能改变各项目的等级划分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14258950/"
      }
    ]
  },
  "VR-AG-005-BASE": {
    "relation": "本记录为Lawton IADL基本框架，关注较复杂生活活动。历史性别相关评分另列说明，不能默认适用于所有现代研究。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Assessment of older people: self-maintaining and instrumental activities of daily living.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/5349366/"
      }
    ]
  },
  "VR-AG-006-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。18项完整版是短版的来源；MNA-SF选取6项，修订后可在无法获取BMI时采用小腿围的替代形式。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Screening for undernutrition in geriatric practice: developing the short-form mini-nutritional assessment (MNA-SF).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11382797/"
      }
    ]
  },
  "VR-MC-001-BASE": {
    "relation": "本记录为EPDS原始10题工具，最初开发用于产后筛查。孕期或其他人群应用需要相应证据，短形式也不能沿用全部原版解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3651732/"
      }
    ]
  },
  "VR-MC-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。25题核心结构是共同基础；年龄表、报告者表、影响补充表和随访表按用途适配，不是连续缩短的版本链。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。4.0是已经历发展后的通用核心，不能称为历史第一版；疾病模块与通用核心配套，按病种开发而非从核心单纯删题。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-004-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。KIDSCREEN-52为详细形式，27题短表汇总为5个领域，10题指数提供总体指标；自评与代理版要分开解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-005-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。ASQ-3是发育筛查的第3版，月龄表是同一版内的年龄适配；ASQ:SE-2专注社会情绪，属于另一分支而非ASQ-3短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-PE-001-BASE": {
    "relation": "PSQ-18是50题PSQ-III的短表，而PSQ-III之前还有最早80题PSQ。本记录并不是本系列最初原版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "RAND：PSQ发展与短版",
        "url": "https://www.rand.org/health/surveys/psq.html"
      }
    ]
  },
  "VR-PE-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。这些问卷属于同一项目下的场景工具，不应全部写成由某一张原表删改而来；需按具体调查及版本追溯。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-003-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。SDM-Q-9由早期SDM-Q修订而来；SDM-Q-Doc以医生视角对应描述同一过程，并非患者版的简版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The 9-item Shared Decision Making Questionnaire (SDM-Q-9). Development and psychometric properties in a primary care sample.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19879711/"
      }
    ]
  },
  "VR-KA-001-BASE": {
    "relation": "本记录为VHS概括性记录，原先资料主要围绕SAGE框架和家长接种态度。选择时应进一步明确家长版或成人改编版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring vaccine hesitancy: The development of a survey tool.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25896384/"
      }
    ]
  },
  "VR-KA-002-BASE": {
    "relation": "这是量表大类的导航记录，不是一张独立施测问卷。开发研究同时提供15题长表与5题短表；短表每个维度只用1题，减少填答时间也减少维度信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Beyond confidence: Development of a measure assessing the 5C psychological antecedents of vaccination.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30532274/"
      }
    ]
  },
  "VR-PH-001-001": {
    "relation": "这是从临床人员使用的PRIME-MD发展出的PHQ自填完整问卷，包含多个心理问题模块。PHQ-9只是它的抑郁部分；因此完整PHQ不能按PHQ-9的一张总分表解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "VR-PH-001-002": {
    "relation": "PHQ-2从PHQ-9保留兴趣减退和情绪低落两个核心问题，适合第一步快速了解抑郁症状。它节省时间，但覆盖范围小于9题版，阳性结果通常还需要更完整的评估。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "VR-PH-001-003": {
    "relation": "PHQ-8与PHQ-9的主要区别是去除有关死亡或自伤想法的第9题，保留其余8题。它可用于抑郁症状研究，但不再提供这一重要风险信息，不能承担自伤风险评估。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "VR-PH-001-004": {
    "relation": "PHQ-4不是单独从PHQ-9选4题：它把PHQ-2的抑郁核心题与GAD-2的焦虑核心题组合。它能给出两方面的简短概况，不能替代完整的PHQ-9或GAD-7。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PHQ完整问卷开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10568646/"
      },
      {
        "label": "PHQ-9开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
      }
    ]
  },
  "VR-PH-002-005": {
    "relation": "GAD-2保留GAD-7中的两个核心焦虑问题，用于更简短的初步筛查。与原始7题版相比，它减少了症状覆盖，得分范围和判断依据也不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A brief measure for assessing generalized anxiety disorder: the GAD-7.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16717171/"
      }
    ]
  },
  "VR-PH-003-006": {
    "relation": "这是DASS系列的42题原始结构，抑郁、焦虑、压力各14题。它提供比短版更完整的三个情绪维度信息，是理解DASS-21关系的基准。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "DASS开发者：工具及版本",
        "url": "https://dass.psy.unsw.edu.au/"
      }
    ]
  },
  "VR-PH-003-007": {
    "relation": "DASS-21从DASS-42各维度选7题，总共21题。三个维度保持，但题量减半；若为了与42题版常规分级比较而对分数乘2，应明确采用了哪套规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "DASS开发者：工具及版本",
        "url": "https://dass.psy.unsw.edu.au/"
      }
    ]
  },
  "VR-PH-003-008": {
    "relation": "DASS-Y将DASS的三个情绪维度适配到儿童青少年的语言与体验，使用21题。它不是把成人DASS-21原文直接给儿童填写，应使用青年版自身的解释依据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "DASS开发者：工具及版本",
        "url": "https://dass.psy.unsw.edu.au/"
      }
    ]
  },
  "VR-PH-004-009": {
    "relation": "PSS-14是最初的14题主观压力量表，关注生活被感知为不可控、不可预测或负担过重的程度。它是10题和4题形式的来源。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PSS原始开发研究",
        "url": "https://kilthub.cmu.edu/articles/journal_contribution/A_Global_Measure_of_Perceived_Stress/6613130"
      },
      {
        "label": "PSS各长度形式研究",
        "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/pdf/cohen%2C-s.--williamson%2C-g.-1988.pdf"
      }
    ]
  },
  "VR-PH-004-010": {
    "relation": "PSS-10从PSS-14缩减形成，继续关注同一种主观压力体验。它降低填写负担，但题量和总分范围变化，不能将原始总分与14题版直接比较。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PSS原始开发研究",
        "url": "https://kilthub.cmu.edu/articles/journal_contribution/A_Global_Measure_of_Perceived_Stress/6613130"
      },
      {
        "label": "PSS各长度形式研究",
        "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/pdf/cohen%2C-s.--williamson%2C-g.-1988.pdf"
      }
    ]
  },
  "VR-PH-004-011": {
    "relation": "PSS-4从PSS原始题组选择4个问题，适合调查空间极有限时获取简短压力指标。它提供的信息少于14题和10题版，不适合假定同等测量精度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PSS原始开发研究",
        "url": "https://kilthub.cmu.edu/articles/journal_contribution/A_Global_Measure_of_Perceived_Stress/6613130"
      },
      {
        "label": "PSS各长度形式研究",
        "url": "https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/pdf/cohen%2C-s.--williamson%2C-g.-1988.pdf"
      }
    ]
  },
  "VR-PH-005-012": {
    "relation": "K10是开发研究中的10题形式，K6的6个问题嵌在其中。它覆盖较多心理困扰体验；使用时要说明每题采用0–4还是1–5编码。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "K10与K6共同开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12214795/"
      }
    ]
  },
  "VR-PH-005-013": {
    "relation": "K6由K10题组中的6题组成，两者在同一开发项目中形成。K6更简短，但总分与K10不同；不能把相同数字解释成相同困扰程度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "K10与K6共同开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12214795/"
      }
    ]
  },
  "VR-PH-005-014": {
    "relation": "这个记录指K6或K10核心题之外附加的持续时间、活动受限等问题。补充内容帮助了解影响，不应被混入核心K6或K10总分，也不代表一种统一的新短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "K10与K6共同开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12214795/"
      }
    ]
  },
  "VR-PH-006-015": {
    "relation": "GHQ-60是早期完整问卷，提供较广的心理困扰与功能变化信息。后续不同长度的GHQ从这套框架缩减或重新组织。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "VR-PH-006-016": {
    "relation": "GHQ-30是相对于60题版的缩减形式，继续用于心理困扰的初步识别。它保留的题目和计分解释有自身依据，不能把GHQ-60结果简单减半。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "VR-PH-006-017": {
    "relation": "GHQ-28以28题组成4个7题维度，相较GHQ-60不仅减少题目，也强调领域结构。需要区分维度得分、总体得分及所用编码方法。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "VR-PH-006-018": {
    "relation": "GHQ-12用12题提供简短心理困扰指标，适合大规模调查。它不是GHQ-28的4个维度各取等量题目，GHQ编码与Likert编码的结果也不能混用。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      }
    ]
  },
  "VR-PH-007-019": {
    "relation": "这是WHO幸福感系列早期较长的28题记录，位于10题与5题形式之前。它与WHO-5的内容覆盖和结构不同，不能用WHO-5的总分规则回算；具体历史表单仍应核对原始材料。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHO-5官方介绍",
        "url": "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01"
      },
      {
        "label": "WHO-5历史综述",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25831962/"
      }
    ]
  },
  "VR-PH-007-020": {
    "relation": "WHO-10在较长幸福感问卷基础上形成10题形式，包含正负向体验；WHO-5进一步集中于积极幸福感。两者不是仅删除任意5题后的可互换分数。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHO-5官方介绍",
        "url": "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01"
      },
      {
        "label": "WHO-5历史综述",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25831962/"
      }
    ]
  },
  "VR-PH-008-021": {
    "relation": "这是CES-D的20题原始结构，关注过去一周抑郁症状频率，包含积极情感的反向计分题。后续短版应与该题目框架比较。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-PH-008-022": {
    "relation": "CESD-R在CES-D基础上按更新的抑郁症状框架修订，不能仅当作原20题表的改名。题目内容和结果解释应按修订版说明。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-PH-008-023": {
    "relation": "这是从20题CES-D缩减的10题形式，本记录对应Andresen短版脉络。其他同为10题的选题组合可能不同，需核对研究来源，不能只凭CES-D-10简称认定一致。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-PH-008-024": {
    "relation": "CES-D-8是从原20题框架缩减的调查形式，减少了症状覆盖。8题版本的选题及回答格式可随调查方案变化，使用时须核对具体表单。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-PH-008-025": {
    "relation": "CES-DC把CES-D的抑郁症状评估适配到儿童青少年，保留20题形式。它是年龄适配，不是成人量表直接更换标题；解释需匹配儿童青少年证据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CES-D原始开发研究",
        "url": "https://doi.org/10.1177/014662167700100306"
      }
    ]
  },
  "VR-SL-001-026": {
    "relation": "这是PSQI原始完整结构的具体记录，与本库PSQI基准记录指向同一工具，不是新变体。自评题组织成7个组成分，旁人观察题不纳入通常的自评总体分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2748771/"
      }
    ]
  },
  "VR-SL-001-027": {
    "relation": "B-PSQI是为减少填写负担而形成的简版睡眠质量工具，内容少于完整PSQI。它应按简版自身的题目和计分理解，不能自动使用完整PSQI的所有组成分或界点。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2748771/"
      }
    ]
  },
  "VR-SL-002-028": {
    "relation": "该ISI表单保留7题，以最近2周为回顾时间。与1个月表单的主要区别是时间窗口，而非失眠概念或题数；纵向比较应保持回顾时间一致。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "VR-SL-002-029": {
    "relation": "该ISI表单保留7题，以最近1个月为回顾时间。它与2周形式属于时间窗口适配，不是更长的题目版本。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "VR-SL-002-030": {
    "relation": "临床评定ISI由临床人员评价相应失眠问题，区别于患者对自身睡眠的报告。观察者变化可能带来不同判断，不能假定与自评分数完全一致。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "VR-SL-002-031": {
    "relation": "重要他人评定ISI由熟悉受试者的人提供观察，补充患者自评。它的变化在报告者，不在题数；无法被他人直接观察的体验尤其需要谨慎解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Validation of the Insomnia Severity Index as an outcome measure for insomnia research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11438246/"
      }
    ]
  },
  "VR-SL-003-032": {
    "relation": "本记录为ESS成人标准表单脉络，1997年的调整主要涉及措辞。它延续原8情境嗜睡测量，不是19题PSQI的缩短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A new method for measuring daytime sleepiness: the Epworth sleepiness scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1798888/"
      }
    ]
  },
  "VR-SL-003-033": {
    "relation": "ESS-CHAD在成人ESS的框架上改换不适合儿童青少年的情境，仍关注8种情境中的嗜睡。必须使用年龄适合的表单和验证依据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A new method for measuring daytime sleepiness: the Epworth sleepiness scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1798888/"
      }
    ]
  },
  "VR-SL-004-034": {
    "relation": "AIS-8是完整8题形式，前5题描述夜间睡眠，后3题描述白天状态。它与AIS-5在原始验证中共同出现。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
      }
    ]
  },
  "VR-SL-004-035": {
    "relation": "AIS-5仅保留AIS-8的前5个夜间睡眠问题，不包含后3个日间影响问题。它更集中于夜间困难，分数范围也因此不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
      }
    ]
  },
  "VR-SL-004-036": {
    "relation": "AIS-NCA对AIS作非临床情境适配，题目与回答结构均有变化。它不能仅被标注为标准AIS-8的中文翻译或5题简版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11033374/"
      }
    ]
  },
  "VR-QL-001-037": {
    "relation": "WHOQOL-100是完整的100题生活质量工具，是BREF简版的来源。它提供较细的生活质量方面信息，适合需要详细领域画像的研究。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHOQOL官方工具说明",
        "url": "https://www.who.int/tools/whoqol"
      }
    ]
  },
  "VR-QL-001-038": {
    "relation": "WHOQOL-BREF从WHOQOL-100缩减成26题，提供4个领域及总体生活质量相关题。短版保留综合视角，但不再覆盖完整100题的全部细分信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHOQOL官方工具说明",
        "url": "https://www.who.int/tools/whoqol"
      }
    ]
  },
  "VR-QL-002-039": {
    "relation": "本记录为SF-36第1版的标准回顾形式，延续早期MOS SF-36的8领域结构。它是与v2及急性回顾形式比较的版本基准。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "VR-QL-002-040": {
    "relation": "与SF-36v1标准版相比，急性版主要缩短回顾时间，以更敏感地反映近期状态。题数相同不表示施测时间窗口相同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "VR-QL-002-041": {
    "relation": "SF-36v2是第1版的修订形式，涉及措辞、回答格式等改进。它保留36题和健康领域框架，但应使用v2匹配的计分与常模。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "VR-QL-002-042": {
    "relation": "这是SF-36v2的急性回顾形式，兼有v2修订和较短回顾时间两项变化。它与v1标准版比较时，需同时考虑版本与时间窗口。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://www.qualitymetric.com/health-surveys/the-sf-36v2-health-survey/"
      }
    ]
  },
  "VR-QL-003-043": {
    "relation": "SF-12v1从SF-36选取12题并建立身体、心理健康汇总计分，是SF-12的早期形式。它以较少题目估计汇总信息，而非完整重现SF-36各细分领域。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8628042/"
      }
    ]
  },
  "VR-QL-003-044": {
    "relation": "SF-12v2是SF-12v1的修订形式，仍使用12题形成健康汇总指标。回答格式、算法或常模必须与版本对应，不能因题数相同而混算。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8628042/"
      }
    ]
  },
  "VR-QL-003-045": {
    "relation": "本记录汇总SF-12的急性回顾形式，其核心变化是缩短回顾时间。实际使用还需明确v1或v2；这个集合名称本身不足以确定唯一表单。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "A 12-Item Short-Form Health Survey: construction of scales and preliminary tests of reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8628042/"
      }
    ]
  },
  "VR-QL-004-046": {
    "relation": "EQ-5D-3L是标准三水平形式：5个健康维度各有3级回答，另有EQ VAS。它是理解5L增加回答精细度的比较基准。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-QL-004-047": {
    "relation": "EQ-5D-5L保留5个健康维度，将每个维度的回答扩展为5级，以更细致描述状态。它不是增加到5个问题的短表，价值集也须匹配5L。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-QL-004-048": {
    "relation": "EQ-5D-Y-3L将成人EQ-5D的表达适配到儿童青少年，采用3级回答。它与成人3L并非逐字相同，不能直接沿用成人价值集。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-QL-004-049": {
    "relation": "EQ-5D-Y-5L在儿童青少年Y版表述框架内增加至5级回答，改善状态区分。它与成人5L及儿童3L都应分别理解；本库另有同名记录，属于同一工具的重复收录线索。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-QL-005-050": {
    "relation": "本记录汇总成人PROMIS Global Health早期v1.0/v1.1形式，用10题描述整体健康并形成身体、心理汇总指标。具体施测仍应注明究竟使用哪一版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-051": {
    "relation": "v1.2是成人Global Health的版本更新，延续整体健康测量。应使用相应版本说明和计分，不能凭“10题”判断与v1.0/v1.1完全一致。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-052": {
    "relation": "这一2题短形式聚焦Global Mental相关内容，来自成人Global Health体系。它只覆盖所指定的心理健康部分，不等于完整10题健康画像。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-053": {
    "relation": "这一2题短形式聚焦Global Physical相关内容，来自成人Global Health体系。它与心理2题表测量目标不同，也不能代替完整10题表。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-054": {
    "relation": "4题Global Mental Health形式聚焦成人Global Health体系的心理健康汇总内容。它不是把身体和心理部分各取2题的总体短表。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-055": {
    "relation": "4题Global Physical Health形式聚焦成人Global Health体系的身体健康汇总内容。解释时应区分身体、心理汇总和原10题中的其他信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-056": {
    "relation": "儿童Global Health形式按儿童体验和语言设计，使用7题。它属于年龄适配的测量分支，不是从成人10题直接删去3题即可得到。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-057": {
    "relation": "家长代理Global Health由家长评价孩子的健康，使用7题。它对应代理视角，不代表孩子本人感受，可与儿童自评互补但不可直接等同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-005-058": {
    "relation": "幼儿家长报告Global Health针对幼儿阶段及家长观察设计，使用8题。年龄和报告者都与成人工具不同，不能沿用成人常模。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PROMIS官方Global Health版本及计分手册",
        "url": "https://www.healthmeasures.net/administrator/components/com_instruments/uploads/PROMIS%20Global%20Health%20Scoring%20Manual_30Aug2024.pdf"
      },
      {
        "label": "儿童Global Health开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24264804/"
      }
    ]
  },
  "VR-QL-006-059": {
    "relation": "这是原始SWLS的5题、7级回答形式。数字7表示每题回答选项数，不表示问卷有7题。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Satisfaction With Life Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16367493/"
      }
    ]
  },
  "VR-QL-006-060": {
    "relation": "该SWLS保留5题而采用5级回答，相对于原始7级回答形式改变了反应格式。总分范围随之变化，应采用相应适配证据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Satisfaction With Life Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16367493/"
      }
    ]
  },
  "VR-HL-001-061": {
    "relation": "HLS-EU-Q47是综合健康素养核心完整形式，47题覆盖获取、理解、判断和应用信息的任务。它是同框架短表的参照。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring health literacy in populations: illuminating the design and development process of the European Health Literacy Survey Questionnaire (HLS-EU-Q).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24112855/"
      }
    ]
  },
  "VR-HL-001-062": {
    "relation": "HLS-EU-Q16从47题形式缩减，适合调查篇幅有限时使用。它减少题目，常用分类和计分处理也与Q47不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring health literacy in populations: illuminating the design and development process of the European Health Literacy Survey Questionnaire (HLS-EU-Q).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24112855/"
      }
    ]
  },
  "VR-HL-001-063": {
    "relation": "HLS19-Q12是在后续HLS19调查体系中开发的12题综合工具，承接HLS-EU概念框架。它不是HLS-SF12的别名，题目及方法应分别核对。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring health literacy in populations: illuminating the design and development process of the European Health Literacy Survey Questionnaire (HLS-EU-Q).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24112855/"
      }
    ]
  },
  "VR-HL-002-064": {
    "relation": "HLS-SF12从HLS-EU体系形成12题短工具，本记录与本系列大类指向同一短表。它不是HLS19-Q12，也不应把亚洲验证中的适用性直接推广到所有人群。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "HLS-SF12开发研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31294310/"
      },
      {
        "label": "12题工具早期研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28388977/"
      }
    ]
  },
  "VR-SS-002-065": {
    "relation": "这是1978年UCLA孤独量表原始20题形式，主要采用表达孤独的负向题。后来的修订版为减少固定回答倾向调整了题目表述。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-066": {
    "relation": "R-UCLA是原20题量表的修订，加入正反向表述以改进测量。题数仍为20，但不代表题目与原版完全相同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-067": {
    "relation": "UCLA第3版继续修订20题工具的表达并检验测量结构。它是修订版而非20题原版的单纯重印。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-068": {
    "relation": "3题孤独量表以UCLA的测量脉络形成，适合简短调查。它不能提供20题工具同样丰富的信息，具体回答与计分需使用3题形式依据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-069": {
    "relation": "ULS-8是8题短形式，从较长UCLA量表框架缩减而来。不同短表不是逐级删题的必然链条，应核对其选题来源。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-070": {
    "relation": "4题调查形式以UCLA题目框架测量孤独感，但“4题”不足以锁定唯一组合。应核对该调查使用的题目和回答选项，再与原版比较。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-002-071": {
    "relation": "该10题形式以UCLA第3版为来源进行缩减，区别于1978年原版直接截取前10题。具体选题组合和验证依据仍需按所用表单确认。",
    "evidenceNote": "具体历史表单或选题关系尚未完全核实；不据此认定版本等价。",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      },
      {
        "label": "UCLA第3版10题与3题形式验证",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6660924/"
      }
    ]
  },
  "VR-SS-002-072": {
    "relation": "ULS-6是Neto脉络的6题缩减形式，继续测量主观孤独感。它与其他UCLA短表是不同选题方案，不能按题数比例换算。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8576833/"
      }
    ]
  },
  "VR-SS-003-073": {
    "relation": "LSNS-18是早期LSNS之后的扩展形式，增加社会网络覆盖，不是本系列的历史原版。它提供较详细的网络信息，不能与6题总分直接比较。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发者：LSNS发展与用途",
        "url": "https://www.bc.edu/bc-web/schools/ssw/sites/lubben/description.html"
      }
    ]
  },
  "VR-SS-003-074": {
    "relation": "LSNS-R是对早期LSNS的修订，采用12题结构。它位于LSNS发展脉络中，不应被写成LSNS-18简单删去6题。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发者：LSNS发展与用途",
        "url": "https://www.bc.edu/bc-web/schools/ssw/sites/lubben/description.html"
      }
    ]
  },
  "VR-SS-003-075": {
    "relation": "LSNS-6以家庭和朋友两个部分提供简短社会网络指标，是后续缩减形式。它适合快速识别隔离风险，但不覆盖扩展表的全部网络信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发者：LSNS发展与用途",
        "url": "https://www.bc.edu/bc-web/schools/ssw/sites/lubben/description.html"
      }
    ]
  },
  "VR-SS-005-076": {
    "relation": "这是MOS社会支持调查的19个功能支持题形式，另可能记录网络人数等结构信息。结构问题不应直接混入19题功能支持得分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The MOS social support survey.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2035047/"
      }
    ]
  },
  "VR-SS-005-077": {
    "relation": "mMOS-SS-8从MOS支持测量中缩减为8题，重点保留情感和实际帮助等核心功能。它不完整复制原19题的所有领域，需采用短表自身的验证与计分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The MOS social support survey.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2035047/"
      },
      {
        "label": "8题mMOS-SS验证研究",
        "url": "https://doi.org/10.1016/j.jclinepi.2012.04.007"
      }
    ]
  },
  "VR-HB-001-078": {
    "relation": "这是IPAQ短表，提供步行及不同强度活动的简要总览；采用自填方式，回顾过去7天。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-079": {
    "relation": "这是IPAQ短表，提供步行及不同强度活动的简要总览；采用电话访谈方式，回顾过去7天。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-080": {
    "relation": "这是IPAQ长表，按工作、交通、家务和休闲等领域记录活动；采用自填方式，回顾过去7天。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-081": {
    "relation": "这是IPAQ长表，按工作、交通、家务和休闲等领域记录活动；采用电话访谈方式，回顾过去7天。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-003-082": {
    "relation": "本记录为AUDIT原始10题完整工具，与大类入口不是两张不同问卷。它覆盖饮酒消费、依赖相关表现及饮酒危害。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Development of the Alcohol Use Disorders Identification Test (AUDIT): WHO Collaborative Project on Early Detection of Persons with Harmful Alcohol Consumption--II.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8329970/"
      }
    ]
  },
  "VR-HB-004-083": {
    "relation": "AUDIT-C抽取完整AUDIT的前3个饮酒消费问题。它更快，但不再直接询问完整表后续的依赖或危害内容。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The AUDIT alcohol consumption questions (AUDIT-C): an effective brief screening test for problem drinking. Ambulatory Care Quality Improvement Project (ACQUIP). Alcohol Use Disorders Identification Test.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9738608/"
      }
    ]
  },
  "VR-HB-005-084": {
    "relation": "FTQ是Fagerström系列较早的8题工具。后续FTND从它修订而来，删除部分题目并改变部分计分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Fagerström Test for Nicotine Dependence: a revision of the Fagerström Tolerance Questionnaire.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1932883/"
      }
    ]
  },
  "VR-HB-005-085": {
    "relation": "FTND是FTQ的6题修订形式，而非另一种没有来源关系的依赖测量。它保留关键吸烟行为并调整计分，不能用FTQ规则计分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Fagerström Test for Nicotine Dependence: a revision of the Fagerström Tolerance Questionnaire.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1932883/"
      }
    ]
  },
  "VR-HB-006-086": {
    "relation": "CAGE-AID将CAGE的4题问题框架扩展到酒精和其他物质。它改变了筛查对象范围，不能把结果当作只涉及饮酒。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CAGE经典文献",
        "url": "https://doi.org/10.1001/jama.1984.03350140051025"
      }
    ]
  },
  "VR-MA-001-087": {
    "relation": "Morisky 4题形式是该依从性系列的早期工具，询问常见未按要求用药行为。它是后续8题扩展的重要参照。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Concurrent and predictive validity of a self-reported measure of medication adherence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3945130/"
      }
    ]
  },
  "VR-MA-001-088": {
    "relation": "MMAS-8在早期4题依从性测量基础上增加情境与题目。它提供更多行为信息，计分格式也不同；与4题版不能直接换算。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Concurrent and predictive validity of a self-reported measure of medication adherence.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3945130/"
      }
    ]
  },
  "VR-OH-001-089": {
    "relation": "MBI-HSS延续MBI最初助人职业框架，关注服务工作中的耗竭、疏离和成就感。它适用于有服务对象的职业，不等于一般职业GS版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "VR-OH-001-090": {
    "relation": "MBI-HSS(MP)从HSS适配医务人员，把服务对象明确为患者。主要变化是职业情境和表述，仍不同于一般职业GS。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "VR-OH-001-091": {
    "relation": "MBI-GS将MBI扩展到更广泛职业，使用耗竭、玩世不恭或工作疏离、职业效能等维度。它不是HSS直接删掉若干题，维度措辞和计分都要对应。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "VR-OH-001-092": {
    "relation": "MBI-ES将助人职业框架适配教育情境，围绕与学生相关的工作体验。它与HSS题数相同也不能直接替代表单。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "MBI出版方版本对照",
        "url": "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi"
      }
    ]
  },
  "VR-OH-005-093": {
    "relation": "ERI长表提供努力、回报以及相关过度投入的较完整测量。它是短表比较的重要参照，但不同语言或历史形式仍要核对手册。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ERI原始理论与测量",
        "url": "https://doi.org/10.1037/1076-8998.1.1.27"
      }
    ]
  },
  "VR-OH-005-094": {
    "relation": "ERI短表从较长工具缩减形成，减少各维度题量。努力回报比需要相应的题数校正，不能只对长表总分做比例压缩。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ERI原始理论与测量",
        "url": "https://doi.org/10.1037/1076-8998.1.1.27"
      }
    ]
  },
  "VR-AG-004-095": {
    "relation": "这是Barthel指数原始10项日常生活活动评估的0–100计分形式，用于描述基本活动的独立程度。它是后续评分形式和修改版的参照。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14258950/"
      }
    ]
  },
  "VR-AG-004-096": {
    "relation": "0–20形式保留Barthel基本生活活动框架，用不同计分尺度表达。应先核对题目等级是否一致，不能仅凭量表名称就认定能按5倍换算。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14258950/"
      }
    ]
  },
  "VR-AG-004-097": {
    "relation": "修改Barthel指数对原工具的帮助程度分级作进一步细化，常用0–100形式。它改变的可能不只是单位，需与原版区分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "开发资料",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14258950/"
      }
    ]
  },
  "VR-AG-006-098": {
    "relation": "MNA-SF从18项完整MNA选取6项，用BMI作为身体测量信息之一。它适合快速营养筛查，但不等于完整营养评估。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Screening for undernutrition in geriatric practice: developing the short-form mini-nutritional assessment (MNA-SF).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11382797/"
      }
    ]
  },
  "VR-AG-006-099": {
    "relation": "小腿围形式在修订MNA-SF中用小腿围替代BMI，便于无法可靠测得身高或体重时评估。替代的是身体测量选项，不是另加一项。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Screening for undernutrition in geriatric practice: developing the short-form mini-nutritional assessment (MNA-SF).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11382797/"
      }
    ]
  },
  "VR-AG-006-100": {
    "relation": "18项完整MNA是本系列短版的来源，包含更全面的营养相关信息。它不是在MNA-SF之后简单添加12题的新工具。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Screening for undernutrition in geriatric practice: developing the short-form mini-nutritional assessment (MNA-SF).",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11382797/"
      }
    ]
  },
  "VR-MC-002-101": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由家长报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-102": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由家长报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-103": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由家长报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-104": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由教师报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-105": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由教师报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-106": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由教师报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-107": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由儿童青少年本人报告。这是对应年龄和报告者的标准形式，区别主要在适龄表达与观察视角；不同报告者分数不能当作同一次自评互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-108": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由家长报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-109": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由家长报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-110": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由家长报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-111": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由教师报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-112": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由教师报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-113": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由教师报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-114": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由儿童青少年本人报告。在核心题外增加影响补充表，进一步了解困难是否造成困扰或生活影响；补充部分不等于新增核心维度。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-115": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由家长报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-116": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由家长报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-117": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由家长报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-118": {
    "relation": "该SDQ以25题核心框架为基础，面向2–4岁，由教师报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-119": {
    "relation": "该SDQ以25题核心框架为基础，面向4–10岁，由教师报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-120": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由教师报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-002-121": {
    "relation": "该SDQ以25题核心框架为基础，面向11–17岁，由儿童青少年本人报告。这是随访形式，用于了解干预或时间推移后的情况，包含随访及影响相关问题；不是原始横断面表的简短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "SDQ官方版本表单",
        "url": "https://www.sdqinfo.org/py/sdqinfo/b0.py"
      }
    ]
  },
  "VR-MC-003-122": {
    "relation": "本记录为PedsQL 4.0通用核心的儿童自评形式，了解身体、情绪、社会及学校生活。它属于已经历发展的通用核心；由孩子表达自身感受，需使用其年龄适合的表单。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-003-123": {
    "relation": "本记录为PedsQL 4.0通用核心的家长代理报告形式，了解身体、情绪、社会及学校生活。它属于已经历发展的通用核心；由家长观察孩子的生活质量，与孩子自评是互补视角，不代表两者必然相同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-004-124": {
    "relation": "该记录是KIDSCREEN-52儿童青少年自评形式。52题是详细基准，提供10个领域的信息。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-004-125": {
    "relation": "该记录是KIDSCREEN-52家长代理形式。52题是详细基准，提供10个领域的信息。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-004-126": {
    "relation": "该记录是KIDSCREEN-27儿童青少年自评形式。从52题详细形式缩减成27题，汇总为5个领域。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-004-127": {
    "relation": "该记录是KIDSCREEN-27家长代理形式。从52题详细形式缩减成27题，汇总为5个领域。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-004-128": {
    "relation": "该记录是KIDSCREEN-10儿童青少年自评形式。10题指数承接较长表的总体生活质量测量，重点提供整体指标，不保留52题全部领域画像。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-004-129": {
    "relation": "该记录是KIDSCREEN-10家长代理形式。10题指数承接较长表的总体生活质量测量，重点提供整体指标，不保留52题全部领域画像。报告者改变的是观察视角，不能与另一报告者的分数机械互换。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "KIDSCREEN开发项目：版本说明",
        "url": "https://www.kidscreen.org/english/questionnaires/"
      }
    ]
  },
  "VR-MC-005-130": {
    "relation": "ASQ-3是ASQ发育筛查体系的第3版，包含21张月龄问卷。不同月龄表的题目随发育阶段改变，不能把全部问卷加在一起计算总分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-131": {
    "relation": "ASQ:SE-2是社会情绪筛查分支的第2版，关注自我调节、沟通互动等社会情绪表现。它与ASQ-3互补，不是ASQ-3删题得到的短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-PE-003-132": {
    "relation": "SDM-Q-9从早期SDM-Q重新选题、修订回答格式后形成9题患者报告工具。它评估共同决策过程，原始较长问卷与9题版不可直接混用。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The 9-item Shared Decision Making Questionnaire (SDM-Q-9). Development and psychometric properties in a primary care sample.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19879711/"
      }
    ]
  },
  "VR-PE-002-133": {
    "relation": "CG-CAHPS成人3.1面向成人在门诊医生或诊所的服务体验，是CAHPS项目下的具体场景调查。它不是医院HCAHPS的短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-134": {
    "relation": "CG-CAHPS儿童3.1由家长等报告儿童门诊服务体验，区别于成人表的照护对象和部分内容。它是同场景的对象适配。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-135": {
    "relation": "CG-CAHPS Visit 4.0 beta聚焦具体就诊体验，属于后续试验版本。它与3.1的回顾方式和内容可能不同，beta不应被写成已经取代全部旧版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-136": {
    "relation": "HCAHPS面向住院患者体验，是CAHPS体系的医院调查。它依据住院情境开发，并不是把门诊表换成医院名称。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-137": {
    "relation": "HHCAHPS关注居家医疗护理体验，属于CAHPS的另一服务场景分支。它不能与住院或门诊问卷使用同一分数解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-138": {
    "relation": "CAHPS Health Plan商业保险表了解参保者对保险计划及获得服务的体验。与医生或医院调查相比，它评价的对象层级不同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-002-139": {
    "relation": "CAHPS Health Plan Medicaid表针对相应保险项目背景，承接Health Plan调查框架。它与商业保险形式应按各自对象和表单解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "AHRQ：CAHPS各场景调查",
        "url": "https://www.ahrq.gov/cahps/surveys-guidance/index.html"
      }
    ]
  },
  "VR-PE-003-140": {
    "relation": "SDM-Q-Doc将共同决策过程从医生视角报告，对应患者SDM-Q-9所关注的过程。它不是患者版的缩短形式，双方评分不一致本身可能有研究意义。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The 9-item Shared Decision Making Questionnaire (SDM-Q-9). Development and psychometric properties in a primary care sample.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19879711/"
      }
    ]
  },
  "VR-KA-002-141": {
    "relation": "5C长表在同一开发研究中与短表共同形成，15题为5个心理维度各提供多题信息。它并不是所有疫苗犹豫工具的原版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Beyond confidence: Development of a measure assessing the 5C psychological antecedents of vaccination.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30532274/"
      }
    ]
  },
  "VR-KA-002-142": {
    "relation": "5C短表以5题分别代表5个维度，适合篇幅有限的调查。与15题形式相比，每个维度只有单题，无法提供同等丰富的信息。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Beyond confidence: Development of a measure assessing the 5C psychological antecedents of vaccination.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30532274/"
      }
    ]
  },
  "VR-PH-006-143": {
    "relation": "GHQ-20是GHQ系列中报道的20题形式，但其具体历史表单与选题来源需要进一步核实。不要仅按名称认定它是GHQ-60固定删去40题的唯一版本。",
    "evidenceNote": "具体历史表单或选题关系尚未完全核实；不据此认定版本等价。",
    "sources": [
      {
        "label": "GHQ出版方版本说明",
        "url": "https://support.gl-education.com/knowledge-base/assessments/general-health-questionnaire-support/about-the-general-health-questionnaire/faqs"
      },
      {
        "label": "中文版GHQ-20形成研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8378807/"
      },
      {
        "label": "GHQ-20人群调查研究",
        "url": "https://doi.org/10.1017/S0033291700037442"
      }
    ]
  },
  "VR-SL-001-144": {
    "relation": "PSQI-A在PSQI框架外补充与创伤后应激相关的夜间行为问题。它是补充工具而非替代完整PSQI的7题短版，两套分数应分别处理。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The Pittsburgh Sleep Quality Index: a new instrument for psychiatric practice and research.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2748771/"
      }
    ]
  },
  "VR-HB-001-145": {
    "relation": "这是IPAQ短表，提供步行及不同强度活动的简要总览；采用自填方式，回顾通常一周。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-146": {
    "relation": "这是IPAQ短表，提供步行及不同强度活动的简要总览；采用电话访谈方式，回顾通常一周。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-147": {
    "relation": "这是IPAQ长表，按工作、交通、家务和休闲等领域记录活动；采用自填方式，回顾通常一周。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-001-148": {
    "relation": "这是IPAQ长表，按工作、交通、家务和休闲等领域记录活动；采用电话访谈方式，回顾通常一周。长短表和这些施测形式在开发中并行测试，不是逐代替换；跨形式比较须保持回顾窗口和分析规则清楚。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "International physical activity questionnaire: 12-country reliability and validity.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12900694/"
      }
    ]
  },
  "VR-HB-002-149": {
    "relation": "GPAQ v1是早期问卷形式，之后更新为v2。比较历史数据时应核对题目及分析规则；不能仅因为同属GPAQ就忽略版本差异。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "WHO身体活动监测工具",
        "url": "https://www.who.int/teams/noncommunicable-diseases/surveillance/systems-tools/physical-activity-surveillance"
      }
    ]
  },
  "VR-MA-002-150": {
    "relation": "MARS-5源于Horne的Medication Adherence Report Scale，是其较长Report Scale的短形式。它不属于Thompson的Medication Adherence Rating Scale缩减链，虽然两者都使用MARS简称。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Report Scale开发者研究",
        "url": "https://doi.org/10.1111/bcp.14193"
      }
    ]
  },
  "VR-OH-003-151": {
    "relation": "OLBI-S将职业版OLBI适配学习情境，关注学习耗竭与疏离。它不是减少题量的短版，研究对象及验证证据须对应学生。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The job demands-resources model of burnout.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11419809/"
      }
    ]
  },
  "VR-OH-002-152": {
    "relation": "CBI学生形式把原19题职业耗竭框架适配学习情境。CBI-S和CBI-SS等简称可能涉及不同研究方案，不能认定存在一套固定25题的通用标准表。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "CBI开发机构",
        "url": "https://nfa.dk/vaerktoejer/spoergeskemaer/spoergeskema-til-maaling-af-udbraendthed-cbi/copenhagen-burnout-inventory-cbi"
      }
    ]
  },
  "VR-OH-004-153": {
    "relation": "ProQOL III属于该工具发展的较早修订版本，承接同情疲劳及满足的测量脉络。它不是当前ProQOL 5的短表，解释应对应历史手册。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ProQOL官方说明",
        "url": "https://proqol.org/faq"
      },
      {
        "label": "ProQOL历史手册",
        "url": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf"
      }
    ]
  },
  "VR-OH-004-154": {
    "relation": "ProQOL IV位于III与5之间的修订脉络，延续助人工作的正负体验评估。不能因为常见题数相同就混用版本措辞或常模。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ProQOL官方说明",
        "url": "https://proqol.org/faq"
      },
      {
        "label": "ProQOL历史手册",
        "url": "https://compassionfatigue.org/pages/ProQOLManualOct05.pdf"
      }
    ]
  },
  "VR-AG-005-155": {
    "relation": "该记录反映Lawton IADL历史上按性别生活分工采用5项或8项计分的做法。它属于评分方案差异，不能当作一种现代男女能力差异的标准。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Assessment of older people: self-maintaining and instrumental activities of daily living.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/5349366/"
      }
    ]
  },
  "VR-MC-001-156": {
    "relation": "EPDS5R是Rochat等2013年研究评估的5题短形式，从10题EPDS中选题，用于南非受HIV影响地区孕妇的产前抑郁筛查。它减少填答负担，但不能自动继承原版界点，也不代表适用于所有孕产妇的统一修订版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3651732/"
      },
      {
        "label": "EPDS5R与EPDS3R研究（Rochat等，2013）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23615932/"
      }
    ]
  },
  "VR-MC-001-157": {
    "relation": "EPDS3R是Rochat等2013年研究评估的3题超短形式，与同研究的5题形式均以10题EPDS为基础，用于产前抑郁识别。它不同于关注焦虑的EPDS-3A；题数相同不代表所选题目、目标和界点相同。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Detection of postnatal depression. Development of the 10-item Edinburgh Postnatal Depression Scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3651732/"
      },
      {
        "label": "EPDS5R与EPDS3R研究（Rochat等，2013）",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23615932/"
      }
    ]
  },
  "VR-MC-003-158": {
    "relation": "PedsQL哮喘模块在通用生活质量框架之外加入哮喘及治疗相关问题。它是疾病专项补充，不是4.0通用核心的缩短版。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-003-159": {
    "relation": "PedsQL糖尿病模块围绕糖尿病症状及治疗生活负担展开。它属于疾病专项分支，不能替代通用核心所测的全部生活质量领域。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-003-160": {
    "relation": "PedsQL肿瘤模块补充肿瘤及治疗相关生活体验。它可与通用核心配套，数字3.0与通用核心4.0不表示两者有简单先后替代关系。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-003-161": {
    "relation": "PedsQL心脏病模块按疾病相关问题组织题目，是专项模块。应核对具体年龄及报告者形式，不按通用核心总分规则替代计分。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-MC-003-162": {
    "relation": "PedsQL风湿病模块关注这类疾病及治疗对儿童生活的影响。它与通用核心互补，而非从核心23题选出22题。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "PedsQL开发者说明",
        "url": "https://www.pedsql.org/about_pedsql.html"
      }
    ]
  },
  "VR-KA-001-163": {
    "relation": "VHS家长形式关注对儿童疫苗的信任和风险顾虑，是早期应用的重要形式。它不应直接改用于成人自身疫苗而不说明适配。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring vaccine hesitancy: The development of a survey tool.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25896384/"
      }
    ]
  },
  "VR-KA-001-164": {
    "relation": "aVHS将疫苗犹豫问题适配成人自身接种情境，与家长评价儿童疫苗的对象不同。需要使用成人版的开发或验证依据。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "Measuring vaccine hesitancy: The development of a survey tool.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25896384/"
      },
      {
        "label": "成人疫苗犹豫量表改编研究",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33769209/"
      }
    ]
  },
  "VR-QL-004-165": {
    "relation": "该记录与本库另一EQ-5D-Y-5L记录指向同一儿童青少年五水平工具。它不是在Y-5L之后再修订的新一代，区别目前在收录记录而非问卷本身。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "EuroQol工具及版本",
        "url": "https://euroqol.org/information-and-support/euroqol-instruments/"
      }
    ]
  },
  "VR-MA-004-166": {
    "relation": "这是SDSCA修订工具的核心11题记录，用于描述主要糖尿病自我管理行为。它承接早期SDSCA，维度应分别解释。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The summary of diabetes self-care activities measure: results from 7 studies and a revised scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10895844/"
      }
    ]
  },
  "VR-MA-004-167": {
    "relation": "扩展题组在SDSCA核心部分之外增加可选内容，以覆盖更多管理行为。它是扩展题组而非已验证的单一25题总分量表，应说明实际采用哪些题。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "The summary of diabetes self-care activities measure: results from 7 studies and a revised scale.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10895844/"
      }
    ]
  },
  "VR-MC-005-168": {
    "relation": "这是ASQ-3第3版中的2月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-169": {
    "relation": "这是ASQ-3第3版中的4月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-170": {
    "relation": "这是ASQ-3第3版中的6月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-171": {
    "relation": "这是ASQ-3第3版中的8月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-172": {
    "relation": "这是ASQ-3第3版中的9月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-173": {
    "relation": "这是ASQ-3第3版中的10月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-174": {
    "relation": "这是ASQ-3第3版中的12月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-175": {
    "relation": "这是ASQ-3第3版中的14月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-176": {
    "relation": "这是ASQ-3第3版中的16月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-177": {
    "relation": "这是ASQ-3第3版中的18月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-178": {
    "relation": "这是ASQ-3第3版中的20月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-179": {
    "relation": "这是ASQ-3第3版中的22月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-180": {
    "relation": "这是ASQ-3第3版中的24月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-181": {
    "relation": "这是ASQ-3第3版中的27月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-182": {
    "relation": "这是ASQ-3第3版中的30月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-183": {
    "relation": "这是ASQ-3第3版中的33月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-184": {
    "relation": "这是ASQ-3第3版中的36月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-185": {
    "relation": "这是ASQ-3第3版中的42月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-186": {
    "relation": "这是ASQ-3第3版中的48月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-187": {
    "relation": "这是ASQ-3第3版中的54月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  },
  "VR-MC-005-188": {
    "relation": "这是ASQ-3第3版中的60月龄问卷，仍按沟通、大动作、精细动作、问题解决和个人社会5个领域组织30题。它相对于同版其他月龄表改变的是发育任务与年龄界点，不是上一月龄问卷的升级替代。选表应按官方年龄区间和早产校正规则。",
    "evidenceNote": "",
    "sources": [
      {
        "label": "ASQ-3官方介绍",
        "url": "https://agesandstages.com/products-pricing/asq3/"
      },
      {
        "label": "ASQ:SE-2官方介绍",
        "url": "https://agesandstages.com/products-pricing/asqse-2/"
      }
    ]
  }
};
