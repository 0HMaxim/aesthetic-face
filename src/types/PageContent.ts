// src/types/PageContent.ts
import type { LocalizedText } from './LocalizedText';
import type { ContentBlock } from './ContentBlock';

export interface PageContent {
    title: LocalizedText;
    content: ContentBlock[];
}