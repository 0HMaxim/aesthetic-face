// models/Service.ts
import type {ContentBlock} from "./ContentBlock.ts";
import type {LocalizedText} from "./LocalizedText.ts";

export interface Special {
  id?: string;
  title: LocalizedText
  subtitle: LocalizedText

  headerTitle?: LocalizedText

  serviceId?: string[];
  prices?: string[];
  blogs?: string[];

  content: ContentBlock[];
  slug: string;

  mainImage?: string;
}
