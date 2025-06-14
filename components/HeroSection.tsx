import { useState } from 'react';
import { Search, ArrowRight, BookOpen, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  onSearch: (term: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          经济学资源
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> 导航站</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          发现最全面的经济学资源集合。从数据分析到学术研究，
          找到您在经济学世界中所需的一切资源。
        </p>

        {/* 用户引导按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => document.getElementById('functional')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Database className="w-5 h-5 mr-2" />
            我要找数据
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
            onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            我要学习
          </Button>
        </div>

        {/* 搜索框 */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            placeholder="搜索经济学资源..."
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

        {/* 快速标签 */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          <span className="text-sm text-slate-500">热门标签：</span>
          {['FRED', 'IMF', '世界银行', 'RePEc', '德国央行', '中国统计局'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearch(tag)}
              className="px-3 py-1 text-sm bg-white/60 hover:bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 