import type { LocalizedText } from '../types/LocalizedText';

// Порядок, в котором ищем перевод, если для текущего языка поле не заполнено.
const FALLBACK_ORDER = ['uk', 'en', 'ru', 'de'] as const;

export const getLocalizedText = (
    text: LocalizedText | undefined,
    lang: string = 'uk',
): string => {
    if (!text) return '';

    const resolve = (code: string): string | undefined => {
        const value = text[code];
        return Array.isArray(value) ? value.join(', ') : value;
    };

    return resolve(lang) ?? FALLBACK_ORDER.map(resolve).find((v) => v !== undefined) ?? '';
};