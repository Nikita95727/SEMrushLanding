export default defineEventHandler((event) => {
  // Автоматически определяем домен из запроса
  const host = getRequestHeader(event, 'host') || 'localhost:3000'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseURL = `${protocol}://${host}`
  
  const robots = `# Robots.txt for SEMrush Landing Page
# Allow all search engines to index the site

User-agent: *
Allow: /

# Sitemap location (automatically detects domain)
Sitemap: ${baseURL}/sitemap.xml

# Popular search engines
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /
`

  // Устанавливаем правильный Content-Type
  setResponseHeader(event, 'Content-Type', 'text/plain')
  
  return robots
})

