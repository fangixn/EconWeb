'use client';

import { useState } from 'react';
import { Search, BarChart3, BookOpen, TrendingUp, Database, FileText, Users, Globe, Mail, ExternalLink, Filter, ArrowRight, MapPin, Building, GraduationCap, Wrench, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ImprovedNavigation from '@/components/ImprovedNavigation';
import AntiBot from '@/components/AntiBot';
import { Language, getTranslation } from '@/lib/i18n';

// 整合的数据结构 - 完整导入 econ_resources.json 数据
const functionalCategories = {
  "找数据": {
    title: "数据获取",
    description: "获取宏观经济数据、微观调查数据和景气指数",
    icon: Database,
    subcategories: {
      "宏观数据库": [
        {
          name: "国家统计局数据库",
          url: "http://www.stats.gov.cn",
          description: "覆盖3881个统计指标，含月度/季度/年度及普查数据",
          tags: ["中国", "免费"]
        },
        {
          name: "世界银行Open Data",
          url: "https://data.worldbank.org",
          description: "免费全球发展数据平台，涵盖经济、社会、环境等领域",
          tags: ["国际", "免费"]
        },
        {
          name: "联邦统计局 (Destatis)",
          url: "https://www.destatis.de",
          description: "德国GDP/CPI/贸易数据，提供Excel/CSV下载",
          tags: ["德国", "多语言"]
        },
        {
          name: "FRED经济数据",
          url: "https://fred.stlouisfed.org",
          description: "美联储经济数据库，含50万+时间序列",
          tags: ["美国", "API"]
        }
      ],
      "微观调查库": [
        {
          name: "中国家庭金融调查(CHFS)",
          url: "http://chfs.swufe.edu.cn",
          description: "家庭资产/负债微观数据(2011-2023)",
          tags: ["微观", "需申请"]
        },
        {
          name: "德国社会经济面板(SOEP)",
          url: "https://www.diw.de/soep",
          description: "3万德国家庭长期追踪数据",
          tags: ["德国", "学术"]
        }
      ],
      "景气指数": [
        {
          name: "IFO商业景气指数",
          url: "https://www.ifo.de",
          description: "基于9000家德企的制造业/服务业调查",
          tags: ["德国", "预测"]
        },
        {
          name: "ZEW经济景气指数",
          url: "https://www.zew.de",
          description: "金融专家对德国及欧元区预期指数",
          tags: ["德国", "金融市场"]
        }
      ]
    }
  },
  "读政策": {
    title: "政策研读",
    description: "获取最新政策文件、央行报告和政策解读",
    icon: FileText,
    subcategories: {
      "中国政策": [
        {
          name: "国务院政策解读专栏",
          url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
          description: "中央一号文件、经济改革等权威解读",
          tags: ["官方", "实时"]
        },
        {
          name: "央行货币政策报告",
          url: "http://www.pbc.gov.cn",
          description: "季度货币政策执行报告与政策工具说明",
          tags: ["金融", "PDF"]
        }
      ],
      "德国政策": [
        {
          name: "五贤人年度评估报告",
          url: "https://www.sachverstaendigenrat.de",
          description: "德国经济顾问委员会权威分析",
          tags: ["德国", "年度"]
        },
        {
          name: "联邦经济事务和气候行动部",
          url: "https://www.bmwk.de",
          description: "工业政策与能源转型路线图",
          tags: ["德国", "政策文件"]
        }
      ],
      "国际组织": [
        {
          name: "IMF政策追踪",
          url: "https://www.imf.org/en/Publications/Policy-Papers",
          description: "全球财政货币政策分析",
          tags: ["国际", "英文"]
        },
        {
          name: "OECD经济展望",
          url: "https://www.oecd.org/economic-outlook",
          description: "38成员国经济预测与结构改革建议",
          tags: ["国际", "多国"]
        }
      ]
    }
  },
  "做研究": {
    title: "学术研究",
    description: "学术论文、研究工具和智库资源",
    icon: BookOpen,
    subcategories: {
      "学术平台": [
        {
          name: "IDEAS",
          url: "https://ideas.repec.org",
          description: "RePEc 门户，可查找作者与论文",
          tags: ["论文", "索引"]
        },
        {
          name: "SSRN Economics",
          url: "https://www.ssrn.com",
          description: "各类社会科学领域工作论文下载",
          tags: ["论文", "免费"]
        },
        {
          name: "经济学研究网(EconStor)",
          url: "https://www.econstor.eu",
          description: "德国经济工作论文库",
          tags: ["德国", "开放获取"]
        },
        {
          name: "NBER",
          url: "https://www.nber.org",
          description: "美国国家经济研究局，实证研究与政策评估",
          tags: ["美国", "实证"]
        }
      ],
      "研究工具": [
        {
          name: "计量经济学学术网(CEAN)",
          url: "http://cean.xmu.edu.cn",
          description: "计量代码与教材资源",
          tags: ["中国", "教学"]
        },
        {
          name: "哈佛数据复现库",
          url: "https://dataverse.harvard.edu",
          description: "AER/QJE等顶刊论文原始数据",
          tags: ["复现", "英文"]
        }
      ],
      "德国智库": [
        {
          name: "DIW柏林研究所",
          url: "https://www.diw.de",
          description: "住房危机与移民经济研究",
          tags: ["德国", "独立"]
        },
        {
          name: "墨卡托中国研究中心",
          url: "https://www.merics.org",
          description: "德国企业对华投资风险评估",
          tags: ["中德", "地缘"]
        }
      ]
    }
  },
  "看市场": {
    title: "市场分析",
    description: "行业分析、投资工具和公司数据",
    icon: TrendingUp,
    subcategories: {
      "行业分析": [
        {
          name: "前瞻经济学人",
          url: "https://www.qianzhan.com/analyst",
          description: "AI/新能源等细分产业报告",
          tags: ["中国", "日更"]
        },
        {
          name: "德国汽车工业协会(VDA)",
          url: "https://www.vda.de",
          description: "电动汽车转型与供应链白皮书",
          tags: ["德国", "汽车"]
        }
      ],
      "投资工具": [
        {
          name: "MacroMicro产业图谱",
          url: "https://sc.macromicro.me/collections",
          description: "产业链数据可视化工具",
          tags: ["全球", "交互"]
        },
        {
          name: "德国DAX指数分析",
          url: "https://sc.macromicro.me/collections/3450",
          description: "IFO指数与股市关联仪表盘",
          tags: ["德国", "实时"]
        }
      ],
      "公司数据": [
        {
          name: "巨潮信息网",
          url: "http://www.cninfo.com.cn",
          description: "中国上市公司法定披露平台",
          tags: ["财报", "官方"]
        },
        {
          name: "德国企业信用库",
          url: "https://www.bundesbank.de/statistik-karte",
          description: "企业信贷风险交互地图",
          tags: ["德国", "金融"]
        }
      ]
    }
  },
  "看资讯": {
    title: "经济资讯",
    description: "获取最新经济新闻、观点和趋势分析",
    icon: Globe,
    subcategories: {
      "国际主流媒体": [
        {
          name: "The Economist",
          url: "https://www.economist.com",
          description: "英国老牌周刊，深入报道全球政治、经济、商业、科技趋势",
          tags: ["英国", "权威"]
        },
        {
          name: "Financial Times",
          url: "https://www.ft.com",
          description: "聚焦全球金融市场与宏观政策",
          tags: ["金融", "全球"]
        },
        {
          name: "Bloomberg",
          url: "https://www.bloomberg.com",
          description: "全球领先财经资讯，提供市场数据与宏观分析",
          tags: ["财经", "数据"]
        },
        {
          name: "Wall Street Journal",
          url: "https://www.wsj.com",
          description: "美国财经与商业新闻权威",
          tags: ["美国", "商业"]
        },
        {
          name: "Project Syndicate",
          url: "https://www.project-syndicate.org",
          description: "全球知名经济学家专栏，涵盖全球性议题",
          tags: ["专栏", "全球"]
        },
        {
          name: "VoxEU (CEPR)",
          url: "https://cepr.org/voxeu",
          description: "欧洲经济政策研究中心专家观点平台",
          tags: ["欧洲", "政策"]
        }
      ],
      "中文主流财经平台": [
        {
          name: "财新网",
          url: "https://www.caixin.com",
          description: "深度调查与政策金融报道",
          tags: ["中国", "深度"]
        },
        {
          name: "第一财经",
          url: "https://www.yicai.com",
          description: "实时经济新闻与数据解读",
          tags: ["中国", "实时"]
        },
        {
          name: "澎湃新闻·财经频道",
          url: "https://www.thepaper.cn/list_25435",
          description: "关注宏观经济与政策落地",
          tags: ["中国", "宏观"]
        },
        {
          name: "21世纪经济报道",
          url: "https://www.21jingji.com",
          description: "老牌财经媒体，关注实务与政策",
          tags: ["中国", "政策"]
        },
        {
          name: "界面新闻财经",
          url: "https://www.jiemian.com/lists/6.html",
          description: "科技、新经济方向的财经新闻",
          tags: ["中国", "科技"]
        },
        {
          name: "网易数读",
          url: "https://data.163.com",
          description: "数据可视化与趋势洞察",
          tags: ["中国", "数据"]
        }
      ],
      "学术观点与智库媒体": [
        {
          name: "NBER Digest",
          url: "https://www.nber.org/digest",
          description: "美国国家经济研究局摘要刊物",
          tags: ["美国", "学术"]
        },
        {
          name: "Brookings Institution",
          url: "https://www.brookings.edu/topic/economy",
          description: "美国布鲁金斯学会经济研究频道",
          tags: ["美国", "智库"]
        },
        {
          name: "Peterson Institute",
          url: "https://www.piie.com",
          description: "专注国际经济政策研究的智库",
          tags: ["国际", "政策"]
        },
        {
          name: "清华五道口金融评论",
          url: "https://www.pbcsf.tsinghua.edu.cn",
          description: "融合学术与业界的金融评论平台",
          tags: ["中国", "金融"]
        }
      ],
      "轻量入门与新媒体": [
        {
          name: "得到 App",
          url: "https://www.dedao.cn",
          description: "以知识服务为核心，含经济学课程与栏目",
          tags: ["中国", "知识"]
        },
        {
          name: "吴晓波频道",
          url: "https://www.woshipm.com/author/wuxiaobo",
          description: "主打企业经济史与商业观察",
          tags: ["中国", "商业"]
        },
        {
          name: "混沌学园",
          url: "https://www.hundun.cn",
          description: "研究创新商业与底层经济逻辑",
          tags: ["中国", "创新"]
        },
        {
          name: "知乎经济学话题",
          url: "https://www.zhihu.com/topic/19550517/hot",
          description: "大众讨论经济问题的平台",
          tags: ["中国", "讨论"]
        }
      ]
    }
  }
};

const resourceTypeCategories = {
  "报告发布机构": {
    title: "权威机构",
    description: "国际组织和政府机构的官方报告",
    icon: Building,
    resources: [
      {
        name: "IMF（国际货币基金组织）",
        url: "https://www.imf.org",
        description: "全球宏观经济分析、地区展望、金融稳定报告",
        tags: ["国际", "权威", "多语言"]
      },
      {
        name: "世界银行（World Bank）",
        url: "https://www.worldbank.org",
        description: "发展经济研究、数据分析与发展报告",
        tags: ["国际", "发展", "免费"]
      },
      {
        name: "OECD（经济合作与发展组织）",
        url: "https://www.oecd.org",
        description: "经济政策分析与统计",
        tags: ["国际", "多国", "预测"]
      },
      {
        name: "中国国家统计局",
        url: "https://www.stats.gov.cn",
        description: "中国官方统计数据发布平台",
        tags: ["中国", "官方", "统计"]
      },
      {
        name: "欧洲央行（ECB）",
        url: "https://www.ecb.europa.eu",
        description: "欧元区货币政策与经济研究",
        tags: ["欧洲", "央行", "货币政策"]
      },
      {
        name: "国务院政策解读",
        url: "https://www.gov.cn/zwhd/zcjd_gwy.htm",
        description: "中央一号文件、经济改革等权威解读",
        tags: ["中国", "官方", "实时"]
      }
    ]
  },
  "论文与学术资源": {
    title: "学术论文",
    description: "经济学论文库和学术资源平台",
    icon: GraduationCap,
    resources: [
      {
        name: "SSRN",
        url: "https://www.ssrn.com",
        description: "各类社会科学领域工作论文下载",
        tags: ["论文", "免费", "预印本"]
      },
      {
        name: "IDEAS",
        url: "https://ideas.repec.org",
        description: "RePEc 门户，可查找作者与论文",
        tags: ["论文", "索引", "全球"]
      },
      {
        name: "arXiv Economics",
        url: "https://arxiv.org/archive/q-fin",
        description: "预印本论文平台（含金融/经济）",
        tags: ["预印本", "金融", "免费"]
      },
      {
        name: "NBER",
        url: "https://www.nber.org",
        description: "美国国家经济研究局，实证研究与政策评估",
        tags: ["美国", "实证", "权威"]
      },
      {
        name: "经济学研究网(EconStor)",
        url: "https://www.econstor.eu",
        description: "德国经济工作论文库",
        tags: ["德国", "开放获取", "论文"]
      },
      {
        name: "哈佛数据复现库",
        url: "https://dataverse.harvard.edu",
        description: "AER/QJE等顶刊论文原始数据",
        tags: ["复现", "英文", "权威"]
      }
    ]
  },
  "数据与统计资源": {
    title: "数据统计",
    description: "经济数据库和统计平台",
    icon: BarChart3,
    resources: [
      {
        name: "FRED",
        url: "https://fred.stlouisfed.org",
        description: "美国及全球宏观经济指标数据库",
        tags: ["数据", "API", "免费"]
      },
      {
        name: "IMF Data",
        url: "https://data.imf.org",
        description: "各国经济指标（外汇、财政等）",
        tags: ["国际", "宏观", "官方"]
      },
      {
        name: "World Bank Data",
        url: "https://data.worldbank.org",
        description: "各国社会、经济发展指标",
        tags: ["国际", "发展", "免费"]
      },
      {
        name: "OECD.Stat",
        url: "https://stats.oecd.org",
        description: "OECD 成员国结构化数据平台",
        tags: ["OECD", "结构化", "统计"]
      },
      {
        name: "中国人民银行",
        url: "http://www.pbc.gov.cn",
        description: "发布利率、汇率、货币供应等信息",
        tags: ["中国", "央行", "货币"]
      },
      {
        name: "国家统计局数据库",
        url: "http://www.stats.gov.cn",
        description: "覆盖3881个统计指标，含月度/季度/年度及普查数据",
        tags: ["中国", "免费", "官方"]
      }
    ]
  },
  "智库与研究机构": {
    title: "智库研究",
    description: "独立智库和研究机构资源",
    icon: Users,
    resources: [
      {
        name: "DIW柏林研究所",
        url: "https://www.diw.de",
        description: "住房危机与移民经济研究",
        tags: ["德国", "独立", "智库"]
      },
      {
        name: "墨卡托中国研究中心",
        url: "https://www.merics.org",
        description: "德国企业对华投资风险评估",
        tags: ["中德", "地缘", "智库"]
      },
      {
        name: "IFO经济研究所",
        url: "https://www.ifo.de",
        description: "基于9000家德企的制造业/服务业调查",
        tags: ["德国", "预测", "实时"]
      }
    ]
  },
  "公开课与学习资源": {
    title: "学习课程",
    description: "经济学在线课程和教育资源",
    icon: GraduationCap,
    resources: [
      {
        name: "MIT OCW - Economics",
        url: "https://ocw.mit.edu/courses/economics",
        description: "麻省理工经济学课程公开页",
        tags: ["MIT", "免费", "课程"]
      },
      {
        name: "Harvard Kennedy School",
        url: "https://www.hks.harvard.edu",
        description: "公共政策与经济学课程资料",
        tags: ["哈佛", "政策", "高级"]
      },
      {
        name: "Khan Academy - Economics",
        url: "https://www.khanacademy.org/economics-finance-domain",
        description: "免费入门经济学视频课程",
        tags: ["免费", "入门", "视频"]
      },
      {
        name: "Coursera - Economics",
        url: "https://www.coursera.org",
        description: "大学主讲的在线课程聚合平台",
        tags: ["在线", "认证", "付费"]
      },
      {
        name: "Marginal Revolution University",
        url: "https://mru.org",
        description: "经济学家创办的在线视频课程网站",
        tags: ["专业", "视频", "免费"]
      }
    ]
  },
  "实用工具与推荐书单": {
    title: "工具资源",
    description: "经济学研究和学习的实用工具",
    icon: Wrench,
    resources: [
      {
        name: "通货膨胀计算器（US）",
        url: "https://www.usinflationcalculator.com",
        description: "基于历史 CPI 计算真实购买力",
        tags: ["工具", "通胀", "美国"]
      },
      {
        name: "Our World in Data",
        url: "https://ourworldindata.org",
        description: "数据驱动的全球发展趋势可视化平台",
        tags: ["可视化", "全球", "免费"]
      },
      {
        name: "Zotero",
        url: "https://www.zotero.org",
        description: "学术参考文献管理工具",
        tags: ["文献", "管理", "免费"]
      },
      {
        name: "Econlib",
        url: "https://www.econlib.org",
        description: "自由市场经济思想资源与书籍",
        tags: ["理论", "书籍", "自由市场"]
      }
    ]
  },
  "媒体与资讯平台": {
    title: "财经媒体",
    description: "权威财经媒体和资讯平台",
    icon: Globe,
    resources: [
      {
        name: "The Economist",
        url: "https://www.economist.com",
        description: "英国老牌周刊，深入报道全球政治、经济、商业、科技趋势",
        tags: ["英国", "权威", "全球"]
      },
      {
        name: "Financial Times",
        url: "https://www.ft.com",
        description: "聚焦全球金融市场与宏观政策",
        tags: ["金融", "全球", "权威"]
      },
      {
        name: "Bloomberg",
        url: "https://www.bloomberg.com",
        description: "全球领先财经资讯，提供市场数据与宏观分析",
        tags: ["财经", "数据", "实时"]
      },
      {
        name: "财新网",
        url: "https://www.caixin.com",
        description: "深度调查与政策金融报道",
        tags: ["中国", "深度", "调查"]
      },
      {
        name: "第一财经",
        url: "https://www.yicai.com",
        description: "实时经济新闻与数据解读",
        tags: ["中国", "实时", "数据"]
      },
      {
        name: "VoxEU (CEPR)",
        url: "https://cepr.org/voxeu",
        description: "欧洲经济政策研究中心专家观点平台",
        tags: ["欧洲", "政策", "专家"]
      }
    ]
  },
  "新媒体与知识平台": {
    title: "知识服务",
    description: "新媒体和知识服务平台",
    icon: Users,
    resources: [
      {
        name: "得到 App",
        url: "https://www.dedao.cn",
        description: "以知识服务为核心，含经济学课程与栏目",
        tags: ["知识", "课程", "付费"]
      },
      {
        name: "吴晓波频道",
        url: "https://www.woshipm.com/author/wuxiaobo",
        description: "主打企业经济史与商业观察",
        tags: ["商业", "历史", "观察"]
      },
      {
        name: "混沌学园",
        url: "https://www.hundun.cn",
        description: "研究创新商业与底层经济逻辑",
        tags: ["创新", "商业", "逻辑"]
      },
      {
        name: "知乎经济学话题",
        url: "https://www.zhihu.com/topic/19550517/hot",
        description: "大众讨论经济问题的平台",
        tags: ["讨论", "社区", "大众"]
      },
      {
        name: "网易数读",
        url: "https://data.163.com",
        description: "数据可视化与趋势洞察",
        tags: ["数据", "可视化", "趋势"]
      }
    ]
  }
};

const germanSpecialResources = {
  title: "德国经济专题",
  description: "德国经济相关的专业资源和机构",
  icon: MapPin,
  categories: {
    "核心机构": [
      {
        name: "德国央行",
        url: "https://www.bundesbank.de",
        description: "货币政策报告与金融稳定数据",
        tags: ["央行", "权威"]
      },
      {
        name: "弗劳恩霍夫研究所",
        url: "https://www.fraunhofer.de",
        description: "工业4.0与氢能技术报告",
        tags: ["科技", "创新"]
      }
    ],
    "特色资源": [
      {
        name: "GENESIS区域数据库",
        url: "https://www-genesis.destatis.de",
        description: "德国各州经济对比工具",
        tags: ["区域", "定制"]
      },
      {
        name: "能源转型监测",
        url: "https://www.agora-energiewende.de",
        description: "绿氢战略与碳定价机制",
        tags: ["能源", "政策"]
      }
    ]
  }
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState<'functional' | 'resource'>('functional');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en'); // 默认英文

  const t = (key: string) => getTranslation(currentLanguage, key);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <AntiBot>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">{t('site_name')}</span>
              <span className="text-sm text-slate-500 hidden sm:inline">{t('site_subtitle')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_home')}</a>
                <a href="#functional" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_functional')}</a>
                <a href="#resources" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_resources')}</a>
                <a href="#news" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_news')}</a>
                <a href="#german" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_german')}</a>
                <a href="#faq" className="text-slate-700 hover:text-blue-600 transition-colors">{t('nav_faq')}</a>
              </nav>
              <LanguageSwitcher 
                currentLanguage={currentLanguage} 
                onLanguageChange={setCurrentLanguage} 
              />
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 py-4">
              <div className="space-y-2">
                <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_home')}</a>
                <a href="#functional" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_functional')}</a>
                <a href="#resources" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_resources')}</a>
                <a href="#news" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_news')}</a>
                <a href="#german" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_german')}</a>
                <a href="#faq" className="block px-3 py-2 text-slate-700 hover:text-blue-600">{t('nav_faq')}</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {t('hero_title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> {t('hero_title_highlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => document.getElementById('functional')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Database className="w-5 h-5 mr-2" />
              {t('btn_find_data')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {t('btn_learn')}
            </Button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder={t('search_placeholder')}
              className="pl-12 pr-20 py-4 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => handleSearch(searchTerm)}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-slate-500">{t('popular_tags')}</span>
            {['FRED', 'IMF', 'World Bank', 'SSRN', 'Bundesbank', 'Stats.gov.cn'].map((tag) => (
              <button
                key={tag}
                onClick={() => handleSearch(tag)}
                className="px-3 py-1 text-sm bg-white/60 hover:bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Toggle */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-slate-100 rounded-lg p-1 flex">
              <Button
                variant={activeView === 'functional' ? 'default' : 'ghost'}
                onClick={() => setActiveView('functional')}
                className="px-6 py-2"
              >
                {t('toggle_functional')}
              </Button>
              <Button
                variant={activeView === 'resource' ? 'default' : 'ghost'}
                onClick={() => setActiveView('resource')}
                className="px-6 py-2"
              >
                {t('toggle_resource')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Navigation */}
      <section id="functional" className={`py-20 ${activeView === 'functional' ? 'bg-white' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('functional_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('functional_subtitle')}
            </p>
            {activeView !== 'functional' && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700">
                  {t('switch_to_functional_view')}
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(functionalCategories).map(([key, category]) => (
              <Card key={key} className={`group hover:shadow-xl transition-all duration-300 border-slate-200 ${activeView !== 'functional' ? 'opacity-75' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-slate-900">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(category.subcategories).map(([subKey, resources]) => (
                      <div key={subKey}>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          {subKey}
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {resources.length}
                          </Badge>
                        </h3>
                        <div className="space-y-3">
                          {resources.map((resource, index) => (
                            <div 
                              key={index} 
                              className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-100 hover:border-slate-200"
                              onClick={() => window.open(resource.url, '_blank')}
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 mb-1 hover:text-blue-600 transition-colors">
                                  {resource.name}
                                </h4>
                                <p className="text-sm text-slate-600 mb-2">
                                  {resource.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {resource.tags.map((tag, tagIndex) => (
                                    <Badge 
                                      key={tagIndex} 
                                      variant="outline" 
                                      className="text-xs"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-slate-400 hover:text-blue-600 transition-colors ml-4" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Type Navigation */}
      <section id="resources" className={`py-20 ${activeView === 'resource' ? 'bg-white' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('resource_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('resource_subtitle')}
            </p>
            {activeView !== 'resource' && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-700">
                  {t('switch_to_resource_view')}
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(resourceTypeCategories).map(([key, category]) => (
              <Card key={key} className={`group hover:shadow-xl transition-all duration-300 border-slate-200 ${activeView !== 'resource' ? 'opacity-75' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-lg p-3 group-hover:scale-110 transition-transform">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.resources.map((resource, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-100 hover:border-slate-200"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1 hover:text-blue-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-slate-600 mb-2">
                            {resource.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {resource.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 hover:text-blue-600 transition-colors ml-4" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News and Media Section */}
      <section id="news" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t('news_title')}
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('news_subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(functionalCategories["看资讯"].subcategories).map(([key, resources]) => (
              <Card key={key} className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {key}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {resources.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-white border border-purple-100 hover:border-purple-200 transition-colors cursor-pointer hover:bg-purple-50"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1 hover:text-purple-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {resource.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs border-purple-200 text-purple-700">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-400 hover:text-purple-600 transition-colors ml-4" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* German Special Section */}
      <section id="german" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t('german_title')}
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('german_subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(germanSpecialResources.categories).map(([key, resources]) => (
              <Card key={key} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {key}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-white border border-orange-100 hover:border-orange-200 transition-colors cursor-pointer hover:bg-orange-50"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 mb-1 hover:text-orange-600 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {resource.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs border-orange-200 text-orange-700">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-orange-400 hover:text-orange-600 transition-colors ml-4" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('faq_title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('faq_subtitle')}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: 'faq_q1', a: 'faq_a1' },
              { q: 'faq_q2', a: 'faq_a2' },
              { q: 'faq_q3', a: 'faq_a3' }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 transition-colors">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">EconNav</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                {t('footer_description')}
              </p>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>fangin1230@gmail.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">{t('nav_home')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors">{t('nav_functional')}</a></li>
                <li><a href="#resources" className="hover:text-blue-400 transition-colors">{t('nav_resources')}</a></li>
                <li><a href="#german" className="hover:text-blue-400 transition-colors">{t('nav_german')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t('main_categories')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('find_data')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('read_policy')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('do_research')}</a></li>
                <li><a href="#functional" className="hover:text-blue-400 transition-colors" onClick={() => setActiveView('functional')}>{t('watch_market')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 EconNav. All rights reserved. Created by fangxin.</p>
          </div>
        </div>
      </footer>
      </div>
    </AntiBot>
  );
}