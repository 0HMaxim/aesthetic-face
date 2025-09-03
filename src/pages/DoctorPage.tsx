import { doctors } from "../data/services";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { LocalizedText } from "../models/LocalizedText";
import {Button} from "@heroui/react";
import SolarUnreadOutline from '~icons/solar/unread-outline'
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";

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
            <TopImage source={imagee}/>
        )}

        <div className="w-full px-4 md:px-[10rem]">

          <Breadcrumbs />

        <h1 className="text-3xl md:text-5xl mb-[2.5rem] font-[700] md:text-center text-foreground">
          {doctor.fullName[lang]}
        </h1>


        <div className="mt-10 pb-20 flex flex-col md:flex-row gap-[5.5rem] rounded-[10rem] shadow-md  transition overflow-hidden   duration-500 p-[1.5rem]
                    hover:shadow-xl">
          {/* ЛЕВАЯ КОЛОНКА */}

            <div className="flex flex-col items-start md:w-[40rem] w-full ">
              {doctor.photo && (
                  <img
                      src={doctor.photo}
                      className="w-full object-cover rounded-xl shadow-lg  md:h-[43rem] mb-[1.5rem]"
                  />
              )}

            <div className="text-[1.75rem] font-[700] mb-[1.5rem]">
              {doctor.fullName[lang]}
            </div>


              <p className="text-xl md:text-[1.5rem] pl-[1.5rem] text-foreground mb-[3.5rem] ">{doctor.position[lang]}</p>


              <Button
                  as={Link}
                  to={`/${lang}/doctors/${doctor.slug}`}
                  className=" md:w-fit py-[1.25rem]  px-[3.5rem] rounded-[2.5rem]
                          flex items-center justify-center
                          text-white
                          text-[1.25rem]
                          font-semibold
                          bg-black
                          object-cover
                          hover:bg-[var(--primary)] duration-500  w-fit
                         "
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