import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = ["ru", "en", "de", "uk"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (newLang: string) => {
    const base = import.meta.env.BASE_URL;
    const currentPath = window.location.pathname.replace(base, "");

    console.log("BASE:", base);
    console.log("window.location.pathname:", window.location.pathname);
    console.log("currentPath:", currentPath);

    const parts = currentPath.split("/");
    console.log("parts before:", parts);

    parts[0] = newLang;
    const newPath = "/" + parts.join("/");

    console.log("newPath:", newPath);

    i18n.changeLanguage(newLang);
    navigate(newPath);
  };


  return (
      <div className="relative inline-block group">
        {/* Текущий язык */}
        <div className="px-4 py-2 cursor-pointer uppercase">
          {i18n.language}
        </div>

        {/* Выпадающий список */}
        <div
            className="
          absolute left-0 mt-0 flex-col
          opacity-0 translate-y-1 pointer-events-none
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          flex
        "
        >
          {languages
          .filter((lang) => lang !== i18n.language)
          .map((language, index) => (
              <div
                  key={language}
                  onClick={() => changeLanguage(language)}
                  className={`
                px-4 py-1 cursor-pointer uppercase hover:underline
                opacity-0 translate-y-1
                transition-all duration-300 ease-in-out
                group-hover:opacity-100 group-hover:translate-y-0
              `}
                  style={{ transitionDelay: `${index * 100}ms` }}
              >
                {language}
              </div>
          ))}
        </div>
      </div>
  );
}
