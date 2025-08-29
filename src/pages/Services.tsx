import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import {services} from "../data/services";
import {Button} from "@heroui/react";

export default function Services() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const imagee = "https://nextmedasia.com/wp-content/uploads/2022/11/lede.jpg"; // динамически укажешь сам



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
                {t("services.title")}
              </h2>

              {/*{t("services.subtitle")}*/}
              <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

                <p className="text-base lg:text-2xl font-normal text-foreground">
                  {t("services.description")}
                </p>
          </div>


          <div className="flex justify-center items-center flex-wrap">


            {services.map((service) => (

                <Link
                    key={service.id}
                    to={`/${lang}/services/${service.slug}`}
                    className="group rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden
                    h-[21rem]
                    w-[32rem]
                    mr-[2rem]
                    justify-between
                    relative flex-col
                    hover:bg-[var(--primary)] duration-500
                    mb-[6rem]"
                >


                  {service.mainImage && (
                      <Button as={Link}
                              to={`/${lang}/services/${service.slug}`}
                              className="overflow-hidden w-full h-4/5 block p-0"
                      >
                        <img
                            src={service.mainImage}
                            alt={service.title[lang]}
                            className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Button>
                  )}

                  <div className="p-[1rem] text-foreground duration-500 w-fit">
                    <h2 className="text-[1.2rem] font-extrabold mb-[1.5rem]">{service.title[lang]}</h2>

                  </div>


                </Link>
            ))}
          </div>
        </div>
      </div>


  );
}
