import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../firebase.ts";
import { get, ref } from "firebase/database";
import type { Employee } from "../models/Employee";
import type { Blog } from "../models/Blog";
import { specials } from "../data/services.ts";

// Функция безопасного получения строки из LocalizedText
function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

interface BreadcrumbsProps {
  serviceIds?: string;
  employeeSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
                                                          serviceIds,
                                                          employeeSlug,
                                                          specialSlug,
                                                          blogSlug,
                                                        }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const location = useLocation();

  const [employeeData, setEmployeeData] = useState<Employee | null>(null);
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const [serviceData, setServiceData] = useState<any>(null);
  const [specialData, setSpecialData] = useState<any>(null);

  // Загружаем данные из Firebase
  useEffect(() => {
    if (employeeSlug) {
      get(ref(db, `employees/${employeeSlug}`)).then((snap) => snap.exists() && setEmployeeData(snap.val()));
    }
    if (blogSlug) {
      get(ref(db, `blogs/${blogSlug}`)).then((snap) => snap.exists() && setBlogData(snap.val()));
    }
    if (serviceIds) {
      get(ref(db, `services/${serviceIds}`)).then((snap) => snap.exists() && setServiceData(snap.val()));
    }

    if (specialSlug) {
      const special = specials.find((s) => s.slug === specialSlug);
      if (special) setSpecialData(special);
    }
  }, [employeeSlug, blogSlug, serviceIds, specialSlug]);

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  // Сотрудники
  if (location.pathname.includes("/employees")) {
    items.push({ label: t("header.employees"), href: `/${lang}/employees` });
    if (employeeData) {
      items.push({
        label: getLocalizedString(employeeData.fullName?.[lang]),
        href: `/${lang}/employees/${employeeData.slug}`,
      });
    }
  }

  // Блоги
  else if (location.pathname.includes("/blogs")) {
    items.push({ label: t("header.blog"), href: `/${lang}/blogs` });
    if (blogData) {
      items.push({
        label: getLocalizedString(blogData.title?.[lang]),
        href: `/${lang}/blogs/${blogData.slug}`,
      });
    }
  }

  // Спецпредложения
  else if (location.pathname.includes("/specials")) {
    items.push({ label: t("header.specials"), href: `/${lang}/specials` });
    if (specialData) {
      items.push({
        label: getLocalizedString(specialData.headerTitle?.[lang] || specialData.title?.[lang]),
        href: `/${lang}/specials/${specialData.slug}`,
      });
    }
  }

  // Сервисы
  else if (location.pathname.includes("/services")) {
    items.push({ label: t("header.services"), href: `/${lang}/services` });
    if (serviceData) {
      items.push({
        label: getLocalizedString(serviceData.title?.[lang]),
        href: `/${lang}/services/${serviceData.slug}`,
      });
    }
    if (subserviceData) {
      items.push({
        label: getLocalizedString(subserviceData.title?.[lang]),
        href: `/${lang}/services/${subserviceData.slug}`,
      });
    }
  }

  // Статические страницы
  else {
    const staticTabs = [
      { title: "header.about", link: "/about" },
      { title: "header.price", link: "/price" },
      { title: "header.faq", link: "/faq" },
      { title: "header.gallery", link: "/gallery" },
      { title: "header.contact", link: "/contact" },
    ];
    const currentPath = location.pathname.replace(`/${lang}`, "");
    const matchedTab = staticTabs.find((tab) => currentPath.startsWith(tab.link));
    if (matchedTab) {
      items.push({
        label: t(matchedTab.title),
        href: `/${lang}${matchedTab.link}`,
      });
    }
  }

  return (
      <nav aria-label="breadcrumb" className="mb-6 text-[1rem] mt-[3rem]">
        <ol className="flex flex-wrap items-center space-x-2 text-muted">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {isCurrent ? (
                      <span className="text-foreground font-semibold duration-500">{item.label}</span>
                  ) : (
                      <Link to={item.href} className="hover:text-primary duration-500">
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
