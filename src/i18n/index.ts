import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import uk from './locales/uk.json';

export const supportedLanguages = ['uk', 'ru', 'de', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            de: { translation: de },
            uk: { translation: uk },
        },
        fallbackLng: 'en',
        supportedLngs: supportedLanguages,
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;