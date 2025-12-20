import { useState, useMemo, useEffect } from "react";
import FAQList from "../components/FAQList.tsx";
import { useTranslation } from "react-i18next";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { db } from "../firebase.ts";
import { ref, get } from "firebase/database";
import type { LocalizedText } from "../models/LocalizedText.ts";
import type { FAQ as FAQModel } from "../models/FAQ";

interface Service {
  id: string;
  title: LocalizedText;
}

export default function FAQ() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as keyof LocalizedText;
  const imagee = "s"; // Замените на реальный путь к картинке

  const [faqList, setFaqList] = useState<FAQModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState("all");
  const [page, setPage] = useState(0);

  // ---------- Загрузка FAQ ----------
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const faqRef = ref(db, "faqs");
        const snapshot = await get(faqRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formatted: FAQModel[] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFaqList(formatted);
        }
      } catch (err) {
        console.error("Error loading FAQs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, []);

  // ---------- Загрузка сервисов ----------
  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesSnap = await get(ref(db, "services"));
        if (servicesSnap.exists()) {
          const data = servicesSnap.val();
          const formatted: Service[] = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
          }));
          setServices(formatted);
        }
      } catch (err) {
        console.error("Error loading services:", err);
      }
    }
    fetchServices();
  }, []);

  // Опции для выпадающего списка
  const serviceOptions = useMemo(
      () => [
        { id: "all", title: t("FAQ.allServices") || "Все услуги" },
        ...services.map((s) => ({ id: s.id, title: s.title[lang] || "Untitled" })),
      ],
      [lang, t, services]
  );

  // Фильтрация FAQ (только по serviceId, как в модели)
  const filteredFaqs = useMemo(() => {
    if (selectedService === "all") return faqList;
    return faqList.filter((faq) => faq.serviceId === selectedService);
  }, [faqList, selectedService]);

  // Сброс страницы при смене фильтра
  useEffect(() => setPage(0), [selectedService]);

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}
        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("FAQ.title") || "Частые вопросы"}
            </h2>

            <div className="md:flex justify-between block">
              <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">
                {t("FAQ.subtitle")}
              </p>
              <div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
                <span className="text-foreground text-[1.5rem] font-[600]">
                  {t("FAQ.direction") || "Направление:"}
                </span>

                  <select
                      className="border rounded-lg py-2 px-3 text-black w-full md:w-auto outline-none focus:ring-2 focus:ring-primary"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                  >
                    {serviceOptions.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
              <p className="text-center text-lg">{t("FAQ.loading") || "Загрузка..."}</p>
          ) : (
              <FAQList
                  faqs={filteredFaqs}
                  currentPage={page}
                  setCurrentPage={setPage}
              />
          )}
        </div>
      </div>
  );
}