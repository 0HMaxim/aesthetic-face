// src/types/Service.ts
import type { LucideIcon } from 'lucide-react';
import type { LocalizedText } from './LocalizedText';

export interface Service {
    id: number;
    slug: string;
    title: LocalizedText;
    description: LocalizedText;
    price: string; // числовое значение, напр. "20" — единица измерения (€) и слово "from" рендерятся отдельно через i18n
    duration: string;
    icon: LucideIcon;
    gradient: string;
    image: string;
    priceModelId?: string;
}