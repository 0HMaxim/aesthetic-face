// components/ContentBlockRenderer.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import type { LocalizedText } from "../models/LocalizedText";

export type ContentBlockType = "text" | "image" | "heading";

export interface ContentBlock {
  type: ContentBlockType;
  content?: LocalizedText & { image?: string };
  sideText?: LocalizedText;
}

interface Props {
  content: ContentBlock[];
}

export const ContentBlockRenderer: React.FC<Props> = ({ content }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  return (
      <>
        {content.map((block) => {
          const currentContent = block.content?.[lang];

          switch (block.type) {
            case "heading":
              if (!currentContent) return null;
              return (
                  <h2
                      className="text-2xl md:text-3xl font-bold mb-4 text-foreground duration-500"
                  >
                    {currentContent}
                  </h2>
              );

            case "text":
              if (!currentContent) return null;
              return (
                  <p
                      className="text-base md:text-xl mb-6 text-foreground duration-500"
                      style={{ whiteSpace: "pre-line" }}
                  >
                    {currentContent}
                  </p>
              );

            case "image":
              const imageSrc = block.content?.image;
              const sideText = block.sideText?.[lang];

              return (
                  <div
                      className={`my-6 flex flex-col md:flex-row items-start gap-4`}
                  >
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            className="w-full md:w-fit h-[28rem] object-cover rounded-[0.5rem]"
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

            default:
              return null;
          }
        })}
      </>
  );
};
