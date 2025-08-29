import FAQItem from "./FAQItem.tsx";
import type { FAQ } from "../models/FAQ.ts";
import { useTranslation } from "react-i18next";

export default function FAQList({ faqs }: { faqs: FAQ[] }) {

  // Разделяем на 2 колонки
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);
  const { t } = useTranslation();
  return (

      <div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6rem] mb-[1.5rem] mt-[2.5rem]">
          {/* Левая колонка */}
          <div className="flex flex-col gap-[4rem]">
            {leftFaqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq}/>
            ))}
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-[4rem]">
            {rightFaqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq}/>
            ))}
          </div>
        </div>
      </div>
  );
}
