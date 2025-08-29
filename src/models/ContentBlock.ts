// models/ContentBlock.ts
import type {LocalizedText} from "./LocalizedText.ts";
import type {FAQ} from "./FAQ.ts";

export type ContentBlockType = "text" | "image" | "faq";

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  content?: LocalizedText;
  image?: string;
  FAQs?: FAQ[];
}
