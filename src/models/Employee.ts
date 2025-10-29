import type { LocalizedText } from "./LocalizedText";


export interface Employee {
  id?: string;
  fullName: LocalizedText;
  shortName: LocalizedText;
  position: LocalizedText;
  specializations: LocalizedText[];
  education: LocalizedText[];
  certificates: string []; // ✅ исправлено
  photo?: string;
  slug: string;
}
