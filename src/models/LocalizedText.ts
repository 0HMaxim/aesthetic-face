// models/LocalizedText.ts
export interface LocalizedText {
  uk?: string | string[];
  ru?: string | string[];
  en?: string | string[];
  de?: string | string[];
  [key: string]: string | string[] | undefined;
}
