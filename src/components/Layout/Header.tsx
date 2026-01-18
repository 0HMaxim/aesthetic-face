import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import IconXMark from "~icons/fa6-solid/xmark";
import IconThreeBars from "~icons/octicon/three-bars-16";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { get, ref } from "firebase/database";
import { db } from "../../firebase";
import type { BusinessMeta } from "../../models/Meta";
import type { LocalizedText } from "../../models/LocalizedText.ts";

export const getLocalizedText = (
    value?: LocalizedText,
    lang?: string
): string => {
  if (!value) return "";
  const l = (lang || "en") as keyof LocalizedText;
  const v = value[l] ?? value.en;
  return Array.isArray(v) ? v.join(", ") : (v as string) ?? "";
};

export default function Header() {
  const { businessSlug, lang } = useParams<{ businessSlug: string; lang: string }>();
  const [meta, setMeta] = useState<BusinessMeta | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!businessSlug) return;

    const fetchMeta = async () => {
      try {
        const snapshot = await get(ref(db, `businesses/${businessSlug}/meta`));
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Header metadata loaded:", data); // ТЕПЕРЬ ТУТ БУДЕТ ВИДНО ДАННЫЕ
          setMeta(data);
        }
      } catch (err) {
        console.error("Firebase fetch error in Header:", err);
      }
    };

    fetchMeta();
  }, [businessSlug]);

  if (!meta) return null;

  // Безопасное получение табов
  const getTabsArray = () => {
    if (!meta.tabs) return [];

    // Если Firebase сохранил как массив (с числовыми ключами)
    if (Array.isArray(meta.tabs)) {
      return meta.tabs.filter(tab => tab && tab.enabled !== false);
    }

    // Если Firebase сохранил как объект
    return Object.values(meta.tabs).filter(tab => tab && tab.enabled !== false);
  };

  const tabs = getTabsArray().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
      <>
        <header className="fixed top-4 left-4 right-4 flex items-center justify-between
          md:p-6 p-3 backdrop-blur-md rounded-2xl md:rounded-[5rem]
          text-foreground z-20 shadow-lg">

          {businessSlug && (
              <Link
                  to={`/${lang}/admin/${businessSlug}/meta`}
                  className="hidden sm:flex items-center text-foreground gap-2 bg-black/5 hover:bg-black text-black hover:text-white px-5 py-3 rounded-2xl transition-all duration-300 font-black text-[10px] uppercase tracking-widest border border-black/5 shadow-sm"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Admin
              </Link>
          )}


          <nav className="hidden lg:flex gap-4 flex-wrap flex-1 justify-center items-center">
            {/* Главная */}
            <Link
                to={`/${lang}/${businessSlug}`}
                className="text-[1rem] font-semibold text-foreground hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
            >
              {getLocalizedText(meta.shortName, lang) || getLocalizedText(meta.name, lang) || "Home"}
            </Link>

            {/* Динамические табы */}
            {tabs.map((tab, index) => (
                <Link
                    key={tab.route || index}
                    to={`/${lang}/${businessSlug}/${tab.route}`}
                    className="text-[1rem] font-semibold text-foreground hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
                >
                  {getLocalizedText(tab.shortName, lang)}
                </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 z-50">
              {menuOpen ? <IconXMark className="w-8 h-8" /> : <IconThreeBars className="w-8 h-8" />}
            </button>
          </div>
        </header>

        {/* Мобильное меню */}
        <div className={`fixed inset-0 dark:bg-black/95 bg-white/95 p-4 flex flex-col gap-3 transition-all duration-500 z-40
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>

          <div className="flex justify-between items-center p-4">
            <button onClick={() => setMenuOpen(false)} className="p-2">
              <IconXMark className="w-8 h-8" />
            </button>
            <div className="flex gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          <Link to={`/${lang}/${businessSlug}`} className="text-xl font-bold p-4" onClick={() => setMenuOpen(false)}>
            {getLocalizedText(meta.name, lang)}
          </Link>

          {tabs.map((tab, index) => (
              <Link
                  key={tab.route || index}
                  to={`/${lang}/${businessSlug}/${tab.route}`}
                  className="text-xl font-medium p-4 border-b dark:border-white/10"
                  onClick={() => setMenuOpen(false)}
              >
                {getLocalizedText(tab.shortName, lang)}
              </Link>
          ))}
        </div>
      </>
  );
}