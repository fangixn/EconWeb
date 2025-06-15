'use client';

import { useEffect } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export default function AdminHoneypot() {
  useEffect(() => {
    // 记录访问此页面的IP和用户代理
    const logAccess = async () => {
      try {
        await fetch('/api/security', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'report',
            data: {
              page: '/admin',
              userAgent: navigator.userAgent,
              timestamp: Date.now(),
              type: 'honeypot_access'
            }
          })
        });
      } catch (error) {
        console.error('Failed to log honeypot access:', error);
      }
    };

    logAccess();

    // 延迟3秒后重定向到首页
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-red-200">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">访问受限</h1>
          <p className="text-slate-600 mb-4">
            您访问的页面不存在或访问受限。
          </p>
          <p className="text-sm text-slate-500 mb-6">
            系统已记录此次访问，3秒后将自动跳转到首页。
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Shield className="h-4 w-4" />
            <span className="text-xs">安全保护已启用</span>
          </div>
        </div>
      </div>
    </div>
  );
} 