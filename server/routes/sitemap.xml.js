export default defineEventHandler((event) => {
  // Автоматически определяем домен из запроса
  const host = getRequestHeader(event, 'host') || 'localhost:3000'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseURL = `${protocol}://${host}`
  
  // Текущая дата для lastmod
  const lastmod = new Date().toISOString().split('T')[0]
  
  // Все поддерживаемые языки
  const languages = ['en', 'es', 'zh', 'hi', 'fr', 'ar', 'pt', 'ru', 'de', 'ja', 'uk']
  
  // Генерируем hreflang ссылки для главной страницы
  const hreflangLinks = languages.map(lang => 
    `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseURL}/?lang=${lang}"/>`
  ).join('\n')
  
  // Генерируем URL для всех языковых версий
  const languageUrls = languages.map(lang => `
  <url>
    <loc>${baseURL}/?lang=${lang}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Main page with all language alternatives -->
  <url>
    <loc>${baseURL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${hreflangLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}/"/>
  </url>
${languageUrls}
</urlset>`

  // Устанавливаем правильный Content-Type
  setResponseHeader(event, 'Content-Type', 'application/xml')
  
  return sitemap
})

