// src/types/Faq.ts

import type {LocalizedText} from "./LocalizedText.ts";

export interface Faq {
    id: string;
    question: LocalizedText;
    answer: LocalizedText;
    serviceId?: number;
    order?: number;
    isActive?: boolean;
}