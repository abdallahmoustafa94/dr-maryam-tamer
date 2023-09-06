// config/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ar', // Default language
    fallbackLng: 'ar', // Fallback language
    supportedLngs: ['en', 'ar'], // Supported languages
    resources: {
      en: {
        translation: require('../public/locales/en.json'),
      },
      ar: {
        translation: require('../public/locales/ar.json'),
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
