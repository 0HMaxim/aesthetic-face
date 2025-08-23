import type { LocalizedText } from "./LocalizedText";

export interface Doctor {
  id: string;
  fullName: LocalizedText;           // Полное имя на разных языках
  position: LocalizedText;           // Должность
  specializations: LocalizedText[];  // Список специализаций
  education: LocalizedText[];        // Список образований
  certificates?: string[];           // Сертификаты (можно хранить пути к PDF/изображениям)
  photo?: string;                    // Фото
  services?: string[];               // id услуг
  subservices?: string[];            // id подуслуг
}
