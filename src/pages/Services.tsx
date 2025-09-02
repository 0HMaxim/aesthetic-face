import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import {services} from "../data/services";

export default function Services() {

  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const imagee = "https://nextmedasia.com/wp-content/uploads/2022/11/lede.jpg";



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
                {t("services.title")}
              </h2>

              {/*{t("services.subtitle")}*/}
              <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

                <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                  {t("services.description")}
                </p>
          </div>


          <div className="flex justify-center items-center flex-wrap">


            {services.map((service) => (

                <Link
                    key={service.id}
                    to={`/${lang}/services/${service.slug}`}
                    className="group rounded-[10rem] shadow-md transition overflow-hidden
                     h-[23rem]
                     w-[32rem]
                     mr-[2rem]
                     mb-[4rem]
                     hover:bg-[var(--primary)]
                     duration-500
                     hover:shadow-xl relative"
                >
                  {service.mainImage && (
                      <img
                          src={service.mainImage}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                  )}


                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full  bg-black/30 text-white p-4 text-center">
                    <p className="text-base md:text-[1.5rem] font-normal p-[1.5rem]">
                      {service.title[lang]}
                    </p>
                  </div>
                </Link>

            ))}
          </div>
        </div>
      </div>


  );
}
