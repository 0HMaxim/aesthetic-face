// models/Service.ts
import type {LocalizedText} from "./LocalizedText.ts";
import type {Service} from "./Service.ts";
import type {Doctor} from "./Doctor.ts";

export interface Photo {
  id: string;
  service?: Service
  subservice?: Service
  doctor?: Doctor

  title?: LocalizedText
  description?: LocalizedText


  mainImage: string;
  imgArr?: string[];  // контент страницы (тексты и картинки вперемешку)
}
