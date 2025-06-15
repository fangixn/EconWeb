import { Language } from './i18n';

// 期刊翻译对象接口
export interface JournalTranslation {
  en: string;
  zh: string;
  ko: string;
  ja: string;
  de: string;
}

// 期刊名称翻译 - 遵循学术界公认的翻译原则
export const journalTranslations: Record<string, JournalTranslation> = {
  "Quarterly Journal of Economics (QJE)": {
    en: "Quarterly Journal of Economics (QJE)",
    zh: "经济学季刊",
    ko: "Quarterly Journal of Economics (QJE) (경제학 계간지)",
    ja: "Quarterly Journal of Economics (QJE) (経済学季刊)",
    de: "Quarterly Journal of Economics (QJE) (Vierteljahresschrift für Wirtschaftswissenschaften)"
  },
  
  "Econometrica": {
    en: "Econometrica",
    zh: "计量经济学",
    ko: "Econometrica (계량경제학)",
    ja: "Econometrica (計量経済学)",
    de: "Econometrica (Ökonometrie)"
  },
  
  "Journal of Finance (JF)": {
    en: "Journal of Finance (JF)",
    zh: "金融学杂志",
    ko: "Journal of Finance (JF) (금융학저널)",
    ja: "Journal of Finance (JF) (金融学ジャーナル)",
    de: "Journal of Finance (JF) (Finanzwissenschaftliche Zeitschrift)"
  },
  
  "Review of Economic Studies (REStud)": {
    en: "Review of Economic Studies (REStud)",
    zh: "经济研究评论",
    ko: "Review of Economic Studies (REStud) (경제연구리뷰)",
    ja: "Review of Economic Studies (REStud) (経済研究レビュー)",
    de: "Review of Economic Studies (REStud) (Überblick über Wirtschaftsstudien)"
  },
  
  "Journal of Financial Economics (JFE)": {
    en: "Journal of Financial Economics (JFE)",
    zh: "金融经济学杂志",
    ko: "Journal of Financial Economics (JFE) (금융경제학저널)",
    ja: "Journal of Financial Economics (JFE) (金融経済学ジャーナル)",
    de: "Journal of Financial Economics (JFE) (Zeitschrift für Finanzwirtschaft)"
  },
  
  "Journal of Political Economy (JPE)": {
    en: "Journal of Political Economy (JPE)",
    zh: "政治经济学杂志",
    ko: "Journal of Political Economy (JPE) (정치경제학저널)",
    ja: "Journal of Political Economy (JPE) (政治経済学ジャーナル)",
    de: "Journal of Political Economy (JPE) (Zeitschrift für Politische Ökonomie)"
  },
  
  "Review of Financial Studies (RFS)": {
    en: "Review of Financial Studies (RFS)",
    zh: "金融研究评论",
    ko: "Review of Financial Studies (RFS) (금융연구리뷰)",
    ja: "Review of Financial Studies (RFS) (金融研究レビュー)",
    de: "Review of Financial Studies (RFS) (Überblick über Finanzstudien)"
  },
  
  "American Economic Journal: Macroeconomics": {
    en: "American Economic Journal: Macroeconomics",
    zh: "美国经济杂志：宏观经济学",
    ko: "American Economic Journal: Macroeconomics (미국경제저널: 거시경제학)",
    ja: "American Economic Journal: Macroeconomics (アメリカ経済学ジャーナル：マクロ経済学)",
    de: "American Economic Journal: Macroeconomics (Amerikanische Wirtschaftszeitschrift: Makroökonomie)"
  },
  
  "Journal of Monetary Economics": {
    en: "Journal of Monetary Economics",
    zh: "货币经济学杂志",
    ko: "Journal of Monetary Economics (화폐경제학저널)",
    ja: "Journal of Monetary Economics (貨幣経済学ジャーナル)",
    de: "Journal of Monetary Economics (Zeitschrift für Geldwirtschaft)"
  },
  
  "AEA Journals Collection": {
    en: "AEA Journals Collection",
    zh: "美国经济学会期刊合集",
    ko: "AEA Journals Collection (미국경제학회 저널 컬렉션)",
    ja: "AEA Journals Collection (アメリカ経済学会ジャーナル集)",
    de: "AEA Journals Collection (Sammlung der amerikanischen Wirtschaftsvereinigung)"
  }
};

// 获取期刊翻译的工具函数
export function getJournalTranslation(lang: Language, journalName: string): string {
  const translation = journalTranslations[journalName];
  if (translation && translation[lang]) {
    return translation[lang];
  }
  // 如果没有找到翻译，返回原名称
  return journalName;
}

// 获取所有支持翻译的期刊列表
export function getSupportedJournals(): string[] {
  return Object.keys(journalTranslations);
}

// 验证期刊是否有翻译支持
export function hasJournalTranslation(journalName: string): boolean {
  return journalName in journalTranslations;
} 