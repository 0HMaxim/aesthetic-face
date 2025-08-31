// models/Service.ts
import type { LocalizedText } from "./LocalizedText.ts";
import type { Service } from "./Service.ts";
import type { Doctor } from "./Doctor.ts";

// Новый тип для элемента галереи внутри лайтбокса
export interface ImageItem {
  src: string;
  title?: LocalizedText;
  description?: LocalizedText;
}

export interface Photo {
  id: string;
  service?: Service;
  subservice?: Service;
  doctor?: Doctor;

  title?: LocalizedText;       // Это заголовок для всей карточки
  description?: LocalizedText; // Это описание для всей карточки

  mainImage: string;
  // Теперь imgArr - это массив объектов ImageItem
  imgArr?: ImageItem[];
}