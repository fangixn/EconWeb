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

// 按9个专业维度重新组织的经济学资源
export const economicsCategories = {
  "组织机构": {
    title: "组织机构",
    description: "国际组织、政府机构、央行和监管部门",
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
        description: "经济政策建议、统计数据与发展趋势分析",
        tags: ["国际", "政策", "统计"]
      },
      {
        name: "中国人民银行",
        url: "http://www.pbc.gov.cn",
        description: "货币政策报告、金融市场运行分析",
        tags: ["中国", "央行", "官方"]
      },
      {
        name: "德国联邦银行",
        url: "https://www.bundesbank.de",
        description: "德国货币政策、金融稳定与经济分析",
        tags: ["德国", "央行", "欧元区"]
      },
      {
        name: "美联储（Federal Reserve）",
        url: "https://www.federalreserve.gov",
        description: "美国货币政策、经济展望和金融监管",
        tags: ["美国", "央行", "英文"]
      },
      {
        name: "欧洲央行（ECB）",
        url: "https://www.ecb.europa.eu",
        description: "欧元区货币政策和金融稳定报告",
        tags: ["欧洲", "央行", "多语言"]
      },
      {
        name: "联邦统计局（Destatis）",
        url: "https://www.destatis.de",
        description: "德国官方统计数据、经济指标和人口普查",
        tags: ["德国", "官方", "统计"]
      }
    ]
  },
  
  "政策研读": {
    title: "政策研读",
    description: "政策解读、法规文件和政府报告",
    icon: "FileText",
    resources: [
      {
        name: "国务院政策解读专栏",
        url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
        description: "中央一号文件、经济改革等权威解读",
        tags: ["中国", "官方", "实时"]
      },
      {
        name: "五贤人年度评估报告",
        url: "https://www.sachverstaendigenrat.de",
        description: "德国经济顾问委员会权威分析",
        tags: ["德国", "年度", "权威"]
      },
      {
        name: "联邦经济事务和气候行动部",
        url: "https://www.bmwk.de",
        description: "德国工业政策与能源转型路线图",
        tags: ["德国", "政策文件", "环保"]
      },
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
      },
      {
        name: "中国政府网",
        url: "https://www.gov.cn",
        description: "最新政策法规、国务院文件和政策解读",
        tags: ["中国", "官方", "权威"]
      }
    ]
  },

  "市场分析": {
    title: "市场分析",
    description: "行业分析、投资研究和市场动态",
    icon: "TrendingUp",
    resources: [
      {
        name: "前瞻经济学人",
        url: "https://www.qianzhan.com/analyst",
        description: "AI、新能源等细分产业报告",
        tags: ["中国", "日更", "产业"]
      },  
      {
        name: "德国汽车工业协会（VDA）",
        url: "https://www.vda.de",
        description: "电动汽车转型与供应链白皮书",
        tags: ["德国", "汽车", "行业"]
      },
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
      },
      {
        name: "巨潮信息网",
        url: "http://www.cninfo.com.cn",
        description: "中国上市公司法定披露平台",
        tags: ["中国", "财报", "官方"]
      },
      {
        name: "德国企业信用库",
        url: "https://www.bundesbank.de/statistik-karte",
        description: "企业信贷风险交互地图",
        tags: ["德国", "金融", "风险"]
      }
    ]
  },

  "财经媒体": {
    title: "财经媒体",
    description: "财经新闻、市场资讯和经济评论",
    icon: "Globe",
    resources: [
      {
        name: "新浪财经",
        url: "https://finance.sina.com.cn",
        description: "国内外财经新闻、股市行情和宏观数据",
        tags: ["中国", "新闻", "实时"]
      },
      {
        name: "华尔街见闻",
        url: "https://wallstreetcn.com",
        description: "全球市场资讯和宏观经济分析",
        tags: ["全球", "专业", "付费"]
      },
      {
        name: "Financial Times",
        url: "https://www.ft.com",
        description: "国际金融新闻和深度经济分析",
        tags: ["国际", "英文", "权威"]
      },
      {
        name: "Handelsblatt",
        url: "https://www.handelsblatt.com",
        description: "德国最具影响力的财经日报",
        tags: ["德国", "德语", "权威"]
      },
      {
        name: "Manager Magazin",
        url: "https://www.manager-magazin.de",
        description: "德国商业管理与经济杂志",
        tags: ["德国", "商业", "管理"]
      },
      {
        name: "Bloomberg",
        url: "https://www.bloomberg.com",
        description: "全球金融市场和经济新闻",
        tags: ["全球", "英文", "实时"]
      }
    ]
  },

  "智库研究": {
    title: "智库研究",
    description: "经济政策研究和前瞻性分析",
    icon: "Users",
    resources: [
      {
        name: "中国社科院经济研究所",
        url: "http://ie.cass.cn",
        description: "中国经济理论与政策研究",
        tags: ["中国", "学术", "权威"]
      },
      {
        name: "DIW柏林研究所",
        url: "https://www.diw.de",
        description: "德国独立经济研究机构，专注住房和移民经济",
        tags: ["德国", "独立", "智库"]
      },
      {
        name: "墨卡托中国研究中心（MERICS）",
        url: "https://www.merics.org",
        description: "德国对华投资风险评估和中国经济分析",
        tags: ["德国", "中德", "地缘"]
      },
      {
        name: "IFO经济研究所",
        url: "https://www.ifo.de",
        description: "德国权威经济研究机构，发布商业景气指数",
        tags: ["德国", "预测", "权威"]
      },
      {
        name: "ZEW经济研究中心",
        url: "https://www.zew.de",
        description: "欧洲经济研究中心，专注金融市场分析",
        tags: ["德国", "金融", "欧洲"]
      },
      {
        name: "Peterson Institute",
        url: "https://www.piie.com",
        description: "国际经济政策研究所",
        tags: ["美国", "国际", "政策"]
      },
      {
        name: "Brookings Institution",
        url: "https://www.brookings.edu",
        description: "美国权威公共政策研究机构",
        tags: ["美国", "政策", "权威"]
      }
    ]
  },

  "数据获取": {
    title: "数据获取",
    description: "宏观数据、微观调查和统计资源",
    icon: "Database",
    resources: [
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
        name: "FRED经济数据",
        url: "https://fred.stlouisfed.org",
        description: "美联储经济数据库，含50万+时间序列",
        tags: ["美国", "API", "实时"]
      },
      {
        name: "中国家庭金融调查（CHFS）",
        url: "http://chfs.swufe.edu.cn",
        description: "家庭资产/负债微观数据（2011-2023）",
        tags: ["中国", "微观", "需申请"]
      },
      {
        name: "德国社会经济面板（SOEP）",
        url: "https://www.diw.de/soep",
        description: "3万德国家庭长期追踪数据",
        tags: ["德国", "学术", "微观"]
      },
      {
        name: "Wind万得",
        url: "https://www.wind.com.cn",
        description: "中国金融数据终端",
        tags: ["中国", "金融", "付费"]
      },
      {
        name: "CEIC全球经济数据库",
        url: "https://www.ceicdata.com",
        description: "全球宏观经济时间序列数据",
        tags: ["全球", "宏观", "付费"]
      }
    ]
  },

  "学术论文": {
    title: "学术论文",
    description: "经济学研究论文和学术资源",
    icon: "BookOpen",
    resources: [
      {
        name: "SSRN Economics",
        url: "https://www.ssrn.com",
        description: "社会科学研究网络 - 经济学论文库",
        tags: ["论文", "免费", "全球"]
      },
      {
        name: "NBER Working Papers",
        url: "https://www.nber.org",
        description: "美国国家经济研究局工作论文",
        tags: ["美国", "实证", "权威"]
      },
      {
        name: "经济学研究网（EconStor）",
        url: "https://www.econstor.eu",
        description: "德国经济工作论文库",
        tags: ["德国", "开放获取", "论文"]
      },
      {
        name: "中国知网（CNKI）",
        url: "https://www.cnki.net",
        description: "中国学术论文数据库",
        tags: ["中国", "学术", "付费"]
      },
      {
        name: "万方数据库",
        url: "https://www.wanfangdata.com.cn",
        description: "中国学位论文和期刊论文",
        tags: ["中国", "学术", "付费"]
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com",
        description: "学术文献搜索引擎",
        tags: ["全球", "免费", "搜索"]
      }
    ]
  },

  "在线学习": {
    title: "在线学习",
    description: "经济学课程、教材和学习资源",
    icon: "GraduationCap",
    resources: [
      {
        name: "中国大学MOOC（经济学）",
        url: "https://www.icourse163.org",
        description: "国内顶级高校经济学课程",
        tags: ["中国", "免费", "高校"]
      },
      {
        name: "Coursera Economics",
        url: "https://www.coursera.org/browse/social-sciences/economics",
        description: "全球知名大学经济学课程",
        tags: ["国际", "英文", "认证"]
      },
      {
        name: "edX Economics",
        url: "https://www.edx.org/learn/economics",
        description: "MIT、哈佛等名校经济学课程",
        tags: ["国际", "名校", "免费"]
      },
      {
        name: "网易公开课",
        url: "https://open.163.com/ted/economics",
        description: "TED经济学演讲和公开课",
        tags: ["中国", "免费", "科普"]
      },
      {
        name: "经济学人",
        url: "https://www.economist.com",
        description: "全球经济分析和深度报道",
        tags: ["国际", "英文", "付费"]
      },
      {
        name: "Khan Academy Economics",
        url: "https://www.khanacademy.org/economics-finance-domain",
        description: "经济学基础教程",
        tags: ["国际", "免费", "基础"]
      }
    ]
  },

  "工具获取": {
    title: "工具获取",
    description: "计量软件、编程工具和研究辅助",
    icon: "Wrench",
    resources: [
      {
        name: "计量经济学学术网（CEAN）",
        url: "http://cean.xmu.edu.cn",
        description: "计量代码与教材资源",
        tags: ["中国", "教学", "代码"]
      },
      {
        name: "哈佛数据复现库",
        url: "https://dataverse.harvard.edu",
        description: "AER/QJE等顶刊论文原始数据",
        tags: ["复现", "英文", "权威"]
      },
      {
        name: "Stata官方网站",
        url: "https://www.stata.com",
        description: "统计分析软件和教程",
        tags: ["软件", "计量", "付费"]
      },
      {
        name: "R Project",
        url: "https://www.r-project.org",
        description: "开源统计计算和图形软件",
        tags: ["开源", "免费", "统计"]
      },
      {
        name: "Python for Data Science",
        url: "https://pandas.pydata.org",
        description: "Python数据分析库",
        tags: ["编程", "免费", "数据分析"]
      },
      {
        name: "EViews",
        url: "http://www.eviews.com",
        description: "计量经济学和统计分析软件",
        tags: ["软件", "计量", "付费"]
      },
      {
        name: "MATLAB Econometrics Toolbox",
        url: "https://www.mathworks.com/products/econometrics.html",
        description: "MATLAB计量经济学工具箱",
        tags: ["软件", "计量", "付费"]
      }
    ]
  }
};

// 德国经济学资源特别推荐
export const germanEconomicsResources = [
  {
    name: "五贤人委员会年度报告",
    url: "https://www.sachverstaendigenrat.de",
    description: "德国最权威的经济政策评估",
    tags: ["德国", "权威", "年度"]
  },
  {
    name: "IFO商业景气指数",
    url: "https://www.ifo.de",
    description: "欧洲最重要的经济先行指标",
    tags: ["德国", "预测", "实时"]
  },
  {
    name: "DIW周报（DIW Wochenbericht）",
    url: "https://www.diw.de/sixcms/detail.php?id=diw_02.c.222618.de",
    description: "德国经济政策深度分析",
    tags: ["德国", "政策", "周报"]
  },
  {
    name: "墨卡托中国研究中心",
    url: "https://www.merics.org",
    description: "中德经济关系专业分析",
    tags: ["中德", "地缘", "智库"]
  }
];

// 常见问题数据
export const faqData = [
  {
    question: "如何获取最新的中国宏观经济数据？",
    answer: "推荐使用国家统计局数据库和中国人民银行官网。国家统计局提供GDP、CPI、工业增加值等核心指标的月度、季度和年度数据。央行网站则提供货币供应量、社会融资规模等金融数据。"
  },
  {
    question: "德国经济研究有哪些权威机构？",
    answer: "主要包括：五贤人委员会（提供年度经济评估）、IFO经济研究所（发布商业景气指数）、DIW柏林研究所（独立经济研究）、ZEW经济研究中心（金融市场分析）等。这些机构的报告具有很高的学术价值和政策影响力。"
  },
  {
    question: "如何获取免费的学术论文资源？",
    answer: "建议使用SSRN、Google Scholar、经济学研究网（EconStor）等平台。SSRN提供大量免费的经济学工作论文，Google Scholar可以搜索全球学术文献，EconStor专门收录德语地区的经济学研究。"
  },
  {
    question: "有哪些好用的经济数据可视化工具？",
    answer: "推荐MacroMicro（宏观经济数据可视化）、FRED（美联储经济数据图表）、世界银行开放数据平台等。这些工具不仅提供数据，还支持交互式图表制作和数据分析。"
  }
]; 