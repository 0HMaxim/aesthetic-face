import React from "react";
import { useTranslation } from "react-i18next";
import type { LocalizedText } from "../models/LocalizedText";

export type ContentBlockType = "paragraph" | "image" | "heading" | "list";

export interface ContentBlock {
  type: ContentBlockType;
  content?: LocalizedText & { image?: string };
  sideText?: LocalizedText;
}

interface Props {
  content?: ContentBlock[];
}

export const ContentBlockRenderer: React.FC<Props> = ({ content }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  if (!content || content.length === 0) {
    return null;
  }

  return (
      <>
        {content.map((block, index) => {
          const currentContent = block.content?.[lang];

          switch (block.type) {
            case "heading":
              if (!currentContent) return null;
              return (
                  <h2
                      key={`heading-${index}`}
                      className="text-2xl md:text-3xl font-bold mb-4 text-foreground duration-500"
                  >
                    {currentContent}
                  </h2>
              );

            case "paragraph":
              if (!currentContent) return null;
              return (
                  <p
                      key={`paragraph-${index}`}
                      className="text-base md:text-xl mb-6 text-foreground duration-500"
                      style={{ whiteSpace: "pre-line" }}
                  >
                    {currentContent}
                  </p>
              );

            case "image": {
              const imageSrc = block.content?.image;
              const sideText = block.sideText?.[lang];

              if (!imageSrc && !sideText) return null;

              return (
                  <div
                      key={`image-${index}`}
                      className="my-6 flex flex-col md:flex-row items-start gap-4"
                  >
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            className="max-w-full md:max-w-[40rem] h-[28rem] object-cover rounded-[0.5rem]"
                        />
                    )}
                    {sideText && (
                        <p
                            className="text-base md:text-xl text-foreground"
                            style={{ whiteSpace: "pre-line" }}
                        >
                          {sideText}
                        </p>
                    )}
                  </div>
              );
            }

            case "list": {
              if (!currentContent) return null;

              const items = Array.isArray(currentContent)
                  ? currentContent
                  : String(currentContent)
                  .split("\n")
                  .map((s) => s.trim())
                  .filter(Boolean);

              if (items.length === 0) return null;

              return (
                  <ul
                      key={`list-${index}`}
                      className="list-disc list-inside mb-6 space-y-2 text-base md:text-xl text-foreground"
                  >
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                  </ul>
              );
            }

            default:
              return null;
          }
        })}
      </>
  );
};
