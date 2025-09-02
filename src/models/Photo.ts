// models/Service.ts
import type { LocalizedText } from "./LocalizedText.ts";

export interface ImageItem {
  src: string;
  title?: LocalizedText;
  description?: LocalizedText;
}

export interface Photo {
  id: string;
  serviceId?: string;       // привязка к услуге
  subserviceId?: string;    // привязка к подуслуге
  doctorId?: string;        // привязка к врачу

  title?: LocalizedText;
  description?: LocalizedText;

  mainImage: string;
  imgArr?: ImageItem[];     // дополнительные фото для лайтбокса
}