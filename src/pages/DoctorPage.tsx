import { doctors } from "../data/services";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { LocalizedText } from "../models/LocalizedText";
import {Button} from "@heroui/react";
import SolarUnreadOutline from '~icons/solar/unread-outline'

export default function DoctorPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const doctor = doctors.find((doc) => doc.slug === slug);

  if (!doctor) {
    return <div className="p-8 text-center text-red-500 text-xl">Лікаря не знайдено</div>;
  }

  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

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


          {/*<div className="py-8 mb-[3.5rem]">*/}
          {/*  <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">*/}
          {/*    {t("doctors.title")}*/}
          {/*  </h2>*/}
          {/*  <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">*/}
          {/*      </span>*/}
          {/*  <p className="text-base lg:text-2xl font-normal text-foreground duration-500">*/}
          {/*    {t("doctors.experience")}*/}
          {/*  </p>*/}
          {/*</div>*/}

        <h1 className="text-3xl md:text-5xl mb-[2.5rem] font-[700] md:text-center text-foreground">
          {doctor.fullName[lang]}
        </h1>




        <div className="mt-10 flex flex-col md:flex-row gap-[5.5rem] rounded-[10rem] shadow-md  transition overflow-hidden    duration-500
                    hover:shadow-xl">
          {/* ЛЕВАЯ КОЛОНКА */}

            <div className="flex flex-col items-start">
              {doctor.photo && (
                  <img
                      src={doctor.photo}
                      className="w-full object-cover rounded-xl shadow-lg md:w-[40rem] md:h-[43rem] mb-[1.5rem]"
                  />
              )}

            <div className="text-[1.75rem] font-[700] mb-[1.5rem]">
              {doctor.fullName[lang]}
            </div>


              <p className="text-xl md:text-[1.5rem] text-foreground mb-[1.5rem] ">{doctor.position[lang]}</p>
              <Button
                  as={Link}
                  to={`/${lang}/`}
                  className="w-full md:w-[33rem] p-[1.5rem] rounded-2xl text-center  hover:bg-sky-600 duration-300 bg-black text-white mt-auto"
              >
                {t("doctors.bookAppointment", {
                  name: doctor.shortName[lang],
                })}
              </Button>
            </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="w-full">
            <div className="space-y-10">

              <div className="md:min-h-[30rem]">


                  <p className="text-xl font-bold text-foreground mb-[2.5rem]">
                    {t("doctorPage.specializations")}:
                  </p>

                <ul className="list-disc list-inside space-y-2 mb-10">
                  {doctor.specializations.map((spec: LocalizedText, index: number) => (
                      <li key={index} className="flex items-center text-foreground">
                        <SolarUnreadOutline className="mr-3 md:size-[2rem] size-[1rem] text-foreground" /> {/* Icon */}
                        <span className="text-xl">{spec[lang]}</span> {/* Text */}
                      </li>
                  ))}
                </ul>

              </div>


                <p className="text-xl font-bold text-foreground mb-[2.5rem]">
                  {t("doctorPage.education")}:
                </p>
                <ul className="list-disc list-inside mb-[2.5rem] text-foreground">
                  {doctor.education.map((edu: LocalizedText, index: number) => (
                      <li key={index} className="flex items-center text-foreground">
                        <SolarUnreadOutline className="mr-3 md:size-[2rem] size-[1rem] text-foreground" /> {/* Icon */}
                        <span className="text-xl">{edu[lang]}</span> {/* Text */}
                      </li>
                  ))}
                </ul>


            </div>
          </div>
        </div>

        {/* СЕКЦИЯ СЕРТИФИКАТОВ */}
        {doctor.certificates && doctor.certificates.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                {t("doctorPage.certificates")}:
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {doctor.certificates.map((cert: string, index: number) => (
                    <a
                        href={cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                    >
                      <img
                          src={cert}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </a>
                ))}
              </div>
            </section>
        )}
        </div>
      </div>
  );
}