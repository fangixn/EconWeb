import { Language } from './i18n';

// 资源名称翻译对象接口
export interface ResourceTranslation {
  en: string;
  zh: string;
  ko: string;
  ja: string;
  de: string;
}

// =================== 完整资源翻译系统 ===================

// 德国专题资源翻译
export const germanResourcesTranslations: Record<string, ResourceTranslation> = {
  "German Central Bank": {
    en: "German Central Bank",
    zh: "德国联邦银行",
    ko: "독일 연방은행",
    ja: "ドイツ連邦銀行",
    de: "Deutsche Bundesbank"
  },
  "Fraunhofer Institute": {
    en: "Fraunhofer Institute",
    zh: "弗劳恩霍夫研究所",
    ko: "프라운호퍼 연구소",
    ja: "フラウンホーファー研究所",
    de: "Fraunhofer-Institut"
  },
  "GENESIS Regional Database": {
    en: "GENESIS Regional Database",
    zh: "GENESIS区域数据库",
    ko: "GENESIS 지역 데이터베이스",
    ja: "GENESIS地域データベース",
    de: "GENESIS-Online Regionaldatenbank"
  },
  "Energy Transition Monitoring": {
    en: "Energy Transition Monitoring",
    zh: "能源转型监测",
    ko: "에너지 전환 모니터링",
    ja: "エネルギー転換モニタリング",
    de: "Energiewende-Monitoring"
  },
  "IFO Business Climate Index": {
    en: "IFO Business Climate Index",
    zh: "IFO商业景气指数",
    ko: "IFO 비즈니스 기후 지수",
    ja: "IFO景況感指数",
    de: "IFO-Geschäftsklimaindex"
  },
  "ZEW Economic Sentiment Index": {
    en: "ZEW Economic Sentiment Index",
    zh: "ZEW经济景气指数",
    ko: "ZEW 경제심리 지수",
    ja: "ZEW経済センチメント指数",
    de: "ZEW-Konjunkturerwartungen"
  },
  "德国联邦银行(Bundesbank)": {
    en: "Deutsche Bundesbank",
    zh: "德国联邦银行",
    ko: "독일 연방은행",
    ja: "ドイツ連邦銀行",
    de: "Deutsche Bundesbank"
  },
  "德国联邦统计局": {
    en: "Federal Statistical Office of Germany",
    zh: "德国联邦统计局",
    ko: "독일 연방통계청",
    ja: "ドイツ連邦統計庁",
    de: "Statistisches Bundesamt"
  },
  "德国经济研究所(DIW Berlin)": {
    en: "German Institute for Economic Research (DIW Berlin)",
    zh: "德国经济研究所",
    ko: "독일경제연구소 (DIW 베를린)",
    ja: "ドイツ経済研究所 (DIW ベルリン)",
    de: "Deutsches Institut für Wirtschaftsforschung (DIW Berlin)"
  },
  "德国经济部": {
    en: "Federal Ministry for Economic Affairs and Energy",
    zh: "德国经济部",
    ko: "독일 경제부",
    ja: "ドイツ経済省",
    de: "Bundesministerium für Wirtschaft und Energie"
  },
  "德国对华政策研究所(MERICS)": {
    en: "Mercator Institute for China Studies (MERICS)",
    zh: "德国对华政策研究所",
    ko: "독일 대중국정책연구소 (MERICS)",
    ja: "ドイツ対中国政策研究所 (MERICS)",
    de: "Mercator Institute for China Studies (MERICS)"
  },
  "German Council of Economic Experts": {
    en: "German Council of Economic Experts",
    zh: "德国经济专家委员会",
    ko: "독일 경제전문가위원회",
    ja: "ドイツ経済専門家委員会",
    de: "Sachverständigenrat zur Begutachtung der gesamtwirtschaftlichen Entwicklung"
  },
  "法兰克福证券交易所": {
    en: "Frankfurt Stock Exchange",
    zh: "法兰克福证券交易所",
    ko: "프랑크푸르트 증권거래소",
    ja: "フランクフルト証券取引所",
    de: "Frankfurter Wertpapierbörse"
  },
  "德国工商总会(DIHK)": {
    en: "Association of German Chambers of Commerce and Industry (DIHK)",
    zh: "德国工商总会",
    ko: "독일상공회의소연합회 (DIHK)",
    ja: "ドイツ商工会議所連合会 (DIHK)",
    de: "Deutscher Industrie- und Handelskammertag (DIHK)"
  },
  "德国汽车工业协会(VDA)": {
    en: "German Association of the Automotive Industry (VDA)",
    zh: "德国汽车工业协会",
    ko: "독일자동차공업협회 (VDA)",
    ja: "ドイツ自動車工業会 (VDA)",
    de: "Verband der Automobilindustrie (VDA)"
  },
  "德国DAX指数分析": {
    en: "German DAX Index Analysis",
    zh: "德国DAX指数分析",
    ko: "독일 DAX 지수 분석",
    ja: "ドイツDAX指数分析",
    de: "DAX-Index-Analyse"
  },
  "德国企业信贷数据库": {
    en: "German Corporate Credit Database",
    zh: "德国企业信贷数据库",
    ko: "독일 기업신용 데이터베이스",
    ja: "ドイツ企業信用データベース",
    de: "Deutsche Unternehmenskreditdatenbank"
  }
};

// 顶级期刊资源翻译
export const topJournalsTranslations: Record<string, ResourceTranslation> = {
  "Quarterly Journal of Economics (QJE)": {
    en: "Quarterly Journal of Economics (QJE)",
    zh: "经济学季刊",
    ko: "경제학 계간지 (QJE)",
    ja: "経済学季刊 (QJE)",
    de: "Quarterly Journal of Economics (QJE)"
  },
  "American Economic Review": {
    en: "American Economic Review",
    zh: "美国经济评论",
    ko: "미국경제평론",
    ja: "アメリカ経済評論",
    de: "American Economic Review"
  },
  "Journal of Finance (JF)": {
    en: "Journal of Finance (JF)",
    zh: "金融学杂志",
    ko: "금융학 저널 (JF)",
    ja: "ファイナンス・ジャーナル (JF)",
    de: "Journal of Finance (JF)"
  },
  "Econometrica": {
    en: "Econometrica",
    zh: "计量经济学",
    ko: "계량경제학",
    ja: "エコノメトリカ",
    de: "Econometrica"
  },
  "Review of Economic Studies (REStud)": {
    en: "Review of Economic Studies (REStud)",
    zh: "经济研究评论",
    ko: "경제연구 리뷰 (REStud)",
    ja: "経済研究評論 (REStud)",
    de: "Review of Economic Studies (REStud)"
  },
  "Journal of Financial Economics (JFE)": {
    en: "Journal of Financial Economics (JFE)",
    zh: "金融经济学杂志",
    ko: "금융경제학 저널 (JFE)",
    ja: "金融経済学ジャーナル (JFE)",
    de: "Journal of Financial Economics (JFE)"
  },
  "Journal of Political Economy (JPE)": {
    en: "Journal of Political Economy (JPE)",
    zh: "政治经济学杂志",
    ko: "정치경제학 저널 (JPE)",
    ja: "政治経済学ジャーナル (JPE)",
    de: "Journal of Political Economy (JPE)"
  },
  "Review of Financial Studies (RFS)": {
    en: "Review of Financial Studies (RFS)",
    zh: "金融研究评论",
    ko: "금융연구 리뷰 (RFS)",
    ja: "金融研究評論 (RFS)",
    de: "Review of Financial Studies (RFS)"
  },
  "American Economic Journal: Macroeconomics": {
    en: "American Economic Journal: Macroeconomics",
    zh: "美国经济学杂志：宏观经济学",
    ko: "미국경제저널: 거시경제학",
    ja: "アメリカ経済ジャーナル：マクロ経済学",
    de: "American Economic Journal: Macroeconomics"
  },
  "Journal of Marketing": {
    en: "Journal of Marketing",
    zh: "营销学杂志",
    ko: "마케팅 저널",
    ja: "マーケティング・ジャーナル",
    de: "Journal of Marketing"
  }
};

// 学习资源翻译
export const learningResourcesTranslations: Record<string, ResourceTranslation> = {
  "MIT OCW - Economics": {
    en: "MIT OpenCourseWare - Economics",
    zh: "MIT开放课程 - 经济学",
    ko: "MIT 오픈코스웨어 - 경제학",
    ja: "MIT オープンコースウェア - 経済学",
    de: "MIT OpenCourseWare - Wirtschaftswissenschaften"
  },
  "Harvard Kennedy School": {
    en: "Harvard Kennedy School",
    zh: "哈佛肯尼迪学院",
    ko: "하버드 케네디 스쿨",
    ja: "ハーバード・ケネディ・スクール",
    de: "Harvard Kennedy School"
  },
  "Khan Academy - Economics": {
    en: "Khan Academy - Economics",
    zh: "可汗学院 - 经济学",
    ko: "칸 아카데미 - 경제학",
    ja: "カーン・アカデミー - 経済学",
    de: "Khan Academy - Wirtschaftswissenschaften"
  },
  "Coursera Economics Specialization": {
    en: "Coursera Economics Specialization",
    zh: "Coursera经济学专业课程",
    ko: "코세라 경제학 전문과정",
    ja: "Coursera経済学専門課程",
    de: "Coursera-Wirtschaftsspezialisierung"
  },
  "Marginal Revolution University": {
    en: "Marginal Revolution University",
    zh: "边际革命大学",
    ko: "마진얼 레볼루션 대학교",
    ja: "マージナル・レボリューション大学",
    de: "Marginal Revolution University"
  },
  "BBC Masters of Money - 凯恩斯": {
    en: "BBC Masters of Money - Keynes",
    zh: "BBC《货币大师》- 凯恩斯",
    ko: "BBC 머니 마스터즈 - 케인스",
    ja: "BBC マネー・マスターズ - ケインズ",
    de: "BBC Masters of Money - Keynes"
  },
  "BBC Masters of Money - 哈耶克": {
    en: "BBC Masters of Money - Hayek",
    zh: "BBC《货币大师》- 哈耶克",
    ko: "BBC 머니 마스터즈 - 하이에크",
    ja: "BBC マネー・マスターズ - ハイエク",
    de: "BBC Masters of Money - Hayek"
  },
  "BBC Masters of Money - 马克思": {
    en: "BBC Masters of Money - Marx",
    zh: "BBC《货币大师》- 马克思",
    ko: "BBC 머니 마스터즈 - 마르크스",
    ja: "BBC マネー・マスターズ - マルクス",
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
    ko: "NBER 워킹페이퍼",
    ja: "NBER ワーキングペーパー",
    de: "NBER Working Papers"
  },
  "arXiv Economics": {
    en: "arXiv Economics",
    zh: "arXiv经济学",
    ko: "arXiv 경제학",
    ja: "arXiv 経済学",
    de: "arXiv Wirtschaftswissenschaften"
  }
};

// 媒体资源翻译
export const mediaResourcesTranslations: Record<string, ResourceTranslation> = {
  "The Economist": {
    en: "The Economist",
    zh: "经济学人",
    ko: "이코노미스트",
    ja: "エコノミスト",
    de: "The Economist"
  },
  "Financial Times": {
    en: "Financial Times",
    zh: "金融时报",
    ko: "파이낸셜 타임스",
    ja: "フィナンシャル・タイムズ",
    de: "Financial Times"
  },
  "Bloomberg": {
    en: "Bloomberg",
    zh: "彭博社",
    ko: "블룸버그",
    ja: "ブルームバーグ",
    de: "Bloomberg"
  },
  "Wall Street Journal": {
    en: "Wall Street Journal",
    zh: "华尔街日报",
    ko: "월스트리트 저널",
    ja: "ウォール・ストリート・ジャーナル",
    de: "Wall Street Journal"
  },
  "Project Syndicate": {
    en: "Project Syndicate",
    zh: "Project Syndicate",
    ko: "프로젝트 신디케이트",
    ja: "プロジェクト・シンジケート",
    de: "Project Syndicate"
  },
  "VoxEU (CEPR)": {
    en: "VoxEU (CEPR)",
    zh: "VoxEU (欧洲经济政策研究中心)",
    ko: "VoxEU (CEPR)",
    ja: "VoxEU (CEPR)",
    de: "VoxEU (CEPR)"
  },
  "财新网": {
    en: "Caixin",
    zh: "财新网",
    ko: "차이신 (재신망)",
    ja: "財新網 (Caixin)",
    de: "Caixin"
  },
  "第一财经": {
    en: "China Business Network (CBN)",
    zh: "第一财经",
    ko: "제일재경 (CBN)",
    ja: "第一財経 (CBN)",
    de: "China Business Network (CBN)"
  },
  "澎湃新闻·财经频道": {
    en: "The Paper - Finance",
    zh: "澎湃新闻·财经频道",
    ko: "펑파이뉴스 재경채널",
    ja: "澎湃新聞・財经チャンネル",
    de: "The Paper - Finanzkanal"
  },
  "21世纪经济报道": {
    en: "21st Century Business Herald",
    zh: "21世纪经济报道",
    ko: "21세기 경제보도",
    ja: "21世紀経済報道",
    de: "21st Century Business Herald"
  },
  "界面新闻财经": {
    en: "Jiemian News Finance",
    zh: "界面新闻财经",
    ko: "지에미안뉴스 재경",
    ja: "界面新聞財经",
    de: "Jiemian News Finanzen"
  },
  "NBER Digest": {
    en: "NBER Digest",
    zh: "NBER文摘",
    ko: "NBER 다이제스트",
    ja: "NBER ダイジェスト",
    de: "NBER Digest"
  },
  "Brookings Institution": {
    en: "Brookings Institution",
    zh: "布鲁金斯学会",
    ko: "브루킹스 연구소",
    ja: "ブルッキングス研究所",
    de: "Brookings Institution"
  },
  "Peterson Institute for International Economics": {
    en: "Peterson Institute for International Economics",
    zh: "彼得森国际经济研究所",
    ko: "피터슨 국제경제연구소",
    ja: "ピーターソン国際経済研究所",
    de: "Peterson Institute for International Economics"
  }
};

// 政策资源翻译
export const policyResourcesTranslations: Record<string, ResourceTranslation> = {
  "中国人民银行": {
    en: "People's Bank of China",
    zh: "中国人民银行",
    ko: "중국인민은행",
    ja: "中国人民銀行",
    de: "Volksbank von China"
  },
  "美联储(Federal Reserve)": {
    en: "Federal Reserve",
    zh: "美联储",
    ko: "연방준비제도",
    ja: "連邦準備制度",
    de: "Federal Reserve"
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
    ko: "국가발전개혁위원회",
    ja: "国家發展改革委員会",
    de: "Nationale Entwicklungs- und Reformkommission"
  },
  "财政部": {
    en: "Ministry of Finance",
    zh: "财政部",
    ko: "재정부",
    ja: "財政部",
    de: "Finanzministerium"
  },
  "工信部": {
    en: "Ministry of Industry and Information Technology",
    zh: "工信部",
    ko: "공업정보화부",
    ja: "工業情報化部",
    de: "Ministerium für Industrie und Informationstechnologie"
  },
  "商务部": {
    en: "Ministry of Commerce",
    zh: "商务部",
    ko: "상무부",
    ja: "商務部",
    de: "Handelsministerium"
  },
  "国家统计局": {
    en: "National Bureau of Statistics",
    zh: "国家统计局",
    ko: "국가통계국",
    ja: "国家統計局",
    de: "Nationales Statistikamt"
  },
  "银保监会": {
    en: "China Banking and Insurance Regulatory Commission",
    zh: "银保监会",
    ko: "중국 은행보험감독관리위원회",
    ja: "中国銀行保険監督管理委員会",
    de: "China Banking and Insurance Regulatory Commission"
  },
  "证监会": {
    en: "China Securities Regulatory Commission",
    zh: "证监会",
    ko: "중국 증권감독관리위원회",
    ja: "中国証券監督管理委員会",
    de: "China Securities Regulatory Commission"
  },
  "IMF (国际货币基金组织)": {
    en: "International Monetary Fund (IMF)",
    zh: "国际货币基金组织",
    ko: "국제통화기금 (IMF)",
    ja: "国際通貨基金 (IMF)",
    de: "Internationaler Währungsfonds (IWF)"
  },
  "世界银行(World Bank)": {
    en: "World Bank",
    zh: "世界银行",
    ko: "세계은행",
    ja: "世界銀行",
    de: "Weltbank"
  },
  "OECD (经济合作与发展组织)": {
    en: "Organisation for Economic Co-operation and Development (OECD)",
    zh: "经济合作与发展组织",
    ko: "경제협력개발기구 (OECD)",
    ja: "经济协力开发机构 (OECD)",
    de: "Organisation für wirtschaftliche Zusammenarbeit und Entwicklung (OECD)"
  },
  "国务院政策解读专栏": {
    en: "State Council Policy Interpretation Column",
    zh: "国务院政策解读专栏",
    ko: "국무원 정책해석 칼럼",
    ja: "国務院政策解釈コラム",
    de: "Staatsrat-Politikinterpretationsspalte"
  },
  "人民银行货币政策报告": {
    en: "PBOC Monetary Policy Report",
    zh: "人民银行货币政策报告",
    ko: "중국인민은행 통화정책 보고서",
    ja: "中国人民銀行通貨政策報告書",
    de: "PBOC-Geldpolitikbericht"
  },
  "IMF政策跟踪": {
    en: "IMF Policy Tracker",
    zh: "IMF政策跟踪",
    ko: "IMF 정책 추적",
    ja: "IMF政策トラッカー",
    de: "IWF-Policy-Tracker"
  }
};

// 数据资源翻译
export const dataResourcesTranslations: Record<string, ResourceTranslation> = {
  "FRED (美联储经济数据)": {
    en: "FRED Economic Data",
    zh: "FRED经济数据库",
    ko: "FRED 경제 데이터",
    ja: "FRED経済データ",
    de: "FRED-Wirtschaftsdaten"
  },
  "世界银行数据": {
    en: "World Bank Data",
    zh: "世界银行数据库",
    ko: "세계은행 데이터",
    ja: "世界銀行データ",
    de: "Weltbank-Daten"
  },
  "IMF数据库": {
    en: "IMF Data",
    zh: "IMF数据库",
    ko: "IMF 데이터",
    ja: "IMFデータ",
    de: "IWF-Daten"
  },
  "OECD数据": {
    en: "OECD Data",
    zh: "OECD数据库",
    ko: "OECD 데이터",
    ja: "OECDデータ",
    de: "OECD-Daten"
  },
  "Trading Economics": {
    en: "Trading Economics",
    zh: "Trading Economics",
    ko: "트레이딩 이코노믹스",
    ja: "トレーディング・エコノミクス",
    de: "Trading Economics"
  },
  "Wind万得": {
    en: "Wind Information",
    zh: "Wind万得",
    ko: "윈드 정보",
    ja: "Wind万得",
    de: "Wind Information"
  },
  "CEIC数据库": {
    en: "CEIC Data",
    zh: "CEIC数据库",
    ko: "CEIC 데이터",
    ja: "CEICデータ",
    de: "CEIC-Daten"
  },
  "Eurostat": {
    en: "Eurostat",
    zh: "欧盟统计局",
    ko: "유로스타트",
    ja: "ユーロスタット",
    de: "Eurostat"
  },
  "BIS国际清算银行": {
    en: "Bank for International Settlements (BIS)",
    zh: "国际清算银行",
    ko: "국제결제은행 (BIS)",
    ja: "国際決済銀行 (BIS)",
    de: "Bank für Internationalen Zahlungsausgleich (BIZ)"
  },
  "中国家庭金融调查(CHFS)": {
    en: "China Household Finance Survey (CHFS)",
    zh: "中国家庭金融调查",
    ko: "중국 가계금융조사 (CHFS)",
    ja: "中国世帯金融調査 (CHFS)",
    de: "Chinesische Haushaltsfinanzerhebung (CHFS)"
  },
  "德国社会经济面板(SOEP)": {
    en: "German Socio-Economic Panel (SOEP)",
    zh: "德国社会经济面板调查",
    ko: "독일 사회경제 패널 (SOEP)",
    ja: "ドイツ社会経済パネル (SOEP)",
    de: "Sozio-oekonomisches Panel (SOEP)"
  },
  "OECD.Stat": {
    en: "OECD.Stat",
    zh: "OECD统计数据库",
    ko: "OECD.Stat",
    ja: "OECD.Stat",
    de: "OECD.Stat"
  }
};

// 市场资源翻译
export const marketResourcesTranslations: Record<string, ResourceTranslation> = {
  "上海证券交易所": {
    en: "Shanghai Stock Exchange",
    zh: "上海证券交易所",
    ko: "상하이 증권거래소",
    ja: "上海証券取引所",
    de: "Shanghaier Börse"
  },
  "深圳证券交易所": {
    en: "Shenzhen Stock Exchange",
    zh: "深圳证券交易所",
    ko: "선전 증권거래소",
    ja: "深圳証券取引所",
    de: "Börse Shenzhen"
  },
  "香港交易所": {
    en: "Hong Kong Exchanges and Clearing",
    zh: "香港交易所",
    ko: "홍콩거래소",
    ja: "香港取引所",
    de: "Hongkonger Börse"
  },
  "纽约证券交易所": {
    en: "New York Stock Exchange",
    zh: "纽约证券交易所",
    ko: "뉴욕 증권거래소",
    ja: "ニューヨーク証券取引所",
    de: "New Yorker Börse"
  },
  "纳斯达克": {
    en: "NASDAQ",
    zh: "纳斯达克",
    ko: "나스닥",
    ja: "ナスダック",
    de: "NASDAQ"
  },
  "芝加哥商品交易所": {
    en: "Chicago Mercantile Exchange",
    zh: "芝加哥商品交易所",
    ko: "시카고상품거래소",
    ja: "シカゴ・マーカンタイル取引所",
    de: "Chicago Mercantile Exchange"
  },
  "前瞻产业研究院": {
    en: "Qianzhan Industry Research Institute",
    zh: "前瞻产业研究院",
    ko: "첸잔 산업연구원",
    ja: "前瞻産業研究院",
    de: "Qianzhan-Industrieforschungsinstitut"
  },
  "MacroMicro行业地图": {
    en: "MacroMicro Industry Map",
    zh: "MacroMicro行业地图",
    ko: "마크로마이크로 산업지도",
    ja: "マクロマイクロ産業マップ",
    de: "MacroMicro-Industriekarte"
  }
};

// 工具资源翻译
export const toolsResourcesTranslations: Record<string, ResourceTranslation> = {
  "Bloomberg Terminal": {
    en: "Bloomberg Terminal",
    zh: "彭博终端",
    ko: "블룸버그 터미널",
    ja: "ブルームバーグ・ターミナル",
    de: "Bloomberg-Terminal"
  },
  "Python for Economics": {
    en: "Python for Economics",
    zh: "Python经济学编程",
    ko: "경제학을 위한 파이썬",
    ja: "経済学のためのPython",
    de: "Python für Wirtschaftswissenschaften"
  },
  "R for Economics": {
    en: "R for Economics",
    zh: "R语言经济学应用",
    ko: "경제학을 위한 R",
    ja: "経済学のためのR",
    de: "R für Wirtschaftswissenschaften"
  },
  "Stata": {
    en: "Stata",
    zh: "Stata统计软件",
    ko: "스타타",
    ja: "Stata",
    de: "Stata"
  },
  "美国通胀计算器": {
    en: "US Inflation Calculator",
    zh: "美国通胀计算器",
    ko: "미국 인플레이션 계산기",
    ja: "米国インフレ計算機",
    de: "US-Inflationsrechner"
  },
  "Our World in Data": {
    en: "Our World in Data",
    zh: "Our World in Data",
    ko: "아워 월드 인 데이터",
    ja: "Our World in Data",
    de: "Our World in Data"
  },
  "Zotero": {
    en: "Zotero",
    zh: "Zotero文献管理",
    ko: "조테로",
    ja: "Zotero",
    de: "Zotero"
  },
  "Econlib": {
    en: "Econlib",
    zh: "Econlib经济学图书馆",
    ko: "이코노믹 라이브러리",
    ja: "エコノミック・ライブラリー",
    de: "Econlib"
  }
};

// =================== 通用翻译函数 ===================

// 获取资源名称翻译的主函数
export function getResourceTranslation(lang: Language, resourceName: string, category?: string): string {
  // 尝试各个专题的翻译
  const allTranslations = {
    ...germanResourcesTranslations,
    ...topJournalsTranslations,
    ...learningResourcesTranslations,
    ...mediaResourcesTranslations,
    ...policyResourcesTranslations,
    ...dataResourcesTranslations,
    ...marketResourcesTranslations,
    ...toolsResourcesTranslations
  };

  if (allTranslations[resourceName]) {
    return allTranslations[resourceName][lang];
  }

  // 如果没有找到翻译，返回原名称
  return resourceName;
}

// 资源描述翻译映射
const resourceDescriptionTranslations: Record<string, ResourceTranslation> = {
  "MIT OCW - Economics": {
    en: "MIT OpenCourseWare economics courses covering microeconomics, macroeconomics, and econometrics",
    zh: "麻省理工学院开放课程，覆盖微观、宏观、计量经济学等核心课程",
    ko: "MIT 오픈코스웨어 경제학 과정, 미시, 거시, 계량경제학 포함",
    ja: "MITオープンコースウェア経済学、ミクロ・マクロ・計量経済学をカバー",
    de: "MIT OpenCourseWare Wirtschaftskurse mit Mikro-, Makro- und Ökonometrie"
  },
  "Harvard Kennedy School": {
    en: "Harvard Kennedy School's executive education programs in public policy and economics",
    zh: "哈佛肯尼迪学院公共政策与经济学在线课程",
    ko: "하버드 케네디 스쿨의 공공정책 및 경제학 온라인 과정",
    ja: "ハーバード・ケネディ・スクールの公共政策・経済学オンライン課程",
    de: "Harvard Kennedy School Executive Education in öffentlicher Politik und Wirtschaft"
  },
  "Khan Academy - Economics": {
    en: "Free economics courses from Khan Academy, perfect for beginners and review",
    zh: "可汗学院经济学免费课程，适合经济学入门和复习",
    ko: "칸 아카데미의 무료 경제학 과정, 초보자와 복습에 적합",
    ja: "カーン・アカデミーの無料経済学コース、初心者と復習に最適",
    de: "Kostenlose Wirtschaftskurse von Khan Academy, ideal für Anfänger und Wiederholung"
  },
  "Coursera Economics Specialization": {
    en: "Systematic economics specialization courses from top universities on Coursera",
    zh: "Coursera经济学专业课程，来自顶级大学的系统性课程",
    ko: "코세라의 최고 대학교 체계적 경제학 전문과정",
    ja: "Courseraの一流大学による体系的経済学専門課程",
    de: "Systematische Wirtschaftsspezialisierung von Top-Universitäten auf Coursera"
  },
  "Marginal Revolution University": {
    en: "Innovative online platform focusing on modern economics education and economic thinking",
    zh: "边际革命大学，专注现代经济学教育的创新在线平台",
    ko: "현대 경제학 교육에 중점을 둔 혁신적인 온라인 플랫폼",
    ja: "現代経済学教育に焦点を当てた革新的なオンラインプラットフォーム",
    de: "Innovative Online-Plattform für moderne Wirtschaftsbildung"
  },
  "BBC Masters of Money - 凯恩斯": {
    en: "BBC Masters of Money series - Keynes episode, exploring Keynesian economics in depth",
    zh: "BBC《Masters of Money》系列 - 凯恩斯篇，深入解析凯恩斯主义经济学",
    ko: "BBC 머니 마스터즈 시리즈 - 케인스편, 케인스 경제학 심층 탐구",
    ja: "BBC マネー・マスターズ シリーズ - ケインズ編、ケインズ経済学の詳細分析",
    de: "BBC Masters of Money Serie - Keynes-Folge, tiefgreifende Analyse der keynesianischen Ökonomie"
  },
  "BBC Masters of Money - 哈耶克": {
    en: "BBC Masters of Money series - Hayek episode, exploring free market vs government intervention",
    zh: "BBC《Masters of Money》系列 - 哈耶克篇，探讨自由市场与政府干预的争论",
    ko: "BBC 머니 마스터즈 시리즈 - 하이에크편, 자유시장 vs 정부개입 논쟁 탐구",
    ja: "BBC マネー・マスターズ シリーズ - ハイエク編、自由市場と政府介入の議論を探求",
    de: "BBC Masters of Money Serie - Hayek-Folge, Debatte über freie Märkte vs. Staatseingriffe"
  },
  "BBC Masters of Money - 马克思": {
    en: "BBC Masters of Money series - Marx episode, reexamining Marx's economic theories",
    zh: "BBC《Masters of Money》系列 - 马克思篇，重新审视马克思的经济学理论",
    ko: "BBC 머니 마스터즈 시리즈 - 마르크스편, 마르크스 경제학 이론 재검토",
    ja: "BBC マネー・マスターズ シリーズ - マルクス編、マルクス経済学理論の再検討",
    de: "BBC Masters of Money Serie - Marx-Folge, Neubetrachtung von Marx' Wirtschaftstheorien"
  },
  "SSRN": {
    en: "Social Science Research Network for downloading latest working papers and research reports",
    zh: "社会科学研究网络，下载最新工作论文和研究报告",
    ko: "최신 워킹페이퍼와 연구보고서 다운로드를 위한 사회과학연구네트워크",
    ja: "最新のワーキングペーパーと研究報告書をダウンロードする社会科学研究ネットワーク",
    de: "Social Science Research Network zum Download aktueller Arbeitspapiere und Forschungsberichte"
  },
  "NBER Working Papers": {
    en: "National Bureau of Economic Research - authoritative economic research and policy evaluation",
    zh: "美国国家经济研究局，权威经济学研究和政策评估",
    ko: "미국 국가경제연구소 - 권위있는 경제학 연구 및 정책 평가",
    ja: "米国国家経済研究所 - 権威ある経済学研究と政策評価",
    de: "US National Bureau of Economic Research - maßgebliche Wirtschaftsforschung und Politikbewertung"
  },
  "arXiv Economics": {
    en: "Economics and finance preprint platform featuring the latest research findings",
    zh: "经济学和金融学预印本论文平台，最新研究成果",
    ko: "최신 연구 성과를 담은 경제학 및 금융학 프리프린트 플랫폼",
    ja: "最新の研究成果を特集する経济学・金融学プレプリントプラットフォーム",
    de: "Preprint-Plattform für Wirtschafts- und Finanzwissenschaften mit neuesten Forschungsergebnissen"
  },
  
  // 市场专题资源描述翻译
  "上海证券交易所": {
    en: "A-share main board market information and data",
    zh: "A股主板市场信息和数据",
    ko: "A주 메인보드 시장 정보 및 데이터",
    ja: "A株メインボード市場情報とデータ",
    de: "A-Aktien Hauptbörsen-Marktinformationen und -daten"
  },
  "深圳证券交易所": {
    en: "ChiNext and SME board market information",
    zh: "创业板和中小板市场信息",
    ko: "창업보드 및 중소기업보드 시장 정보",
    ja: "創業板と中小企業板の市場情報",
    de: "ChiNext- und KMU-Börsen-Marktinformationen"
  },
  "香港交易所": {
    en: "Hong Kong stock market and Chinese concept stocks information",
    zh: "港股市场和中概股信息",
    ko: "홍콩 주식시장 및 중국 컨셉주 정보",
    ja: "香港株式市場と中国コンセプト株情報",
    de: "Hongkonger Aktienmarkt und chinesische Konzeptaktien-Informationen"
  },
  "纽约证券交易所": {
    en: "World's largest stock exchange",
    zh: "全球最大股票交易所",
    ko: "세계 최대 주식거래소",
    ja: "世界最大の証券取引所",
    de: "Weltgrößte Börse"
  },
  "纳斯达克": {
    en: "Technology-focused stock exchange",
    zh: "科技股集中的交易所",
    ko: "기술주 중심의 거래소",
    ja: "テクノロジー株中心の取引所",
    de: "Technologieorientierte Börse"
  },
  "芝加哥商品交易所": {
    en: "World's largest futures and options exchange",
    zh: "全球最大的期货和期权交易所",
    ko: "세계 최대 선물 및 옵션 거래소",
    ja: "世界最大の先物・オプション取引所",
    de: "Weltgrößte Futures- und Optionsbörse"
  },
  
  // 政策专题资源描述翻译
  "中国人民银行": {
    en: "People's Bank of China official website, monetary policy and financial regulation",
    zh: "中国央行官网，货币政策、金融监管政策",
    ko: "중국 인민은행 공식 웹사이트, 통화정책 및 금융규제",
    ja: "中国人民銀行公式サイト、金融政策・金融規制",
    de: "Offizielle Website der Volksbank China, Geldpolitik und Finanzregulierung"
  },
  "美联储(Federal Reserve)": {
    en: "Federal Reserve, global monetary policy benchmark",
    zh: "美国央行，全球货币政策风向标",
    ko: "미국 연방준비제도, 글로벌 통화정책 기준",
    ja: "米国連邦準備制度、グローバル金融政策の指標",
    de: "US-Notenbank, globaler Geldpolitik-Benchmark"
  },
  "欧洲央行(ECB)": {
    en: "European Central Bank official website, Eurozone monetary policy",
    zh: "欧洲央行官网，欧元区货币政策",
    ko: "유럽중앙은행 공식 웹사이트, 유로존 통화정책",
    ja: "欧州中央銀行公式サイト、ユーロ圏金融政策",
    de: "Offizielle Website der Europäischen Zentralbank, Eurozone-Geldpolitik"
  },
  "国家发改委": {
    en: "National Development and Reform Commission, macroeconomic policy formulation",
    zh: "国家发展和改革委员会，宏观经济政策制定",
    ko: "국가발전개혁위원회, 거시경제정책 수립",
    ja: "国家発展改革委員会、マクロ経済政策策定",
    de: "Nationale Entwicklungs- und Reformkommission, makroökonomische Politikgestaltung"
  },
  "财政部": {
    en: "Ministry of Finance of China, fiscal policy and taxation policy",
    zh: "中国财政部，财政政策与税收政策",
    ko: "중국 재정부, 재정정책 및 세제정책",
    ja: "中国財政部、財政政策・税制政策",
    de: "Finanzministerium Chinas, Finanz- und Steuerpolitik"
  },
  
  // 数据专题资源描述翻译
  "FRED (美联储经济数据)": {
    en: "Federal Reserve Economic Data, the world's most authoritative economic database",
    zh: "美联储圣路易斯分行经济数据库，全球最权威",
    ko: "연방준비제도 경제데이터, 세계에서 가장 권위있는 경제 데이터베이스",
    ja: "連邦準備制度経済データ、世界で最も権威ある経済データベース",
    de: "Federal Reserve Wirtschaftsdaten, die weltweit maßgeblichste Wirtschaftsdatenbank"
  },
  "世界银行数据": {
    en: "World Bank development indicators and global statistics",
    zh: "世界银行发展指标和全球统计",
    ko: "세계은행 개발지표 및 글로벌 통계",
    ja: "世界銀行開発指標とグローバル統計",
    de: "Weltbank-Entwicklungsindikatoren und globale Statistiken"
  },
  "IMF数据库": {
    en: "International Monetary Fund data and statistics",
    zh: "国际货币基金组织数据和统计",
    ko: "국제통화기금 데이터 및 통계",
    ja: "国際通貨基金データと統計",
    de: "Internationale Währungsfonds Daten und Statistiken"
  },
  "OECD数据": {
    en: "Organisation for Economic Co-operation and Development statistical data",
    zh: "经济合作与发展组织统计数据",
    ko: "경제협력개발기구 통계 데이터",
    ja: "経済協力開発機構統計データ",
    de: "Organisation für wirtschaftliche Zusammenarbeit und Entwicklung Statistikdaten"
  },
  "Trading Economics": {
    en: "Real-time economic indicators, market data and forecasts",
    zh: "实时经济指标、市场数据和预测",
    ko: "실시간 경제지표, 시장 데이터 및 예측",
    ja: "リアルタイム経済指標、市場データと予測",
    de: "Echtzeitindikatoren, Marktdaten und Prognosen"
  },
  
  // 德国专题资源描述翻译
  "德国联邦银行(Bundesbank)": {
    en: "German central bank, monetary policy and financial stability",
    zh: "德国央行，货币政策与金融稳定",
    ko: "독일 중앙은행, 통화정책 및 금융안정",
    ja: "ドイツ中央銀行、金融政策と金融安定",
    de: "Deutsche Zentralbank, Geldpolitik und Finanzstabilität"
  },
  "德国联邦统计局": {
    en: "Official statistics and economic data for Germany",
    zh: "德国官方统计数据和经济数据",
    ko: "독일 공식 통계 및 경제 데이터",
    ja: "ドイツの公式統計・経済データ",
    de: "Amtliche Statistiken und Wirtschaftsdaten für Deutschland"
  },
  "德国经济研究所(DIW Berlin)": {
    en: "Leading German economic research institute with policy analysis",
    zh: "德国顶级经济研究机构，提供政策分析",
    ko: "독일 최고 경제연구기관, 정책 분석 제공",
    ja: "ドイツ最高の経済研究機関、政策分析を提供",
    de: "Führendes deutsches Wirtschaftsforschungsinstitut mit Politikanalyse"
  },
  "德国经济部": {
    en: "Federal ministry responsible for economic affairs and energy policy",
    zh: "德国联邦经济事务和能源政策部门",
    ko: "독일 연방 경제사무 및 에너지정책 부처",
    ja: "ドイツ連邦経済事務・エネルギー政策省",
    de: "Bundesministerium für Wirtschaftsangelegenheiten und Energiepolitik"
  },
  "德国对华政策研究所(MERICS)": {
    en: "Leading European think tank on contemporary China research",
    zh: "欧洲领先的中国问题研究智库",
    ko: "유럽 최고의 중국 문제 연구 싱크탱크",
    ja: "ヨーロッパ最高の中国問題研究シンクタンク",
    de: "Führender europäischer Think Tank für zeitgenössische China-Forschung"
  },
  "German Council of Economic Experts": {
    en: "Independent advisory body providing economic policy recommendations",
    zh: "独立咨询机构，提供经济政策建议",
    ko: "독립 자문기구, 경제정책 권고 제공",
    ja: "独立諮問機関、経済政策提言を提供",
    de: "Unabhängiges Beratungsgremium für wirtschaftspolitische Empfehlungen"
  },
  "法兰克福证券交易所": {
    en: "One of the world's largest stock exchanges, European financial center",
    zh: "世界最大证券交易所之一，欧洲金融中心",
    ko: "세계 최대 증권거래소 중 하나, 유럽 금융중심지",
    ja: "世界最大の証券取引所の一つ、ヨーロッパ金融センター",
    de: "Eine der weltweit größten Börsen, europäisches Finanzzentrum"
  },
  "德国工商总会(DIHK)": {
    en: "Umbrella organization of German chambers of commerce and industry",
    zh: "德国工商会议所联合组织",
    ko: "독일 상공회의소 연합 조직",
    ja: "ドイツ商工会議所連合組織",
    de: "Dachorganisation der deutschen Industrie- und Handelskammern"
  },
  "德国汽车工业协会(VDA)": {
    en: "German automotive industry association representing major car manufacturers",
    zh: "德国汽车工业协会，代表主要汽车制造商",
    ko: "주요 자동차 제조업체를 대표하는 독일 자동차공업협회",
    ja: "主要自動車メーカーを代表するドイツ自動車工業会",
    de: "Deutscher Automobilverband, der große Autohersteller vertritt"
  },
  "德国DAX指数分析": {
    en: "Analysis and data on Germany's leading stock market index",
    zh: "德国主要股市指数分析和数据",
    ko: "독일 주요 주식시장 지수 분석 및 데이터",
    ja: "ドイツ主要株式市場指数の分析とデータ",
    de: "Analyse und Daten zu Deutschlands führendem Aktienmarktindex"
  },
  "德国企业信贷数据库": {
    en: "Corporate credit and financing data for German companies",
    zh: "德国企业信贷和融资数据",
    ko: "독일 기업 신용 및 금융 데이터",
    ja: "ドイツ企業の信用・融資データ",
    de: "Unternehmenskredit- und Finanzierungsdaten für deutsche Unternehmen"
  },
  
  // 政策专题资源描述翻译
  "工信部": {
    en: "Ministry of Industry and Information Technology, industrial policy and regulation",
    zh: "工业和信息化部，产业政策与监管",
    ko: "공업정보화부, 산업정책 및 규제",
    ja: "工業情報化部、産業政策と規制",
    de: "Ministerium für Industrie und Informationstechnologie, Industriepolitik und Regulierung"
  },
  "商务部": {
    en: "Ministry of Commerce, trade policy and foreign investment regulation",
    zh: "商务部，贸易政策与外资监管",
    ko: "상무부, 무역정책 및 외국인투자 규제",
    ja: "商務部、貿易政策と外国投資規制",
    de: "Handelsministerium, Handelspolitik und ausländische Investitionsregulierung"
  },
  "国家统计局": {
    en: "National Bureau of Statistics, official economic statistics and data",
    zh: "国家统计局，官方经济统计与数据",
    ko: "국가통계국, 공식 경제통계 및 데이터",
    ja: "国家統計局、公式経済統計とデータ",
    de: "Nationales Statistikamt, offizielle Wirtschaftsstatistiken und -daten"
  },
  "银保监会": {
    en: "Banking and insurance regulatory commission, financial supervision",
    zh: "银行保险监督管理委员会，金融监管",
    ko: "은행보험감독관리위원회, 금융감독",
    ja: "銀行保険監督管理委員会、金融監督",
    de: "Banken- und Versicherungsaufsichtskommission, Finanzaufsicht"
  },
  "证监会": {
    en: "Securities regulatory commission, capital market supervision",
    zh: "证券监督管理委员会，资本市场监管",
    ko: "증권감독관리위원회, 자본시장 감독",
    ja: "証券監督管理委員会、資本市場監督",
    de: "Wertpapieraufsichtskommission, Kapitalmarktaufsicht"
  },
  "国务院政策解读专栏": {
    en: "State Council policy interpretation and analysis platform",
    zh: "国务院政策解读和分析平台",
    ko: "국무원 정책해석 및 분석 플랫폼",
    ja: "国務院政策解釈・分析プラットフォーム",
    de: "Staatsrat-Politikinterpretations- und Analyseplattform"
  },
  "人民银行货币政策报告": {
    en: "People's Bank of China quarterly monetary policy reports",
    zh: "中国人民银行季度货币政策报告",
    ko: "중국인민은행 분기별 통화정책 보고서",
    ja: "中国人民銀行四半期金融政策報告書",
    de: "Vierteljährliche Geldpolitikberichte der Volksbank China"
  },
  "IMF政策跟踪": {
    en: "IMF policy tracking and analysis platform",
    zh: "IMF政策跟踪和分析平台",
    ko: "IMF 정책 추적 및 분석 플랫폼",
    ja: "IMF政策追跡・分析プラットフォーム",
    de: "IWF-Politikverfolgungs- und Analyseplattform"
  },
  
  // 工具专题资源描述翻译
  "Bloomberg Terminal": {
    en: "Professional financial data terminal, industry standard for traders",
    zh: "专业金融数据终端，交易员行业标准",
    ko: "전문 금융데이터 터미널, 트레이더 업계 표준",
    ja: "プロフェッショナル金融データターミナル、トレーダー業界標準",
    de: "Professionelles Finanzdatenterminal, Industriestandard für Händler"
  },
  "Python for Economics": {
    en: "Python programming tools and libraries for economic analysis",
    zh: "Python经济学编程工具和库",
    ko: "경제 분석을 위한 파이썬 프로그래밍 도구 및 라이브러리",
    ja: "経済分析のためのPythonプログラミングツールとライブラリ",
    de: "Python-Programmiertools und -bibliotheken für Wirtschaftsanalyse"
  },
  "R for Economics": {
    en: "R statistical programming language for econometric analysis",
    zh: "R语言统计编程，用于计量经济学分析",
    ko: "계량경제학 분석을 위한 R 통계 프로그래밍 언어",
    ja: "計量経済学分析のためのR統計プログラミング言語",
    de: "R statistische Programmiersprache für ökonometrische Analyse"
  },
  "Stata": {
    en: "Professional statistical software for econometric analysis",
    zh: "专业统计软件，用于计量经济学分析",
    ko: "계량경제학 분석을 위한 전문 통계 소프트웨어",
    ja: "計量経済学分析のための専門統計ソフトウェア",
    de: "Professionelle Statistiksoftware für ökonometrische Analyse"
  },
  "美国通胀计算器": {
    en: "US inflation calculator based on historical CPI data",
    zh: "基于历史CPI数据的美国通胀计算器",
    ko: "역사적 CPI 데이터 기반 미국 인플레이션 계산기",
    ja: "歴史的CPIデータに基づく米国インフレ計算機",
    de: "US-Inflationsrechner basierend auf historischen CPI-Daten"
  },
  "Our World in Data": {
    en: "Data visualization platform showing global development trends",
    zh: "数据可视化平台，展示全球发展趋势",
    ko: "글로벌 개발 동향을 보여주는 데이터 시각화 플랫폼",
    ja: "グローバル発展トレンドを示すデータ可視化プラットフォーム",
    de: "Datenvisualisierungsplattform zeigt globale Entwicklungstrends"
  },
  "Zotero": {
    en: "Free reference management software for academic research",
    zh: "免费文献管理软件，用于学术研究",
    ko: "학술 연구를 위한 무료 참고문헌 관리 소프트웨어",
    ja: "学術研究のための無料参考文献管理ソフトウェア",
    de: "Kostenlose Referenzverwaltungssoftware für akademische Forschung"
  },
  "Econlib": {
    en: "Free online library of economics books and resources",
    zh: "免费在线经济学图书和资源库",
    ko: "무료 온라인 경제학 도서 및 자료 라이브러리",
    ja: "無料オンライン経済学書籍・リソースライブラリ",
    de: "Kostenlose Online-Bibliothek für Wirtschaftsbücher und -ressourcen"
  },
  
  // 媒体专题资源描述翻译
  "界面新闻财经": {
    en: "Emerging financial media focusing on technology and new economy trends",
    zh: "新兴财经媒体，关注科技和新经济趋势",
    ko: "기술 및 신경제 동향에 중점을 둔 신흥 금융 미디어",
    ja: "テクノロジーと新経済トレンドに焦点を当てた新興金融メディア",
    de: "Aufstrebende Finanzmedien mit Fokus auf Technologie und neue Wirtschaftstrends"
  },
  "NBER Digest": {
    en: "Official digest of National Bureau of Economic Research findings",
    zh: "美国国家经济研究局官方研究摘要",
    ko: "미국 국가경제연구소 공식 연구 요약",
    ja: "米国国家経済研究所公式研究要約",
    de: "Offizielle Zusammenfassung der Forschungsergebnisse des National Bureau of Economic Research"
  },
  "Brookings Institution": {
    en: "Top-tier American think tank providing economic policy analysis",
    zh: "美国顶级智库，提供经济政策分析",
    ko: "경제정책 분석을 제공하는 미국 최고 싱크탱크",
    ja: "経済政策分析を提供する米国最高級シンクタンク",
    de: "Erstklassiger amerikanischer Think Tank für Wirtschaftspolitikanalyse"
  },
  "Peterson Institute for International Economics": {
    en: "Authoritative think tank specializing in international economic policy",
    zh: "专注国际经济政策的权威智库",
    ko: "국제경제정책 전문 권위있는 싱크탱크",
    ja: "国際経済政策専門の権威あるシンクタンク",
    de: "Maßgeblicher Think Tank spezialisiert auf internationale Wirtschaftspolitik"
  },
  
  // 市场专题资源描述翻译
  "前瞻产业研究院": {
    en: "Chinese industry research institute providing market analysis",
    zh: "中国产业研究机构，提供市场分析",
    ko: "시장 분석을 제공하는 중국 산업연구기관",
    ja: "市場分析を提供する中国産業研究機関",
    de: "Chinesisches Industrieforschungsinstitut für Marktanalyse"
  },
  "MacroMicro行业地图": {
    en: "Industry mapping platform showing macroeconomic and microeconomic trends",
    zh: "行业地图平台，展示宏观和微观经济趋势",
    ko: "거시경제 및 미시경제 동향을 보여주는 산업 지도 플랫폼",
    ja: "マクロ・ミクロ経済トレンドを示す産業マップ・プラットフォーム",
    de: "Industriekarten-Plattform zeigt makro- und mikroökonomische Trends"
  }
};

// 获取资源描述翻译
export function getResourceDescriptionTranslation(lang: Language, resourceName: string, description: string): string {
  if (resourceDescriptionTranslations[resourceName]) {
    return resourceDescriptionTranslations[resourceName][lang];
  }
  
  // 如果没有找到特定翻译，返回原描述
  return description;
}

// 标签翻译映射
export const tagTranslations: Record<Language, Record<string, string>> = {
  en: {
    // 中文标签转英文
    "央行": "Central Bank",
    "货币政策": "Monetary Policy", 
    "官方": "Official",
    "权威": "Authoritative",
    "技术": "Technology",
    "创新": "Innovation",
    "区域": "Regional",
    "可定制": "Customizable",
    "能源": "Energy",
    "政策": "Policy",
    "商业环境": "Business Climate",
    "调查": "Survey",
    "经济情绪": "Economic Sentiment",
    "金融": "Financial",
    "顶级期刊": "Top Tier",
    "经济学": "Economics",
    "高影响": "High Impact",
    "计量经济学": "Econometrics",
    "理论": "Theory",
    "欧洲": "European",
    "金融经济学": "Financial Economics",
    "公司金融": "Corporate Finance",
    "政治经济学": "Political Economy",
    "芝加哥学派": "Chicago School",
    "金融研究": "Financial Studies",
    "研究": "Research",
    "宏观经济学": "Macroeconomics",
    "营销": "Marketing",
    "消费行为": "Consumer Behavior",
    
    // 学习专题标签
    "顶级大学": "Top Universities",
    "免费课程": "Free Courses",
    "全面系统": "Comprehensive",
    "英文教学": "English Teaching",
    "公共政策": "Public Policy",
    "执行教育": "Executive Education",
    "权威师资": "Authoritative Faculty",
    "免费学习": "Free Learning",
    "基础入门": "Beginner Friendly",
    "中文字幕": "Chinese Subtitles",
    "互动练习": "Interactive Exercises",
    "专业认证": "Professional Certification",
    "系统学习": "Systematic Learning",
    "大学课程": "University Courses",
    "付费优质": "Premium Paid",
    "现代教学": "Modern Teaching",
    "经济思维": "Economic Thinking",
    "免费资源": "Free Resources",
    "创新方法": "Innovative Methods",
    "经典纪录片": "Classic Documentary",
    "经济学史": "Economic History",
    "理论对比": "Theory Comparison",
    "通俗易懂": "Easy to Understand",
    "自由市场": "Free Market",
    "哈耶克思想": "Hayek's Ideas",
    "思辨性强": "Highly Analytical",
    "马克思主义": "Marxism",
    "资本主义": "Capitalism",
    "历史视角": "Historical Perspective",
    "学术论文": "Academic Papers",
    "免费下载": "Free Download",
    "全球研究": "Global Research",
    "工作论文": "Working Papers",
    "权威研究": "Authoritative Research",
    "美国视角": "US Perspective",
    "政策评估": "Policy Evaluation",
    "实证研究": "Empirical Research",
    "预印本": "Preprint",
    "最新研究": "Latest Research",
    "免费获取": "Free Access",
    "全球论文": "Global Papers",
    
    // 市场专题标签
    "A股": "A-shares",
    "主板": "Main Board",
    "中国": "China",
    "创业板": "ChiNext",
    "中小板": "SME Board",
    "港股": "Hong Kong Stocks",
    "中概股": "Chinese Concept Stocks",
    "国际": "International",
    "美股": "US Stocks",
    "纽交所": "NYSE",
    "全球": "Global",
    "科技股": "Tech Stocks",
    "纳斯达克": "NASDAQ",
    "美国": "United States",
    "期货": "Futures",
    "期权": "Options",
    "商品": "Commodities",
    
    // 数据专题标签
    "美联储": "Federal Reserve",
    "经济数据": "Economic Data",
    "世界银行": "World Bank",
    "全球数据": "Global Data",
    "发展指标": "Development Indicators",
    "IMF": "IMF",
    "货币": "Currency",
    "OECD": "OECD",
    "发达国家": "Developed Countries",
    "统计": "Statistics",
    "实时数据": "Real-time Data",
    "指标": "Indicators",
    "预测": "Forecasts",
    "金融数据": "Financial Data",
    "专业": "Professional",
    "亚洲": "Asia",
    "欧盟": "European Union",
    "国际清算银行": "BIS",
    "金融统计": "Financial Statistics",
    "银行业": "Banking",
    "中国数据": "China Data",
    "微观数据": "Microdata",
    "需要申请": "Application Required",
    "家庭金融": "Household Finance",
    "德国数据": "Germany Data",
    "学术申请": "Academic Application",
    "面板数据": "Panel Data",
    "长期跟踪": "Longitudinal",
    "OECD数据": "OECD Data",
    "统计平台": "Statistical Platform",
    "结构化数据": "Structured Data",
    
    // 工具专题标签
    "专业终端": "Professional Terminal",
    "付费高端": "Premium Paid",
    "行业标准": "Industry Standard",
    "编程工具": "Programming Tools",
    "开源工具": "Open Source",
    "统计软件": "Statistical Software",
    "计量分析": "Econometric Analysis",
    "计量经济": "Econometrics",
    "付费专业": "Professional Paid",
    "学术标准": "Academic Standard",
    "美国通胀": "US Inflation",
    "计算工具": "Calculation Tool",
    "历史CPI": "Historical CPI",
    "实用工具": "Practical Tools",
    "文献管理": "Reference Management",
    "学术工具": "Academic Tools",
    "免费软件": "Free Software",
    "研究辅助": "Research Assistant",
    "经济思想": "Economic Thought",
    "图书资源": "Book Resources",
    "理论学习": "Theoretical Learning"
  },
  zh: {
    // 英文标签转中文（这是现有数据中的英文标签）
    "Central Bank": "央行",
    "Authoritative": "权威",
    "Technology": "技术",
    "Innovation": "创新",
    "Regional": "区域",
    "Customizable": "可定制",
    "Energy": "能源",
    "Policy": "政策",
    "Business Climate": "商业环境",
    "Survey": "调查",
    "Economic Sentiment": "经济情绪",
    "Financial": "金融",
    "Top Tier": "顶级期刊",
    "General Economics": "一般经济学",
    "High Impact": "高影响",
    "AEA": "美国经济学会",
    "Finance": "金融",
    "Econometrics": "计量经济学",
    "Theory": "理论",
    "European": "欧洲",
    "Financial Economics": "金融经济学",
    "Corporate Finance": "公司金融",
    "Political Economy": "政治经济学",
    "Chicago School": "芝加哥学派",
    "Financial Studies": "金融研究",
    "Research": "研究",
    "Macroeconomics": "宏观经济学",
    "Marketing": "营销",
    "Consumer Behavior": "消费行为"
  },
  ko: {
    // 韩语翻译
    "央行": "중앙은행",
    "货币政策": "통화정책",
    "官方": "공식",
    "权威": "권위",
    "技术": "기술",
    "创新": "혁신",
    "区域": "지역",
    "能源": "에너지",
    "政策": "정책",
    "调查": "조사",
    "金融": "금융",
    "经济学": "경제학",
    "理论": "이론",
    "研究": "연구",
    "宏观经济学": "거시경제학",
    "营销": "마케팅",
    
    // 学习专题标签
    "顶级大学": "최고 대학교",
    "免费课程": "무료 과정",
    "全面系统": "포괄적",
    "英文教学": "영어 교육",
    "公共政策": "공공정책",
    "执行教育": "임원 교육",
    "权威师资": "권위있는 교수진",
    "免费学习": "무료 학습",
    "基础入门": "초보자 친화적",
    "中文字幕": "중국어 자막",
    "互动练习": "대화형 연습",
    "专业认证": "전문 인증",
    "系统学习": "체계적 학습",
    "大学课程": "대학 과정",
    "付费优质": "프리미엄 유료",
    "现代教学": "현대 교육",
    "经济思维": "경제적 사고",
    "免费资源": "무료 자원",
    "创新方法": "혁신적 방법",
    "经典纪录片": "클래식 다큐멘터리",
    "经济学史": "경제학사",
    "理论对比": "이론 비교",
    "通俗易懂": "이해하기 쉬운",
    "自由市场": "자유시장",
    "哈耶克思想": "하이에크 사상",
    "思辨性强": "분석적",
    "马克思主义": "마르크스주의",
    "资本主义": "자본주의",
    "历史视角": "역사적 관점",
    "学术论문": "학술 논문",
    "免费下载": "무료 다운로드",
    "全球研究": "글로벌 연구",
    "工作论文": "워킹페이퍼",
    "权威研究": "권위있는 연구",
    "美国视角": "미국 관점",
    "政策评估": "정책 평가",
    "实证研究": "실증 연구",
    "预印本": "프리프린트",
    "最新研究": "최신 연구",
    "免费获取": "무료 액세스",
    "全球论文": "글로벌 논문"
  },
  ja: {
    // 日语翻译
    "央行": "中央銀行",
    "货币政策": "金融政策",
    "官方": "公式",
    "权威": "権威",
    "技术": "技術",
    "创新": "イノベーション",
    "区域": "地域",
    "能源": "エネルギー",
    "政策": "政策",
    "调查": "調査",
    "金融": "金融",
    "经济学": "経済学",
    "理论": "理論",
    "研究": "研究",
    "宏观经济学": "マクロ経済学",
    "营销": "マーケティング",
    
    // 学习专题标签
    "顶级大学": "トップ大学",
    "免费课程": "無料コース",
    "全面系统": "包括的",
    "英文教学": "英語教育",
    "公共政策": "公共政策",
    "执行教育": "エグゼクティブ教育",
    "权威师资": "権威ある教授陣",
    "免费学习": "無料学習",
    "基础入门": "初心者向け",
    "中文字幕": "中国語字幕",
    "互动练习": "インタラクティブ練習",
    "专业认证": "専門認定",
    "系统学习": "体系的学習",
    "大学课程": "大学コース",
    "付费优质": "プレミアム有料",
    "现代教学": "現代教育",
    "经济思维": "経済思考",
    "免费资源": "無料リソース",
    "创新方法": "革新的方法",
    "经典纪录片": "クラシック・ドキュメンタリー",
    "经济学史": "経済学史",
    "理论对比": "理論比較",
    "通俗易懂": "分かりやすい",
    "自由市场": "自由市場",
    "哈耶克思想": "ハイエク思想",
    "思辨性强": "分析的",
    "马克思主义": "マルクス主義",
    "资本主义": "資本主義",
    "历史视角": "歴史的視点",
    "学术论文": "学術論文",
    "免费下载": "無料ダウンロード",
    "全球研究": "グローバル研究",
    "工作论文": "ワーキングペーパー",
    "权威研究": "権威ある研究",
    "美国视角": "米国視点",
    "政策评估": "政策評価",
    "实证研究": "実証研究",
    "预印本": "プレプリント",
    "最新研究": "最新研究",
    "免费获取": "無料アクセス",
    "全球论文": "グローバル論文"
  },
  de: {
    // 德语翻译
    "央行": "Zentralbank",
    "货币政策": "Geldpolitik",
    "官方": "Offiziell",
    "权威": "Autoritativ",
    "技术": "Technologie",
    "创新": "Innovation",
    "区域": "Regional",
    "能源": "Energie",
    "政策": "Politik",
    "调查": "Umfrage",
    "金融": "Finanzwesen",
    "经济学": "Wirtschaftswissenschaften",
    "理论": "Theorie",
    "研究": "Forschung",
    "宏观经济学": "Makroökonomie",
    "营销": "Marketing",
    
    // 学习专题标签
    "顶级大学": "Top-Universitäten",
    "免费课程": "Kostenlose Kurse",
    "全面系统": "Umfassend",
    "英文教学": "Englischunterricht",
    "公共政策": "Öffentliche Politik",
    "执行教育": "Executive Education",
    "权威师资": "Autoritative Fakultät",
    "免费学习": "Kostenloses Lernen",
    "基础入门": "Anfängerfreundlich",
    "中文字幕": "Chinesische Untertitel",
    "互动练习": "Interaktive Übungen",
    "专业认证": "Professionelle Zertifizierung",
    "系统学习": "Systematisches Lernen",
    "大学课程": "Universitätskurse",
    "付费优质": "Premium bezahlt",
    "现代教学": "Moderne Lehre",
    "经济思维": "Wirtschaftsdenken",
    "免费资源": "Kostenlose Ressourcen",
    "创新方法": "Innovative Methoden",
    "经典纪录片": "Klassische Dokumentation",
    "经济学史": "Wirtschaftsgeschichte",
    "理论对比": "Theorienvergleich",
    "通俗易懂": "Leicht verständlich",
    "自由市场": "Freier Markt",
    "哈耶克思想": "Hayek-Gedanken",
    "思辨性强": "Analytisch",
    "马克思主义": "Marxismus",
    "资本主义": "Kapitalismus",
    "历史视角": "Historische Perspektive",
    "学术论文": "Akademische Arbeiten",
    "免费下载": "Kostenloser Download",
    "全球研究": "Globale Forschung",
    "工作论文": "Arbeitspapiere",
    "权威研究": "Autoritative Forschung",
    "美国视角": "US-Perspektive",
    "政策评估": "Politikbewertung",
    "实证研究": "Empirische Forschung",
    "预印本": "Preprint",
    "最新研究": "Neueste Forschung",
    "免费获取": "Kostenloser Zugang",
    "全球论文": "Globale Papers"
  }
};

// 获取标签翻译
export function getTagTranslation(lang: Language, tag: string): string {
  if (tagTranslations[lang] && tagTranslations[lang][tag]) {
    return tagTranslations[lang][tag];
  }
  return tag;
} 