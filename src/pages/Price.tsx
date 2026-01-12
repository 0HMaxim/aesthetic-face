import {useTranslation} from "react-i18next";
import PriceTable from "../components/PriceTable.tsx";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";
import {useBusiness} from "../context/BusinessContext.tsx";
import {useParams} from "react-router-dom";

export default function Price() {

  const { t } = useTranslation();

  const { meta } = useBusiness();
  const { businessSlug } = useParams<{ slug: string; businessSlug: string }>();


  const headerImage =
      meta?.pricesHeaderImage ||
      meta?.galleryHeaderImage ||
      meta?.logo ||
      "";

  return (
      <div className="w-full items-center justify-center ">

        {headerImage && (
            <TopImage source={headerImage}/>
        )}

        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("price.title")}
            </h2>

            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("price.subtitle")}
            </p>
          </div>


          <PriceTable businessSlug={businessSlug}/>

        </div>

      </div>

  );

}