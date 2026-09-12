// src/types/ContentBlock.ts
import type { LocalizedText } from './LocalizedText';

export interface LocalizedImage {
    src: string;
    alt: LocalizedText; // для SEO — обязателен alt на каждом языке
}

interface BaseBlock {
    id: string;
    order: number;
}

export interface HeadingBlock extends BaseBlock {
    type: 'heading';
    level: 2 | 3;
    text: LocalizedText;
}

export interface ParagraphBlock extends BaseBlock {
    type: 'paragraph';
    text: LocalizedText;
}

export interface ImageBlock extends BaseBlock {
    type: 'image';
    image: LocalizedImage;
    size: 'sm' | 'md' | 'lg' | 'full'; // ширина + центрирование
    caption?: LocalizedText;
}

export interface ImageTextBlock extends BaseBlock {
    type: 'imageText';
    image: LocalizedImage;
    heading?: LocalizedText;
    text: LocalizedText;
    imagePosition: 'left' | 'right';
    split: 'narrow' | 'half' | 'wide'; // соотношение фото/текст
}

export interface ImageGridBlock extends BaseBlock {
    type: 'imageGrid';
    images: LocalizedImage[];
    columns: 2 | 3 | 4; // колонок на desktop, mobile всегда адаптируется
}

export type ContentBlock =
    | HeadingBlock
    | ParagraphBlock
    | ImageBlock
    | ImageTextBlock
    | ImageGridBlock;