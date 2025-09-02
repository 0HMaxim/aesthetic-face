// models/Service.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Service {
  id: string;
  title: LocalizedText;
  slug: string;
  mainImage?: string;
  content?: ContentBlock[];
  faqs?: string[];
  doctors?: string[];
  subservices?: string[];
}