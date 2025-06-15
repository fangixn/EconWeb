'use client';

import { useState } from 'react';
import { Search, Building, FileText, TrendingUp, Globe, Users, Database, BookOpen, GraduationCap, Wrench, ExternalLink, Filter, Mail, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Language, getTranslation } from '@/lib/i18n';
import { economicsCategories, germanEconomicsResources, faqData } from '@/lib/data';

// 图标映射
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
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const t = (key: string) => getTranslation(currentLanguage, key);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // 获取所有标签
  const getAllTags = () => {
    const tags = new Set<string>();
    Object.values(economicsCategories).forEach(category => {
      category.resources.forEach(resource => {
        resource.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags);
  };

  // 过滤资源
  const filterResources = (resources: any[]) => {
    return resources.filter((resource: any) => {
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === null || resource.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 固定头部 */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                {t('siteTitle') || 'EconWeb - 经济学资源导航'}
              </h1>
            </div>
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              onLanguageChange={setCurrentLanguage} 
            />
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="pt-20">
        {/* Hero 区域 */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('heroTitle') || 'EconWeb 经济学导航'}
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('heroSubtitle') || '发现涵盖9个专业维度的全面经济学资源'}
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-80">
              {t('heroDescription') || '从组织机构到政策研读，从数据获取到学术研究——您的经济学资源一站式目的地'}
            </p>
            
            {/* 搜索框 */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t('searchPlaceholder') || '搜索经济学资源...'}
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-white/70 rounded-xl"
                />
              </div>
            </div>

            {/* 标签过滤 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedTag === null ? "secondary" : "outline"}
                onClick={() => setSelectedTag(null)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {t('allCategories') || '所有分类'}
              </Button>
                              {getAllTags().slice(0, 8).map((tag: string) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "secondary" : "outline"}
                    onClick={() => setSelectedTag(tag)}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    {tag}
                  </Button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                {t('getStarted') || '开始探索'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('learnMore') || '了解更多'}
              </Button>
            </div>
          </div>
        </section>

        {/* 主要分类展示 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                经济学资源分类导航
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                按照9个专业维度组织的经济学资源，为您提供全面的研究和学习支持
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(economicsCategories).map(([key, category]) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                const filteredResources = filterResources(category.resources);
                
                return (
                  <Card key={key} className="hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {t(`categorySections.${key}`) || category.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            {filteredResources.length} 个资源
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">
                        {t(`categoryDescriptions.${key}`) || category.description}
                      </p>
                      
                      <div className="space-y-4">
                        {filteredResources.slice(0, 3).map((resource, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
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
                                {resource.tags.slice(0, 3).map((tag: string) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {filteredResources.length > 3 && (
                        <Button variant="outline" className="w-full mt-4" size="sm">
                          查看全部 ({filteredResources.length - 3} 个更多)
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 德国经济专题 */}
        <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('germanSection.title') || '德国经济专题'}
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('germanSection.description') || '精选德国权威经济机构和研究资源集合'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {germanEconomicsResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <ExternalLink className="w-5 h-5 text-orange-600 mr-2" />
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800"
                      >
                        {resource.name}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ 区域 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('faqTitle') || '常见问题'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('faqSubtitle') || '关于获取经济学资源的常见问题'}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible>
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{t('footerTitle') || 'EconWeb'}</h3>
              </div>
              <p className="text-gray-400 mb-4">{t('footerDescription') || '您的综合经济学资源导航平台'}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">主要分类</h4>
              <ul className="space-y-2 text-gray-400">
                {Object.entries(economicsCategories).slice(0, 4).map(([key, category]) => (
                  <li key={key}>
                    <a href="#" className="hover:text-white transition-colors">
                      {t(`categorySections.${key}`) || category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">联系我们</h4>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@econweb.com</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EconWeb. {t('footerRights') || '版权所有。'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}