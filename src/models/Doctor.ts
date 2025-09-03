import type { LocalizedText } from "./LocalizedText";

export interface Doctor {
  id: string;
  fullName: LocalizedText;           // Полное имя на разных языках
  position: LocalizedText;           // Должность
  specializations: LocalizedText[];  // Список специализаций
  education: LocalizedText[];        // Список образований


  certificates?: string[];
  photo?: string;

  shortName: LocalizedText;
  slug: string;             // для URL
}