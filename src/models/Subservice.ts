// models/Subservice.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Subservice {
  id?: string;
  serviceId: string;
  title: LocalizedText;
  slug: string;
  mainImage: string;
  content?: ContentBlock[];
  prices?: string[];
  employees?: string[];

  blogs?: string[];
}