// models/ContentBlock.ts
import type { LocalizedText } from "./LocalizedText.ts";

export type ContentBlockType = "text" | "image" | "heading";

export interface ContentBlock {
  type: ContentBlockType;
  content?: LocalizedText;
  sideText?: LocalizedText; // Для картинки — текст рядом
}