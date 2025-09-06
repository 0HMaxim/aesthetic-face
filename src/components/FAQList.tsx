import FAQItem from "./FAQItem.tsx";
import type { FAQ } from "../models/FAQ.ts";
import { useEffect } from "react";

interface FAQListProps {
  faqs: FAQ[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage?: number;
}

export default function FAQList({ faqs, currentPage, setCurrentPage, itemsPerPage = 10 }: FAQListProps) {
  const pageCount = Math.ceil(faqs.length / itemsPerPage);
  const currentFaqs = faqs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const leftFaqs = currentFaqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = currentFaqs.filter((_, i) => i % 2 === 1);

  // скролл вверх при смене страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const maxButtons = 5;
  const startPage = Math.max(0, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(pageCount - 1, startPage + maxButtons - 1);

  const buttons = [];
  if (startPage > 0) buttons.push(0, "dots");
  for (let i = startPage; i <= endPage; i++) buttons.push(i);
  if (endPage < pageCount - 1) buttons.push("dots", pageCount - 1);

  return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[6rem] mb-6 mt-10">
          <div className="flex flex-col gap-8">
            {leftFaqs.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i * 2 + 1} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {rightFaqs.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i * 2 + 2} />
            ))}
          </div>
        </div>

        {pageCount > 1 && (
            <div className="flex flex-wrap justify-center mt-8 gap-2 max-w-full overflow-hidden">
              {buttons.map((b, idx) =>
                      b === "dots" ? (
                          <span key={idx} className="px-3 text-foreground">
                …
              </span>
                      ) : (
                          <button
                              key={b}
                              onClick={() => setCurrentPage(b as number)}
                              className={`px-4 py-2 rounded-lg border text-foreground transition-colors duration-300 ${
                                  b === currentPage ? "bg-primary text-white" : "bg-background hover:bg-primary hover:text-white"
                              }`}
                          >
                            {(b as number) + 1}
                          </button>
                      )
              )}
            </div>
        )}
      </div>
  );
}
