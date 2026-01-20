import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = ["ru", "en", "de", "uk"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (newLang: string) => {
    // Получаем текущий путь после #
    const currentHash = window.location.hash.replace("#", ""); // "/de/price"
    const parts = currentHash.split("/").filter(Boolean); // ["de", "price"]

    // Меняем первый сегмент на новый язык
    parts[0] = newLang;

    const newPath = "/" + parts.join("/"); // "/en/price"

    i18n.changeLanguage(newLang);

    // Навигация через HashRouter
    navigate(newPath);
  };

  return (
      <div className="relative inline-block group duration-500">
        {/* Текущий язык */}
        <div className="px-4 py-2 cursor-pointer uppercase">
          {i18n.language}
        </div>

        {/* Выпадающий список */}
        <div
            className="
          absolute left-0 mt-0 flex-col
          opacity-0 translate-y-1 pointer-events-none
          transition-all duration-500 ease-in-out
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
                transition-all duration-500 ease-in-out
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
