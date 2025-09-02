import FAQItem from "./FAQItem.tsx";
import type { FAQ } from "../models/FAQ.ts";

interface FAQListProps {
  faqs: FAQ[];
  serviceId?: string;
  subserviceId?: string;
}

export default function FAQList({ faqs, serviceId, subserviceId }: FAQListProps) {

  const filteredFaqs = faqs.filter(faq => {
    if (subserviceId) return faq.subserviceId === subserviceId;
    if (serviceId) return faq.serviceId === serviceId;
    return true;
  });

  const leftFaqs = filteredFaqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = filteredFaqs.filter((_, i) => i % 2 === 1);

  return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6rem] mb-[1.5rem] mt-[2.5rem]">
          <div className="flex flex-col gap-[4rem]">
            {leftFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </div>
          <div className="flex flex-col gap-[4rem]">
            {rightFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
          </div>
        </div>
      </div>
  );
}
