// models/ContentBlock.ts
import type { LocalizedText } from "./LocalizedText.ts";
import type {ContentBlock} from "./ContentBlock.ts";

export type ContentBlockType = "paragraph" | "image" | "heading" | "list";

export interface Blog {
  id: string;
  title: LocalizedText;
  mainImage?: string;

  subtitle: LocalizedText;
  headerTitle?: LocalizedText;

  slug: string;


  content?: ContentBlock[];


  serviceId?: string[];
  subservices?: string[];
  specials?: string[];
}

