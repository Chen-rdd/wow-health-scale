import type {ReviewedProfile} from './reviewed-profiles';
export const promisProfiles:Record<string,ReviewedProfile>={
  "VR-QL-005-050": {
    "reviewed": "2026-10-15",
    "reviewScope": "第3—6页；旧版重编码规则。原始独立题本、中文译文及目标人群研究尚待补。",
    "definition": [
      {
        "text": "成人v1.0/1.1为旧版十题，手册列为已停用版本；历史数据仍可按对应规则计分。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "旧版进入现行评分服务前，Global07/08/09/10的ID须加r；08与10改变编码方向，07保留0—10供服务处理。手工查表另将疼痛0、1—3、4—6、7—9、10分别映射为5、4、3、2、1。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ]
  },
  "VR-QL-005-051": {
    "reviewed": "2026-10-15",
    "reviewScope": "第7—11页；身体评分第9页原图已核对。独立题本、中文译文及验证研究尚待补。",
    "definition": [
      {
        "text": "成人Global Health v1.2共十题，分别报告身体与心理健康；不能将十项简单合并为标准总分。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "身体分用Global03、06、08r及重编码07r；心理分用02、04、05、10r。两组各四题按专用表转T分；01、09r单独报告。评分服务可接收07r原0—10；手工须先转换成1—5，不能说所有方式均自动重编码。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ]
  },
  "VR-QL-005-052": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、21页及官方长度选择说明；两题表适合大样本组间比较，不推荐小样本或个人评估。",
    "definition": [
      {
        "text": "Global Mental 2a v1.2是成人心理健康两题超短版。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "用Global04和05，两项合计2—10，按Mental 2a专用表转T分。它不是四题心理分的一半，不能套四题换算表。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "官方将两题表定位为大样本用途，不推荐用于小样本或单个患者评估。",
        "source": "https://healthmeasures.net/select-measures/recommended-measures/global-health-profiles/",
        "label": "官方按长度选择说明"
      }
    ]
  },
  "VR-QL-005-053": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、21页及官方长度选择说明；两题表适合大样本组间比较，不推荐小样本或个人评估。",
    "definition": [
      {
        "text": "Global Physical 2a v1.2是成人身体健康两题超短版。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "用Global03和06，两项合计2—10，按Physical 2a专用表转T分；不能使用Mental 2a表，也不能将完整身体四题分数按比例缩短。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "官方将两题表定位为大样本用途，不推荐用于小样本或单个患者评估。",
        "source": "https://healthmeasures.net/select-measures/recommended-measures/global-health-profiles/",
        "label": "官方按长度选择说明"
      }
    ]
  },
  "VR-QL-005-054": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、20页四题项与专用换算表原页已核对；具体施测题本和中文研究待补。",
    "definition": [
      {
        "text": "Global Mental Health 4a v1.2为成人心理健康四题短版。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "Global02、04、05、10r合计4—20，使用Mental Health 4a表；按v1.2已印编码录入，避免把10r再次反向。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ]
  },
  "VR-QL-005-055": {
    "reviewed": "2026-10-15",
    "reviewScope": "第9、14、20页疼痛重编码及四题专用表原页已核对；具体施测题本和中文研究待补。",
    "definition": [
      {
        "text": "Global Physical Health 4a v1.2为成人身体健康四题短版。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "Global03、06、07r、08r组成身体分；手工先把疼痛07r的0—10转为1—5，再合计4—20并查Physical Health 4a表。评分服务使用原07r回答，勿重复转换。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ]
  },
  "VR-QL-005-056": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、22、25页相关规则与儿童表原页已核对；登记缺少版本号，原题本和中文研究仍待明确。",
    "definition": [
      {
        "text": "Pediatric Global Health 7为儿童自评七题；本目录名称尚未指定v1.0或GenPop v3.0，施测前必须先锁定版本。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "七题形成单一Global Health分，原始和7—35；v1.0属历史版本，手册分别列现行与历史表，不应仅凭“七题”混用其他报告者或年龄版本。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "官方一般年龄范围为儿童自评8—17岁、家长代理5—17岁、幼儿家长报告1—5岁；年龄及报告者之间不直接混合比较，具体量表仍须核对。",
        "source": "https://healthmeasures.net/select-measures/recommended-measures/age-groups/",
        "label": "官方年龄与报告者指南"
      }
    ]
  },
  "VR-QL-005-057": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、17、26页规则及历史版本归属；第26页换算表尚未视觉逐格复核，具体中文原件和研究待补。",
    "definition": [
      {
        "text": "本记录明确为Parent Proxy Global Health 7 v1.0，属于家长代理历史版本，不应静默替换成GenPop v3.0。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "七题合计7—35并用v1.0家长代理专用换算表；历史表位于附录2。儿童自评及幼儿家长报告不是同一分数尺度。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "官方一般年龄范围为儿童自评8—17岁、家长代理5—17岁、幼儿家长报告1—5岁；年龄及报告者之间不直接混合比较，具体量表仍须核对。",
        "source": "https://healthmeasures.net/select-measures/recommended-measures/age-groups/",
        "label": "官方年龄与报告者指南"
      }
    ]
  },
  "VR-QL-005-058": {
    "reviewed": "2026-10-15",
    "reviewScope": "第14、23页幼儿表及换算表原页已核对；具体中文原件和验证研究待补。",
    "definition": [
      {
        "text": "Early Childhood Parent-Report Global Health 8a v1.0由家长报告幼儿整体健康；与七题家长代理表分别使用。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      }
    ],
    "scoring": [
      {
        "text": "八题合计8—40，用8a专用表转换T分及标准误，不能套成人身体／心理两分或七题表。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "手工原始和查表要求对应量表全部作答；有漏答改用官方响应模式计分途径，不自行补零或按比例折算。",
        "source": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/",
        "label": "现行手工计分与漏答说明"
      }
    ],
    "translations": [
      {
        "label": "HealthMeasures现行评分手册目录",
        "url": "https://healthmeasures.net/implement/scoring/manual-scoring-resources/promis-scoring-manuals/",
        "note": "本次未逐项锁定任何中文施测原件；评分手册存在不代表译本验证或完整题文再发布许可已完成。"
      }
    ],
    "limits": [
      {
        "text": "高T分表示该整体健康构念较好；T分应连同标准误解释，不当作诊断或未经验证的风险界值。",
        "source": "https://healthmeasures.net/wp-content/uploads/2026/05/PROMIS-Global-Health-Scoring-Manual_30Aug2024.pdf",
        "label": "官方评分手册（2024）"
      },
      {
        "text": "官方一般年龄范围为儿童自评8—17岁、家长代理5—17岁、幼儿家长报告1—5岁；年龄及报告者之间不直接混合比较，具体量表仍须核对。",
        "source": "https://healthmeasures.net/select-measures/recommended-measures/age-groups/",
        "label": "官方年龄与报告者指南"
      }
    ]
  }
};
