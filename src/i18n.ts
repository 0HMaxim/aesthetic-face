import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 1. Собираем переводы из папки lang
const rawTranslations = import.meta.glob("./lang/**/*.json", { eager: true });
const resources: Record<string, { translation: any }> = {};

for (const path in rawTranslations) {
    const match = path.match(/\.\/lang\/(\w+)\/(.*)\.json$/);
    if (!match) continue;

    const [, lang, filename] = match;

    if (!resources[lang]) {
        resources[lang] = { translation: {} };
    }

    // Извлекаем данные из JSON
    const translationObject = (rawTranslations[path] as any).default ?? rawTranslations[path];

    // Записываем в ресурсы под именем файла (как namespace)
    resources[lang].translation[filename] = translationObject;
}

const fallbackLang = import.meta.env.VITE_APP_FALLBACK_LOCALE || "en";

// 2. Инициализация i18next
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: fallbackLang,
        interpolation: { escapeValue: false },
        detection: {
            // "path" важен для GitHub Pages, если slug идет в URL
            order: ["path", "localStorage", "navigator"],
            lookupFromPathIndex: 1,
        },
    });

export default i18n;