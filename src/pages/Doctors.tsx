import {doctors } from "../data/services"; // твой массив с данными
import { useTranslation } from "react-i18next";
import type { Doctor } from "../models/Doctor.ts";
import { Button } from "@heroui/react";
import {Link} from "react-router-dom";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";

export default function Doctors() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";


  const minExperience = 7; // динамически укажешь сам


  return (
      <div className="w-full items-center justify-center ">


        {imagee && (
            <TopImage source={imagee}/>
        )}



        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("doctors.title")}
            </h2>
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
                   {t("doctors.subtitle", { years: minExperience })}
                </span>
            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("doctors.experience")}
            </p>
          </div>


          <div className="flex flex-wrap gap-8 justify-center w-full">
            {doctors.map((item: Doctor) => (
                <Link
                    key={item.id}
                    to={`/${lang}/doctors/${item.slug}`}
                    className="group rounded-[10rem] shadow-md transition overflow-hidden
                           flex relative
                           w-full
                           md:w-[48%]
                           xl:max-w-[48%]
                           min-[1440px]:max-w-[32%]
                           max-[1440px]:min-w-[48%]
                           max-h-[35rem]
                           max-[768px]:min-w-full


                           bg-primary duration-500
                           hover:shadow-xl"
                    >
                  <div className="pl-[3.5rem] pt-[3.5rem] text-foreground duration-500 w-fit">
                    <h2 className="md:text-[1.6rem] text-[1.5rem]  font-extrabold mb-[2.5rem]">
                      {item.fullName[lang]}
                    </h2>

                    <p className="md:text-[1.2rem] text-[1rem] font-light mb-[3.5rem] pb-[4.5rem] pl-[2rem] duration-500">
                      {item.position[lang]}
                    </p>

                    <Button
                        as={Link}
                        to={`/${lang}/doctors/${item.slug}`}
                        className="md:w-fit p-[1rem] rounded-[3.5rem]
                        flex items-center justify-center
                        text-white font-semibold text-[0.85rem]
                        xl:text-[1.1rem]
                        md:text-[0.9rem]
                        bg-black hover:bg-[var(--primary)]
                        duration-500 w-fit
                        bottom-0 absolute mb-[3.5rem]"
                    >
                      {t("doctors.bookAppointment", {
                        name: item.shortName[lang],
                      })}
                    </Button>
                  </div>

                  {item.photo && (
                      <Button
                          as={Link}
                          to={`/${lang}/doctors/${item.slug}`}
                          className="overflow-hidden w-4/6 min-h-full block p-0"
                      >
                        <img
                            src={item.photo}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
