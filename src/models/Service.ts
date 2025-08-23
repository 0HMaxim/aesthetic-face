// models/Service.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Service {
  id: string;
  title: LocalizedText
  slug: string;             // для URL
  mainImage: string;
  content: ContentBlock[];  // контент страницы (тексты и картинки вперемешку)
  faqs?: string[];          // id FAQ
  doctors?: string[];       // id врачей
  subservices?: string[];   // id подуслуг
}
