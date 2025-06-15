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

  "财经资讯": {
    title: "Financial News",
    description: "Financial news, market information and economic commentary",
    icon: "Globe",
    resources: [
      {
        name: "The Economist",
        url: "https://www.economist.com",
        description: "British weekly magazine with in-depth coverage of global politics, economics, business, and technology trends",
        tags: ["International", "English", "Weekly"]
      },
      {
        name: "Financial Times",
        url: "https://www.ft.com",
        description: "Focus on global financial markets and macroeconomic policy",
        tags: ["International", "English", "Financial"]
      },
      {
        name: "Bloomberg",
        url: "https://www.bloomberg.com",
        description: "Global leading financial information, providing market data and macroeconomic analysis",
        tags: ["Global", "English", "Real-time"]
      },
      {
        name: "Wall Street Journal",
        url: "https://www.wsj.com",
        description: "US financial and business news authority",
        tags: ["USA", "English", "Business"]
      },
      {
        name: "Project Syndicate",
        url: "https://www.project-syndicate.org",
        description: "Global renowned economists' columns covering global issues",
        tags: ["Global", "Economists", "Opinion"]
      },
      {
        name: "VoxEU (CEPR)",
        url: "https://cepr.org/voxeu",
        description: "Centre for Economic Policy Research expert opinion platform",
        tags: ["Europe", "Research", "Policy"]
      },
      {
        name: "Caixin",
        url: "https://www.caixin.com",
        description: "In-depth investigation and policy financial reporting",
        tags: ["China", "Investigation", "Policy"]
      },
      {
        name: "Yicai",
        url: "https://www.yicai.com",
        description: "Real-time economic news and data interpretation",
        tags: ["China", "Real-time", "Economics"]
      },
      {
        name: "The Paper - Finance",
        url: "https://www.thepaper.cn/list_25435",
        description: "Focus on macroeconomics and policy implementation",
        tags: ["China", "Macroeconomics", "Policy"]
      },
      {
        name: "21st Century Business Herald",
        url: "https://www.21jingji.com",
        description: "Veteran financial media focusing on practice and policy",
        tags: ["China", "Business", "Policy"]
      },
      {
        name: "Jiemian Finance",
        url: "https://www.jiemian.com/lists/6.html",
        description: "Financial news in technology and new economy direction",
        tags: ["China", "Technology", "New Economy"]
      },
      {
        name: "NetEase DataRead / DT Finance",
        url: "https://dtcj.com",
        description: "Data visualization and trend insights",
        tags: ["China", "Data Visualization", "Trends"]
      }
    ]
  },

  "智库观点": {
    title: "Think Tank Insights",
    description: "Academic viewpoints and think tank media",
    icon: "Users",
    resources: [
      {
        name: "NBER Digest",
        url: "https://www.nber.org/digest",
        description: "National Bureau of Economic Research digest publication",
        tags: ["USA", "Research", "Digest"]
      },
      {
        name: "Brookings Institution",
        url: "https://www.brookings.edu/topic/economy",
        description: "Brookings Institution economic research channel",
        tags: ["USA", "Think Tank", "Policy"]
      },
      {
        name: "Peterson Institute for International Economics",
        url: "https://www.piie.com",
        description: "Think tank focusing on international economic policy research",
        tags: ["International", "Policy", "Economics"]
      },
      {
        name: "Tsinghua PBC School of Finance Review",
        url: "https://www.pbcsf.tsinghua.edu.cn",
        description: "Financial review platform integrating academia and industry",
        tags: ["China", "Finance", "Academic"]
      },
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

  "在线学习": {
    title: "Online Learning",
    description: "Economics courses and learning resources",
    icon: "GraduationCap",
    resources: [
      {
        name: "MIT OCW - Economics",
        url: "https://ocw.mit.edu/courses/economics",
        description: "MIT economics course open pages",
        tags: ["MIT", "Free", "Courses"]
      },
      {
        name: "Harvard Kennedy School",
        url: "https://www.hks.harvard.edu",
        description: "Public policy and economics course materials",
        tags: ["Harvard", "Policy", "Economics"]
      },
      {
        name: "Khan Academy - Economics",
        url: "https://www.khanacademy.org/economics-finance-domain",
        description: "Free introductory economics video courses",
        tags: ["Free", "Basic", "Video"]
      },
      {
        name: "Coursera - Economics",
        url: "https://www.coursera.org",
        description: "University-taught online course aggregation platform",
        tags: ["University", "Online", "Certification"]
      },
      {
        name: "Marginal Revolution University",
        url: "https://mru.org",
        description: "Online video course website founded by economists",
        tags: ["Economics", "Video", "Free"]
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