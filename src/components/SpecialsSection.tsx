import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

interface SpecialsSliderProps {
    excludeSlug?: string;
}

export const SpecialsSlider: React.FC<SpecialsSliderProps> = ({ excludeSlug }) => {
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
                let specialsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                })) as Special[];

                // ФИЛЬТРАЦИЯ: убираем текущую акцию, если передан slug
                if (excludeSlug) {
                    specialsArray = specialsArray.filter(item => item.slug !== excludeSlug);
                }

                setSpecials(specialsArray);
            }
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [businessSlug, excludeSlug]); // Добавляем excludeSlug в зависимости

    // Если после фильтрации акций не осталось — не рендерим ничего
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
                        className="!w-[28rem] md:!w-[45rem] !h-auto flex"
                    >
                        <Link
                            to={`/${lang}/${businessSlug}/specials/${item.slug}`}
                            className="
                group
                bg-primary
                rounded-[2.5rem]
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
                overflow-hidden
                flex
                flex-col
                md:flex-row
                w-full
                min-h-[32rem]
                md:min-h-[20rem]
                relative
                border-none /* Убрал все бордеры */
            "
                        >
                            {/* Текст: 50% ширины */}
                            <div className="p-8 md:p-10 w-full md:w-1/2 flex flex-col justify-between relative z-10">
                                <div className="text-foreground transition-colors duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70 mb-4 block">
                        {t("specials.tag") || "Special Offer"}
                    </span>

                                    <h2 className="text-xl md:text-2xl font-[900] mb-4 leading-tight break-words">
                                        {item.title?.[lang]}
                                    </h2>

                                    <p className="text-sm md:text-base font-medium opacity-80 line-clamp-3 border-l-2 border-foreground/20 pl-4 leading-relaxed">
                                        {item.subtitle?.[lang]}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    {/* Кнопка: Текст теперь ЧЕТКО виден (инверсия фона) */}
                                    <div
                                        className="inline-flex px-8 py-3 rounded-full
                        bg-black text-white
                        dark:bg-white dark:text-black
                        font-bold text-xs uppercase tracking-widest
                        hover:bg-gray-800 dark:hover:bg-gray-200
                        transition-all duration-300 shadow-lg"
                                    >
                                        {t("specials.learnMore")}
                                    </div>
                                </div>
                            </div>

                            {/* Картинка: 50% ширины */}
                            {item.mainImage && (
                                <div className="w-full md:w-1/2 h-[15rem] md:h-auto overflow-hidden relative">
                                    <img
                                        src={item.mainImage}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Градиент для мягкого перехода */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent hidden md:block" />

                                    {/* Оверлей для темной темы */}
                                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:opacity-0 transition-opacity duration-500" />
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