import { ref, computed } from 'vue'

// Import all locale files
import en from '~/locale/en.js'
import es from '~/locale/es.js'
import zh from '~/locale/zh.js'
import hi from '~/locale/hi.js'
import fr from '~/locale/fr.js'
import ar from '~/locale/ar.js'
import pt from '~/locale/pt.js'
import ru from '~/locale/ru.js'
import de from '~/locale/de.js'
import ja from '~/locale/ja.js'
import uk from '~/locale/uk.js'

const locales = {
  en,
  es,
  zh,
  hi,
  fr,
  ar,
  pt,
  ru,
  de,
  ja,
  uk
}

const currentLocale = ref('en')

export const useI18n = () => {
  const t = computed(() => {
    return locales[currentLocale.value] || locales.en
  })

  const setLocale = (locale) => {
    if (locales[locale]) {
      currentLocale.value = locale
      // Update HTML lang attribute
      if (process.client) {
        document.documentElement.lang = locale
        document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
      }
    }
  }

  const locale = computed(() => currentLocale.value)

  const availableLocales = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' }
  ]

  return {
    t,
    locale,
    setLocale,
    availableLocales
  }
}

