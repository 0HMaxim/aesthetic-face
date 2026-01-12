import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetchData } from "../../hooks/useFetchData";
import { useBusiness } from "../../context/BusinessContext";
import {useGeneralInfo} from "../../hooks/useGeneralInfo.ts";

export default function Footer() {
  const { lang = "en", businessSlug } = useParams<{
    lang: string;
    businessSlug: string;
  }>();

  const { t } = useTranslation();

  const { data } = useFetchData(
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



  return (
      <footer className="
      bg-foreground text-background
      px-[4rem] md:px-[6rem]
      py-[6rem] md:py-[10rem]
    ">
        <div className="
        max-w-[1600px] mx-auto
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-[4rem]
      ">

          {/* LOGO / ABOUT */}
          <div className="space-y-6">
            {meta?.logo && (
                <img
                    src={meta.logo}
                    alt="logo"
                    className="h-16 object-contain"
                />
            )}

            <h3 className="text-2xl font-black tracking-tight">
              {meta?.name?.[lang] ?? "Business"}
            </h3>

            {meta?.slogan?.[lang] && (
                <p className="text-sm leading-relaxed text-secondary/80 max-w-sm">
                  {meta.slogan[lang]}
                </p>
            )}
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-secondary">
              {meta?.tabs?.services?.[lang] ?? t("header.services")}
            </h4>

            <ul className="space-y-4">
              {services.map((service: any) => (
                  <li key={service.id}>
                    <Link
                        to={`/${lang}/${businessSlug}/services/${service.slug}`}
                        className="text-sm hover:text-secondary transition"
                    >
                      {service.title?.[lang] ?? service.title?.en}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-secondary">
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
            {info && (
                <div className="space-y-4 text-sm text-foregtound">
                  {info.phone?.[lang] && (
                      <a href={`tel:${info.phone[lang]}`} className="block hover:text-secondary">
                        {info.phone[lang]}
                      </a>
                  )}

                  {info.email && (
                      <a href={`mailto:${info.email}`} className="block hover:text-secondary">
                        {info.email}
                      </a>
                  )}

                  {info.address?.[lang] && (
                      <p>{info.address[lang]}</p>
                  )}
                </div>
            )}

          </div>
        </div>
      </footer>
  );
}
