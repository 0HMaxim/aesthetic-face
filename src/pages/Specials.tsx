import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import type {Scpecials} from "../models/Scpecials.ts";
import {specials} from "../data/services.ts";
import {Button} from "@heroui/react";


export default function Specials() {

  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  console.log(t("header.services"))
  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  return (

      <div className="w-full items-center justify-center ">

        {imagee && (
            <div className="overflow-hidden w-full h-[22rem] relative p-0 blur-[0.5rem] mb-[3.5rem]"
            >
              <img
                  src={imagee}
                  alt={imagee}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
        )}

        <div className="w-full px-4 md:px-[10rem]">


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("specials.title")}
            </h2>

            {/*{t("services.subtitle")}*/}
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("specials.subtitle")}
            </p>
          </div>


          <div className="flex justify-center items-center flex-wrap">


            {specials.map((item: Scpecials) => (
                <Link
                    key={item.id}
                    to={`/${lang}/specials/${item.slug}`}
                    className="group rounded-[10rem] shadow-md hover:shadow-xl transition overflow-hidden
                    h-[45rem]
                    w-[99rem]
                    justify-between
                    flex relative row
                    hover:bg-[var(--primary)] duration-500
                    mb-[6rem]"
                >

                  <div className="pl-[3.5rem] pt-[3.5rem] text-foreground w-2/6 duration-500 ">
                    <h2 className="text-[2rem] font-extrabold mb-[1.5rem]">{item.title[lang]}</h2>

                    <p className="text-[1.2rem] font-light mb-[2.5rem] pl-[2rem] duration-500">{item.subtitle[lang]}</p>


                    <Link
                        to={`/${lang}/specials/${item.slug}`}
                        className="w-full md:w-[20rem] p-[2rem] rounded-[3.5rem] mt-auto mb-[3.5rem]
                          flex items-center justify-center
                          text-white
                          font-semibold
                          bg-black
                          object-cover
                          hover:bg-[var(--primary)] duration-500 absolute
                          bottom-0
                         "
                    >
                      {t("specials.learnMore")}
                    </Link>
                  </div>


                  {item.mainImage && (
                      <Button as={Link}
                              to={`/${lang}/specials/${item.slug}`}
                              className="overflow-hidden w-4/6 h-full block p-0
                              "
                      >
                        <img
                            src={item.mainImage}
                            alt={item.title[lang]}
                            className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-500
                            "
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


