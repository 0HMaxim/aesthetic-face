import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import IconXMark from "~icons/fa6-solid/xmark";
import IconThreeBars from "~icons/octicon/three-bars-16";

import LanguageSwitcher from "./LanguageSwitcher.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

export default function Header() {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { title: "header.about", link: "/about" },
    { title: "header.specials", link: "/specials" },
    { title: "header.services", link: "/services" },
    { title: "header.employees", link: "/employees" },
    { title: "header.price", link: "/price" },
    { title: "header.faq", link: "/faq" },
    { title: "header.gallery", link: "/gallery" },
    { title: "header.blog", link: "/blogs" },
    { title: "header.contact", link: "/contact" },
  ];

  return (
      <>
        <header
            className="fixed top-4 left-4 right-4 flex items-center justify-between
               md:p-6 p-3 backdrop-blur-md rounded-2xl md:rounded-[5rem]
               text-foreground z-20 shadow-lg"
        >

          <Link
              to="/admin/blogs"
              className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
             Admin
          </Link>


          {/* Навигация для больших экранов */}
          <nav className="hidden lg:flex gap-4 flex-wrap w-full">
            {tabs.map((tab) => (
                <Link
                    key={tab.link}
                    to={`/${lang}${tab.link}`}
                    className="text-[1rem] font-semibold text-foreground
                       hover:bg-teal-400 duration-500 hover:bg-secondary
                       rounded-[5rem] p-[1.5rem] shadow-2xl"
                >
                  {t(tab.title)}
                </Link>
            ))}
          </nav>

          {/* Мобильное меню (кнопка открытия) */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 z-50">
              {menuOpen ? (
                  <IconXMark className="w-8 h-8 text-foreground" />
              ) : (
                  <IconThreeBars className="w-8 h-8 text-foreground" />
              )}
            </button>
          </div>

          {/* Переключатели справа (для больших экранов) */}
          <div className="flex gap-2 items-center ">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </header>

        {/* Затемненный фон */}
        {menuOpen && (
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                onClick={() => setMenuOpen(false)}
            />
        )}

        {/* Выпадающий список (само меню) */}
        <div
            className={`
          fixed top-0 left-0 h-full w-full  dark:bg-black/90 bg-white/90 p-4 flex flex-col gap-3
          transition-all duration-500 ease-in-out z-40
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}
        `}
        >
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <IconXMark className="w-8 h-8 text-foreground" />
            </button>
            <div className="flex gap-2 items-center text-foreground">
              <div className="flex items-center h-full"><LanguageSwitcher /></div>
              <div className="flex items-center h-full"><ThemeSwitcher /></div>
            </div>
          </div>
          {tabs.map((tab, index) => (
              <Link
                  key={tab.link}
                  to={`/${lang}${tab.link}`}
                  className="text-[1rem] font-semibold text-foreground
              hover:bg-teal-400 hover:bg-secondary duration-300
              rounded-[1rem] px-4 py-2"
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
              >
                {t(tab.title)}
              </Link>
          ))}
        </div>
      </>
  );
}