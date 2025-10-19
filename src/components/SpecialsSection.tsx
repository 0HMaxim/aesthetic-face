import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { specials } from "../data/services";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import MaterialSymbolsArrowBackIos from '~icons/material-symbols/arrow-back-ios'
import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SpecialsSlider: React.FC = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
      <div className="relative w-full max-w-[120rem] mx-auto px-[2rem]">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={3}
            loop={specials.length > 3}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              // Подключаем кнопки после инициализации
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            style={{ paddingBottom: "3rem" }}
        >
          {specials.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                    to={`/${lang}/specials/${item.slug}`}
                    className="group rounded-2xl shadow-md transition overflow-hidden w-full h-auto flex flex-col md:flex-row md:gap-[2rem] justify-between relative bg-primary mb-[4rem] hover:shadow-xl duration-500"
                >
                  <div className="p-[2rem] text-foreground w-full md:w-2/6 flex flex-col">
                    <h2 className="text-[1.8rem] font-extrabold mb-[1rem]">
                      {item.title[lang]}
                    </h2>
                    <p className="text-[1.2rem] pl-[1.5rem] font-light mb-[1.5rem]">
                      {item.subtitle[lang]}
                    </p>

                    <Button
                        as={Link}
                        to={`/${lang}/specials/${item.slug}`}
                        className="w-full md:w-auto px-[1.5rem] py-[0.75rem] rounded-[3.5rem] flex items-center justify-center text-white font-semibold bg-black hover:bg-[var(--primary)] transition-colors duration-500 mt-auto"
                    >
                      {t("specials.learnMore")}
                    </Button>
                  </div>

                  {item.mainImage && (
                      <div className="overflow-hidden w-full md:w-4/6 block p-0 mt-4 md:mt-0">
                        <img
                            src={item.mainImage}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                  )}
                </Link>
              </SwiperSlide>
          ))}
        </Swiper>
        {/* Кнопки навигации */}
        <Link
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-[-2rem] z-50 text-foreground text-3xl"
        >
          <MaterialSymbolsArrowBackIos />
        </Link>

        <Link
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-[-2rem] z-50 text-foreground text-3xl"
        >
          <MaterialSymbolsArrowForwardIos/>
        </Link>
      </div>
  );
};
