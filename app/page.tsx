'use client';

import { useState, useEffect } from 'react';
import { Search, Building, FileText, TrendingUp, Globe, Users, Database, BookOpen, GraduationCap, Wrench, ExternalLink, Filter, Mail, MapPin, Star, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { economicsCategories, germanEconomicsResources } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
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

  // Filter resources with intelligent search logic
  const filterResources = (resources: any[]) => {
    if (!searchTerm && !selectedTag) {
      return resources; // No filters applied
    }

    const results = resources.map((resource: any) => {
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === null || resource.tags.includes(selectedTag);
      
      // Calculate relevance score
      let score = 0;
      if (matchesSearch && matchesTag) {
        score = 3; // Perfect match - both search term and tag
      } else if (matchesSearch && selectedTag) {
        score = 2; // Matches search but not tag
      } else if (matchesTag && searchTerm) {
        score = 1; // Matches tag but not search
      } else if (matchesSearch || matchesTag) {
        score = 1; // Matches either search or tag (when only one filter is active)
      }
      
      return { resource, score };
    })
    .filter(item => item.score > 0) // Only include resources with some relevance
    .sort((a, b) => b.score - a.score) // Sort by relevance score (highest first)
    .map(item => item.resource); // Extract the resource objects

    return results;
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
              <Button variant="outline" size="sm" onClick={() => scrollToSection('resources')}>{t('btn_get_started')}</Button>
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
                <Button variant="outline" size="sm" className="w-fit" onClick={() => scrollToSection('resources')}>{t('btn_get_started')}</Button>
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

            {/* Popular Tags */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <p className="text-sm text-gray-500">{t('popular_tags')}</p>
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
              <div className="flex flex-wrap justify-center gap-3">
                {getAllTags().slice(0, 8).map((tag: string) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                      selectedTag === tag 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {getResourceTranslation(currentLanguage, 'tags', tag) || tag}
                    {selectedTag === tag && (
                      <X className="ml-2 w-3 h-3" />
                    )}
                  </Badge>
                ))}
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
          </div>

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
                        <CardDescription className="text-sm text-gray-500">
                          {filteredResources.length} {t('resources_count')}
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
        </div>
      </section>

      {/* German Economics Special Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
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