import type { LocalizedText } from './LocalizedText';

export interface SocialLink {
    icon: string;      // Iconify icon name, e.g. "mdi:instagram"
    href: string;
    label: string;
}

export interface SiteMeta {
    description: LocalizedText;
    address: LocalizedText;
    workingHours: LocalizedText;
    phone: string;
    email: string;
    socialLinks: SocialLink[];
}

/**
 * Site-wide business content, stored as a single document in Firestore
 * (collection: "meta", doc id: "site").
 *
 * Static UI labels (button text, section titles) stay in i18next.
 * Everything here is content an admin can edit without touching code.
 */
