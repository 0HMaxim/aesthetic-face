// FAQ.tsx
import { useState, useMemo, useEffect } from "react";
import FAQList from "../components/FAQList.tsx";
import { faqs, services, subservices } from "../data/services";
import { useTranslation } from "react-i18next";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";

export default function FAQ() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const imagee = "s";

  const [selectedService, setSelectedService] = useState("all");
  const [selectedSubservice, setSelectedSubservice] = useState("all");
  const [page, setPage] = useState(0); // для пагинации

  // список услуг с "Все"
  const serviceOptions = useMemo(() => [
    { id: "all", title: t("FAQ.allServices") },
    ...services.map(s => ({ id: s.id, title: s.title[lang] }))
  ], [lang, t]);

  // список подуслуг
  const subserviceOptions = useMemo(() => {
    if (selectedService === "all") return [{ id: "all", title: t("FAQ.allServices") }];
    const filtered = subservices.filter(ss => ss.serviceId === selectedService);
    return [{ id: "all", title: t("FAQ.allServices") }, ...filtered.map(ss => ({ id: ss.id, title: ss.title[lang] }))];
  }, [selectedService, lang, t]);

  // фильтрованные FAQ
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      if (selectedSubservice !== "all") return faq.subserviceId === selectedSubservice;
      if (selectedService !== "all") {
        if (faq.serviceId === selectedService) return true;
        if (faq.subserviceId) {
          const sub = subservices.find(s => s.id === faq.subserviceId);
          return sub?.serviceId === selectedService;
        }
        return false;
      }
      return true;
    });
  }, [selectedService, selectedSubservice]);

  // сброс страницы на 0 при смене фильтра
  useEffect(() => setPage(0), [selectedService, selectedSubservice]);

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}
        <div className="w-full px-4 md:px-[10rem]">
          <Breadcrumbs />

          <div className="flex gap-4 mb-8 justify-between items-center">
            <div className="py-8 mb-[3.5rem]">
              <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("FAQ.title")}</h2>
              <p className="text-base lg:text-2xl font-normal text-foreground duration-500">{t("FAQ.subtitle")}</p>
            </div>

            <div>
              <span className="text-foreground text-[1.5rem] font-[600] mr-[1rem]">{t("FAQ.direction")}</span>

              <select
                  className="border rounded-lg mr-[1rem] py-2 text-black"
                  value={selectedService}
                  onChange={e => {
                    setSelectedService(e.target.value);
                    setSelectedSubservice("all");
                  }}
              >
                {serviceOptions.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>

              <select
                  className="border rounded-lg py-2 text-black"
                  value={selectedSubservice}
                  onChange={e => setSelectedSubservice(e.target.value)}
                  disabled={selectedService === "all"}
              >
                {subserviceOptions.map(ss => (
                    <option key={ss.id} value={ss.id}>{ss.title}</option>
                ))}
              </select>
            </div>
          </div>

          <FAQList
              faqs={filteredFaqs}
              currentPage={page}
              setCurrentPage={setPage}
          />
        </div>
      </div>
  );
}
