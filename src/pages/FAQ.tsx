import FAQList from "../components/FAQList.tsx";
import { faqs } from "../data/services";
import {useTranslation} from "react-i18next";

export default function FAQ() {

  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const imagee = "s";

  return (
      <div className="w-full items-center justify-center ">


        {imagee && (
            <div className="overflow-hidden w-full h-[22rem] relative p-0 blur-[0.5rem] mb-[3.5rem]"
            >
              <img
                  src={imagee}
                  alt={imagee}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
        )}

        <div className="w-full px-4 md:px-[10rem]">


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("FAQList.title")}
            </h2>

            {/*{t("services.subtitle")}*/}
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground">
              {t("FAQList.subtitle")}
            </p>
          </div>



          <FAQList faqs={faqs} />

        </div>


      </div>


  );

}