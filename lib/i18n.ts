export type Language = 'en' | 'zh' | 'ko' | 'ja' | 'de';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export const translations = {
  en: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: 'Home',
    nav_functional: 'By Function',
    nav_resources: 'By Type',
    nav_news: 'News',
    nav_german: 'German Focus',
    nav_faq: 'FAQ',
    
    // Hero Section
    hero_title: 'Your Gateway to',
    hero_title_highlight: 'Economics',
    hero_subtitle: 'Discover the most comprehensive collection of economics resources. From data analysis to academic research, find everything you need to stay ahead in the world of economics.',
    btn_find_data: 'Find Data',
    btn_learn: 'Learn',
    search_placeholder: 'Search economics resources...',
    popular_tags: 'Popular Tags:',
    
    // Navigation Toggle
    toggle_functional: 'By Function',
    toggle_resource: 'By Type',
    
    // Functional Navigation
    functional_title: 'Functional Navigation',
    functional_subtitle: 'Find resources based on your specific needs',
    
    // Categories
    find_data: 'Find Data',
    find_data_desc: 'Access macro data, micro surveys, and economic indicators',
    read_policy: 'Read Policy',
    read_policy_desc: 'Get latest policy papers, central bank reports and analysis',
    do_research: 'Do Research',
    do_research_desc: 'Academic papers, research tools and think tank resources',
    watch_market: 'Watch Market',
    watch_market_desc: 'Industry analysis, investment tools and company data',
    
    // Resource Types
    resource_title: 'Resource Categories',
    resource_subtitle: 'Browse by resource type for systematic learning',
    authorities: 'Authorities',
    authorities_desc: 'Official reports from international organizations and government agencies',
    academic: 'Academic Papers',
    academic_desc: 'Economics journals and academic resource platforms',
    data_stats: 'Data & Statistics',
    data_stats_desc: 'Economic databases and statistical platforms',
    learning: 'Online Learning',
    learning_desc: 'Economics online courses and learning resources',
    tools: 'Practical Tools',
    tools_desc: 'Economic analysis tools and reference resources',
    
    // German Special
    german_title: 'German Economics Focus',
    german_subtitle: 'Specialized resources and institutions for German economics',
    core_institutions: 'Core Institutions',
    special_resources: 'Special Resources',
    
    // Common
    view_all: 'View All',
    resources: 'Resources',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Get answers to common questions about our EconNavigator platform',
    
    // Footer
    footer_description: 'Your comprehensive guide to economics resources. Discover the best data sources, research papers, and tools to advance your understanding of economics.',
    quick_links: 'Quick Links',
    main_categories: 'Categories',
    
    // FAQ Questions
    faq_q1: 'What makes this EconNavigator site different?',
    faq_a1: 'We integrate both functional and resource-type navigation methods, suitable for both professional researchers to quickly locate tools and beginners to learn systematically. We especially highlight German economic resources, reflecting professional characteristics.',
    faq_q2: 'How to use the tag filtering function?',
    faq_a2: 'Each resource has detailed tags (such as free/paid, region, language, etc.). You can click on tags or use the search function to quickly filter resources that meet your needs.',
    faq_q3: 'Where should beginners start?',
    faq_a3: 'We recommend beginners start with "Online Learning" resources, then gradually access "Data & Statistics" and "Authorities" reports, and finally delve into "Academic Papers" and professional tools.',
    
    // Switch view messages
    switch_to_functional_view: 'Switch to "By Function" view to interact with this section',
    switch_to_resource_view: 'Switch to "By Type" view to interact with this section',
    
    // News Section
    news_title: 'Economic News Overview',
    news_subtitle: 'Get the latest economic news, expert opinions and trend analysis to stay informed about global economic dynamics',
    view_news: 'View News',
    
    // Features Section
    features_title: 'Why Choose EconWeb?',
    features_subtitle: 'Built specifically for economics professionals, researchers, and students who demand the best resources.',
    feature_smart_title: 'Smart Discovery',
    feature_smart_desc: 'Advanced search and filtering to help you find exactly what you need from thousands of economics resources.',
    feature_updates_title: 'Real-time Updates',
    feature_updates_desc: 'Stay current with the latest economic data, research, and policy developments as they happen.',
    feature_global_title: 'Global Coverage',
    feature_global_desc: 'Access resources from leading institutions worldwide, with special focus on German economics.',
    feature_database_title: 'Comprehensive Database',
    feature_database_desc: 'Curated collection of high-quality resources across all major economics disciplines and specializations.',
    
    // Buttons
    btn_start_exploring: 'Start Exploring',
    btn_view_resources: 'View Resources',
    btn_get_started: 'Get Started',
    btn_show_less: 'Show Less'
  },
  
  zh: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: '首页',
    nav_functional: '功能导航',
    nav_resources: '资源分类',
    nav_news: '经济资讯',
    nav_german: '德国专题',
    nav_faq: '常见问题',
    
    // Hero Section
    hero_title: '经济学资源',
    hero_title_highlight: '导航站',
    hero_subtitle: '发现最全面的经济学资源集合。从数据分析到学术研究，找到您在经济学世界中所需的一切资源。',
    btn_find_data: '我要找数据',
    btn_learn: '我要学习',
    search_placeholder: '搜索经济学资源...',
    popular_tags: '热门标签：',
    
    // Navigation Toggle
    toggle_functional: '功能导向',
    toggle_resource: '资源分类',
    
    // Functional Navigation
    functional_title: '功能导向导航',
    functional_subtitle: '按照您的具体需求快速找到相关资源',
    
    // Categories
    find_data: '找数据',
    find_data_desc: '获取宏观经济数据、微观调查数据和景气指数',
    read_policy: '读政策',
    read_policy_desc: '获取最新政策文件、央行报告和政策解读',
    do_research: '做研究',
    do_research_desc: '学术论文、研究工具和智库资源',
    watch_market: '看市场',
    watch_market_desc: '行业分析、投资工具和公司数据',
    
    // Resource Types
    resource_title: '资源分类导航',
    resource_subtitle: '按照资源类型浏览，适合系统性学习',
    authorities: '权威机构',
    authorities_desc: '国际组织和政府机构的官方报告',
    academic: '学术论文',
    academic_desc: '经济学论文库和学术资源平台',
    data_stats: '数据统计',
    data_stats_desc: '经济数据库和统计平台',
    learning: '在线学习',
    learning_desc: '经济学在线课程和学习资源',
    tools: '实用工具',
    tools_desc: '经济分析工具和参考资源',
    
    // German Special
    german_title: '德国经济专题',
    german_subtitle: '德国经济相关的专业资源和机构',
    core_institutions: '核心机构',
    special_resources: '特色资源',
    
    // Common
    view_all: '查看全部',
    resources: '个资源',
    
    // FAQ
    faq_title: '常见问题',
    faq_subtitle: '关于EconNavigator平台的常见问题解答',
    
    // Footer
    footer_description: '您的经济学资源综合指南。发现最好的数据源、研究论文和工具，提升您对经济学的理解。',
    quick_links: '快速链接',
    main_categories: '主要分类',
    
    // FAQ Questions
    faq_q1: '这个导航站有什么特色？',
    faq_a1: '我们整合了功能导向和资源类型两种导航方式，既适合专业研究人员快速定位工具，也适合初学者系统学习。特别突出了德国经济资源，体现专业特色。',
    faq_q2: '如何使用标签筛选功能？',
    faq_a2: '每个资源都有详细标签（如免费/付费、地区、语言等），您可以点击标签或使用搜索功能快速筛选符合需求的资源。',
    faq_q3: '新手应该从哪里开始？',
    faq_a3: '建议新手从"在线学习"资源开始，然后逐步接触"数据统计"和"权威机构"报告，最后深入"学术论文"和专业工具。',
    
    // Switch view messages
    switch_to_functional_view: '切换到"功能导向"视图以与此部分交互',
    switch_to_resource_view: '切换到"资源分类"视图以与此部分交互',
    
    // News Section
    news_title: '经济资讯一览',
    news_subtitle: '获取最新经济新闻、专家观点和趋势分析，掌握全球经济动态',
    view_news: '看资讯',
    
    // Features Section
    features_title: '为什么选择 EconWeb？',
    features_subtitle: '专为经济学专业人士、研究人员和学生打造，提供最优质的资源。',
    feature_smart_title: '智能发现',
    feature_smart_desc: '先进的搜索和筛选功能，帮助您从数千个经济学资源中找到所需内容。',
    feature_updates_title: '实时更新',
    feature_updates_desc: '及时获取最新的经济数据、研究和政策发展动态。',
    feature_global_title: '全球覆盖',
    feature_global_desc: '访问全球领先机构的资源，特别关注德国经济学。',
    feature_database_title: '综合数据库',
    feature_database_desc: '涵盖所有主要经济学学科和专业领域的精选高质量资源集合。',
    
    // Buttons
    btn_start_exploring: '开始探索',
    btn_view_resources: '查看资源',
    btn_get_started: '立即开始',
    btn_show_less: '收起'
  },
  
  ko: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: '홈',
    nav_functional: '기능별',
    nav_resources: '유형별',
    nav_news: '경제 뉴스',
    nav_german: '독일 특집',
    nav_faq: 'FAQ',
    
    // Hero Section
    hero_title: '경제학 리소스',
    hero_title_highlight: '내비게이션',
    hero_subtitle: '가장 포괄적인 경제학 리소스 컬렉션을 발견하세요. 데이터 분석부터 학술 연구까지, 경제학 세계에서 앞서 나가기 위해 필요한 모든 것을 찾아보세요.',
    btn_find_data: '데이터 찾기',
    btn_learn: '학습하기',
    search_placeholder: '경제학 리소스 검색...',
    popular_tags: '인기 태그:',
    
    // Navigation Toggle
    toggle_functional: '기능별',
    toggle_resource: '유형별',
    
    // Functional Navigation
    functional_title: '기능별 내비게이션',
    functional_subtitle: '특정 요구사항에 따라 리소스 찾기',
    
    // Categories
    find_data: '데이터 찾기',
    find_data_desc: '거시 데이터, 미시 조사, 경제 지표 접근',
    read_policy: '정책 읽기',
    read_policy_desc: '최신 정책 문서, 중앙은행 보고서 및 분석 획득',
    do_research: '연구하기',
    do_research_desc: '학술 논문, 연구 도구 및 싱크탱크 리소스',
    watch_market: '시장 보기',
    watch_market_desc: '산업 분석, 투자 도구 및 기업 데이터',
    
    // Resource Types
    resource_title: '리소스 카테고리',
    resource_subtitle: '체계적인 학습을 위한 리소스 유형별 탐색',
    authorities: '권위 기관',
    authorities_desc: '국제기구 및 정부기관의 공식 보고서',
    academic: '학술 논문',
    academic_desc: '경제학 저널 및 학술 리소스 플랫폼',
    data_stats: '데이터 & 통계',
    data_stats_desc: '경제 데이터베이스 및 통계 플랫폼',
    learning: '온라인 학습',
    learning_desc: '경제학 온라인 코스 및 학습 리소스',
    tools: '실용 도구',
    tools_desc: '경제 분석 도구 및 참고 리소스',
    
    // German Special
    german_title: '독일 경제 특집',
    german_subtitle: '독일 경제 관련 전문 리소스 및 기관',
    core_institutions: '핵심 기관',
    special_resources: '특별 리소스',
    
    // Common
    view_all: '모두 보기',
    resources: '리소스',
    
    // FAQ
    faq_title: '자주 묻는 질문',
    faq_subtitle: 'EconNavigator 플랫폼에 대한 일반적인 질문에 대한 답변',
    
    // Footer
    footer_description: '경제학 리소스에 대한 종합 가이드입니다. 최고의 데이터 소스, 연구 논문 및 도구를 발견하여 경제학 이해를 향상시키세요.',
    quick_links: '빠른 링크',
    main_categories: '카테고리',
    
    // FAQ Questions
    faq_q1: '이 경제학 내비게이션 사이트의 차별점은 무엇인가요?',
    faq_a1: '기능별 및 리소스 유형별 내비게이션 방법을 통합하여 전문 연구자들이 도구를 빠르게 찾고 초보자들이 체계적으로 학습할 수 있도록 합니다. 특히 독일 경제 리소스를 강조하여 전문성을 반영합니다.',
    faq_q2: '태그 필터링 기능을 어떻게 사용하나요?',
    faq_a2: '각 리소스에는 상세한 태그(무료/유료, 지역, 언어 등)가 있습니다. 태그를 클릭하거나 검색 기능을 사용하여 요구사항에 맞는 리소스를 빠르게 필터링할 수 있습니다.',
    faq_q3: '초보자는 어디서부터 시작해야 하나요?',
    faq_a3: '초보자는 "온라인 학습" 리소스부터 시작하여 점차 "데이터 & 통계" 및 "권위 기관" 보고서에 접근하고, 마지막으로 "학술 논문" 및 전문 도구를 깊이 파는 것을 권장합니다.',
    
    // Switch view messages
    switch_to_functional_view: '"기능별" 보기로 전환하여 이 섹션과 상호작용하세요',
    switch_to_resource_view: '"유형별" 보기로 전환하여 이 섹션과 상호작용하세요',
    
    // News Section
    news_title: '경제 뉴스 개요',
    news_subtitle: '최신 경제 뉴스, 전문가 의견 및 트렌드 분석을 통해 글로벌 경제 동향을 파악하세요',
    view_news: '뉴스 보기',
    
    // Features Section
    features_title: '왜 EconWeb를 선택해야 할까요?',
    features_subtitle: '최고의 리소스를 요구하는 경제학 전문가, 연구자, 학생을 위해 특별히 제작되었습니다.',
    feature_smart_title: '스마트 발견',
    feature_smart_desc: '수천 개의 경제학 리소스에서 필요한 것을 정확히 찾을 수 있도록 도와주는 고급 검색 및 필터링 기능.',
    feature_updates_title: '실시간 업데이트',
    feature_updates_desc: '최신 경제 데이터, 연구 및 정책 개발 동향을 실시간으로 파악하세요.',
    feature_global_title: '글로벌 커버리지',
    feature_global_desc: '독일 경제학에 특별히 중점을 둔 전 세계 주요 기관의 리소스에 액세스하세요.',
    feature_database_title: '종합 데이터베이스',
    feature_database_desc: '모든 주요 경제학 분야와 전문 영역에 걸친 고품질 리소스의 엄선된 컬렉션.',
    
    // Buttons
    btn_start_exploring: '탐색 시작',
    btn_view_resources: '리소스 보기',
    btn_get_started: '시작하기',
    btn_show_less: '접기'
  },
  
  ja: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: 'ホーム',
    nav_functional: '機能別',
    nav_resources: 'タイプ別',
    nav_news: '経済ニュース',
    nav_german: 'ドイツ特集',
    nav_faq: 'FAQ',
    
    // Hero Section
    hero_title: '経済学リソース',
    hero_title_highlight: 'ナビゲーション',
    hero_subtitle: '最も包括的な経済学リソースコレクションを発見してください。データ分析から学術研究まで、経済学の世界で先を行くために必要なすべてを見つけてください。',
    btn_find_data: 'データを探す',
    btn_learn: '学習する',
    search_placeholder: '経済学リソースを検索...',
    popular_tags: '人気のタグ：',
    
    // Navigation Toggle
    toggle_functional: '機能別',
    toggle_resource: 'タイプ別',
    
    // Functional Navigation
    functional_title: '機能別ナビゲーション',
    functional_subtitle: '特定のニーズに基づいてリソースを見つける',
    
    // Categories
    find_data: 'データ検索',
    find_data_desc: 'マクロデータ、ミクロ調査、経済指標へのアクセス',
    read_policy: '政策を読む',
    read_policy_desc: '最新の政策文書、中央銀行レポート、分析の取得',
    do_research: '研究する',
    do_research_desc: '学術論文、研究ツール、シンクタンクリソース',
    watch_market: '市場を見る',
    watch_market_desc: '業界分析、投資ツール、企業データ',
    
    // Resource Types
    resource_title: 'リソースカテゴリ',
    resource_subtitle: '体系的な学習のためのリソースタイプ別の閲覧',
    authorities: '権威機関',
    authorities_desc: '国際機関および政府機関からの公式レポート',
    academic: '学術論文',
    academic_desc: '経済学ジャーナルおよび学術リソースプラットフォーム',
    data_stats: 'データ＆統計',
    data_stats_desc: '経済データベースおよび統計プラットフォーム',
    learning: 'オンライン学習',
    learning_desc: '経済学オンラインコースおよび学習リソース',
    tools: '実用ツール',
    tools_desc: '経済分析ツールおよび参考リソース',
    
    // German Special
    german_title: 'ドイツ経済特集',
    german_subtitle: 'ドイツ経済関連の専門リソースと機関',
    core_institutions: '中核機関',
    special_resources: '特別リソース',
    
    // Common
    view_all: 'すべて表示',
    resources: 'リソース',
    
    // FAQ
    faq_title: 'よくある質問',
    faq_subtitle: 'EconNavigatorプラットフォームに関する一般的な質問への回答',
    
    // Footer
    footer_description: '経済学リソースの包括的なガイドです。最高のデータソース、研究論文、ツールを発見して、経済学の理解を向上させてください。',
    quick_links: 'クイックリンク',
    main_categories: 'カテゴリ',
    
    // FAQ Questions
    faq_q1: 'この経済学ナビゲーションサイトの違いは何ですか？',
    faq_a1: '機能別とリソースタイプ別のナビゲーション方法を統合し、専門研究者がツールを迅速に見つけ、初心者が体系的に学習できるようにします。特にドイツの経済リソースを強調し、専門性を反映します。',
    faq_q2: 'タグフィルタリング機能の使い方は？',
    faq_a2: '各リソースには詳細なタグ（無料/有料、地域、言語など）があります。タグをクリックするか検索機能を使用して、ニーズに合うリソースを迅速にフィルタリングできます。',
    faq_q3: '初心者はどこから始めるべきですか？',
    faq_a3: '初心者は「オンライン学習」リソースから始めて、徐々に「データ＆統計」および「権威機関」レポートにアクセスし、最後に「学術論文」および専門ツールを深く掘り下げることをお勧めします。',
    
    // Switch view messages
    switch_to_functional_view: '「機能別」ビューに切り替えて、このセクションとやり取りしてください',
    switch_to_resource_view: '「タイプ別」ビューに切り替えて、このセクションとやり取りしてください',
    
    // News Section
    news_title: '経済ニュース概要',
    news_subtitle: '最新の経済ニュース、専門家の意見、トレンド分析を取得して、グローバル経済の動向を把握してください',
    view_news: 'ニュースを見る',
    
    // Features Section
    features_title: 'なぜEconWebを選ぶのか？',
    features_subtitle: '最高のリソースを求める経済学の専門家、研究者、学生のために特別に構築されました。',
    feature_smart_title: 'スマート発見',
    feature_smart_desc: '数千の経済学リソースから必要なものを正確に見つけるための高度な検索とフィルタリング機能。',
    feature_updates_title: 'リアルタイム更新',
    feature_updates_desc: '最新の経済データ、研究、政策開発の動向をリアルタイムで把握してください。',
    feature_global_title: 'グローバルカバレッジ',
    feature_global_desc: 'ドイツ経済学に特に焦点を当てた、世界の主要機関からのリソースにアクセスしてください。',
    feature_database_title: '包括的データベース',
    feature_database_desc: 'すべての主要な経済学分野と専門領域にわたる高品質リソースの厳選されたコレクション。',
    
    // Buttons
    btn_start_exploring: '探索を開始',
    btn_view_resources: 'リソースを表示',
    btn_get_started: '始める',
    btn_show_less: '折りたたむ'
  },

  de: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: 'Startseite',
    nav_functional: 'Nach Funktion',
    nav_resources: 'Nach Typ',
    nav_news: 'Wirtschaftsnews',
    nav_german: 'Deutschland-Fokus',
    nav_faq: 'FAQ',
    
    // Hero Section
    hero_title: 'Ihr Tor zu',
    hero_title_highlight: 'Wirtschaftsexzellenz',
    hero_subtitle: 'Entdecken Sie die umfassendste Sammlung von Wirtschaftsressourcen. Von Datenanalyse bis zur akademischen Forschung - finden Sie alles, was Sie brauchen, um in der Welt der Wirtschaft voranzukommen.',
    btn_find_data: 'Daten finden',
    btn_learn: 'Lernen',
    search_placeholder: 'Wirtschaftsressourcen suchen...',
    popular_tags: 'Beliebte Tags:',
    
    // Navigation Toggle
    toggle_functional: 'Nach Funktion',
    toggle_resource: 'Nach Typ',
    
    // Functional Navigation
    functional_title: 'Funktionale Navigation',
    functional_subtitle: 'Finden Sie Ressourcen basierend auf Ihren spezifischen Bedürfnissen',
    
    // Categories
    find_data: 'Daten finden',
    find_data_desc: 'Zugang zu Makrodaten, Mikroumfragen und Wirtschaftsindikatoren',
    read_policy: 'Politik lesen',
    read_policy_desc: 'Neueste Politikpapiere, Zentralbankberichte und Analysen erhalten',
    do_research: 'Forschen',
    do_research_desc: 'Akademische Arbeiten, Forschungstools und Think-Tank-Ressourcen',
    watch_market: 'Markt beobachten',
    watch_market_desc: 'Branchenanalysen, Investitionstools und Unternehmensdaten',
    
    // Resource Types
    resource_title: 'Ressourcenkategorien',
    resource_subtitle: 'Durchsuchen nach Ressourcentyp für systematisches Lernen',
    authorities: 'Behörden',
    authorities_desc: 'Offizielle Berichte von internationalen Organisationen und Regierungsbehörden',
    academic: 'Akademische Arbeiten',
    academic_desc: 'Wirtschaftsjournale und akademische Ressourcenplattformen',
    data_stats: 'Daten & Statistiken',
    data_stats_desc: 'Wirtschaftsdatenbanken und Statistikplattformen',
    learning: 'Online-Lernen',
    learning_desc: 'Wirtschafts-Online-Kurse und Lernressourcen',
    tools: 'Praktische Tools',
    tools_desc: 'Wirtschaftsanalyse-Tools und Referenzressourcen',
    
    // German Special
    german_title: 'Deutschland Wirtschaftsfokus',
    german_subtitle: 'Spezialisierte Ressourcen und Institutionen für die deutsche Wirtschaft',
    core_institutions: 'Kerninstitutionen',
    special_resources: 'Spezielle Ressourcen',
    
    // Common
    view_all: 'Alle anzeigen',
    resources: 'Ressourcen',
    
    // FAQ
    faq_title: 'Häufig gestellte Fragen',
    faq_subtitle: 'Antworten auf häufige Fragen zu unserer EconNavigator-Plattform',
    
    // Footer
    footer_description: 'Ihr umfassender Leitfaden für Wirtschaftsressourcen. Entdecken Sie die besten Datenquellen, Forschungsarbeiten und Tools, um Ihr Verständnis der Wirtschaft zu verbessern.',
    quick_links: 'Schnelllinks',
    main_categories: 'Kategorien',
    
    // FAQ Questions
    faq_q1: 'Was macht diese Wirtschaftsnavigationsseite anders?',
    faq_a1: 'Wir integrieren sowohl funktionale als auch ressourcentyp-basierte Navigationsmethoden, geeignet für professionelle Forscher, um Tools schnell zu finden, und für Anfänger, um systematisch zu lernen. Wir heben besonders deutsche Wirtschaftsressourcen hervor und spiegeln professionelle Eigenschaften wider.',
    faq_q2: 'Wie verwende ich die Tag-Filterfunktion?',
    faq_a2: 'Jede Ressource hat detaillierte Tags (wie kostenlos/kostenpflichtig, Region, Sprache usw.). Sie können auf Tags klicken oder die Suchfunktion verwenden, um Ressourcen, die Ihren Bedürfnissen entsprechen, schnell zu filtern.',
    faq_q3: 'Wo sollten Anfänger beginnen?',
    faq_a3: 'Wir empfehlen Anfängern, mit "Online-Lernen"-Ressourcen zu beginnen, dann schrittweise auf "Daten & Statistiken" und "Behörden"-Berichte zuzugreifen und schließlich in "Akademische Arbeiten" und professionelle Tools einzutauchen.',
    
    // Switch view messages
    switch_to_functional_view: 'Wechseln Sie zur "Nach Funktion"-Ansicht, um mit diesem Abschnitt zu interagieren',
    switch_to_resource_view: 'Wechseln Sie zur "Nach Typ"-Ansicht, um mit diesem Abschnitt zu interagieren',
    
    // News Section
    news_title: 'Wirtschaftsnews Überblick',
    news_subtitle: 'Erhalten Sie die neuesten Wirtschaftsnachrichten, Expertenmeinungen und Trendanalysen, um über globale Wirtschaftsdynamiken informiert zu bleiben',
    view_news: 'News anzeigen',
    
    // Features Section
    features_title: 'Warum EconWeb wählen?',
    features_subtitle: 'Speziell für Wirtschaftsexperten, Forscher und Studenten entwickelt, die die besten Ressourcen benötigen.',
    feature_smart_title: 'Intelligente Entdeckung',
    feature_smart_desc: 'Erweiterte Such- und Filterfunktionen helfen Ihnen, genau das zu finden, was Sie aus Tausenden von Wirtschaftsressourcen benötigen.',
    feature_updates_title: 'Echtzeit-Updates',
    feature_updates_desc: 'Bleiben Sie mit den neuesten Wirtschaftsdaten, Forschungen und Politikentwicklungen auf dem Laufenden.',
    feature_global_title: 'Globale Abdeckung',
    feature_global_desc: 'Zugang zu Ressourcen führender Institutionen weltweit, mit besonderem Fokus auf deutsche Wirtschaft.',
    feature_database_title: 'Umfassende Datenbank',
    feature_database_desc: 'Kuratierte Sammlung hochwertiger Ressourcen aus allen wichtigen Wirtschaftsdisziplinen und Spezialisierungen.',
    
    // Buttons
    btn_start_exploring: 'Entdeckung beginnen',
    btn_view_resources: 'Ressourcen anzeigen',
    btn_get_started: 'Loslegen',
    btn_show_less: 'Weniger anzeigen'
  }
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
} 