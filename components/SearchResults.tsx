'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, ExternalLink, Tag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/LanguageContext';
import { getResourceTranslation, getTagTranslation, getResourceDescriptionTranslation } from '@/lib/resourcesI18n';

interface Resource {
  name: string;
  url: string;
  description: string;
  tags: string[];
  category?: string;
  source?: string;
}

interface SearchResultsProps {
  searchTerm: string;
  resources: Resource[];
  onClearSearch: () => void;
}

export default function SearchResults({ searchTerm, resources, onClearSearch }: SearchResultsProps) {
  const { currentLanguage } = useLanguage();
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'relevance' | 'alphabetical'>('relevance');
  const [showAllTags, setShowAllTags] = useState(false);

  // 计算相关性得分
  const calculateRelevanceScore = (resource: Resource, searchLower: string): number => {
    let score = 0;
    
    // 标题完全匹配
    if (resource.name.toLowerCase() === searchLower) score += 100;
    else if (resource.name.toLowerCase().includes(searchLower)) score += 50;
    
    // 描述匹配
    if (resource.description.toLowerCase().includes(searchLower)) score += 20;
    
    // 标签匹配
    resource.tags.forEach(tag => {
      if (tag.toLowerCase() === searchLower) score += 30;
      else if (tag.toLowerCase().includes(searchLower)) score += 15;
    });
    
    return score;
  };

  // 过滤和排序资源
  const filteredAndSortedResources = useMemo(() => {
    let filtered = resources;
    
    // 按搜索词过滤
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = resources.filter(resource => 
        resource.name.toLowerCase().includes(searchLower) ||
        resource.description.toLowerCase().includes(searchLower) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // 按标签过滤
    if (selectedTag) {
      filtered = filtered.filter(resource => 
        resource.tags.includes(selectedTag)
      );
    }
    
    // 排序
    if (sortBy === 'relevance' && searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered.sort((a, b) => {
        const scoreA = calculateRelevanceScore(a, searchLower);
        const scoreB = calculateRelevanceScore(b, searchLower);
        return scoreB - scoreA;
      });
    } else if (sortBy === 'alphabetical') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return filtered;
  }, [resources, searchTerm, selectedTag, sortBy]);

  // 获取热门标签（按使用频率排序）
  const allTags = useMemo(() => {
    const tagCounts = new Map<string, number>();
    filteredAndSortedResources.forEach(resource => {
      resource.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    
    // 按频率排序并取前15个热门标签
    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([tag, count]) => ({ tag, count }));
  }, [filteredAndSortedResources]);

  // 获取分类统计
  const categoryStats = useMemo(() => {
    const stats: { [key: string]: number } = {};
    filteredAndSortedResources.forEach(resource => {
      const category = resource.category || '其他';
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  }, [filteredAndSortedResources]);

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'learning': '学习专题',
      'media': '媒体专题', 
      'policy': '政策专题',
      'data': '数据专题',
      'market': '市场专题',
      'tools': '工具专题',
      'top-journals': '顶刊专题',
      'german': '德国专题'
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'learning': 'bg-green-100 text-green-800',
      'media': 'bg-cyan-100 text-cyan-800',
      'policy': 'bg-blue-100 text-blue-800',
      'data': 'bg-indigo-100 text-indigo-800',
      'market': 'bg-pink-100 text-pink-800',
      'tools': 'bg-amber-100 text-amber-800',
      'top-journals': 'bg-purple-100 text-purple-800',
      'german': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (!searchTerm.trim() && !selectedTag) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 搜索结果头部 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                搜索结果
              </h2>
              {searchTerm && (
                <Badge variant="outline" className="text-blue-600 border-blue-300">
                  "{searchTerm}"
                </Badge>
              )}
            </div>
            <Button variant="outline" onClick={() => {
              setSelectedTag(null);
              onClearSearch();
            }} className="text-gray-600">
              <X className="w-4 h-4 mr-2" />
              清除搜索
            </Button>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>找到 {filteredAndSortedResources.length} 个结果</span>
            <div className="flex items-center space-x-4">
              <span>排序方式:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'relevance' | 'alphabetical')}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="relevance">相关性</option>
                <option value="alphabetical">字母顺序</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏过滤器 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              {/* 标签过滤 */}
              {allTags.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    热门标签
                  </h3>
                  
                  {/* 选中的标签 */}
                  {selectedTag && (
                    <div className="mb-3 flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-blue-800 text-sm font-medium">{getTagTranslation(currentLanguage, selectedTag)}</span>
                      <button 
                        onClick={() => setSelectedTag(null)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-100 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  
                  {/* 热门标签列表 - 垂直滚动 */}
                  <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-hide">
                    {allTags
                      .filter(({ tag }) => tag !== selectedTag) // 过滤掉已选中的标签
                      .slice(0, showAllTags ? allTags.length : 15)
                      .map(({ tag, count }, index) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm hover:scale-102"
                        style={{
                          animationDelay: `${index * 0.05}s`
                        }}
                      >
                        <span className="flex-1 text-left truncate">{getTagTranslation(currentLanguage, tag)}</span>
                        <span className="ml-2 text-xs px-2 py-1 rounded-full font-medium bg-gray-200 text-gray-600">
                          {count}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  {/* 展开/收起标签按钮 */}
                  {allTags.filter(({ tag }) => tag !== selectedTag).length > 15 && (
                    <div className="mt-3 text-center">
                      <button 
                        onClick={() => setShowAllTags(!showAllTags)}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center justify-center w-full py-2 rounded-md hover:bg-blue-50"
                      >
                        {showAllTags ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            收起标签
                          </>
                        ) : (
                          <>
                            查看全部 {allTags.filter(({ tag }) => tag !== selectedTag).length} 个标签
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* 分类统计 */}
              {Object.keys(categoryStats).length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    分类分布
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {Object.entries(categoryStats)
                      .sort((a, b) => b[1] - a[1])
                      .map(([category, count]) => (
                      <div key={category} className="flex items-center justify-between text-sm p-2 rounded hover:bg-gray-50 transition-colors">
                        <span className={`font-medium ${getCategoryColor(category).split(' ')[1]}`}>
                          {getCategoryLabel(category)}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {count}个
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 搜索结果列表 */}
          <div className="lg:col-span-3">
            {filteredAndSortedResources.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关资源</h3>
                <p className="text-gray-600 mb-4">试试调整搜索词或清除过滤条件</p>
                <Button variant="outline" onClick={() => {
                  setSelectedTag(null);
                  onClearSearch();
                }}>
                  重新搜索
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAndSortedResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                              {getResourceTranslation(currentLanguage, resource.name)}
                            </h3>
                            {resource.category && (
                              <Badge className={`text-xs ${getCategoryColor(resource.category)}`}>
                                {getCategoryLabel(resource.category)}
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {getResourceDescriptionTranslation(currentLanguage, resource.name, resource.description)}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {resource.tags.slice(0, 5).map((tag, tagIndex) => (
                              <button
                                key={tagIndex}
                                onClick={() => setSelectedTag(tag)}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-blue-100 hover:text-blue-800 transition-colors"
                              >
                                {getTagTranslation(currentLanguage, tag)}
                              </button>
                            ))}
                            {resource.tags.length > 5 && (
                              <span className="text-xs text-gray-500">
                                +{resource.tags.length - 5} 更多
                              </span>
                            )}
                          </div>
                        </div>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 flex-shrink-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          访问
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 