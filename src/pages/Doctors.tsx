import {doctors, specials} from "../data/services"; // твой массив с данными
import { useTranslation } from "react-i18next";
import type { Doctor } from "../models/Doctor.ts";
import { Button } from "@heroui/react";
import {Link, useParams} from "react-router-dom";
import type {Scpecials} from "../models/Scpecials.ts";

export default function Doctors() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";


  const minExperience = 7; // динамически укажешь сам


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
                {t("doctors.title")}
              </h2>
              <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
                   {t("doctors.subtitle", { years: minExperience })}
                </span>
              <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                {t("doctors.experience")}
              </p>
            </div>


            <div className="flex justify-center items-center flex-wrap">

              {doctors.map((item: Doctor) => (
                  <Link
                      key={item.id}
                      to={`/${lang}/doctors/${item.slug}`}
                      className="group rounded-2xl shadow-md  transition overflow-hidden
                    h-[40rem]
                    w-[51rem]
                    mr-[2rem]
                    justify-between
                    hover:bg-[var(--primary)] duration-500
                    hover:shadow-xl
                    flex relative
                    mb-[6rem]"
                  >

                    <div className="p-[2.5rem] text-foreground duration-500 w-fit">
                      <h2 className="text-[2rem] font-extrabold mb-[1.5rem]">{item.fullName[lang]}</h2>

                      <p className="text-[1.2rem] font-light mb-[2.5rem] pl-[2rem] duration-500">{item.position[lang]}</p>


                      <Button
                          as={Link}
                          to={`/${lang}/doctors/${item.slug}`}
                          className=" md:w-fit p-[1rem] rounded-[3.5rem] mb-[3.5rem]
                          flex items-center justify-center
                          text-white
                          font-semibold
                          bg-black
                          object-cover
                          hover:bg-[var(--primary)] duration-500 absolute w-fit
                          bottom-0
                         "
                      >
                        {t("doctors.bookAppointment", {
                          name: item.shortName[lang],
                        })}
                      </Button>
                    </div>


                    {item.photo && (
                        <Button as={Link}
                                to={`/${lang}/doctors/${item.slug}`}
                                className="overflow-hidden w-4/6 h-full block p-0"
                        >
                          <img
                              src={item.photo}
                              alt={item.fullName[lang]}
                              className="w-full  h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
