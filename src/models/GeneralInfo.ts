import type { LocalizedText } from "./LocalizedText";

export interface WorkingDay {
  days: LocalizedText | LocalizedText[];
  hours: string;
}

export interface GeneralInfo {
  address: LocalizedText;
  phone: LocalizedText;
  working_hours: WorkingDay[];
  email: string;
  messengers: {
    telegram?: string;
    viber?: string;
    whatsapp?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
  map: string;
}
