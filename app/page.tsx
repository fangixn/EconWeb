'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ImprovedNavigation from '@/components/ImprovedNavigation';
import HeroSection from '@/components/HeroSection';
import SearchResults from '@/components/SearchResults';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  germanEconomicsResources, 
  topJournalsResources, 
  learningResourcesSpecial, 
  mediaResourcesSpecial, 
  policySpecial, 
  dataSpecial, 
  marketSpecial, 
  toolsSpecial 
} from '@/lib/data';

export default function Home() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('specialty');

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
    germanEconomicsResources.forEach(resource => {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ImprovedNavigation 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onViewChange={handleViewChange}
        onSearch={handleSearch}
      />
      
      {/* Main Content */}
      <main className="pt-20">
        <HeroSection onSearch={handleSearch} />
        
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
            {/* 资源概览 */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    经济学资源总览
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    浏览我们精心收集的经济学专题资源，涵盖学习、研究、数据、政策等各个方面
                  </p>
                </div>

                {/* 资源统计卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
                    { name: '学习专题', count: learningResourcesSpecial.length, color: 'bg-green-100 text-green-800', icon: '📚' },
                    { name: '媒体专题', count: mediaResourcesSpecial.length, color: 'bg-cyan-100 text-cyan-800', icon: '📰' },
                    { name: '政策专题', count: policySpecial.length, color: 'bg-blue-100 text-blue-800', icon: '🏛️' },
                    { name: '数据专题', count: dataSpecial.length, color: 'bg-indigo-100 text-indigo-800', icon: '📊' },
                    { name: '市场专题', count: marketSpecial.length, color: 'bg-pink-100 text-pink-800', icon: '📈' },
                    { name: '工具专题', count: toolsSpecial.length, color: 'bg-amber-100 text-amber-800', icon: '🔧' },
                    { name: '顶刊专题', count: topJournalsResources.length, color: 'bg-purple-100 text-purple-800', icon: '⭐' },
                    { name: '德国专题', count: germanEconomicsResources.length, color: 'bg-orange-100 text-orange-800', icon: '🇩🇪' }
                  ].map((category, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                          {category.count} 个资源
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 快速搜索建议 */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">快速搜索建议</h3>
                  <p className="text-gray-600 mb-6">试试这些热门搜索词，快速找到您需要的资源</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['FRED', 'IMF', 'MIT', '世界银行', '央行', '德国', 'Economist', '顶级期刊', 'Bloomberg', '数据分析'].map((keyword) => (
                      <button
                        key={keyword}
                        onClick={() => handleSearch(keyword)}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors border border-gray-200"
                      >
                        {keyword}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 功能特色 */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    为什么选择 EconWeb
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    我们致力于为经济学研究者和学习者提供最全面、最权威的资源导航服务
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">智能搜索</h3>
                    <p className="text-gray-600">
                      基于相关性的智能搜索算法，快速定位您需要的经济学资源
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">权威精选</h3>
                    <p className="text-gray-600">
                      精心筛选来自顶级机构和权威媒体的高质量经济学资源
                    </p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">全球视野</h3>
                    <p className="text-gray-600">
                      覆盖全球主要经济体的资源，特别关注德国经济学研究
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
} 