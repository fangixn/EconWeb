'use client';

import { useState } from 'react';
import { Search, Building, FileText, TrendingUp, Globe, Users, Database, BookOpen, GraduationCap, Wrench, ExternalLink, Filter, Mail, ArrowRight, MapPin, Star, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { economicsCategories, germanEconomicsResources } from '@/lib/data';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
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
      title: "Smart Discovery",
      description: "Advanced search and filtering to help you find exactly what you need from thousands of economics resources."
    },
    {
      icon: TrendingUp,
      title: "Real-time Updates",
      description: "Stay current with the latest economic data, research, and policy developments as they happen."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access resources from leading institutions worldwide, with special focus on German economics."
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Curated collection of high-quality resources across all major economics disciplines and specializations."
    }
  ];

  const faqItems = [
    {
      question: "What makes EconNav different from other economics resources?",
      answer: "EconNav is specifically designed for economics professionals and students. We curate only the highest quality resources from reputable institutions, organize them by both function and type, and provide advanced filtering to help you find exactly what you need quickly."
    },
    {
      question: "How often is the resource database updated?",
      answer: "Our team continuously monitors and updates the database. New resources are added weekly, and existing resources are reviewed monthly to ensure all links are active and information is current."
    },
    {
      question: "Is EconNav free to use?",
      answer: "Yes, EconNav is completely free to use. We believe that access to quality economics resources should be open to all researchers, students, and professionals worldwide."
    },
    {
      question: "How can I suggest new resources to be included?",
      answer: "We welcome suggestions from our community. You can contact us at fangin1230@gmail.com with your resource recommendations. We review all submissions and add high-quality resources that meet our standards."
    },
    {
      question: "What is the German Economics Focus section?",
      answer: "This section highlights resources specifically relevant to German economics, including German institutions, data sources, and research centers. It's particularly useful for researchers studying the German economy or European economics more broadly."
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
                <h1 className="text-xl font-semibold text-gray-900">EconNav</h1>
                <p className="text-xs text-gray-500">Economics Navigation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <Button variant="outline" size="sm">Get Started</Button>
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
                <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
                <Button variant="outline" size="sm" className="w-fit">Get Started</Button>
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
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Economics Excellence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Discover the most comprehensive collection of economics resources. From cutting-edge research to real-time data, find everything you need to stay ahead in the world of economics.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search economics resources..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-14 pr-6 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mb-12">
              <p className="text-sm text-gray-500 mb-4">Popular Tags:</p>
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-2xl">
                Start Exploring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg rounded-2xl border-2">
                View Resources
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
              Why Choose EconNav?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for economics professionals, researchers, and students who demand the best resources.
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
              Comprehensive Resource Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized by function and type, our curated collection covers every aspect of economics research and learning.
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
                      {filteredResources.slice(0, 3).map((resource, index) => (
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
                      <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-800">
                        View All {filteredResources.length} Resources
                        <ArrowRight className="ml-2 w-4 h-4" />
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our economics navigation platform.
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
                  <h3 className="text-xl font-semibold">EconNav</h3>
                  <p className="text-sm text-gray-400">Economics Navigation</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Your comprehensive guide to economics resources. Discover the best data sources, research papers, and tools to advance your understanding of economics.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:fangin1230@gmail.com" className="hover:text-white transition-colors">
                  fangin1230@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#resources" className="block text-gray-400 hover:text-white transition-colors">Resources</a>
                <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
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
              © 2025 EconNav. All rights reserved. Created by fangxin.
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