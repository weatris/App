import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locale/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJSON,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
