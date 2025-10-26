import type {LocalizedText} from "./LocalizedText.ts";

export interface FAQ {
  id?: string;
  serviceId?: string;
  subserviceId?: string;
  question: LocalizedText;
  answer: LocalizedText;
}