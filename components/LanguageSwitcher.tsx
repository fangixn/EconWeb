'use client';

import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { languages, Language } from '@/lib/i18n';
import { useLanguage } from '@/lib/LanguageContext';

interface LanguageSwitcherProps {
  theme?: 'light' | 'dark';
}

export function LanguageSwitcher({ theme = 'light' }: LanguageSwitcherProps) {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const isDark = theme === 'dark';

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 min-w-[100px] ${
          isDark 
            ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500' 
            : ''
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLang?.flag}</span>
        <span className="text-sm font-medium">{currentLang?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 rounded-lg shadow-lg z-50 min-w-[140px] ${
          isDark 
            ? 'bg-gray-800 border border-gray-600' 
            : 'bg-white border border-gray-200'
        }`}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                changeLanguage(language.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                isDark
                  ? currentLanguage === language.code 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : currentLanguage === language.code 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* 点击外部关闭下拉菜单 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 