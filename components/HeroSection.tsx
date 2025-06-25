import { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/LanguageContext';
import { getTagTranslation } from '@/lib/resourcesI18n';

interface Resource {
  name: string;
  description: string;
  tags: string[];
  category?: string;
}

interface HeroSectionProps {
  onSearch: (term: string) => void;
  resources?: Resource[];
}

export default function HeroSection({ onSearch, resources = [] }: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, currentLanguage } = useLanguage();

  // 动态计算热门标签
  const popularTags = useMemo(() => {
    if (!resources.length) return [];
    
    // 统计所有标签的使用频率
    const tagCounts = new Map<string, number>();
    resources.forEach(resource => {
      resource.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    // 按频率排序并取前4个最热门的标签
    const sortedTags = Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([tag]) => tag);

    return sortedTags;
  }, [resources]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          {t('hero_title') || 'Your Gateway to'}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> {t('hero_title_highlight') || 'Economics'}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          {t('hero_subtitle') || 'Discover the most comprehensive collection of economics resources. From data analysis to academic research, find everything you need to stay ahead in the world of economics.'}
        </p>



        {/* 搜索框 */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            placeholder={t('search_placeholder') || 'Search economics resources...'}
            className="pl-12 pr-20 py-4 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        {/* 简化的热门标签 */}
        {popularTags.length > 0 && (
          <div className="mt-8">
            <div className="text-center mb-4">
              <span className="text-sm text-slate-500">{t('popular_tags') || 'Popular Tags:'}</span>
            </div>
            
            {/* 简洁的标签网格 */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {popularTags.map((tag, index) => (
                <button
                  key={tag}
                  onClick={() => onSearch(tag)}
                  className="group relative px-4 py-2 bg-white/80 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-full text-slate-600 hover:text-blue-600 backdrop-blur-sm transition-all duration-200 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="relative z-10 text-sm font-medium">{getTagTranslation(currentLanguage, tag)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  );
} 