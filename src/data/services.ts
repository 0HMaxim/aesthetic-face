import { Feather, Syringe, Zap, Sun } from 'lucide-react';
import type { Service } from '../types/Service.ts';

// TODO: per AGENTS.md this list should eventually be loaded from Firebase
// (title/description per language, price/duration derived from priceModels there too).
export const services: Service[] = [
    {
        id: 1,
        slug: 'laser-hair-removal',
        title: {
            uk: 'Лазерна епіляція (Александритовий лазер)',
            en: 'Laser Hair Removal (Alexandrite Laser)',
            ru: 'Лазерная эпиляция (Александритовый лазер)',
            de: 'Laser-Haarentfernung (Alexandrit-Laser)',
        },
        description: {
            uk: 'Швидка, безболісна та безконтактна епіляція на александритовому лазері Deka Motus Pro — від брів до пакетів для всього тіла.',
            en: 'Fast, pain-free, contactless hair removal with the Deka Motus PRO alexandrite laser, covering all body zones from eyebrows to full-body packages.',
            ru: 'Быстрая, безболезненная и бесконтактная эпиляция на александритовом лазере Deka Motus Pro — от бровей до пакетов на всё тело.',
            de: 'Schnelle, schmerzfreie und kontaktlose Haarentfernung mit dem Alexandrit-Laser Deka Motus PRO — von den Augenbrauen bis zu Ganzkörper-Paketen.',
        },
        price: '20',
        duration: '10-60 min',
        icon: Feather,
        gradient: 'from-[#efdfc0] to-[#c8a165]',
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
        priceModelId: 'laser-hair-removal',
    },
    {
        id: 2,
        slug: 'regenerative-therapy',
        title: {
            uk: 'Регенеративна терапія та нідосоми',
            en: 'Regenerative Therapy & Nidosomes',
            ru: 'Регенеративная терапия и нидосомы',
            de: 'Regenerative Therapie & Nidosomen',
        },
        description: {
            uk: 'Ін’єкційні регенеративні процедури: колаген, PDRN, ліфтинг-коктейлі, анти-вікові та вітамінні коктейлі, а також терапія нідосомами Celltermi Revive для шкіри та волосся.',
            en: 'Injectable regenerative treatments including collagen, PDRN, lifting cocktails, anti-aging and vitamin boosters, plus Celltermi Revive nidosome therapy for skin and hair.',
            ru: 'Инъекционные регенеративные процедуры: коллаген, PDRN, лифтинг-коктейли, антивозрастные и витаминные коктейли, а также терапия нидосомами Celltermi Revive для кожи и волос.',
            de: 'Injizierbare regenerative Behandlungen wie Kollagen, PDRN, Lifting-Cocktails, Anti-Aging- und Vitamin-Booster sowie die Celltermi-Revive-Nidosomen-Therapie für Haut und Haare.',
        },
        price: '70',
        duration: '30-45 min',
        icon: Syringe,
        gradient: 'from-[#7a4b26] to-[#4a2c17]',
        image: 'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=800&q=80',
        priceModelId: 'regenerative-therapy',
    },
    {
        id: 3,
        slug: 'refit-lifting',
        title: {
            uk: 'REFIT — Нехірургічний ліфтинг',
            en: 'REFIT — Non-Surgical Lifting',
            ru: 'REFIT — Нехирургический лифтинг',
            de: 'REFIT — Nicht-chirurgisches Lifting',
        },
        description: {
            uk: 'Нехірургічний ліфтинг для обличчя і тіла: зони обличчя, декольте, живота, спини, сідниць та ніг, з можливістю пакетних пропозицій.',
            en: 'Non-surgical lifting for face and body, covering face, décolletage, abdomen, back, buttocks and legs, available as single sessions or packages.',
            ru: 'Нехирургический лифтинг для лица и тела: зоны лица, декольте, живота, спины, ягодиц и ног, доступны пакетные предложения.',
            de: 'Nicht-chirurgisches Lifting für Gesicht und Körper — Gesicht, Dekolleté, Bauch, Rücken, Gesäß und Beine, als Einzelsitzung oder im Paket.',
        },
        price: '60',
        duration: '15-60 min',
        icon: Zap,
        gradient: 'from-[#9c6b3e] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
        priceModelId: 'refit-lifting',
    },
    {
        id: 4,
        slug: 'ipl-therapy',
        title: {
            uk: 'IPL терапія',
            en: 'IPL Therapy',
            ru: 'IPL терапия',
            de: 'IPL-Therapie',
        },
        description: {
            uk: 'Терапія інтенсивним імпульсним світлом для фотоомолодження, видалення пігменту, акне та пост-акне, а також розацеа й куперозу.',
            en: 'Intense pulsed light treatments for photorejuvenation, pigment removal, acne and post-acne marks, and rosacea/couperose.',
            ru: 'Терапия интенсивным импульсным светом для фотоомоложения, удаления пигмента, акне и пост-акне, а также розацеа и купероза.',
            de: 'Intense-Pulsed-Light-Behandlungen zur Photoverjüngung, Pigmententfernung, gegen Akne und Aknenarben sowie Rosacea/Couperose.',
        },
        price: '20',
        duration: '20-40 min',
        icon: Sun,
        gradient: 'from-[#c8a165] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        priceModelId: 'ipl-therapy',
    },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
    services.find((service) => service.slug === slug);