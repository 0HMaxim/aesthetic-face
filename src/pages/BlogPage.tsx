import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage";
import { SpecialsSlider } from "../components/SpecialsSection";
import { useFetchData } from "../hooks/useFetchData";
import { BlogSlider } from "../components/BlogSection.tsx"; // Импорт твоего слайдера

import type { Blog } from "../models/Blog";
import type { Service } from "../models/Service";
import type { Special } from "../models/Special";

export default function BlogPage() {
    const { slug, businessSlug } = useParams<{ slug: string; businessSlug: string }>();
    const { i18n, t } = useTranslation();
    const lang = i18n.language as "uk" | "ru" | "en" | "de";

    const { data, loading } = useFetchData(["blogs", "services", "specials"], businessSlug);

    if (loading) {
        return (
            <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">
                {t("blog.loading")}
            </div>
        );
    }

    const blogs = (data.blogs as Blog[]) || [];
    const services = (data.services as Service[]) || [];
    const specials = (data.specials as Special[]) || [];

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="py-20 text-center px-4">
                <Breadcrumbs />
                <p className="text-2xl font-bold mt-10 text-foreground">{t("blog.notFound")}</p>
                <Link to={`/${lang}/${businessSlug}/blogs`} className="text-primary underline mt-4 inline-block font-semibold">
                    {t("blog.backToList")}
                </Link>
            </div>
        );
    }

    const title = blog.headerTitle?.[lang] || blog.title?.[lang];
    const subtitle = blog.subtitle?.[lang];
    const relatedServices = blog.services?.map(id => services.find(s => s.id === id)).filter(Boolean) as Service[] || [];

    return (
        <div className="w-full flex flex-col items-center bg-background text-foreground transition-colors duration-500">
            <TopImage source={blog.mainImage} />

            <div className="w-full px-4 md:px-[5rem]">
                <Breadcrumbs
                    blogSlug={blog.slug}
                    currentTitle={title}
                />

                <div className="py-6 md:py-12">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-[900] mb-4 leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Основной контент статьи */}
                {blog.content && (
                    <div className="w-full max-w-full px-0 mb-20">
                        <ContentBlockRenderer content={blog.content} />
                    </div>
                )}

                {/* Связанные услуги */}
                {relatedServices.length > 0 && (
                    <div className="mt-20 border-t border-border pt-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-10">
                            {t("blog.relatedServices")}
                        </h2>
                        <div className="flex flex-wrap gap-6">
                            {relatedServices.map(service => (
                                <Link
                                    key={service.id}
                                    to={`/${lang}/${businessSlug}/services/${service.slug}`}
                                    className="group relative w-full sm:w-[15rem] h-[12rem] rounded-[2.5rem] overflow-hidden shadow-sm border border-border"
                                >
                                    <img
                                        src={service.mainImage}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/60 transition-colors flex items-center justify-center p-4">
                                        <p className="text-white font-bold text-center leading-tight">
                                            {service.title?.[lang]}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Связанные акции (Слайдер акций) */}
                {specials.length > 0 && (
                    <div className="mt-20 border-t border-border pt-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-10">
                            {t("blog.relatedSpecials")}
                        </h2>
                        <SpecialsSlider />
                    </div>
                )}

                {/* Другие записи блога (Твой новый Слайдер блогов) */}
                {blogs.length > 1 && (
                    <div className="mt-20 border-t border-border pt-16 mb-20">
                        <h2 className="text-2xl md:text-4xl font-black mb-10">
                            {t("blog.otherBlogs") || "Recommended Articles"}
                        </h2>
                        <BlogSlider blogs={blogs} excludeSlug={slug} />
                    </div>
                )}
            </div>
        </div>
    );
}