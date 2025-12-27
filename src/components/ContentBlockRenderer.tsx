import React from "react";
import { useTranslation } from "react-i18next";
import type { ContentBlock } from "../models/ContentBlock.ts";

interface Props {
    content?: ContentBlock[];
}

export const ContentBlockRenderer: React.FC<Props> = ({ content }) => {
    const { i18n } = useTranslation();
    const lang = i18n.language as "uk" | "ru" | "en" | "de";

    if (!content || content.length === 0) return null;

    const renderBlock = (block: ContentBlock, index: number): React.ReactNode => {
        const currentContent = block.content?.[lang];
        const align = block.align ?? "left";

        const getTextAlign = () => {
            if (align === "center") return "text-center items-center";
            if (align === "right") return "text-right items-end";
            return "text-left items-start";
        };

        const formatText = (data: any) => {
            if (Array.isArray(data)) return data.join("\n");
            return data || "";
        };

        switch (block.type) {
            case "heading":
                return (
                    <h2 key={index} className={`text-2xl md:text-3xl font-bold mb-4 w-full ${getTextAlign()}`}>
                        {formatText(currentContent)}
                    </h2>
                );

            case "paragraph":
                return (
                    <p key={index} className={`text-base md:text-xl mb-6 leading-relaxed w-full ${getTextAlign()}`} style={{ whiteSpace: "pre-line" }}>
                        {formatText(currentContent)}
                    </p>
                );

            case "list": {
                const items = Array.isArray(currentContent)
                    ? currentContent
                    : String(currentContent || "").split("\n").filter(i => i.trim());

                return (
                    <ul key={index} className={`list-disc list-outside ml-6 mb-6 space-y-2 text-base md:text-lg w-full ${getTextAlign()}`}>
                        {items.map((item, idx) => (
                            <li key={idx} className="pl-2">{item}</li>
                        ))}
                    </ul>
                );
            }

            case "image": {
                const hasChildren = block.children && block.children.length > 0;
                const width = block.widthPercent || 100;

                return (
                    <div key={index}
                         className={`my-10 flex flex-col w-full overflow-hidden
                ${hasChildren && align === "right" ? "md:flex-row-reverse md:gap-12" :
                             hasChildren && align === "left" ? "md:flex-row md:gap-12" : "items-center gap-6"}
               `}
                    >
                        {/* Контейнер картинки */}
                        <div
                            className={`flex-shrink-0 rounded-3xl shadow-md overflow-hidden h-fit
                ${hasChildren ? "w-full md:w-1/2" : "w-full"}
              `}
                            style={!hasChildren ? {
                                maxWidth: '100%',
                                width: width < 100 ? `${width}%` : '100%'
                            } : {}}
                        >
                            <img
                                src={block.media}
                                alt=""
                                className="w-full h-auto object-contain block" // object-contain вместо cover чтобы не резало
                            />
                        </div>

                        {/* Контент рядом/под картинкой */}
                        {hasChildren && (
                            <div className="flex-1 flex flex-col min-w-0 w-full">
                                {block.children!.map((child, childIdx) => (
                                    <div key={childIdx} className="w-full">
                                        {renderBlock(child, childIdx)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            }

            case "blockquote":
                return (
                    <blockquote key={index} className="border-l-4 border-primary pl-6 my-10 italic text-xl md:text-2xl text-gray-600 bg-gray-50 py-6 rounded-r-lg w-full">
                        {formatText(currentContent)}
                    </blockquote>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col w-full max-w-full overflow-hidden">
            {content.map((block, i) => renderBlock(block, i))}
        </div>
    );
};