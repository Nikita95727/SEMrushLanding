# 🚀 Деплой на Vercel

## Способ 1: Через веб-интерфейс Vercel (Рекомендуется)

### Шаг 1: Подготовка
1. Убедитесь, что проект запушен на GitHub ✅
2. Зарегистрируйтесь на [vercel.com](https://vercel.com)

### Шаг 2: Импорт проекта
1. Перейдите на [vercel.com/new](https://vercel.com/new)
2. Нажмите **"Import Git Repository"**
3. Выберите репозиторий: `Nikita95727/SEMrushLanding`
4. Нажмите **"Import"**

### Шаг 3: Настройка проекта
Vercel автоматически определит Nuxt 3. Настройки:

**Framework Preset:** Nuxt.js  
**Build Command:** `npm run build`  
**Output Directory:** `.output/public`  
**Install Command:** `npm install`

### Шаг 4: Environment Variables (опционально)
Если нужны переменные окружения, добавьте их:
- `NODE_VERSION` = `18.x` (рекомендуется)

### Шаг 5: Deploy!
1. Нажмите **"Deploy"**
2. Дождитесь завершения сборки (2-3 минуты)
3. Получите ссылку на готовый сайт! 🎉

---

## Способ 2: Через Vercel CLI

### Установка CLI
```bash
npm i -g vercel
```

### Логин
```bash
vercel login
```

### Первый деплой
```bash
vercel
```

Ответьте на вопросы:
- Set up and deploy? **Y**
- Which scope? **Выберите ваш аккаунт**
- Link to existing project? **N**
- What's your project's name? **semrush-landing**
- In which directory is your code located? **./

### Продакшн деплой
```bash
vercel --prod
```

---

## ⚙️ Автоматический деплой

После первой настройки:
- ✅ Каждый **push в master** = автоматический продакшн деплой
- ✅ Каждый **push в другую ветку** = preview деплой
- ✅ Каждый **Pull Request** = preview URL

---

## 🔧 Настройка после деплоя

### 1. Обновите affiliate ссылку
В `pages/index.vue` (строка ~344):
```javascript
const affiliateLink = 'https://www.semrush.com/?ref=YOUR-AFFILIATE-ID'
```

### 2. Настройте кастомный домен (опционально)
1. В Vercel Dashboard → Settings → Domains
2. Добавьте свой домен
3. Настройте DNS записи согласно инструкциям Vercel

### 3. Проверьте SEO
Домен автоматически определяется! Hreflang теги будут использовать ваш Vercel домен.

---

## 📊 После деплоя

Ваш сайт будет доступен по адресу:
```
https://semrush-landing-xxxx.vercel.app
```

### Оптимизация:
- ✅ Автоматический SSL/HTTPS
- ✅ CDN по всему миру
- ✅ Автоматическая компрессия
- ✅ Edge Functions
- ✅ Lighthouse score 95+

---

## 🎯 Полезные команды

```bash
# Посмотреть список деплоев
vercel ls

# Получить URL последнего деплоя
vercel inspect

# Удалить деплой
vercel rm [deployment-url]

# Открыть dashboard
vercel dashboard
```

---

## 🐛 Troubleshooting

### Ошибка сборки?
1. Проверьте версию Node.js: добавьте в `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

2. Очистите кеш в Vercel Dashboard → Settings → Clear Cache

### Не работает после деплоя?
1. Проверьте логи в Vercel Dashboard → Deployments → [ваш деплой] → View Function Logs
2. Убедитесь, что все зависимости в `package.json`

---

## 🎉 Готово!

Теперь ваш SEMrush лендинг работает на Vercel с:
- 🚀 Мгновенными деплоями
- 🌍 Глобальным CDN
- 🔒 Автоматическим HTTPS
- 📊 Analytics и мониторинг
- 🎯 11 языков и полный SEO

**Удачных продаж!** 💰

