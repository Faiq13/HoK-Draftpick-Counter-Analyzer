import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

void i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: { translation: { title: '5v5 Draft Simulator', search: 'Search heroes and items...', loading: 'Loading hero roster...' } },
    id: { translation: { title: 'Simulator Draft 5v5', search: 'Cari hero dan item...', loading: 'Memuat roster hero...' } },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
