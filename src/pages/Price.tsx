import {useTranslation} from "react-i18next";
import PriceTable from "../components/PriceTable.tsx";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";
import {useBusiness} from "../context/BusinessContext.tsx";
import {useParams} from "react-router-dom";
import i18n from "i18next";

export default function Price() {
  const { t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { businessSlug } = useParams<{ slug: string; businessSlug: string }>();


  const { meta } = useBusiness();

  const dynamicTab = meta?.tabs
      ? Object.values(meta.tabs).find(t => t.route === 'price' || t.route === '/prices')
      : null;

  const headerImage =
      dynamicTab?.headerImage || "";

  const getTabLabel = (localizedValue: any) => {
    if (!localizedValue) return "";
    return localizedValue[lang] || localizedValue["en"] || "";
  };

  return (
      <div className="w-full items-center justify-center ">

         <TopImage source={headerImage}/>

        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full">
              <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
                {getTabLabel(dynamicTab?.title) || t("FAQ.title")}
              </h2>
              <div className="md:flex justify-between block">
                <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">
                  {getTabLabel(dynamicTab?.description) || t("FAQ.subtitle")}
                </p>
              </div>

            <PriceTable businessSlug={businessSlug}/>
          </div>

        </div>
      </div>

  );

}