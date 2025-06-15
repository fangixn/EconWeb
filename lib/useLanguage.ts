'use client';

import { useState, useEffect } from 'react';
import { Language, translations } from './i18n';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    // 从localStorage读取保存的语言设置
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'zh', 'ko', 'ja', 'de'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
} 