import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetchData } from "../../hooks/useFetchData";
import { useBusiness } from "../../context/BusinessContext";
import { useGeneralInfo } from "../../hooks/useGeneralInfo.ts";
import type { Service } from "../../models/Service"; // Импортируем тип

export default function Footer() {
  const { lang = "en", businessSlug } = useParams<{
    lang: string;
    businessSlug: string;
  }>();

  const { t } = useTranslation();

  // 1. ИСПРАВЛЕНИЕ: Добавляем generic-тип для хука
  const { data } = useFetchData<{ services: Service[] }>(
      ["services"],
      businessSlug
  );

  const services = data?.services || [];

  const pages = [
    { key: "about", label: t("header.about") },
    { key: "specials", label: t("header.specials") },
    { key: "employees", label: t("header.employees") },
    { key: "price", label: t("header.price") },
    { key: "faq", label: t("header.faq") },
    { key: "gallery", label: t("header.gallery") },
    { key: "blogs", label: t("header.blog") },
    { key: "contact", label: t("header.contact") },
  ];

  const { meta } = useBusiness();
  const { info } = useGeneralInfo(businessSlug);

  // 2. ЛОГИКА ТАБОВ: Ищем таб, у которого route === "services"
  const servicesTab = Object.values(meta?.tabs || {}).find(
      (tab) => tab.route === "services" || tab.route === "/services"
  );

  const servicesTitle = servicesTab?.title?.[lang as any] ?? t("header.services");

  return (
      <footer className="text-foreground bg- px-[4rem] md:px-[6rem] py-[6rem] md:py-[10rem] mt-[3rem]"
              style={{ background: 'var(--secondary)' }}>
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem] ">

          {/* LOGO / ABOUT */}
          <div className="space-y-6">
            {meta?.logo && (
                <img src={meta.logo} alt="logo" className="h-16 object-contain" />
            )}
            <h3 className="text-2xl font-black tracking-tight transition">
              {meta?.name?.[lang as any] ?? "Business"}
            </h3>
            {meta?.slogan?.[lang as any] && (
                <p className="text-sm leading-relaxed text-secondary/80 max-w-sm transition">
                  {meta.slogan[lang as any]}
                </p>
            )}
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-secondary transition">
              {servicesTitle}
            </h4>

            <ul className="space-y-4">
              {/* Используем только основные услуги (без parentId), чтобы не раздувать футер */}
              {services
                  .filter(s => !s.parentServiceIds || s.parentServiceIds.length === 0)
                  .slice(0, 6) // Ограничим количество в футере
                  .map((service) => (
                      <li key={service.id}>
                        <Link
                            to={`/${lang}/${businessSlug}/services/${service.slug}`}
                            className="text-sm hover:text-secondary transition"
                        >
                          {/* Используем безопасное приведение к любому языку */}
                          {(service.title as any)?.[lang] ?? (service.title as any)?.en}
                        </Link>
                      </li>
                  ))}
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-secondary transition">
              {t("navigation")}
            </h4>
            <ul className="space-y-4">
              {pages.map(p => (
                  <li key={p.key}>
                    <Link
                        to={`/${lang}/${businessSlug}/${p.key}`}
                        className="text-sm hover:text-secondary transition"
                    >
                      {p.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* CONTACTS */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-secondary transition">
              {t("header.contact")}
            </h4>
            {info && (
                <div className="space-y-4 text-sm text-background">
                  {info.phone?.[lang as any] && (
                      <a href={`tel:${info.phone[lang as any]}`} className="block hover:text-secondary transition">
                        {info.phone[lang as any]}
                      </a>
                  )}
                  {info.email && (
                      <a href={`mailto:${info.email}`} className="block hover:text-secondary transition">
                        {info.email}
                      </a>
                  )}
                  {info.address?.[lang as any] && (
                      <p className="opacity-80 transition">{info.address[lang as any]}</p>
                  )}
                </div>
            )}
          </div>
        </div>
      </footer>
  );
}