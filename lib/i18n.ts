// 导入分离的翻译文件
import { enTranslations } from './translations/en';
import { zhTranslations } from './translations/zh';
import { koTranslations } from './translations/ko';
import { jaTranslations } from './translations/ja';
import { deTranslations } from './translations/de';

export type Language = 'en' | 'zh' | 'ko' | 'ja' | 'de';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

// 使用分离的翻译文件
export const translations = {
  en: enTranslations,
  zh: zhTranslations,
  ko: koTranslations,
  ja: jaTranslations,
  de: deTranslations,
};

// 分类翻译函数
export function getCategoryTranslation(lang: Language, categoryKey: string, type: 'title' | 'desc'): string {
  const key = type === 'title' ? categoryKey : `${categoryKey}_desc`;
  return getTranslation(lang, key);
}

// 通用翻译函数
export function getTranslation(lang: Language, key: string): string {
  return (translations[lang] as any)?.[key] || (translations['zh'] as any)[key] || key;
} 