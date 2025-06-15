'use client';

import { useState, useEffect } from 'react';
import { Search, Building, FileText, TrendingUp, Globe, Users, Database, BookOpen, GraduationCap, Wrench, ExternalLink, Filter, Mail, MapPin, Star, ChevronDown, Menu, X, ArrowRight, HelpCircle, Target, Grid3X3, Lightbulb, BookmarkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { economicsCategories, germanEconomicsResources, topJournalsResources } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getJournalTranslation } from '@/lib/journalsI18n';
import { getResourceTranslation } from '@/lib/resourcesI18n';
import { getCategoryTranslation } from '@/lib/i18n';

// Icon mapping
const iconMap = {
  Building,
  FileText,
  TrendingUp,
  Globe,
  Users,
  Database,
  BookOpen,
  GraduationCap,
  Wrench
};

export default function Home() {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.resources-dropdown')) {
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 搜索提交时滚动到资源部分
    scrollToSection('resources');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      scrollToSection('resources');
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedTag(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const toggleCategoryExpansion = (categoryKey: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryKey)) {
      newExpanded.delete(categoryKey);
    } else {
      newExpanded.add(categoryKey);
    }
    setExpandedCategories(newExpanded);
  };

  // Get all tags
  const getAllTags = () => {
    const tags = new Set<string>();
    Object.values(economicsCategories).forEach(category => {
      category.resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags);
  };

  // Get curated popular tags (limited to 8) - 选择更具区分度的标签
  const getPopularTags = () => {
    return [
      'Free',        // 免费资源
      'Data',        // 数据相关
      'Academic',    // 学术资源
      'China',       // 中国相关
      'Germany',     // 德国相关
      'Policy',      // 政策相关
      'API',         // 有API接口
      'Real-time'    // 实时更新
    ];
  };

  // 获取所有资源（合并三个数据源）
  const getAllResources = () => {
    const allResources: any[] = [];
    
    // 从主要分类中获取资源
    Object.entries(economicsCategories).forEach(([categoryKey, category]) => {
      category.resources.forEach(resource => {
        allResources.push({
          ...resource,
          category: categoryKey,
          source: 'main'
        });
      });
    });
    
    // 添加顶级期刊资源
    topJournalsResources.forEach(journal => {
      allResources.push({
        ...journal,
        category: 'top-journals',
        source: 'journals'
      });
    });
    
    // 添加德国经济学资源
    germanEconomicsResources.forEach(resource => {
      allResources.push({
        ...resource,
        category: 'german',
        source: 'german'
      });
    });
    
    return allResources;
  };

  // Filter resources with intelligent search logic
  const filterResources = (resources: any[]) => {
    if (!searchTerm && !selectedTag) {
      return resources; // No filters applied
    }

    const results = resources.filter((resource: any) => {
      // 搜索逻辑：只有当搜索词不为空时才进行搜索匹配
      let matchesSearch = true;
      if (searchTerm && searchTerm.trim() !== '') {
        const searchLower = searchTerm.toLowerCase().trim();
        
        // 1. 搜索原始英文内容
        const matchesOriginal = 
          resource.name.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          resource.tags.some((tag: string) => tag.toLowerCase().includes(searchLower));
        
        // 2. 搜索翻译后的资源名称
        const translatedName = getResourceTranslation(currentLanguage, 'resources', resource.name);
        const matchesTranslatedName = translatedName.toLowerCase().includes(searchLower);
        
        // 3. 搜索翻译后的标签
        const matchesTranslatedTags = resource.tags.some((tag: string) => {
          const translatedTag = getResourceTranslation(currentLanguage, 'tags', tag);
          return translatedTag.toLowerCase().includes(searchLower);
        });

        // 4. 智能关键词识别和扩展 - 多语言支持
        const getSmartKeywords = (searchTerm: string): string[] => {
          const keywords: string[] = [searchTerm]; // 保留原搜索词
          
          // 期刊缩写扩展
          const journalAbbrevs: Record<string, string[]> = {
            'aer': ['american economic review', 'aea'],
            'qje': ['quarterly journal of economics', 'quarterly'],
            'jpe': ['journal of political economy', 'political economy'],
            'restud': ['review of economic studies', 'economic studies'],
            'jf': ['journal of finance', 'finance journal'],
            'jfe': ['journal of financial economics', 'financial economics'],
            'rfs': ['review of financial studies', 'financial studies']
          };
          
                     // 多语言概念映射
           const conceptMappings: Record<string, string[]> = {
             // 中文
             '数据': ['data', 'database', 'statistics', 'statistical'],
             '宏观': ['macro', 'macroeconomic', 'fred', 'imf', 'world bank', 'economic indicators'],
             '微观': ['micro', 'microdata', 'survey', 'household', 'firm'],
             '央行': ['central bank', 'monetary', 'pboc', 'federal reserve', 'ecb'],
             '货币': ['monetary', 'currency', 'central bank'],
             '政策zh': ['policy', 'government', 'regulation', 'official', 'report'],
             '期刊': ['journal', 'review', 'quarterly', 'economic'],
             '顶级': ['top tier', 'premier', 'leading', 'flagship'],
             '课程': ['course', 'learning', 'education', 'university', 'academy'],
             '学习': ['learning', 'course', 'education', 'study'],
             '入门': ['beginner', 'introduction', 'basic', 'khan'],
             '高级': ['advanced', 'graduate', 'phd', 'mit', 'harvard'],
             '实时': ['real-time', 'live', 'current', 'updated'],
             '中国': ['china', 'chinese', 'pboc', 'stats.gov.cn', 'beijing'],
             '德国': ['germany', 'german', 'bundesbank', 'destatis', 'berlin'],
             
             // 英文
             'data': ['database', 'statistics', 'statistical', '数据'],
             'macro': ['macroeconomic', 'fred', 'imf', 'world bank', '宏观'],
             'micro': ['microdata', 'survey', 'household', 'firm', '微观'],
             'monetary': ['central bank', 'currency', '货币', '央行'],
             'policy': ['government', 'regulation', 'official'],
             'journal_en': ['review', 'quarterly', 'economic', '期刊'],
             'learning': ['course', 'education', 'study', '学习'],
             'beginner': ['introduction', 'basic', 'khan', '入门'],
             'advanced': ['graduate', 'phd', 'mit', 'harvard', '高级'],
             'china': ['chinese', 'pboc', '中国'],
             'germany': ['german', 'bundesbank', '德国'],
             
             // 韩文
             '데이터': ['data', 'database', 'statistics'],
             '거시': ['macro', 'macroeconomic'],
             '미시': ['micro', 'microdata'],
             '화폐': ['monetary', 'currency'],
             '정책': ['policy', 'government'],
             '저널': ['journal', 'review'],
             '학습': ['learning', 'course'],
             
             // 日文
             'データ': ['data', 'database', 'statistics'],
             'マクロ': ['macro', 'macroeconomic'],
             'ミクロ': ['micro', 'microdata'],
             '金融': ['finance', 'monetary'],
             '政策ja': ['policy', 'government'],
             'ジャーナル': ['journal', 'review'],
             '学習': ['learning', 'course'],
             
             // 德文
             'daten': ['data', 'database', 'statistics'],
             'makro': ['macro', 'macroeconomic'],
             'mikro': ['micro', 'microdata'],
             'währung': ['monetary', 'currency'],
             'politik': ['policy', 'government'],
             'journal_de': ['review', 'zeitschrift'],
             'lernen': ['learning', 'course']
           };
          
          // 检查概念映射
          for (const [concept, expansions] of Object.entries(conceptMappings)) {
            if (searchTerm.toLowerCase().includes(concept.toLowerCase())) {
              keywords.push(...expansions);
            }
          }
          
          // 检查精确匹配的缩写
          const exactMatch = journalAbbrevs[searchTerm.toLowerCase()];
          if (exactMatch) {
            keywords.push(...exactMatch);
          }
          
                     return Array.from(new Set(keywords)); // 去重
        };
        
        // 5. 智能关键词匹配
        let matchesKeywords = false;
        const smartKeywords = getSmartKeywords(searchLower);
        if (smartKeywords.length > 1) { // 如果有扩展关键词
          matchesKeywords = smartKeywords.some(keyword => 
            resource.name.toLowerCase().includes(keyword.toLowerCase()) ||
            resource.description.toLowerCase().includes(keyword.toLowerCase()) ||
            resource.tags.some((tag: string) => tag.toLowerCase().includes(keyword.toLowerCase()))
          );
        }
        
        // 只有匹配任一条件才通过搜索筛选
        matchesSearch = matchesOriginal || matchesTranslatedName || matchesTranslatedTags || matchesKeywords;
      }
      
      // 标签筛选逻辑
      const matchesTag = selectedTag === null || resource.tags.includes(selectedTag);
      
      // 必须同时满足搜索和标签条件
      return matchesSearch && matchesTag;
    });

    // 按相关性排序
    if (searchTerm && searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase().trim();
      return results.sort((a, b) => {
        // 计算相关性得分
        const scoreA = calculateRelevanceScore(a, searchLower);
        const scoreB = calculateRelevanceScore(b, searchLower);
        return scoreB - scoreA;
      });
    }

    return results;
  };

  // 计算资源的相关性得分
  const calculateRelevanceScore = (resource: any, searchLower: string) => {
    let score = 0;
    
    // 名称完全匹配得分最高
    if (resource.name.toLowerCase().includes(searchLower)) {
      score += resource.name.toLowerCase() === searchLower ? 10 : 5;
    }
    
    // 描述匹配
    if (resource.description.toLowerCase().includes(searchLower)) {
      score += 3;
    }
    
    // 标签匹配
    resource.tags.forEach((tag: string) => {
      if (tag.toLowerCase().includes(searchLower)) {
        score += tag.toLowerCase() === searchLower ? 8 : 2;
      }
    });
    
    // 翻译内容匹配
    const translatedName = getResourceTranslation(currentLanguage, 'resources', resource.name);
    if (translatedName.toLowerCase().includes(searchLower)) {
      score += translatedName.toLowerCase() === searchLower ? 10 : 4;
    }
    
    return score;
  };

  const features = [
    {
      icon: Search,
      title: t('feature_smart_title') || "Smart Discovery",
      description: t('feature_smart_desc') || "Advanced search and filtering to help you find exactly what you need from thousands of economics resources."
    },
    {
      icon: TrendingUp,
      title: t('feature_updates_title') || "Real-time Updates",
      description: t('feature_updates_desc') || "Stay current with the latest economic data, research, and policy developments as they happen."
    },
    {
      icon: Globe,
      title: t('feature_global_title') || "Global Coverage",
      description: t('feature_global_desc') || "Access resources from leading institutions worldwide, with special focus on German economics."
    },
    {
      icon: Database,
      title: t('feature_database_title') || "Comprehensive Database",
      description: t('feature_database_desc') || "Curated collection of high-quality resources across all major economics disciplines and specializations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{t('site_name')}</h1>
                <p className="text-xs text-gray-500">{t('site_subtitle')}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav_home')}</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors">{t('menu_features')}</button>
              <button onClick={() => scrollToSection('top-journals')} className="text-gray-600 hover:text-gray-900 transition-colors">{t('top_journals_nav') || '顶刊专题'}</button>
              <button onClick={() => scrollToSection('german')} className="text-gray-600 hover:text-gray-900 transition-colors">{t('german_nav') || '德国专题'}</button>
              
              {/* Resources Dropdown */}
              <div className="relative resources-dropdown">
                <button 
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>{t('menu_resources')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isResourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
                      {t('main_categories')}
                    </div>
                    {Object.entries(economicsCategories).map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => scrollToSection(`category-${key}`)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {getCategoryTranslation(currentLanguage, key, 'title')}
                      </button>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={() => scrollToSection('resources')}
                        className="w-full text-left px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {t('view_all')} {t('menu_resources')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <LanguageSwitcher />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">{t('nav_home')}</button>
                <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">{t('menu_features')}</button>
                <button onClick={() => scrollToSection('top-journals')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">{t('top_journals_nav') || '顶刊专题'}</button>
                <button onClick={() => scrollToSection('german')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">{t('german_nav') || '德国专题'}</button>
                
                {/* Mobile Resources Dropdown */}
                <div className="resources-dropdown">
                  <button 
                    onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 transition-colors text-left"
                  >
                    <span>{t('menu_resources')}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isResourcesDropdownOpen && (
                    <div className="mt-2 pl-4 space-y-2">
                      {Object.entries(economicsCategories).map(([key, category]) => (
                        <button
                          key={key}
                          onClick={() => scrollToSection(`category-${key}`)}
                          className="block w-full text-left text-sm text-gray-500 hover:text-blue-600 transition-colors py-1"
                        >
                          {getCategoryTranslation(currentLanguage, key, 'title')}
                        </button>
                      ))}
                      <button
                        onClick={() => scrollToSection('resources')}
                        className="block w-full text-left text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors py-1 border-t border-gray-100 pt-2"
                      >
                        {t('view_all')} {t('menu_resources')}
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero_title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('hero_title_highlight')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t('search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-14 pr-32 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 bg-white shadow-sm"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  {searchTerm && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </Button>
                  )}
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                  >
                    {t('search_btn') || 'Search'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Search Tips */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <p className="text-sm text-gray-500">💡 {t('search_tips_title')}</p>
                {(searchTerm || selectedTag) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    {t('clear_filters') || 'Clear all'}
                  </Button>
                )}
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg">🔍</span>
                  <span className="text-base font-medium text-gray-700">{t('search_tips_title')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">{t('search_smart_search')}</span>
                    <span className="ml-1">{t('search_smart_search_desc')}</span>
                  </div>
                  <div>
                    <span className="font-medium">{t('search_journal_abbrev')}</span>
                    <span className="ml-1">{t('search_journal_abbrev_desc')}</span>
                  </div>
                  <div>
                    <span className="font-medium">{t('search_region_search')}</span>
                    <span className="ml-1">{t('search_region_search_desc')}</span>
                  </div>
                  <div>
                    <span className="font-medium">{t('search_concept_search')}</span>
                    <span className="ml-1">{t('search_concept_search_desc')}</span>
                  </div>
                </div>
              </div>
              {(searchTerm || selectedTag) && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    {searchTerm && selectedTag && (
                      <>
                        {t('searching_for') || 'Searching for'}: "<span className="font-medium">{searchTerm}</span>" 
                        <span className="mx-2">+</span>
                        {t('filtered_by') || 'Filtered by'}: <span className="font-medium">{getResourceTranslation(currentLanguage, 'tags', selectedTag) || selectedTag}</span>
                        <br />
                        <span className="text-xs text-gray-400 mt-1 block">
                          {currentLanguage === 'zh' ? '智能排序：优先显示同时匹配的结果' : 
                           currentLanguage === 'ko' ? '스마트 정렬: 모두 일치하는 결과 우선 표시' :
                           currentLanguage === 'ja' ? 'スマートソート：両方に一致する結果を優先表示' :
                           currentLanguage === 'de' ? 'Intelligente Sortierung: Ergebnisse mit beiden Übereinstimmungen zuerst' :
                           'Smart sorting: Results matching both criteria shown first'}
                        </span>
                      </>
                    )}
                    {searchTerm && !selectedTag && `${t('searching_for') || 'Searching for'}: "${searchTerm}"`}
                    {!searchTerm && selectedTag && `${t('filtered_by') || 'Filtered by'}: ${getResourceTranslation(currentLanguage, 'tags', selectedTag) || selectedTag}`}
                  </p>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl"
                onClick={() => scrollToSection('resources')}
              >
                {t('btn_view_resources')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section id="guide" className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-slate-100 px-6 py-3 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-slate-600" />
              <span className="text-slate-800 font-medium">{t('usage_guide')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('usage_guide_title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('usage_guide_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 功能导航 */}
            <div className="group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="p-6 bg-white border border-blue-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50/30">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guide_functional_title')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('guide_functional_desc')}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>{t('guide_functional_tip1')}</div>
                  <div>{t('guide_functional_tip2')}</div>
                  <div>{t('guide_functional_tip3')}</div>
                  <div>{t('guide_functional_tip4')}</div>
                </div>
              </div>
            </div>

            {/* 资源分类 */}
            <div className="group cursor-pointer" onClick={() => scrollToSection('resources')}>
              <div className="p-6 bg-white border border-green-100 rounded-2xl hover:border-green-200 hover:shadow-lg transition-all duration-300 group-hover:bg-green-50/30">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Grid3X3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guide_resources_title')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('guide_resources_desc')}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>{t('guide_resources_tip1')}</div>
                  <div>{t('guide_resources_tip2')}</div>
                  <div>{t('guide_resources_tip3')}</div>
                  <div>{t('guide_resources_tip4')}</div>
                </div>
              </div>
            </div>

            {/* 顶刊专题 */}
            <div className="group cursor-pointer" onClick={() => scrollToSection('top-journals')}>
              <div className="p-6 bg-white border border-purple-100 rounded-2xl hover:border-purple-200 hover:shadow-lg transition-all duration-300 group-hover:bg-purple-50/30">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guide_journals_title')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('guide_journals_desc')}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>{t('guide_journals_tip1')}</div>
                  <div>{t('guide_journals_tip2')}</div>
                  <div>{t('guide_journals_tip3')}</div>
                  <div>{t('guide_journals_tip4')}</div>
                </div>
              </div>
            </div>

            {/* 德国专题 */}
            <div className="group cursor-pointer" onClick={() => scrollToSection('german')}>
              <div className="p-6 bg-white border border-orange-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all duration-300 group-hover:bg-orange-50/30">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('guide_german_title')}</h3>
                <p className="text-sm text-gray-600 mb-3">{t('guide_german_desc')}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>{t('guide_german_tip1')}</div>
                  <div>{t('guide_german_tip2')}</div>
                  <div>{t('guide_german_tip3')}</div>
                  <div>{t('guide_german_tip4')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 快速提示 */}
          <div className="mt-12 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('quick_tips_title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{t('quick_tip_search')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{t('quick_tip_filter')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookmarkIcon className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span>{t('quick_tip_bookmark')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('features_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('resource_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('resource_subtitle')}
            </p>
            
            {/* 筛选结果统计 */}
            {(searchTerm || selectedTag) && (
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">
                    {(() => {
                      const allResources = getAllResources();
                      const totalResults = filterResources(allResources).length;
                      const totalResources = allResources.length;
                      return `找到 ${totalResults} 个资源 (共 ${totalResources} 个)`;
                    })()}
                  </span>
                </div>
                {searchTerm && selectedTag && (
                  <p className="text-sm text-blue-600 mt-2">
                    搜索 "{searchTerm}" + 筛选 "{getResourceTranslation(currentLanguage, 'tags', selectedTag) || selectedTag}"
                  </p>
                )}
                {searchTerm && !selectedTag && (
                  <p className="text-sm text-blue-600 mt-2">
                    搜索 "{searchTerm}"
                  </p>
                )}
                {!searchTerm && selectedTag && (
                  <p className="text-sm text-blue-600 mt-2">
                    筛选 "{getResourceTranslation(currentLanguage, 'tags', selectedTag) || selectedTag}"
                  </p>
                )}
              </div>
            )}
          </div>

          {/* 搜索结果展示 */}
          {(searchTerm || selectedTag) ? (
            <div className="space-y-6">
              {(() => {
                const allResources = getAllResources();
                const filteredResults = filterResources(allResources);
                
                if (filteredResults.length === 0) {
                  return (
                    <div className="text-center py-12">
                      <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">未找到匹配的资源</h3>
                      <p className="text-gray-500 mb-4">请尝试使用其他关键词或清除筛选条件</p>
                      <Button onClick={clearSearch} variant="outline">
                        清除所有筛选条件
                      </Button>
                    </div>
                  );
                }
                
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResults.map((resource, index) => (
                      <div key={`${resource.source}-${index}`} className="group cursor-pointer">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50/30"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-3">
                                {resource.source === 'journals' && (
                                  <div className="inline-flex items-center space-x-1 bg-purple-100 px-2 py-1 rounded-full">
                                    <Star className="w-3 h-3 text-purple-600" />
                                    <span className="text-purple-800 font-medium text-xs">顶级期刊</span>
                                  </div>
                                )}
                                {resource.source === 'german' && (
                                  <div className="inline-flex items-center space-x-1 bg-orange-100 px-2 py-1 rounded-full">
                                    <MapPin className="w-3 h-3 text-orange-600" />
                                    <span className="text-orange-800 font-medium text-xs">德国专题</span>
                                  </div>
                                )}
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight mb-2">
                                {resource.source === 'journals' 
                                  ? getJournalTranslation(currentLanguage, resource.name)
                                  : getResourceTranslation(currentLanguage, 'resources', resource.name) || resource.name
                                }
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                                {resource.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3" />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {resource.tags.slice(0, 3).map((tag: string) => (
                              <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700 border-0 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                                {getResourceTranslation(currentLanguage, 'tags', tag) || tag}
                              </Badge>
                            ))}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(economicsCategories).map(([key, category]) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                const filteredResources = filterResources(category.resources);
              
              return (
                <Card key={key} id={`category-${key}`} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {getCategoryTranslation(currentLanguage, key, 'title')}
                        </CardTitle>
                        <CardDescription className={`text-sm ${
                          filteredResources.length !== category.resources.length 
                            ? 'text-blue-600 font-medium' 
                            : 'text-gray-500'
                        }`}>
                          {filteredResources.length} {t('resources_count')}
                          {filteredResources.length !== category.resources.length && (
                            <span className="text-xs text-gray-400 ml-1">
                              / {category.resources.length}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {getCategoryTranslation(currentLanguage, key, 'desc')}
                    </p>
                    
                    <div className="space-y-4">
                      {(expandedCategories.has(key) ? filteredResources : filteredResources.slice(0, 3)).map((resource, index) => (
                        <div key={index} className="group cursor-pointer">
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group-hover:bg-blue-50/30"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                                {getResourceTranslation(currentLanguage, 'resources', resource.name) || resource.name}
                              </h4>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3" />
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {resource.tags.slice(0, 3).map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-xs px-3 py-1 bg-gray-100 text-gray-700 border-0 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                                  {getResourceTranslation(currentLanguage, 'tags', tag) || tag}
                                </Badge>
                              ))}
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                    
                    {filteredResources.length > 3 && (
                      <Button 
                        variant="ghost" 
                        className="w-full mt-4 text-blue-600 hover:text-blue-800"
                        onClick={() => toggleCategoryExpansion(key)}
                      >
                        {expandedCategories.has(key) 
                          ? t('btn_show_less')
                          : `${t('view_all')} ${filteredResources.length} ${t('resources')}`
                        }
                        <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${expandedCategories.has(key) ? 'rotate-90' : ''}`} />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* Top Journals Special Section */}
      <section id="top-journals" className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-purple-100 px-6 py-3 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium">{t('top_journals_focus') || '顶级期刊'}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('top_journals_title') || '顶级学术期刊'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('top_journals_subtitle') || '经济学领域最权威的学术发表平台，汇集全球顶尖经济学研究成果'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topJournalsResources.map((journal, index) => (
              <div key={index} className="group cursor-pointer">
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 bg-white border border-purple-100 rounded-3xl hover:border-purple-200 hover:shadow-xl transition-all duration-300 group-hover:bg-purple-50/30"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-full">
                          <BookOpen className="w-4 h-4 text-purple-600" />
                          <span className="text-purple-800 font-medium text-sm">Top Tier</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight mb-3">
                        {getJournalTranslation(currentLanguage, journal.name)}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {journal.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {journal.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-sm px-4 py-2 bg-purple-100 text-purple-800 border-0 group-hover:bg-purple-200 transition-colors">
                        {getResourceTranslation(currentLanguage, 'tags', tag) || tag}
                      </Badge>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* German Economics Special Section */}
      <section id="german" className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-orange-100 px-6 py-3 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-medium">{t('german_focus')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('german_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('german_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {germanEconomicsResources.map((resource, index) => (
              <div key={index} className="group cursor-pointer">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 bg-white border border-orange-100 rounded-3xl hover:border-orange-200 hover:shadow-xl transition-all duration-300 group-hover:bg-orange-50/30"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4 text-orange-600" />
                          <span className="text-orange-800 font-medium text-sm">{t('german_focus')}</span>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors leading-tight mb-3">
                        {getResourceTranslation(currentLanguage, 'resources', resource.name) || resource.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {resource.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-sm px-4 py-2 bg-orange-100 text-orange-800 border-0 group-hover:bg-orange-200 transition-colors">
                        {getResourceTranslation(currentLanguage, 'tags', tag) || tag}
                      </Badge>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">EconWeb</h3>
                                      <p className="text-sm text-gray-400">EconNavigator by EconomicsWeb</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {t('footer_description')}
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:fangin1230@gmail.com" className="hover:text-white transition-colors">
                  fangin1230@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t('quick_links')}</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors text-left">{t('footer_home')}</button>
                <button onClick={() => scrollToSection('features')} className="block text-gray-400 hover:text-white transition-colors text-left">{t('footer_features')}</button>
                <button onClick={() => scrollToSection('resources')} className="block text-gray-400 hover:text-white transition-colors text-left">{t('footer_resources')}</button>
                <button onClick={() => scrollToSection('top-journals')} className="block text-gray-400 hover:text-white transition-colors text-left">{t('footer_top_journals') || '顶级期刊'}</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t('main_categories')}</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                <button onClick={() => scrollToSection('category-数据获取')} className="text-gray-400 hover:text-white transition-colors text-left">{t('footer_data_sources')}</button>
                <button onClick={() => scrollToSection('category-学术研究')} className="text-gray-400 hover:text-white transition-colors text-left">{t('footer_research_papers')}</button>
                <button onClick={() => scrollToSection('category-政策研读')} className="text-gray-400 hover:text-white transition-colors text-left">{t('footer_policy_reports')}</button>
                <button onClick={() => scrollToSection('category-在线学习')} className="text-gray-400 hover:text-white transition-colors text-left">{t('footer_learning_resources')}</button>
                <button onClick={() => scrollToSection('category-组织机构')} className="text-gray-400 hover:text-white transition-colors text-left">{getCategoryTranslation(currentLanguage, '组织机构', 'title')}</button>
                <button onClick={() => scrollToSection('category-市场观察')} className="text-gray-400 hover:text-white transition-colors text-left">{getCategoryTranslation(currentLanguage, '市场观察', 'title')}</button>
                <button onClick={() => scrollToSection('category-财经资讯')} className="text-gray-400 hover:text-white transition-colors text-left">{getCategoryTranslation(currentLanguage, '财经资讯', 'title')}</button>
                <button onClick={() => scrollToSection('category-智库观点')} className="text-gray-400 hover:text-white transition-colors text-left">{getCategoryTranslation(currentLanguage, '智库观点', 'title')}</button>
                <button onClick={() => scrollToSection('category-实用工具')} className="text-gray-400 hover:text-white transition-colors text-left">{getCategoryTranslation(currentLanguage, '实用工具', 'title')}</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer_copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer_privacy')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer_terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}