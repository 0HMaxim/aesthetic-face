import type { LocalizedText } from "./LocalizedText";
import type {MetaTab} from "./MetaTab.ts";

export type BusinessType =
    | "clinic"
    | "salon"
    | "company"
    | "studio"
    | "shop"
    | "other";

export interface BusinessMeta {
    name: LocalizedText;
    shortName?: LocalizedText;
    type: BusinessType;
    description?: LocalizedText;
    slogan?: LocalizedText;
    logo?: string;

    tabs?: Record<string, MetaTab>;
}
