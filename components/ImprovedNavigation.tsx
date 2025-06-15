'use client';

import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, 
  Database, FileText, TrendingUp, Globe, 
  MapPin, Newspaper, Search, Home,
  BookOpen, Building, Users, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { Language } from '@/lib/i18n';

interface NavigationProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: string;
  onViewChange: (view: string) => void;
  onSearch: (term: string) => void;
}

const navigationItems = [
  {
    id: 'home',
    icon: Home,
    label: '首页',
    color: 'blue'
  },
  {
    id: 'functional',
    icon: Database,
    label: '功能导航',
    color: 'blue',
    children: [
      { id: 'find-data', label: '找数据', icon: Database },
      { id: 'read-policy', label: '读政策', icon: FileText },
      { id: 'do-research', label: '做研究', icon: BookOpen },
      { id: 'watch-market', label: '看市场', icon: TrendingUp },
      { id: 'view-news', label: '看资讯', icon: Newspaper }
    ]
  },
  {
    id: 'resources',
    icon: Building,
    label: '资源分类',
    color: 'green',
    children: [
      { id: 'authorities', label: '权威机构', icon: Building },
      { id: 'academic', label: '学术论文', icon: BookOpen },
      { id: 'data-sources', label: '数据来源', icon: Database },
      { id: 'policy-docs', label: '政策文件', icon: FileText },
      { id: 'media-news', label: '媒体资讯', icon: Newspaper },
      { id: 'courses', label: '学习资源', icon: Users },
      { id: 'tools', label: '实用工具', icon: Briefcase },
      { id: 'new-media', label: '新媒体', icon: Globe }
    ]
  },
  {
    id: 'german',
    icon: MapPin,
    label: '德国专题',
    color: 'orange'
  },
  {
    id: 'news',
    icon: Newspaper,
    label: '经济资讯',
    color: 'purple'
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
  const [expandedItems, setExpandedItems] = useState<string[]>(['functional']);
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

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colors = {
      blue: isActive ? 'bg-blue-100 text-blue-700 border-blue-200' : 'hover:bg-blue-50 hover:text-blue-600',
      green: isActive ? 'bg-green-100 text-green-700 border-green-200' : 'hover:bg-green-50 hover:text-green-600',
      orange: isActive ? 'bg-orange-100 text-orange-700 border-orange-200' : 'hover:bg-orange-50 hover:text-orange-600',
      purple: isActive ? 'bg-purple-100 text-purple-700 border-purple-200' : 'hover:bg-purple-50 hover:text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
                  placeholder="搜索经济资源..."
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
                  placeholder="搜索经济资源..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>

          {/* 导航菜单 */}
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              const isExpanded = expandedItems.includes(item.id);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (hasChildren) {
                        toggleExpanded(item.id);
                      } else {
                        onViewChange(item.id);
                        if (!isDesktop) setIsSidebarOpen(false);
                      }
                    }}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${getColorClasses(item.color, isActive)}
                      ${isActive ? 'border' : ''}
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {hasChildren && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.children.length}
                        </Badge>
                      )}
                    </div>
                    {hasChildren && (
                      isExpanded ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {/* 子菜单 */}
                  {hasChildren && isExpanded && (
                    <div className="ml-4 mt-2 space-y-1 border-l-2 border-slate-100 pl-4">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActive = activeView === child.id;
                        
                        return (
                          <button
                            key={child.id}
                            onClick={() => {
                              onViewChange(child.id);
                              if (!isDesktop) setIsSidebarOpen(false);
                            }}
                            className={`
                              w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors
                              ${isChildActive 
                                ? 'bg-slate-100 text-slate-900 font-medium' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                              }
                            `}
                          >
                            <ChildIcon className="h-4 w-4" />
                            <span>{child.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* 底部信息 */}
          <div className="mt-8 pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 space-y-1">
              <p>📊 已收录 80+ 经济资源</p>
              <p>🔄 定期更新维护</p>
              <p>📧 fangin1230@gmail.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 遮罩层 (移动端) */}
      {isSidebarOpen && !isDesktop && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
} 