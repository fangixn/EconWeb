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

// 基于econ_resources.json重新整合的经济学资源
export const economicsCategories = {
  "组织机构": {
    title: "Organizations & Institutions",
    description: "International organizations, government agencies, central banks and regulatory departments",
    icon: "Building",
    resources: [
      {
        name: "IMF (International Monetary Fund)",
        url: "https://www.imf.org",
        description: "Global macroeconomic analysis, regional outlooks, financial stability reports",
        tags: ["International", "Authoritative", "Policy", "Macroeconomics", "Data"]
      },
      {
        name: "World Bank",
        url: "https://www.worldbank.org",
        description: "Development economics research, data analysis and development reports",
        tags: ["International", "Development", "Free", "Data", "Research"]
      },
      {
        name: "OECD (Organisation for Economic Co-operation and Development)",
        url: "https://www.oecd.org",
        description: "Economic policy analysis and statistics",
        tags: ["International", "Policy", "Statistics", "Data", "Research"]
      },
      {
        name: "People's Bank of China",
        url: "http://www.pbc.gov.cn",
        description: "Interest rates, exchange rates, money supply information",
        tags: ["China", "Central Bank", "Official", "Financial", "Real-time"]
      },
      {
        name: "China National Bureau of Statistics",
        url: "https://www.stats.gov.cn",
        description: "China's official statistical data release platform",
        tags: ["China", "Official", "Statistics", "Data", "Free"]
      },
      {
        name: "European Central Bank (ECB)",
        url: "https://www.ecb.europa.eu",
        description: "Eurozone monetary policy and economic research",
        tags: ["Europe", "Central Bank", "Eurozone", "Policy", "Financial"]
      },
      {
        name: "Federal Statistical Office (Destatis)",
        url: "https://www.destatis.de",
        description: "GDP/CPI/trade data, provides Excel/CSV downloads",
        tags: ["Germany", "Official", "Data", "Statistics", "Free"]
      },
      {
        name: "FRED Economic Data",
        url: "https://fred.stlouisfed.org",
        description: "Federal Reserve economic database with 500,000+ time series",
        tags: ["USA", "API", "Free", "Data", "Real-time"]
      }
    ]
  },

  "数据获取": {
    title: "Data Sources",
    description: "Macroeconomic databases, microeconomic surveys, and statistical resources",
    icon: "Database",
    resources: [
      {
        name: "China Household Finance Survey (CHFS)",
        url: "http://chfs.swufe.edu.cn",
        description: "Household assets/liabilities microdata (2011-2023)",
        tags: ["China", "Microdata", "Application Required"]
      },
      {
        name: "German Socio-Economic Panel (SOEP)",
        url: "https://www.diw.de/soep",
        description: "Long-term tracking data of 30,000 German households",
        tags: ["Germany", "Academic", "Panel Data"]
      },
      {
        name: "IMF Data",
        url: "https://data.imf.org",
        description: "Economic indicators by country (foreign exchange, fiscal, etc.)",
        tags: ["International", "Free", "API"]
      },
      {
        name: "World Bank Data",
        url: "https://data.worldbank.org",
        description: "Social and economic development indicators by country",
        tags: ["International", "Development", "Free"]
      },
      {
        name: "OECD.Stat",
        url: "https://stats.oecd.org",
        description: "OECD member countries structured data platform",
        tags: ["OECD", "Statistics", "Free"]
      }
    ]
  },

  "政策研读": {
    title: "Policy Analysis",
    description: "Policy interpretation, regulatory documents and government reports",
    icon: "FileText",
    resources: [
      {
        name: "State Council Policy Interpretation Column",
        url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
        description: "Authoritative interpretation of Central Document No. 1, economic reforms, etc.",
        tags: ["China", "Official", "Real-time"]
      },
      {
        name: "PBOC Monetary Policy Report",
        url: "http://www.pbc.gov.cn",
        description: "Quarterly monetary policy implementation reports and policy tool explanations",
        tags: ["China", "Financial", "PDF"]
      },
      {
        name: "Five Sages Annual Assessment Report",
        url: "https://www.sachverstaendigenrat.de",
        description: "Authoritative analysis by German Economic Advisory Council",
        tags: ["Germany", "Annual", "Authoritative"]
      },
      {
        name: "Federal Ministry for Economic Affairs and Climate Action",
        url: "https://www.bmwk.de",
        description: "Industrial policy and energy transition roadmap",
        tags: ["Germany", "Policy Documents", "Climate"]
      },
      {
        name: "IMF Policy Tracker",
        url: "https://www.imf.org/en/Publications/Policy-Papers",
        description: "Global fiscal and monetary policy analysis",
        tags: ["International", "English", "Policy"]
      },
      {
        name: "OECD Economic Outlook",
        url: "https://www.oecd.org/economic-outlook",
        description: "Economic forecasts and structural reform recommendations for 38 member countries",
        tags: ["International", "Multi-country", "Forecasts"]
      }
    ]
  },

  "学术研究": {
    title: "Academic Research",
    description: "Academic papers, research platforms and scholarly resources",
    icon: "BookOpen",
    resources: [
      {
        name: "SSRN",
        url: "https://www.ssrn.com",
        description: "Social science working papers download platform",
        tags: ["Academic", "Free", "Global"]
      },
      {
        name: "EconStor",
        url: "https://www.econstor.eu",
        description: "German economics working paper repository",
        tags: ["Germany", "Open Access", "Academic"]
      },
      {
        name: "NBER",
        url: "https://www.nber.org",
        description: "National Bureau of Economic Research, empirical research and policy evaluation",
        tags: ["USA", "Research", "Authoritative"]
      },
      {
        name: "arXiv Economics",
        url: "https://arxiv.org/archive/q-fin",
        description: "Preprint paper platform (including finance/economics)",
        tags: ["Preprints", "Free", "Global"]
      },
      {
        name: "Econometric Academic Network (CEAN)",
        url: "http://cean.xmu.edu.cn",
        description: "Econometric code and textbook resources",
        tags: ["China", "Teaching", "Code"]
      }
    ]
  },

  "市场观察": {
    title: "Market Analysis",
    description: "Industry analysis, investment tools and company data",
    icon: "TrendingUp",
    resources: [
      {
        name: "Qianzhan Industry Research",
        url: "https://www.qianzhan.com/analyst",
        description: "AI, new energy and other subdivision industry reports",
        tags: ["China", "Daily Updates", "Industry"]
      },
      {
        name: "German Association of the Automotive Industry (VDA)",
        url: "https://www.vda.de",
        description: "Electric vehicle transformation and supply chain white papers",
        tags: ["Germany", "Automotive", "Industry"]
      },
      {
        name: "MacroMicro Industry Map",
        url: "https://sc.macromicro.me/collections",
        description: "Industrial chain data visualization tool",
        tags: ["Global", "Interactive", "Visualization"]
      },
      {
        name: "German DAX Index Analysis",
        url: "https://sc.macromicro.me/collections/3450",
        description: "IFO index and stock market correlation dashboard",
        tags: ["Germany", "Real-time", "Stock Market"]
      },
      {
        name: "CNINFO",
        url: "http://www.cninfo.com.cn",
        description: "China listed companies legal disclosure platform",
        tags: ["China", "Financial Reports", "Official"]
      },
      {
        name: "German Corporate Credit Database",
        url: "https://www.bundesbank.de/statistik-karte",
        description: "Corporate credit risk interactive map",
        tags: ["Germany", "Financial", "Risk"]
      }
    ]
  },

  "智库观点": {
    title: "Think Tank Insights",
    description: "Academic viewpoints and think tank media",
    icon: "Users",
    resources: [
      {
        name: "DIW Berlin Institute",
        url: "https://www.diw.de",
        description: "Housing crisis and migration economics research",
        tags: ["Germany", "Independent", "Research"]
      },
      {
        name: "Mercator Institute for China Studies",
        url: "https://www.merics.org",
        description: "German enterprises' investment risk assessment in China",
        tags: ["Germany", "China-Germany", "Geopolitics"]
      }
    ]
  },

  "实用工具": {
    title: "Practical Tools",
    description: "Analysis tools and reference resources",
    icon: "Wrench",
    resources: [
      {
        name: "US Inflation Calculator",
        url: "https://www.usinflationcalculator.com",
        description: "Calculate real purchasing power based on historical CPI",
        tags: ["USA", "Inflation", "Calculator"]
      },
      {
        name: "Our World in Data",
        url: "https://ourworldindata.org",
        description: "Data-driven global development trend visualization platform",
        tags: ["Global", "Data", "Visualization"]
      },
      {
        name: "Zotero",
        url: "https://www.zotero.org",
        description: "Academic reference management tool",
        tags: ["Academic", "References", "Free"]
      },
      {
        name: "Econlib",
        url: "https://www.econlib.org",
        description: "Free market economics thought resources and books",
        tags: ["Free Market", "Resources", "Books"]
      }
    ]
  }
};

// 德国经济学专题资源
export const germanEconomicsResources = [
  {
    name: "German Central Bank",
    url: "https://www.bundesbank.de",
    description: "Monetary policy reports and financial stability data",
    tags: ["Central Bank", "Authoritative"]
  },
  {
    name: "Fraunhofer Institute",
    url: "https://www.fraunhofer.de",
    description: "Industry 4.0 and hydrogen energy technology reports",
    tags: ["Technology", "Innovation"]
  },
  {
    name: "GENESIS Regional Database",
    url: "https://www-genesis.destatis.de",
    description: "German state economic comparison tool",
    tags: ["Regional", "Customizable"]
  },
  {
    name: "Energy Transition Monitoring",
    url: "https://www.agora-energiewende.de",
    description: "Green hydrogen strategy and carbon pricing mechanism",
    tags: ["Energy", "Policy"]
  },
  {
    name: "IFO Business Climate Index",
    url: "https://www.ifo.de",
    description: "Manufacturing/service industry survey based on 9,000 German companies",
    tags: ["Business Climate", "Survey"]
  },
  {
    name: "ZEW Economic Sentiment Index",
    url: "https://www.zew.de",
    description: "Financial experts' expectations index for Germany and Eurozone",
    tags: ["Economic Sentiment", "Financial"]
  }
];

// 顶级学术期刊专题资源 - 按影响因子排序
// 1. QJE (35.995), 2. AER (25.102), 3. JF (22.836), 4. Econometrica (21.091), 5. REStud (19.166)
// 6. JFE (17.669), 7. JPE (17.087), 8. RFS (16.546), 9. AEJ:Macro (13.528), 10. JM (13.394)
export const topJournalsResources = [
  {
    name: "Quarterly Journal of Economics (QJE)",
    url: "https://academic.oup.com/qje?login=false",
    description: "One of the oldest and most prestigious economics journals, publishing groundbreaking theoretical and empirical research",
    tags: ["Top Tier", "General Economics", "High Impact"]
  },
  {
    name: "American Economic Review",
    url: "https://www.aeaweb.org/journals/aer",
    description: "The flagship journal of the American Economic Association, publishing high-quality research across all fields of economics",
    tags: ["Top Tier", "General Economics", "AEA"]
  },
  {
    name: "Journal of Finance (JF)",
    url: "https://afajof.org/journal-of-finance/",
    description: "Leading journal of the American Finance Association, covering all major fields of finance",
    tags: ["Top Tier", "Finance", "High Impact"]
  },
  {
    name: "Econometrica",
    url: "https://www.econometricsociety.org/publications/econometrica",
    description: "Premier journal of the Econometric Society, focusing on theoretical and applied econometrics",
    tags: ["Top Tier", "Econometrics", "Theory"]
  },
  {
    name: "Review of Economic Studies (REStud)",
    url: "https://www.restud.com/",
    description: "European premier economics journal, publishing innovative theoretical and empirical research",
    tags: ["Top Tier", "General Economics", "European"]
  },
  {
    name: "Journal of Financial Economics (JFE)",
    url: "https://www.jfinec.com/",
    description: "Top-tier journal focusing on financial economics and corporate finance research",
    tags: ["Top Tier", "Financial Economics", "Corporate Finance"]
  },
  {
    name: "Journal of Political Economy (JPE)",
    url: "https://www.journals.uchicago.edu/toc/jpe/current",
    description: "University of Chicago's flagship economics journal, known for rigorous theoretical and empirical work",
    tags: ["Top Tier", "Political Economy", "Chicago School"]
  },
  {
    name: "Review of Financial Studies (RFS)",
    url: "https://academic.oup.com/rfs",
    description: "Leading academic journal in financial research, published by Oxford University Press",
    tags: ["Top Tier", "Financial Studies", "Research"]
  },
  {
    name: "American Economic Journal: Macroeconomics",
    url: "https://www.aeaweb.org/journals/mac",
    description: "AEA's specialized journal focusing on macroeconomic theory and policy analysis",
    tags: ["Top Tier", "Macroeconomics", "AEA"]
  },
  {
    name: "Journal of Marketing",
    url: "https://journals.sagepub.com/home/jmx",
    description: "Premier journal in marketing research, publishing cutting-edge studies on consumer behavior and marketing strategy",
    tags: ["Top Tier", "Marketing", "Consumer Behavior"]
  }
];

// 学习资源专题 - 经济学学习的精选资源
export const learningResourcesSpecial = [
  {
    name: "MIT OCW - Economics",
    url: "https://ocw.mit.edu/courses/economics",
    description: "麻省理工学院经济学课程开放资源，包含完整的课程材料、讲义和习题",
    tags: ["顶级大学", "免费", "完整课程", "理论扎实"]
  },
  {
    name: "Harvard Kennedy School",
    url: "https://www.hks.harvard.edu",
    description: "哈佛肯尼迪学院公共政策与经济学课程资料，注重政策应用",
    tags: ["顶级大学", "政策导向", "实践应用", "公共经济学"]
  },
  {
    name: "Khan Academy - Economics",
    url: "https://www.khanacademy.org/economics-finance-domain",
    description: "可汗学院免费经济学入门视频课程，适合初学者系统学习",
    tags: ["免费", "入门友好", "视频教学", "中文字幕"]
  },
  {
    name: "Coursera - Economics",
    url: "https://www.coursera.org",
    description: "由全球顶尖大学主讲的在线经济学课程聚合平台，提供认证证书",
    tags: ["大学课程", "在线认证", "多样化", "付费优质"]
  },
  {
    name: "Marginal Revolution University",
    url: "https://mru.org",
    description: "由知名经济学家Tyler Cowen创办的在线视频课程网站，内容生动有趣",
    tags: ["经济学家主讲", "免费", "生动有趣", "实用性强"]
  },
  {
    name: "BBC Masters of Money - 凯恩斯",
    url: "https://www.youtube.com/watch?v=CkHooEp3vRE",
    description: "BBC纪录片《货币大师》第一集：深度解析约翰·梅纳德·凯恩斯的经济思想与影响",
    tags: ["BBC制作", "历史人物", "凯恩斯主义", "经济思想史"]
  },
  {
    name: "BBC Masters of Money - 哈耶克",
    url: "https://www.youtube.com/watch?v=EIYqTj402PE",
    description: "BBC纪录片《货币大师》第二集：探讨弗里德里希·哈耶克的自由市场理论",
    tags: ["BBC制作", "自由市场", "奥地利学派", "诺贝尔奖得主"]
  },
  {
    name: "BBC Masters of Money - 马克思",
    url: "https://www.youtube.com/watch?v=oaIpYo3Z5lc",
    description: "BBC纪录片《货币大师》第三集：重新审视卡尔·马克思的资本主义批判理论",
    tags: ["BBC制作", "马克思主义", "资本主义批判", "政治经济学"]
  }
];

// 新闻媒体专题资源 - 获取最新经济资讯的精选媒体平台
export const mediaResourcesSpecial = [
  // 国际主流媒体
  {
    name: "The Economist",
    url: "https://www.economist.com",
    description: "英国老牌周刊，深入报道全球政治、经济、商业、科技趋势，视角独到分析深刻",
    tags: ["权威媒体", "全球视野", "深度分析", "经济趋势"]
  },
  {
    name: "Financial Times",
    url: "https://www.ft.com",
    description: "全球金融市场与宏观政策权威媒体，提供实时市场动态和专业分析",
    tags: ["金融权威", "市场动态", "宏观政策", "专业分析"]
  },
  {
    name: "Bloomberg",
    url: "https://www.bloomberg.com",
    description: "全球领先财经资讯平台，提供市场数据、宏观分析和实时新闻",
    tags: ["市场数据", "实时资讯", "财经权威", "全球覆盖"]
  },
  {
    name: "Wall Street Journal",
    url: "https://www.wsj.com",
    description: "美国财经与商业新闻权威，深度报道美国及全球经济动态",
    tags: ["美国权威", "商业新闻", "经济动态", "深度报道"]
  },
  {
    name: "Project Syndicate",
    url: "https://www.project-syndicate.org",
    description: "全球知名经济学家专栏平台，汇聚诺奖得主观点，涵盖全球性议题",
    tags: ["经济学家", "专栏观点", "全球议题", "学术权威"]
  },
  {
    name: "VoxEU (CEPR)",
    url: "https://cepr.org/voxeu",
    description: "欧洲经济政策研究中心专家观点平台，前沿政策研究与讨论",
    tags: ["政策研究", "欧洲视角", "专家观点", "前沿讨论"]
  },
  
  // 中文主流财经平台
  {
    name: "财新网",
    url: "https://www.caixin.com",
    description: "中国顶级财经媒体，以深度调查与政策金融报道著称，专业性强",
    tags: ["深度调查", "政策解读", "金融专业", "权威中文"]
  },
  {
    name: "第一财经",
    url: "https://www.yicai.com",
    description: "专业财经媒体平台，提供实时经济新闻与深度数据解读",
    tags: ["实时新闻", "数据解读", "财经专业", "市场分析"]
  },
  {
    name: "澎湃新闻·财经频道",
    url: "https://www.thepaper.cn/list_25435",
    description: "关注宏观经济与政策落地，提供及时准确的财经资讯",
    tags: ["宏观经济", "政策解读", "及时准确", "主流媒体"]
  },
  {
    name: "21世纪经济报道",
    url: "https://www.21jingji.com",
    description: "老牌财经媒体，专注实务与政策报道，行业影响力强",
    tags: ["老牌媒体", "实务导向", "政策报道", "行业影响"]
  },
  {
    name: "界面新闻财经",
    url: "https://www.jiemian.com/lists/6.html",
    description: "新兴财经媒体，关注科技、新经济方向的财经新闻和趋势分析",
    tags: ["新兴媒体", "科技财经", "新经济", "趋势分析"]
  },
  {
    name: "网易数读 / DT财经",
    url: "https://dtcj.com",
    description: "数据驱动的财经媒体，以数据可视化与趋势洞察见长",
    tags: ["数据驱动", "可视化", "趋势洞察", "新媒体"]
  },
  
  // 学术观点与智库媒体
  {
    name: "经济学家圈",
    url: "https://mp.weixin.qq.com",
    description: "微信公众号平台，聚集学界经济学人，分享学术观点和政策解读",
    tags: ["学界观点", "微信平台", "政策解读", "学术交流"]
  },
  {
    name: "Macro研习社",
    url: "https://mp.weixin.qq.com",
    description: "宏观经济研究员深度解读平台，专注宏观政策和市场分析",
    tags: ["宏观研究", "深度解读", "政策分析", "研究员视角"]
  },
  {
    name: "NBER Digest",
    url: "https://www.nber.org/digest",
    description: "美国国家经济研究局官方摘要刊物，权威学术研究精华",
    tags: ["学术权威", "研究摘要", "NBER", "美国视角"]
  },
  {
    name: "Brookings Institution",
    url: "https://www.brookings.edu/topic/economy",
    description: "美国布鲁金斯学会经济研究频道，顶级智库政策分析",
    tags: ["顶级智库", "政策分析", "美国智库", "经济研究"]
  },
  {
    name: "Peterson Institute for International Economics",
    url: "https://www.piie.com",
    description: "专注国际经济政策研究的权威智库，国际贸易与金融专业性强",
    tags: ["国际政策", "贸易金融", "权威智库", "专业研究"]
  },
  {
    name: "清华五道口金融评论",
    url: "https://www.pbcsf.tsinghua.edu.cn",
    description: "融合学术与业界的金融评论平台，连接理论与实践",
    tags: ["学术业界", "金融评论", "清华品牌", "理论实践"]
  }
]; 

// 德国专题
export const germanSpecial = [
  {
    name: "德国联邦银行(Bundesbank)",
    url: "https://www.bundesbank.de",
    description: "德国央行官网，提供货币政策、经济研究报告",
    tags: ["央行", "货币政策", "官方"]
  },
  {
    name: "德国联邦统计局",
    url: "https://www.destatis.de",
    description: "德国官方统计数据门户",
    tags: ["统计", "数据", "官方"]
  },
  {
    name: "德国经济研究所(DIW Berlin)",
    url: "https://www.diw.de",
    description: "德国权威经济智库，关注房屋危机与移民经济学",
    tags: ["智库", "研究", "独立"]
  },
  {
    name: "德国经济部",
    url: "https://www.bmwi.de",
    description: "联邦经济与能源部，德国经济政策制定部门",
    tags: ["政策", "能源", "官方"]
  },
  {
    name: "德国对华政策研究所(MERICS)",
    url: "https://www.merics.org",
    description: "专门研究中国经济，德企对华投资风险评估",
    tags: ["中德关系", "地缘政治", "投资"]
  },
  {
    name: "German Council of Economic Experts",
    url: "https://www.sachverstaendigenrat-wirtschaft.de",
    description: "德国经济专家委员会，经济形势年度评估",
    tags: ["专家委员会", "年度报告", "咨询"]
  },
  {
    name: "法兰克福证券交易所",
    url: "https://www.boerse-frankfurt.de",
    description: "欧洲重要金融市场，实时行情与分析",
    tags: ["金融市场", "证券", "实时数据"]
  },
  {
    name: "德国工商总会(DIHK)",
    url: "https://www.dihk.de",
    description: "德国工商界代表机构，企业经营环境报告",
    tags: ["工商", "企业", "商业环境"]
  }
];

// 政策专题
export const policySpecial = [
  {
    name: "中国人民银行",
    url: "https://www.pbc.gov.cn",
    description: "中国央行官网，货币政策、金融监管政策",
    tags: ["央行", "货币政策", "官方"]
  },
  {
    name: "美联储(Federal Reserve)",
    url: "https://www.federalreserve.gov",
    description: "美国央行，全球货币政策风向标",
    tags: ["美联储", "货币政策", "全球"]
  },
  {
    name: "欧洲央行(ECB)",
    url: "https://www.ecb.europa.eu",
    description: "欧洲央行官网，欧元区货币政策",
    tags: ["欧洲央行", "欧元区", "货币政策"]
  },
  {
    name: "国家发改委",
    url: "https://www.ndrc.gov.cn",
    description: "国家发展和改革委员会，宏观经济政策制定",
    tags: ["发改委", "宏观政策", "官方"]
  },
  {
    name: "财政部",
    url: "https://www.mof.gov.cn",
    description: "中国财政部，财政政策与税收政策",
    tags: ["财政部", "财政政策", "税收"]
  },
  {
    name: "工信部",
    url: "https://www.miit.gov.cn",
    description: "工业和信息化部，产业政策与数字经济",
    tags: ["工信部", "产业政策", "数字经济"]
  },
  {
    name: "商务部",
    url: "https://www.mofcom.gov.cn",
    description: "对外贸易政策与投资促进",
    tags: ["商务部", "贸易政策", "投资"]
  },
  {
    name: "国家统计局",
    url: "https://www.stats.gov.cn",
    description: "官方经济数据发布与统计分析",
    tags: ["统计局", "经济数据", "官方"]
  },
  {
    name: "银保监会",
    url: "https://www.cbirc.gov.cn",
    description: "银行业和保险业监督管理委员会",
    tags: ["金融监管", "银行", "保险"]
  },
  {
    name: "证监会",
    url: "https://www.csrc.gov.cn",
    description: "证券监督管理委员会，资本市场监管",
    tags: ["证监会", "资本市场", "监管"]
  }
];

// 数据专题
export const dataSpecial = [
  {
    name: "FRED (美联储经济数据)",
    url: "https://fred.stlouisfed.org",
    description: "美联储圣路易斯分行经济数据库，全球最权威",
    tags: ["美联储", "经济数据", "权威"]
  },
  {
    name: "世界银行数据",
    url: "https://data.worldbank.org",
    description: "全球发展指标和国家统计数据",
    tags: ["世界银行", "全球数据", "发展指标"]
  },
  {
    name: "IMF数据库",
    url: "https://data.imf.org",
    description: "国际货币基金组织数据和统计",
    tags: ["IMF", "国际", "货币"]
  },
  {
    name: "OECD数据",
    url: "https://data.oecd.org",
    description: "经济合作与发展组织统计数据",
    tags: ["OECD", "发达国家", "统计"]
  },
  {
    name: "Trading Economics",
    url: "https://tradingeconomics.com",
    description: "实时经济指标、市场数据和预测",
    tags: ["实时数据", "指标", "预测"]
  },
  {
    name: "Wind万得",
    url: "https://www.wind.com.cn",
    description: "中国领先的金融数据提供商",
    tags: ["中国", "金融数据", "专业"]
  },
  {
    name: "CEIC数据库",
    url: "https://www.ceicdata.com",
    description: "亚洲经济数据专业平台",
    tags: ["亚洲", "经济数据", "专业"]
  },
  {
    name: "Eurostat",
    url: "https://ec.europa.eu/eurostat",
    description: "欧盟统计局官方数据",
    tags: ["欧盟", "统计", "官方"]
  },
  {
    name: "BIS国际清算银行",
    url: "https://www.bis.org/statistics",
    description: "国际银行业和金融市场统计",
    tags: ["国际清算银行", "金融统计", "银行业"]
  }
];

// 市场分析专题
export const marketSpecial = [
  {
    name: "上海证券交易所",
    url: "https://www.sse.com.cn",
    description: "A股主板市场信息和数据",
    tags: ["A股", "主板", "中国"]
  },
  {
    name: "深圳证券交易所",
    url: "https://www.szse.cn",
    description: "创业板和中小板市场信息",
    tags: ["创业板", "中小板", "中国"]
  },
  {
    name: "香港交易所",
    url: "https://www.hkex.com.hk",
    description: "港股市场数据和IPO信息",
    tags: ["港股", "IPO", "国际"]
  },
  {
    name: "纽约证券交易所",
    url: "https://www.nyse.com",
    description: "全球最大股票交易所",
    tags: ["美股", "NYSE", "全球"]
  },
  {
    name: "纳斯达克",
    url: "https://www.nasdaq.com",
    description: "科技股集中的电子交易所",
    tags: ["科技股", "纳斯达克", "电子交易"]
  },
  {
    name: "上海期货交易所",
    url: "https://www.shfe.com.cn",
    description: "大宗商品期货价格和市场分析",
    tags: ["期货", "大宗商品", "中国"]
  }
];

// 工具专题
export const toolsSpecial = [
  {
    name: "Bloomberg Terminal",
    url: "https://www.bloomberg.com/professional",
    description: "专业金融终端和数据分析工具",
    tags: ["专业工具", "金融终端", "付费"]
  },
  {
    name: "Reuters Eikon",
    url: "https://www.refinitiv.com/en/products/eikon-trading-software",
    description: "路透社专业金融分析平台",
    tags: ["路透社", "分析平台", "专业"]
  },
  {
    name: "Python for Finance",
    url: "https://python-for-finance.com",
    description: "Python金融分析编程资源",
    tags: ["Python", "编程", "金融分析"]
  },
  {
    name: "R for Economics",
    url: "https://www.r-project.org",
    description: "R语言统计分析和经济计量",
    tags: ["R语言", "统计", "计量经济学"]
  }
];