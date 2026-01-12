import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import type { Special } from "../models/Special.ts";

import { ref, get } from "firebase/database";
import { db } from "../firebase";

import MaterialSymbolsArrowBackIos from "~icons/material-symbols/arrow-back-ios";
import MaterialSymbolsArrowForwardIos from "~icons/material-symbols/arrow-forward-ios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SpecialsSlider: React.FC = () => {
    const { i18n, t } = useTranslation();
    const { businessSlug } = useParams<{ businessSlug: string }>();
    const lang = i18n.language as "uk" | "ru" | "en" | "de";

    const [specials, setSpecials] = useState<Special[]>([]);
    const [loading, setLoading] = useState(true);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!businessSlug) return;
        const specialsRef = ref(db, `businesses/${businessSlug}/specials`);
        get(specialsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const specialsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                })) as Special[];
                setSpecials(specialsArray);
            }
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [businessSlug]);

    if (loading || specials.length === 0) return null;

    return (
        /* Максимальная ширина контейнера фиксирована на 120rem */
        <div className="relative w-full max-w-[120rem] mx-auto px-4 sm:px-8">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView="auto"
                spaceBetween={70}
                loop={specials.length > 3}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    const navigation = swiper.params.navigation as NavigationOptions;
                    if (navigation) {
                        navigation.prevEl = prevRef.current;
                        navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                style={{ paddingBottom: "3rem" }}
            >

            {specials.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className="!w-[38rem]
                            !flex-shrink-0
                            flex">
                        <Link
                            to={`/${lang}/${businessSlug}/specials/${item.slug}`}
                            className="
                            group
                            bg-primary
                            rounded-2xl
                            shadow-md
                            hover:shadow-xl
                            transition
                            duration-500
                            overflow-hidden
                            flex
                            flex-col
                            md:flex-row
                            justify-between
                            w-full

                            min-w-[40rem]
                            min-h-[28px]

                            md:min-h-[280px]
                          "
                        >

                            {/* Текст: занимает 2/6 (33%) ширины на больших экранах */}
                            <div className="p-[2rem] text-foreground w-full md:w-2/6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[1.6rem] xl:text-[1.8rem] font-extrabold mb-[1rem] leading-tight">
                                        {item.title?.[lang]}
                                    </h2>
                                    <p className="text-[1.1rem] xl:text-[1.2rem] font-light mb-[1.5rem] border-l-2 border-black/10 pl-4">
                                        {item.subtitle?.[lang]}
                                    </p>
                                </div>

                                <Button
                                    as="div"
                                    className="w-full md:w-auto px-[1.5rem] py-[0.6rem] rounded-[3.5rem] flex items-center justify-center text-white font-semibold bg-black hover:bg-gray-800 transition-colors duration-500"
                                >
                                    {t("specials.learnMore")}
                                </Button>
                            </div>

                            {/* Картинка: занимает 4/6 (66%) ширины */}
                            {item.mainImage && (
                                <div className="w-full md:w-4/6 h-[12rem] md:h-full overflow-hidden">
                                    <img
                                        src={item.mainImage}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                            )}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопки навигации */}
            <button
                ref={prevRef}
                className="absolute top-[45%] -translate-y-1/2 left-[-2.5rem] z-50 text-foreground text-3xl bg-transparent border-none cursor-pointer hidden xl:block hover:scale-110 transition-transform"
            >
                <MaterialSymbolsArrowBackIos />
            </button>

            <button
                ref={nextRef}
                className="absolute top-[45%] -translate-y-1/2 right-[-2.5rem] z-50 text-foreground text-3xl bg-transparent border-none cursor-pointer hidden xl:block hover:scale-110 transition-transform"
            >
                <MaterialSymbolsArrowForwardIos />
            </button>
        </div>
    );
};