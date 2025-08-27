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


        <div className="py-8">
          <h2 className="text-3xl lg:text-5xl font-[800] mb-4">
            {t("FAQList.title")}
          </h2>


          <p className="text-base lg:text-2xl font-normal text-foreground">
            {t("FAQList.subtitle")}
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6rem] mt-10">
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
