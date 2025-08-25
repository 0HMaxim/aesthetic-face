import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { doctors } from "../data/services"; // твой массив с данными
import type { Doctor } from "../models/Doctor.ts";
import { Button } from "@heroui/react";

export default function Doctors() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
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
                  className="group rounded-2xl w-full max-w-sm shadow hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Фото с увеличенной высотой */}
                <div className="overflow-hidden rounded-xl w-full h-[28rem]">
                  <img
                      src={doctor.photo || "/images/placeholder-doctor.jpg"}
                      alt={doctor.fullName[lang as keyof typeof doctor.fullName]}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Контент */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="name fw500 text-xl font-medium mb-2">
                    {doctor.fullName[lang as keyof typeof doctor.fullName]}
                  </p>

                  <p className="position fw500 text-foreground mb-2">
                    {doctor.position[lang as keyof typeof doctor.position]}
                  </p>

                  <ul className="content_seo list-disc list-inside text-foreground mb-4 flex-1">
                    {doctor.specializations.map((spec, i) => (
                        <li key={i}>{spec[lang as keyof typeof spec]}</li>
                    ))}
                  </ul>

                  <Button className="w-full p-3 bg-black text-white mt-auto">
                    {t("doctors.bookAppointment", {
                      name: doctor.shortName[lang as keyof typeof doctor.shortName]
                    })}
                  </Button>
                </div>
              </div>
          ))}
        </div>


      </div>
  );
}
