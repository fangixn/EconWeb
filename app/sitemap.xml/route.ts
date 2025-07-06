export async function GET() {
  const baseUrl = 'https://economicsweb.org';
  
  // 静态页面路径和元数据
  const routes = [
    { path: '', changefreq: 'daily', priority: '1.0' },
    { path: '#learning', changefreq: 'weekly', priority: '0.9' },
    { path: '#media', changefreq: 'weekly', priority: '0.9' },
    { path: '#policy', changefreq: 'weekly', priority: '0.9' },
    { path: '#data', changefreq: 'weekly', priority: '0.9' },
    { path: '#market', changefreq: 'weekly', priority: '0.8' },
    { path: '#tools', changefreq: 'weekly', priority: '0.8' },
    { path: '#top-journals', changefreq: 'weekly', priority: '0.8' },
    { path: '#german', changefreq: 'weekly', priority: '0.7' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <mobile:mobile/>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 