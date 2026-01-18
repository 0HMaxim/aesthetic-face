import i18n from "i18next";

export const getLocalizedText = (data: any) => {
    const lang = i18n.language || "en";
    // Если данных на текущем языке нет, берем английский или первую попавшуюся строку
    return data?.[lang] || data?.["en"] || Object.values(data || {})[0] || "";
};