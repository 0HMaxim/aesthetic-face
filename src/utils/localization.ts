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

import type { WorkingHoursEntry } from '../types/Meta';
import {useEffect, useState} from "react";

interface WorkingHoursGroupRaw {
    days: string[];
    shortDays: string[];
    hours: string;
    closed: boolean;
}

export interface WorkingHoursGroup {
    label: string;      // полное название, напр. "Понедельник–Пятница"
    shortLabel: string; // короткое, напр. "Пн–Пт"
    hours: string;
}

// Группирует подряд идущие дни с одинаковыми часами — один проход,
// день группируется по значению часов, а короткие/полные подписи собираются параллельно.
const groupWorkingHours = (entries: WorkingHoursEntry[], lang: string): WorkingHoursGroupRaw[] => {
    const groups: WorkingHoursGroupRaw[] = [];

    entries.forEach((entry) => {
        const dayLabel = getLocalizedText(entry.day, lang);
        const shortDayLabel = getLocalizedText(entry.shortDay ?? entry.day, lang);
        const hoursLabel = getLocalizedText(entry.hours, lang);
        const closed = /closed|закрыто|закрито|geschlossen/i.test(hoursLabel);
        const lastGroup = groups[groups.length - 1];

        if (lastGroup && lastGroup.hours === hoursLabel) {
            lastGroup.days.push(dayLabel);
            lastGroup.shortDays.push(shortDayLabel);
        } else {
            groups.push({ days: [dayLabel], shortDays: [shortDayLabel], hours: hoursLabel, closed });
        }
    });

    return groups;
};

const formatRange = (days: string[]): string =>
    days.length > 1 ? `${days[0]}–${days[days.length - 1]}` : days[0];

// Возвращает группы с ОБЕИМИ подписями сразу (label и shortLabel) —
// удобно рендерить оба варианта и переключать через Tailwind (sm:hidden / hidden sm:inline)
export const getWorkingHoursGroups = (
    entries: WorkingHoursEntry[],
    lang: string,
    options: { showClosed?: boolean } = {}
): WorkingHoursGroup[] => {
    const { showClosed = true } = options;
    return groupWorkingHours(entries, lang)
        .filter((group) => showClosed || !group.closed)
        .map((group) => ({
            label: formatRange(group.days),
            shortLabel: formatRange(group.shortDays),
            hours: group.hours,
        }));
};

// Готовая строка (короткая) через " · " — для мест, где responsive-переключение не нужно
export const summarizeWorkingHoursShort = (
    entries: WorkingHoursEntry[],
    lang: string,
    options: { showClosed?: boolean } = {}
): string =>
    getWorkingHoursGroups(entries, lang, options)
        .map((g) => `${g.shortLabel} ${g.hours}`)
        .join(' · ');

// Готовая строка (полная) через " · "
export const summarizeWorkingHours = (entries: WorkingHoursEntry[], lang: string): string =>
    getWorkingHoursGroups(entries, lang, { showClosed: true })
        .map((g) => `${g.label} ${g.hours}`)
        .join(' · ');

export function useIsMobile(breakpoint: number = 640): boolean {
    const getMatch = () =>
        typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches : false;

    const [isMobile, setIsMobile] = useState(getMatch);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        setIsMobile(mql.matches); // синхронизируем сразу при монтировании
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [breakpoint]);

    return isMobile;
}