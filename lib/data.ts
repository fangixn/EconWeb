// 整合经济学资源数据
export interface Resource {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

// 删除旧的germanEconomicsResources，统一使用germanSpecial

// 顶级学术期刊专题资源 - 按影响因子排序
// 1. QJE (35.995), 2. AER (25.102), 3. JF (22.836), 4. Econometrica (21.091), 5. REStud (19.166)
// 6. JFE (17.669), 7. JPE (17.087), 8. RFS (16.546), 9. AEJ:Macro (13.528), 10. JM (13.394)
export const topJournalsResources = [
  {
    name: "经济学季刊 (QJE)",
    url: "https://academic.oup.com/qje?login=false",
    description: "历史最悠久、最权威的经济学期刊之一，发表突破性理论与实证研究",
    tags: ["顶级期刊", "综合经济学", "高影响因子", "理论前沿"]
  },
  {
    name: "美国经济评论 (AER)",
    url: "https://www.aeaweb.org/journals/aer",
    description: "美国经济学会旗舰期刊，发表经济学各领域高质量研究",
    tags: ["顶级期刊", "综合经济学", "美国经济学会", "权威发表"]
  },
  {
    name: "金融学期刊 (JF)",
    url: "https://afajof.org/journal-of-finance/",
    description: "美国金融学会领先期刊，涵盖金融学所有主要领域",
    tags: ["顶级期刊", "金融学", "高影响因子", "美国金融学会"]
  },
  {
    name: "计量经济学 (Econometrica)",
    url: "https://www.econometricsociety.org/publications/econometrica",
    description: "计量经济学会顶级期刊，专注理论与应用计量经济学",
    tags: ["顶级期刊", "计量经济学", "理论方法", "学会期刊"]
  },
  {
    name: "经济研究评论 (REStud)",
    url: "https://www.restud.com/",
    description: "欧洲顶级经济学期刊，发表创新性理论与实证研究",
    tags: ["顶级期刊", "综合经济学", "欧洲权威", "创新研究"]
  },
  {
    name: "金融经济学期刊 (JFE)",
    url: "https://www.jfinec.com/",
    description: "顶级期刊，专注金融经济学与公司金融研究",
    tags: ["顶级期刊", "金融经济学", "公司金融", "专业研究"]
  },
  {
    name: "政治经济学期刊 (JPE)",
    url: "https://www.journals.uchicago.edu/toc/jpe/current",
    description: "芝加哥大学旗舰经济学期刊，以严谨理论与实证研究著称",
    tags: ["顶级期刊", "政治经济学", "芝加哥学派", "严谨研究"]
  },
  {
    name: "金融研究评论 (RFS)",
    url: "https://academic.oup.com/rfs",
    description: "金融研究领域顶级学术期刊，牛津大学出版社发行",
    tags: ["顶级期刊", "金融研究", "学术权威", "牛津出版"]
  },
  {
    name: "美国经济期刊：宏观经济学 (AEJ:Macro)",
    url: "https://www.aeaweb.org/journals/mac",
    description: "美国经济学会专业期刊，专注宏观经济理论与政策分析",
    tags: ["顶级期刊", "宏观经济学", "美国经济学会", "政策分析"]
  },
  {
    name: "营销学期刊 (JM)",
    url: "https://journals.sagepub.com/home/jmx",
    description: "营销研究领域顶级期刊，发表消费者行为与营销策略前沿研究",
    tags: ["顶级期刊", "营销学", "消费者行为", "策略研究"]
  }
];

// 学习资源专题 - 经济学学习的精选资源
export const learningResourcesSpecial = [
  {
    name: "麻省理工开放课程 (MIT OCW)",
    url: "https://ocw.mit.edu/search/?q=economics",
    description: "麻省理工学院开放课程，覆盖微观、宏观、计量经济学等核心课程",
    tags: ["顶级大学", "免费课程", "全面系统", "英文教学"]
  },
  {
    name: "哈佛肯尼迪学院",
    url: "https://www.hks.harvard.edu/educational-programs/executive-education",
    description: "哈佛肯尼迪学院公共政策与经济学在线课程",
    tags: ["顶级大学", "公共政策", "执行教育", "权威师资"]
  },
  {
    name: "可汗学院经济学",
    url: "https://www.khanacademy.org/economics-finance-domain",
    description: "可汗学院经济学免费课程，适合经济学入门和复习",
    tags: ["免费学习", "基础入门", "中文字幕", "互动练习"]
  },
  {
    name: "Coursera经济学专业课程",
    url: "https://www.coursera.org/browse/business/economics",
    description: "Coursera经济学专业课程，来自顶级大学的系统性课程",
    tags: ["专业认证", "系统学习", "大学课程", "付费优质"]
  },
  {
    name: "边际革命大学",
    url: "https://mru.org/",
    description: "边际革命大学，专注现代经济学教育的创新在线平台",
    tags: ["现代教学", "经济思维", "免费资源", "创新方法"]
  },
  {
    name: "BBC货币大师：凯恩斯篇",
    url: "https://www.youtube.com/watch?v=CkHooEp3vRE",
    description: "BBC《Masters of Money》系列凯恩斯篇，深入解析凯恩斯主义经济学",
    tags: ["经典纪录片", "经济学史", "理论对比", "通俗易懂"]
  },
  {
    name: "BBC货币大师：哈耶克篇",
    url: "https://www.youtube.com/watch?v=EIYqTj402PE",
    description: "BBC《Masters of Money》系列哈耶克篇，探讨自由市场与政府干预的争论",
    tags: ["经典纪录片", "自由市场", "哈耶克思想", "思辨性强"]
  },
  {
    name: "BBC货币大师：马克思篇",
    url: "https://www.youtube.com/watch?v=oaIpYo3Z5lc",
    description: "BBC《Masters of Money》系列马克思篇，重新审视马克思的经济学理论",
    tags: ["经典纪录片", "马克思主义", "资本主义", "历史视角"]
  },
  // 合并学术研究资源
  {
    name: "社会科学研究网络 (SSRN)",
    url: "https://www.ssrn.com",
    description: "社会科学研究网络，下载最新工作论文和研究报告",
    tags: ["学术论文", "免费下载", "全球研究", "工作论文"]
  },
  {
    name: "美国国家经济研究局 (NBER)",
    url: "https://www.nber.org",
    description: "美国国家经济研究局，权威经济学研究和政策评估",
    tags: ["权威研究", "美国视角", "政策评估", "实证研究"]
  },
  {
    name: "arXiv经济学预印本",
    url: "https://arxiv.org/archive/q-fin",
    description: "经济学和金融学预印本论文平台，最新研究成果",
    tags: ["预印本论文", "最新研究", "免费获取", "全球论文"]
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
    description: "中国央行官网，货币政策、金融监管政策权威发布",
    tags: ["中国央行", "货币政策", "金融监管", "官方权威"]
  },
  {
    name: "美国联邦储备系统",
    url: "https://www.federalreserve.gov",
    description: "美国央行，全球货币政策风向标和金融稳定指标",
    tags: ["美联储", "货币政策", "全球影响", "金融稳定"]
  },
  {
    name: "欧洲中央银行",
    url: "https://www.ecb.europa.eu",
    description: "欧洲央行官网，欧元区货币政策和金融监管",
    tags: ["欧洲央行", "欧元区", "货币政策", "金融监管"]
  },
  {
    name: "国家发展改革委员会",
    url: "https://www.ndrc.gov.cn",
    description: "国家发展和改革委员会，宏观经济政策制定和发展规划",
    tags: ["国家发改委", "宏观政策", "发展规划", "官方政策"]
  },
  {
    name: "中华人民共和国财政部",
    url: "https://www.mof.gov.cn",
    description: "中国财政部，财政政策与税收政策制定执行",
    tags: ["财政部", "财政政策", "税收政策", "预算管理"]
  },
  {
    name: "工业和信息化部",
    url: "https://www.miit.gov.cn",
    description: "工业和信息化部，产业政策与数字经济发展",
    tags: ["工信部", "产业政策", "数字经济", "工业发展"]
  },
  {
    name: "商务部",
    url: "https://www.mofcom.gov.cn",
    description: "对外贸易政策与投资促进，开放型经济政策",
    tags: ["商务部", "贸易政策", "投资促进", "对外开放"]
  },
  {
    name: "国家统计局",
    url: "https://www.stats.gov.cn",
    description: "官方经济数据发布与统计分析，国民经济核算",
    tags: ["国家统计局", "经济数据", "统计分析", "官方发布"]
  },
  {
    name: "银行保险监督管理委员会",
    url: "https://www.cbirc.gov.cn",
    description: "银行业和保险业监督管理委员会，金融风险防控",
    tags: ["银保监会", "金融监管", "风险防控", "银行保险"]
  },
  {
    name: "证券监督管理委员会",
    url: "https://www.csrc.gov.cn",
    description: "证券监督管理委员会，资本市场监管和投资者保护",
    tags: ["证监会", "资本市场", "证券监管", "投资者保护"]
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
    name: "美联储经济数据库 (FRED)",
    url: "https://fred.stlouisfed.org",
    description: "美联储圣路易斯分行经济数据库，全球最权威的经济数据平台",
    tags: ["美联储数据", "宏观经济", "权威数据库", "免费获取"]
  },
  {
    name: "世界银行开放数据",
    url: "https://data.worldbank.org",
    description: "全球发展指标和国家统计数据，涵盖200多个国家",
    tags: ["世界银行", "全球数据", "发展指标", "国家统计"]
  },
  {
    name: "国际货币基金组织数据库",
    url: "https://data.imf.org",
    description: "国际货币基金组织官方数据和统计，全球金融稳定指标",
    tags: ["IMF数据", "国际金融", "货币统计", "官方数据"]
  },
  {
    name: "经合组织统计数据 (OECD)",
    url: "https://data.oecd.org",
    description: "经济合作与发展组织统计数据，发达国家经济指标",
    tags: ["OECD数据", "发达国家", "经济统计", "政策分析"]
  },
  {
    name: "全球经济指标 (Trading Economics)",
    url: "https://tradingeconomics.com",
    description: "实时经济指标、市场数据和预测分析，覆盖196个国家",
    tags: ["实时数据", "经济指标", "市场预测", "全球覆盖"]
  },
  {
    name: "万得金融数据 (Wind)",
    url: "https://www.wind.com.cn",
    description: "中国领先的金融数据提供商，专业投资研究平台",
    tags: ["中国数据", "金融数据", "专业平台", "投资研究"]
  },
  {
    name: "CEIC全球数据库",
    url: "https://www.ceicdata.com",
    description: "亚洲经济数据专业平台，新兴市场数据权威来源",
    tags: ["亚洲数据", "新兴市场", "专业数据库", "经济分析"]
  },
  {
    name: "欧盟统计局 (Eurostat)",
    url: "https://ec.europa.eu/eurostat",
    description: "欧盟统计局官方数据，欧洲经济社会统计权威",
    tags: ["欧盟数据", "官方统计", "欧洲经济", "社会指标"]
  },
  {
    name: "国际清算银行统计",
    url: "https://www.bis.org/statistics",
    description: "国际银行业和金融市场统计，全球金融稳定监测",
    tags: ["国际清算银行", "金融统计", "银行业数据", "金融稳定"]
  },
  // 合并数据获取资源
  {
    name: "中国家庭金融调查 (CHFS)",
    url: "http://chfs.swufe.edu.cn",
    description: "中国家庭资产负债微观数据(2011-2023)，权威家庭金融研究数据",
    tags: ["中国微观数据", "家庭金融", "需要申请", "学术研究"]
  },
  {
    name: "德国社会经济面板 (SOEP)",
    url: "https://www.diw.de/soep",
    description: "3万德国家庭的长期跟踪数据，欧洲最大家庭面板调查",
    tags: ["德国数据", "面板数据", "学术申请", "长期跟踪"]
  },
  {
    name: "OECD统计平台",
    url: "https://stats.oecd.org",
    description: "OECD成员国结构化数据平台，互动式数据查询工具",
    tags: ["OECD统计", "结构化数据", "免费获取", "互动查询"]
  }
];

// 市场分析专题
export const marketSpecial = [
  {
    name: "上海证券交易所",
    url: "https://www.sse.com.cn",
    description: "A股主板市场信息和数据，中国资本市场主要平台",
    tags: ["A股市场", "主板交易", "中国资本", "官方数据"]
  },
  {
    name: "深圳证券交易所",
    url: "https://www.szse.cn",
    description: "创业板和中小板市场信息，支持创新企业发展",
    tags: ["创业板", "中小板", "创新企业", "中国资本"]
  },
  {
    name: "香港交易所",
    url: "https://www.hkex.com.hk",
    description: "港股市场和中概股信息，亚洲国际金融中心",
    tags: ["港股市场", "中概股", "国际金融", "亚洲中心"]
  },
  {
    name: "纽约证券交易所",
    url: "https://www.nyse.com",
    description: "全球最大股票交易所，世界金融中心核心平台",
    tags: ["美股市场", "纽交所", "全球最大", "金融中心"]
  },
  {
    name: "纳斯达克交易所",
    url: "https://www.nasdaq.com",
    description: "科技股集中的交易所，全球科技企业聚集地",
    tags: ["科技股", "纳斯达克", "美国市场", "科技企业"]
  },
  {
    name: "芝加哥商品交易所",
    url: "https://www.cmegroup.com",
    description: "全球最大的期货和期权交易所，衍生品市场领导者",
    tags: ["期货交易", "期权市场", "商品期货", "衍生品"]
  },
  // 合并部分市场观察的优质资源
  {
    name: "前瞻产业研究院",
    url: "https://www.qianzhan.com/analyst",
    description: "AI、新能源等细分行业报告，产业发展趋势分析",
    tags: ["中国市场", "行业分析", "产业研究", "趋势报告"]
  },
  {
    name: "MacroMicro产业地图",
    url: "https://sc.macromicro.me/collections",
    description: "产业链数据可视化工具，全球市场关联分析",
    tags: ["全球市场", "数据可视化", "产业链分析", "交互工具"]
  }
];

// 工具专题
export const toolsSpecial = [
  {
    name: "彭博终端 (Bloomberg Terminal)",
    url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/",
    description: "全球金融市场数据分析的专业终端，金融行业标准工具",
    tags: ["专业终端", "实时数据", "付费高端", "行业标准"]
  },
  {
    name: "经济学Python编程",
    url: "https://python.quantecon.org/",
    description: "经济学Python编程教程与工具包，量化经济分析利器",
    tags: ["编程工具", "数据分析", "免费学习", "量化分析"]
  },
  {
    name: "R语言计量经济学",
    url: "https://www.econometrics-with-r.org/",
    description: "R语言计量经济学应用指南，统计建模专业工具",
    tags: ["统计软件", "计量分析", "免费工具", "统计建模"]
  },
  {
    name: "Stata统计软件",
    url: "https://www.stata.com/",
    description: "专业统计分析软件，经济学研究标准工具",
    tags: ["统计软件", "计量经济", "付费专业", "学术标准"]
  },
  // 保留实用工具的核心资源，已在原toolsSpecial中
  {
    name: "美国通胀计算器",
    url: "https://www.usinflationcalculator.com",
    description: "基于历史CPI计算真实购买力，通胀影响分析工具",
    tags: ["通胀计算", "购买力分析", "历史CPI", "实用工具"]
  },
  {
    name: "我们的数据世界",
    url: "https://ourworldindata.org",
    description: "数据驱动的全球发展趋势可视化平台，权威发展数据",
    tags: ["全球数据", "数据可视化", "发展趋势", "免费获取"]
  },
  {
    name: "Zotero文献管理",
    url: "https://www.zotero.org",
    description: "学术参考文献管理工具，研究者必备软件",
    tags: ["文献管理", "学术工具", "免费软件", "研究辅助"]
  },
  {
    name: "经济学图书馆",
    url: "https://www.econlib.org",
    description: "自由市场经济思想资源与书籍，经济学经典读物",
    tags: ["自由市场", "经济思想", "图书资源", "经典读物"]
  }
];

// 德国专题 - 德国经济学研究的专业资源和机构
export const germanSpecial = [
  // 原有德国专题资源
  {
    name: "德国联邦银行",
    url: "https://www.bundesbank.de",
    description: "德国央行官网，提供货币政策、经济研究报告",
    tags: ["德国央行", "货币政策", "经济研究", "官方机构"]
  },
  {
    name: "德国联邦统计局",
    url: "https://www.destatis.de",
    description: "德国官方统计数据门户，国民经济统计权威来源",
    tags: ["官方统计", "经济数据", "德国数据", "统计分析"]
  },
  {
    name: "德国经济研究所",
    url: "https://www.diw.de",
    description: "德国权威经济智库，关注房屋危机与移民经济学",
    tags: ["经济智库", "政策研究", "独立机构", "德国研究"]
  },
  {
    name: "德国联邦经济部",
    url: "https://www.bmwi.de",
    description: "联邦经济与能源部，德国经济政策制定部门",
    tags: ["经济政策", "能源政策", "官方部门", "政策制定"]
  },
  {
    name: "德国对华政策研究所",
    url: "https://www.merics.org",
    description: "专门研究中国经济，德企对华投资风险评估",
    tags: ["中德关系", "中国研究", "投资分析", "地缘经济"]
  },
  {
    name: "德国经济专家委员会",
    url: "https://www.sachverstaendigenrat-wirtschaft.de",
    description: "德国经济专家委员会，经济形势年度评估",
    tags: ["专家委员会", "经济评估", "年度报告", "政策咨询"]
  },
  {
    name: "法兰克福证券交易所",
    url: "https://www.boerse-frankfurt.de",
    description: "欧洲重要金融市场，实时行情与分析",
    tags: ["金融市场", "证券交易", "实时数据", "欧洲金融"]
  },
  {
    name: "德国工商总会",
    url: "https://www.dihk.de",
    description: "德国工商界代表机构，企业经营环境报告",
    tags: ["工商组织", "企业环境", "商业报告", "行业代表"]
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