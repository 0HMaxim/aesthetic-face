import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import IconXMark from "~icons/fa6-solid/xmark";
import IconThreeBars from "~icons/octicon/three-bars-16";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { get, ref } from "firebase/database";
import { db } from "../../firebase.ts";
import type { BusinessMeta } from "../../models/Meta.ts";
import {useFetchData} from "../../hooks/useFetchData.ts";

export default function Header() {
  const { t } = useTranslation();
  const { businessSlug, lang } = useParams<{ businessSlug: string; lang: string }>();
  const [meta, setMeta] = useState<BusinessMeta | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!businessSlug) return;
    get(ref(db, `businesses/${businessSlug}/meta`)).then((snap) => {
      if (snap.exists()) setMeta(snap.val());
    });
  }, [businessSlug]);

  const tabs = [
    { title: "header.about", link: "about" },
    { title: "header.specials", link: "specials" },
    { title: "header.services", link: "services" },
    { title: "header.employees", link: "employees" },
    { title: "header.price", link: "price" },
    { title: "header.faq", link: "faq" },
    { title: "header.gallery", link: "gallery" },
    { title: "header.blog", link: "blogs" },
    { title: "header.contact", link: "contact" },
  ];


  const { data: relatedData } = useFetchData(
      ["services"],
      businessSlug
  );

  const services = relatedData?.services || [];


  return (
      <>
        <header className="fixed top-4 left-4 right-4 flex items-center justify-between
        md:p-6 p-3 backdrop-blur-md rounded-2xl md:rounded-[5rem]
        text-foreground z-20 shadow-lg"
        >
          {/* Кнопка Admin */}
          {businessSlug && lang && (
              <Link
                  to={`/${lang}/admin/`}
                  className="p-4 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
              >
                Admin
              </Link>
          )}

          {/* Навигация для больших экранов */}
          <nav className="hidden lg:flex gap-4 flex-wrap flex-1 justify-center items-center">

            {/* HOME */}
            <Link
                to={`/${lang}/${businessSlug}`}
                className="text-[1rem] font-semibold text-foreground
    hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
            >
              {meta?.shortName?.[lang] ?? meta?.name?.[lang] ?? "Home"}
            </Link>

            {/* SERVICES WITH DROPDOWN */}
            <div className="relative group">
              <Link
                  to={`/${lang}/${businessSlug}/services`}
                  className="text-[1rem] font-semibold text-foreground
                    hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
              >
                {meta?.tabs?.services?.[lang] ?? t("header.services")}
              </Link>

              {services.length > 0 && (
                  <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4
                                hidden group-hover:flex flex-col gap-2
                                bg-white dark:bg-black/90 backdrop-blur-xl
                                rounded-3xl shadow-2xl p-4 min-w-[240px] z-50"
                  >
                    {services.map((service: any) => (
                        <Link
                            key={service.id}
                            to={`/${lang}/${businessSlug}/services/${service.slug}`}
                            className="px-4 py-2 rounded-xl text-sm font-bold
          hover:bg-secondary transition"
                        >
                          {service.title?.[lang] ?? service.title?.en}
                        </Link>
                    ))}
                  </div>
              )}
            </div>


            {/* OTHER TABS */}
            {tabs
                .filter(tab => tab.link !== "services")
                .map(tab => (
                    <Link
                        key={tab.link}
                        to={`/${lang}/${businessSlug}/${tab.link}`}
                        className="text-[1rem] font-semibold text-foreground
        hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
                    >
                      {meta?.tabs?.[tab.link]?.[lang] ?? t(tab.title)}
                    </Link>
                ))}
          </nav>


          {/* Переключатели и мобильное меню */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 z-50">
              {menuOpen ? <IconXMark className="w-8 h-8 text-foreground" /> : <IconThreeBars className="w-8 h-8 text-foreground" />}
            </button>
          </div>
        </header>

        {/* Затемненный фон мобильного меню */}
        {menuOpen && (
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                onClick={() => setMenuOpen(false)}
            />
        )}

        {/* Мобильное меню */}
        <div
            className={`fixed top-0 left-0 h-full w-full dark:bg-black/90 bg-white/90 p-4 flex flex-col gap-3
          transition-all duration-500 ease-in-out z-40
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}
        >
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <IconXMark className="w-8 h-8 text-foreground" />
            </button>
            <div className="flex gap-2 items-center text-foreground">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          {/* Home */}
          <Link
              to={`/${lang}/${businessSlug}`}
              className="text-[1rem] font-semibold text-foreground hover:bg-secondary duration-300 rounded-[1rem] px-4 py-2"
              onClick={() => setMenuOpen(false)}
          >
            {meta?.shortName?.[lang] ?? meta?.name?.[lang] ?? "Home"}
          </Link>

          {/* Остальные табы */}
          {tabs.map((tab, index) => (
              <Link
                  key={tab.link}
                  to={`/${lang}/${businessSlug}/${tab.link}`}
                  className="text-[1rem] font-semibold text-foreground hover:bg-secondary duration-300 rounded-[1rem] px-4 py-2"
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
              >
                {t(tab.title)}
              </Link>
          ))}

          {/* Admin в мобильном меню */}
          {businessSlug && lang && (
              <Link
                  to={`/${lang}/admin/${businessSlug}`}
                  className="mt-4 p-4 bg-black text-white rounded-lg text-center shadow hover:bg-gray-800 transition"
                  onClick={() => setMenuOpen(false)}
              >
                Admin
              </Link>
          )}
        </div>
      </>
  );
}
