import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { TopImage } from "../components/TopImage.tsx";
import type { Special } from "../models/Special.ts";
import { useFetchData } from "../hooks/useFetchData.ts";

export default function Specials() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as 'uk' | 'ru' | 'en' | 'de';

  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  const { data: relatedData, loading } = useFetchData(["specials"]);
  const specialsList = (relatedData.specials || []) as Special[];

  if (loading) return <div className="text-center py-10 text-xl">{t("loading") || "Loading..."}</div>;

  return (
      <div className="w-full flex flex-col items-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem] max-w-[120rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("specials.title")}
            </h2>
            <p className="text-base lg:text-2xl font-normal text-foreground">
              {t("specials.subtitle")}
            </p>
          </div>

          {/* Список карточек без слайдера */}
          <div className="flex flex-col items-center gap-16 mb-20 w-full">
            {specialsList.map((item: Special) => {
              const titleText = item.title?.[lang] || item.title?.en || t('Untitled Special');
              const subtitleText = item.subtitle?.[lang] || item.subtitle?.en || '';

              if (!item.slug) return null;

              return (
                  <Link
                      key={item.id}
                      to={`/${lang}/specials/${item.slug}`}
                      className="
          group rounded-[2.5rem] shadow-md transition overflow-hidden
          w-full max-w-[85rem]
          /* Фиксированная высота для десктопа, авто для мобилок */
          h-auto md:h-[32rem]
          flex flex-col md:flex-row
          bg-primary
          hover:shadow-2xl
          duration-500
        "
                  >
                    {/* Левая часть: Текст (теперь занимает ровно 40% и тянется) */}
                    <div className="p-8 md:p-14 text-foreground w-full md:w-[40%] flex flex-col h-full">
                      <div className="flex-grow">
                        <h2 className="text-2xl md:text-[2.2rem] font-black mb-6 leading-tight group-hover:tracking-wide transition-all duration-500">
                          {titleText}
                        </h2>
                        <p className="text-base md:text-[1.2rem] font-light leading-relaxed opacity-90 line-clamp-4 md:line-clamp-6">
                          {subtitleText}
                        </p>
                      </div>

                      <Button
                          as={Link}
                          to={`/${lang}/specials/${item.slug}`}
                          className="
              w-full md:w-fit px-10 py-7 rounded-full
              text-white font-bold text-sm uppercase tracking-widest
              bg-black hover:bg-white hover:text-black
              transition-all duration-500 mt-8
            "
                      >
                        {t("specials.learnMore")}
                      </Button>
                    </div>

                    {/* Правая часть: Фото (занимает 60% и всегда заполняет высоту) */}
                    {item.mainImage && (
                        <div className="w-full md:w-[60%] h-[250px] md:h-full overflow-hidden flex-shrink-0">
                          <img
                              src={item.mainImage}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                          />
                        </div>
                    )}
                  </Link>
              );
            })}
          </div>
        </div>
      </div>
  );
}