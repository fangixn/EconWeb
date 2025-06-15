'use client';

import { useEffect, useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

interface AntiBotProps {
  children: React.ReactNode;
}

export default function AntiBot({ children }: AntiBotProps) {
  const [isBot, setIsBot] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [challenge, setChallenge] = useState<{ question: string; answer: number } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [challengePassed, setChallengePassed] = useState(false);

  // 生成简单的数学验证题
  const generateChallenge = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return {
      question: `${a} + ${b} = ?`,
      answer: a + b
    };
  };

  // 检测是否为机器人的多种方法
  const detectBot = (): boolean => {
    // 1. 检查用户代理
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'bot', 'crawler', 'spider', 'scraper', 'wget', 'curl',
      'python', 'scrapy', 'selenium', 'phantomjs', 'headless'
    ];
    
    if (botPatterns.some(pattern => userAgent.includes(pattern))) {
      return true;
    }

    // 2. 检查是否支持WebGL（大多数爬虫不支持）
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        return true;
      }
    } catch (e) {
      return true;
    }

    // 3. 检查屏幕尺寸（爬虫通常没有真实的屏幕尺寸）
    if (screen.width === 0 || screen.height === 0) {
      return true;
    }

    // 4. 检查是否支持触摸事件
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // 5. 检查浏览器特性
    if (typeof (window as any).chrome === 'undefined' && 
        typeof (window as any).safari === 'undefined' && 
        !userAgent.includes('firefox')) {
      // 可能是无头浏览器
    }

    // 6. 检查插件数量（真实浏览器通常有插件）
    if (navigator.plugins.length === 0) {
      return true;
    }

    // 7. 检查语言设置
    if (!navigator.language || navigator.language === 'en-US') {
      // 单独的语言检查不足以判断，但可以作为参考
    }

    return false;
  };

  // 鼠标移动检测
  useEffect(() => {
    let mouseMovements = 0;
    let lastMouseTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseTime > 100) { // 防止过于频繁的检测
        mouseMovements++;
        lastMouseTime = now;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // 10秒后检查鼠标移动
    const timer = setTimeout(() => {
      if (mouseMovements < 5) {
        // 鼠标移动太少，可能是机器人
        setChallenge(generateChallenge());
      }
    }, 10000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // 初始检测
  useEffect(() => {
    const timer = setTimeout(() => {
      const botDetected = detectBot();
      setIsBot(botDetected);
      
      if (botDetected) {
        setChallenge(generateChallenge());
      }
      
      setIsLoading(false);
    }, 1000); // 延迟1秒进行检测

    return () => clearTimeout(timer);
  }, []);

  // 处理验证挑战
  const handleChallengeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (challenge && parseInt(userAnswer) === challenge.answer) {
      setChallengePassed(true);
      setIsBot(false);
      setChallenge(null);
    } else {
      // 答案错误，生成新的挑战
      setChallenge(generateChallenge());
      setUserAnswer('');
    }
  };

  // 加载状态
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">正在验证访问权限...</p>
        </div>
      </div>
    );
  }

  // 显示验证挑战
  if ((isBot || challenge) && !challengePassed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-red-200">
          <div className="text-center mb-6">
            <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">安全验证</h2>
            <p className="text-slate-600">
              为了保护网站资源，请完成以下验证：
            </p>
          </div>
          
          {challenge && (
            <form onSubmit={handleChallengeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  请计算：{challenge.question}
                </label>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入答案"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                验证
              </button>
            </form>
          )}
          
          <div className="mt-6 text-xs text-slate-500 text-center">
            <p>此验证有助于防止自动化访问，保护网站资源。</p>
            <p>如果您是正常用户，请完成验证后继续访问。</p>
          </div>
        </div>
      </div>
    );
  }

  // 正常显示内容
  return <>{children}</>;
} 