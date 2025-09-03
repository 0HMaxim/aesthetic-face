// components/Breadcrumbs.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services, subservices } from "../data/services";

interface BreadcrumbsProps {
  serviceId?: string;
  subserviceId?: string;
}

const tabs = [
  { title: "header.about", link: "/about" },
  { title: "header.specials", link: "/specials" },
  { title: "header.services", link: "/services" },
  { title: "header.doctors", link: "/doctors" },
  { title: "header.price", link: "/price" },
  { title: "header.faq", link: "/faq" },
  { title: "header.gallery", link: "/gallery" },
  { title: "header.blog", link: "/blog" },
  { title: "header.contact", link: "/contact" },
];

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ serviceId, subserviceId }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const location = useLocation();

  // ищем услугу и подуслугу
  const service = serviceId ? services.find((s) => s.id === serviceId) : undefined;
  const subservice = subserviceId ? subservices.find((ss) => ss.id === subserviceId) : undefined;

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  // если это просто страница услуг
  if (location.pathname.startsWith(`/${lang}/services`) && !service && !subservice) {
    items.push({ label: t("header.services"), href: `/${lang}/services` });
  }
  else if (service || subservice) {
    // общий раздел "Услуги"
    items.push({ label: t("header.services"), href: `/${lang}/services` });

    if (service && !subservice) {
      // только услуга
      items.push({
        label: service.title[lang],
        href: `/${lang}/services/${service.slug}`,
      });
    }

    if (subservice) {
      // родительская услуга для подуслуги
      const parent = services.find((s) => s.id === subservice.serviceId);
      if (parent) {
        items.push({
          label: parent.title[lang],
          href: `/${lang}/services/${parent.slug}`,
        });
      }

      // сама подуслуга
      items.push({
        label: subservice.title[lang],
        href: `/${lang}/services/${subservice.slug}`,
      });
    }
  }
  else {
    // если это не услуги, а, например, "about" или "faq"
    const currentPath = location.pathname.replace(`/${lang}`, "");
    const matchedTab = tabs.find((tab) => currentPath.startsWith(tab.link));
    if (matchedTab) {
      items.push({
        label: t(matchedTab.title),
        href: `/${lang}${matchedTab.link}`,
      });
    }
  }

  return (
      <nav aria-label="breadcrumb" className="mb-6 text-sm md:text-base mt-[3rem]">
        <ol className="flex items-center space-x-2 text-muted">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {isCurrent ? (
                      <span className="text-foreground font-semibold">{item.label}</span>
                  ) : (
                      <Link to={item.href} className="hover:text-primary duration-300">
                        {item.label}
                      </Link>
                  )}
                </li>
            );
          })}
        </ol>
      </nav>
  );
};
