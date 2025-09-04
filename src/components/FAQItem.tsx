import { useState } from "react";
import type { FAQ } from "../models/FAQ";
import { useTranslation } from "react-i18next";

interface FAQItemProps {
  faq: FAQ;
  index: number; // новый пропс
}

export default function FAQItem({ faq, index }: FAQItemProps) {
  const [open, setOpen] = useState(true);
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  return (
      <div className="border-b border-muted py-4 ">
        <div
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center text-left cursor-pointer select-text"
        >
          <span className="md:text-[2rem] mr-[2.5rem] text-[1.5rem] font-[700] text-foreground duration-500">
            {faq.question[lang]}
          </span>

           <span className="text-[2rem] font-bold text-foreground duration-500">
              #{index}
            </span>
        </div>


        <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 duration-0"
            }`}
        >
          <div className="pt-[1.5vw] pr-[2vw] md:text-[1.5rem] text-[1rem] pb-0 pl-[2vw] mb-[1rem] text-foreground duration-500">
            {faq.answer[lang]}
          </div>
        </div>
      </div>
  );
}
