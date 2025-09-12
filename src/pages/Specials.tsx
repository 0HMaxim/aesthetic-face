import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import type { Scpecials } from "../models/Scpecials.ts";
import { specials } from "../data/services.ts";
import { Button } from "@heroui/react";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { TopImage } from "../components/TopImage.tsx";

export default function Specials() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  return (
      <div className="w-full items-center justify-center ">
        {imagee && <TopImage source={imagee}/>}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("specials.title")}
            </h2>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("specials.subtitle")}
            </p>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-6">
            {specials.map((item: Scpecials) => (
                <Link
                    key={item.id}
                    to={`/${lang}/specials/${item.slug}`}
                    className="
                    group rounded-2xl shadow-md transition overflow-hidden
                    w-full sm:w-[32rem] md:w-[45rem] h-auto
                    flex flex-col md:flex-row
                    md:gap-[2rem]      /* <-- gap между текстом и картинкой на больших экранах */
                    justify-between relative
                    bg-primary
                    mb-[6rem]
                    hover:shadow-xl
                    duration-500"
                >
                  {/* Текст */}
                  <div className="p-[2rem] text-foreground w-full md:w-2/6 flex flex-col">
                    <h2 className="text-[1.8rem] font-extrabold mb-[1rem]">{item.title[lang]}</h2>
                    <p className="text-[1.2rem] pl-[1.5rem] font-light mb-[1.5rem]">{item.subtitle[lang]}</p>

                    <Button
                        as={Link}
                        to={`/${lang}/specials/${item.slug}`}
                        className="
                        w-full md:w-auto px-[1.5rem] py-[0.75rem] rounded-[3.5rem]
                        flex items-center justify-center
                        text-white font-semibold
                        bg-black
                        hover:bg-[(var--primary)]
                        transition-colors duration-500
                        mt-auto   "
                    >
                      {t("specials.learnMore")}
                    </Button>
                  </div>

                  {/* Картинка */}
                  {item.mainImage && (
                      <Button
                          as={Link}
                          to={`/${lang}/specials/${item.slug}`}
                          className="overflow-hidden w-full md:w-4/6 block p-0 mt-4 md:mt-0"
                      >
                        <img
                            src={item.mainImage}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Button>
                  )}
                </Link>

            ))}
          </div>

        </div>
      </div>
  );
}
