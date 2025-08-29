import React from "react";
import { useTranslation } from "react-i18next";
import type { ContentBlock } from "../models/ContentBlock";
import FAQList from "./FAQList.tsx";

interface Props {
  content: ContentBlock[];
}

export const ContentBlockRenderer: React.FC<Props> = ({ content}) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  return (
      <>
        {content.map((block) => {
          switch (block.type) {
            case "text":
              return (
                  <p key={block.id} className="text-base md:text-xl mb-6 text-foreground ">
                    {block.content?.[lang]}
                  </p>
              );
            case "image":
              return (
                  <div key={block.id} className="w-[48vw] mb-6 overflow-hidden rounded-xl ">
                    <img
                        src={block.image}
                        alt={`content-block-${block.id}`}
                        className="w-full h-auto object-cover"
                    />
                  </div>
              );
            case "faq":
              return (
                  <div key={block.id} className="mb-6 p-4 rounded-lg">
                    <FAQList faqs={block.FAQs}/>
                  </div>
              );
            default:
              return null;
          }
        })}
      </>
  );
};
