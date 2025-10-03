# 🤖 Динамическая генерация SEO-файлов

## ✅ Что работает автоматически:

### 1. **Sitemap.xml** 
**URL:** `/sitemap.xml`

✨ **Полностью динамический!**
- Автоматически определяет домен (localhost, Vercel, любой хостинг)
- Генерируется при каждом запросе
- Всегда актуальная дата `lastmod`
- Включает все 11 языковых версий
- Hreflang ссылки автоматические

**На localhost:**
```xml
<loc>http://localhost:3000/</loc>
```

**На продакшене:**
```xml
<loc>https://yourdomain.com/</loc>
```

### 2. **Robots.txt**
**URL:** `/robots.txt`

✨ **Автоматически подставляет домен в Sitemap!**
```
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🚀 Как это работает на продакшене:

### При деплое на Vercel/Netlify/любой хостинг:

1. **Автоматическое определение домена:**
   ```javascript
   const host = getRequestHeader(event, 'host')
   const protocol = host.includes('localhost') ? 'http' : 'https'
   const baseURL = `${protocol}://${host}`
   ```

2. **Server Routes в Nuxt 3:**
   - `server/routes/sitemap.xml.js` - работает как API endpoint
   - `server/routes/robots.txt.js` - работает как API endpoint
   - Генерируются динамически при каждом запросе

3. **На Vercel:**
   - Работают как Serverless Functions
   - Кешируются автоматически
   - Моментальный отклик

---

## 📊 Что получают поисковики:

### Google Search Console:
```
Sitemap URL: https://yourdomain.com/sitemap.xml
✅ 12 URLs (1 главная + 11 языков)
✅ Автообновление даты
✅ Правильные hreflang теги
```

### Robots.txt:
```
✅ Разрешена индексация всего сайта
✅ Ссылка на sitemap с правильным доменом
✅ Оптимизация для всех поисковых систем
```

---

## 🎯 Для подачи на индексацию:

### Google Search Console:
1. Добавьте свой сайт
2. Перейдите в **Sitemaps**
3. Добавьте: `https://yourdomain.com/sitemap.xml`
4. Нажмите **Submit**

### Yandex Webmaster:
1. Добавьте сайт
2. Перейдите в **Индексирование → Файлы Sitemap**
3. Добавьте: `https://yourdomain.com/sitemap.xml`

### Bing Webmaster Tools:
1. Добавьте сайт
2. **Sitemaps** → Add Sitemap
3. URL: `https://yourdomain.com/sitemap.xml`

---

## ✨ Преимущества динамической генерации:

✅ **Не нужно менять URL вручную**
- Работает на любом домене автоматически
- Localhost, staging, production - везде правильные ссылки

✅ **Всегда актуальная дата**
- `lastmod` обновляется автоматически каждый день
- Поисковики видят свежий контент

✅ **Нет статических файлов**
- Не нужно пересобирать при смене домена
- Работает сразу после деплоя

✅ **SEO-friendly**
- Полное соответствие стандартам sitemap.xml
- Правильные hreflang для мультиязычности
- Оптимизация для всех поисковых систем

---

## 🔍 Проверка работы:

### Локально:
```bash
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/robots.txt
```

### На продакшене:
```bash
curl https://yourdomain.com/sitemap.xml
curl https://yourdomain.com/robots.txt
```

### Онлайн валидаторы:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://technicalseo.com/tools/robots-txt/

---

## 🎉 Готово к использованию!

**Никаких дополнительных настроек не требуется!**
- Деплой на Vercel → всё работает автоматически
- Смена домена → всё обновляется автоматически
- Добавление в Search Console → используйте `/sitemap.xml`

**Удачной индексации!** 🚀

