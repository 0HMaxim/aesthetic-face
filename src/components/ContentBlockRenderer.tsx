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
            const hasChildren = block.children && block.children.length > 0;
            const onlyImage = !hasChildren;

            return (
                <div
                    key={`image-${index}`}
                    className={`my-8 flex flex-col gap-6 items-center ${
                        position === "right" ? "md:flex-row-reverse" :
                            position === "center" ? "md:flex-col" : "md:flex-row"
                    }`}
                >
                    {/* Контейнер картинки */}
                    <div
                        className="w-full flex justify-center flex-shrink-0"
                        style={{
                            // На мобилках (до 768px) всегда 100%
                            // На десктопе (от 768px) используем динамический %
                            flexBasis: window.innerWidth < 768 ? '100%' : `${widthPercent}%`,
                            maxWidth: window.innerWidth < 768 ? '100%' : `${widthPercent}%`
                        }}
                    >
                        <img
                            src={imageSrc}
                            alt=""
                            className={`w-full rounded-3xl shadow-md object-cover transition-transform duration-500 hover:scale-[1.02] ${
                                onlyImage
                                    ? "h-auto max-h-[50vh] md:max-h-[60vh]"
                                    : "h-[250px] md:h-[450px]"
                            }`}
                        />
                    </div>

                    {/* Контейнер текста */}
                    {hasChildren && (
                        <div
                            className="w-full flex flex-col justify-center gap-4 flex-grow"
                            style={{
                                maxWidth: window.innerWidth < 768 ? '100%' : `${100 - widthPercent}%`
                            }}
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
