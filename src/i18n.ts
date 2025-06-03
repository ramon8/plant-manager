import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

const getInitialLanguage = () => {
  if (typeof navigator !== 'undefined') {
    return navigator.language.startsWith('es') ? 'es' : 'en';
  }
  return 'en';
};

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
