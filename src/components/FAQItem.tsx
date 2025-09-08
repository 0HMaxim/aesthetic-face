import { useState } from "react";
import type { FAQ } from "../models/FAQ";
import { useTranslation } from "react-i18next";

interface FAQItemProps {
  faq: FAQ;
  index: number;
}

export default function FAQItem({ faq, index }: FAQItemProps) {
  const [open, setOpen] = useState(true);
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  return (
      <div className="border-b border-muted py-4 w-full">
        <div
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center text-left cursor-pointer select-text"
        >
    <span className="md:text-[2rem] text-[1.25rem] font-[700] text-foreground duration-500 break-words">
      {faq.question[lang]}
    </span>

          <span className="hidden md:block md:text-[2rem] text-[1.75rem] font-bold text-foreground duration-500">
      #{index}
    </span>
        </div>

        <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 duration-0"
            }`}
        >
          <div className="pt-4 pr-0 md:pr-4 text-[1rem] md:text-[1.5rem] pb-2 pl-0 md:pl-4 mb-4 text-foreground break-words w-full  duration-500">
            {faq.answer[lang]}
          </div>
        </div>
      </div>


  );
}
