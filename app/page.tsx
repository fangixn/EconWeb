'use client';

import { useState } from 'react';
import { Search, BarChart3, BookOpen, TrendingUp, Database, FileText, Users, Globe, Mail, ExternalLink, Filter, ArrowRight, MapPin, Building, GraduationCap, Wrench, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Language, getTranslation } from '@/lib/i18n';

// 整合的数据结构
const functionalCategories = {
  "找数据": {
    title: "数据获取",
    description: "获取宏观经济数据、微观调查数据和景气指数",
    icon: Database,
    subcategories: {
      "宏观数据库": [
        {
          name: "国家统计局数据库",
          url: "http://www.stats.gov.cn",
          description: "覆盖3881个统计指标，含月度/季度/年度及普查数据",
          tags: ["中国", "免费", "官方"]
        },
        {
          name: "世界银行Open Data",
          url: "https://data.worldbank.org",
          description: "免费全球发展数据平台，涵盖经济、社会、环境等领域",
          tags: ["国际", "免费", "多语言"]
        },
        {
          name: "FRED经济数据",
          url: "https://fred.stlouisfed.org",
          description: "美联储经济数据库，含50万+时间序列",
          tags: ["美国", "API", "实时"]
        }
      ],
      "微观调查库": [
        {
          name: "中国家庭金融调查(CHFS)",
          url: "http://chfs.swufe.edu.cn",
          description: "家庭资产/负债微观数据(2011-2023)",
          tags: ["微观", "需申请", "中国"]
        }
      ]
    }
  },
  "读政策": {
    title: "政策研读",
    description: "获取最新政策文件、央行报告和政策解读",
    icon: FileText,
    subcategories: {
      "中国政策": [
        {
          name: "国务院政策解读专栏",
          url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
          description: "中央一号文件、经济改革等权威解读",
          tags: ["官方", "实时", "中国"]
        }
      ],
      "国际组织": [
        {
          name: "IMF政策追踪",
          url: "https://www.imf.org/en/Publications/Policy-Papers",
          description: "全球财政货币政策分析",
          tags: ["国际", "英文", "权威"]
        }
      ]
    }
  },
  "做研究": {
    title: "学术研究",
    description: "学术论文、研究工具和智库资源",
    icon: BookOpen,
    subcategories: {
      "学术平台": [
        {
          name: "RePEc/IDEAS",
          url: "https://ideas.repec.org",
          description: "全球最大经济学论文库(300万+篇)",
          tags: ["论文", "免费", "全球"]
        }
      ]
    }
  },
  "看市场": {
    title: "市场分析",
    description: "行业分析、投资工具和公司数据",
    icon: TrendingUp,
    subcategories: {
      "投资工具": [
        {
          name: "MacroMicro产业图谱",
          url: "https://sc.macromicro.me/collections",
          description: "产业链数据可视化工具",
          tags: ["全球", "交互", "可视化"]
        }
      ]
    }
  }
};

const resourceTypeCategories = {
  "报告发布机构": {
    title: "权威机构",
    description: "国际组织和政府机构的官方报告",
    icon: Building,
    resources: [
      {
        name: "IMF（国际货币基金组织）",
        url: "https://www.imf.org",
        description: "全球宏观经济分析、地区展望、金融稳定报告",
        tags: ["国际", "权威", "多语言"]
      },
      {
        name: "世界银行（World Bank）",
        url: "https://www.worldbank.org",
        description: "发展经济研究、数据分析与发展报告",
        tags: ["国际", "发展", "免费"]
      }
    ]
  },
  "论文与学术资源": {
    title: "学术论文",
    description: "经济学论文库和学术资源平台",
    icon: GraduationCap,
    resources: [
      {
        name: "SSRN",
        url: "https://www.ssrn.com",
        description: "各类社会科学领域工作论文下载",
        tags: ["论文", "免费", "预印本"]
      }
    ]
  },
  "数据与统计资源": {
    title: "数据统计",
    description: "经济数据库和统计平台",
    icon: BarChart3,
    resources: [
      {
        name: "FRED",
        url: "https://fred.stlouisfed.org",
        description: "美国及全球宏观经济指标数据库",
        tags: ["数据", "API", "免费"]
      }
    ]
  }
};

const germanSpecialResources = {
  title: "德国经济专题",
  description: "德国经济相关的专业资源和机构",
  icon: MapPin,
  categories: {
    "核心机构": [
      {
        name: "德国央行",
        url: "https://www.bundesbank.de",
        description: "货币政策报告与金融稳定数据",
        tags: ["央行", "权威", "德国"]
      }
    ]
  }
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState<'functional' | 'resource'>('functional');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en'); // 默认英文

  const t = (key: string) => getTranslation(currentLanguage, key);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">{t('site_name')}</span>
              <span className="text-sm text-slate-500 hidden sm:inline">{t('site_subtitle')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_home')}</a>
                <a href="#functional" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_functional')}</a>
                <a href="#resources" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_resources')}</a>
                <a href="#german" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_german')}</a>
                <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_faq')}</a>
              </nav>
              <LanguageSwitcher 
                currentLanguage={currentLanguage} 
                onLanguageChange={setCurrentLanguage} 
              />
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="space-y-2">
                <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_home')}</a>
                <a href="#functional" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_functional')}</a>
                <a href="#resources" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_resources')}</a>
                <a href="#german" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_german')}</a>
                <a href="#faq" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_faq')}</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('hero_title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> {t('hero_title_highlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => document.getElementById('functional')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Database className="w-5 h-5 mr-2" />
              {t('btn_find_data')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {t('btn_learn')}
            </Button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder={t('search_placeholder')}
              className="pl-12 pr-20 py-4 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => handleSearch(searchTerm)}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-slate-500">{t('popular_tags')}</span>
            {['FRED', 'IMF', 'World Bank', 'SSRN', 'Bundesbank', 'Stats.gov.cn'].map((tag) => (
              <button
                key={tag}
                onClick={() => handleSearch(tag)}
                className="px-3 py-1 text-sm bg-white/60 hover:bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Toggle */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-slate-100 rounded-lg p-1 flex">
              <Button
                variant={activeView === 'functional' ? 'default' : 'ghost'}
                onClick={() => setActiveView('functional')}
                className="px-6 py-2"
              >
                {t('toggle_functional')}
              </Button>
              <Button
                variant={activeView === 'resource' ? 'default' : 'ghost'}
                onClick={() => setActiveView('resource')}
                className="px-6 py-2"
              >
                {t('toggle_resource')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Navigation */}
      {activeView === 'functional' && (
        <section id="functional" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('functional_title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('functional_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(functionalCategories).map(([key, category]) => (
                <Card key={key} className="group hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 group-hover:scale-110 transition-transform">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-slate-900">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 mt-1">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {Object.entries(category.subcategories).map(([subKey, resources]) => (
                        <AccordionItem key={subKey} value={subKey} className="border-slate-200">
                          <AccordionTrigger className="text-left hover:no-underline">
                            <div className="flex items-center justify-between w-full">
                              <span className="font-medium text-slate-900">{subKey}</span>
                              <Badge variant="secondary" className="ml-2">
                                {resources.length}
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 pt-2">
                              {resources.map((resource, index) => (
                                <div 
                                  key={index} 
                                  className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group/item cursor-pointer"
                                  onClick={() => window.open(resource.url, '_blank')}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-slate-900 mb-1 group-hover/item:text-blue-600">
                                        {resource.name}
                                      </h4>
                                      <p className="text-sm text-slate-600 mb-2">
                                        {resource.description}
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {resource.tags.map((tag, tagIndex) => (
                                          <Badge 
                                            key={tagIndex} 
                                            variant="outline" 
                                            className="text-xs"
                                          >
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 ml-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-slate-400" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resource Type Navigation */}
      {activeView === 'resource' && (
        <section id="resources" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('resource_title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('resource_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(resourceTypeCategories).map(([key, category]) => (
                <Card key={key} className="group hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-lg p-3 group-hover:scale-110 transition-transform">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-600">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.resources.slice(0, 3).map((resource, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          <div className="flex-1">
                            <p className="font-medium text-slate-900 text-sm">{resource.name}</p>
                            <p className="text-xs text-slate-600 mt-1">{resource.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-slate-400 hover:text-blue-600 transition-colors" />
                        </div>
                      ))}
                      <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200 hover:bg-blue-50">
                        {t('view_all')} {category.resources.length} {t('resources')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* German Special Section */}
      <section id="german" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t('german_title')}
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('german_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(germanSpecialResources.categories).map(([key, resources]) => (
              <Card key={key} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {key}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-lg bg-white border border-orange-100 hover:border-orange-200 transition-colors cursor-pointer"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 mb-1 hover:text-orange-600 transition-colors">
                              {resource.name}
                            </h4>
                            <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {resource.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs border-orange-200 text-orange-700">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-orange-400 hover:text-orange-600 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('faq_title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('faq_subtitle')}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: 'faq_q1', a: 'faq_a1' },
              { q: 'faq_q2', a: 'faq_a2' },
              { q: 'faq_q3', a: 'faq_a3' }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 transition-colors">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">EconNav</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                {t('footer_description')}
              </p>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>fangin1230@gmail.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">{t('nav_home')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors">{t('nav_functional')}</a></li>
                <li><a href="#resources" className="hover:text-blue-400 transition-colors">{t('nav_resources')}</a></li>
                <li><a href="#german" className="hover:text-blue-400 transition-colors">{t('nav_german')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('main_categories')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('find_data')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('read_policy')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('do_research')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('watch_market')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 EconNav. All rights reserved. Created by fangxin.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}