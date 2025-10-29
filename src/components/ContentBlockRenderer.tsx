import React from "react";
import { useTranslation } from "react-i18next";
import type { ContentBlock } from "../models/ContentBlock.ts";

export type ContentBlockType = "paragraph" | "image" | "heading" | "list";

interface Props {
  content?: ContentBlock[];
}

export const ContentBlockRenderer: React.FC<Props> = ({ content }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  if (!content || content.length === 0) return null;

  const getAlignClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const renderBlock = (block: ContentBlock, index: number) => {
    const currentContent = block.content?.[lang];
    const alignClass = getAlignClass(block.align);

    switch (block.type) {
      case "heading":
        if (!currentContent) return null;
        return (
            <h2
                key={`heading-${index}`}
                className={`text-2xl md:text-3xl font-bold mb-4 text-foreground duration-500 ${alignClass}`}
            >
              {Array.isArray(currentContent) ? currentContent.join("\n") : currentContent}
            </h2>
        );

      case "paragraph":
        if (!currentContent) return null;
        return (
            <p
                key={`paragraph-${index}`}
                className={`text-base md:text-xl mb-6 text-foreground duration-500 ${alignClass}`}
                style={{ whiteSpace: "pre-line" }}
            >
              {Array.isArray(currentContent) ? currentContent.join("\n") : currentContent}
            </p>
        );

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
                className={`list-disc list-inside mb-6 space-y-2 text-base md:text-xl text-foreground duration-500 ${alignClass}`}
            >
              {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
              ))}
            </ul>
        );
      }

      case "image": {
        const imageSrc = block.media;
        if (!imageSrc) return null;

        const position = block.align ?? "left";
        const widthPercent = block.widthPercent ?? 40;
        const textWidth = 100 - widthPercent;
        const hasChildren = block.children && block.children.length > 0;
        const onlyImage = imageSrc && !hasChildren;

        return (
            <div
                key={`image-${index}`}
                className={`my-10 flex flex-col gap-6 items-center ${
                    position === "right"
                        ? "md:flex-row-reverse"
                        : position === "center"
                            ? "md:flex-col"
                            : "md:flex-row"
                }`}
            >
              <div
                  className="w-full flex justify-center"
                  style={{ width: `100%`, maxWidth: `${widthPercent}%` }}
              >
                <img
                    src={imageSrc}
                    alt=""
                    className={`w-full rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.03] ${
                        onlyImage ? "max-h-[60vh] object-contain" : "object-cover"
                    }`}
                    style={{
                      height: onlyImage ? "auto" : "100%",
                      maxHeight: onlyImage ? "60vh" : "auto",
                    }}
                />
              </div>

              {hasChildren && (
                  <div
                      className="w-full flex flex-col justify-center gap-4 text-base md:text-xl text-foreground"
                      style={{ maxWidth: `${textWidth}%` }}
                  >
                    {block.children!.map((child, idx) => (
                        <React.Fragment key={idx}>{renderBlock(child, idx)}</React.Fragment>
                    ))}
                  </div>
              )}
            </div>
        );
      }


      default:
        return null;
    }
  };

  return <>{content.map((block, i) => renderBlock(block, i))}</>;
};
