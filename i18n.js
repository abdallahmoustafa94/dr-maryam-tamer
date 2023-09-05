// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { nextI18Next } from 'next-i18next';

const { localeSubpaths } = nextI18Next();

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar', // Set the fallback language to Arabic ('ar')
    resources: {
      en: { translation: require('./public/locales/en/common.json') },
      ar: { translation: require('./public/locales/ar/common.json') },
    },
    // Specify the namespaces you want to use
    // In this example, we're using the 'menu' namespace
  });

export default i18n;
