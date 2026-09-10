import type { LucideIcon } from 'lucide-react';

export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: string;
    duration: string;
    icon: LucideIcon;
    gradient: string;
    image: string;
}