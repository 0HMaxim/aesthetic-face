import type { LocalizedText } from "./LocalizedText";

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


    blogHeaderImage?: string;
    servicesHeaderImage?: string;
    specialsHeaderImage?: string;
    employeesHeaderImage?: string; // на будущее
    pricesHeaderImage?: string;
    faqsHeaderImage?: string;
    contactsHeaderImage?: string;
    aboutHeaderImage?: string;
    galleryHeaderImage?: string;

    homeHeaderImage?: string;


    tabs?: {
        services?: LocalizedText;
        employees?: LocalizedText;
        prices?: LocalizedText;
        specials?: LocalizedText;
    };

}
