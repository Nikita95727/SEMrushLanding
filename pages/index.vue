<template>
  <div class="min-h-screen bg-gradient-to-br from-semrush-gray-50 via-white to-blue-50" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Header with Language Selector -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div class="container-custom py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="text-3xl font-display font-bold text-semrush-orange pl-[10px] md:pl-0">SEMrush</div>
          </div>
          
          <!-- Language Selector -->
          <div class="relative group">
            <button class="flex items-center space-x-2 px-4 py-2 bg-semrush-gray-100 hover:bg-semrush-gray-200 rounded-lg transition-colors">
              <span class="text-2xl">{{ currentLanguage?.flag }}</span>
              <span class="font-medium text-sm">{{ currentLanguage?.name }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div class="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-card-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-96 overflow-y-auto">
              <div class="p-2">
                <button
                  v-for="lang in availableLocales"
                  :key="lang.code"
                  @click="setLocale(lang.code)"
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-semrush-gray-50 transition-colors"
                  :class="{ 'bg-semrush-orange/10 text-semrush-orange': locale === lang.code }"
                >
                  <span class="text-2xl">{{ lang.flag }}</span>
                  <span class="font-medium text-sm">{{ lang.name }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-semrush-orange/5 via-semrush-blue/5 to-semrush-purple/5" />
      <div class="container-custom relative">
        <div class="text-center max-w-5xl mx-auto">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-semrush-orange to-semrush-orange-light text-white rounded-full font-semibold text-sm mb-6 animate-pulse-slow">
            {{ t.hero.badge }}
          </div>
          
          <!-- Headline -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-semrush-dark mb-6 leading-tight animate-fade-in">
            {{ t.hero.headline }}
          </h1>
          
          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-semrush-gray-600 mb-4 font-medium animate-slide-up">
            {{ t.hero.subheadline }}
          </p>
          
          <!-- Description -->
          <p class="text-lg text-semrush-gray-500 mb-8 max-w-3xl mx-auto animate-slide-up">
            {{ t.hero.description }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up">
            <a :href="affiliateLink" target="_blank" rel="noopener noreferrer" class="btn-primary">
              {{ t.hero.cta }}
            </a>
            <button class="btn-secondary">
              {{ t.hero.ctaSecondary }}
            </button>
          </div>
          
          <!-- Trust Badge -->
          <p class="text-sm text-semrush-gray-500 mb-12">
            {{ t.hero.trustBadge }}
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div v-for="(stat, index) in t.hero.stats" :key="index" class="text-center animate-fade-in">
              <div class="text-3xl md:text-4xl font-bold text-semrush-orange mb-2">{{ stat.number }}</div>
              <div class="text-sm text-semrush-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-semrush-dark mb-4">
            {{ t.features.title }}
          </h2>
          <p class="text-lg text-semrush-gray-600">
            {{ t.features.subtitle }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in t.features.items" :key="index" class="card group hover:border-semrush-orange border-2 border-transparent transition-all">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold text-semrush-dark mb-3 group-hover:text-semrush-orange transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-semrush-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="section-padding bg-gradient-to-br from-semrush-gray-50 to-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-semrush-dark mb-4">
            {{ t.comparison.title }}
          </h2>
          <p class="text-lg text-semrush-gray-600">
            {{ t.comparison.subtitle }}
          </p>
        </div>
        
        <div class="bg-white rounded-2xl shadow-card overflow-hidden max-w-4xl mx-auto">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-semrush-orange text-white">
                <tr>
                  <th v-for="(header, index) in t.comparison.table.headers" :key="index" class="px-6 py-4 text-left font-bold">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in t.comparison.table.rows" :key="rowIndex" class="border-b hover:bg-semrush-gray-50 transition-colors">
                  <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-6 py-4" :class="cellIndex === 0 ? 'font-semibold text-semrush-dark' : 'text-semrush-gray-600'">
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="bg-gradient-to-r from-semrush-orange to-semrush-orange-light p-6 text-center text-white font-semibold">
            🏆 {{ t.comparison.winner }}
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-semrush-dark text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-semrush-orange/10 via-transparent to-semrush-blue/10" />
      <div class="container-custom relative">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            {{ t.benefits.title }}
          </h2>
          <p class="text-lg text-semrush-gray-300">
            {{ t.benefits.subtitle }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="(benefit, index) in t.benefits.items" :key="index" class="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-colors">
            <div class="text-2xl flex-shrink-0">{{ benefit.icon }}</div>
            <p class="text-sm leading-relaxed">{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-semrush-dark mb-4">
            {{ t.testimonials.title }}
          </h2>
          <p class="text-lg text-semrush-gray-600">
            {{ t.testimonials.subtitle }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(testimonial, index) in t.testimonials.items" :key="index" class="card">
            <div class="flex items-center mb-4">
              <div class="text-5xl mr-4">{{ testimonial.image }}</div>
              <div>
                <div class="font-bold text-semrush-dark">{{ testimonial.name }}</div>
                <div class="text-sm text-semrush-gray-600">{{ testimonial.role }}</div>
              </div>
            </div>
            <div class="flex mb-3">
              <span v-for="star in testimonial.rating" :key="star" class="text-yellow-400 text-xl">⭐</span>
            </div>
            <p class="text-semrush-gray-600 leading-relaxed italic">
              "{{ testimonial.text }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section-padding bg-gradient-to-br from-semrush-gray-50 to-blue-50">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-semrush-dark mb-4">
            {{ t.pricing.title }}
          </h2>
          <p class="text-lg text-semrush-gray-600">
            {{ t.pricing.subtitle }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(plan, index) in t.pricing.plans" :key="index" class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-8 relative" :class="{ 'ring-4 ring-semrush-orange transform scale-105': plan.popular }">
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-semrush-orange to-semrush-orange-light text-white px-6 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-semrush-dark mb-2">{{ plan.name }}</h3>
              <div class="text-4xl font-bold text-semrush-orange mb-2">
                {{ plan.price }}
              </div>
              <div class="text-sm text-semrush-gray-600 mb-4">{{ plan.period }}</div>
              <p class="text-sm text-semrush-gray-600">{{ plan.description }}</p>
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start text-sm">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <a :href="affiliateLink" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 rounded-lg font-bold transition-all" :class="plan.popular ? 'bg-gradient-to-r from-semrush-orange to-semrush-orange-light text-white hover:shadow-glow-orange' : 'bg-semrush-gray-100 text-semrush-dark hover:bg-semrush-gray-200'">
              {{ plan.cta }}
            </a>
          </div>
        </div>
        
        <p class="text-center mt-12 text-lg text-semrush-gray-600 font-semibold">
          {{ t.pricing.guarantee }}
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-semrush-dark mb-4">
            {{ t.faq.title }}
          </h2>
          <p class="text-lg text-semrush-gray-600">
            {{ t.faq.subtitle }}
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(item, index) in t.faq.items" :key="index" class="card">
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer list-none">
                <h3 class="text-lg font-bold text-semrush-dark group-open:text-semrush-orange transition-colors">
                  {{ item.question }}
                </h3>
                <svg class="w-5 h-5 text-semrush-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-semrush-gray-600 leading-relaxed">
                {{ item.answer }}
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="section-padding bg-gradient-to-br from-semrush-orange via-semrush-orange-light to-semrush-purple text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      <div class="container-custom text-center relative">
        <h2 class="text-3xl md:text-5xl font-display font-bold mb-4">
          {{ t.cta.title }}
        </h2>
        <p class="text-xl mb-2">
          {{ t.cta.subtitle }}
        </p>
        <p class="text-lg mb-8 opacity-90">
          {{ t.cta.description }}
        </p>
        
        <a :href="affiliateLink" target="_blank" rel="noopener noreferrer" class="inline-block px-12 py-5 bg-white text-semrush-orange font-bold rounded-xl text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8">
          {{ t.cta.button }}
        </a>
        
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <div v-for="(feature, index) in t.cta.features" :key="index" class="flex items-center">
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-semrush-dark text-white py-12">
      <div class="container-custom">
        <div class="text-center mb-8">
          <div class="text-2xl font-display font-bold text-semrush-orange mb-4">SEMrush Landing</div>
          <div class="flex justify-center space-x-6 mb-6">
            <a href="#" class="hover:text-semrush-orange transition-colors">{{ t.footer.links.privacy }}</a>
            <a href="#" class="hover:text-semrush-orange transition-colors">{{ t.footer.links.terms }}</a>
            <a href="#" class="hover:text-semrush-orange transition-colors">{{ t.footer.links.contact }}</a>
          </div>
        </div>
        
        <div class="text-sm text-semrush-gray-400 text-center max-w-4xl mx-auto mb-6 p-4 bg-white/5 rounded-lg">
          {{ t.footer.disclaimer }}
        </div>
        
        <div class="text-center text-sm text-semrush-gray-500">
          {{ t.footer.copyright }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { useHead, useRequestURL } from '#app'

const { t, locale, setLocale, availableLocales } = useI18n()

// Affiliate link - Replace with your actual SEMrush affiliate link
const affiliateLink = 'https://www.semrush.com/?ref=your-affiliate-id'

const currentLanguage = computed(() => {
  return availableLocales.find(l => l.code === locale.value)
})

// Auto-detect domain from current URL
const requestURL = useRequestURL()
const baseURL = computed(() => requestURL.origin)

// Generate hreflang links dynamically
const hreflangLinks = computed(() => {
  const links = [
    { rel: 'canonical', href: `${baseURL.value}/` }
  ]
  
  // Add hreflang for each language
  const languages = ['en', 'es', 'zh', 'hi', 'fr', 'ar', 'pt', 'ru', 'de', 'ja', 'uk']
  languages.forEach(lang => {
    links.push({
      rel: 'alternate',
      hreflang: lang,
      href: `${baseURL.value}/?lang=${lang}`
    })
  })
  
  // Add x-default
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${baseURL.value}/`
  })
  
  return links
})

// SEO Meta Tags with dynamic hreflang
useHead({
  title: () => t.value.meta.title,
  meta: [
    { name: 'description', content: () => t.value.meta.description },
    { name: 'keywords', content: () => t.value.meta.keywords },
    { property: 'og:title', content: () => t.value.meta.title },
    { property: 'og:description', content: () => t.value.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: () => baseURL.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => t.value.meta.title },
    { name: 'twitter:description', content: () => t.value.meta.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'SEMrush Landing' },
    { name: 'google-site-verification', content: 'XcH-9a_fiVa41zaoFxu2p-oHqUXuWjkiofsKtx7J8ao' },
  ],
  link: () => hreflangLinks.value,
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => locale.value === 'ar' ? 'rtl' : 'ltr'
  }
})
</script>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}
</style>

