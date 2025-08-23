// models/ContentBlock.ts
import type {LocalizedText} from "./LocalizedText.ts";

export type ContentBlockType = "text" | "image" | "faq";

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  content?: LocalizedText;
  image?: string;
  faqIds?: string[];
}
