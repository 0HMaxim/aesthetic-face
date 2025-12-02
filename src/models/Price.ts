import type { LocalizedText } from "./LocalizedText";

export interface PriceItem {
  duration: string; // или LocalizedText, если "45 хв / 45 min / 45 Minuten / 45 мин"
  procedure: LocalizedText;
  price: string;
}

export interface PriceSection {
  subtitle: LocalizedText;
  items: PriceItem[];
}

export interface PriceModel {
  id?: string;
  serviceIds?: string[];
  specials?: string;
  category: LocalizedText;
  columns: {
    duration: LocalizedText;
    procedure: LocalizedText;
    price: LocalizedText;
  };
  sections: PriceSection[];
}
