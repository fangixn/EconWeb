import { Language } from './i18n';

// 资源国际化数据
export const resourceTranslations = {
  en: {
    // Functional Categories
    categories: {
      "找数据": {
        title: "Data Access",
        description: "Access macro data, micro surveys, and economic indicators",
        subcategories: {
          "宏观数据库": "Macro Databases",
          "微观调查库": "Micro Survey Data",
          "景气指数": "Business Climate Indices"
        }
      },
      "读政策": {
        title: "Policy Analysis",
        description: "Latest policy papers, central bank reports and analysis",
        subcategories: {
          "中国政策": "China Policy",
          "德国政策": "German Policy", 
          "国际组织": "International Organizations"
        }
      },
      "看市场": {
        title: "Market Analysis",
        description: "Industry analysis, investment tools and company data",
        subcategories: {
          "行业分析": "Industry Analysis",
          "投资工具": "Investment Tools",
          "公司数据": "Company Data"
        }
      }
    },
    
    // Resource Type Categories
    resourceTypes: {
      "报告发布机构": {
        title: "Authorities",
        description: "Official reports from international organizations and government agencies"
      },
      "论文与学术资源": {
        title: "Academic Papers",
        description: "Economics journals and academic resource platforms"
      },
      "数据与统计资源": {
        title: "Data & Statistics", 
        description: "Economic databases and statistical platforms"
      },
      "智库与研究机构": {
        title: "Think Tanks",
        description: "Independent think tanks and research institutions"
      },
      "公开课与学习资源": {
        title: "Online Learning",
        description: "Economics online courses and educational resources"
      },
      "实用工具与推荐书单": {
        title: "Practical Tools",
        description: "Economic research and learning tools"
      },
      "媒体与资讯平台": {
        title: "Media & News",
        description: "Authoritative financial media and news platforms"
      },
      "新媒体与知识平台": {
        title: "Knowledge Services",
        description: "New media and knowledge service platforms"
      }
    },

    // Resource descriptions (key resources only)
    resources: {
      "国家统计局数据库": {
        name: "National Bureau of Statistics Database",
        description: "Covers 3,881 statistical indicators including monthly/quarterly/annual and census data"
      },
      "世界银行Open Data": {
        name: "World Bank Open Data",
        description: "Free global development data platform covering economic, social, and environmental fields"
      },
      "联邦统计局 (Destatis)": {
        name: "Federal Statistical Office (Destatis)",
        description: "German GDP/CPI/trade data with Excel/CSV downloads"
      },
      "FRED经济数据": {
        name: "FRED Economic Data",
        description: "Federal Reserve economic database with 500,000+ time series"
      },
      "中国家庭金融调查(CHFS)": {
        name: "China Household Finance Survey (CHFS)",
        description: "Household asset/liability micro data (2011-2023)"
      },
      "德国社会经济面板(SOEP)": {
        name: "German Socio-Economic Panel (SOEP)",
        description: "30,000 German household longitudinal tracking data"
      },
      "IFO商业景气指数": {
        name: "IFO Business Climate Index",
        description: "Manufacturing/service survey based on 9,000 German companies"
      },
      "ZEW经济景气指数": {
        name: "ZEW Economic Sentiment Index",
        description: "Financial expert expectations index for Germany and Eurozone"
      },
      "国务院政策解读专栏": {
        name: "State Council Policy Interpretation",
        description: "Authoritative interpretation of Central Document No. 1, economic reforms, etc."
      },
      "央行货币政策报告": {
        name: "Central Bank Monetary Policy Report",
        description: "Quarterly monetary policy implementation reports and policy tool explanations"
      },
      "五贤人年度评估报告": {
        name: "German Council of Economic Experts Annual Report",
        description: "Authoritative analysis by German Economic Advisory Council"
      },
      "联邦经济事务和气候行动部": {
        name: "Federal Ministry for Economic Affairs and Climate Action",
        description: "Industrial policy and energy transition roadmap"
      },
      "IMF政策追踪": {
        name: "IMF Policy Tracker",
        description: "Global fiscal and monetary policy analysis"
      },
      "OECD经济展望": {
        name: "OECD Economic Outlook",
        description: "Economic forecasts and structural reform recommendations for 38 member countries"
      },
      "前瞻经济学人": {
        name: "Qianzhan Economist",
        description: "AI/new energy and other segmented industry reports"
      },
      "德国汽车工业协会(VDA)": {
        name: "German Association of the Automotive Industry (VDA)",
        description: "Electric vehicle transformation and supply chain white papers"
      },
      "MacroMicro产业图谱": {
        name: "MacroMicro Industry Map",
        description: "Industrial chain data visualization tool"
      },
      "德国DAX指数分析": {
        name: "German DAX Index Analysis",
        description: "IFO index and stock market correlation dashboard"
      },
      "巨潮信息网": {
        name: "CNINFO",
        description: "Legal disclosure platform for Chinese listed companies"
      },
      "德国企业信用库": {
        name: "German Corporate Credit Database",
        description: "Interactive map of corporate credit risk"
      },
      "德国央行": {
        name: "Deutsche Bundesbank",
        description: "Monetary policy reports and financial stability data"
      },
      "弗劳恩霍夫研究所": {
        name: "Fraunhofer Institute",
        description: "Industry 4.0 and hydrogen technology reports"
      },
      "GENESIS区域数据库": {
        name: "GENESIS Regional Database",
        description: "German state economic comparison tool"
      },
      "能源转型监测": {
        name: "Energy Transition Monitoring",
        description: "Green hydrogen strategy and carbon pricing mechanisms"
      }
    },

    // Tags translations
    tags: {
      "中国": "China",
      "免费": "Free",
      "国际": "International", 
      "德国": "Germany",
      "多语言": "Multilingual",
      "美国": "USA",
      "API": "API",
      "微观": "Micro",
      "需申请": "Application Required",
      "学术": "Academic",
      "预测": "Forecasting",
      "金融市场": "Financial Markets",
      "官方": "Official",
      "实时": "Real-time",
      "金融": "Finance",
      "PDF": "PDF",
      "年度": "Annual",
      "政策文件": "Policy Documents",
      "英文": "English",
      "多国": "Multi-country",
      "日更": "Daily Updates",
      "汽车": "Automotive",
      "全球": "Global",
      "交互": "Interactive",
      "财报": "Financial Reports",
      "权威": "Authoritative",
      "发展": "Development",
      "统计": "Statistics",
      "欧洲": "Europe",
      "央行": "Central Bank",
      "货币政策": "Monetary Policy",
      "论文": "Papers",
      "索引": "Index",
      "开放获取": "Open Access",
      "实证": "Empirical",
      "复现": "Replication",
      "独立": "Independent",
      "智库": "Think Tank",
      "中德": "China-Germany",
      "地缘": "Geopolitical",
      "数据": "Data",
      "宏观": "Macro",
      "结构化": "Structured",
      "货币": "Currency",
      "课程": "Courses",
      "高级": "Advanced",
      "入门": "Beginner",
      "视频": "Video",
      "在线": "Online",
      "认证": "Certified",
      "付费": "Paid",
      "专业": "Professional",
      "工具": "Tools",
      "通胀": "Inflation",
      "可视化": "Visualization",
      "文献": "Literature",
      "管理": "Management",
      "理论": "Theory",
      "书籍": "Books",
      "自由市场": "Free Market",
      "深度": "In-depth",
      "调查": "Investigation",
      "专家": "Expert",
      "知识": "Knowledge",
      "商业": "Business",
      "历史": "History",
      "观察": "Observation",
      "创新": "Innovation",
      "逻辑": "Logic",
      "讨论": "Discussion",
      "社区": "Community",
      "大众": "Public",
      "趋势": "Trends",
      "科技": "Technology",
      "区域": "Regional",
      "定制": "Customized",
      "能源": "Energy"
    }
  },
  
  zh: {
    // Keep original Chinese as fallback
    categories: {
      "找数据": {
        title: "数据获取",
        description: "获取宏观经济数据、微观调查数据和景气指数",
        subcategories: {
          "宏观数据库": "宏观数据库",
          "微观调查库": "微观调查库",
          "景气指数": "景气指数"
        }
      },
      "读政策": {
        title: "政策研读",
        description: "获取最新政策文件、央行报告和政策解读",
        subcategories: {
          "中国政策": "中国政策",
          "德国政策": "德国政策",
          "国际组织": "国际组织"
        }
      },
      "看市场": {
        title: "市场分析",
        description: "行业分析、投资工具和公司数据",
        subcategories: {
          "行业分析": "行业分析",
          "投资工具": "投资工具",
          "公司数据": "公司数据"
        }
      }
    },
    
    resourceTypes: {
      "报告发布机构": {
        title: "权威机构",
        description: "国际组织和政府机构的官方报告"
      },
      "论文与学术资源": {
        title: "学术论文",
        description: "经济学论文库和学术资源平台"
      },
      "数据与统计资源": {
        title: "数据统计",
        description: "经济数据库和统计平台"
      },
      "智库与研究机构": {
        title: "智库研究",
        description: "独立智库和研究机构资源"
      },
      "公开课与学习资源": {
        title: "学习课程",
        description: "经济学在线课程和教育资源"
      },
      "实用工具与推荐书单": {
        title: "工具资源",
        description: "经济学研究和学习的实用工具"
      },
      "媒体与资讯平台": {
        title: "财经媒体",
        description: "权威财经媒体和资讯平台"
      },
      "新媒体与知识平台": {
        title: "知识服务",
        description: "新媒体和知识服务平台"
      }
    },

    resources: {
      "IMF (International Monetary Fund)": "IMF（国际货币基金组织）",
      "World Bank": "世界银行",
      "OECD (Organisation for Economic Co-operation and Development)": "OECD（经济合作与发展组织）",
      "People's Bank of China": "中国人民银行",
      "China National Bureau of Statistics": "中国国家统计局",
      "European Central Bank (ECB)": "欧洲央行（ECB）",
      "Federal Statistical Office (Destatis)": "联邦统计局 (Destatis)",
      "FRED Economic Data": "FRED经济数据",
      "China Household Finance Survey (CHFS)": "中国家庭金融调查(CHFS)",
      "German Socio-Economic Panel (SOEP)": "德国社会经济面板(SOEP)",
      "IMF Data": "IMF数据",
      "World Bank Data": "世界银行数据",
      "OECD.Stat": "OECD统计数据",
      "State Council Policy Interpretation Column": "国务院政策解读专栏",
      "PBOC Monetary Policy Report": "央行货币政策报告",
      "Five Sages Annual Assessment Report": "五贤人年度评估报告",
      "Federal Ministry for Economic Affairs and Climate Action": "联邦经济事务和气候行动部",
      "IMF Policy Tracker": "IMF政策追踪",
      "OECD Economic Outlook": "OECD经济展望",
      "SSRN": "SSRN",
      "EconStor": "EconStor",
      "NBER": "NBER",
      "arXiv Economics": "arXiv经济学",
      "Econometric Academic Network (CEAN)": "计量经济学术网络(CEAN)",
      "Harvard Dataverse": "哈佛数据仓库",
      "Qianzhan Industry Research": "前瞻经济学人",
      "German Association of the Automotive Industry (VDA)": "德国汽车工业协会(VDA)",
      "MacroMicro Industry Map": "MacroMicro产业图谱",
      "German DAX Index Analysis": "德国DAX指数分析",
      "CNINFO": "巨潮信息网",
      "German Corporate Credit Database": "德国企业信用库",
      "The Economist": "经济学人",
      "Financial Times": "金融时报",
      "Bloomberg": "彭博社",
      "Wall Street Journal": "华尔街日报",
      "Project Syndicate": "报业辛迪加",
      "VoxEU (CEPR)": "VoxEU (CEPR)",
      "Caixin": "财新网",
      "Yicai": "第一财经",
      "NBER Digest": "NBER文摘",
      "Brookings Institution": "布鲁金斯学会",
      "Peterson Institute for International Economics": "彼得森国际经济研究所",
      "Tsinghua PBC School of Finance Review": "清华五道口金融评论",
      "DIW Berlin Institute": "DIW柏林研究所",
      "Mercator Institute for China Studies": "墨卡托中国研究中心",
      "US Inflation Calculator": "美国通胀计算器",
      "Our World in Data": "用数据看世界",
      "Zotero": "Zotero",
      "Econlib": "经济学图书馆",
      "German Central Bank": "德国央行",
      "Deutsche Bundesbank": "德国央行",
      "Fraunhofer Institute": "弗劳恩霍夫研究所",
      "GENESIS Regional Database": "GENESIS区域数据库",
      "Energy Transition Monitoring": "能源转型监测",
      "IFO Business Climate Index": "IFO商业景气指数",
      "ZEW Economic Sentiment Index": "ZEW经济景气指数"
    },
    tags: {
      "International": "国际",
      "Authoritative": "权威",
      "Multilingual": "多语言",
      "Development": "发展",
      "Free": "免费",
      "Policy": "政策",
      "Statistics": "统计",
      "China": "中国",
      "Central Bank": "央行",
      "Official": "官方",
      "Europe": "欧洲",
      "Eurozone": "欧元区",
      "Germany": "德国",
      "Data": "数据",
      "USA": "美国",
      "API": "API",
      "Microdata": "微观数据",
      "Application Required": "需申请",
      "Academic": "学术",
      "Panel Data": "面板数据",
      "OECD": "OECD",
      "Real-time": "实时",
      "Financial": "金融",
      "PDF": "PDF",
      "Annual": "年度",
      "Climate": "气候",
      "Policy Documents": "政策文件",
      "English": "英文",
      "Multi-country": "多国",
      "Forecasts": "预测",
      "Global": "全球",
      "Research": "研究",
      "Preprints": "预印本",
      "Teaching": "教学",
      "Code": "代码",
      "Replication": "复现",
      "Daily Updates": "日更",
      "Industry": "行业",
      "Automotive": "汽车",
      "Interactive": "交互",
      "Visualization": "可视化",
      "Stock Market": "股市",
      "Financial Reports": "财报",
      "Risk": "风险",
      "Weekly": "周刊",
      "Business": "商业",
      "Economists": "经济学家",
      "Opinion": "观点",
      "Investigation": "调查",
      "Economics": "经济学",
      "Digest": "文摘",
      "Think Tank": "智库",
      "Finance": "金融",
      "Independent": "独立",
      "China-Germany": "中德",
      "Geopolitics": "地缘政治",
      "Inflation": "通胀",
      "Calculator": "计算器",
      "References": "参考文献",
      "Free Market": "自由市场",
      "Books": "书籍",
      "Technology": "科技",
      "Innovation": "创新",
      "Regional": "区域",
      "Customizable": "可定制",
      "Energy": "能源",
      "Business Climate": "商业景气",
      "Survey": "调查",
      "Economic Sentiment": "经济景气"
    }
  },
  
  ko: {
    // Korean translations (fallback to English for now)
    categories: {
      "找数据": {
        title: "데이터 접근",
        description: "거시 데이터, 미시 조사, 경제 지표 접근",
        subcategories: {
          "宏观数据库": "거시 데이터베이스",
          "微观调查库": "미시 조사 데이터",
          "景气指数": "경기 지수"
        }
      },
      "读政策": {
        title: "정책 분석",
        description: "최신 정책 문서, 중앙은행 보고서 및 분석",
        subcategories: {
          "中国政策": "중국 정책",
          "德国政策": "독일 정책",
          "国际组织": "국제기구"
        }
      },
      "看市场": {
        title: "시장 분석",
        description: "산업 분석, 투자 도구 및 기업 데이터",
        subcategories: {
          "行业分析": "산업 분석",
          "投资工具": "투자 도구",
          "公司数据": "기업 데이터"
        }
      }
    },
    resourceTypes: {
      "报告发布机构": { title: "권위 기관", description: "국제기구 및 정부기관의 공식 보고서" },
      "论文与学术资源": { title: "학술 논문", description: "경제학 저널 및 학술 자료 플랫폼" },
      "数据与统计资源": { title: "데이터 및 통계", description: "경제 데이터베이스 및 통계 플랫폼" },
      "智库与研究机构": { title: "싱크탱크", description: "독립 싱크탱크 및 연구기관" },
      "公开课与学习资源": { title: "온라인 학습", description: "경제학 온라인 과정 및 교육 자료" },
      "实用工具与推荐书单": { title: "실용 도구", description: "경제 연구 및 학습 도구" },
      "媒体与资讯平台": { title: "미디어 및 뉴스", description: "권위 있는 금융 미디어 및 뉴스 플랫폼" },
      "新媒体与知识平台": { title: "지식 서비스", description: "뉴미디어 및 지식 서비스 플랫폼" }
    },
    resources: {
      "IMF (International Monetary Fund)": "IMF（국제통화기금）",
      "World Bank": "세계은행",
      "OECD (Organisation for Economic Co-operation and Development)": "OECD（경제협력개발기구）",
      "People's Bank of China": "중국인민은행",
      "China National Bureau of Statistics": "중국국가통계국",
      "European Central Bank (ECB)": "유럽중앙은행（ECB）",
      "Federal Statistical Office (Destatis)": "연방통계청 (Destatis)",
      "FRED Economic Data": "FRED 경제데이터",
      "China Household Finance Survey (CHFS)": "중국가계금융조사(CHFS)",
      "German Socio-Economic Panel (SOEP)": "독일사회경제패널(SOEP)",
      "IMF Data": "IMF 데이터",
      "World Bank Data": "세계은행 데이터",
      "OECD.Stat": "OECD 통계데이터",
      "State Council Policy Interpretation Column": "국무원 정책해석 컬럼",
      "PBOC Monetary Policy Report": "중앙은행 통화정책 보고서",
      "Five Sages Annual Assessment Report": "5현인 연간평가 보고서",
      "Federal Ministry for Economic Affairs and Climate Action": "연방 경제사무 및 기후행동부",
      "IMF Policy Tracker": "IMF 정책 추적기",
      "OECD Economic Outlook": "OECD 경제전망",
      "SSRN": "SSRN",
      "EconStor": "EconStor",
      "NBER": "NBER",
      "arXiv Economics": "arXiv 경제학",
      "Econometric Academic Network (CEAN)": "계량경제학술네트워크(CEAN)",
      "Harvard Dataverse": "하버드 데이터버스",
      "Qianzhan Industry Research": "첸잔 산업연구",
      "German Association of the Automotive Industry (VDA)": "독일자동차공업협회(VDA)",
      "MacroMicro Industry Map": "MacroMicro 산업지도",
      "German DAX Index Analysis": "독일 DAX 지수분석",
      "CNINFO": "CNINFO",
      "German Corporate Credit Database": "독일기업신용데이터베이스",
      "The Economist": "이코노미스트",
      "Financial Times": "파이낸셜 타임스",
      "Bloomberg": "블룸버그",
      "Wall Street Journal": "월스트리트 저널",
      "Project Syndicate": "프로젝트 신디케이트",
      "VoxEU (CEPR)": "VoxEU (CEPR)",
      "Caixin": "차이신망",
      "Yicai": "제1재경",
      "NBER Digest": "NBER 다이제스트",
      "Brookings Institution": "브루킹스 연구소",
      "Peterson Institute for International Economics": "피터슨 국제경제연구소",
      "Tsinghua PBC School of Finance Review": "칭화 PBC 금융학원 리뷰",
      "DIW Berlin Institute": "DIW 베를린 연구소",
      "Mercator Institute for China Studies": "메르카토르 중국연구소",
      "US Inflation Calculator": "미국 인플레이션 계산기",
      "Our World in Data": "데이터로 보는 세상",
      "Zotero": "Zotero",
      "Econlib": "경제학 도서관",
      "German Central Bank": "독일중앙은행",
      "Deutsche Bundesbank": "독일중앙은행",
      "Fraunhofer Institute": "프라운호퍼 연구소",
      "GENESIS Regional Database": "GENESIS 지역데이터베이스",
      "Energy Transition Monitoring": "에너지 전환 모니터링",
      "IFO Business Climate Index": "IFO 기업경기지수",
      "ZEW Economic Sentiment Index": "ZEW 경제심리지수"
    },
    tags: {
      "International": "국제",
      "Authoritative": "권위",
      "Multilingual": "다국어",
      "Development": "개발",
      "Free": "무료",
      "Policy": "정책",
      "Statistics": "통계",
      "China": "중국",
      "Central Bank": "중앙은행",
      "Official": "공식",
      "Europe": "유럽",
      "Eurozone": "유로존",
      "Germany": "독일",
      "Data": "데이터",
      "USA": "미국",
      "API": "API",
      "Microdata": "미시데이터",
      "Application Required": "신청필요",
      "Academic": "학술",
      "Panel Data": "패널데이터",
      "OECD": "OECD",
      "Real-time": "실시간",
      "Financial": "금융",
      "PDF": "PDF",
      "Annual": "연간",
      "Climate": "기후",
      "Policy Documents": "정책문서",
      "English": "영어",
      "Multi-country": "다국가",
      "Forecasts": "예측",
      "Global": "글로벌",
      "Research": "연구",
      "Preprints": "사전인쇄본",
      "Teaching": "교육",
      "Code": "코드",
      "Replication": "복제",
      "Daily Updates": "일간업데이트",
      "Industry": "산업",
      "Automotive": "자동차",
      "Interactive": "상호작용",
      "Visualization": "시각화",
      "Stock Market": "주식시장",
      "Financial Reports": "재무보고서",
      "Risk": "위험",
      "Weekly": "주간",
      "Business": "비즈니스",
      "Economists": "경제학자",
      "Opinion": "의견",
      "Investigation": "조사",
      "Economics": "경제학",
      "Digest": "다이제스트",
      "Think Tank": "싱크탱크",
      "Finance": "금융",
      "Independent": "독립",
      "China-Germany": "중독",
      "Geopolitics": "지정학",
      "Inflation": "인플레이션",
      "Calculator": "계산기",
      "References": "참고문헌",
      "Free Market": "자유시장",
      "Books": "도서",
      "Technology": "기술",
      "Innovation": "혁신",
      "Regional": "지역",
      "Customizable": "맞춤형",
      "Energy": "에너지",
      "Business Climate": "기업경기",
      "Survey": "조사",
      "Economic Sentiment": "경제심리"
    }
  },
  
  ja: {
    // Japanese translations (fallback to English for now)
    categories: {
      "找数据": {
        title: "データアクセス",
        description: "マクロデータ、ミクロ調査、経済指標へのアクセス",
        subcategories: {
          "宏观数据库": "マクロデータベース",
          "微观调查库": "ミクロ調査データ",
          "景气指数": "景気指数"
        }
      },
      "读政策": {
        title: "政策分析",
        description: "最新の政策文書、中央銀行レポート、分析",
        subcategories: {
          "中国政策": "中国政策",
          "德国政策": "ドイツ政策",
          "国际组织": "国際機関"
        }
      },
      "看市场": {
        title: "市場分析",
        description: "業界分析、投資ツール、企業データ",
        subcategories: {
          "行业分析": "業界分析",
          "投资工具": "投資ツール",
          "公司数据": "企業データ"
        }
      }
    },
    resourceTypes: {
      "报告发布机构": { title: "権威機関", description: "国際機関および政府機関の公式レポート" },
      "论文与学术资源": { title: "学術論文", description: "経済学ジャーナルおよび学術リソースプラットフォーム" },
      "数据与统计资源": { title: "データ・統計", description: "経済データベースおよび統計プラットフォーム" },
      "智库与研究机构": { title: "シンクタンク", description: "独立シンクタンクおよび研究機関" },
      "公开课与学习资源": { title: "オンライン学習", description: "経済学オンラインコースおよび教育リソース" },
      "实用工具与推荐书单": { title: "実用ツール", description: "経済研究および学習ツール" },
      "媒体与资讯平台": { title: "メディア・ニュース", description: "権威ある金融メディアおよびニュースプラットフォーム" },
      "新媒体与知识平台": { title: "知識サービス", description: "ニューメディアおよび知識サービスプラットフォーム" }
    },
    resources: {
      "IMF (International Monetary Fund)": "IMF（国際通貨基金）",
      "World Bank": "世界銀行",
      "OECD (Organisation for Economic Co-operation and Development)": "OECD（経済協力開発機構）",
      "People's Bank of China": "中国人民銀行",
      "China National Bureau of Statistics": "中国国家統計局",
      "European Central Bank (ECB)": "欧州中央銀行（ECB）",
      "Federal Statistical Office (Destatis)": "連邦統計庁 (Destatis)",
      "FRED Economic Data": "FRED経済データ",
      "China Household Finance Survey (CHFS)": "中国家計金融調査(CHFS)",
      "German Socio-Economic Panel (SOEP)": "ドイツ社会経済パネル(SOEP)",
      "IMF Data": "IMFデータ",
      "World Bank Data": "世界銀行データ",
      "OECD.Stat": "OECD統計データ",
      "State Council Policy Interpretation Column": "国務院政策解釈コラム",
      "PBOC Monetary Policy Report": "中央銀行金融政策報告",
      "Five Sages Annual Assessment Report": "5賢人年次評価報告書",
      "Federal Ministry for Economic Affairs and Climate Action": "連邦経済・気候行動省",
      "IMF Policy Tracker": "IMF政策トラッカー",
      "OECD Economic Outlook": "OECD経済見通し",
      "SSRN": "SSRN",
      "EconStor": "EconStor",
      "NBER": "NBER",
      "arXiv Economics": "arXiv経済学",
      "Econometric Academic Network (CEAN)": "計量経済学術ネットワーク(CEAN)",
      "Harvard Dataverse": "ハーバードデータバース",
      "Qianzhan Industry Research": "前瞻産業研究",
      "German Association of the Automotive Industry (VDA)": "ドイツ自動車工業会(VDA)",
      "MacroMicro Industry Map": "MacroMicro産業マップ",
      "German DAX Index Analysis": "ドイツDAX指数分析",
      "CNINFO": "CNINFO",
      "German Corporate Credit Database": "ドイツ企業信用データベース",
      "The Economist": "エコノミスト",
      "Financial Times": "フィナンシャル・タイムズ",
      "Bloomberg": "ブルームバーグ",
      "Wall Street Journal": "ウォール・ストリート・ジャーナル",
      "Project Syndicate": "プロジェクト・シンジケート",
      "VoxEU (CEPR)": "VoxEU (CEPR)",
      "Caixin": "財新網",
      "Yicai": "第一財経",
      "NBER Digest": "NBERダイジェスト",
      "Brookings Institution": "ブルッキングス研究所",
      "Peterson Institute for International Economics": "ピーターソン国際経済研究所",
      "Tsinghua PBC School of Finance Review": "清華PBC金融学院レビュー",
      "DIW Berlin Institute": "DIWベルリン研究所",
      "Mercator Institute for China Studies": "メルカトル中国研究所",
      "US Inflation Calculator": "米国インフレ計算機",
      "Our World in Data": "Our World in Data",
      "Zotero": "Zotero",
      "Econlib": "経済学図書館",
      "German Central Bank": "ドイツ中央銀行",
      "Deutsche Bundesbank": "ドイツ連邦銀行",
      "Fraunhofer Institute": "フラウンホーファー研究所",
      "GENESIS Regional Database": "GENESIS地域データベース",
      "Energy Transition Monitoring": "エネルギー転換モニタリング",
      "IFO Business Climate Index": "IFO企業景況指数",
      "ZEW Economic Sentiment Index": "ZEW経済センチメント指数"
    },
    tags: {
      "International": "国際",
      "Authoritative": "権威的",
      "Multilingual": "多言語",
      "Development": "開発",
      "Free": "無料",
      "Policy": "政策",
      "Statistics": "統計",
      "China": "中国",
      "Central Bank": "中央銀行",
      "Official": "公式",
      "Europe": "ヨーロッパ",
      "Eurozone": "ユーロ圏",
      "Germany": "ドイツ",
      "Data": "データ",
      "USA": "米国",
      "API": "API",
      "Microdata": "ミクロデータ",
      "Application Required": "申請要",
      "Academic": "学術",
      "Panel Data": "パネルデータ",
      "OECD": "OECD",
      "Real-time": "リアルタイム",
      "Financial": "金融",
      "PDF": "PDF",
      "Annual": "年次",
      "Climate": "気候",
      "Policy Documents": "政策文書",
      "English": "英語",
      "Multi-country": "多国",
      "Forecasts": "予測",
      "Global": "グローバル",
      "Research": "研究",
      "Preprints": "プレプリント",
      "Teaching": "教育",
      "Code": "コード",
      "Replication": "複製",
      "Daily Updates": "日次更新",
      "Industry": "産業",
      "Automotive": "自動車",
      "Interactive": "インタラクティブ",
      "Visualization": "可視化",
      "Stock Market": "株式市場",
      "Financial Reports": "財務報告",
      "Risk": "リスク",
      "Weekly": "週次",
      "Business": "ビジネス",
      "Economists": "経済学者",
      "Opinion": "意見",
      "Investigation": "調査",
      "Economics": "経済学",
      "Digest": "ダイジェスト",
      "Think Tank": "シンクタンク",
      "Finance": "金融",
      "Independent": "独立",
      "China-Germany": "中独",
      "Geopolitics": "地政学",
      "Inflation": "インフレ",
      "Calculator": "計算機",
      "References": "参考文献",
      "Free Market": "自由市場",
      "Books": "書籍",
      "Technology": "技術",
      "Innovation": "革新",
      "Regional": "地域",
      "Customizable": "カスタマイズ可能",
      "Energy": "エネルギー",
      "Business Climate": "企業景況",
      "Survey": "調査",
      "Economic Sentiment": "経済センチメント"
    }
  },

  de: {
    // German translations
    categories: {
      "找数据": {
        title: "Datenzugang",
        description: "Zugang zu Makrodaten, Mikroumfragen und Wirtschaftsindikatoren",
        subcategories: {
          "宏观数据库": "Makrodatenbank",
          "微观调查库": "Mikroumfragedaten",
          "景气指数": "Konjunkturindex"
        }
      },
      "读政策": {
        title: "Politikanalyse",
        description: "Neueste Politikdokumente, Zentralbankberichte und Analysen",
        subcategories: {
          "中国政策": "China-Politik",
          "德国政策": "Deutschland-Politik",
          "国际组织": "Internationale Organisationen"
        }
      },
      "看市场": {
        title: "Marktanalyse",
        description: "Branchenanalyse, Investitionstools und Unternehmensdaten",
        subcategories: {
          "行业分析": "Branchenanalyse",
          "投资工具": "Investitionstools",
          "公司数据": "Unternehmensdaten"
        }
      }
    },
    resourceTypes: {
      "报告发布机构": { title: "Behörden", description: "Offizielle Berichte von internationalen Organisationen und Regierungsbehörden" },
      "论文与学术资源": { title: "Akademische Arbeiten", description: "Wirtschaftsjournale und akademische Ressourcenplattformen" },
      "数据与统计资源": { title: "Daten & Statistiken", description: "Wirtschaftsdatenbanken und Statistikplattformen" },
      "智库与研究机构": { title: "Think Tanks", description: "Unabhängige Think Tanks und Forschungsinstitute" },
      "公开课与学习资源": { title: "Online-Lernen", description: "Wirtschafts-Online-Kurse und Bildungsressourcen" },
      "实用工具与推荐书单": { title: "Praktische Tools", description: "Wirtschaftsforschungs- und Lerntools" },
      "媒体与资讯平台": { title: "Medien & News", description: "Autoritative Finanzmedien und Nachrichtenplattformen" },
      "新媒体与知识平台": { title: "Wissensservice", description: "Neue Medien und Wissensservice-Plattformen" }
    },
    resources: {
      "IMF (International Monetary Fund)": "IWF (Internationaler Währungsfonds)",
      "World Bank": "Weltbank",
      "OECD (Organisation for Economic Co-operation and Development)": "OECD (Organisation für wirtschaftliche Zusammenarbeit und Entwicklung)",
      "People's Bank of China": "Volksbank von China",
      "China National Bureau of Statistics": "Chinesisches Nationales Statistikamt",
      "European Central Bank (ECB)": "Europäische Zentralbank (EZB)",
      "Federal Statistical Office (Destatis)": "Statistisches Bundesamt (Destatis)",
      "FRED Economic Data": "FRED Wirtschaftsdaten",
      "China Household Finance Survey (CHFS)": "Chinesische Haushaltsfinanzumfrage (CHFS)",
      "German Socio-Economic Panel (SOEP)": "Deutsches Sozio-oekonomisches Panel (SOEP)",
      "IMF Data": "IWF-Daten",
      "World Bank Data": "Weltbank-Daten",
      "OECD.Stat": "OECD-Statistiken",
      "State Council Policy Interpretation Column": "Staatsrat-Politikinterpretationsspalte",
      "PBOC Monetary Policy Report": "PBOC-Geldpolitikbericht",
      "Five Sages Annual Assessment Report": "Fünf-Weisen-Jahresgutachten",
      "Federal Ministry for Economic Affairs and Climate Action": "Bundesministerium für Wirtschaft und Klimaschutz",
      "IMF Policy Tracker": "IWF-Politik-Tracker",
      "OECD Economic Outlook": "OECD-Wirtschaftsausblick",
      "SSRN": "SSRN",
      "EconStor": "EconStor",
      "NBER": "NBER",
      "arXiv Economics": "arXiv Wirtschaft",
      "Econometric Academic Network (CEAN)": "Ökonometrisches Akademisches Netzwerk (CEAN)",
      "Harvard Dataverse": "Harvard Dataverse",
      "Qianzhan Industry Research": "Qianzhan Industrieforschung",
      "German Association of the Automotive Industry (VDA)": "Verband der Automobilindustrie (VDA)",
      "MacroMicro Industry Map": "MacroMicro Industriekarte",
      "German DAX Index Analysis": "Deutsche DAX-Index-Analyse",
      "CNINFO": "CNINFO",
      "German Corporate Credit Database": "Deutsche Unternehmenskredit-Datenbank",
      "The Economist": "The Economist",
      "Financial Times": "Financial Times",
      "Bloomberg": "Bloomberg",
      "Wall Street Journal": "Wall Street Journal",
      "Project Syndicate": "Project Syndicate",
      "VoxEU (CEPR)": "VoxEU (CEPR)",
      "Caixin": "Caixin",
      "Yicai": "Yicai",
      "NBER Digest": "NBER Digest",
      "Brookings Institution": "Brookings Institution",
      "Peterson Institute for International Economics": "Peterson Institut für Internationale Wirtschaft",
      "Tsinghua PBC School of Finance Review": "Tsinghua PBC School of Finance Review",
      "DIW Berlin Institute": "DIW Berlin Institut",
      "Mercator Institute for China Studies": "Mercator Institut für China-Studien",
      "US Inflation Calculator": "US-Inflationsrechner",
      "Our World in Data": "Our World in Data",
      "Zotero": "Zotero",
      "Econlib": "Econlib",
      "German Central Bank": "Deutsche Bundesbank",
      "Deutsche Bundesbank": "Deutsche Bundesbank",
      "Fraunhofer Institute": "Fraunhofer-Institut",
      "GENESIS Regional Database": "GENESIS-Regionaldatenbank",
      "Energy Transition Monitoring": "Energiewende-Monitoring",
      "IFO Business Climate Index": "IFO-Geschäftsklimaindex",
      "ZEW Economic Sentiment Index": "ZEW-Konjunkturerwartungen"
    },
    tags: {
      "International": "International",
      "Authoritative": "Autoritativ",
      "Multilingual": "Mehrsprachig",
      "Development": "Entwicklung",
      "Free": "Kostenlos",
      "Policy": "Politik",
      "Statistics": "Statistiken",
      "China": "China",
      "Central Bank": "Zentralbank",
      "Official": "Offiziell",
      "Europe": "Europa",
      "Eurozone": "Eurozone",
      "Germany": "Deutschland",
      "Data": "Daten",
      "USA": "USA",
      "API": "API",
      "Microdata": "Mikrodaten",
      "Application Required": "Antrag erforderlich",
      "Academic": "Akademisch",
      "Panel Data": "Paneldaten",
      "OECD": "OECD",
      "Real-time": "Echtzeit",
      "Financial": "Finanziell",
      "PDF": "PDF",
      "Annual": "Jährlich",
      "Climate": "Klima",
      "Policy Documents": "Politikdokumente",
      "English": "Englisch",
      "Multi-country": "Mehrländer",
      "Forecasts": "Prognosen",
      "Global": "Global",
      "Research": "Forschung",
      "Preprints": "Preprints",
      "Teaching": "Lehre",
      "Code": "Code",
      "Replication": "Replikation",
      "Daily Updates": "Tägliche Updates",
      "Industry": "Industrie",
      "Automotive": "Automobil",
      "Interactive": "Interaktiv",
      "Visualization": "Visualisierung",
      "Stock Market": "Aktienmarkt",
      "Financial Reports": "Finanzberichte",
      "Risk": "Risiko",
      "Weekly": "Wöchentlich",
      "Business": "Geschäft",
      "Economists": "Ökonomen",
      "Opinion": "Meinung",
      "Investigation": "Untersuchung",
      "Economics": "Wirtschaft",
      "Digest": "Digest",
      "Think Tank": "Denkfabrik",
      "Finance": "Finanz",
      "Independent": "Unabhängig",
      "China-Germany": "China-Deutschland",
      "Geopolitics": "Geopolitik",
      "Inflation": "Inflation",
      "Calculator": "Rechner",
      "References": "Referenzen",
      "Free Market": "Freier Markt",
      "Books": "Bücher",
      "Technology": "Technologie",
      "Innovation": "Innovation",
      "Regional": "Regional",
      "Customizable": "Anpassbar",
      "Energy": "Energie",
      "Business Climate": "Geschäftsklima",
      "Survey": "Umfrage",
      "Economic Sentiment": "Wirtschaftsstimmung"
    }
  }
};

// 获取资源翻译的辅助函数
export function getResourceTranslation(lang: Language, type: 'categories' | 'resourceTypes' | 'resources' | 'tags', key: string, subKey?: string): string {
  const translations = resourceTranslations[lang] || resourceTranslations.zh;
  
  if (type === 'categories' && subKey) {
    return (translations.categories as any)[key]?.subcategories?.[subKey] || subKey;
  }
  
  if (type === 'categories') {
    return (translations.categories as any)[key]?.title || key;
  }
  
  if (type === 'resourceTypes') {
    return (translations.resourceTypes as any)[key]?.title || key;
  }
  
  if (type === 'resources' && subKey) {
    return (translations.resources as any)[key]?.[subKey] || key;
  }
  
  if (type === 'tags') {
    return (translations.tags as any)[key] || key;
  }
  
  return key;
}

// 获取资源描述的辅助函数
export function getResourceDescription(lang: Language, type: 'categories' | 'resourceTypes', key: string): string {
  const translations = resourceTranslations[lang] || resourceTranslations.zh;
  
  if (type === 'categories') {
    return (translations.categories as any)[key]?.description || '';
  }
  
  if (type === 'resourceTypes') {
    return (translations.resourceTypes as any)[key]?.description || '';
  }
  
  return '';
} 