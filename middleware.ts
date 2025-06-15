import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 可疑用户代理列表
const suspiciousUserAgents = [
  'bot', 'crawler', 'spider', 'scraper', 'wget', 'curl',
  'python-requests', 'scrapy', 'selenium', 'phantomjs',
  'headless', 'automation', 'robot', 'crawl'
];

// 速率限制存储 (生产环境建议使用Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// 清理过期的速率限制记录
function cleanupRateLimit() {
  const now = Date.now();
  const keysToDelete: string[] = [];
  
  rateLimitMap.forEach((value, key) => {
    if (now > value.resetTime) {
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => rateLimitMap.delete(key));
}

// 检查是否为可疑用户代理
function isSuspiciousUserAgent(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return suspiciousUserAgents.some(suspicious => ua.includes(suspicious));
}

// 速率限制检查
function checkRateLimit(ip: string, limit: number = 100, windowMs: number = 60000): boolean {
  cleanupRateLimit();
  
  const now = Date.now();
  const key = `rate_limit_${ip}`;
  const current = rateLimitMap.get(key);
  
  if (!current) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= limit) {
    return false;
  }
  
  current.count++;
  return true;
}

// 检查请求模式是否可疑
function isSuspiciousPattern(request: NextRequest): boolean {
  const url = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  
  // 检查是否缺少常见浏览器头部
  const hasAccept = request.headers.get('accept');
  const hasAcceptLanguage = request.headers.get('accept-language');
  const hasAcceptEncoding = request.headers.get('accept-encoding');
  
  if (!hasAccept || !hasAcceptLanguage || !hasAcceptEncoding) {
    return true;
  }
  
  // 检查是否直接访问API端点或敏感路径
  if (url.pathname.includes('/api/') || url.pathname.includes('/_next/')) {
    return false; // 这些是正常的Next.js路径
  }
  
  // 检查是否有过多的查询参数（可能是自动化工具）
  if (url.searchParams.toString().length > 500) {
    return true;
  }
  
  return false;
}

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  
  // 1. 检查用户代理
  if (isSuspiciousUserAgent(userAgent)) {
    console.log(`Blocked suspicious user agent: ${userAgent} from IP: ${ip}`);
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // 2. 速率限制检查
  if (!checkRateLimit(ip, 100, 60000)) { // 每分钟最多100次请求
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Retry-After': '60'
      }
    });
  }
  
  // 3. 检查可疑请求模式
  if (isSuspiciousPattern(request)) {
    console.log(`Blocked suspicious pattern from IP: ${ip}, UA: ${userAgent}`);
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // 4. 添加安全头部
  const response = NextResponse.next();
  
  // 防止点击劫持
  response.headers.set('X-Frame-Options', 'DENY');
  
  // 防止MIME类型嗅探
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // XSS保护
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // 引用者策略
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // 内容安全策略
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self';"
  );
  
  return response;
}

export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 