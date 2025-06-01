import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import Übersetzungen
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationRU from './locales/ru/translation.json';

/**
 * i18n configuration
 * Supports English, German, and Russian languages
 */
i18next
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      de: {
        translation: translationDE
      },
      ru: {
        translation: translationRU
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18next;