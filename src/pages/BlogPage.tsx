import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage";
import { SpecialsSlider } from "../components/SpecialsSection";
import { useFetchData } from "../hooks/useFetchData";

import type { Blog } from "../models/Blog";
import type { Service } from "../models/Service";
import type { Special } from "../models/Special";

export default function BlogPage() {
    const { slug, businessSlug } = useParams<{ slug: string; businessSlug: string }>();
    const { i18n, t } = useTranslation();
    const lang = i18n.language as "uk" | "ru" | "en" | "de";

    // Передаём slug бизнеса в хук
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
                <p className="text-2xl font-bold mt-10">{t("blog.notFound")}</p>
                <Link to={`/${lang}/blogs`} className="text-primary underline mt-4 inline-block font-semibold">
                    {t("blog.backToList")}
                </Link>
            </div>
        );
    }

    const title = blog.headerTitle?.[lang] || blog.title?.[lang];
    const subtitle = blog.subtitle?.[lang];
    const relatedServices = blog.services?.map(id => services.find(s => s.id === id)).filter(Boolean) as Service[] || [];
    const relatedSpecials = blog.specials?.map(id => specials.find(sp => sp.id === id)).filter(Boolean) as Special[] || [];
    const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

    return (
        <div className="w-full flex flex-col items-center">

            <TopImage source={blog.mainImage} />

            <div className="w-full px-4 md:px-[5rem]">
                <Breadcrumbs
                    blogSlug={blog.slug}
                    currentTitle={title}
                />

                <div className="py-6 md:py-12">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">{title}</h1>
                    {subtitle && <span className="block text-lg md:text-2xl text-gray-500 italic">{subtitle}</span>}
                </div>

                {blog.content && (
                    <div className="w-full max-w-full px-0">
                        <ContentBlockRenderer content={blog.content} />
                    </div>
                )}

                {relatedServices.length > 0 && (
                    <div className="mt-20 border-t pt-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-10">{t("blog.relatedServices")}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedServices.map(service => (
                                <Link
                                    key={service.id}
                                    to={`/${lang}/${businessSlug}/services/${service.slug}`}
                                    className="group relative h-[12rem] rounded-[2rem] overflow-hidden shadow-md"
                                >
                                    <img
                                        src={service.mainImage}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
                                        <p className="text-white font-bold text-center">{service.title?.[lang]}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {relatedSpecials.length > 0 && (
                    <div className="mt-20 border-t border-gray-100 pt-16">
                        <h2 className="text-2xl md:text-4xl font-black mb-10 text-center md:text-left">
                            {t("blog.relatedSpecials")}
                        </h2>
                        <SpecialsSlider />
                    </div>
                )}

                {otherBlogs.length > 0 && (
                    <div className="mt-20 border-t border-gray-100 pt-16 mb-20">
                        <h2 className="text-2xl md:text-4xl font-black mb-10 text-center md:text-left">
                            {t("blog.otherBlogs")}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {otherBlogs.map((b: Blog) => (
                                <Link
                                    key={b.id}
                                    to={`/${lang}/${businessSlug}/blogs/${b.slug}`}
                                    className="group bg-white rounded-[2rem] shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-50"
                                >
                                    <div className="h-[15rem] overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${b.mainImage})` }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                            {b.title?.[lang]}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                                            {b.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "No description"}
                                        </p>
                                        <span className="text-primary font-bold text-sm uppercase tracking-widest">
                      {t("blog.readMore") || "Read more"} →
                    </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
