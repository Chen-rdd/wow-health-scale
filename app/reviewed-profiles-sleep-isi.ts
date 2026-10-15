import type {ReviewedProfile} from './reviewed-profiles';
export const sleepIsiProfiles:Record<string,ReviewedProfile>={
  "VR-SL-002-028": {
    "reviewed": "2026-10-15",
    "reviewScope": "2001作者上传全文的公开索引文字核对第2.1.2节、两组样本与表4；原PDF下载失败，图1原页尚未视觉核对。2011 PMC正文用于比较一月形式；中文2011研究仅正式摘要。",
    "definition": [
      {
        "text": "患者七题自评，评估夜间睡眠困难及其日间影响。Bastien等2001第2.1.2节明确过去两周；这与2011论文所述通常过去一月的回顾期分开登记。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/11438246/",
        "label": "2001直接开发研究正文"
      }
    ],
    "scoring": [
      {
        "text": "七项各0—4，总分0—28，高分表示感知的失眠较重。正式题本的各项锚点与指导语须保持；未确认统一漏答补分规则。2001第一组145名就诊者，α＝0.74；并非所有中文译本的信度。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/11438246/",
        "label": "两周结构与开发样本"
      }
    ],
    "translations": [
      {
        "label": "ISI正式形式、地区译本与用途申请",
        "url": "https://eprovide.mapi-trust.org/instruments/insomnia-severity-index",
        "note": "Chung等2011香港1516名12—19岁青少年研究确有中文自评证据，但本批仅摘要，完整题文与确切回顾期尚未取得；不将其自动认作本记录两周译本已逐字匹配。"
      }
    ],
    "limits": [
      {
        "text": "中文青少年研究摘要报告ISI α＝0.83、两周重测相关0.79，筛查界值9（敏感度0.87／特异度0.75）。两周重测间隔不证明题本回顾期为两周，亦不证明适用于一般成人或他评。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/21493134/",
        "label": "香港青少年直接研究摘要"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      }
    ]
  },
  "VR-SL-002-029": {
    "reviewed": "2026-10-15",
    "reviewScope": "2011 PMC正文相关方法、分析、表2及讨论已核读并在本地保存HTML；XML两次500、PDF返回验证页，未声称PDF原页已视觉核验。中文一月施测原件仍未取得。",
    "definition": [
      {
        "text": "Morin等2011明确ISI通常回顾过去一月，本文只分析患者自评。样本为959名社区成人，以及183名失眠患者和62名无失眠对照；不能把该研究归作两周他评验证。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "2011原研究方法"
      }
    ],
    "scoring": [
      {
        "text": "七项0—4，总分0—28；原文解释0—7、8—14、15—21及22—28分别为无明显、阈下、中度和重度失眠症状分段。这些分段本身不能代替诊断访谈。研究未对缺失值插补，不据此创造漏答补0或均值替代规则。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "结构、解释与缺失数据处理"
      },
      {
        "text": "社区样本界值≥10敏感度86.1%、特异度87.7%，参照是睡眠问题的是／否自报，并非诊断访谈；临床样本界值≥11的参照与表现另计。治疗后中度改善组平均下降8.4分；讨论另提下降>7的建议，不能把均值写成统一个体诊断阈值。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "表2与改善分析的适用边界"
      }
    ],
    "translations": [
      {
        "label": "ISI正式形式、地区译本与用途申请",
        "url": "https://eprovide.mapi-trust.org/instruments/insomnia-severity-index",
        "note": "需锁定一月回顾、自评及具体地区语言原件；未用中文研究的“两周重测”反推题本回顾期。香港青少年及不同成人研究应逐份配对。"
      }
    ],
    "limits": [
      {
        "text": "2011研究α为社区0.90、临床0.91；社区参照较弱，参与者为应征研究样本，能否直接适用于基层就诊人群仍待验证。论文只分析患者版本，不向他评转移界值或治疗反应规则。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "研究局限"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      }
    ]
  },
  "VR-SL-002-030": {
    "reviewed": "2026-10-15",
    "reviewScope": "2001作者上传全文公开索引文字核对研究2程序、表2与表4；官方专页确认临床访谈模式。现行临床评定许可原件、完整锚点及中文对应研究未取得。",
    "definition": [
      {
        "text": "临床人员形式依访谈资料作评定，不是把患者自填表交由医生代填。官方说明三种报告者提供互补且部分独立的信息，指导语有所调整。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方施测模式"
      }
    ],
    "scoring": [
      {
        "text": "2001七项0—4、总分0—28框架下，研究2临床评定在治疗前后完成，评定者可参考睡眠日记和访谈。患者／临床总分相关治疗前0.57、后0.71，属于相关而非两种评分完全一致。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/11438246/",
        "label": "研究2程序与表4"
      }
    ],
    "translations": [
      {
        "label": "ISI正式形式、地区译本与用途申请",
        "url": "https://eprovide.mapi-trust.org/instruments/insomnia-severity-index",
        "note": "申请时明确临床评定形式、语言、回顾期、访谈指导语及用途；尚无本项目可据以逐项验证的正式中文他评原件。"
      }
    ],
    "limits": [
      {
        "text": "研究2共78名55—84岁原发失眠者；随访3、12、24个月仅有患者ISI及日记数据，不能称临床他评已验证24个月随访。2011患者界值及改善幅度不直接作为此形式规则。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/11438246/",
        "label": "样本与表2脚注"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      }
    ]
  },
  "VR-SL-002-031": {
    "reviewed": "2026-10-15",
    "reviewScope": "2001作者上传全文公开索引文字核对重要他人形式及表4；官方专页确认其按对患者的了解评定。独立现行题本、中文原件及专属阈值未取得。",
    "definition": [
      {
        "text": "重要他人形式通常由配偶等熟悉患者者，依据对患者的了解评定患者睡眠问题；不是评定者自己的失眠，也不是儿科家长代报已经独立验证的证明。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方重要他人评定模式"
      }
    ],
    "scoring": [
      {
        "text": "七项0—4、总分0—28框架的报告者改编。2001研究2治疗前后患者／重要他人总分相关分别0.54、0.47；只能说明有一定相关，不能以他评取代自评或混合计算纵向变化。",
        "source": "https://pubmed.ncbi.nlm.nih.gov/11438246/",
        "label": "研究2表4直接证据"
      }
    ],
    "translations": [
      {
        "label": "ISI正式形式、地区译本与用途申请",
        "url": "https://eprovide.mapi-trust.org/instruments/insomnia-severity-index",
        "note": "需单独取得重要他人形式的指导语、语言／地区、回顾期及适用对象材料；中文自评研究不能填补此形式中文题文和验证缺项。"
      }
    ],
    "limits": [
      {
        "text": "2011研究虽提及三种报告者，但只分析患者自评；不把其社区界值≥10、临床界值≥11或改善幅度转作重要他人阈值。漏答处理及独立解释仍待直接来源。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "2011明确限定患者版本"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      }
    ]
  }
};
