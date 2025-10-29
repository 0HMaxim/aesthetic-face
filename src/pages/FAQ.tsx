import { useState, useMemo, useEffect } from "react";
import FAQList from "../components/FAQList.tsx";
import { services, subservices } from "../data/services";
import { useTranslation } from "react-i18next";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { db } from "../firebase.ts";
import { ref, get } from "firebase/database";
import type {LocalizedText} from "../models/LocalizedText.ts";
import type { FAQ } from "../models/FAQ";


export default function FAQ() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as keyof LocalizedText;
  const imagee = "s";

  const [faqList, setFaqList] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedService, setSelectedService] = useState("all");
  const [selectedSubservice, setSelectedSubservice] = useState("all");
  const [page, setPage] = useState(0);

  // ✅ Загружаем FAQ из Firebase
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const faqRef = ref(db, "faqs");
        const snapshot = await get(faqRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formatted: FAQ[] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFaqList(formatted);
        } else {
          console.warn("No FAQ data found");
        }
      } catch (err) {
        console.error("Error loading FAQs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  const serviceOptions = useMemo(
      () => [
        { id: "all", title: t("FAQ.allServices") },
        ...services.map((s) => ({ id: s.id, title: s.title[lang] })),
      ],
      [lang, t]
  );

  const subserviceOptions = useMemo(() => {
    if (selectedService === "all")
      return [{ id: "all", title: t("FAQ.allServices") }];
    const filtered = subservices.filter((ss) => ss.serviceId === selectedService);
    return [
      { id: "all", title: t("FAQ.allServices") },
      ...filtered.map((ss) => ({ id: ss.id, title: ss.title[lang] })),
    ];
  }, [selectedService, lang, t]);

  const filteredFaqs = useMemo(() => {
    return faqList.filter((faq) => {
      if (selectedSubservice !== "all") return faq.subserviceId === selectedSubservice;
      if (selectedService !== "all") {
        if (faq.serviceId === selectedService) return true;
        if (faq.subserviceId) {
          const sub = subservices.find((s) => s.id === faq.subserviceId);
          return sub?.serviceId === selectedService;
        }
        return false;
      }
      return true;
    });
  }, [faqList, selectedService, selectedSubservice]);

  useEffect(() => setPage(0), [selectedService, selectedSubservice]);

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}
        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("FAQ.title")}
            </h2>

            <div className="md:flex justify-between block">
              <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">
                {t("FAQ.subtitle")}
              </p>
              <div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
                <span className="text-foreground text-[1.5rem] font-[600]">
                  {t("FAQ.direction")}
                </span>

                  <select
                      className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value);
                        setSelectedSubservice("all");
                      }}
                  >
                    {serviceOptions.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                    ))}
                  </select>

                  <select
                      className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                      value={selectedSubservice}
                      onChange={(e) => setSelectedSubservice(e.target.value)}
                      disabled={selectedService === "all"}
                  >
                    {subserviceOptions.map((ss) => (
                        <option key={ss.id} value={ss.id}>
                          {ss.title}
                        </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
              <p className="text-center text-lg">{t("FAQ.loading")}</p>
          ) : (
              <FAQList faqs={filteredFaqs} currentPage={page} setCurrentPage={setPage} />
          )}
        </div>
      </div>
  );
}
