import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, get } from "firebase/database";
import { db } from "../firebase.ts";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage.tsx";
import { SpecialsSlider } from "../components/SpecialsSection.tsx";
import type { Blog } from "../models/Blog.ts";
import { services, subservices, specials } from "../data/services.ts";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsRef = ref(db, "blogs");
    get(blogsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const blogsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setBlogs(blogsArray);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center py-10">{t("blog.loading") || "Загрузка..."}</p>;
  }

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
        <div className="py-10 text-center text-foreground">
          <p>{t("blog.notFound") || "Блог не найден"}</p>
          <Link to={`/${lang}/blogs`} className="text-primary underline mt-2 inline-block">
            {t("blog.backToList") || "← Назад к блогу"}
          </Link>
        </div>
    );
  }

  const title = blog.headerTitle?.[lang] || blog.title?.[lang];
  const subtitle = blog.subtitle?.[lang];
  const imagee = blog.mainImage;

  const relatedServices =
      (blog.serviceId
      ?.map((id) => services.find((s) => s.id === id))
      .filter((s): s is NonNullable<typeof s> => s !== undefined)) || [];


  const relatedSubservices =
      blog.subservicesId?.map((id) => subservices.find((s) => s.id === id)).filter(Boolean) || [];

  const relatedSpecials =
      (blog.specials
      ?.map((id) => specials.find((s) => s.id === id))
      .filter((s): s is NonNullable<typeof s> => s !== undefined)) || [];


  const otherBlogs = blogs.filter((b) => b.slug !== slug);

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}
        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs blogSlug={blog.slug} />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{title}</h2>
            {subtitle && <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">{subtitle}</span>}
          </div>

          <div className="flex flex-col wrap gap-8 w-full">
            <ContentBlockRenderer content={blog.content} />
          </div>

          {/* --- Блок связанных категорий и акций --- */}
          {relatedServices.length > 0 && (
              <div className="mt-16 border-t pt-10">
                <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">{t("blog.relatedServices")}</h2>
                <div className="flex flex-wrap justify-center gap-x-[1rem] gap-y-[1rem] my-10">
                  {relatedServices.map((service) => (
                      <Link
                          key={service!.id}
                          to={`/${lang}/services/${service!.slug}`}
                          className="group relative overflow-hidden max-w-[47%] w-1/2 md:w-[15rem] lg:w-[18rem] h-[9rem] md:h-[12rem] rounded-[10rem] shadow-md hover:bg-[var(--primary)] hover:shadow-xl transition duration-500 flex-shrink-0"
                      >
                        {service!.mainImage && (
                            <img
                                src={service!.mainImage}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        )}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                          <p className="text-[0.9rem] md:text-[1rem] font-normal">{service!.title[lang]}</p>
                        </div>
                      </Link>
                  ))}
                </div>
              </div>
          )}

          {relatedSubservices.length > 0 && (
                <div className="mt-16 border-t pt-10">
                  <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">
                    {t("blog.relatedSubservices")}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-x-[1rem] gap-y-[1rem] my-10">
                    {relatedSubservices
                    .filter((sub): sub is NonNullable<typeof sub> => sub !== undefined)
                    .map((sub) => (
                        <Link
                            key={sub.id}
                            to={`/${lang}/services/${sub.slug}`}
                            className="group relative overflow-hidden max-w-[47%] w-1/2 md:w-[15rem] lg:w-[18rem] h-[9rem] md:h-[12rem] rounded-[10rem] shadow-md hover:bg-[var(--primary)] hover:shadow-xl transition duration-500 flex-shrink-0"
                        >
                          {sub.mainImage && (
                              <img
                                  src={sub.mainImage}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                            <p className="text-[0.9rem] md:text-[1rem] font-normal">
                              {sub.title[lang]}
                            </p>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
            )}

          {relatedSpecials.length > 0 && (
              <div className="mt-16 border-t pt-10">
                <h2 className="text-3xl lg:text-4xl font-[800] mb-[2.5rem]">{t("blog.relatedSpecials")}</h2>
                <SpecialsSlider items={relatedSpecials} />
              </div>
          )}

          {otherBlogs.length > 0 && (
              <div className="mt-16 border-t pt-10">
                <h2 className="text-3xl lg:text-4xl font-[800] mb-[2.5rem]">{t("blog.otherBlogs")}</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                  {otherBlogs.map((b) => (
                      <Link key={b.id} to={`/${lang}/blogs/${b.slug}`} className="post_item w-[22rem] bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500">
                  <span
                      className="image bg_img block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${b.mainImage})` }}
                  ></span>
                        <p className="date absolute bottom-[1rem] left-[1rem] flex gap-1 text-white bg-black/50 px-3 py-1 rounded-md">
                          <b>03</b>
                          <span>Січень</span>
                          <span>2024</span>
                        </p>
                        <div className="px-4 mt-4">
                          <p className="name fw600 text-[1.3rem] font-semibold hover:text-primary transition">{b.title[lang]}</p>
                          <p className="excerpt text-[1rem] text-gray-600 mt-2 line-clamp-3">
                            {b.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "Опис відсутній"}
                          </p>
                          <p className="more fw600 block text-[1rem] font-semibold text-primary mt-4 mb-4 hover:underline">
                            {t("specials.learnMore")}
                          </p>
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
