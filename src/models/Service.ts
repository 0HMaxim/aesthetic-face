// models/Service.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Service {
  id?: string;

  // 🔹 Основные тексты
  title: LocalizedText;
  subtitle: LocalizedText;
  headerTitle?: LocalizedText;

  // 🔹 Идентификаторы и связи
  slug: string;
  subservicesId?: string[];
  specials?: string[];
  employees?: string[];
  blogs?: string[];

  // 🔹 Контент
  mainImage?: string;
  content?: ContentBlock[];
}
