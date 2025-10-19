// models/ContentBlock.ts
import type { LocalizedText } from "./LocalizedText.ts";

export type ContentBlockType = "paragraph" | "image" | "heading" | "list";

export interface ContentBlock {
  type: ContentBlockType;
  content?: LocalizedText;
  sideText?: LocalizedText;
  children?: ContentBlock[];
  align?: "left" | "center" | "right"; // 👈 новое свойство для выравнивания
}