// 整合经济学资源数据
export interface Resource {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export interface Category {
  title: string;
  description: string;
  icon: string;
  resources: Resource[];
}

// 功能导向分类（基于 econ_resources.json）
export const functionalCategories = {
  "找数据": {
    title: "数据获取",
    description: "获取宏观经济数据、微观调查数据和景气指数",
    icon: "Database",
    subcategories: {
      "宏观数据库": [
        {
          name: "国家统计局数据库",
          url: "http://www.stats.gov.cn",
          description: "覆盖3881个统计指标，含月度/季度/年度及普查数据",
          tags: ["中国", "免费", "官方"]
        },
        {
          name: "世界银行Open Data",
          url: "https://data.worldbank.org",
          description: "免费全球发展数据平台，涵盖经济、社会、环境等领域",
          tags: ["国际", "免费", "多语言"]
        },
        {
          name: "联邦统计局 (Destatis)",
          url: "https://www.destatis.de",
          description: "德国GDP/CPI/贸易数据，提供Excel/CSV下载",
          tags: ["德国", "多语言", "欧盟"]
        },
        {
          name: "FRED经济数据",
          url: "https://fred.stlouisfed.org",
          description: "美联储经济数据库，含50万+时间序列",
          tags: ["美国", "API", "实时"]
        }
      ],
      "微观调查库": [
        {
          name: "中国家庭金融调查(CHFS)",
          url: "http://chfs.swufe.edu.cn",
          description: "家庭资产/负债微观数据(2011-2023)",
          tags: ["微观", "需申请", "中国"]
        },
        {
          name: "德国社会经济面板(SOEP)",
          url: "https://www.diw.de/soep",
          description: "3万德国家庭长期追踪数据",
          tags: ["德国", "学术", "微观"]
        }
      ],
      "景气指数": [
        {
          name: "IFO商业景气指数",
          url: "https://www.ifo.de",
          description: "基于9000家德企的制造业/服务业调查",
          tags: ["德国", "预测", "实时"]
        },
        {
          name: "ZEW经济景气指数",
          url: "https://www.zew.de",
          description: "金融专家对德国及欧元区预期指数",
          tags: ["德国", "金融市场", "预测"]
        }
      ]
    }
  },
  "读政策": {
    title: "政策研读",
    description: "获取最新政策文件、央行报告和政策解读",
    icon: "FileText",
    subcategories: {
      "中国政策": [
        {
          name: "国务院政策解读专栏",
          url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
          description: "中央一号文件、经济改革等权威解读",
          tags: ["官方", "实时", "中国"]
        },
        {
          name: "央行货币政策报告",
          url: "http://www.pbc.gov.cn",
          description: "季度货币政策执行报告与政策工具说明",
          tags: ["金融", "PDF", "中国"]
        }
      ],
      "德国政策": [
        {
          name: "五贤人年度评估报告",
          url: "https://www.sachverstaendigenrat.de",
          description: "德国经济顾问委员会权威分析",
          tags: ["德国", "年度", "权威"]
        },
        {
          name: "联邦经济事务和气候行动部",
          url: "https://www.bmwk.de",
          description: "工业政策与能源转型路线图",
          tags: ["德国", "政策文件", "环保"]
        }
      ],
      "国际组织": [
        {
          name: "IMF政策追踪",
          url: "https://www.imf.org/en/Publications/Policy-Papers",
          description: "全球财政货币政策分析",
          tags: ["国际", "英文", "权威"]
        },
        {
          name: "OECD经济展望",
          url: "https://www.oecd.org/economic-outlook",
          description: "38成员国经济预测与结构改革建议",
          tags: ["国际", "多国", "预测"]
        }
      ]
    }
  },
  "做研究": {
    title: "学术研究",
    description: "学术论文、研究工具和智库资源",
    icon: "BookOpen",
    subcategories: {
      "学术平台": [
        {
          name: "SSRN Economics",
          url: "https://www.ssrn.com",
          description: "Social Science Research Network - Economics papers",
          tags: ["论文", "免费", "全球"]
        },
        {
          name: "经济学研究网(EconStor)",
          url: "https://www.econstor.eu",
          description: "德国经济工作论文库",
          tags: ["德国", "开放获取", "论文"]
        },
        {
          name: "NBER Working Papers",
          url: "https://www.nber.org",
          description: "National Bureau of Economic Research papers",
          tags: ["美国", "实证", "权威"]
        }
      ],
      "研究工具": [
        {
          name: "计量经济学学术网(CEAN)",
          url: "http://cean.xmu.edu.cn",
          description: "计量代码与教材资源",
          tags: ["中国", "教学", "代码"]
        },
        {
          name: "哈佛数据复现库",
          url: "https://dataverse.harvard.edu",
          description: "AER/QJE等顶刊论文原始数据",
          tags: ["复现", "英文", "权威"]
        }
      ],
      "德国智库": [
        {
          name: "DIW柏林研究所",
          url: "https://www.diw.de",
          description: "住房危机与移民经济研究",
          tags: ["德国", "独立", "智库"]
        },
        {
          name: "墨卡托中国研究中心",
          url: "https://www.merics.org",
          description: "德国企业对华投资风险评估",
          tags: ["中德", "地缘", "智库"]
        }
      ]
    }
  },
  "看市场": {
    title: "市场分析",
    description: "行业分析、投资工具和公司数据",
    icon: "TrendingUp",
    subcategories: {
      "行业分析": [
        {
          name: "前瞻经济学人",
          url: "https://www.qianzhan.com/analyst",
          description: "AI/新能源等细分产业报告",
          tags: ["中国", "日更", "产业"]
        },
        {
          name: "德国汽车工业协会(VDA)",
          url: "https://www.vda.de",
          description: "电动汽车转型与供应链白皮书",
          tags: ["德国", "汽车", "行业"]
        }
      ],
      "投资工具": [
        {
          name: "MacroMicro产业图谱",
          url: "https://sc.macromicro.me/collections",
          description: "产业链数据可视化工具",
          tags: ["全球", "交互", "可视化"]
        },
        {
          name: "德国DAX指数分析",
          url: "https://sc.macromicro.me/collections/3450",
          description: "IFO指数与股市关联仪表盘",
          tags: ["德国", "实时", "股市"]
        }
      ],
      "公司数据": [
        {
          name: "巨潮信息网",
          url: "http://www.cninfo.com.cn",
          description: "中国上市公司法定披露平台",
          tags: ["财报", "官方", "中国"]
        },
        {
          name: "德国企业信用库",
          url: "https://www.bundesbank.de/statistik-karte",
          description: "企业信贷风险交互地图",
          tags: ["德国", "金融", "可视化"]
        }
      ]
    }
  }
};

// 资源类型导向分类（基于 econ_nav_resources.json）
export const resourceTypeCategories = {
  "报告发布机构": {
    title: "权威机构",
    description: "国际组织和政府机构的官方报告",
    icon: "Building",
    resources: [
      {
        name: "IMF（国际货币基金组织）",
        url: "https://www.imf.org",
        description: "全球宏观经济分析、地区展望、金融稳定报告",
        tags: ["国际", "权威", "多语言"]
      },
      {
        name: "世界银行（World Bank）",
        url: "https://www.worldbank.org",
        description: "发展经济研究、数据分析与发展报告",
        tags: ["国际", "发展", "免费"]
      },
      {
        name: "OECD（经济合作与发展组织）",
        url: "https://www.oecd.org",
        description: "经济政策分析与统计",
        tags: ["国际", "政策", "统计"]
      },
      {
        name: "中国国家统计局",
        url: "https://www.stats.gov.cn",
        description: "中国官方统计数据发布平台",
        tags: ["中国", "官方", "统计"]
      },
      {
        name: "欧洲央行（ECB）",
        url: "https://www.ecb.europa.eu",
        description: "欧元区货币政策与经济研究",
        tags: ["欧洲", "央行", "货币政策"]
      }
    ]
  },
  "论文与学术资源": {
    title: "学术论文",
    description: "经济学论文库和学术资源平台",
    icon: "GraduationCap",
    resources: [
      {
        name: "SSRN",
        url: "https://www.ssrn.com",
        description: "各类社会科学领域工作论文下载",
        tags: ["论文", "免费", "预印本"]
      },
      {
        name: "RePEc",
        url: "https://repec.org",
        description: "全球经济学论文索引数据库",
        tags: ["论文", "索引", "全球"]
      },
      {
        name: "IDEAS",
        url: "https://ideas.repec.org",
        description: "RePEc 门户，可查找作者与论文",
        tags: ["论文", "搜索", "免费"]
      },
      {
        name: "arXiv Economics",
        url: "https://arxiv.org/archive/q-fin",
        description: "预印本论文平台（含金融/经济）",
        tags: ["预印本", "免费", "开放"]
      },
      {
        name: "NBER",
        url: "https://www.nber.org",
        description: "美国国家经济研究局，实证研究与政策评估",
        tags: ["美国", "实证", "权威"]
      }
    ]
  },
  "数据与统计资源": {
    title: "数据统计",
    description: "经济数据库和统计平台",
    icon: "BarChart3",
    resources: [
      {
        name: "FRED",
        url: "https://fred.stlouisfed.org",
        description: "美国及全球宏观经济指标数据库",
        tags: ["数据", "API", "免费"]
      },
      {
        name: "IMF Data",
        url: "https://data.imf.org",
        description: "各国经济指标（外汇、财政等）",
        tags: ["国际", "官方", "免费"]
      },
      {
        name: "World Bank Data",
        url: "https://data.worldbank.org",
        description: "各国社会、经济发展指标",
        tags: ["全球", "发展", "免费"]
      },
      {
        name: "OECD.Stat",
        url: "https://stats.oecd.org",
        description: "OECD 成员国结构化数据平台",
        tags: ["OECD", "结构化", "免费"]
      },
      {
        name: "中国人民银行",
        url: "http://www.pbc.gov.cn",
        description: "发布利率、汇率、货币供应等信息",
        tags: ["中国", "央行", "金融"]
      }
    ]
  },
  "公开课与学习资源": {
    title: "在线学习",
    description: "经济学在线课程和学习资源",
    icon: "BookOpen",
    resources: [
      {
        name: "MIT OCW - Economics",
        url: "https://ocw.mit.edu/courses/economics",
        description: "麻省理工经济学课程公开页",
        tags: ["MIT", "免费", "英文"]
      },
      {
        name: "Harvard Kennedy School",
        url: "https://www.hks.harvard.edu",
        description: "公共政策与经济学课程资料",
        tags: ["哈佛", "政策", "英文"]
      },
      {
        name: "Khan Academy - Economics",
        url: "https://www.khanacademy.org/economics-finance-domain",
        description: "免费入门经济学视频课程",
        tags: ["免费", "入门", "视频"]
      },
      {
        name: "Coursera - Economics",
        url: "https://www.coursera.org",
        description: "大学主讲的在线课程聚合平台",
        tags: ["在线", "认证", "付费"]
      },
      {
        name: "Marginal Revolution University",
        url: "https://mru.org",
        description: "经济学家创办的在线视频课程网站",
        tags: ["视频", "免费", "实用"]
      }
    ]
  },
  "实用工具与推荐书单": {
    title: "实用工具",
    description: "经济分析工具和参考资源",
    icon: "Wrench",
    resources: [
      {
        name: "通货膨胀计算器（US）",
        url: "https://www.usinflationcalculator.com",
        description: "基于历史 CPI 计算真实购买力",
        tags: ["工具", "计算器", "免费"]
      },
      {
        name: "Our World in Data",
        url: "https://ourworldindata.org",
        description: "数据驱动的全球发展趋势可视化平台",
        tags: ["可视化", "免费", "全球"]
      },
      {
        name: "Zotero",
        url: "https://www.zotero.org",
        description: "学术参考文献管理工具",
        tags: ["文献", "管理", "免费"]
      },
      {
        name: "Econlib",
        url: "https://www.econlib.org",
        description: "自由市场经济思想资源与书籍",
        tags: ["书籍", "理论", "免费"]
      }
    ]
  }
};

// 德国专题资源
export const germanSpecialResources = {
  title: "德国经济专题",
  description: "德国经济相关的专业资源和机构",
  icon: "MapPin",
  categories: {
    "核心机构": [
      {
        name: "德国央行",
        url: "https://www.bundesbank.de",
        description: "货币政策报告与金融稳定数据",
        tags: ["央行", "权威", "德国"]
      },
      {
        name: "弗劳恩霍夫研究所",
        url: "https://www.fraunhofer.de",
        description: "工业4.0与氢能技术报告",
        tags: ["科技", "创新", "德国"]
      }
    ],
    "特色资源": [
      {
        name: "GENESIS区域数据库",
        url: "https://www-genesis.destatis.de",
        description: "德国各州经济对比工具",
        tags: ["区域", "定制", "德国"]
      },
      {
        name: "能源转型监测",
        url: "https://www.agora-energiewende.de",
        description: "绿氢战略与碳定价机制",
        tags: ["能源", "政策", "德国"]
      }
    ]
  }
};

// 用户引导路径配置
export const userPaths = {
  beginner: {
    title: "新手路径",
    description: "适合经济学初学者的学习路径",
    steps: [
      "公开课与学习资源",
      "数据与统计资源", 
      "报告发布机构",
      "实用工具与推荐书单"
    ]
  },
  professional: {
    title: "专业路径", 
    description: "适合研究人员和实务工作者",
    steps: [
      "找数据",
      "做研究",
      "读政策",
      "看市场"
    ]
  }
};

// 所有标签汇总
export const allTags = [
  "免费", "付费", "需申请", "官方", "学术", "实时", "API",
  "中国", "美国", "德国", "欧洲", "国际", "全球",
  "宏观", "微观", "金融", "政策", "数据", "论文", "工具",
  "初级", "中级", "高级", "英文", "中文", "多语言"
]; 