/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  
  // 启用严格模式
  reactStrictMode: true,
  
  // 启用 SWC 压缩
  swcMinify: true,
  
  // 安全头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  
  // 重定向配置 - 将常见的爬虫目标重定向到蜜罐
  async redirects() {
    return [
      {
        source: '/wp-admin/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/administrator/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/phpmyadmin/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/backup/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/config/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/database/:path*',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/private/:path*',
        destination: '/admin',
        permanent: false,
      },
    ];
  },
  
  // 环境变量
  env: {
    ANTI_CRAWLER_ENABLED: 'true',
    RATE_LIMIT_WINDOW: '60000',
    RATE_LIMIT_MAX: '100',
  },
};

module.exports = nextConfig;
