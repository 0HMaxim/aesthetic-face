// models/Service.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";
import type {Service} from "./Service.ts";

export interface Scpecials {
  id: string;
  title: LocalizedText
  subtitle: LocalizedText
  headerTitle: LocalizedText


  service?: Service;
  subservice?: Service;

  content: ContentBlock[];
  slug: string;

  mainImage?: string;
  prices?: string[];
}
