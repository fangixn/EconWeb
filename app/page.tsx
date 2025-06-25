'use client';

import { useState, useMemo } from 'react';
import { Globe } from 'lucide-react';
import ImprovedNavigation from '@/components/ImprovedNavigation';
import HeroSection from '@/components/HeroSection';
import SearchResults from '@/components/SearchResults';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  germanSpecial, 
  topJournalsResources, 
  learningResourcesSpecial, 
  mediaResourcesSpecial, 
  policySpecial, 
  dataSpecial, 
  marketSpecial, 
  toolsSpecial 
} from '@/lib/data';
import { getResourceTranslation, getTagTranslation, getResourceDescriptionTranslation } from '@/lib/resourcesI18n';

export default function Home() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('specialty');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // 添加展开状态管理
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    learning: false,
    media: false,
    policy: false,
    data: false,
    market: false,
    tools: false,
    journals: false,
    german: false
  });

  // 切换专题展开状态
  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // 整合所有资源数据
  const allResources = useMemo(() => {
    const resources: Array<{
      name: string;
      url: string;
      description: string;
      tags: string[];
      category: string;
      source: string;
    }> = [];
    
    // 按照页面专题section的顺序添加资源
    
    // 1. 学习专题
    learningResourcesSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'learning',
        source: 'learning'
      });
    });
    
    // 2. 媒体专题
    mediaResourcesSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'media',
        source: 'media'
      });
    });
    
    // 3. 政策专题
    policySpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'policy',
        source: 'policy'
      });
    });
    
    // 4. 数据专题
    dataSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'data',
        source: 'data'
      });
    });
    
    // 5. 市场专题
    marketSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'market',
        source: 'market'
      });
    });
    
    // 6. 工具专题
    toolsSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'tools',
        source: 'tools'
      });
    });
    
    // 7. 顶刊专题
    topJournalsResources.forEach(journal => {
      resources.push({
        ...journal,
        category: 'top-journals',
        source: 'journals'
      });
    });
    
    // 8. 德国专题
    germanSpecial.forEach(resource => {
      resources.push({
        ...resource,
        category: 'german',
        source: 'german'
      });
    });
    
    return resources;
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // 如果有搜索词，滚动到搜索结果区域
    if (term.trim()) {
      setTimeout(() => {
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
          searchResults.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    // 滚动回顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang as any);
  };

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ImprovedNavigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onViewChange={handleViewChange}
        onSearch={handleSearch}
        onSidebarToggle={handleSidebarToggle}
      />
      
      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'
      }`}>
        <HeroSection onSearch={handleSearch} resources={allResources} />
        
        {/* 搜索结果区域 */}
        <div id="search-results">
          <SearchResults 
            searchTerm={searchTerm}
            resources={allResources}
            onClearSearch={handleClearSearch}
          />
        </div>
        
        {/* 默认内容区域 - 只在没有搜索时显示 */}
        {!searchTerm.trim() && (
          <>
            

            {/* 学习专题 Section */}
            <section id="learning" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-green-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-green-800 font-medium">{t('nav_learning') || 'Learning Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('guide_learning_title') || 'Quality Learning Resources'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('guide_learning_desc') || 'Systematic learning resources for economics, from top university courses to classic documentaries'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.learning ? learningResourcesSpecial : learningResourcesSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-green-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {getResourceTranslation(currentLanguage, resource.name)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {learningResourcesSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('learning')}
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      {expandedSections.learning ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${learningResourcesSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.learning ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 媒体专题 Section */}
            <section id="media" className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-cyan-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-cyan-800 font-medium">{t('nav_media') || 'Media Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('guide_media_title') || 'Authoritative Media Platforms'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('guide_media_desc') || 'Authoritative economic news and expert opinions from quality media platforms'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.media ? mediaResourcesSpecial : mediaResourcesSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cyan-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {getResourceTranslation(currentLanguage, resource.name)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {mediaResourcesSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('media')}
                      className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                    >
                      {expandedSections.media ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${mediaResourcesSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.media ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 政策专题 Section */}
            <section id="policy" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-blue-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-blue-800 font-medium">{t('nav_policy') || 'Policy Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('policy_title') || 'Policy Resources'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('policy_description') || 'Track global policy dynamics and understand policy directions from authoritative institutions'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.policy ? policySpecial : policySpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {getResourceTranslation(currentLanguage, resource.name)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {policySpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('policy')}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      {expandedSections.policy ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${policySpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.policy ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 数据专题 Section */}
            <section id="data" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-indigo-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-indigo-800 font-medium">{t('nav_data') || 'Data Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('data_title') || 'Data Resources'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('data_description') || 'Access comprehensive economic data and statistical resources from authoritative sources'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.data ? dataSpecial : dataSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-indigo-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {getResourceTranslation(currentLanguage, resource.name)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {dataSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('data')}
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                    >
                      {expandedSections.data ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${dataSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.data ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 市场专题 Section */}
            <section id="market" className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-pink-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-pink-800 font-medium">{t('nav_market') || 'Market Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('market_title') || 'Market Analysis'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('market_description') || 'Monitor global financial markets and access professional market analysis tools'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.market ? marketSpecial : marketSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {getResourceTranslation(currentLanguage, resource.name)}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {marketSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('market')}
                      className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
                    >
                      {expandedSections.market ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${marketSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.market ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 工具专题 Section */}
            <section id="tools" className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-amber-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-amber-800 font-medium">{t('nav_tools') || 'Tools Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('tools_title') || 'Analysis Tools'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('tools_description') || 'Professional analysis tools and programming resources for efficient economic research'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.tools ? toolsSpecial : toolsSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-amber-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{getResourceTranslation(currentLanguage, resource.name)}</h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {toolsSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('tools')}
                      className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
                    >
                      {expandedSections.tools ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${toolsSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.tools ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 顶刊专题 Section */}
            <section id="top-journals" className="py-20 bg-gradient-to-r from-purple-50 to-violet-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-purple-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-purple-800 font-medium">{t('nav_top_journals') || 'Top Journals'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('top_journals_title') || 'Premier Academic Journals'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('top_journals_subtitle') || 'The most authoritative academic publishing platforms in economics'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.journals ? topJournalsResources : topJournalsResources.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{getResourceTranslation(currentLanguage, resource.name)}</h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {topJournalsResources.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('journals')}
                      className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      {expandedSections.journals ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${topJournalsResources.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.journals ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* 德国专题 Section */}
            <section id="german" className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center bg-orange-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-orange-800 font-medium">{t('nav_german') || 'German Focus'}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {t('german_title') || 'German Economics Focus'}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('german_subtitle') || 'Specialized resources and institutions for German economics research'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(expandedSections.german ? germanSpecial : germanSpecial.slice(0, 6)).map((resource, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{getResourceTranslation(currentLanguage, resource.name)}</h3>
                      <p className="text-gray-600 text-sm mb-4">{getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                            {getTagTranslation(currentLanguage, tag)}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                      >
                        {t('visit_resource') || 'Visit Resource'} →
                      </a>
                    </div>
                  ))}
                </div>
                
                {germanSpecial.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => toggleSection('german')}
                      className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                    >
                      {expandedSections.german ? (t('btn_collapse') || 'Show Less') : `${t('btn_show_more') || 'Show More'} (${germanSpecial.length - 6})`}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${expandedSections.german ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>


          </>
        )}
      </main>

      {/* 页脚 */}
      <footer className={`bg-gray-900 text-white py-16 transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'
      }`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 网站信息 */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">EconWeb</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer_description') || 'Your comprehensive guide to economics resources. Discover the best data sources, research papers, and tools to enhance your understanding of economics.'}
              </p>
              <div className="flex space-x-4">
                <LanguageSwitcher theme="dark" />
              </div>
            </div>

            {/* 专题分类 */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('specialties') || 'Specialties'}</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('learning')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_learning') || 'Learning Focus'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('media')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_media') || 'Media Focus'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('policy')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_policy') || 'Policy Focus'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('data')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_data') || 'Data Focus'}
                  </button>
                </div>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('market')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_market') || 'Market Focus'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('tools')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_tools') || 'Tools Focus'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('top-journals')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_top_journals') || 'Top Journals'}
                  </button>
                  <button 
                    onClick={() => scrollToSection('german')}
                    className="block text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {t('footer_german') || 'German Focus'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 底部版权信息 */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer_copyright') || '© 2025 EconWeb. All rights reserved. Created by fangxin.'}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('back_to_top') || 'Back to Top'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 