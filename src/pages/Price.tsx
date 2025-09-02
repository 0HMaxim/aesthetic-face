import {useTranslation} from "react-i18next";
import PriceTable from "../components/PriceTable.tsx";

export default function Price() {

  const { t } = useTranslation();


  const imagee = "s";

  return (
      <div className="w-full items-center justify-center ">


        {imagee && (
            <div className="overflow-hidden w-full h-[15rem] relative p-0 blur-[0.5rem] mb-[3.5rem]"
            >
              <img
                  src={imagee}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
        )}

        <div className="w-full px-4 md:px-[10rem]">


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("price.title")}
            </h2>

            {/*{t("services.subtitle")}*/}
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("price.subtitle")}
            </p>
          </div>


          <PriceTable defaultOpen={true} />

        </div>

      </div>

  );

}