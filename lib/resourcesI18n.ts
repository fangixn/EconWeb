// 导入分离的翻译系统
import { 
  enResourceTranslations, 
  enResourceDescriptions, 
  enTagTranslations 
} from './translations/en';
import { 
  zhResourceTranslations, 
  zhResourceDescriptions, 
  zhTagTranslations 
} from './translations/zh';
import { 
  koResourceTranslations, 
  koResourceDescriptions, 
  koTagTranslations 
} from './translations/ko';
import { 
  jaResourceTranslations, 
  jaResourceDescriptions,
  jaTagTranslations 
} from './translations/ja';
import { 
  deResourceTranslations, 
  deResourceDescriptions,
  deTagTranslations 
} from './translations/de';

export type Language = 'en' | 'zh' | 'ko' | 'ja' | 'de';

// 整合所有资源翻译
const allResourceTranslations = {
  en: enResourceTranslations,
  zh: zhResourceTranslations,
  ko: koResourceTranslations,
  ja: jaResourceTranslations,
  de: deResourceTranslations,
};

// 整合所有资源描述翻译
const allResourceDescriptions = {
  en: enResourceDescriptions || {},
  zh: zhResourceDescriptions || {},
  ko: koResourceDescriptions || {},
  ja: jaResourceDescriptions || {},
  de: deResourceDescriptions || {},
};

// 整合所有标签翻译
const allTagTranslations = {
  en: enTagTranslations,
  zh: zhTagTranslations,
  ko: koTagTranslations,
  ja: jaTagTranslations,
  de: deTagTranslations,
};

// 资源翻译函数
export function getResourceTranslation(lang: Language, resourceName: string, category?: string): string {
  return allResourceTranslations[lang]?.[resourceName] || resourceName;
}

// 资源描述翻译函数
export function getResourceDescriptionTranslation(lang: Language, resourceName: string, description: string): string {
  return (allResourceDescriptions[lang] as any)?.[resourceName] || description;
}

// 标签翻译函数
export function getTagTranslation(lang: Language, tag: string): string {
  return allTagTranslations[lang]?.[tag] || tag;
} 