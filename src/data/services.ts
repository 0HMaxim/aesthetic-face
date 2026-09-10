import { Sparkles, Scissors, Palette, Heart, Star, Clock } from 'lucide-react';
import type {Service} from "../types/Service.ts";

// TODO: per AGENTS.md this list should eventually be loaded from Firebase
// (with title/description per language) instead of being hardcoded here.
export const services: Service[] = [
    {
        id: 1,
        slug: 'facial-treatment',
        title: 'Facial Treatment',
        description:
            'Professional facial treatments including deep cleansing, exfoliation, and hydration for radiant skin.',
        price: 'from $80',
        duration: '60-90 min',
        icon: Sparkles,
        gradient: 'from-[#c8a165] to-[#9c6b3e]',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    },
    {
        id: 2,
        slug: 'hair-styling',
        title: 'Hair Styling',
        description:
            'Expert hair cutting, coloring, and styling services tailored to your unique style and preferences.',
        price: 'from $60',
        duration: '45-120 min',
        icon: Scissors,
        gradient: 'from-[#9c6b3e] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    },
    {
        id: 3,
        slug: 'makeup-artistry',
        title: 'Makeup Artistry',
        description:
            'Professional makeup application for any occasion, from natural to glamorous looks.',
        price: 'from $70',
        duration: '45-60 min',
        icon: Palette,
        gradient: 'from-[#efdfc0] to-[#c8a165]',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    },
    {
        id: 4,
        slug: 'skin-care',
        title: 'Skin Care',
        description:
            'Customized skincare treatments including anti-aging, acne treatment, and skin rejuvenation.',
        price: 'from $90',
        duration: '60-75 min',
        icon: Heart,
        gradient: 'from-[#7a4b26] to-[#4a2c17]',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    },
    {
        id: 5,
        slug: 'manicure-pedicure',
        title: 'Manicure & Pedicure',
        description:
            'Luxurious nail care services including gel, classic, and spa manicure and pedicure treatments.',
        price: 'from $50',
        duration: '45-90 min',
        icon: Star,
        gradient: 'from-[#c8a165] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    },
    {
        id: 6,
        slug: 'spa-packages',
        title: 'Spa Packages',
        description:
            'Complete relaxation packages combining multiple treatments for the ultimate pampering experience.',
        price: 'from $150',
        duration: '120-180 min',
        icon: Clock,
        gradient: 'from-[#9c6b3e] to-[#4a2c17]',
        image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=800&q=80',
    },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
    services.find((service) => service.slug === slug);