import type {ReviewedProfile} from './reviewed-profiles';
export const sleepIsiProfiles:Record<string,ReviewedProfile>={
  "VR-SL-002-028": {
    "reviewed": "2026-10-16",
    "reviewScope": "2001原研究11页PDF通过交大机构权限取得；方法、两组样本、结果及讨论核读，印刷页299／300／302／303视觉核对图1、两周描述、研究2程序及表2—4。图1是患者自评表，不代替临床或重要他人独立完整题本。中文施测原件与用途许可仍待。 香港2011中文直接研究8页PDF与补充表已取得，实际统一为一月，不能归为本两周表逐字验证。",
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
      },
      {
        "text": "2001图1原页将首组睡眠困难分为1a／1b／1c，再加2／3／4／5，共七个评分项而非只有五题。原页相加0—28，并列0—7、8—14、15—21、22—28分段；这些是该版解释指引，不能直接当所有中文人群的诊断界点。各项目锚点不同，不能用同一套频率选项替换。",
        "source": "https://doi.org/10.1016/S1389-9457(00)00065-4",
        "label": "2001原论文第299页图1"
      }
    ],
    "translations": [
      {
        "label": "ISI正式形式、地区译本与用途申请",
        "url": "https://eprovide.mapi-trust.org/instruments/insomnia-severity-index",
        "note": "Chung等2011香港1516名12—19岁青少年研究全文与独立补充表现已取得；方法明确把ISI改成过去一月，不是本条两周表的直接中文验证。论文说明完整中文问卷需向通讯作者索取，正文及附件只列英文项目／统计，尚未逐字匹配中文施测原件。"
      }
    ],
    "limits": [
      {
        "text": "香港2011研究总α＝0.83、两周重测相关0.79，但本研究实际ISI回顾期改为一月。表10筛查切点9、敏感度0.87／特异度0.75、阳性预测值0.25，分析样本264；不能转成两周表、一般成人或他评统一界限。",
        "source": "https://doi.org/10.1016/j.sleep.2010.09.019",
        "label": "香港青少年原研究方法与表10"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      }
    ]
  },
  "VR-SL-002-029": {
    "reviewed": "2026-10-16",
    "reviewScope": "2011 PMC正文与本地UPenn八页原PDF（印刷页601—608）均已核；原页分两轮完成全八页视觉检查，含方法、缺失处理、Table 1—5及Figure 1—3。此前XML500／PMC PDF验证页失败保留。中文一月施测原件及用途许可仍未取得。 香港Chung2011八页全文相关方法、结果和表10已核，印刷页464／465／469视觉核对；独立DOC补充表文字核读，完整中文表仍待。",
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
      },
      {
        "label": "2011原论文：大学公开存档",
        "url": "https://www.med.upenn.edu/cbti/assets/user-content/documents/Morin2011_ISIindex-psychometricindicators.pdf",
        "note": "八页原论文已取得并完成全页视觉核对，确认方法、锚点表、阈值表、改善分析与局限。研究论文不是完整施测许可，也不提供中文逐题匹配证据。"
      },
      {
        "label": "Chung等2011香港青少年一月自评研究全文与附件",
        "url": "https://doi.org/10.1016/j.sleep.2010.09.019",
        "note": "三校1516名12—19岁学生，作者将ISI、AIS、SQI统一为过去一月；正反翻译、中文教师审阅与初一试测后修订。264人用于表10筛查分析、258人用于重测统计；两周重测不是两周回顾。完整中文问卷注明须向通讯作者索取，补充表是英文项目的回答分布，不是完整中文表。"
      }
    ],
    "limits": [
      {
        "text": "2011研究α为社区0.90、临床0.91；社区参照较弱，参与者为应征研究样本，能否直接适用于基层就诊人群仍待验证。论文只分析患者版本，不向他评转移界值或治疗反应规则。",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3079939/",
        "label": "研究局限"
      },
      {
        "text": "临床样本中ISI与睡眠日记的对应相关强于多导睡眠监测；Table 3中PSG多项相关未达显著，不能把自报症状总分理解为客观睡眠结构或统一生理异常指标。治疗反应分析为146人子样本，不等于全部959名社区参与者。",
        "source": "https://www.med.upenn.edu/cbti/assets/user-content/documents/Morin2011_ISIindex-psychometricindicators.pdf",
        "label": "原论文印刷页606，Table 3—5及相关结果"
      },
      {
        "text": "Mapi代表著作权人Charles Morin分发ISI，官方将使用条件与可用译本的请求统一引向ePROVIDE。公开论文可阅读与本项目获准展示、翻译或下载完整题本分别确认；尚未取得本项目对应许可。",
        "source": "https://eprovide.mapi-trust.org/isi-insomnia-severity-index/",
        "label": "官方条件与译本入口"
      },
      {
        "text": "香港青少年一月ISI筛查切点9的敏感度0.87、特异度0.75，但阳性预测值仅0.25。1516为纳入总数，完整量表比较1431、重测258、ROC264分别报告；不把一个样本数用于所有结果。早醒项目的中文理解可能有语义问题，作者要求进一步核验，不能只凭总α声称所有项目均合适。",
        "source": "https://doi.org/10.1016/j.sleep.2010.09.019",
        "label": "Chung2011方法、表2／10及讨论与独立附件"
      }
    ]
  },
  "VR-SL-002-030": {
    "reviewed": "2026-10-16",
    "reviewScope": "2001原研究11页PDF通过交大机构权限取得；方法、两组样本、结果及讨论核读，印刷页299／300／302／303视觉核对图1、两周描述、研究2程序及表2—4。图1是患者自评表，不代替临床或重要他人独立完整题本。中文施测原件与用途许可仍待。",
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
    "reviewed": "2026-10-16",
    "reviewScope": "2001原研究11页PDF通过交大机构权限取得；方法、两组样本、结果及讨论核读，印刷页299／300／302／303视觉核对图1、两周描述、研究2程序及表2—4。图1是患者自评表，不代替临床或重要他人独立完整题本。中文施测原件与用途许可仍待。",
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
