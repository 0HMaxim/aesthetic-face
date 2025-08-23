import { useTranslation } from "react-i18next";
import FAQItem from "./FAQItem.tsx";
import type { FAQ } from "../models/FAQ.ts";

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const { i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  // Разделяем на 2 колонки
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[6rem] mt-10">
        {/* Левая колонка */}
        <div className="flex flex-col gap-[4rem]">
          {leftFaqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} lang={lang} />
          ))}
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-[4rem]">
          {rightFaqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} lang={lang} />
          ))}
        </div>
      </div>
  );
}
