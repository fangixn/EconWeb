'use client';

import { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Home, BookOpen, Globe, Shield, Database, 
  TrendingUp, Wrench, Star, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { Language, getTranslation } from '@/lib/i18n';

interface NavigationProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: string;
  onViewChange: (view: string) => void;
  onSearch: (term: string) => void;
}

const getNavigationItems = (currentLanguage: Language) => [
  {
    id: 'home',
    icon: Home,
    label: getTranslation(currentLanguage, 'nav_home'),
    color: 'blue'
  },
  {
    id: 'learning',
    icon: BookOpen,
    label: getTranslation(currentLanguage, 'nav_learning'),
    color: 'green'
  },
  {
    id: 'media',
    icon: Globe,
    label: getTranslation(currentLanguage, 'nav_media'),
    color: 'cyan'
  },
  {
    id: 'policy',
    icon: Shield,
    label: getTranslation(currentLanguage, 'nav_policy'),
    color: 'blue'
  },
  {
    id: 'data',
    icon: Database,
    label: getTranslation(currentLanguage, 'nav_data'),
    color: 'indigo'
  },
  {
    id: 'market',
    icon: TrendingUp,
    label: getTranslation(currentLanguage, 'nav_market'),
    color: 'pink'
  },
  {
    id: 'tools',
    icon: Wrench,
    label: getTranslation(currentLanguage, 'nav_tools'),
    color: 'amber'
  },
  {
    id: 'top-journals',
    icon: Star,
    label: getTranslation(currentLanguage, 'nav_top_journals'),
    color: 'purple'
  },
  {
    id: 'german',
    icon: MapPin,
    label: getTranslation(currentLanguage, 'nav_german'),
    color: 'orange'
  }
];

export default function ImprovedNavigation({ 
  currentLanguage, 
  onLanguageChange, 
  activeView, 
  onViewChange,
  onSearch 
}: NavigationProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 检测屏幕尺寸
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colors = {
      blue: isActive ? 'bg-blue-100 text-blue-700 border-blue-200' : 'hover:bg-blue-50 hover:text-blue-600',
      green: isActive ? 'bg-green-100 text-green-700 border-green-200' : 'hover:bg-green-50 hover:text-green-600',
      cyan: isActive ? 'bg-cyan-100 text-cyan-700 border-cyan-200' : 'hover:bg-cyan-50 hover:text-cyan-600',
      indigo: isActive ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'hover:bg-indigo-50 hover:text-indigo-600',
      pink: isActive ? 'bg-pink-100 text-pink-700 border-pink-200' : 'hover:bg-pink-50 hover:text-pink-600',
      amber: isActive ? 'bg-amber-100 text-amber-700 border-amber-200' : 'hover:bg-amber-50 hover:text-amber-600',
      purple: isActive ? 'bg-purple-100 text-purple-700 border-purple-200' : 'hover:bg-purple-50 hover:text-purple-600',
      orange: isActive ? 'bg-orange-100 text-orange-700 border-orange-200' : 'hover:bg-orange-50 hover:text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (itemId: string) => {
    if (itemId === 'home') {
      onViewChange('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(itemId);
      onViewChange(itemId);
    }
    if (!isDesktop) setIsSidebarOpen(false);
  };

  return (
    <>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo和汉堡菜单 */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">EconWeb</span>
            </div>
          </div>

          {/* 搜索框 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={getTranslation(currentLanguage, 'search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* 语言切换 */}
          <LanguageSwitcher />
        </div>
      </header>

      {/* 侧边导航栏 */}
      <aside className={`
        fixed top-16 left-0 bottom-0 z-40 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isDesktop ? 'lg:translate-x-0' : ''}
      `}>
        <div className="p-4">
          {/* 移动端搜索框 */}
          <div className="md:hidden mb-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={getTranslation(currentLanguage, 'search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>

          {/* 导航菜单 */}
          <nav className="space-y-2">
            {getNavigationItems(currentLanguage).map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors
                    ${getColorClasses(item.color, isActive)}
                    ${isActive ? 'border' : ''}
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* 快速操作 */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">{getTranslation(currentLanguage, 'quick_actions')}</h3>
            <div className="space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors"
              >
                {getTranslation(currentLanguage, 'back_to_top')}
              </button>
              <button
                onClick={() => {
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors"
              >
                {getTranslation(currentLanguage, 'go_to_footer')}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* 移动端背景遮罩 */}
      {isSidebarOpen && !isDesktop && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
} 