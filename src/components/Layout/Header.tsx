import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

export default function Header() {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();

  const tabs = [
    { title: 'header.about', link: '/about' },
    { title: 'header.specials', link: '/specials' },
    { title: 'header.services', link: '/services' },
    { title: 'header.doctors', link: '/doctors' },
    { title: 'header.price', link: '/price' },
    { title: 'header.faq', link: '/faq' },
    { title: 'header.gallery', link: '/gallery' },
    { title: 'header.blog', link: '/blog' },
    { title: 'header.contact', link: '/contact' },
  ];

  return (
      <header className="w-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-between p-4">
        <nav className="flex gap-4 flex-wrap w-full">
          {tabs.map(tab => (
              <Link
                  key={tab.link}
                  to={`/${lang}${tab.link}`}
                  className="p-2 text-[1rem] font-semibold text-foreground hover:text-blue-600"
              >
                {t(tab.title)}
              </Link>
          ))}
        </nav>
        <div className="flex gap-2 ml-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
  );
}
