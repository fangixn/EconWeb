import { NextRequest, NextResponse } from 'next/server';

// 存储访问记录 (生产环境建议使用Redis或数据库)
const accessLog = new Map<string, { count: number; lastAccess: number; suspicious: boolean }>();

// 可疑行为模式检测
function detectSuspiciousBehavior(request: NextRequest): { suspicious: boolean; reason: string } {
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const referer = request.headers.get('referer') || '';
  
  // 1. 检查用户代理
  const suspiciousUA = [
    'python', 'curl', 'wget', 'scrapy', 'selenium', 'phantomjs',
    'headless', 'bot', 'crawler', 'spider', 'scraper'
  ];
  
  if (suspiciousUA.some(pattern => userAgent.toLowerCase().includes(pattern))) {
    return { suspicious: true, reason: 'Suspicious User Agent' };
  }
  
  // 2. 检查缺少的浏览器头部
  const requiredHeaders = ['accept', 'accept-language', 'accept-encoding'];
  const missingHeaders = requiredHeaders.filter(header => !request.headers.get(header));
  
  if (missingHeaders.length > 1) {
    return { suspicious: true, reason: 'Missing Browser Headers' };
  }
  
  // 3. 检查访问频率
  const now = Date.now();
  const record = accessLog.get(ip);
  
  if (record) {
    const timeDiff = now - record.lastAccess;
    
    // 如果访问间隔小于1秒，增加计数
    if (timeDiff < 1000) {
      record.count++;
      record.lastAccess = now;
      
      // 如果短时间内访问次数过多，标记为可疑
      if (record.count > 10) {
        record.suspicious = true;
        return { suspicious: true, reason: 'High Frequency Access' };
      }
    } else {
      // 重置计数
      record.count = 1;
      record.lastAccess = now;
    }
  } else {
    // 新IP，创建记录
    accessLog.set(ip, { count: 1, lastAccess: now, suspicious: false });
  }
  
  // 4. 检查Referer异常
  if (referer && !referer.includes(request.nextUrl.hostname) && !referer.includes('google') && !referer.includes('bing')) {
    // 来自外部且非搜索引擎的直接访问可能可疑
  }
  
  return { suspicious: false, reason: '' };
}

// 生成蜜罐链接
function generateHoneypot(): string[] {
  return [
    '/admin/login',
    '/wp-admin/',
    '/administrator/',
    '/phpmyadmin/',
    '/api/internal/',
    '/backup/',
    '/config/',
    '/database/',
    '/private/',
    '/secret/'
  ];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;
    
    switch (action) {
      case 'check':
        const detection = detectSuspiciousBehavior(request);
        return NextResponse.json({
          suspicious: detection.suspicious,
          reason: detection.reason,
          timestamp: Date.now()
        });
        
      case 'report':
        // 记录可疑行为
        const ip = request.ip || 'unknown';
        console.log(`Suspicious behavior reported from IP: ${ip}`, data);
        return NextResponse.json({ status: 'reported' });
        
      case 'honeypot':
        // 返回蜜罐链接
        return NextResponse.json({
          links: generateHoneypot()
        });
        
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Security API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // GET请求用于基础检测
  const detection = detectSuspiciousBehavior(request);
  
  if (detection.suspicious) {
    return NextResponse.json(
      { error: 'Access Denied', reason: detection.reason },
      { status: 403 }
    );
  }
  
  return NextResponse.json({
    status: 'ok',
    timestamp: Date.now(),
    message: 'Security check passed'
  });
} 