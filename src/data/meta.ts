import type { SiteMeta } from '../types/Meta';

/**
 * Временное хранение бизнес-контента, пока не подключена база данных.
 * Когда подключите Firebase — этот файл заменится на хук (например useSiteMeta),
 * который возвращает данные того же типа SiteMeta. Компоненты, использующие
 * meta, менять не придётся.
 */
export const meta: SiteMeta = {
    description: {
        uk: 'Преміальний салон краси, присвячений догляду за шкірою, волоссям і тілом.',
        ru: 'Премиальный салон красоты, посвящённый уходу за кожей, волосами и телом.',
        de: 'Ein exklusiver Beauty-Salon für Haut-, Haar- und Körperpflege.',
        en: 'A premium beauty salon dedicated to skin, hair and body care.',
    },
    address: {
        uk: 'Küterstraße 5, Kiel',
        ru: 'Küterstraße 5, Kiel',
        de: 'Küterstraße 5, Kiel',
        en: 'Küterstraße 5, Kiel',
    },
    workingHours: [
        {
            day: { uk: 'Понеділок', ru: 'Понедельник', de: 'Montag', en: 'Monday' },
            shortDay: { uk: 'Пн', ru: 'Пн', de: 'Mo', en: 'Mon' },
            hours: { uk: '10:00–20:00', ru: '10:00–20:00', de: '10:00–20:00', en: '10:00 AM–8:00 PM' },
        },
        {
            day: { uk: 'Вівторок', ru: 'Вторник', de: 'Dienstag', en: 'Tuesday' },
            shortDay: { uk: 'Вт', ru: 'Вт', de: 'Di', en: 'Tue' },
            hours: { uk: '10:00–20:00', ru: '10:00–20:00', de: '10:00–20:00', en: '10:00 AM–8:00 PM' },
        },
        {
            day: { uk: 'Середа', ru: 'Среда', de: 'Mittwoch', en: 'Wednesday' },
            shortDay: { uk: 'Ср', ru: 'Ср', de: 'Mi', en: 'Wed' },
            hours: { uk: '10:00–20:00', ru: '10:00–20:00', de: '10:00–20:00', en: '10:00 AM–8:00 PM' },
        },
        {
            day: { uk: 'Четвер', ru: 'Четверг', de: 'Donnerstag', en: 'Thursday' },
            shortDay: { uk: 'Чт', ru: 'Чт', de: 'Do', en: 'Thu' },
            hours: { uk: '10:00–20:00', ru: '10:00–20:00', de: '10:00–20:00', en: '10:00 AM–8:00 PM' },
        },
        {
            day: { uk: "П'ятниця", ru: 'Пятница', de: 'Freitag', en: 'Friday' },
            shortDay: { uk: 'Пт', ru: 'Пт', de: 'Fr', en: 'Fri' },
            hours: { uk: '10:00–20:00', ru: '10:00–20:00', de: '10:00–20:00', en: '10:00 AM–8:00 PM' },
        },
        {
            day: { uk: 'Субота', ru: 'Суббота', de: 'Samstag', en: 'Saturday' },
            shortDay: { uk: 'Сб', ru: 'Сб', de: 'Sa', en: 'Sat' },
            hours: { uk: '10:00–18:00', ru: '10:00–18:00', de: '10:00–18:00', en: '10:00 AM–6:00 PM' },
        },
        {
            day: { uk: 'Неділя', ru: 'Воскресенье', de: 'Sonntag', en: 'Sunday' },
            shortDay: { uk: 'Нд', ru: 'Вс', de: 'So', en: 'Sun' },
            hours: { uk: 'Закрито', ru: 'Закрыто', de: 'Geschlossen', en: 'Closed' },
        },
    ],
    phone: '+491234567890',
    email: 'info@aestheticface.com',
    socialLinks: [
        { icon: 'mdi:instagram', href: 'https://instagram.com', label: 'Instagram' },
        { icon: 'ic:baseline-facebook', href: 'https://facebook.com', label: 'Facebook' },
        { icon: 'mdi:whatsapp', href: 'https://wa.me', label: 'WhatsApp' },
    ],
};