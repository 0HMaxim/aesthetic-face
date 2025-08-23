import { useState } from "react";
import type { FAQ } from "../models/FAQ";

interface FAQItemProps {
  faq: FAQ;
  lang: keyof FAQ["question"];
}

export default function FAQItem({ faq, lang }: FAQItemProps) {
  const [open, setOpen] = useState(true);

  return (
      <div className="border-b py-4">
        {/* Вопрос */}
        <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center text-left"
        >
        <span className="text-[1.9rem] font-[800] text-foreground">
          {faq.question[lang]}
        </span>

          {/* Иконка с анимацией поворота */}
          <span
              className={`text-2xl transform transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
              }`}
          >
          +
        </span>
        </button>

        {/* Ответ с анимацией выезда */}
        <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 duration-0"
            }`}
        >
          <div className="pt-[1.5vw] pr-[2vw] pb-0 pl-[2vw] mb-[1rem] text-foreground">
            {faq.answer[lang]}
          </div>
        </div>
      </div>
  );
}
