import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, get } from "firebase/database";
import { db } from "../firebase.ts";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage.tsx";
import { SpecialsSlider } from "../components/SpecialsSection.tsx";

// Models
import type { Blog } from "../models/Blog.ts";
import type { Service } from "../models/Service.ts";
import type { Special } from "../models/Special.ts";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [specials, setSpecials] = useState<Special[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogsSnap, servicesSnap, specialsSnap] = await Promise.all([
          get(ref(db, "blogs")),
          get(ref(db, "services")),
          get(ref(db, "specials")),
        ]);

        if (blogsSnap.exists()) {
          const data = blogsSnap.val();
          setBlogs(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
        }
        if (servicesSnap.exists()) {
          const data = servicesSnap.val();
          setServices(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
        }
        if (specialsSnap.exists()) {
          const data = specialsSnap.val();
          setSpecials(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
        }
      } catch (err) {
        console.error("Error loading blog data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">{t("blog.loading") || "Loading..."}</div>;
  }

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return (
        <div className="py-20 text-center text-foreground px-4">
          <p className="text-2xl font-bold">{t("blog.notFound") || "Blog not found"}</p>
          <Link to={`/${lang}/blogs`} className="text-primary underline mt-4 inline-block font-semibold">
            {t("blog.backToList") || "← Back to blog"}
          </Link>
        </div>
    );
  }

  const title = blog.headerTitle?.[lang] || blog.title?.[lang];
  const subtitle = blog.subtitle?.[lang];
  const imagee = blog.mainImage;

  const relatedServices: Service[] = (blog.services?.map((id: string) => services.find((s) => s.id === id)).filter((s): s is Service => s !== undefined)) || [];
  const relatedSpecials: Special[] = (blog.specials?.map((id: string) => specials.find((s) => s.id === id)).filter((s): s is Special => s !== undefined)) || [];
  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3); // Ограничим до 3 для чистоты

  return (
      <div className="w-full flex flex-col items-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem] max-w-[1440px]">
          <Breadcrumbs blogSlug={blog.slug} />

          {/* Заголовок адаптивный */}
          <div className="py-6 md:py-12">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-black mb-4 leading-tight">
              {title}
            </h1>
            {subtitle && (
                <span className="block text-lg md:text-2xl font-medium text-gray-500 italic">
                    {subtitle}
                </span>
            )}
          </div>

          {/* Контент блога */}
          <div className="flex flex-col gap-8 w-full text-base md:text-lg leading-relaxed">
            <ContentBlockRenderer content={blog.content} />
          </div>

          {/* Релевантные услуги - Сетка адаптирована */}
          {relatedServices.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <h2 className="text-2xl md:text-4xl font-black mb-10 text-center md:text-left">
                  {t("blog.relatedServices")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedServices.map((service: Service) => (
                      <Link
                          key={service.id}
                          to={`/${lang}/services/${service.slug}`}
                          className="group relative overflow-hidden h-[12rem] rounded-[2rem] md:rounded-[10rem] shadow-sm hover:shadow-xl transition-all duration-500"
                      >
                        {service.mainImage && (
                            <img
                                src={service.mainImage}
                                alt={String(service.title?.[lang] || "")}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                          <p className="text-white text-center font-bold text-lg md:text-xl transition-transform duration-500 group-hover:scale-105">
                            {service.title?.[lang]}
                          </p>
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
                <SpecialsSlider items={relatedSpecials} />
              </div>
          )}

          {/* Другие блоги - Адаптивная сетка */}
          {otherBlogs.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16 mb-20">
                <h2 className="text-2xl md:text-4xl font-black mb-10 text-center md:text-left">
                  {t("blog.otherBlogs")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                  {otherBlogs.map((b: Blog) => (
                      <Link
                          key={b.id}
                          to={`/${lang}/blogs/${b.slug}`}
                          className="group bg-white rounded-[2rem] shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-50"
                      >
                        <div className="h-[15rem] overflow-hidden">
                          <div
                              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                              style={{ backgroundImage: `url(${b.mainImage})` }}
                          ></div>
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