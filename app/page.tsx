'use client';

import { useState } from 'react';
import { Search, Building, FileText, TrendingUp, Globe, Users, Database, BookOpen, GraduationCap, Wrench, ExternalLink, Filter, Mail, ArrowRight, MapPin, Star, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { economicsCategories, germanEconomicsResources } from '@/lib/data';
import { useLanguage } from '@/lib/useLanguage';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

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
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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

  // Filter resources
  const filterResources = (resources: any[]) => {
    return resources.filter((resource: any) => {
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === null || resource.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
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

  const faqItems = [
    {
      question: t('faq_q1'),
      answer: t('faq_a1')
    },
    {
      question: t('faq_q2'),
      answer: t('faq_a2')
    },
    {
      question: t('faq_q3'),
      answer: t('faq_a3')
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
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors">Features</button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-600 hover:text-gray-900 transition-colors">Resources</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav_faq')}</button>
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
                <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Features</button>
                <button onClick={() => scrollToSection('resources')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Resources</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">{t('nav_faq')}</button>
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
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t('search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-14 pr-6 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mb-12">
              <p className="text-sm text-gray-500 mb-4">{t('popular_tags')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {getAllTags().slice(0, 6).map((tag: string) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-2xl"
                onClick={() => scrollToSection('resources')}
              >
                {t('btn_start_exploring')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg rounded-2xl border-2"
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
                <Card key={key} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {filteredResources.length} resources
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3">
                      {(expandedCategories.has(key) ? filteredResources : filteredResources.slice(0, 3)).map((resource, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-blue-600 hover:text-blue-800 line-clamp-1"
                            >
                              {resource.name}
                            </a>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {resource.tags.slice(0, 2).map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('faq_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq_subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6 data-[state=open]:bg-gray-50"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('features')} className="block text-gray-400 hover:text-white transition-colors text-left">Features</button>
                <button onClick={() => scrollToSection('resources')} className="block text-gray-400 hover:text-white transition-colors text-left">Resources</button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-white transition-colors text-left">FAQ</button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{t('main_categories')}</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Data Sources</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Research Papers</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Policy Reports</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Learning Resources</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EconWeb. All rights reserved. Created by fangxin.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}