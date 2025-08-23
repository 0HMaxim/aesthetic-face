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
      <header className="flex items-center justify-between gap-4 p-4 w-full">

        <nav className="flex gap-4 text-[1rem] font-[600] text-foreground">
          {tabs.map(tab => (
              <Link key={tab.link} to={`/${lang}${tab.link}`} className="p-[2rem]">
                {t(tab.title)}
              </Link>
          ))}
        </nav>
        {/* Переключатель языка */}
        <div className="flex">
          <LanguageSwitcher/>
          <ThemeSwitcher/>
        </div>
      </header>
  );
}