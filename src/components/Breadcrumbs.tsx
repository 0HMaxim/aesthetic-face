import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {db} from "../firebase.ts";
import {get, ref} from "firebase/database";
import {specials} from "../data/services.ts";

interface BreadcrumbsProps {
  serviceId?: string;
  subserviceId?: string;
  employeeSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
}

const staticTabs = [
  { title: "header.about", link: "/about" },
  { title: "header.specials", link: "/specials" },
  { title: "header.services", link: "/services" },
  { title: "header.employees", link: "/employees" },
  { title: "header.price", link: "/price" },
  { title: "header.faq", link: "/faq" },
  { title: "header.gallery", link: "/gallery" },
  { title: "header.blog", link: "/blog" },
  { title: "header.contact", link: "/contact" },
];

// Функция безопасного получения строки из LocalizedText
function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
                                                          serviceId,
                                                          subserviceId,
                                                          employeeSlug,
                                                          specialSlug,
                                                          blogSlug,
                                                        }) => {



  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const location = useLocation();

  const [employeeData, setEmployeeData] = useState<any>(null);
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    // Загружаем сотрудника, если есть slug
    if (employeeSlug) {
      const empRef = ref(db, `employees/${employeeSlug}`);
      get(empRef).then((snapshot) => {
        if (snapshot.exists()) setEmployeeData(snapshot.val());
      });
    }

    // Загружаем блог, если есть slug
    if (blogSlug) {
      const blogRef = ref(db, `blogs/${blogSlug}`);
      get(blogRef).then((snapshot) => {
        if (snapshot.exists()) setBlogData(snapshot.val());
      });
    }
  }, [employeeSlug, blogSlug]);

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  // ---------------------- employees ----------------------
  if (location.pathname.includes("/employees")) {
    items.push({ label: t("header.employees"), href: `/${lang}/employees` });

    if (employeeData) {
      items.push({
        label: getLocalizedString(employeeData.fullName?.[lang]),
        href: `/${lang}/employees/${employeeData.slug}`,
      });
    }
  }

  // ---------------------- blogs ----------------------
  else if (location.pathname.includes("/blogs")) {
    items.push({ label: t("header.blog"), href: `/${lang}/blogs` });

    if (blogData) {
      items.push({
        label: getLocalizedString(blogData.title?.[lang]),
        href: `/${lang}/blogs/${blogData.slug}`,
      });
    }
  }


  // ---------------------- SPECIALS ----------------------
  else if (location.pathname.includes("/specials")) {
    items.push({ label: t("header.specials"), href: `/${lang}/specials` });

    if (specialSlug) {
      const special = specials.find((s) => s.slug === specialSlug);
      if (special) {
        items.push({
          label: getLocalizedString(special.headerTitle?.[lang]),
          href: `/${lang}/specials/${special.slug}`,
        });
      }
    }
  }



  // ---------------------- STATIC PAGES ----------------------
  else {
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
