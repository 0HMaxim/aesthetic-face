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
    workingHours: {
        uk: 'Пн–Сб: 9:00–20:00',
        ru: 'Пн–Сб: 9:00–20:00',
        de: 'Mo–Sa: 9:00–20:00',
        en: 'Mon–Sat: 9:00–20:00',
    },
    phone: '+491234567890',
    email: 'info@aestheticface.com',
    socialLinks: [
        { icon: 'mdi:instagram', href: 'https://instagram.com', label: 'Instagram' },
        { icon: 'ic:baseline-facebook', href: 'https://facebook.com', label: 'Facebook' },
        { icon: 'mdi:whatsapp', href: 'https://wa.me', label: 'WhatsApp' },
    ],

};