// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const rawTranslations = import.meta.glob('./lang/**/*.json', { eager: true });
const resources = {};


for (const path in rawTranslations) {
  const match = path.match(/\.\/lang\/(\w+)\/(.*)\.json$/);
  if (!match) continue;

  const [, lang, filename] = match;

  if (!resources[lang]) {
    resources[lang] = { translation: {} };
  }

  const translationObject = rawTranslations[path].default || rawTranslations[path];

  resources[lang].translation[filename] = translationObject;
}

const fallbackLang = import.meta.env.VITE_APP_FALLBACK_LOCALE || 'en';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng: fallbackLang,
  interpolation: { escapeValue: false },
  detection: {
    order: ['path', 'localStorage', 'navigator'],
    lookupFromPathIndex: 1,
  },
});


export default i18n;
