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
    ko: "21세기 경제보도",
    ja: "21世紀経済報道",
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
  },
  
  // 新增德国专题资源翻译
  "German Federal Bank (Bundesbank)": {
    en: "German Federal Bank (Bundesbank)",
    zh: "德国联邦银行",
    ko: "독일 연방은행 (Bundesbank)",
    ja: "ドイツ連邦銀行 (Bundesbank)",
    de: "Deutsche Bundesbank"
  },
  
  "Federal Statistical Office of Germany": {
    en: "Federal Statistical Office of Germany",
    zh: "德国联邦统计局",
    ko: "독일 연방통계청 (Federal Statistical Office of Germany)",
    ja: "ドイツ連邦統計庁 (Federal Statistical Office of Germany)",
    de: "Statistisches Bundesamt"
  },
  
  "German Institute for Economic Research (DIW Berlin)": {
    en: "German Institute for Economic Research (DIW Berlin)",
    zh: "德国经济研究所",
    ko: "독일 경제연구소 (DIW Berlin)",
    ja: "ドイツ経済研究所 (DIW Berlin)",
    de: "Deutsches Institut für Wirtschaftsforschung (DIW Berlin)"
  },
  
  "Federal Ministry for Economic Affairs and Climate Action": {
    en: "Federal Ministry for Economic Affairs and Climate Action",
    zh: "德国经济部",
    ko: "독일 경제부 (Federal Ministry for Economic Affairs and Climate Action)",
    ja: "ドイツ経済省 (Federal Ministry for Economic Affairs and Climate Action)",
    de: "Bundesministerium für Wirtschaft und Klimaschutz"
  },
  
  "Mercator Institute for China Studies (MERICS)": {
    en: "Mercator Institute for China Studies (MERICS)",
    zh: "德国对华政策研究所",
    ko: "독일 중국정책연구소 (MERICS)",
    ja: "ドイツ中国政策研究所 (MERICS)",
    de: "Mercator Institute for China Studies (MERICS)"
  },
  
  "German Council of Economic Experts": {
    en: "German Council of Economic Experts",
    zh: "德国经济专家委员会",
    ko: "독일 경제전문가위원회 (German Council of Economic Experts)",
    ja: "ドイツ経済専門家委員会 (German Council of Economic Experts)",
    de: "Sachverständigenrat zur Begutachtung der gesamtwirtschaftlichen Entwicklung"
  },
  
  "Frankfurt Stock Exchange": {
    en: "Frankfurt Stock Exchange",
    zh: "法兰克福证券交易所",
    ko: "프랑크푸르트 증권거래소 (Frankfurt Stock Exchange)",
    ja: "フランクフルト証券取引所 (Frankfurt Stock Exchange)",
    de: "Frankfurter Wertpapierbörse"
  },
  
  "Association of German Chambers of Commerce and Industry (DIHK)": {
    en: "Association of German Chambers of Commerce and Industry (DIHK)",
    zh: "德国工商总会",
    ko: "독일 상공회의소 연합회 (DIHK)",
    ja: "ドイツ商工会議所連合会 (DIHK)",
    de: "Deutscher Industrie- und Handelskammertag (DIHK)"
  },
  
  "German Association of the Automotive Industry (VDA)": {
    en: "German Association of the Automotive Industry (VDA)",
    zh: "德国汽车工业协会",
    ko: "독일 자동차공업협회 (VDA)",
    ja: "ドイツ自動車工業会 (VDA)",
    de: "Verband der Automobilindustrie (VDA)"
  },
  
  "German DAX Index Analysis": {
    en: "German DAX Index Analysis",
    zh: "德国DAX指数分析",
    ko: "독일 DAX 지수 분석 (German DAX Index Analysis)",
    ja: "ドイツDAX指数分析 (German DAX Index Analysis)",
    de: "DAX-Index-Analyse"
  },
  
  "German Corporate Credit Database": {
    en: "German Corporate Credit Database",
    zh: "德国企业信贷数据库",
    ko: "독일 기업신용 데이터베이스 (German Corporate Credit Database)",
    ja: "ドイツ企業信用データベース (German Corporate Credit Database)",
    de: "Deutsche Unternehmenskreditdatenbank"
  }
};

// 学习专题资源名称翻译 - 新增
export const learningSpecialTranslations: Record<string, ResourceTranslation> = {
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
  
  "Coursera Economics Specialization": {
    en: "Coursera Economics Specialization",
    zh: "Coursera经济学专业课程",
    ko: "Coursera Economics Specialization (코세라 경제학 전문과정)",
    ja: "Coursera Economics Specialization (コーセラ経済学専門課程)",
    de: "Coursera Economics Specialization (Coursera-Wirtschaftswissenschaften-Spezialisierung)"
  },
  
  "Marginal Revolution University": {
    en: "Marginal Revolution University",
    zh: "边际革命大学",
    ko: "Marginal Revolution University (한계혁명 대학)",
    ja: "Marginal Revolution University (マージナル・レボリューション大学)",
    de: "Marginal Revolution University (Grenzrevolutions-Universität)"
  },
  
  "BBC Masters of Money - 凯恩斯": {
    en: "BBC Masters of Money - Keynes",
    zh: "BBC Masters of Money - 凯恩斯",
    ko: "BBC Masters of Money - 케인스",
    ja: "BBC Masters of Money - ケインズ",
    de: "BBC Masters of Money - Keynes"
  },
  
  "BBC Masters of Money - 哈耶克": {
    en: "BBC Masters of Money - Hayek",
    zh: "BBC Masters of Money - 哈耶克",
    ko: "BBC Masters of Money - 하이에크",
    ja: "BBC Masters of Money - ハイエク",
    de: "BBC Masters of Money - Hayek"
  },
  
  "BBC Masters of Money - 马克思": {
    en: "BBC Masters of Money - Marx",
    zh: "BBC Masters of Money - 马克思",
    ko: "BBC Masters of Money - 마르크스",
    ja: "BBC Masters of Money - マルクス",
    de: "BBC Masters of Money - Marx"
  },
  
  "SSRN": {
    en: "SSRN",
    zh: "社会科学研究网络",
    ko: "SSRN (사회과학연구네트워크)",
    ja: "SSRN (社会科学研究ネットワーク)",
    de: "SSRN (Social Science Research Network)"
  },
  
  "NBER Working Papers": {
    en: "NBER Working Papers",
    zh: "NBER工作论文",
    ko: "NBER Working Papers (NBER 워킹페이퍼)",
    ja: "NBER Working Papers (NBERワーキングペーパー)",
    de: "NBER Working Papers (NBER-Arbeitspapiere)"
  },
  
  "arXiv Economics": {
    en: "arXiv Economics",
    zh: "arXiv经济学预印本",
    ko: "arXiv Economics (arXiv 경제학)",
    ja: "arXiv Economics (arXiv経済学)",
    de: "arXiv Economics (arXiv-Wirtschaftswissenschaften)"
  }
};

// 媒体专题资源名称翻译 - 新增
export const mediaSpecialTranslations: Record<string, ResourceTranslation> = {
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
  
  "财新网": {
    en: "Caixin",
    zh: "财新网",
    ko: "재신망 (Caixin)",
    ja: "財新網 (Caixin)",
    de: "Caixin (Chinesisches Finanzmedium)"
  },
  
  "第一财经": {
    en: "Yicai",
    zh: "第一财经",
    ko: "제1재경 (Yicai)",
    ja: "第一財経 (Yicai)",
    de: "Yicai (Erste Finanzierung)"
  },
  
  "澎湃新闻·财经频道": {
    en: "The Paper - Finance",
    zh: "澎湃新闻·财经频道",
    ko: "펑파이뉴스 재경채널 (The Paper - Finance)",
    ja: "澎湃新聞・財経チャンネル (The Paper - Finance)",
    de: "The Paper - Finance (Das Papier - Finanzen)"
  },
  
  "21世纪经济报道": {
    en: "21st Century Business Herald",
    zh: "21世纪经济报道",
    ko: "21세기 경제보도 (21st Century Business Herald)",
    ja: "21世紀経済報道 (21st Century Business Herald)",
    de: "21st Century Business Herald (21. Jahrhundert Geschäftsherald)"
  },
  
  "界面新闻财经": {
    en: "Jiemian Finance",
    zh: "界面新闻财经",
    ko: "지에미안 파이낸스 (Jiemian Finance)",
    ja: "界面財経 (Jiemian Finance)",
    de: "Jiemian Finance (Jiemian-Finanzen)"
  },
  
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
  }
};

// 政策专题资源名称翻译 - 新增
export const policySpecialTranslations: Record<string, ResourceTranslation> = {
  "中国人民银行": {
    en: "People's Bank of China",
    zh: "中国人民银行",
    ko: "중국인민은행 (People's Bank of China)",
    ja: "中国人民銀行 (People's Bank of China)",
    de: "People's Bank of China (Volksbank von China)"
  },
  
  "美联储(Federal Reserve)": {
    en: "Federal Reserve",
    zh: "美联储",
    ko: "연방준비제도 (Federal Reserve)",
    ja: "連邦準備制度 (Federal Reserve)",
    de: "Federal Reserve (US-Zentralbank)"
  },
  
  "欧洲央行(ECB)": {
    en: "European Central Bank (ECB)",
    zh: "欧洲央行",
    ko: "유럽중앙은행 (ECB)",
    ja: "欧州中央銀行 (ECB)",
    de: "Europäische Zentralbank (EZB)"
  },
  
  "国家发改委": {
    en: "National Development and Reform Commission",
    zh: "国家发改委",
    ko: "국가발전개혁위원회 (NDRC)",
    ja: "国家發展改革委員会 (NDRC)",
    de: "Nationale Entwicklungs- und Reformkommission"
  },
  
  "财政部": {
    en: "Ministry of Finance",
    zh: "财政部",
    ko: "재정부 (Ministry of Finance)",
    ja: "財政部 (Ministry of Finance)",
    de: "Finanzministerium"
  },
  
  "工信部": {
    en: "Ministry of Industry and Information Technology",
    zh: "工信部",
    ko: "공업정보화부 (MIIT)",
    ja: "工業情報化部 (MIIT)",
    de: "Ministerium für Industrie und Informationstechnologie"
  },
  
  "商务部": {
    en: "Ministry of Commerce",
    zh: "商务部",
    ko: "상무부 (Ministry of Commerce)",
    ja: "商務部 (Ministry of Commerce)",
    de: "Handelsministerium"
  },
  
  "国家统计局": {
    en: "National Bureau of Statistics",
    zh: "国家统计局",
    ko: "국가통계국 (National Bureau of Statistics)",
    ja: "国家統計局 (National Bureau of Statistics)",
    de: "Nationales Statistikamt"
  },
  
  "银保监会": {
    en: "China Banking and Insurance Regulatory Commission",
    zh: "银保监会",
    ko: "중국은행보험감독관리위원회 (CBIRC)",
    ja: "中国銀行保険監督管理委員会 (CBIRC)",
    de: "Chinesische Banken- und Versicherungsaufsichtsbehörde"
  },
  
  "证监会": {
    en: "China Securities Regulatory Commission",
    zh: "证监会",
    ko: "중국증권감독관리위원회 (CSRC)",
    ja: "中国証券監督管理委員会 (CSRC)",
    de: "Chinesische Wertpapieraufsichtsbehörde"
  },
  
  "IMF (国际货币基金组织)": {
    en: "IMF (International Monetary Fund)",
    zh: "国际货币基金组织",
    ko: "IMF (국제통화기금)",
    ja: "IMF (国際通貨基金)",
    de: "IWF (Internationaler Währungsfonds)"
  },
  
  "世界银行(World Bank)": {
    en: "World Bank",
    zh: "世界银行",
    ko: "World Bank (세계은행)",
    ja: "World Bank (世界銀行)",
    de: "Weltbank"
  },
  
  "OECD (经济合作与发展组织)": {
    en: "OECD (Organisation for Economic Co-operation and Development)",
    zh: "经济合作与发展组织",
    ko: "OECD (경제협력개발기구)",
    ja: "OECD (経済協力開発機構)",
    de: "OECD (Organisation für wirtschaftliche Zusammenarbeit und Entwicklung)"
  },
  
  "国务院政策解读专栏": {
    en: "State Council Policy Interpretation Column",
    zh: "国务院政策解读专栏",
    ko: "국무원 정책해석 칼럼 (State Council Policy Interpretation Column)",
    ja: "国務院政策解釈コラム (State Council Policy Interpretation Column)",
    de: "State Council Policy Interpretation Column (Staatsrat Politikinterpretationsspalte)"
  },
  
  "人民银行货币政策报告": {
    en: "PBOC Monetary Policy Report",
    zh: "人民银行货币政策报告",
    ko: "중국인민은행 통화정책 보고서 (PBOC Monetary Policy Report)",
    ja: "中国人民銀行通貨政策報告書 (PBOC Monetary Policy Report)",
    de: "PBOC Monetary Policy Report (PBOC-Geldpolitikbericht)"
  },
  
  "IMF政策跟踪": {
    en: "IMF Policy Tracker",
    zh: "IMF政策跟踪",
    ko: "IMF 정책 추적 (IMF Policy Tracker)",
    ja: "IMF政策トラッカー (IMF Policy Tracker)",
    de: "IWF-Policy-Tracker"
  }
};

// 数据专题资源名称翻译 - 新增
export const dataSpecialTranslations: Record<string, ResourceTranslation> = {
  "FRED (美联储经济数据)": {
    en: "FRED Economic Data",
    zh: "FRED经济数据库",
    ko: "FRED Economic Data (FRED 경제 데이터)",
    ja: "FRED Economic Data (FRED経済データ)",
    de: "FRED Economic Data (FRED-Wirtschaftsdaten)"
  },
  
  "世界银行数据": {
    en: "World Bank Data",
    zh: "世界银行数据库",
    ko: "World Bank Data (세계은행 데이터)",
    ja: "World Bank Data (世界銀行データ)",
    de: "Weltbank-Daten"
  },
  
  "IMF数据库": {
    en: "IMF Data",
    zh: "IMF数据库",
    ko: "IMF Data (IMF 데이터)",
    ja: "IMF Data (IMFデータ)",
    de: "IWF-Daten"
  },
  
  "OECD.Stat": {
    en: "OECD.Stat",
    zh: "OECD统计数据库",
    ko: "OECD.Stat (OECD 통계)",
    ja: "OECD.Stat (OECD統計)",
    de: "OECD.Stat"
  },
  
  "中国国家统计局": {
    en: "China National Bureau of Statistics",
    zh: "中国国家统计局",
    ko: "중국 국가통계국 (China National Bureau of Statistics)",
    ja: "中国国家統計局 (China National Bureau of Statistics)",
    de: "China National Bureau of Statistics (Nationales Statistikamt Chinas)"
  },
  
  "Trading Economics": {
    en: "Trading Economics",
    zh: "Trading Economics",
    ko: "Trading Economics (트레이딩 이코노믹스)",
    ja: "Trading Economics (トレーディング・エコノミクス)",
    de: "Trading Economics"
  },
  
  "Quandl": {
    en: "Quandl",
    zh: "Quandl",
    ko: "Quandl (콴들)",
    ja: "Quandl (クアンドル)",
    de: "Quandl"
  },
  
  "Alpha": {
    en: "Alpha",
    zh: "Alpha",
    ko: "Alpha (알파)",
    ja: "Alpha (アルファ)",
    de: "Alpha"
  },
  
  "YCharts": {
    en: "YCharts",
    zh: "YCharts",
    ko: "YCharts (와이차트)",
    ja: "YCharts (ワイチャート)",
    de: "YCharts"
  },
  
  "中国家庭金融调查(CHFS)": {
    en: "China Household Finance Survey (CHFS)",
    zh: "中国家庭金融调查",
    ko: "중국 가계금융조사 (CHFS)",
    ja: "中国世帯金融調査 (CHFS)",
    de: "China Household Finance Survey (CHFS) (Chinesische Haushaltsfinanzerhebung)"
  },
  
  "德国社会经济小组调查(SOEP)": {
    en: "German Socio-Economic Panel (SOEP)",
    zh: "德国社会经济小组调查",
    ko: "독일 사회경제 패널 (SOEP)",
    ja: "ドイツ社会経済パネル (SOEP)",
    de: "Sozio-oekonomisches Panel (SOEP)"
  },
  
  "Eurostat": {
    en: "Eurostat",
    zh: "欧盟统计局",
    ko: "Eurostat (유로스타트)",
    ja: "Eurostat (ユーロスタット)",
    de: "Eurostat"
  },
  
  // 新增资源翻译
  "OECD数据": {
    en: "OECD Data",
    zh: "OECD数据",
    ko: "OECD 데이터 (OECD Data)",
    ja: "OECDデータ (OECD Data)",
    de: "OECD-Daten"
  },
  
  "Wind万得": {
    en: "Wind Financial Terminal",
    zh: "Wind万得",
    ko: "윈드 만더 (Wind Financial Terminal)",
    ja: "Wind万得 (Wind Financial Terminal)",
    de: "Wind Financial Terminal"
  },
  
  "CEIC数据库": {
    en: "CEIC Database",
    zh: "CEIC数据库",
    ko: "CEIC 데이터베이스 (CEIC Database)",
    ja: "CEICデータベース (CEIC Database)",
    de: "CEIC-Datenbank"
  },
  
  "BIS国际清算银行": {
    en: "Bank for International Settlements (BIS)",
    zh: "BIS国际清算银行",
    ko: "국제결제은행 (BIS)",
    ja: "国際決済銀行 (BIS)",
    de: "Bank für Internationalen Zahlungsausgleich (BIS)"
  }
};

// 市场专题资源名称翻译 - 新增
export const marketSpecialTranslations: Record<string, ResourceTranslation> = {
  "纽约证券交易所(NYSE)": {
    en: "New York Stock Exchange (NYSE)",
    zh: "纽约证券交易所",
    ko: "뉴욕증권거래소 (NYSE)",
    ja: "ニューヨーク証券取引所 (NYSE)",
    de: "New York Stock Exchange (NYSE)"
  },
  
  "纳斯达克(NASDAQ)": {
    en: "NASDAQ",
    zh: "纳斯达克",
    ko: "나스닥 (NASDAQ)",
    ja: "ナスダック (NASDAQ)",
    de: "NASDAQ"
  },
  
  "伦敦证券交易所(LSE)": {
    en: "London Stock Exchange (LSE)",
    zh: "伦敦证券交易所",
    ko: "런던증권거래소 (LSE)",
    ja: "ロンドン証券取引所 (LSE)",
    de: "London Stock Exchange (LSE)"
  },
  
  "法兰克福证券交易所": {
    en: "Frankfurt Stock Exchange",
    zh: "法兰克福证券交易所",
    ko: "프랑크푸르트 증권거래소 (Frankfurt Stock Exchange)",
    ja: "フランクフルト証券取引所 (Frankfurt Stock Exchange)",
    de: "Frankfurter Wertpapierbörse"
  },
  
  "上海证券交易所": {
    en: "Shanghai Stock Exchange",
    zh: "上海证券交易所",
    ko: "상하이증권거래소 (Shanghai Stock Exchange)",
    ja: "上海証券取引所 (Shanghai Stock Exchange)",
    de: "Shanghai Stock Exchange (Shanghaier Börse)"
  },
  
  "深圳证券交易所": {
    en: "Shenzhen Stock Exchange",
    zh: "深圳证券交易所",
    ko: "선전증권거래소 (Shenzhen Stock Exchange)",
    ja: "深圳証券取引所 (Shenzhen Stock Exchange)",
    de: "Shenzhen Stock Exchange (Shenzhener Börse)"
  },
  
  "香港交易所(HKEX)": {
    en: "Hong Kong Exchanges and Clearing (HKEX)",
    zh: "香港交易所",
    ko: "홍콩거래소 (HKEX)",
    ja: "香港取引所 (HKEX)",
    de: "Hong Kong Exchanges and Clearing (HKEX)"
  },
  
  "东京证券交易所(TSE)": {
    en: "Tokyo Stock Exchange (TSE)",
    zh: "东京证券交易所",
    ko: "도쿄증권거래소 (TSE)",
    ja: "東京証券取引所 (TSE)",
    de: "Tokyo Stock Exchange (TSE)"
  },
  
  // 新增市场专题资源翻译
  "芝加哥商品交易所": {
    en: "CME Group",
    zh: "芝加哥商品交易所",
    ko: "시카고상품거래소 (CME Group)",
    ja: "シカゴ商品取引所 (CME Group)",
    de: "CME Group (Chicago Mercantile Exchange)"
  },
  
  "前瞻产业研究院": {
    en: "Qianzhan Industry Research Institute",
    zh: "前瞻产业研究院",
    ko: "첸잔 산업연구원 (Qianzhan Industry Research Institute)",
    ja: "前瞻産業研究院 (Qianzhan Industry Research Institute)",
    de: "Qianzhan Industry Research Institute (Qianzhan-Industrieforschungsinstitut)"
  },
  
  "MacroMicro行业地图": {
    en: "MacroMicro Industry Map",
    zh: "MacroMicro行业地图",
    ko: "마크로마이크로 산업지도 (MacroMicro Industry Map)",
    ja: "マクロマイクロ産業マップ (MacroMicro Industry Map)",
    de: "MacroMicro Industry Map (MacroMicro-Industriekarte)"
  }
};

// 工具专题资源名称翻译 - 新增  
export const toolsSpecialTranslations: Record<string, ResourceTranslation> = {
  "美国通胀计算器": {
    en: "US Inflation Calculator",
    zh: "美国通胀计算器",
    ko: "미국 인플레이션 계산기 (US Inflation Calculator)",
    ja: "米国インフレ計算機 (US Inflation Calculator)",
    de: "US-Inflationsrechner"
  },
  
  "用数据看世界": {
    en: "Our World in Data",
    zh: "用数据看世界",
    ko: "아워 월드 인 데이터 (Our World in Data)",
    ja: "アワー・ワールド・イン・データ (Our World in Data)",
    de: "Our World in Data (Unsere Welt in Daten)"
  },
  
  "Zotero文献管理": {
    en: "Zotero",
    zh: "Zotero文献管理",
    ko: "Zotero (조테로)",
    ja: "Zotero (ゾテロ)",
    de: "Zotero"
  },
  
  "经济学图书馆": {
    en: "Econlib",
    zh: "经济学图书馆",
    ko: "에코놀립 (Econlib)",
    ja: "エコノリブ (Econlib)",
    de: "Econlib (Wirtschaftsbibliothek)"
  },
  
  "TradingView": {
    en: "TradingView",
    zh: "TradingView",
    ko: "TradingView (트레이딩뷰)",
    ja: "TradingView (トレーディングビュー)",
    de: "TradingView"
  },
  
  "Yahoo Finance": {
    en: "Yahoo Finance",
    zh: "Yahoo Finance",
    ko: "Yahoo Finance (야후 파이낸스)",
    ja: "Yahoo Finance (ヤフーファイナンス)",
    de: "Yahoo Finance"
  },
  
  "MarketWatch": {
    en: "MarketWatch",
    zh: "MarketWatch",
    ko: "MarketWatch (마켓워치)",
    ja: "MarketWatch (マーケットウォッチ)",
    de: "MarketWatch"
  },
  
  "Investing.com": {
    en: "Investing.com",
    zh: "Investing.com",
    ko: "Investing.com (인베스팅닷컴)",
    ja: "Investing.com (インベスティング・ドットコム)",
    de: "Investing.com"
  },
  
  // 新增工具专题资源翻译
  "Bloomberg Terminal": {
    en: "Bloomberg Terminal",
    zh: "Bloomberg Terminal",
    ko: "Bloomberg Terminal (블룸버그 터미널)",
    ja: "Bloomberg Terminal (ブルームバーグターミナル)",
    de: "Bloomberg Terminal"
  },
  
  "Python for Economics": {
    en: "Python for Economics",
    zh: "Python for Economics",
    ko: "Python for Economics (경제학을 위한 파이썬)",
    ja: "Python for Economics (経済学のためのPython)",
    de: "Python for Economics (Python für Wirtschaftswissenschaften)"
  },
  
  "R for Economics": {
    en: "R for Economics",
    zh: "R for Economics",
    ko: "R for Economics (경제학을 위한 R)",
    ja: "R for Economics (経済学のためのR)",
    de: "R for Economics (R für Wirtschaftswissenschaften)"
  },
  
  "Stata": {
    en: "Stata",
    zh: "Stata",
    ko: "Stata (스타타)",
    ja: "Stata (ステータ)",
    de: "Stata"
  }
};

// 通用资源翻译函数
export function getResourceTranslation(lang: Language, type: string, resourceName: string): string {
  // 如果是期刊，使用专门的期刊翻译函数
  if (type === 'resources' && getJournalTranslation(lang, resourceName) !== resourceName) {
    return getJournalTranslation(lang, resourceName);
  }
  
  // 学习专题资源翻译
  if (type === 'resources' && learningSpecialTranslations[resourceName]) {
    return learningSpecialTranslations[resourceName][lang];
  }
  
  // 媒体专题资源翻译
  if (type === 'resources' && mediaSpecialTranslations[resourceName]) {
    return mediaSpecialTranslations[resourceName][lang];
  }
  
  // 政策专题资源翻译
  if (type === 'resources' && policySpecialTranslations[resourceName]) {
    return policySpecialTranslations[resourceName][lang];
  }
  
  // 数据专题资源翻译
  if (type === 'resources' && dataSpecialTranslations[resourceName]) {
    return dataSpecialTranslations[resourceName][lang];
  }
  
  // 市场专题资源翻译
  if (type === 'resources' && marketSpecialTranslations[resourceName]) {
    return marketSpecialTranslations[resourceName][lang];
  }
  
  // 工具专题资源翻译
  if (type === 'resources' && toolsSpecialTranslations[resourceName]) {
    return toolsSpecialTranslations[resourceName][lang];
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
        'Economic Sentiment': '经济情绪',

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
        'Economic Sentiment': '경제 심리',
        // 新增专题标签翻译
        '顶级大学': '최고 대학',
        '免费课程': '무료 과정',
        '全面系统': '종합적 시스템', 
        '英文教学': '영어 강의',
        '公共政策': '공공정책',
        '执行教育': '정책 실행',
        '权威师资': '권위 교수진',
        '免费学习': '무료 학습',
        '基础入门': '기본 입문',
        '中文字幕': '중국어 자막',
        '互动练习': '상호작용 연습',
        '专业认证': '전문 인증',
        '系统学习': '종합적 학습',
        '大学课程': '대학 과정',
        '付费优质': '유료 고품질',
        '现代教学': '현대적 교육',
        '经济思维': '경제적 사고',
        '创新方法': '혁신적 방법',
        '经典纪录片': '명작 다큐멘터리',
        '经济学史': '경제학사',
        '理论对比': '이론적 비교',
        '通俗易懂': '쉽게 이해할 수 있는',
        '自由市场': '자유 시장',
        '哈耶克思想': '하이에크의 사상',
        '思辨性强': '사상적 사고',
        '马克思主义': '마르크스 주의',
        '资本主义': '자본주의',
        '历史视角': '역사적 시각',
        '学术论文': '학술적 논문',
        '免费下载': '무료 다운로드',
        '全球研究': '세계적 연구',
        '工作论文': '업무 논문',
        '权威研究': '권위 연구',
        '美国视角': '미국의 시각',
        '政策评估': '정책 평가',
        '实证研究': '실증적 연구',
        '预印本': '사전인쇄본',
        '最新研究': '최신 연구',
        '免费获取': '무료 접근',
        '全球论文': '세계적 논문',
        '权威媒体': '권위 매체',
        '全球视野': '세계적 시각',
        '深度分析': '심층 분석',
        '经济趋势': '경제 추세',
        '金融权威': '금융 권위',
        '市场动态': '금융 시장 동향',
        '宏观政策': '거시적 정책',
        '专业分析': '전문적 분석',
        '市场数据': '금융 시장 데이터',
        '实时资讯': '실시간 정보',
        '财经权威': '금융 권위',
        '全球覆盖': '세계적 접근',
        '美国权威': '미국의 권위',
        '商业新闻': '비즈니스 뉴스',
        '经济动态': '경제 동향',
        '深度报道': '심층 보도',
        '经济学家': '경제학자',
        '专栏观点': '전문가 의견',
        '全球议题': '세계적 주제',
        '学术权威': '학술적 권위',
        '政策研究': '정책 연구',
        '欧洲视角': '유럽의 시각',
        '专家观点': '전문가 의견',
        '前沿讨论': '선진적 토론',
        '深度调查': '심층 조사',
        '政策解读': '정책 해석',
        '金融专业': '금융 전문',
        '权威中文': '중국어 권위',
        '实时新闻': '중국어 뉴스',
        '数据解读': '중국어 데이터 분석',
        '财经专业': '금융 전문',
        '市场分析': '금융 시장 분석',
        '宏观经济': '거시적 경제',
        '及时准确': '실시간 정확성',
        '主流媒体': '주류 매체',
        '老牌媒体': '오래된 매체',
        '实务导向': '실무적 중심',
        '政策报道': '정책 보도',
        '行业影响': '산업 영향',
        '新兴媒体': '신생 매체',
        '科技财经': '과학기술과 금융',
        '新经济': '신경제',
        '趋势分析': '경제 추세 분석',
        '研究摘要': '연구 요약',
        '顶级智库': '최고 지식 창고',
        '美国智库': '미국의 지식 창고',
        '经济研究': '경제 연구',
        '国际政策': '국제 정책',
        '贸易金融': '국제 금융',
        '权威智库': '권위 지식 창고',
        '专业研究': '전문적 연구',
        '央行': '중앙은행',
        '货币政策': '중앙은행 정책',
        '官方': '공식',
        '美联储': '연방준비제도',
        '全球': '세계',
        '欧洲央行': '유로존 중앙은행',
        '欧元区': '유로존',
        '发改委': '국가발전개혁위원회',
        '财政部': '재정부',
        '财政政策': '재정 정책',
        '税收': '조세',
        '工信部': '공업정보화부',
        '产业政策': '산업 정책',
        '数字经济': '디지털 경제',
        '商务部': '상무부',
        '贸易政策': '무역 정책',
        '投资': '투자',
        '统计局': '국가통계국',
        '经济数据': '경제 데이터',
        '金融监管': '금융 감독',
        '银行': '은행',
        '保险': '보험',
        '证监会': '증권감독관리위원회',
        '资本市场': '증권시장',
        '监管': '감독',
        '国际组织': '국제 기구',
        '权威机构': '권위 기관',
        '政策研究': '정책 연구',
        '发展政策': '발전 정책',
        '免费资源': '무료 자원',
        '研究报告': '연구 보고서',
        '统计数据': '통계 데이터',
        '中国政策': '중국 정책',
        '官方解读': '공식 해석',
        '实时更新': '실시간 업데이트',
        '权威信息': '권위 정보',
        '中国货币': '중국 화폐',
        '季度报告': '분기별 보고서',
        '政策工具': '정책 도구',
        'PDF下载': 'PDF 다운로드',
        '英文资源': '영어 자원',
        '全球视角': '세계적 시각',
        '世界银行': '세계은행',
        '全球数据': '세계적 데이터',
        '发展指标': '발전 지표',
        'IMF': 'IMF',
        '国际': '국제',
        '货币': '통화',
        'OECD': 'OECD',
        '发达国家': '개발도상국',
        '统计': '통계',
        '实时数据': '실시간 데이터',
        '指标': '지표',
        '预测': '예측',
        '中国': '중국',
        '金融数据': '금융 데이터',
        '专业': '전문',
        '亚洲': '아시아',
        '欧盟': '유럽 연합',
        '国际清算银行': '국제결제은행',
        '金融统计': '금융 통계',
        '银行业': '은행업',
        '中国数据': '중국 데이터',
        '微观数据': '미시적 데이터',
        '需要申请': '신청 필요',
        '家庭金融': '가계 금융',
        '德国数据': '독일 데이터',
        '学术申请': '학술적 신청',
        '面板数据': '패널 데이터',
        '长期跟踪': '장기적 추적',
        'OECD数据': 'OECD 데이터',
        '统计平台': '통계 플랫폼',
        '结构化数据': '구조화 데이터',
        'A股': 'A주',
        '主板': '주식 시장',
        '创业板': '신주 시장',
        '中小板': '중소형 주식 시장',
        '港股': '홍콩 주식 시장',
        '中概股': '중국 상장주식',
        '美股': '미국 주식',
        '纽交所': '뉴욕 증권거래소',
        '科技股': '과학기술 주식',
        '纳斯达克': '나스닥',
        '美国': '미국',
        '期货': '선물',
        '期权': '옵션',
        '商品': '상품',
        '中国市场': '중국 시장',
        '行业分析': '산업 분석',
        '日更新': '매일 업데이트',
        '产业研究': '산업 연구',
        '全球市场': '세계 시장',
        '交互式': '상호작용',
        '可视化': '시각화',
        '产业链': '산업 사슬',
        '专业终端': '전문적 단말기',
        '付费高端': '유료 고급',
        '行业标准': '산업 표준',
        '编程工具': '프로그래밍 도구',
        '数据分析': '데이터 분석',
        '免费学习': '무료 학습',
        '开源工具': '오픈소스 도구',
        '统计软件': '통계 소프트웨어',
        '计量分析': '계량 분석',
        '免费工具': '무료 도구',
        '学术研究': '학술적 연구',
        '计量经济': '계량 경제학',
        '付费专业': '유료 전문',
        '学术标准': '학술적 기준',
        '美国通胀': '미국 인플레이션',
        '计算工具': '계산 도구',
        '历史CPI': '역사적 CPI',
        '实用工具': '유용한 도구',
        '全球数据': '세계적 데이터',
        '发展趋势': '발전 추세',
        '文献管理': '문헌 관리',
        '学术工具': '학술적 도구',
        '免费软件': '무료 소프트웨어',
        '研究辅助': '연구 보조',
        '经济思想': '경제적 사고',
        '图书资源': '책 자원',
        '理论学习': '이론 학습',
        '智库': '지식 창고',
        '研究': '연구',
        '独立': '독립',
        '政策': '정책',
        '能源': '에너지',
        '中德关系': '중독 관계',
        '地缘政治': '지역 정치',
        '专家委员会': '전문가 위원회',
        '年度报告': '연도별 보고서',
        '咨询': '상담',
        '金融市场': '금융 시장',
        '证券': '증권',
        '工商': '사업자',
        '企业': '기업',
        '商业环境': '비즈니스 환경',
        '汽车工业': '자동차 산업',
        '电动转型': '전기 전환',
        '供应链': '공급망',
        '行业协会': '산업 협회',
        '股市分析': '주식 시장 분석',
        '相关性': '상관관계',
        '经济指标': '경제 지표',
        '信贷风险': '신용 위험',
        '交互地图': '상호작용 지도',
        '企业分析': '기업 분석'
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
        'Economic Sentiment': '経済センチメント',
        // 新增专题标签翻译
        '顶级大学': 'トップティア',
        '免费课程': '無料 コース',
        '全面系统': '総合的 システム', 
        '英文教学': '英語 授業',
        '公共政策': '公共政策',
        '执行教育': '政策実施',
        '权威师资': '権威 教授陣',
        '免费学习': '無料 学習',
        '基础入门': '基本 入門',
        '中文字幕': '中国語 字幕',
        '互动练习': '対話形式 練習',
        '专业认证': '専門 認定',
        '系统学习': '総合的 学習',
        '大学课程': '大学 コース',
        '付费优质': '有料 高品質',
        '现代教学': '現代 教育',
        '经济思维': '経済的 思考',
        '创新方法': '革新的 方法',
        '经典纪录片': '名作 ドキュメンタリー',
        '经济学史': '経済学史',
        '理论对比': '理論的 比較',
        '通俗易懂': '分かりやすい',
        '自由市场': '自由市場',
        '哈耶克思想': 'ハイエクの思想',
        '思辨性强': '論理的 思考',
        '马克思主义': 'マルクス主義',
        '资本主义': '資本主義',
        '历史视角': '歴史的 視点',
        '学术论文': '学術的 論文',
        '免费下载': '無料 ダウンロード',
        '全球研究': '世界観 研究',
        '工作论文': '業務 レポート',
        '权威研究': '権威 研究',
        '美国视角': 'アメリカの視点',
        '政策评估': '政策評価',
        '实证研究': '実証研究',
        '预印本': '事前印刷本',
        '最新研究': '最新 研究',
        '免费获取': '無料 アクセス',
        '全球论文': '世界 論文',
        '权威媒体': '権威 メディア',
        '全球视野': '世界観 視野',
        '深度分析': '深い 分析',
        '经济趋势': '経済 動向',
        '金融权威': '金融 権威',
        '市场动态': '金融市場 動向',
        '宏观政策': '宏観的 政策',
        '专业分析': '専門的 分析',
        '市场数据': '金融市場 データ',
        '实时资讯': 'リアルタイム 情報',
        '财经权威': '財経 権威',
        '全球覆盖': '世界 アクセス',
        '美国权威': 'アメリカの 権威',
        '商业新闻': 'ビジネス ニュース',
        '经济动态': '経済 動向',
        '深度报道': '深い 報道',
        '经济学家': '経済学者',
        '专栏观点': '専門家の見解',
        '全球议题': '世界 トピック',
        '学术权威': '学術的 権威',
        '政策研究': '政策 研究',
        '欧洲视角': 'ヨーロッパの視点',
        '专家观点': '専門家の見解',
        '前沿讨论': '先端 議論',
        '深度调查': '深い 調査',
        '政策解读': '政策 解説',
        '金融专业': '金融 専門',
        '权威中文': '中国語 権威',
        '实时新闻': '中国語 ニュース',
        '数据解读': '中国語 データ 解説',
        '财经专业': '財経 専門',
        '市场分析': '金融市場 分析',
        '宏观经济': '宏観的 経済',
        '及时准确': 'リアルタイム 正確性',
        '主流媒体': '主流 メディア',
        '老牌媒体': '古株 メディア',
        '实务导向': '実務重視',
        '政策报道': '政策 報道',
        '行业影响': '産業 影響',
        '新兴媒体': '新興 メディア',
        '科技财经': '科学技術と 財経',
        '新经济': '新経済',
        '趋势分析': '経済 動向 分析',
        '研究摘要': '研究 要約',
        '顶级智库': 'トップ 知的 倉庫',
        '美国智库': 'アメリカの 知的 倉庫',
        '经济研究': '経済 研究',
        '国际政策': '国際 政策',
        '贸易金融': '国際 金融',
        '权威智库': 'トップ 知的 倉庫',
        '专业研究': 'トップ 専門 研究',
        '央行': '中央銀行',
        '货币政策': '中央銀行 政策',
        '官方': '公式',
        '美联储': '連邦準備制度',
        '全球': '世界',
        '欧洲央行': '欧州中央銀行',
        '欧元区': '欧州ゾーン',
        '发改委': '国家發展改革委員会',
        '宏观政策': '国家發展改革委員会 政策',
        '财政部': '財政部',
        '财政政策': '財政 政策',
        '税收': '税金',
        '工信部': '工業情報化部',
        '产业政策': '産業政策',
        '数字经济': 'デジタル 経済',
        '商务部': '商務部',
        '贸易政策': '貿易政策',
        '投资': '投資',
        '统计局': '国家統計局',
        '经济数据': '経済 データ',
        '金融监管': '金融 監督',
        '银行': '銀行',
        '保险': '保険',
        '证监会': '証券監督管理委員会',
        '资本市场': '証券市場',
        '监管': '監督',
        '国际组织': '国際 機関',
        '权威机构': '権威 機関',
        '政策研究': '政策 研究',
        '发展政策': '發展 政策',
        '免费资源': '無料 リソース',
        '研究报告': '研究 報告書',
        '统计数据': '統計 データ',
        '中国政策': '中国 政策',
        '官方解读': '公式 解説',
        '实时更新': 'リアルタイム アップデート',
        '权威信息': '権威 情報',
        '中国货币': '中国 通貨',
        '季度报告': '四半期 報告書',
        '政策工具': '政策 ツール',
        'PDF下载': 'PDF ダウンロード',
        '英文资源': '英語 リソース',
        '全球视角': '世界 視点',
        '世界银行': '世界銀行',
        '全球数据': '世界 データ',
        '发展指标': '發展 指標',
        'IMF': 'IMF',
        '国际': '国際',
        '货币': '通貨',
        'OECD': 'OECD',
        '发达国家': '開発途上国',
        '统计': '統計',
        '实时数据': 'リアルタイム データ',
        '指标': '指標',
        '预测': '予測',
        '中国': '中国',
        '金融数据': '金融 データ',
        '专业': '専門',
        '亚洲': 'アジア',
        '欧盟': 'ヨーロッパ 連合',
        '国际清算银行': '国際 決済銀行',
        '金融统计': '金融 統計',
        '银行业': '銀行業',
        '中国数据': '中国 データ',
        '微观数据': 'ミクロデータ',
        '需要申请': '申請 必要',
        '家庭金融': '家計 金融',
        '德国数据': 'ドイツ データ',
        '学术申请': '学術 申請',
        '面板数据': 'パネルデータ',
        '长期跟踪': '長期 追跡',
        'OECD数据': 'OECD データ',
        '统计平台': '統計 プラットフォーム',
        '结构化数据': '構造化 データ',
        'A股': 'A株',
        '主板': '株式 市場',
        '创业板': '新株式 市場',
        '中小板': '中小型 株式 市場',
        '港股': '香港 株式 市場',
        '中概股': '中国 上場株式',
        '美股': '米国 株式 市場',
        '纽交所': 'ニューヨーク 証券取引所',
        '科技股': '科学技術 株式',
        '纳斯达克': 'NASDAQ',
        '美国': 'アメリカ',
        '期货': '先物',
        '期权': 'オプション',
        '商品': '商品',
        '中国市场': '中国 市場',
        '行业分析': '産業 分析',
        '日更新': '毎日 更新',
        '产业研究': '産業 研究',
        '全球市场': '世界 市場',
        '交互式': '対話形式',
        '可视化': '視覚化',
        '产业链': '産業 サイクル',
        '专业终端': '専門 端末',
        '付费高端': '有料 高級',
        '行业标准': '産業 規格',
        '编程工具': 'プログラミング ツール',
        '数据分析': 'データ 分析',
        '免费学习': '無料 学習',
        '开源工具': 'オープンソース ツール',
        '统计软件': '統計 ソフトウェア',
        '计量分析': '計量 分析',
        '免费工具': '無料 ツール',
        '学术研究': '学術 研究',
        '计量经济': '計量 経済学',
        '付费专业': '有料 専門',
        '学术标准': '学術 基準',
        '美国通胀': 'アメリカ インフレ',
        '计算工具': '計算 ツール',
        '历史CPI': '歴史 CPI',
        '实用工具': '実用的 ツール',
        '全球数据': '世界 データ',
        '发展趋势': '發展 傾向',
        '文献管理': '文献 管理',
        '学术工具': '学術 ツール',
        '免费软件': '無料 ソフトウェア',
        '研究辅助': '研究 補助',
        '经济思想': '経済的 思考',
        '图书资源': '書籍 リソース',
        '理论学习': '理論 学習',
        '智库': '知的 倉庫',
        '研究': '研究',
        '独立': '独立',
        '政策': '政策',
        '能源': 'エネルギー',
        '中德关系': '中独 関係',
        '地缘政治': '地政学',
        '专家委员会': '専門家 委員会',
        '年度报告': '年度 報告書',
        '咨询': '相談',
        '金融市场': '金融市場',
        '证券': '証券',
        '工商': '商工',
        '企业': '企業',
        '商业环境': 'ビジネス 環境',
        '汽车工业': '自動車 産業',
        '电动转型': '電気自動車 転換',
        '供应链': '供給 チェーン',
        '行业协会': '産業 協会',
        '股市分析': '株式 市場 分析',
        '相关性': '関連性',
        '经济指标': '経済 指標',
        '信贷风险': '信用 リスク',
        '交互地图': '対話形式 地図',
        '企业分析': '企業 分析'
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
        'Economic Sentiment': 'Wirtschaftsstimmung',
        // 新增专题标签翻译
        '顶级大学': 'Spitzenuniversität',
        '免费课程': 'Kostenloses Kursmaterial',
        '全面系统': 'komplettes System', 
        '英文教学': 'Englischunterricht',
        '公共政策': 'Öffentliche Politik',
        '执行教育': 'Durchführung von Bildungsmaßnahmen',
        '权威师资': 'Autorität in der Lehre',
        '免费学习': 'Kostenloses Lernen',
        '基础入门': 'Einführung',
        '中文字幕': 'Chinesische Untertitel',
        '互动练习': 'Interaktive Übungen',
        '专业认证': 'Professional Zertifizierung',
        '系统学习': 'Systematisches Lernen',
        '大学课程': 'Universitätskurse',
        '付费优质': 'Kostenpflichtige Qualität',
        '现代教学': 'Moderner Unterricht',
        '经济思维': 'Wirtschaftsdenken',
        '创新方法': 'Innovationsmethoden',
        '经典纪录片': 'Klassische Dokumentarfilme',
        '经济学史': 'Geschichte der Wirtschaftswissenschaften',
        '理论对比': 'Theoretische Vergleiche',
        '通俗易懂': 'Verständlich erklärt',
        '自由市场': 'Freier Markt',
        '哈耶克思想': 'Hayek-Ideen',
        '思辨性强': 'Argumentativ',
        '马克思主义': 'Marxistische Theorie',
        '资本主义': 'Kapitalismus',
        '历史视角': 'Historische Perspektive',
        '学术论文': 'Wissenschaftliche Aufsätze',
        '免费下载': 'Kostenloses Download',
        '全球研究': 'Globale Forschung',
        '工作论文': 'Wissenschaftliche Arbeiten',
        '权威研究': 'Autorität in der Forschung',
        '美国视角': 'Amerikanische Perspektive',
        '政策评估': 'Politikbewertung',
        '实证研究': 'Empirische Forschung',
        '预印本': 'Vorabdruck',
        '最新研究': 'Neueste Forschungsergebnisse',
        '免费获取': 'Kostenloses Zugang',
        '全球论文': 'Globale wissenschaftliche Aufsätze',
        '权威媒体': 'Autorität in der Medienwelt',
        '全球视野': 'Globale Sichtweite',
        '深度分析': 'Tiefenanalyse',
        '经济趋势': 'Wirtschaftstrends',
        '金融权威': 'Finanzautorität',
        '市场动态': 'Marktinformationen',
        '宏观政策': 'Makroökonomische Politik',
        '专业分析': 'Spezialistische Analyse',
        '市场数据': 'Marktdaten',
        '实时资讯': 'Live-Daten',
        '财经权威': 'Finanzautorität',
        '全球覆盖': 'Global Coverage',
        '美国权威': 'Amerikanische Autorität',
        '商业新闻': 'Geschäftsnews',
        '经济动态': 'Wirtschaftsaktualitäten',
        '深度报道': 'Tiefenbericht',
        '经济学家': 'Wirtschaftswissenschaftler',
        '专栏观点': 'Expertenmeinungen',
        '全球议题': 'Globale Diskussionen',
        '学术权威': 'Wissenschaftsautorität',
        '政策研究': 'Politikforschung',
        '欧洲视角': 'Europäische Perspektive',
        '专家观点': 'Expertenmeinungen',
        '前沿讨论': 'Vorlaufende Diskussionen',
        '深度调查': 'Tiefenstudien',
        '政策解读': 'Politikinterpretation',
        '金融专业': 'Finanzspezialisten',
        '权威中文': 'Chinesische Autorität',
        '实时新闻': 'Chinesische Nachrichten',
        '数据解读': 'Datenanalyse',
        '财经专业': 'Finanzspezialisten',
        '市场分析': 'Marktanalyse',
        '宏观经济': 'Makroökonomie',
        '及时准确': 'Live-Genauigkeit',
        '主流媒体': 'Mainstream-Medien',
        '老牌媒体': 'Alte Marke',
        '实务导向': 'Praxisbezogenheit',
        '政策报道': 'Politikberichterstattung',
        '行业影响': 'Industrie-Einfluss',
        '新兴媒体': 'Neue Medien',
        '科技财经': 'Wissenschaft und Finanzen',
        '新经济': 'Neue Wirtschaft',
        '趋势分析': 'Wirtschaftstrends-Analyse',
        '研究摘要': 'Forschungszusammenfassung',
        '顶级智库': 'Top-Tier-Institut',
        '美国智库': 'Amerikanische Think Tank',
        '经济研究': 'Wirtschaftsforschung',
        '国际政策': 'Internationale Politik',
        '贸易金融': 'Handels- und Finanzpolitik',
        '权威智库': 'Top-Tier-Institut',
        '专业研究': 'Top-Tier-Forschung',
        '央行': 'Zentralbank',
        '货币政策': 'Geldpolitik',
        '官方': 'Offiziell',
        '美联储': 'Federal Reserve',
        '全球': 'Welt',
        '欧洲央行': 'Europäische Zentralbank',
        '欧元区': 'Eurozone',
        '发改委': 'National Development and Reform Commission',
        '宏观政策': 'National Development and Reform Commission 政策',
        '财政部': 'Ministry of Finance',
        '财政政策': 'Ministry of Finance 政策',
        '税收': 'Taxation',
        '工信部': 'Ministry of Industry and Information Technology',
        '产业政策': 'Industrial Policy',
        '数字经济': 'Digital Economy',
        '商务部': 'Ministry of Commerce',
        '贸易政策': 'Trade Policy',
        '投资': 'Investment',
        '统计局': 'National Bureau of Statistics',
        '经济数据': 'Wirtschaftsdaten',
        '金融监管': 'Financial Regulation',
        '银行': 'Bank',
        '保险': 'Insurance',
        '证监会': 'China Securities Regulatory Commission',
        '资本市场': 'Capital Market',
        '监管': 'Regulation',
        '国际组织': 'International Organization',
        '权威机构': 'Authoritative Institution',
        '政策研究': 'Policy Research',
        '发展政策': 'Development Policy',
        '免费资源': 'Free Resources',
        '研究报告': 'Research Report',
        '统计数据': 'Statistical Data',
        '中国政策': 'Chinese Policy',
        '官方解读': 'Official Interpretation',
        '实时更新': 'Real-time Update',
        '权威信息': 'Authoritative Information',
        '中国货币': 'Chinese Currency',
        '季度报告': 'Quarterly Report',
        '政策工具': 'Policy Tools',
        'PDF下载': 'PDF Download',
        '英文资源': 'English Resources',
        '全球视角': 'Global Perspective',
        '世界银行': 'World Bank',
        '全球数据': 'Global Data',
        '发展指标': 'Development Indicators',
        'IMF': 'International Monetary Fund',
        '国际': 'International',
        '货币': 'Currency',
        'OECD': 'Organisation for Economic Co-operation and Development',
        '发达国家': 'Developed Countries',
        '统计': 'Statistics',
        '实时数据': 'Real-time Data',
        '指标': 'Indicators',
        '预测': 'Forecasts',
        '中国': 'China',
        '金融数据': 'Financial Data',
        '专业': 'Professional',
        '亚洲': 'Asia',
        '欧盟': 'European Union',
        '国际清算银行': 'Bank for International Settlements',
        '金融统计': 'Financial Statistics',
        '银行业': 'Banking Industry',
        '中国数据': 'Chinese Data',
        '微观数据': 'Microdata',
        '需要申请': 'Application Required',
        '家庭金融': 'Household Finance',
        '德国数据': 'German Data',
        '学术申请': 'Academic Application',
        '面板数据': 'Panel Data',
        '长期跟踪': 'Long-term Tracking',
        'OECD数据': 'OECD Data',
        '统计平台': 'Statistical Platform',
        '结构化数据': 'Structured Data',
        'A股': 'A-shares',
        '主板': 'Main Board',
        '创业板': 'Growth Enterprise Market',
        '中小板': 'Small and Medium Enterprise Board',
        '港股': 'Hong Kong Stock Exchange',
        '中概股': 'Chinese Depositary Receipts',
        '美股': 'American Depositary Shares',
        '纽交所': 'New York Stock Exchange',
        '科技股': 'Technology Stocks',
        '纳斯达克': 'NASDAQ',
        '美国': 'USA',
        '期货': 'Futures',
        '期权': 'Options',
        '商品': 'Commodities',
        '中国市场': 'Chinese Market',
        '行业分析': 'Industry Analysis',
        '日更新': 'Daily Update',
        '产业研究': 'Industry Research',
        '全球市场': 'Global Market',
        '交互式': 'Interactive',
        '可视化': 'Visualization',
        '产业链': 'Supply Chain',
        '专业终端': 'Professional Terminal',
        '付费高端': 'Premium Paid',
        '行业标准': 'Industry Standard',
        '编程工具': 'Programming Tools',
        '数据分析': 'Data Analysis',
        '免费学习': 'Free Learning',
        '开源工具': 'Open Source Tools',
        '统计软件': 'Statistical Software',
        '计量分析': 'Econometric Analysis',
        '免费工具': 'Free Tools',
        '学术研究': 'Academic Research',
        '计量经济': 'Econometrics',
        '付费专业': 'Professional Paid',
        '学术标准': 'Academic Standard',
        '美国通胀': 'US Inflation',
        '计算工具': 'Calculation Tool',
        '历史CPI': 'Historical CPI',
        '实用工具': 'Practical Tools',
        '全球数据': 'Global Data',
        '发展趋势': 'Development Trends',
        '文献管理': 'Reference Management',
        '学术工具': 'Academic Tools',
        '免费软件': 'Free Software',
        '研究辅助': 'Research Assistant',
        '经济思想': 'Economic Thought',
        '图书资源': 'Book Resources',
        '理论学习': 'Theoretical Learning',
        '智库': 'Think Tank',
        '研究': 'Research',
        '独立': 'Independent',
        '政策': 'Policy',
        '能源': 'Energy',
        '中德关系': 'China-Germany Relations',
        '地缘政治': 'Geopolitics',
        '专家委员会': 'Expert Committee',
        '年度报告': 'Annual Report',
        '咨询': 'Consulting',
        '金融市场': 'Financial Market',
        '证券': 'Securities',
        '工商': 'Industry and Commerce',
        '企业': 'Enterprise',
        '商业环境': 'Business Environment',
        '汽车工业': 'Automotive Industry',
        '电动转型': 'Electric Transition',
        '供应链': 'Supply Chain',
        '行业协会': 'Industry Association',
        '股市分析': 'Stock Market Analysis',
        '相关性': 'Correlation',
        '经济指标': 'Economic Indicators',
        '信贷风险': 'Credit Risk',
        '交互地图': 'Interactive Map',
        '企业分析': 'Enterprise Analysis'
      }
    };
    
    return tagTranslations[lang]?.[resourceName] || resourceName;
  }
  
  // 对于其他资源类型，返回原名称
  return resourceName;
} 