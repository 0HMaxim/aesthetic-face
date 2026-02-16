import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import type { Blog } from "../models/Blog";

import MaterialSymbolsArrowBackIos from "~icons/material-symbols/arrow-back-ios";
import MaterialSymbolsArrowForwardIos from "~icons/material-symbols/arrow-forward-ios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {BlogItem} from "./BlogItem.tsx";

interface BlogSliderProps {
    blogs: Blog[];
    excludeSlug?: string;
}

export const BlogSlider: React.FC<BlogSliderProps> = ({ blogs, excludeSlug }) => {
    const { i18n } = useTranslation();
    const { businessSlug } = useParams<{ businessSlug: string }>();
    const lang = i18n.language as "uk" | "ru" | "en" | "de";

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    // Фильтруем текущую статью и ограничиваем количество (например, 10 последних)
    const filteredBlogs = blogs
        .filter((b) => (excludeSlug ? b.slug !== excludeSlug : true))
        .slice(0, 10);

    if (filteredBlogs.length === 0) return null;

    return (
        <div className="relative w-full mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={false}
                loop={filteredBlogs.length > 3}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => {
                    const navigation = swiper.params.navigation as NavigationOptions;
                    if (navigation) {
                        navigation.prevEl = prevRef.current;
                        navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
                className="!pb-14"
            >
                {filteredBlogs.map((item) => (
                    <SwiperSlide key={item.id} className="!w-full sm:!w-[22rem] flex">
                        <BlogItem blog={item} lang={lang} businessSlug={businessSlug || ""} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопки управления (только на десктопе) */}
            <button
                ref={prevRef}
                className="absolute top-[40%] -left-12 z-10 p-2 text-foreground/50 hover:text-primary transition-colors hidden xl:block"
            >
                <MaterialSymbolsArrowBackIos className="text-3xl" />
            </button>
            <button
                ref={nextRef}
                className="absolute top-[40%] -right-12 z-10 p-2 text-foreground/50 hover:text-primary transition-colors hidden xl:block"
            >
                <MaterialSymbolsArrowForwardIos className="text-3xl" />
            </button>
        </div>
    );
};