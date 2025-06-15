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

    resources: {},
    tags: {}
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
    resources: {},
    tags: {}
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
    resources: {},
    tags: {}
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
    resources: {},
    tags: {}
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