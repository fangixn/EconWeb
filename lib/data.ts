// 整合经济学资源数据
export interface Resource {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

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
    url: "https://ocw.mit.edu/search/?q=economics",
    description: "麻省理工学院开放课程，覆盖微观、宏观、计量经济学等核心课程",
    tags: ["顶级大学", "免费课程", "全面系统", "英文教学"]
  },
  {
    name: "Harvard Kennedy School",
    url: "https://www.hks.harvard.edu/educational-programs/executive-education",
    description: "哈佛肯尼迪学院公共政策与经济学在线课程",
    tags: ["顶级大学", "公共政策", "执行教育", "权威师资"]
  },
  {
    name: "Khan Academy - Economics",
    url: "https://www.khanacademy.org/economics-finance-domain",
    description: "可汗学院经济学免费课程，适合经济学入门和复习",
    tags: ["免费学习", "基础入门", "中文字幕", "互动练习"]
  },
  {
    name: "Coursera Economics Specialization",
    url: "https://www.coursera.org/browse/business/economics",
    description: "Coursera经济学专业课程，来自顶级大学的系统性课程",
    tags: ["专业认证", "系统学习", "大学课程", "付费优质"]
  },
  {
    name: "Marginal Revolution University",
    url: "https://mru.org/",
    description: "边际革命大学，专注现代经济学教育的创新在线平台",
    tags: ["现代教学", "经济思维", "免费资源", "创新方法"]
  },
  {
    name: "BBC Masters of Money - 凯恩斯",
    url: "https://www.youtube.com/watch?v=CkHooEp3vRE",
    description: "BBC《Masters of Money》系列 - 凯恩斯篇，深入解析凯恩斯主义经济学",
    tags: ["经典纪录片", "经济学史", "理论对比", "通俗易懂"]
  },
  {
    name: "BBC Masters of Money - 哈耶克",
    url: "https://www.youtube.com/watch?v=EIYqTj402PE",
    description: "BBC《Masters of Money》系列 - 哈耶克篇，探讨自由市场与政府干预的争论",
    tags: ["经典纪录片", "自由市场", "哈耶克思想", "思辨性强"]
  },
  {
    name: "BBC Masters of Money - 马克思",
    url: "https://www.youtube.com/watch?v=oaIpYo3Z5lc",
    description: "BBC《Masters of Money》系列 - 马克思篇，重新审视马克思的经济学理论",
    tags: ["经典纪录片", "马克思主义", "资本主义", "历史视角"]
  },
  // 合并学术研究资源
  {
    name: "SSRN",
    url: "https://www.ssrn.com",
    description: "社会科学研究网络，下载最新工作论文和研究报告",
    tags: ["学术论文", "免费下载", "全球研究", "工作论文"]
  },
  {
    name: "NBER Working Papers",
    url: "https://www.nber.org",
    description: "美国国家经济研究局，权威经济学研究和政策评估",
    tags: ["权威研究", "美国视角", "政策评估", "实证研究"]
  },
  {
    name: "arXiv Economics",
    url: "https://arxiv.org/archive/q-fin",
    description: "经济学和金融学预印本论文平台，最新研究成果",
    tags: ["预印本", "最新研究", "免费获取", "全球论文"]
  }
];

// 新闻媒体专题资源 - 获取权威媒体资讯的精选平台
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
  
  // 学术观点与智库媒体
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
  }
]; 

// 政策专题合并组织机构和政策研读资源
export const policySpecial = [
  // 原有政策专题资源
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
  },
  // 合并组织机构中的国际组织
  {
    name: "IMF (国际货币基金组织)",
    url: "https://www.imf.org",
    description: "全球宏观经济分析、地区展望、金融稳定报告",
    tags: ["国际组织", "权威机构", "政策研究", "宏观经济"]
  },
  {
    name: "世界银行(World Bank)",
    url: "https://www.worldbank.org",
    description: "发展经济研究、数据分析与发展报告",
    tags: ["国际组织", "发展政策", "免费资源", "研究报告"]
  },
  {
    name: "OECD (经济合作与发展组织)",
    url: "https://www.oecd.org",
    description: "经济政策分析与统计，38个成员国政策协调",
    tags: ["国际组织", "政策分析", "统计数据", "研究报告"]
  },
  // 合并政策研读资源
  {
    name: "国务院政策解读专栏",
    url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
    description: "中央一号文件、经济改革等权威政策解读",
    tags: ["中国政策", "官方解读", "实时更新", "权威信息"]
  },
  {
    name: "人民银行货币政策报告",
    url: "http://www.pbc.gov.cn",
    description: "季度货币政策执行报告及政策工具说明",
    tags: ["中国货币", "季度报告", "政策工具", "PDF下载"]
  },
  {
    name: "IMF政策跟踪",
    url: "https://www.imf.org/en/Publications/Policy-Papers",
    description: "全球财政与货币政策分析",
    tags: ["国际政策", "英文资源", "政策分析", "全球视角"]
  }
];

// 数据专题合并数据获取资源
export const dataSpecial = [
  // 原有数据专题资源
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
  },
  // 合并数据获取资源
  {
    name: "中国家庭金融调查(CHFS)",
    url: "http://chfs.swufe.edu.cn",
    description: "中国家庭资产负债微观数据(2011-2023)",
    tags: ["中国数据", "微观数据", "需要申请", "家庭金融"]
  },
  {
    name: "德国社会经济面板(SOEP)",
    url: "https://www.diw.de/soep",
    description: "3万德国家庭的长期跟踪数据",
    tags: ["德国数据", "学术申请", "面板数据", "长期跟踪"]
  },
  {
    name: "OECD.Stat",
    url: "https://stats.oecd.org",
    description: "OECD成员国结构化数据平台",
    tags: ["OECD数据", "统计平台", "免费获取", "结构化数据"]
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
    description: "港股市场和中概股信息",
    tags: ["港股", "中概股", "国际"]
  },
  {
    name: "纽约证券交易所",
    url: "https://www.nyse.com",
    description: "全球最大股票交易所",
    tags: ["美股", "纽交所", "全球"]
  },
  {
    name: "纳斯达克",
    url: "https://www.nasdaq.com",
    description: "科技股集中的交易所",
    tags: ["科技股", "纳斯达克", "美国"]
  },
  {
    name: "芝加哥商品交易所",
    url: "https://www.cmegroup.com",
    description: "全球最大的期货和期权交易所",
    tags: ["期货", "期权", "商品"]
  },
  // 合并部分市场观察的优质资源
  {
    name: "前瞻产业研究院",
    url: "https://www.qianzhan.com/analyst",
    description: "AI、新能源等细分行业报告",
    tags: ["中国市场", "行业分析", "日更新", "产业研究"]
  },
  {
    name: "MacroMicro行业地图",
    url: "https://sc.macromicro.me/collections",
    description: "产业链数据可视化工具",
    tags: ["全球市场", "交互式", "可视化", "产业链"]
  }
];

// 工具专题
export const toolsSpecial = [
  {
    name: "Bloomberg Terminal",
    url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/",
    description: "全球金融市场数据分析的专业终端",
    tags: ["专业终端", "实时数据", "付费高端", "行业标准"]
  },
  {
    name: "Python for Economics",
    url: "https://python.quantecon.org/",
    description: "经济学Python编程教程与工具包",
    tags: ["编程工具", "数据分析", "免费学习", "开源工具"]
  },
  {
    name: "R for Economics",
    url: "https://www.econometrics-with-r.org/",
    description: "R语言计量经济学应用指南",
    tags: ["统计软件", "计量分析", "免费工具", "学术研究"]
  },
  {
    name: "Stata",
    url: "https://www.stata.com/",
    description: "专业统计分析软件，经济学研究标准工具",
    tags: ["统计软件", "计量经济", "付费专业", "学术标准"]
  },
  // 保留实用工具的核心资源，已在原toolsSpecial中
  {
    name: "美国通胀计算器",
    url: "https://www.usinflationcalculator.com",
    description: "基于历史CPI计算真实购买力",
    tags: ["美国通胀", "计算工具", "历史CPI", "实用工具"]
  },
  {
    name: "Our World in Data",
    url: "https://ourworldindata.org",
    description: "数据驱动的全球发展趋势可视化平台",
    tags: ["全球数据", "可视化", "发展趋势", "免费获取"]
  },
  {
    name: "Zotero",
    url: "https://www.zotero.org",
    description: "学术参考文献管理工具",
    tags: ["文献管理", "学术工具", "免费软件", "研究辅助"]
  },
  {
    name: "Econlib",
    url: "https://www.econlib.org",
    description: "自由市场经济思想资源与书籍",
    tags: ["自由市场", "经济思想", "图书资源", "理论学习"]
  }
];

// 德国专题合并智库观点中的德国相关资源
// 注意：这里还有另一个germanEconomicsResources导出在文件前面，我们保持两个都存在
export const germanSpecial = [
  // 原有德国专题资源
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
  },
  // 合并一些高质量的德国市场观察资源
  {
    name: "德国汽车工业协会(VDA)",
    url: "https://www.vda.de",
    description: "电动汽车转型与供应链白皮书",
    tags: ["汽车工业", "电动转型", "供应链", "行业协会"]
  },
  {
    name: "德国DAX指数分析",
    url: "https://sc.macromicro.me/collections/3450",
    description: "IFO指数与股市相关性看板",
    tags: ["股市分析", "实时数据", "相关性", "经济指标"]
  },
  {
    name: "德国企业信贷数据库",
    url: "https://www.bundesbank.de/statistik-karte",
    description: "企业信贷风险交互式地图",
    tags: ["信贷风险", "金融数据", "交互地图", "企业分析"]
  }
];