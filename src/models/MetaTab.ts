// src/models/MetaTab.ts
import type { LocalizedText } from "./LocalizedText";

export interface MetaTab {
    title: LocalizedText;
    shortName: LocalizedText;
    description?: LocalizedText;
    route: string;
    headerImage?: string;
    enabled?: boolean;
    order?: number;
}