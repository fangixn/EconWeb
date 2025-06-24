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

    nav_german: 'German Focus',
    media_nav: 'Media Focus',
    
    // Hero Section
    hero_title: 'Your Gateway to',
    hero_title_highlight: 'Economics',
    hero_subtitle: 'Discover the most comprehensive collection of economics resources. From data analysis to academic research, find everything you need to stay ahead in the world of economics.',
    btn_find_data: 'Find Data',
    btn_learn: 'Learn',
    search_placeholder: 'Search economics resources...',
    popular_tags: 'Popular Tags:',
    search_btn: 'Search',
    clear_filters: 'Clear all',
    searching_for: 'Searching for',
    filtered_by: 'Filtered by',
    
    
    
    // Categories
    find_data: 'Find Data',
    find_data_desc: 'Access macro data, micro surveys, and economic indicators',
    read_policy: 'Read Policy',
    read_policy_desc: 'Get latest policy papers, central bank reports and analysis',
    do_research: 'Do Research',
    do_research_desc: 'Academic papers, research tools and think tank resources',
    watch_market: 'Watch Market',
    watch_market_desc: 'Industry analysis, investment tools and company data',
    

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
    

    
    // Footer
    footer_description: 'Your comprehensive guide to economics resources. Discover the best data sources, research papers, and tools to advance your understanding of economics.',
    quick_links: 'Quick Links',
  quick_actions: 'Quick Actions',
  back_to_top: 'Back to Top',
  go_to_footer: 'Go to Footer',
    specialties: 'Specialties',
    

    
    // Switch view messages

    
    // News Section
    news_title: 'Economic News Overview',
    news_subtitle: 'Get the latest economic news, expert opinions and trend analysis to stay informed about global economic dynamics',

    
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
    btn_show_less: 'Show Less',
    
    // Additional UI text
    visit_resource: 'Visit Resource',
    german_focus: 'German Focus',
    
    // Navigation menu items
    menu_features: 'Features',
    menu_resources: 'Resources',
    nav_features: 'Features',
    nav_learning: 'Learning Focus',
    nav_media: 'Media Focus',
    nav_policy: 'Policy Focus',
    nav_data: 'Data Focus',
    nav_market: 'Market Focus',
    nav_tools: 'Tools Focus',
    nav_top_journals: 'Top Journals',

    top_journals_nav: 'Top Journals',
    german_nav: 'German Focus',
    
    // Footer links
    footer_home: 'Home',
    footer_features: 'Features', 
    footer_resources: 'Resources',
    footer_learning: 'Learning Focus',
    footer_media: 'Media Focus',
    footer_policy: 'Policy Focus',
    footer_data: 'Data Focus',
    footer_market: 'Market Focus',
    footer_tools: 'Tools Focus',
    footer_german: 'German Focus',
    footer_data_sources: 'Data Sources',
    footer_research_papers: 'Research Papers',
    footer_policy_reports: 'Policy Reports',
    footer_learning_resources: 'Learning Resources',
    footer_media_resources: 'Media Resources',
    footer_market_analysis: 'Market Analysis',
    footer_german_economics: 'German Economics',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_top_journals: 'Top Journals',
    footer_copyright: '© 2025 EconWeb. All rights reserved. Created by fangxin.',
    
    // Resource count text
    resources_count: 'resources',
    
    // Category Titles
    category_organizations: 'Organizations & Institutions',
    category_organizations_desc: 'International organizations, government agencies, central banks and regulatory departments',
    category_data_sources: 'Data Sources',
    category_data_sources_desc: 'Macroeconomic databases, microeconomic surveys, and statistical resources',
    category_policy_analysis: 'Policy Analysis',
    category_policy_analysis_desc: 'Policy interpretation, regulatory documents and government reports',
    category_academic_research: 'Academic Research',
    category_academic_research_desc: 'Academic papers, research platforms and scholarly resources',
    category_market_observation: 'Market Analysis',
    category_market_observation_desc: 'Industry analysis, investment tools and company data',
    category_financial_news: 'Financial News',
    category_financial_news_desc: 'Financial news, market information and economic commentary',
    category_think_tanks: 'Think Tank Insights',
    category_think_tanks_desc: 'Academic viewpoints and think tank media',
    category_learning_resources: 'Online Learning',
    category_learning_resources_desc: 'Economics courses and learning resources',
    category_practical_tools: 'Practical Tools',
    category_practical_tools_desc: 'Analysis tools and reference resources',

    // Top Journals Section
    top_journals_focus: 'Top Journals',
    top_journals_title: 'Premier Academic Journals',
    top_journals_subtitle: 'The most authoritative academic publishing platforms in economics, featuring cutting-edge research from leading scholars worldwide',

    // Search Examples Section
    search_examples_title: 'Search Examples',
    search_tips_title: 'Search Tips',
    
    // Search Examples
    example_free_data: 'Free Data',
    example_free_data_desc: 'Find free data resources',
    example_china_policy: 'China Policy', 
    example_china_policy_desc: 'China-related policy documents',
    example_top_journals: 'Top Journals',
    example_top_journals_desc: 'Leading economics journals',
    example_online_learning: 'Online Learning',
    example_online_learning_desc: 'Courses and learning resources',
    
    // Search Tips - New Smart Search
    search_smart_search: '🔍 Smart Search:',
    search_smart_search_desc: 'Supports fuzzy matching, e.g. "data", "journal", "learning"',
    search_journal_abbrev: '📚 Journal Abbreviations:',
    search_journal_abbrev_desc: '"AER", "QJE", "JPE" automatically recognized',
    search_region_search: '🌍 Regional Search:',
    search_region_search_desc: '"China", "Germany" auto-expand related resources',
    search_concept_search: '📊 Concept Search:',
    search_concept_search_desc: '"macro", "monetary", "policy" semantic matching',
    
    // Quick Tags
    quick_tags_title: 'Quick Filter:',
    
    
    
    

    
    // Quick Tips
    quick_tips_title: 'Quick Tips',
    quick_tip_search: 'Use search bar to quickly find specific resources',
    quick_tip_filter: 'Click tags for quick filtering',
    quick_tip_bookmark: 'Bookmark frequently used resources for easy access'
  },
  
  zh: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: '首页',


    nav_german: '德国专题',
    
    // Hero Section
    hero_title: '经济学资源',
    hero_title_highlight: '导航站',
    hero_subtitle: '发现最全面的经济学资源集合。从数据分析到学术研究，找到您在经济学世界中所需的一切资源。',
    btn_find_data: '我要找数据',
    btn_learn: '我要学习',
    search_placeholder: '搜索经济学资源...',
    popular_tags: '热门标签：',
    search_btn: '搜索',
    clear_filters: '清除所有',
    searching_for: '搜索',
    filtered_by: '筛选',
    
    // Navigation Toggle
    toggle_functional: '功能导向',
    
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
    

    
    // Footer
    footer_description: '您的经济学资源综合指南。发现最好的数据源、研究论文和工具，提升您对经济学的理解。',
    quick_links: '快速链接',
  quick_actions: '快速操作',
  back_to_top: '回到顶部',
  go_to_footer: '跳到页脚',
    specialties: '专题导航',
    

    
    // Switch view messages
    switch_to_functional_view: '切换到"功能导向"视图以与此部分交互',
    
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
    btn_show_less: '收起',
    
    // Additional UI text
    visit_resource: '访问资源',
    german_focus: '德国专题',
    
    // Navigation menu items
    menu_features: '功能特色',
    menu_resources: '资源',
    nav_features: '功能导航',
    nav_learning: '学习专题',
    nav_media: '媒体专题',
    nav_policy: '政策专题',
    nav_data: '数据专题',
    nav_market: '市场专题',
    nav_tools: '工具专题',
    nav_top_journals: '顶刊专题',
    nav_guide: '使用指导',
    top_journals_nav: '顶刊专题',
    german_nav: '德国专题',
    learning_nav: '学习专题',
    
    // Footer links
    footer_home: '首页',
    footer_features: '功能特色', 
    footer_resources: '资源',
    footer_learning: '学习专题',
    footer_media: '媒体专题',
    footer_policy: '政策专题',
    footer_data: '数据专题',
    footer_market: '市场专题',
    footer_tools: '工具专题',
    footer_german: '德国专题',
    footer_data_sources: '数据源',
    footer_research_papers: '研究论文',
    footer_policy_reports: '政策报告',
    footer_learning_resources: '学习资源',
    footer_media_resources: '媒体资讯',
    footer_market_analysis: '市场专题',
    footer_german_economics: '德国专题',
    footer_privacy: '隐私政策',
    footer_terms: '服务条款',
    footer_top_journals: '顶级期刊',
    footer_copyright: '© 2025 EconWeb. 版权所有。由方馨创建。',
    
    // Resource count text
    resources_count: '个资源',
    
    // Category Titles
    category_organizations: '组织机构',
    category_organizations_desc: '国际组织、政府机构、央行和监管部门',
    category_data_sources: '数据获取',
    category_data_sources_desc: '宏观经济数据库、微观调查和统计资源',
    category_policy_analysis: '政策研读',
    category_policy_analysis_desc: '政策解读、监管文件和政府报告',
    category_academic_research: '学术研究',
    category_academic_research_desc: '学术论文、研究平台和学术资源',
    category_market_observation: '市场观察',
    category_market_observation_desc: '行业分析、投资工具和市场研究',
    category_financial_news: '财经资讯',
    category_financial_news_desc: '财经新闻、市场信息和经济评论',
    category_think_tanks: '智库观点',
    category_think_tanks_desc: '学术观点和智库媒体',
    category_learning_resources: '在线学习',
    category_learning_resources_desc: '经济学在线课程、教材和教育资料',
    category_practical_tools: '实用工具',
    category_practical_tools_desc: '经济分析软件、计算器和参考工具',

    // Top Journals Section
    top_journals_focus: '顶级期刊',
    top_journals_title: '顶级学术期刊',
    top_journals_subtitle: '经济学领域最权威的学术出版平台，收录全球顶尖学者前沿研究成果',

    // Search Examples Section
    search_examples_title: '搜索示例',
    search_tips_title: '搜索技巧',
    
    // Search Examples
    example_free_data: '免费数据',
    example_free_data_desc: '寻找免费的数据资源',
    example_china_policy: '中国政策', 
    example_china_policy_desc: '中国相关政策文件',
    example_top_journals: '顶级期刊',
    example_top_journals_desc: '经济学顶级学术期刊',
    example_online_learning: '在线学习',
    example_online_learning_desc: '课程和学习资源',
    
    // Search Tips - New Smart Search
    search_smart_search: '🔍 智能搜索：',
    search_smart_search_desc: '支持模糊匹配，如"数据"、"期刊"、"学习"',
    search_journal_abbrev: '📚 期刊缩写：',
    search_journal_abbrev_desc: '"AER"、"QJE"、"JPE" 等自动识别',
    search_region_search: '🌍 地区搜索：',
    search_region_search_desc: '"中国"、"德国" 等自动扩展相关资源',
    search_concept_search: '📊 概念搜索：',
    search_concept_search_desc: '"宏观"、"货币"、"政策" 等关联匹配',
    
    guide_journals_title: '顶刊专题',
    guide_journals_desc: '当你需要高质量学术资源时',
    guide_journals_tip1: '• 顶级经济学期刊',
    guide_journals_tip2: '• 权威学术发表平台',
    guide_journals_tip3: '• 前沿研究论文',
    guide_journals_tip4: '• 学术研究必备',
    
    guide_german_title: '德国专题',
    guide_learning_title: '学习专题',
    guide_learning_desc: '系统学习经济学的优质资源集合',
    guide_learning_tip1: '• 顶级大学课程资源',
    guide_learning_tip2: '• 免费在线学习平台',  
    guide_learning_tip3: '• 经济思想史纪录片',
    guide_media_title: '媒体专题',
    guide_media_desc: '获取权威经济资讯与专家观点的优质媒体平台',
    guide_media_tip1: '• 国际权威财经媒体',
    guide_media_tip2: '• 中文财经资讯平台',
    guide_media_tip3: '• 学术智库观点媒体',
    guide_german_desc: '当你专门研究德国经济时',
    guide_german_tip1: '• 德国央行数据',
    guide_german_tip2: '• 德国经济机构',
    guide_german_tip3: '• 德国政策报告',
    guide_german_tip4: '• 欧洲经济研究',
    
    // Policy special section
    policy_nav: '政策专题',
    policy_title: '政策解读专题',
    policy_subtitle: '追踪全球政策动态，把握政策风向',
    policy_description: '汇聚全球主要央行、政府部门和监管机构，提供权威政策信息和政策解读，助您准确把握政策脉搏。',
    policy_count: '10个权威政策机构',
    policy_features: '央行货币政策 • 财政税收政策 • 金融监管政策 • 产业政策导向',
    guide_policy_title: '政策专题',
    guide_policy_desc: '追踪全球政策动态和权威政策机构',
    guide_policy_tip1: '• 全球主要央行政策',
    guide_policy_tip2: '• 财政税收政策信息',
    guide_policy_tip3: '• 金融监管政策解读',
    guide_policy_tip4: '• 产业政策发展动向',
    
    // Data special section
    data_nav: '数据专题',
    data_title: '数据资源专题',
    data_subtitle: '汇聚全球权威数据源，支撑经济分析',
    data_description: '精选全球最权威的经济数据平台，从美联储FRED到世界银行，从实时指标到历史数据，为您的研究提供坚实数据支撑。',
    data_count: '9个权威数据平台',
    data_features: '美联储FRED • 世界银行数据 • IMF统计 • 实时经济指标',
    guide_data_title: '数据专题',
    guide_data_desc: '获取权威经济数据和统计资源',
    guide_data_tip1: '• 美联储FRED经济数据',
    guide_data_tip2: '• 世界银行发展指标',
    guide_data_tip3: '• IMF国际统计数据',
    guide_data_tip4: '• 实时经济指标预测',
    
    // Market special section
    market_nav: '市场专题',
    market_title: '市场分析专题',
    market_subtitle: '覆盖全球主要交易所，洞察市场动态',
    market_description: '汇聚全球主要证券交易所和期货市场，从A股、港股到美股，从股票到期货，全方位覆盖市场信息和交易数据。',
    market_count: '6个主要交易所',
    market_features: 'A股港股美股 • 证券期货市场 • 实时行情数据 • IPO市场信息',
    guide_market_title: '市场专题',
    guide_market_desc: '覆盖全球主要交易所和市场信息',
    guide_market_tip1: '• A股港股美股市场',
    guide_market_tip2: '• 证券期货交易数据',
    guide_market_tip3: '• 实时行情和IPO信息',
    guide_market_tip4: '• 大宗商品期货分析',
    
    // Tools special section
    tools_nav: '工具专题',
    tools_title: '分析工具专题',
    tools_subtitle: '专业分析工具，提升研究效率',
    tools_description: '精选专业金融分析工具和编程资源，从Bloomberg终端到Python编程，助力您进行高效的经济金融分析和研究。',
    tools_count: '4个专业工具',
    tools_features: '专业金融终端 • 编程分析工具 • 数据分析平台 • 研究支持',
    guide_tools_title: '工具专题',
    guide_tools_desc: '专业分析工具和编程资源',
    guide_tools_tip1: '• Bloomberg等专业终端',
    guide_tools_tip2: '• Python金融分析编程',
    guide_tools_tip3: '• R语言统计分析',
    guide_tools_tip4: '• 数据分析平台工具',
    
    // Quick Tips
    quick_tips_title: '快速提示',
    quick_tip_search: '使用搜索栏快速找到特定资源',
    quick_tip_filter: '点击标签进行快速筛选',
    quick_tip_bookmark: '收藏常用资源便于后续访问'
  },
  
  ko: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: '홈',
    nav_functional: '기능별',
    nav_news: '경제 뉴스',
    nav_german: '독일 특집',
    
    // Hero Section
    hero_title: '경제학 리소스',
    hero_title_highlight: '내비게이션',
    hero_subtitle: '가장 포괄적인 경제학 리소스 컬렉션을 발견하세요. 데이터 분석부터 학술 연구까지, 경제학 세계에서 앞서 나가기 위해 필요한 모든 것을 찾아보세요.',
    btn_find_data: '데이터 찾기',
    btn_learn: '학습하기',
    search_placeholder: '경제학 리소스 검색...',
    popular_tags: '인기 태그:',
    search_btn: '검색',
    clear_filters: '모두 지우기',
    searching_for: '검색',
    filtered_by: '필터',
    
    // Navigation Toggle
    toggle_functional: '기능별',
    
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
    

    
    // Footer
    footer_description: '경제학 리소스에 대한 종합 가이드입니다. 최고의 데이터 소스, 연구 논문 및 도구를 발견하여 경제학 이해를 향상시키세요.',
    quick_links: '빠른 링크',
  quick_actions: '빠른 동작',
  back_to_top: '맨 위로',
  go_to_footer: '하단으로',
    specialties: '전문 분야',
    

    
    // Switch view messages
    switch_to_functional_view: '"기능별" 보기로 전환하여 이 섹션과 상호작용하세요',
    
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
    btn_show_less: '접기',
    
    // Additional UI text
    visit_resource: '리소스 방문',
    german_focus: '독일 집중',
    
    // Navigation menu items
    menu_features: '기능',
    menu_resources: '리소스',
    nav_features: '기능',
    nav_learning: '학습 특집',
    nav_media: '미디어 특집',
    nav_policy: '정책 특집',
    nav_data: '데이터 특집',
    nav_market: '시장 특집',
    nav_tools: '도구 특집',
    nav_top_journals: '톱 저널',
    nav_guide: '사용 가이드',
    top_journals_nav: '톱 저널',
    german_nav: '독일 특집',
    
    // Footer links
    footer_home: '홈',
    footer_features: '기능', 
    footer_resources: '리소스',
    footer_data_sources: '데이터 소스',
    footer_research_papers: '연구 논문',
    footer_policy_reports: '정책 보고서',
    footer_learning_resources: '학습 리소스',
    footer_privacy: '개인정보 보호정책',
    footer_terms: '서비스 약관',
    footer_top_journals: 'Top Journals',
    footer_copyright: '© 2025 EconWeb. 모든 권리 보유. 방신(fangxin)이 제작.',
    
    // Resource count text
    resources_count: '리소스',
    
    // Category Titles
    category_organizations: '조직 & 기관',
    category_organizations_desc: '국제기구, 정부기관, 중앙은행 및 규제부서',
    category_data_sources: '데이터 소스',
    category_data_sources_desc: '거시경제 데이터베이스, 미시조사 및 통계자원',
    category_policy_analysis: '정책 분석',
    category_policy_analysis_desc: '정책 해석, 규제 문서 및 정부 보고서',
    category_academic_research: '학술 연구',
    category_academic_research_desc: '학술 논문, 연구 플랫폼 및 학술 자원',
    category_market_observation: '시장 관찰',
    category_market_observation_desc: '산업 분석, 투자 도구 및 시장 연구',
    category_financial_news: '경제 뉴스',
    category_financial_news_desc: '경제 뉴스, 시장 정보 및 경제 분석',
    category_think_tanks: '지형 탱크 인사이트',
    category_think_tanks_desc: '학술적 시각과 지형 탱크 미디어',
    category_learning_resources: '학습 자원',
    category_learning_resources_desc: '경제학 온라인 코스, 교과서 및 교육 자료',
    category_practical_tools: '실용 도구',
    category_practical_tools_desc: '경제 분석 소프트웨어, 계산기 및 참고 도구',

    // Top Journals Section
    top_journals_focus: '탑 저널',
    top_journals_title: '최고급 학술 저널',
    top_journals_subtitle: '경제학 분야에서 가장 권위 있는 학술 출판 플랫폼으로, 전 세계 선도적인 학자들의 최첨단 연구를 수록합니다',

    // Search Examples Section
    search_examples_title: '검색 예시',
    search_tips_title: '검색 팁',
    
    // Search Examples
    example_free_data: '무료 데이터',
    example_free_data_desc: '무료 데이터 리소스 찾기',
    example_china_policy: '중국 정책', 
    example_china_policy_desc: '중국 관련 정책 문서',
    example_top_journals: '탑 저널',
    example_top_journals_desc: '경제학 최고급 저널',
    example_online_learning: '온라인 학습',
    example_online_learning_desc: '코스 및 학습 리소스',
    
    // Search Tips - New Smart Search
    search_smart_search: '🔍 스마트 검색:',
    search_smart_search_desc: '퍼지 매칭 지원, 예: "데이터", "저널", "학습"',
    search_journal_abbrev: '📚 저널 약어:',
    search_journal_abbrev_desc: '"AER", "QJE", "JPE" 등 자동 인식',
    search_region_search: '🌍 지역 검색:',
    search_region_search_desc: '"중국", "독일" 등 관련 리소스 자동 확장',
    search_concept_search: '📊 개념 검색:',
    search_concept_search_desc: '"거시", "화폐", "정책" 등 연관 매칭',
    
    // Quick Tags
    quick_tags_title: '빠른 필터:',
    
    // Usage Guide Section
    usage_guide: '사용 가이드',
    usage_guide_title: 'EconWeb 사용법',
    usage_guide_subtitle: '귀하의 필요에 따라 가장 적합한 네비게이션 방법을 선택하세요',
    
    // Guide Cards
    guide_functional_title: '기능별 네비게이션',
    guide_functional_desc: '무엇을 할지 정확히 알고 있을 때',
    guide_functional_tip1: '• 데이터 필요 → 데이터 소스',
    guide_functional_tip2: '• 정책 읽기 → 정책 분석', 
    guide_functional_tip3: '• 연구하기 → 학술 연구',
    guide_functional_tip4: '• 시장 보기 → 시장 관찰',
    
    
    guide_journals_title: '탑 저널',
    guide_journals_desc: '고품질 학술 자원이 필요할 때',
    guide_journals_tip1: '• 최고 경제학 저널',
    guide_journals_tip2: '• 권위있는 학술 출판 플랫폼',
    guide_journals_tip3: '• 최첨단 연구 논문',
    guide_journals_tip4: '• 학술 연구 필수',
    
    guide_german_title: '독일 특집',
    guide_german_desc: '독일 경제를 전문적으로 연구할 때',
    guide_german_tip1: '• 독일 중앙은행 데이터',
    guide_german_tip2: '• 독일 경제 기관',
    guide_german_tip3: '• 독일 정책 보고서',
    guide_german_tip4: '• 유럽 경제 연구',
    
    // Quick Tips
    quick_tips_title: '빠른 팁',
    quick_tip_search: '검색창을 사용하여 특정 리소스를 빠르게 찾으세요',
    quick_tip_filter: '태그를 클릭하여 빠른 필터링',
    quick_tip_bookmark: '자주 사용하는 리소스를 북마크하여 쉽게 접근'
  },
  
  ja: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: 'ホーム',
    nav_functional: '機能別',
    nav_news: '経済ニュース',
    nav_german: 'ドイツ特集',
    
    // Hero Section
    hero_title: '経済学リソース',
    hero_title_highlight: 'ナビゲーション',
    hero_subtitle: '最も包括的な経済学リソースコレクションを発見してください。データ分析から学術研究まで、経済学の世界で先を行くために必要なすべてを見つけてください。',
    btn_find_data: 'データを探す',
    btn_learn: '学習する',
    search_placeholder: '経済学リソースを検索...',
    popular_tags: '人気のタグ：',
    search_btn: '検索',
    clear_filters: 'すべてクリア',
    searching_for: '検索',
    filtered_by: 'フィルター',
    
    // Navigation Toggle
    toggle_functional: '機能別',
    
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
    

    
    // Footer
    footer_description: '経済学リソースの包括的なガイドです。最高のデータソース、研究論文、ツールを発見して、経済学の理解を向上させてください。',
    quick_links: 'クイックリンク',
  quick_actions: 'クイックアクション',
  back_to_top: 'トップに戻る',
  go_to_footer: 'フッターへ',
    specialties: '専門分野',
    

    
    // Switch view messages
    switch_to_functional_view: '「機能別」ビューに切り替えて、このセクションとやり取りしてください',
    
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
    btn_show_less: '折りたたむ',
    
    // Additional UI text
    visit_resource: 'リソースを訪問',
    german_focus: 'ドイツ特集',
    
    // Navigation menu items
    menu_features: '機能',
    menu_resources: 'リソース',
    nav_features: '機能',
    nav_learning: '学習特集',
    nav_media: 'メディア特集',
    nav_policy: '政策特集',
    nav_data: 'データ特集',
    nav_market: '市場特集',
    nav_tools: 'ツール特集',
    nav_top_journals: 'トップジャーナル',
    nav_guide: '利用ガイド',
    top_journals_nav: 'トップジャーナル',
    german_nav: 'ドイツ特集',
    
    // Footer links
    footer_home: 'ホーム',
    footer_features: '機能', 
    footer_resources: 'リソース',
    footer_learning: '学習特集',
    footer_media: 'メディア特集',
    footer_policy: '政策特集',
    footer_data: 'データ特集',
    footer_market: '市場特集',
    footer_tools: 'ツール特集',
    footer_german: 'ドイツ特集',
    footer_data_sources: 'データソース',
    footer_research_papers: '研究論文',
    footer_policy_reports: '政策レポート',
    footer_learning_resources: '学習リソース',
    footer_media_resources: 'メディア資料',
    footer_market_analysis: '市場分析',
    footer_german_economics: 'ドイツ経済',
    footer_privacy: 'プライバシーポリシー',
    footer_terms: '利用規約',
    footer_top_journals: 'トップジャーナル',
    footer_copyright: '© 2025 EconWeb. 全著作権所有。方馨(fangxin)によって作成。',
    
    // Resource count text
    resources_count: 'リソース',
    
    // Category Titles
    category_organizations: '組織＆機関',
    category_organizations_desc: '国際機関、政府機関、中央銀行および規制部門',
    category_data_sources: 'データソース',
    category_data_sources_desc: 'マクロ経済データベース、ミクロ調査、統計資源',
    category_policy_analysis: '政策分析',
    category_policy_analysis_desc: '政策解釈、規制文書および政府報告書',
    category_academic_research: '学術研究',
    category_academic_research_desc: '学術論文、研究プラットフォームおよび学術資源',
    category_market_observation: '市場観察',
    category_market_observation_desc: '業界分析、投資ツールおよび市場研究',
    category_financial_news: '財経ニュース',
    category_financial_news_desc: '財経ニュース、市場情報および経済コメント',
    category_think_tanks: '経済フォーカスインサイト',
    category_think_tanks_desc: '学術的視点と経済フォーカスメディア',
    category_learning_resources: 'オンライン学習',
    category_learning_resources_desc: '経済学オンラインコース、教科書および教育資料',
    category_practical_tools: '実用ツール',
    category_practical_tools_desc: '経済分析ソフトウェア、計算機および参考ツール',

    // Top Journals Section
    top_journals_focus: 'トップジャーナル',
    top_journals_title: '最高級学術誌',
    top_journals_subtitle: '経済学分野で最も権威ある学術出版プラットフォームで、世界の主要学者による最先端研究を収録',

    // Search Examples Section
    search_examples_title: '検索例',
    search_tips_title: '検索のコツ',
    
    // Search Examples
    example_free_data: '無料データ',
    example_free_data_desc: '無料データリソースを見つける',
    example_china_policy: '中国政策', 
    example_china_policy_desc: '中国関連政策文書',
    example_top_journals: 'トップジャーナル',
    example_top_journals_desc: '経済学最高級ジャーナル',
    example_online_learning: 'オンライン学習',
    example_online_learning_desc: 'コースと学習リソース',
    
    // Search Tips - New Smart Search
    search_smart_search: '🔍 スマート検索：',
    search_smart_search_desc: 'ファジーマッチング対応、例："データ"、"ジャーナル"、"学習"',
    search_journal_abbrev: '📚 ジャーナル略語：',
    search_journal_abbrev_desc: '"AER"、"QJE"、"JPE" など自動認識',
    search_region_search: '🌍 地域検索：',
    search_region_search_desc: '"中国"、"ドイツ" など関連リソース自動拡張',
    search_concept_search: '📊 概念検索：',
    search_concept_search_desc: '"マクロ"、"金融"、"政策" など関連マッチング',
    
    // Quick Tags
    quick_tags_title: 'クイックフィルター：',
    
    // Usage Guide Section
    usage_guide: '使用ガイド',
    usage_guide_title: 'EconWebの使い方',
    usage_guide_subtitle: 'ニーズに応じて最適なナビゲーション方法を選択してください',
    
    // Guide Cards
    guide_functional_title: '機能別ナビゲーション',
    guide_functional_desc: '何をしたいかが明確な場合',
    guide_functional_tip1: '• データが必要 → データソース',
    guide_functional_tip2: '• 政策を読む → 政策分析', 
    guide_functional_tip3: '• 研究する → 学術研究',
    guide_functional_tip4: '• 市場を見る → 市場観察',
    
    
    guide_journals_title: 'トップジャーナル',
    guide_journals_desc: '高品質な学術リソースが必要な場合',
    guide_journals_tip1: '• トップ経済学ジャーナル',
    guide_journals_tip2: '• 権威ある学術出版プラットフォーム',
    guide_journals_tip3: '• 最先端研究論文',
    guide_journals_tip4: '• 学術研究に必須',
    
    guide_german_title: 'ドイツ特集',
    guide_german_desc: 'ドイツ経済を専門的に研究する場合',
    guide_german_tip1: '• ドイツ中央銀行データ',
    guide_german_tip2: '• ドイツ経済機関',
    guide_german_tip3: '• ドイツ政策報告書',
    guide_german_tip4: '• ヨーロッパ経済研究',
    
    // Quick Tips
    quick_tips_title: 'クイックヒント',
    quick_tip_search: '検索バーを使用して特定のリソースをすばやく見つける',
    quick_tip_filter: 'タグをクリックしてクイックフィルタリング',
    quick_tip_bookmark: 'よく使用するリソースをブックマークして簡単にアクセス'
  },

  de: {
    // Header
    site_name: 'EconWeb',
    site_subtitle: 'EconNavigator by EconomicsWeb',
    nav_home: 'Startseite',
    nav_functional: 'Nach Funktion',
    nav_news: 'Wirtschaftsnews',
    nav_german: 'Deutschland-Fokus',
    
    // Hero Section
    hero_title: 'Ihr Tor zu',
    hero_title_highlight: 'Wirtschaftsexzellenz',
    hero_subtitle: 'Entdecken Sie die umfassendste Sammlung von Wirtschaftsressourcen. Von Datenanalyse bis zur akademischen Forschung - finden Sie alles, was Sie brauchen, um in der Welt der Wirtschaft voranzukommen.',
    btn_find_data: 'Daten finden',
    btn_learn: 'Lernen',
    search_placeholder: 'Wirtschaftsressourcen suchen...',
    popular_tags: 'Beliebte Tags:',
    search_btn: 'Suchen',
    clear_filters: 'Alle löschen',
    searching_for: 'Suche nach',
    filtered_by: 'Gefiltert nach',
    
    // Navigation Toggle
    toggle_functional: 'Nach Funktion',
    
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
    

    
    // Footer
    footer_description: 'Ihr umfassender Leitfaden für Wirtschaftsressourcen. Entdecken Sie die besten Datenquellen, Forschungsarbeiten und Tools, um Ihr Verständnis der Wirtschaft zu verbessern.',
    quick_links: 'Schnelllinks',
  quick_actions: 'Schnellaktionen',
  back_to_top: 'Nach oben',
  go_to_footer: 'Zum Footer',
    specialties: 'Fachbereiche',
    

    
    // Switch view messages
    switch_to_functional_view: 'Wechseln Sie zur "Nach Funktion"-Ansicht, um mit diesem Abschnitt zu interagieren',
    
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
    btn_show_less: 'Weniger anzeigen',
    
    // Additional UI text
    visit_resource: 'Ressource besuchen',
    german_focus: 'Deutschland-Fokus',
    
    // Navigation menu items
    menu_features: 'Funktionen',
    menu_resources: 'Ressourcen',
    nav_features: 'Funktionen',
    nav_learning: 'Lernen-Fokus',
    nav_media: 'Medien-Fokus',
    nav_policy: 'Politik-Fokus',
    nav_data: 'Daten-Fokus',
    nav_market: 'Markt-Fokus',
    nav_tools: 'Tools-Fokus',
    nav_top_journals: 'Top-Journals',
    nav_guide: 'Nutzungsanleitung',
    top_journals_nav: 'Top-Journals',
    german_nav: 'Deutschland-Fokus',
    
    // Footer links
    footer_home: 'Startseite',
    footer_features: 'Funktionen', 
    footer_resources: 'Ressourcen',
    footer_learning: 'Lernen-Fokus',
    footer_media: 'Medien-Fokus',
    footer_policy: 'Politik-Fokus',
    footer_data: 'Daten-Fokus',
    footer_market: 'Markt-Fokus',
    footer_tools: 'Tools-Fokus',
    footer_german: 'Deutschland-Fokus',
    footer_data_sources: 'Datenquellen',
    footer_research_papers: 'Forschungsarbeiten',
    footer_policy_reports: 'Politikberichte',
    footer_learning_resources: 'Lernressourcen',
    footer_media_resources: 'Medienressourcen',
    footer_market_analysis: 'Marktanalyse',
    footer_german_economics: 'Deutsche Wirtschaft',
    footer_privacy: 'Datenschutzrichtlinie',
    footer_terms: 'Nutzungsbedingungen',
    footer_top_journals: 'Top-Journals',
    footer_copyright: '© 2025 EconWeb. Alle Rechte vorbehalten. Erstellt von fangxin.',
    
    // Resource count text
    resources_count: 'Ressourcen',
    
    // Category Titles
    category_organizations: 'Organisationen & Institutionen',
    category_organizations_desc: 'Internationale Organisationen, Regierungsbehörden, Zentralbanken und Regulierungsbehörden',
    category_data_sources: 'Datenquellen',
    category_data_sources_desc: 'Makroökonomische Datenbanken, mikroökonomische Umfragen und statistische Ressourcen',
    category_policy_analysis: 'Politikanalyse',
    category_policy_analysis_desc: 'Politikinterpretation, regulatorische Dokumente und Regierungsberichte',
    category_academic_research: 'Akademische Forschung',
    category_academic_research_desc: 'Akademische Arbeiten, Forschungsplattformen und wissenschaftliche Ressourcen',
    category_market_observation: 'Marktbeobachtung',
    category_market_observation_desc: 'Branchenanalyse, Investitionstools und Marktforschung',
    category_financial_news: 'Wirtschaftsnews',
    category_financial_news_desc: 'Wirtschaftsnews, Marktinformationen und wirtschaftliche Kommentare',
    category_think_tanks: 'Think Tank Insights',
    category_think_tanks_desc: 'Akademische Perspektiven und Think Tank-Medien',
    category_learning_resources: 'Online Learning',
    category_learning_resources_desc: 'Wirtschafts-Online-Kurse und Lernressourcen',
    category_practical_tools: 'Praktische Tools',
    category_practical_tools_desc: 'Wirtschaftsanalysesoftware, Rechner und Referenztools',

    // Top Journals Section
    top_journals_focus: 'Top Journals',
    top_journals_title: 'Führende Akademische Zeitschriften',
    top_journals_subtitle: 'Die autoritativsten akademischen Publikationsplattformen in der Wirtschaftswissenschaft mit wegweisender Forschung von führenden Wissenschaftlern weltweit',

    // Search Examples Section
    search_examples_title: 'Suchbeispiele',
    search_tips_title: 'Suchtipps',
    
    // Search Examples
    example_free_data: 'Kostenlose Daten',
    example_free_data_desc: 'Kostenlose Datenressourcen finden',
    example_china_policy: 'China Politik', 
    example_china_policy_desc: 'China-bezogene Politikdokumente',
    example_top_journals: 'Top Journals',
    example_top_journals_desc: 'Führende Wirtschaftszeitschriften',
    example_online_learning: 'Online Lernen',
    example_online_learning_desc: 'Kurse und Lernressourcen',
    
    // Search Tips - New Smart Search
    search_smart_search: '🔍 Intelligente Suche:',
    search_smart_search_desc: 'Unterstützt unscharfe Suche, z.B. "Daten", "Journal", "Lernen"',
    search_journal_abbrev: '📚 Journal-Abkürzungen:',
    search_journal_abbrev_desc: '"AER", "QJE", "JPE" automatisch erkannt',
    search_region_search: '🌍 Regionale Suche:',
    search_region_search_desc: '"China", "Deutschland" erweitert verwandte Ressourcen',
    search_concept_search: '📊 Konzeptsuche:',
    search_concept_search_desc: '"Makro", "Währung", "Politik" semantische Zuordnung',
    
    // Quick Tags
    quick_tags_title: 'Schnellfilter:',
    
    // Usage Guide Section
    usage_guide: 'Nutzungsanleitung',
    usage_guide_title: 'Wie nutzt man EconWeb?',
    usage_guide_subtitle: 'Wählen Sie die für Ihre Bedürfnisse am besten geeignete Navigationsmethode',
    
    // Guide Cards
    guide_functional_title: 'Funktionale Navigation',
    guide_functional_desc: 'Wenn Sie genau wissen, was Sie tun möchten',
    guide_functional_tip1: '• Daten benötigt → Datenquellen',
    guide_functional_tip2: '• Politik lesen → Politikanalyse', 
    guide_functional_tip3: '• Forschen → Akademische Forschung',
    guide_functional_tip4: '• Markt beobachten → Marktbeobachtung',
    
    
    guide_journals_title: 'Top Journals',
    guide_journals_desc: 'Wenn Sie hochwertige akademische Ressourcen benötigen',
    guide_journals_tip1: '• Top-Wirtschaftszeitschriften',
    guide_journals_tip2: '• Autoritative akademische Publikationsplattformen',
    guide_journals_tip3: '• Spitzenforschungsarbeiten',
    guide_journals_tip4: '• Unerlässlich für akademische Forschung',
    
    guide_german_title: 'Deutschland-Fokus',
    guide_german_desc: 'Wenn Sie die deutsche Wirtschaft speziell studieren',
    guide_german_tip1: '• Deutsche Zentralbankdaten',
    guide_german_tip2: '• Deutsche Wirtschaftsinstitutionen',
    guide_german_tip3: '• Deutsche Politikberichte',
    guide_german_tip4: '• Europäische Wirtschaftsforschung',
    
    // Quick Tips
    quick_tips_title: 'Schnelle Tipps',
    quick_tip_search: 'Verwenden Sie die Suchleiste, um bestimmte Ressourcen schnell zu finden',
    quick_tip_filter: 'Klicken Sie auf Tags für schnelle Filterung',
    quick_tip_bookmark: 'Häufig verwendete Ressourcen als Lesezeichen speichern für einfachen Zugriff'
  }
};

// Category key mapping from Chinese to translation keys
const categoryKeyMap: Record<string, string> = {
  "组织机构": "organizations",
  "数据获取": "data_sources", 
  "政策研读": "policy_analysis",
  "学术研究": "academic_research",
  "市场观察": "market_observation",
  "财经资讯": "financial_news",
  "智库观点": "think_tanks",
  "在线学习": "learning_resources",
  "实用工具": "practical_tools"
};

export function getCategoryTranslation(lang: Language, categoryKey: string, type: 'title' | 'desc'): string {
  const translationKey = categoryKeyMap[categoryKey];
  if (!translationKey) return categoryKey;
  
  const key = type === 'title' ? `category_${translationKey}` : `category_${translationKey}_desc`;
  return getTranslation(lang, key);
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
} 