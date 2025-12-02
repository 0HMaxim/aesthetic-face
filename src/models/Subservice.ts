// models/Subservice.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Subservice {
  id?: string;
  serviceId: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  headerTitle?: LocalizedText;
  content?: ContentBlock[];
  slug: string;
  blogs?: string[];
  prices?: string[];
  specials?: string[];
  employees?: string[];
  subservices?: string[];
  mainImage?: string;
}