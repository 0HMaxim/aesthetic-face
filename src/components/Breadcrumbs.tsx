import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services, subservices, doctors, specials, blogs } from "../data/services"; // добавляем blogs

interface BreadcrumbsProps {
  serviceId?: string;
  subserviceId?: string;
  doctorSlug?: string;
  specialSlug?: string;
  blogSlug?: string;
}

const staticTabs = [
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

// Функция безопасного получения строки из LocalizedText
function getLocalizedString(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
                                                          serviceId,
                                                          subserviceId,
                                                          doctorSlug,
                                                          specialSlug,
                                                          blogSlug,
                                                        }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const location = useLocation();

  const items: { label: string; href: string }[] = [
    { label: t("header.home"), href: `/${lang}` },
  ];

  // ---------------------- SERVICES / SUBSERVICES ----------------------
  if (location.pathname.includes("/services")) {
    items.push({ label: t("header.services"), href: `/${lang}/services` });

    if (subserviceId) {
      const subservice = subservices.find((ss) => ss.id === subserviceId);
      if (subservice) {
        const parent = services.find((s) => s.id === subservice.serviceId);
        if (parent) {
          items.push({
            label: getLocalizedString(parent.title[lang]),
            href: `/${lang}/services/${parent.slug}`,
          });
        }
        items.push({
          label: getLocalizedString(subservice.title[lang]),
          href: `/${lang}/services/${subservice.slug}`,
        });
      }
    } else if (serviceId) {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        items.push({
          label: getLocalizedString(service.title[lang]),
          href: `/${lang}/services/${service.slug}`,
        });
      }
    }
  }

  // ---------------------- DOCTORS ----------------------
  else if (location.pathname.includes("/doctors")) {
    items.push({ label: t("header.doctors"), href: `/${lang}/doctors` });

    if (doctorSlug) {
      const doctor = doctors.find((d) => d.slug === doctorSlug);
      if (doctor) {
        items.push({
          label: getLocalizedString(doctor.fullName[lang]),
          href: `/${lang}/doctors/${doctor.slug}`,
        });
      }
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

// ---------------------- BLOG ----------------------
  else if (location.pathname.includes("/blogs")) { // <- plural!
    items.push({ label: t("header.blog"), href: `/${lang}/blogs` });

    if (blogSlug) {
      const blog = blogs.find((b) => b.slug === blogSlug);
      if (blog) {
        items.push({
          label: getLocalizedString(blog.title[lang]),
          href: `/${lang}/blogs/${blog.slug}`,
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
