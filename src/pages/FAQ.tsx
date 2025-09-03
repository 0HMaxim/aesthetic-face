import FAQList from "../components/FAQList.tsx";
import { faqs } from "../data/services";
import {useTranslation} from "react-i18next";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";

export default function FAQ() {

  const { t } = useTranslation();

  const imagee = "s";

  return (
      <div className="w-full items-center justify-center ">


        {imagee && (
            <TopImage source={imagee}/>
        )}

        <div className="w-full px-4 md:px-[10rem]">

          <Breadcrumbs />


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("FAQList.title")}
            </h2>

            {/*{t("services.subtitle")}*/}
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("FAQList.subtitle")}
            </p>
          </div>

          <FAQList faqs={faqs}  />

        </div>


      </div>


  );

}