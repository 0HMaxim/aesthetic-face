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
      <header className="w-full  flex items-center justify-between p-[3rem] fixed  backdrop-blur-[10rem] rounded-[5rem]
         text-foreground bg-primary z-20">
        <nav className="flex gap-4 flex-wrap w-full d ">
          {tabs.map(tab => (
              <Link
                  key={tab.link}
                  to={`/${lang}${tab.link}`}
                  className="text-[1rem] font-semibold text-foreground row

                   hover:bg-teal-400 duration-500 hover:bg-secondary rounded-[5rem] p-[1.5rem] shadow-2xl"
              >
                {t(tab.title)}
              </Link>
          ))}
        </nav>
        <div className="flex gap-2 ml-4 dark:text-black text-white ">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
  );
}
