import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"; // Добавили useParams
import { useTranslation } from "react-i18next";
import { db } from "../firebase.ts";
import { get, ref } from "firebase/database";

function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

interface BreadcrumbsProps {
  serviceSlug?: string;
  employeeSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
  currentTitle?: string | string[];
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
  const { businessSlug } = useParams<{ businessSlug: string }>(); // Достаем slug бизнеса
  const location = useLocation();

  const [asyncTitle, setAsyncTitle] = useState<string>("");

  useEffect(() => {
    if (currentTitle) return;

    async function fetchBreadcrumbData() {
      try {
        let path = "";
        let slug = "";

        // Формируем путь к данным с учетом businessSlug
        if (blogSlug) { path = `businesses/${businessSlug}/blogs`; slug = blogSlug; }
        else if (serviceSlug) { path = `businesses/${businessSlug}/services`; slug = serviceSlug; }
        else if (specialSlug) { path = `businesses/${businessSlug}/specials`; slug = specialSlug; }
        else if (employeeSlug) { path = `businesses/${businessSlug}/employees`; slug = employeeSlug; }

        if (!path || !slug || !businessSlug) return;

        const snap = await get(ref(db, path));
        if (snap.exists()) {
          const data = snap.val();
          const found: any = Object.values(data).find((item: any) => item.slug === slug);
          if (found) {
            const title = found.fullName?.[lang] || found.headerTitle?.[lang] || found.title?.[lang];
            setAsyncTitle(getLocalizedString(title));
          }
        }
      } catch (error) {
        console.error("Breadcrumbs error:", error);
      }
    }

    fetchBreadcrumbData();
  }, [blogSlug, serviceSlug, specialSlug, employeeSlug, currentTitle, lang, businessSlug]);

  const finalTitle = getLocalizedString(currentTitle) || asyncTitle;

  // Базовая ссылка теперь включает businessSlug
  // Пример: /ru/my-restaurant
  const baseHref = `/${lang}/${businessSlug}`;

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: baseHref },
  ];

  const currentPath = location.pathname;

  // Везде добавляем businessSlug в href
  if (currentPath.includes("/employees")) {
    items.push({ label: t("header.employees"), href: `${baseHref}/employees` });
  }
  else if (currentPath.includes("/blogs")) {
    items.push({ label: t("header.blog"), href: `${baseHref}/blogs` });
  }
  else if (currentPath.includes("/specials")) {
    items.push({ label: t("header.specials"), href: `${baseHref}/specials` });
  }
  else if (currentPath.includes("/services")) {
    items.push({ label: t("header.services"), href: `${baseHref}/services` });
  }
  else {
    const staticTabs = [
      { title: "header.about", link: "/about" },
      { title: "header.price", link: "/price" },
      { title: "header.faq", link: "/faq" },
      { title: "header.gallery", link: "/gallery" },
      { title: "header.contact", link: "/contact" },
    ];
    // Очищаем путь от префикса языка и бизнеса для сравнения
    const cleanPath = currentPath.replace(`${baseHref}`, "");
    const matchedTab = staticTabs.find((tab) => cleanPath.startsWith(tab.link));
    if (matchedTab) items.push({ label: t(matchedTab.title), href: `${baseHref}${matchedTab.link}` });
  }

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