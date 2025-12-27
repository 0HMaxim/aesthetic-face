import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../firebase.ts";
import { get, ref } from "firebase/database";
import type { Employee } from "../models/Employee";
import type { Blog } from "../models/Blog";

function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

interface BreadcrumbsProps {
  serviceSlug?: string;
  employeeSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
  currentTitle?: string; // Прямой заголовок, чтобы не ждать загрузки из БД
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
                                                          serviceSlug,
                                                          employeeSlug,
                                                          specialSlug,
                                                          blogSlug,
                                                          currentTitle,
                                                        }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const location = useLocation();

  const [asyncTitle, setAsyncTitle] = useState<string>("");

  useEffect(() => {
    // Если заголовок уже передан через пропсы, нам не нужно делать запрос к Firebase
    if (currentTitle) return;

    async function fetchBreadcrumbData() {
      try {
        let path = "";
        let slug = "";

        if (blogSlug) { path = "blogs"; slug = blogSlug; }
        else if (serviceSlug) { path = "services"; slug = serviceSlug; }
        else if (specialSlug) { path = "specials"; slug = specialSlug; }
        else if (employeeSlug) { path = "employees"; slug = employeeSlug; }

        if (!path || !slug) return;

        const snap = await get(ref(db, path));
        if (snap.exists()) {
          const data = snap.val();
          const found: any = Object.values(data).find((item: any) => item.slug === slug);
          if (found) {
            // Пытаемся достать заголовок из разных возможных полей модели
            const title = found.fullName?.[lang] || found.headerTitle?.[lang] || found.title?.[lang];
            setAsyncTitle(getLocalizedString(title));
          }
        }
      } catch (error) {
        console.error("Breadcrumbs error:", error);
      }
    }

    fetchBreadcrumbData();
  }, [blogSlug, serviceSlug, specialSlug, employeeSlug, currentTitle, lang]);

  // Базовая крошка "Главная"
  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  const currentPath = location.pathname;
  const finalTitle = currentTitle || asyncTitle;

  // Логика добавления промежуточных и финальных категорий
  if (currentPath.includes("/employees")) {
    items.push({ label: t("header.employees"), href: `/${lang}/employees` });
  }
  else if (currentPath.includes("/blogs")) {
    items.push({ label: t("header.blog"), href: `/${lang}/blogs` });
  }
  else if (currentPath.includes("/specials")) {
    items.push({ label: t("header.specials"), href: `/${lang}/specials` });
  }
  else if (currentPath.includes("/services")) {
    items.push({ label: t("header.services"), href: `/${lang}/services` });
  }
  else {
    // Статические страницы (About, Price, etc.)
    const staticTabs = [
      { title: "header.about", link: "/about" },
      { title: "header.price", link: "/price" },
      { title: "header.faq", link: "/faq" },
      { title: "header.gallery", link: "/gallery" },
      { title: "header.contact", link: "/contact" },
    ];
    const cleanPath = currentPath.replace(`/${lang}`, "");
    const matchedTab = staticTabs.find((tab) => cleanPath.startsWith(tab.link));
    if (matchedTab) items.push({ label: t(matchedTab.title), href: `/${lang}${matchedTab.link}` });
  }

  // Добавляем финальный заголовок страницы, если он загрузился или передан
  if (finalTitle && !items.find(item => item.label === finalTitle)) {
    items.push({ label: finalTitle, href: currentPath });
  }

  return (
      <nav aria-label="breadcrumb" className="mb-6 text-[1rem] mt-[3rem] overflow-hidden">
        <ol className="flex flex-wrap items-center space-x-2 text-gray-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
                <li key={`${item.href}-${index}`} className="flex items-center min-w-0">
                  {index > 0 && <span className="mx-2 flex-shrink-0">/</span>}
                  {isLast ? (
                      <span className="text-foreground font-semibold truncate duration-500">
                  {item.label}
                </span>
                  ) : (
                      <Link
                          to={item.href}
                          className="hover:text-primary transition-colors duration-300 whitespace-nowrap"
                      >
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