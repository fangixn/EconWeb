import { Language } from './i18n';
import { getJournalTranslation } from './journalsI18n';

// 资源名称翻译对象接口
export interface ResourceTranslation {
  en: string;
  zh: string;
  ko: string;
  ja: string;
  de: string;
}

// 组织机构资源名称翻译 - 遵循本地化原则
export const organizationTranslations: Record<string, ResourceTranslation> = {
  "IMF (International Monetary Fund)": {
    en: "IMF (International Monetary Fund)",
    zh: "国际货币基金组织",
    ko: "IMF (국제통화기금)",
    ja: "IMF (国際通貨基金)",
    de: "IWF (Internationaler Währungsfonds)"
  },
  
  "World Bank": {
    en: "World Bank",
    zh: "世界银行",
    ko: "World Bank (세계은행)",
    ja: "World Bank (世界銀行)",
    de: "Weltbank"
  },
  
  "OECD (Organisation for Economic Co-operation and Development)": {
    en: "OECD (Organisation for Economic Co-operation and Development)",
    zh: "经济合作与发展组织",
    ko: "OECD (경제협력개발기구)",
    ja: "OECD (経済協力開発機構)",
    de: "OECD (Organisation für wirtschaftliche Zusammenarbeit und Entwicklung)"
  },
  
  "People's Bank of China": {
    en: "People's Bank of China",
    zh: "中国人民银行",
    ko: "People's Bank of China (중국인민은행)",
    ja: "People's Bank of China (中国人民銀行)",
    de: "People's Bank of China (Volksbank von China)"
  },
  
  "China National Bureau of Statistics": {
    en: "China National Bureau of Statistics",
    zh: "国家统计局",
    ko: "China National Bureau of Statistics (중국 국가통계국)",
    ja: "China National Bureau of Statistics (中国国家統計局)",
    de: "China National Bureau of Statistics (Nationales Statistikamt Chinas)"
  },
  
  "European Central Bank (ECB)": {
    en: "European Central Bank (ECB)",
    zh: "欧洲央行",
    ko: "European Central Bank (ECB) (유럽중앙은행)",
    ja: "European Central Bank (ECB) (欧州中央銀行)",
    de: "Europäische Zentralbank (EZB)"
  },
  
  "Federal Statistical Office (Destatis)": {
    en: "Federal Statistical Office (Destatis)",
    zh: "德国联邦统计局",
    ko: "Federal Statistical Office (Destatis) (독일 연방통계청)",
    ja: "Federal Statistical Office (Destatis) (ドイツ連邦統計庁)",
    de: "Statistisches Bundesamt (Destatis)"
  },
  
  "FRED Economic Data": {
    en: "FRED Economic Data",
    zh: "FRED经济数据库",
    ko: "FRED Economic Data (FRED 경제 데이터)",
    ja: "FRED Economic Data (FRED経済データ)",
    de: "FRED Economic Data (FRED-Wirtschaftsdaten)"
  }
};

// 数据获取资源名称翻译
export const dataSourceTranslations: Record<string, ResourceTranslation> = {
  "China Household Finance Survey (CHFS)": {
    en: "China Household Finance Survey (CHFS)",
    zh: "中国家庭金融调查",
    ko: "China Household Finance Survey (CHFS) (중국 가계금융조사)",
    ja: "China Household Finance Survey (CHFS) (中国世帯金融調査)",
    de: "China Household Finance Survey (CHFS) (Chinesische Haushaltsfinanzerhebung)"
  },
  
  "German Socio-Economic Panel (SOEP)": {
    en: "German Socio-Economic Panel (SOEP)",
    zh: "德国社会经济小组调查",
    ko: "German Socio-Economic Panel (SOEP) (독일 사회경제 패널)",
    ja: "German Socio-Economic Panel (SOEP) (ドイツ社会経済パネル)",
    de: "Sozio-oekonomisches Panel (SOEP)"
  },
  
  "IMF Data": {
    en: "IMF Data",
    zh: "IMF数据库",
    ko: "IMF Data (IMF 데이터)",
    ja: "IMF Data (IMFデータ)",
    de: "IWF-Daten"
  },
  
  "World Bank Data": {
    en: "World Bank Data",
    zh: "世界银行数据库",
    ko: "World Bank Data (세계은행 데이터)",
    ja: "World Bank Data (世界銀行データ)",
    de: "Weltbank-Daten"
  },
  
  "OECD.Stat": {
    en: "OECD.Stat",
    zh: "OECD统计数据库",
    ko: "OECD.Stat (OECD 통계)",
    ja: "OECD.Stat (OECD統計)",
    de: "OECD.Stat"
  }
};

// 政策研读资源名称翻译
export const policyAnalysisTranslations: Record<string, ResourceTranslation> = {
  "State Council Policy Interpretation Column": {
    en: "State Council Policy Interpretation Column",
    zh: "国务院政策解读专栏",
    ko: "State Council Policy Interpretation Column (국무원 정책해석 칼럼)",
    ja: "State Council Policy Interpretation Column (国務院政策解釈コラム)",
    de: "State Council Policy Interpretation Column (Staatsrat Politikinterpretationsspalte)"
  },
  
  "PBOC Monetary Policy Report": {
    en: "PBOC Monetary Policy Report",
    zh: "央行货币政策报告",
    ko: "PBOC Monetary Policy Report (중국인민은행 통화정책 보고서)",
    ja: "PBOC Monetary Policy Report (中国人民銀行通貨政策報告書)",
    de: "PBOC Monetary Policy Report (PBOC-Geldpolitikbericht)"
  },
  
  "Five Sages Annual Assessment Report": {
    en: "Five Sages Annual Assessment Report",
    zh: "德国五贤人年度评估报告",
    ko: "Five Sages Annual Assessment Report (독일 경제현인위원회 연간평가보고서)",
    ja: "Five Sages Annual Assessment Report (ドイツ経済諮問委員会年次評価報告書)",
    de: "Jahresgutachten des Sachverständigenrates"
  },
  
  "Federal Ministry for Economic Affairs and Climate Action": {
    en: "Federal Ministry for Economic Affairs and Climate Action",
    zh: "德国联邦经济与气候保护部",
    ko: "Federal Ministry for Economic Affairs and Climate Action (독일 연방경제기후보호부)",
    ja: "Federal Ministry for Economic Affairs and Climate Action (ドイツ連邦経済・気候保護省)",
    de: "Bundesministerium für Wirtschaft und Klimaschutz (BMWK)"
  },
  
  "IMF Policy Tracker": {
    en: "IMF Policy Tracker",
    zh: "IMF政策追踪",
    ko: "IMF Policy Tracker (IMF 정책 추적)",
    ja: "IMF Policy Tracker (IMF政策トラッカー)",
    de: "IWF-Policy-Tracker"
  },
  
  "OECD Economic Outlook": {
    en: "OECD Economic Outlook",
    zh: "OECD经济展望",
    ko: "OECD Economic Outlook (OECD 경제 전망)",
    ja: "OECD Economic Outlook (OECD経済見通し)",
    de: "OECD-Wirtschaftsausblick"
  }
};

// 学术研究资源名称翻译
export const academicResearchTranslations: Record<string, ResourceTranslation> = {
  "SSRN": {
    en: "SSRN",
    zh: "社会科学研究网络",
    ko: "SSRN (사회과학연구네트워크)",
    ja: "SSRN (社会科学研究ネットワーク)",
    de: "SSRN (Social Science Research Network)"
  },
  
  "EconStor": {
    en: "EconStor",
    zh: "EconStor经济学论文库",
    ko: "EconStor (경제학 논문 저장소)",
    ja: "EconStor (経済学論文リポジトリ)",
    de: "EconStor"
  },
  
  "NBER": {
    en: "NBER",
    zh: "美国国家经济研究局",
    ko: "NBER (미국 국가경제연구소)",
    ja: "NBER (全米経済研究所)",
    de: "NBER (Nationales Büro für Wirtschaftsforschung)"
  },
  
  "arXiv Economics": {
    en: "arXiv Economics",
    zh: "arXiv经济学预印本",
    ko: "arXiv Economics (arXiv 경제학)",
    ja: "arXiv Economics (arXiv経済学)",
    de: "arXiv Economics (arXiv-Wirtschaftswissenschaften)"
  },
  
  "Econometric Academic Network (CEAN)": {
    en: "Econometric Academic Network (CEAN)",
    zh: "计量经济学术网络",
    ko: "Econometric Academic Network (CEAN) (계량경제학술네트워크)",
    ja: "Econometric Academic Network (CEAN) (計量経済学術ネットワーク)",
    de: "Econometric Academic Network (CEAN) (Ökonometrisches Akademisches Netzwerk)"
  }
};

// 市场观察资源名称翻译
export const marketAnalysisTranslations: Record<string, ResourceTranslation> = {
  "Qianzhan Industry Research": {
    en: "Qianzhan Industry Research",
    zh: "前瞻产业研究院",
    ko: "Qianzhan Industry Research (첸잔 산업연구원)",
    ja: "Qianzhan Industry Research (前瞻産業研究院)",
    de: "Qianzhan Industry Research (Qianzhan-Industrieforschung)"
  },
  
  "German Association of the Automotive Industry (VDA)": {
    en: "German Association of the Automotive Industry (VDA)",
    zh: "德国汽车工业协会",
    ko: "German Association of the Automotive Industry (VDA) (독일 자동차공업협회)",
    ja: "German Association of the Automotive Industry (VDA) (ドイツ自動車工業会)",
    de: "Verband der Automobilindustrie (VDA)"
  },
  
  "MacroMicro Industry Map": {
    en: "MacroMicro Industry Map",
    zh: "MacroMicro产业地图",
    ko: "MacroMicro Industry Map (마크로마이크로 산업지도)",
    ja: "MacroMicro Industry Map (マクロマイクロ産業マップ)",
    de: "MacroMicro Industry Map (MacroMicro-Industriekarte)"
  },
  
  "German DAX Index Analysis": {
    en: "German DAX Index Analysis",
    zh: "德国DAX指数分析",
    ko: "German DAX Index Analysis (독일 DAX 지수 분석)",
    ja: "German DAX Index Analysis (ドイツDAX指数分析)",
    de: "DAX-Index-Analyse"
  },
  
  "CNINFO": {
    en: "CNINFO",
    zh: "巨潮资讯网",
    ko: "CNINFO (중국 상장회사 정보망)",
    ja: "CNINFO (中国上場企業情報網)",
    de: "CNINFO (Chinesisches Unternehmensinfoportal)"
  },
  
  "German Corporate Credit Database": {
    en: "German Corporate Credit Database",
    zh: "德国企业信贷数据库",
    ko: "German Corporate Credit Database (독일 기업신용 데이터베이스)",  
    ja: "German Corporate Credit Database (ドイツ企業信用データベース)",
    de: "Deutsche Unternehmenskreditdatenbank"
  }
};

// 财经资讯资源名称翻译
export const financialNewsTranslations: Record<string, ResourceTranslation> = {
  "The Economist": {
    en: "The Economist",
    zh: "经济学人",
    ko: "The Economist (이코노미스트)",
    ja: "The Economist (エコノミスト)",
    de: "The Economist"
  },
  
  "Financial Times": {
    en: "Financial Times",
    zh: "金融时报",
    ko: "Financial Times (파이낸셜 타임스)",
    ja: "Financial Times (フィナンシャル・タイムズ)",
    de: "Financial Times"
  },
  
  "Bloomberg": {
    en: "Bloomberg",
    zh: "彭博社",
    ko: "Bloomberg (블룸버그)",
    ja: "Bloomberg (ブルームバーグ)",
    de: "Bloomberg"
  },
  
  "Wall Street Journal": {
    en: "Wall Street Journal",
    zh: "华尔街日报",
    ko: "Wall Street Journal (월스트리트 저널)",
    ja: "Wall Street Journal (ウォール・ストリート・ジャーナル)",
    de: "Wall Street Journal"
  },
  
  "Project Syndicate": {
    en: "Project Syndicate",
    zh: "报业辛迪加",
    ko: "Project Syndicate (프로젝트 신디케이트)",
    ja: "Project Syndicate (プロジェクト・シンジケート)",
    de: "Project Syndicate"
  },
  
  "VoxEU (CEPR)": {
    en: "VoxEU (CEPR)",
    zh: "VoxEU欧洲经济政策研究中心",
    ko: "VoxEU (CEPR) (복스EU)",
    ja: "VoxEU (CEPR) (ボックスEU)",
    de: "VoxEU (CEPR)"
  },
  
  "Caixin": {
    en: "Caixin",
    zh: "财新网",
    ko: "Caixin (차이신)",
    ja: "Caixin (財新)",
    de: "Caixin (Chinesisches Finanzmedium)"
  },
  
  "Yicai": {
    en: "Yicai",
    zh: "第一财经",
    ko: "Yicai (이차이)",
    ja: "Yicai (第一財経)",
    de: "Yicai (Erste Finanzierung)"
  },
  
  "The Paper - Finance": {
    en: "The Paper - Finance",
    zh: "澎湃新闻-财经",
    ko: "The Paper - Finance (더 페이퍼 파이낸스)",
    ja: "The Paper - Finance (澎湃新聞-財経)",
    de: "The Paper - Finance (Das Papier - Finanzen)"
  },
  
  "21st Century Business Herald": {
    en: "21st Century Business Herald",
    zh: "21世纪经济报道",
    ko: "21st Century Business Herald (21세기 경제보도)",
    ja: "21st Century Business Herald (21世紀経済報道)",
    de: "21st Century Business Herald (21. Jahrhundert Geschäftsherald)"
  },
  
  "Jiemian Finance": {
    en: "Jiemian Finance",
    zh: "界面新闻-财经",
    ko: "Jiemian Finance (지에미안 파이낸스)",
    ja: "Jiemian Finance (界面財経)",
    de: "Jiemian Finance (Jiemian-Finanzen)"
  },
  
  "NetEase DataRead / DT Finance": {
    en: "NetEase DataRead / DT Finance",
    zh: "网易数读/DT财经",
    ko: "NetEase DataRead / DT Finance (넷이즈 데이터리드)",
    ja: "NetEase DataRead / DT Finance (ネットイース データリード)",
    de: "NetEase DataRead / DT Finance (NetEase-Datenlesung)"
  }
};

// 智库观点资源名称翻译
export const thinkTankTranslations: Record<string, ResourceTranslation> = {
  "NBER Digest": {
    en: "NBER Digest",
    zh: "NBER文摘",
    ko: "NBER Digest (NBER 다이제스트)",
    ja: "NBER Digest (NBER ダイジェスト)",
    de: "NBER Digest"
  },
  
  "Brookings Institution": {
    en: "Brookings Institution",
    zh: "布鲁金斯学会",
    ko: "Brookings Institution (브루킹스 연구소)",
    ja: "Brookings Institution (ブルッキングス研究所)",
    de: "Brookings Institution"
  },
  
  "Peterson Institute for International Economics": {
    en: "Peterson Institute for International Economics",
    zh: "彼得森国际经济研究所",
    ko: "Peterson Institute for International Economics (피터슨 국제경제연구소)",
    ja: "Peterson Institute for International Economics (ピーターソン国際経済研究所)",
    de: "Peterson Institute for International Economics (Peterson-Institut für Internationale Wirtschaft)"
  },
  
  "Tsinghua PBC School of Finance Review": {
    en: "Tsinghua PBC School of Finance Review",
    zh: "清华五道口金融评论",
    ko: "Tsinghua PBC School of Finance Review (칭화 오도구 금융평론)",
    ja: "Tsinghua PBC School of Finance Review (清華五道口金融評論)",
    de: "Tsinghua PBC School of Finance Review (Tsinghua-Finanzschulbericht)"
  },
  
  "DIW Berlin Institute": {
    en: "DIW Berlin Institute",
    zh: "柏林德国经济研究所",
    ko: "DIW Berlin Institute (독일 경제연구소 베를린)",
    ja: "DIW Berlin Institute (ベルリン・ドイツ経済研究所)",
    de: "Deutsches Institut für Wirtschaftsforschung (DIW Berlin)"
  },
  
  "Mercator Institute for China Studies": {
    en: "Mercator Institute for China Studies",
    zh: "墨卡托中国研究中心",
    ko: "Mercator Institute for China Studies (메르카토르 중국연구소)",
    ja: "Mercator Institute for China Studies (メルカトール中国研究所)",
    de: "Mercator Institute for China Studies (MERICS)"
  }
};

// 在线学习资源名称翻译
export const onlineLearningTranslations: Record<string, ResourceTranslation> = {
  "MIT OCW - Economics": {
    en: "MIT OCW - Economics",
    zh: "MIT开放课程-经济学",
    ko: "MIT OCW - Economics (MIT 오픈코스웨어 경제학)",
    ja: "MIT OCW - Economics (MIT オープンコースウェア経済学)",
    de: "MIT OCW - Economics (MIT-Offene-Kurse Wirtschaftswissenschaften)"
  },
  
  "Harvard Kennedy School": {
    en: "Harvard Kennedy School",
    zh: "哈佛肯尼迪学院",
    ko: "Harvard Kennedy School (하버드 케네디 스쿨)",
    ja: "Harvard Kennedy School (ハーバード・ケネディ・スクール)",
    de: "Harvard Kennedy School"
  },
  
  "Khan Academy - Economics": {
    en: "Khan Academy - Economics",
    zh: "可汗学院-经济学",
    ko: "Khan Academy - Economics (칸 아카데미 경제학)",
    ja: "Khan Academy - Economics (カーン・アカデミー経済学)",
    de: "Khan Academy - Economics (Khan-Akademie Wirtschaftswissenschaften)"
  },
  
  "Coursera - Economics": {
    en: "Coursera - Economics",
    zh: "Coursera在线课程平台",
    ko: "Coursera - Economics (코세라 경제학)",
    ja: "Coursera - Economics (コーセラ経済学)",
    de: "Coursera - Economics (Coursera-Wirtschaftswissenschaften)"
  },
  
  "Marginal Revolution University": {
    en: "Marginal Revolution University",
    zh: "边际革命大学",
    ko: "Marginal Revolution University (한계혁명 대학)",
    ja: "Marginal Revolution University (マージナル・レボリューション大学)",
    de: "Marginal Revolution University (Grenzrevolutions-Universität)"
  }
};

// 实用工具资源名称翻译
export const practicalToolsTranslations: Record<string, ResourceTranslation> = {
  "US Inflation Calculator": {
    en: "US Inflation Calculator",
    zh: "美国通胀计算器",
    ko: "US Inflation Calculator (미국 인플레이션 계산기)",
    ja: "US Inflation Calculator (米国インフレ計算機)",
    de: "US-Inflationsrechner"
  },
  
  "Our World in Data": {
    en: "Our World in Data",
    zh: "用数据看世界",
    ko: "Our World in Data (아워 월드 인 데이터)",
    ja: "Our World in Data (アワー・ワールド・イン・データ)",
    de: "Our World in Data (Unsere Welt in Daten)"
  },
  
  "Zotero": {
    en: "Zotero",
    zh: "Zotero文献管理",
    ko: "Zotero (조테로)",
    ja: "Zotero (ゾテロ)",
    de: "Zotero"
  },
  
  "Econlib": {
    en: "Econlib",
    zh: "经济学图书馆",
    ko: "Econlib (에코놀립)",
    ja: "Econlib (エコノリブ)",
    de: "Econlib (Wirtschaftsbibliothek)"
  }
};

// 德国专题资源名称翻译
export const germanEconomicsTranslations: Record<string, ResourceTranslation> = {
  "German Central Bank": {
    en: "German Central Bank",
    zh: "德国央行",
    ko: "German Central Bank (독일 중앙은행)",
    ja: "German Central Bank (ドイツ中央銀行)",
    de: "Deutsche Bundesbank"
  },
  
  "Fraunhofer Institute": {
    en: "Fraunhofer Institute",
    zh: "弗劳恩霍夫研究所",
    ko: "Fraunhofer Institute (프라운호퍼 연구소)",
    ja: "Fraunhofer Institute (フラウンホーファー研究所)",
    de: "Fraunhofer-Gesellschaft"
  },
  
  "GENESIS Regional Database": {
    en: "GENESIS Regional Database",
    zh: "GENESIS区域数据库",
    ko: "GENESIS Regional Database (제네시스 지역 데이터베이스)",
    ja: "GENESIS Regional Database (ジェネシス地域データベース)",
    de: "GENESIS-Regionaldatenbank"
  },
  
  "Energy Transition Monitoring": {
    en: "Energy Transition Monitoring",
    zh: "能源转型监测",
    ko: "Energy Transition Monitoring (에너지 전환 모니터링)",
    ja: "Energy Transition Monitoring (エネルギー転換モニタリング)",
    de: "Energiewende-Monitoring"
  },
  
  "IFO Business Climate Index": {
    en: "IFO Business Climate Index",
    zh: "IFO商业景气指数",
    ko: "IFO Business Climate Index (IFO 비즈니스 기후지수)",
    ja: "IFO Business Climate Index (IFOビジネス景況指数)",
    de: "IFO-Geschäftsklimaindex"
  },
  
  "ZEW Economic Sentiment Index": {
    en: "ZEW Economic Sentiment Index",
    zh: "ZEW经济景气指数",
    ko: "ZEW Economic Sentiment Index (ZEW 경제 심리지수)",
    ja: "ZEW Economic Sentiment Index (ZEW経済景況感指数)",
    de: "ZEW-Konjunkturerwartungen"
  }
};

// 通用资源翻译函数
export function getResourceTranslation(lang: Language, type: string, resourceName: string): string {
  // 如果是期刊，使用专门的期刊翻译函数
  if (type === 'resources' && getJournalTranslation(lang, resourceName) !== resourceName) {
    return getJournalTranslation(lang, resourceName);
  }
  
  // 如果是组织机构资源，使用组织机构翻译
  if (type === 'resources' && organizationTranslations[resourceName]) {
    return organizationTranslations[resourceName][lang];
  }
  
  // 如果是数据获取资源，使用数据获取翻译
  if (type === 'resources' && dataSourceTranslations[resourceName]) {
    return dataSourceTranslations[resourceName][lang];
  }
  
  // 如果是政策研读资源，使用政策研读翻译
  if (type === 'resources' && policyAnalysisTranslations[resourceName]) {
    return policyAnalysisTranslations[resourceName][lang];
  }
  
  // 如果是学术研究资源，使用学术研究翻译
  if (type === 'resources' && academicResearchTranslations[resourceName]) {
    return academicResearchTranslations[resourceName][lang];
  }
  
  // 如果是市场观察资源，使用市场观察翻译
  if (type === 'resources' && marketAnalysisTranslations[resourceName]) {
    return marketAnalysisTranslations[resourceName][lang];
  }
  
  // 如果是财经资讯资源，使用财经资讯翻译
  if (type === 'resources' && financialNewsTranslations[resourceName]) {
    return financialNewsTranslations[resourceName][lang];
  }
  
  // 如果是智库观点资源，使用智库观点翻译
  if (type === 'resources' && thinkTankTranslations[resourceName]) {
    return thinkTankTranslations[resourceName][lang];
  }
  
  // 如果是在线学习资源，使用在线学习翻译
  if (type === 'resources' && onlineLearningTranslations[resourceName]) {
    return onlineLearningTranslations[resourceName][lang];
  }
  
  // 如果是实用工具资源，使用实用工具翻译
  if (type === 'resources' && practicalToolsTranslations[resourceName]) {
    return practicalToolsTranslations[resourceName][lang];
  }
  
  // 如果是德国专题资源，使用德国专题翻译
  if (type === 'resources' && germanEconomicsTranslations[resourceName]) {
    return germanEconomicsTranslations[resourceName][lang];
  }
  
  // 对于标签的简单翻译
  if (type === 'tags') {
    const tagTranslations: Record<Language, Record<string, string>> = {
      en: {},
      zh: {
        'Top Tier': '顶级期刊',
        'General Economics': '一般经济学',
        'High Impact': '高影响因子',
        'Econometrics': '计量经济学',
        'Theory': '理论',
        'Finance': '金融学',
        'Financial Economics': '金融经济学',
        'Corporate Finance': '公司金融',
        'European': '欧洲',
        'Political Economy': '政治经济学',
        'Chicago School': '芝加哥学派',
        'Financial Studies': '金融研究',
        'AEA': '美国经济学会',
        'Monetary Economics': '货币经济学',
        'Central Banking': '央行研究',
        'Journal Collection': '期刊合集',
        'International': '国际',
        'Authoritative': '权威',
        'Multilingual': '多语言',
        'Development': '发展',
        'Free': '免费',
        'Policy': '政策',
        'Statistics': '统计',
        'China': '中国',
        'Central Bank': '央行',
        'Official': '官方',
        'Europe': '欧洲',
        'Eurozone': '欧元区',
        'Germany': '德国',
        'Data': '数据',
        'USA': '美国',
        'API': 'API',
        'Microdata': '微观数据',
        'Application Required': '需要申请',
        'Academic': '学术',
        'Panel Data': '面板数据',
        'OECD': '经合组织',
        'Real-time': '实时',
        'Financial': '金融',
        'PDF': 'PDF',
        'Annual': '年度',
        'Policy Documents': '政策文件',
        'Climate': '气候',
        'English': '英语',
        'Multi-country': '多国',
        'Forecasts': '预测',
        'Global': '全球',
        'Open Access': '开放获取',
        'Research': '研究',
        'Preprints': '预印本',
        'Teaching': '教学',
        'Code': '代码',
        'Daily Updates': '每日更新',
        'Industry': '行业',
        'Automotive': '汽车',
        'Interactive': '交互式',
        'Visualization': '可视化',
        'Stock Market': '股市',
        'Financial Reports': '财报',
        'Risk': '风险',
        'Weekly': '周刊',
        'Business': '商业',
        'Economists': '经济学家',
        'Opinion': '观点',
        'Investigation': '调查',
        'Economics': '经济学',
        'Macroeconomics': '宏观经济学',
        'Technology': '技术',
        'New Economy': '新经济',
        'Data Visualization': '数据可视化',
        'Trends': '趋势',
        'Digest': '文摘',
        'Think Tank': '智库',
        'Independent': '独立',
        'China-Germany': '中德',
        'Geopolitics': '地缘政治',
        'MIT': 'MIT',
        'Courses': '课程',
        'Harvard': '哈佛',
        'Basic': '基础',
        'Video': '视频',
        'University': '大学',
        'Online': '在线',
        'Certification': '认证',
        'Inflation': '通胀',
        'Calculator': '计算器',
        'References': '文献',
        'Free Market': '自由市场',
        'Resources': '资源',
        'Books': '书籍',
        'Innovation': '创新',
        'Regional': '区域',
        'Customizable': '可定制',
        'Energy': '能源',
        'Business Climate': '商业环境',
        'Survey': '调查',
        'Economic Sentiment': '经济情绪'
      },
      ko: {
        'Top Tier': '최고 등급',
        'General Economics': '일반 경제학',
        'High Impact': '높은 영향력',
        'Econometrics': '계량경제학',
        'Theory': '이론',
        'Finance': '금융',
        'Financial Economics': '금융경제학',
        'Corporate Finance': '기업금융',
        'European': '유럽',
        'Political Economy': '정치경제학',
        'Chicago School': '시카고 학파',
        'Financial Studies': '금융연구',
        'AEA': '미국경제학회',
        'Monetary Economics': '화폐경제학',
        'Central Banking': '중앙은행학',
        'Journal Collection': '저널 컬렉션',
        'International': '국제',
        'Authoritative': '권위',
        'Multilingual': '다국어',
        'Development': '개발',
        'Free': '무료',
        'Policy': '정책',
        'Statistics': '통계',
        'China': '중국',
        'Central Bank': '중앙은행',
        'Official': '공식',
        'Europe': '유럽',
        'Eurozone': '유로존',
        'Germany': '독일',
        'Data': '데이터',
        'USA': '미국',
        'API': 'API',
        'Microdata': '미시데이터',
        'Application Required': '신청 필요',
        'Academic': '학술',
        'Panel Data': '패널 데이터',
        'OECD': 'OECD',
        'Real-time': '실시간',
        'Financial': '금융',
        'PDF': 'PDF',
        'Annual': '연간',
        'Policy Documents': '정책 문서',
        'Climate': '기후',
        'English': '영어',
        'Multi-country': '다국가',
        'Forecasts': '예측',
        'Global': '글로벌',
        'Open Access': '오픈 액세스',
        'Research': '연구',
        'Preprints': '사전인쇄본',
        'Teaching': '교육',
        'Code': '코드',
        'Daily Updates': '매일 업데이트',
        'Industry': '산업',
        'Automotive': '자동차',
        'Interactive': '인터랙티브',
        'Visualization': '시각화',
        'Stock Market': '주식시장',
        'Financial Reports': '재무보고서',
        'Risk': '위험',
        'Weekly': '주간',
        'Business': '비즈니스',
        'Economists': '경제학자',
        'Opinion': '의견',
        'Investigation': '조사',
        'Economics': '경제학',
        'Macroeconomics': '거시경제학',
        'Technology': '기술',
        'New Economy': '신경제',
        'Data Visualization': '데이터 시각화',
        'Trends': '트렌드',
        'Digest': '다이제스트',
        'Think Tank': '싱크탱크',
        'Independent': '독립',
        'China-Germany': '중독',
        'Geopolitics': '지정학',
        'MIT': 'MIT',
        'Courses': '과정',
        'Harvard': '하버드',
        'Basic': '기본',
        'Video': '비디오',
        'University': '대학',
        'Online': '온라인',
        'Certification': '인증',
        'Inflation': '인플레이션',
        'Calculator': '계산기',
        'References': '참고문헌',
        'Free Market': '자유시장',
        'Resources': '자원',
        'Books': '책',
        'Innovation': '혁신',
        'Regional': '지역',
        'Customizable': '사용자 정의 가능',
        'Energy': '에너지',
        'Business Climate': '비즈니스 환경',
        'Survey': '조사',
        'Economic Sentiment': '경제 심리'
      },
      ja: {
        'Top Tier': 'トップティア',
        'General Economics': '一般経済学',
        'High Impact': 'ハイインパクト',
        'Econometrics': '計量経済学',
        'Theory': '理論',
        'Finance': 'ファイナンス',
        'Financial Economics': 'ファイナンシャル・エコノミクス',
        'Corporate Finance': 'コーポレート・ファイナンス',
        'European': 'ヨーロッパ',
        'Political Economy': '政治経済学',
        'Chicago School': 'シカゴ学派',
        'Financial Studies': '金融研究',
        'AEA': 'アメリカ経済学会',
        'Monetary Economics': '貨幣経済学',
        'Central Banking': '中央銀行学',
        'Journal Collection': 'ジャーナル・コレクション',
        'International': '国際',
        'Authoritative': '権威',
        'Multilingual': '多言語',
        'Development': '開発',
        'Free': '無料',
        'Policy': '政策',
        'Statistics': '統計',
        'China': '中国',
        'Central Bank': '中央銀行',
        'Official': '公式',
        'Europe': 'ヨーロッパ',
        'Eurozone': 'ユーロゾーン',
        'Germany': 'ドイツ',
        'Data': 'データ',
        'USA': 'アメリカ',
        'API': 'API',
        'Microdata': 'ミクロデータ',
        'Application Required': '申請必要',
        'Academic': '学術',
        'Panel Data': 'パネルデータ',
        'OECD': 'OECD',
        'Real-time': 'リアルタイム',
        'Financial': '金融',
        'PDF': 'PDF',
        'Annual': '年次',
        'Policy Documents': '政策文書',
        'Climate': '気候',
        'English': '英語',
        'Multi-country': '多国',
        'Forecasts': '予測',
        'Global': 'グローバル',
        'Open Access': 'オープンアクセス',
        'Research': '研究',
        'Preprints': 'プレプリント',
        'Teaching': '教育',
        'Code': 'コード',
        'Daily Updates': '毎日更新',
        'Industry': '産業',
        'Automotive': '自動車',
        'Interactive': 'インタラクティブ',
        'Visualization': '視覚化',
        'Stock Market': '株式市場',
        'Financial Reports': '財務報告',
        'Risk': 'リスク',
        'Weekly': '週刊',
        'Business': 'ビジネス',
        'Economists': '経済学者',
        'Opinion': '意見',
        'Investigation': '調査',
        'Economics': '経済学',
        'Macroeconomics': 'マクロ経済学',
        'Technology': '技術',
        'New Economy': '新経済',
        'Data Visualization': 'データ視覚化',
        'Trends': 'トレンド',
        'Digest': 'ダイジェスト',
        'Think Tank': 'シンクタンク',
        'Independent': '独立',
        'China-Germany': '中独',
        'Geopolitics': '地政学',
        'MIT': 'MIT',
        'Courses': 'コース',
        'Harvard': 'ハーバード',
        'Basic': '基本',
        'Video': 'ビデオ',
        'University': '大学',
        'Online': 'オンライン',
        'Certification': '認定',
        'Inflation': 'インフレ',
        'Calculator': '計算機',
        'References': '参考文献',
        'Free Market': '自由市場',
        'Resources': 'リソース',
        'Books': '書籍',
        'Innovation': 'イノベーション',
        'Regional': '地域',
        'Customizable': 'カスタマイズ可能',
        'Energy': 'エネルギー',
        'Business Climate': 'ビジネス環境',
        'Survey': '調査',
        'Economic Sentiment': '経済センチメント'
      },
      de: {
        'Top Tier': 'Spitzenklasse',
        'General Economics': 'Allgemeine Wirtschaftswissenschaften',
        'High Impact': 'Hoher Impact',
        'Econometrics': 'Ökonometrie',
        'Theory': 'Theorie',
        'Finance': 'Finanzwissenschaft',
        'Financial Economics': 'Finanzwirtschaft',
        'Corporate Finance': 'Unternehmensfinanzierung',
        'European': 'Europäisch',
        'Political Economy': 'Politische Ökonomie',
        'Chicago School': 'Chicago-Schule',
        'Financial Studies': 'Finanzstudien',
        'AEA': 'Amerikanische Wirtschaftsvereinigung',
        'Monetary Economics': 'Geldwirtschaft',
        'Central Banking': 'Zentralbankwesen',
        'Journal Collection': 'Zeitschriftensammlung',
        'International': 'International',
        'Authoritative': 'Autoritativ',
        'Multilingual': 'Mehrsprachig',
        'Development': 'Entwicklung',
        'Free': 'Kostenlos',
        'Policy': 'Politik',
        'Statistics': 'Statistik',
        'China': 'China',
        'Central Bank': 'Zentralbank',
        'Official': 'Offiziell',
        'Europe': 'Europa',
        'Eurozone': 'Eurozone',
        'Germany': 'Deutschland',
        'Data': 'Daten',
        'USA': 'USA',
        'API': 'API',
        'Microdata': 'Mikrodaten',
        'Application Required': 'Antrag erforderlich',
        'Academic': 'Akademisch',
        'Panel Data': 'Paneldaten',
        'OECD': 'OECD',
        'Real-time': 'Echtzeit',
        'Financial': 'Finanziell',
        'PDF': 'PDF',
        'Annual': 'Jährlich',
        'Policy Documents': 'Politikdokumente',
        'Climate': 'Klima',
        'English': 'Englisch',
        'Multi-country': 'Mehrländer',
        'Forecasts': 'Prognosen',
        'Global': 'Global',
        'Open Access': 'Offener Zugang',
        'Research': 'Forschung',
        'Preprints': 'Vorabdrucke',
        'Teaching': 'Lehre',
        'Code': 'Code',
        'Daily Updates': 'Täglich aktualisiert',
        'Industry': 'Industrie',
        'Automotive': 'Automobil',
        'Interactive': 'Interaktiv',
        'Visualization': 'Visualisierung',
        'Stock Market': 'Aktienmarkt',
        'Financial Reports': 'Finanzberichte',
        'Risk': 'Risiko',
        'Weekly': 'Wöchentlich',
        'Business': 'Geschäft',
        'Economists': 'Ökonomen',
        'Opinion': 'Meinung',
        'Investigation': 'Untersuchung',
        'Economics': 'Wirtschaftswissenschaften',
        'Macroeconomics': 'Makroökonomie',
        'Technology': 'Technologie',
        'New Economy': 'Neue Wirtschaft',
        'Data Visualization': 'Datenvisualisierung',
        'Trends': 'Trends',
        'Digest': 'Zusammenfassung',
        'Think Tank': 'Denkfabrik',
        'Independent': 'Unabhängig',
        'China-Germany': 'China-Deutschland',
        'Geopolitics': 'Geopolitik',
        'MIT': 'MIT',
        'Courses': 'Kurse',
        'Harvard': 'Harvard',
        'Basic': 'Grundlagen',
        'Video': 'Video',
        'University': 'Universität',
        'Online': 'Online',
        'Certification': 'Zertifizierung',
        'Inflation': 'Inflation',
        'Calculator': 'Rechner',
        'References': 'Referenzen',
        'Free Market': 'Freier Markt',
        'Resources': 'Ressourcen',
        'Books': 'Bücher',
        'Innovation': 'Innovation',
        'Regional': 'Regional',
        'Customizable': 'Anpassbar',
        'Energy': 'Energie',
        'Business Climate': 'Geschäftsklima',
        'Survey': 'Umfrage',
        'Economic Sentiment': 'Wirtschaftsstimmung'
      }
    };
    
    return tagTranslations[lang]?.[resourceName] || resourceName;
  }
  
  // 对于其他资源类型，返回原名称
  return resourceName;
} 