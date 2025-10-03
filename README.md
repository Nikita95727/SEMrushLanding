# SEMrush Landing Page - Multilingual Pre-lander

A high-converting, fully responsive, and SEO-optimized landing page for SEMrush affiliate marketing built with NuxtJS 3 and Tailwind CSS. Supports 11 languages with custom i18n implementation.

## 🚀 Features

- **11 Language Support**: English, Spanish, Chinese, Hindi, French, Arabic, Portuguese, Russian, German, Japanese, Ukrainian
- **Custom i18n System**: No external library dependencies - fully self-contained localization
- **SEO Optimized**: Complete hreflang tags, meta tags, structured data
- **High-Converting Design**: Professional UI/UX following best conversion practices
- **Fully Responsive**: Mobile-first design that works on all devices
- **RTL Support**: Full right-to-left language support (Arabic)
- **Fast Performance**: Optimized for Core Web Vitals
- **Affiliate Ready**: Pre-configured for SEMrush affiliate links

## 📋 Tech Stack

- **Framework**: NuxtJS 3
- **Styling**: Tailwind CSS 3
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Language**: Vue 3 Composition API
- **Build**: Vite
- **Type**: Static Site Generation (SSG) ready

## 🗂️ Project Structure

```
SEMrushLanding/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind config
├── composables/
│   └── useI18n.js                # Custom i18n composable
├── locale/
│   ├── en.js                     # English translations
│   ├── es.js                     # Spanish translations
│   ├── zh.js                     # Chinese translations
│   ├── hi.js                     # Hindi translations
│   ├── fr.js                     # French translations
│   ├── ar.js                     # Arabic translations
│   ├── pt.js                     # Portuguese translations
│   ├── ru.js                     # Russian translations
│   ├── de.js                     # German translations
│   ├── ja.js                     # Japanese translations
│   └── uk.js                     # Ukrainian translations
├── pages/
│   └── index.vue                 # Main landing page
├── seo_keywords_en.txt           # English SEO keywords (70+)
├── seo_keywords_es.txt           # Spanish SEO keywords (70+)
├── seo_keywords_zh.txt           # Chinese SEO keywords (70+)
├── seo_keywords_hi.txt           # Hindi SEO keywords (70+)
├── seo_keywords_fr.txt           # French SEO keywords (70+)
├── seo_keywords_ar.txt           # Arabic SEO keywords (70+)
├── seo_keywords_pt.txt           # Portuguese SEO keywords (70+)
├── seo_keywords_ru.txt           # Russian SEO keywords (70+)
├── seo_keywords_de.txt           # German SEO keywords (70+)
├── seo_keywords_ja.txt           # Japanese SEO keywords (70+)
├── seo_keywords_uk.txt           # Ukrainian SEO keywords (70+)
├── app.vue                       # App wrapper
├── nuxt.config.ts                # Nuxt configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🛠️ Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Steps

1. **Install dependencies**

```bash
npm install
```

2. **Configure your affiliate link**

Open `pages/index.vue` and replace the affiliate link:

```javascript
// Line ~344
const affiliateLink = 'https://www.semrush.com/?ref=YOUR-AFFILIATE-ID'
```

**✨ Домен определяется автоматически!**  
Hreflang теги и canonical URL генерируются динамически на основе текущего домена.  
Не нужно ничего менять - работает на localhost и на продакшене автоматически!

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

## 🏗️ Build for Production

### Static Site Generation (Recommended)

```bash
npm run generate
```

This creates a fully static site in the `.output/public` directory that can be deployed to any static hosting service.

### Server-Side Rendering

```bash
npm run build
npm run preview
```

## 📦 Deployment

### Static Hosting (Recommended)

Deploy the `.output/public` directory to:

- **Netlify**: Drop folder or connect GitHub
- **Vercel**: Import project or use CLI
- **Cloudflare Pages**: Connect repository
- **GitHub Pages**: Upload to gh-pages branch
- **AWS S3 + CloudFront**: Upload as static site

### Quick Deploy Commands

**Netlify:**
```bash
npm run generate
netlify deploy --prod --dir=.output/public
```

**Vercel:**
```bash
npm run generate
vercel --prod
```

## 🌐 Language Management

### Adding a New Language

1. **Create locale file**

Create `locale/XX.js` with your language code:

```javascript
export default {
  meta: {
    title: 'Your translated title',
    description: 'Your translated description',
    keywords: 'your, keywords, here'
  },
  // ... all other sections
}
```

2. **Update i18n composable**

Add your language to `composables/useI18n.js`:

```javascript
import xx from '~/locale/xx.js'

const locales = {
  // ... existing locales
  xx
}

const availableLocales = [
  // ... existing locales
  { code: 'xx', name: 'Your Language', flag: '🏴' }
]
```

3. **Add hreflang tag**

Update `pages/index.vue` to include hreflang:

```javascript
{ rel: 'alternate', hreflang: 'xx', href: 'https://yourdomain.com/?lang=xx' }
```

4. **Create SEO keywords file**

Create `seo_keywords_XX.txt` with 50-70+ keywords for your language.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  semrush: {
    orange: '#FF642D',        // Primary brand color
    'orange-light': '#FF7A4D', // Hover states
    'orange-dark': '#E5561A',  // Active states
    blue: '#0080FF',           // Accent color
    // ... customize as needed
  }
}
```

### Content

All content is stored in locale files (`locale/*.js`). Edit these files to customize:

- Hero headlines and CTAs
- Feature descriptions
- Testimonials
- Pricing plans
- FAQ items
- Footer content

### Styles

Global styles are in `assets/css/main.css`. Component-specific styles use Tailwind utility classes.

## 🔍 SEO Best Practices

This landing page implements:

- ✅ Semantic HTML5 structure
- ✅ Complete meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Hreflang tags for all 11 languages
- ✅ Canonical URLs
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for images (via emojis)
- ✅ Fast loading times
- ✅ Mobile-responsive design
- ✅ Clean URL structure

### SEO Keyword Files

11 comprehensive keyword files (50-70+ keywords each) are included for:
- Content optimization
- Meta tag creation
- Ad campaign targeting
- Blog post ideas
- Social media content

## 📊 Conversion Optimization

The landing page includes proven conversion elements:

- **Above the fold CTA**: Prominent call-to-action in hero section
- **Trust signals**: User stats, testimonials, ratings
- **Urgency**: Exclusive offer badges
- **Social proof**: 10M+ users, industry leader positioning
- **Risk reversal**: 7-day free trial, no credit card required
- **Comparison table**: SEMrush vs competitors
- **Multiple CTAs**: Throughout the page at strategic points
- **FAQ section**: Addresses common objections
- **Clear value proposition**: Benefits-focused copy

## 🎯 Marketing Tips

1. **A/B Testing**: Test different headlines, CTAs, and color schemes
2. **Traffic Sources**: 
   - Paid ads (Google Ads, Facebook Ads)
   - SEO blog content using provided keywords
   - YouTube reviews and tutorials
   - Social media promotion
   - Email marketing campaigns
3. **Tracking**: Add Google Analytics, Facebook Pixel, or other tracking codes to `app.vue`
4. **Retargeting**: Implement pixel tracking for ad retargeting campaigns

## 🔧 Troubleshooting

### Fonts not loading
Make sure `@nuxtjs/google-fonts` is properly installed and configured in `nuxt.config.ts`.

### Build errors
Clear cache and reinstall:
```bash
rm -rf node_modules .nuxt .output
npm install
npm run dev
```

### Language not switching
Check that the locale file exists and is imported in `composables/useI18n.js`.

### RTL layout issues
Arabic language has RTL support. Test thoroughly and adjust styles if needed.

## 📄 License

This project is provided as-is for affiliate marketing purposes. Feel free to modify and use for your campaigns.

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review the code comments
3. Test in incognito/private browsing mode
4. Clear cache and rebuild

## 🎉 Credits

- **Design**: Custom high-conversion landing page design
- **Framework**: NuxtJS 3
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts

## 📈 Performance

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔒 Security

- No external API calls (except Google Fonts)
- No sensitive data stored
- Safe for static deployment
- HTTPS recommended for production

## 🚀 Next Steps

1. Install dependencies
2. Configure your affiliate link
3. Update domain in hreflang tags
4. Customize colors and content (optional)
5. Build for production
6. Deploy to hosting service
7. Set up tracking and analytics
8. Start driving traffic!

## 💰 Monetization

This landing page is designed for SEMrush affiliate marketing through their RevShare program. Key features:

- **RevShare Model**: Earn recurring commissions
- **7-Day Free Trial**: Lower barrier to entry
- **High-Intent Traffic**: Pre-qualified visitors
- **Multiple Touchpoints**: CTAs throughout the page
- **Professional Design**: Builds trust and credibility

---

**Built with ❤️ for high-converting affiliate marketing**

**Last Updated**: October 2025

