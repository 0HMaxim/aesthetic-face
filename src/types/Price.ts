import type { LocalizedText } from './LocalizedText';

export interface PriceItem {
    procedure: LocalizedText;
    price: LocalizedText;
    duration?: LocalizedText; // не у всех прайс-листов есть колонка длительности
}

export interface PriceSection {
    subtitle?: LocalizedText; // напр. "Пакетні пропозиції (одна процедура)"
    items: PriceItem[];
}

export interface PriceModel {
    id: string;
    serviceIds: string[]; // связывает таблицу с одним или несколькими Service.slug
    specials?: LocalizedText; // примечание типа "діє знижка при пакеті 5 процедур"
    category: LocalizedText;
    columns: {
        procedure: LocalizedText;
        price: LocalizedText;
        duration?: LocalizedText;
    };
    sections: PriceSection[];
}