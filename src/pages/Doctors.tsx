import { useParams , Link } from "react-router-dom";
import { doctors } from "../data/services"; // твой массив с данными
import { useTranslation } from "react-i18next";
import type { Doctor } from "../models/Doctor.ts";
import { Button } from "@heroui/react";

export default function Doctors() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const minExperience = 7; // динамически укажешь сам

  return (
      <div className="w-full px-4 lg:px-[10rem] py-8">
        {/* Заголовок */}
        <div className="py-8">
          <h2 className="text-3xl lg:text-5xl font-[800] mb-4">
            {t("doctors.title")}
          </h2>
          <span className="block text-lg lg:text-4xl font-semibold mb-4">
          {t("doctors.subtitle", { years: minExperience })}
        </span>
          <p className="text-base lg:text-2xl font-normal text-foreground">
            {t("doctors.experience")}
          </p>
        </div>

        {/* Грид с карточками */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center">
          {doctors.map((doctor: Doctor) => (
              <div
                  key={doctor.id}
                  className="group rounded-2xl w-full transition-shadow flex flex-col"
              >
                {/* Фото с увеличенной высотой */}
                <Button as={Link}
                    to={`/${lang}/doctors/${doctor.slug}`}
                    className="overflow-hidden rounded-xl w-full h-[28rem] block mb-[1.5rem]"
                >
                  <img
                      src={doctor.photo || "/images/placeholder-doctor.jpg"}
                      alt={doctor.fullName[lang as keyof typeof doctor.fullName]}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300  group-hover:scale-105"
                  />
                </Button>

                {/* Контент */}
                <div className="p-6 flex flex-col flex-1">


                  <div className="text-[1.75rem] font-[700] mb-[1.5rem]">
                    {doctor.fullName[lang]}
                  </div>

                  <p className="text-[1.25rem] md:text-[1.5rem] text-foreground mb-[1.5rem] ">{doctor.position[lang]}</p>
                  <Button
                      as={Link}
                      to={`/${lang}/doctors/${doctor.slug}`}
                      className="w-full  p-[1rem] rounded-2xl text-center group-hover:bg-sky-600 duration-300 bg-black text-white mt-auto"
                  >
                    {t("doctors.bookAppointment", {
                      name: doctor.shortName[lang],
                    })}
                  </Button>


                </div>
              </div>
          ))}
        </div>


      </div>
  );
}
