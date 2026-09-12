// src/types/Service.ts
import type { LucideIcon } from 'lucide-react';
import type { LocalizedText } from './LocalizedText';
import type { ContentBlock } from './ContentBlock';

export interface Service {
    id: number;
    slug: string;
    title: LocalizedText;
    description: LocalizedText; // короткое превью — карточки услуг, meta description
    content?: ContentBlock[]; // полный контент страницы услуги
    price: string;
    duration: string;
    icon: LucideIcon;
    gradient: string;
    image: string;
    priceModelId?: string;
}