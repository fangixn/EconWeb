import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://economicsweb.org'),
  title: 'EconWeb - Economics Resource Navigation | 经济学资源导航站',
  description: 'Your comprehensive guide to economics resources, data, and research tools. 最全面的经济学资源导航平台，汇聚全球权威数据源、学术期刊、政策报告等专业资源。',
  keywords: 'economics, 经济学, data analysis, research, 数据分析, 学术研究, economic policy, 经济政策, financial markets, 金融市场, economic resources, 经济资源, academic journals, 学术期刊, economic data, 经济数据',
  openGraph: {
    title: 'EconWeb - Economics Resource Navigation',
    description: 'Your comprehensive guide to economics resources, data, and research tools',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN', 'de_DE', 'ja_JP', 'ko_KR'],
    url: 'https://economicsweb.org',
    siteName: 'EconWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EconWeb - Economics Resource Navigation',
    description: 'Your comprehensive guide to economics resources, data, and research tools',
    creator: '@econweb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: 'fangxin', url: 'https://economicsweb.org' }],
  creator: 'fangxin',
  publisher: 'EconWeb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://economicsweb.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA 支持 */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EconWeb" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* 字体预加载 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8773372379395342"
          crossOrigin="anonymous"></script>
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EconWeb",
              "description": "经济学资源导航站 - 最全面的经济学资源导航平台",
              "url": "https://economicsweb.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://economicsweb.org/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "author": {
                "@type": "Person",
                "name": "方馨"
              },
              "publisher": {
                "@type": "Organization",
                "name": "EconWeb",
                "url": "https://economicsweb.org"
              }
            })
          }}
        />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z1JHD5MD7Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z1JHD5MD7Z');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
