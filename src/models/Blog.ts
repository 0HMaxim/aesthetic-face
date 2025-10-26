// models/ContentBlock.ts
import type { LocalizedText } from "./LocalizedText.ts";
import type {ContentBlock} from "./ContentBlock.ts";

export type ContentBlockType = "paragraph" | "image" | "heading" | "list";

export interface Blog {
  id?: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  headerTitle?: LocalizedText;
  slug: string;

  mainImage?: string;
  content?: ContentBlock[];
  serviceId?: string[];
  subservicesId?: string[];
  specials?: string[];
}

