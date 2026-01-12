import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Button } from "@heroui/react";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { TopImage } from "../components/TopImage.tsx";
import type { Special } from "../models/Special.ts";
import { useFetchData } from "../hooks/useFetchData.ts";
import { useBusiness } from "../context/BusinessContext.tsx";

export default function Specials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { businessSlug } = useParams<{ businessSlug: string }>();

  const { data, loading } = useFetchData(["specials"], businessSlug);
  const specials = (data.specials ?? []) as Special[];

  const { meta } = useBusiness();

  const headerImage =
      meta?.specialsHeaderImage ||
      meta?.galleryHeaderImage ||
      meta?.logo ||
      "";

  if (loading) {
    return <p className="text-center py-10">{t("loading")}</p>;
  }

  return (
      <div className="w-full flex flex-col items-center">
        <TopImage source={headerImage} />

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

          <div className="flex flex-col items-center gap-16 mb-20 w-full">
            {specials.map((item) => {
              if (!item.slug) return null;

              const titleText =
                  item.title?.[lang] || item.title?.en || t("Untitled Special");
              const subtitleText =
                  item.subtitle?.[lang] || item.subtitle?.en || "";

              const link = `/${lang}/${businessSlug}/specials/${item.slug}`;

              return (
                  <Link
                      key={item.id}
                      to={link}
                      className="
                  group rounded-[2.5rem] shadow-md transition overflow-hidden
                  w-full max-w-[85rem]
                  h-auto md:h-[32rem]
                  flex flex-col md:flex-row
                  bg-primary
                  hover:shadow-2xl
                  duration-500
                "
                  >
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
                          to={link}
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
