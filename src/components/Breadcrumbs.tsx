import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../firebase.ts";
import { get, ref } from "firebase/database";
import type { Employee } from "../models/Employee";
import type { Blog } from "../models/Blog";

// Функция безопасного получения строки из LocalizedText
function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

interface BreadcrumbsProps {
  serviceSlug?: string; // Изменено с serviceIds для ясности
  employeeSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
                                                          serviceSlug,
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
    async function fetchBreadcrumbData() {
      try {
        // Загрузка сотрудника
        if (employeeSlug) {
          const snap = await get(ref(db, "employees"));
          if (snap.exists()) {
            const data = snap.val();
            const found = Object.values(data).find((e: any) => e.slug === employeeSlug);
            if (found) setEmployeeData(found as Employee);
          }
        }
        // Загрузка блога
        if (blogSlug) {
          const snap = await get(ref(db, "blogs"));
          if (snap.exists()) {
            const data = snap.val();
            const found = Object.values(data).find((b: any) => b.slug === blogSlug);
            if (found) setBlogData(found as Blog);
          }
        }
        // Загрузка услуги
        if (serviceSlug) {
          const snap = await get(ref(db, "services"));
          if (snap.exists()) {
            const data = snap.val();
            const found = Object.values(data).find((s: any) => s.slug === serviceSlug);
            if (found) setServiceData(found);
          }
        }
        // Загрузка акции
        if (specialSlug) {
          const snap = await get(ref(db, "specials"));
          if (snap.exists()) {
            const data = snap.val();
            const found = Object.values(data).find((sp: any) => sp.slug === specialSlug);
            if (found) setSpecialData(found);
          }
        }
      } catch (error) {
        console.error("Breadcrumbs data loading error:", error);
      }
    }

    fetchBreadcrumbData();
  }, [employeeSlug, blogSlug, serviceSlug, specialSlug]);

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  const currentPath = location.pathname;

  // Сотрудники
  if (currentPath.includes("/employees")) {
    items.push({ label: t("header.employees"), href: `/${lang}/employees` });
    if (employeeData) {
      items.push({
        label: getLocalizedString(employeeData.fullName?.[lang]),
        href: `/${lang}/employees/${employeeData.slug}`,
      });
    }
  }

  // Блоги
  else if (currentPath.includes("/blogs")) {
    items.push({ label: t("header.blog"), href: `/${lang}/blogs` });
    if (blogData) {
      items.push({
        label: getLocalizedString(blogData.title?.[lang]),
        href: `/${lang}/blogs/${blogData.slug}`,
      });
    }
  }

  // Спецпредложения (Акции)
  else if (currentPath.includes("/specials")) {
    items.push({ label: t("header.specials"), href: `/${lang}/specials` });
    if (specialData) {
      items.push({
        label: getLocalizedString(specialData.headerTitle?.[lang] || specialData.title?.[lang]),
        href: `/${lang}/specials/${specialData.slug}`,
      });
    }
  }

  // Сервисы (Услуги)
  else if (currentPath.includes("/services")) {
    items.push({ label: t("header.services"), href: `/${lang}/services` });
    if (serviceData) {
      items.push({
        label: getLocalizedString(serviceData.title?.[lang]),
        href: `/${lang}/services/${serviceData.slug}`,
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

    const cleanPath = currentPath.replace(`/${lang}`, "");
    const matchedTab = staticTabs.find((tab) => cleanPath.startsWith(tab.link));

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
                <li key={`${item.href}-${index}`} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {isCurrent ? (
                      <span className="text-foreground font-semibold duration-500">
                  {item.label}
                </span>
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