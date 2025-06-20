import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: '首页', href: '#home' },
    { name: '功能导航', href: '#functional' },
    { name: '资源分类', href: '#resources' },
    { name: '顶刊专题', href: '#top-journals' },
    { name: '德国专题', href: '#german' },
    { name: '使用指导', href: '#guide' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">EconWeb</span>
            <span className="text-sm text-slate-500 hidden sm:inline">经济学导航</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 