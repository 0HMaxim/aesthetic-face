import type {LocalizedText} from "./LocalizedText.ts";

export interface FAQ {
  id: string;
  serviceId?: string;     // если FAQ относится к главной услуге
  subserviceId?: string;  // если FAQ относится к подуслуге
  question: LocalizedText;
  answer: LocalizedText;
}