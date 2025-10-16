import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blogs, services, subservices, specials } from "../data/services"; // импортируй, где хранятся твои данные
import { ContentBlockRenderer } from "../components/ContentBlockRenderer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage.tsx";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
        <div className="py-10 text-center text-foreground">
          <p>{t("blog.notFound") || "Блог не найден"}</p>
          <Link to={`/${lang}/blog`} className="text-primary underline mt-2 inline-block">
            {t("blog.backToList") || "← Назад к блогу"}
          </Link>
        </div>
    );
  }


  const title = blog.headerTitle?.[lang] || blog.title?.[lang];

  const subtitle = blog.subtitle?.[lang];
  const imagee = blog.mainImage;


  console.log("=== Services ===");
  services.forEach((service) => {
    console.log(`${service.id} => ${service.title[lang]}`);
    if (service.subservices && service.subservices.length > 0) {
      console.log("  Subservices:");
      service.subservices.forEach((subId) => {
        const sub = subservices.find((s) => s.id === subId);
        if (sub) {
          console.log(`    ${sub.id} => ${sub.title[lang]}`);
        }
      });
    }
  });




  // --- выбираем связанные данные ---
  const relatedServices =
      blog.serviceId?.map((id) => services.find((s) => s.id === id)).filter(Boolean) || [];

  const relatedSubservices =
      blog.subservices?.map((id) => subservices.find((s) => s.id === id)).filter(Boolean) || [];

  const relatedSpecials =
      blog.specials?.map((id) => specials.find((s) => s.id === id)).filter(Boolean) || [];

  const otherBlogs = blogs.filter(b => b.slug !== slug);


  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs blogSlug={blog.slug} />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{title}</h2>
            {subtitle && (
                <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              {subtitle}
            </span>
            )}
          </div>

          <div className="flex flex-col  wrap gap-8  w-full">
              <ContentBlockRenderer content={blog.content} />
          </div>

          {/* --- Блок связанных категорий и акций --- */}
          <div className="">
            {relatedServices.length > 0 && (
                <div className="mt-16 border-t pt-10 space-y-10">
                  <h3 className="text-2xl font-bold mb-6">
                    {t("blog.relatedServices") || "Связанные услуги"}
                  </h3>
                  <div className="flex flex-wrap gap-6 ">
                    {relatedServices.map((service) => (
                        <Link
                            key={service!.id}
                            to={`/${lang}/services/${service!.slug}`}
                            className="group rounded-[10rem] shadow-md overflow-hidden
                      lg:max-w-[15rem]
                      md:max-h-[12rem]
                      md:max-w-[25rem]


                      h-[20rem]
                      max-w-[47%]
                      max-h-[14rem]

                      w-[12rem]

                      hover:bg-[var(--primary)] transition duration-500 hover:shadow-xl relative"
                        >
                          {service!.mainImage && (
                              <img
                                  src={service!.mainImage}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-[1.5rem] w-full bg-black/40 text-white  text-center">
                            <p className="text-[0.9rem] md:text-[1rem] font-medium">
                              {service!.title[lang]}
                            </p>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
            )}

            {relatedSubservices.length > 0 && (
                <div className="mt-16 border-t pt-10">
                <h3 className="text-2xl font-bold mb-6">
                    {t("blog.relatedSubservices") || "Подуслуги"}
                  </h3>
                  <div className="flex flex-wrap gap-6 ">
                    {relatedSubservices.map((sub) => (
                        <Link
                            key={sub.id}
                            to={`/${lang}/services/${sub.slug}`}
                            className="
                                group relative overflow-hidden
                                max-w-[47%]
                                w-1/2 sm:w-1/2 md:w-[8rem] lg:w-[9rem]
                                h-[9rem] md:h-[7rem]
                                rounded-[10rem] shadow-md
                                hover:bg-[var(--primary)] hover:shadow-xl
                                transition duration-500
                                flex-shrink-0
                              "
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
                  <h3 className="text-2xl font-bold mb-6">
                    {t("blog.relatedSpecials") || "Акции"}
                  </h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    {relatedSpecials.map((special) => (
                        <Link
                            key={special!.id}
                            to={`/${lang}/specials/${special!.slug}`}
                            className="
              group relative overflow-hidden
              max-w-[47%]
              w-1/2 sm:w-1/2 md:w-[15rem] lg:w-[18rem]
              h-[9rem] md:h-[12rem]
              rounded-[2rem] shadow-md
              hover:shadow-xl hover:scale-[1.02]
              transition duration-500 flex-shrink-0
            "
                        >
                          {special!.mainImage && (
                              <img
                                  src={special!.mainImage}
                                  alt={special!.title[lang]}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/40 text-white p-4 text-center">
                            <p className="text-[0.9rem] md:text-[1rem] font-medium">
                              {special!.title[lang]}
                            </p>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
            )}
          </div>



          {otherBlogs.length > 0 && (
              <div className="mt-16 border-t pt-10">
                <h3 className="text-2xl font-bold mb-6">
                  {t("blog.otherBlogs") || "Другие блоги"}
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {otherBlogs.map((b) => (
                      <div
                          key={b.id}
                          className="post_item w-[22rem] bg-primary  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
                      >
                        {/* Изображение с датой */}
                        <Link
                            to={`/${lang}/blogs/${b.slug}`}
                            className="image_block relative block overflow-hidden group"
                        >
                <span
                    className="image bg_img block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${b.mainImage})`,
                    }}
                ></span>

                          {/* Дата публикации (пока можно заглушку) */}
                          <p className="date absolute bottom-[1rem] left-[1rem] flex gap-1 text-white bg-black/50 px-3 py-1 rounded-md">
                            <b>03</b>
                            <span>Січень</span>
                            <span>2024</span>
                          </p>
                        </Link>

                        {/* Название */}
                        <Link
                            to={`/${lang}/blogs/${b.slug}`}
                            className="name fw600 block text-[1.3rem] font-semibold mt-4 px-4 hover:text-primary transition"
                        >
                          {b.title[lang]}
                        </Link>

                        {/* Описание / excerpt */}
                        {/* Описание / excerpt */}
                        <p className="excerpt text-[1rem] text-gray-600 mt-2 px-4 line-clamp-3">
                          {b.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "Опис відсутній"}
                        </p>


                        {/* Кнопка "Детально" */}
                        <Link
                            to={`/${lang}/blogs/${b.slug}`}
                            className="more fw600 before block text-[1rem] font-semibold text-primary mt-4 mb-4 px-4 hover:underline"
                        >
                          {t("specials.learnMore")}
                        </Link>
                      </div>
                  ))}
                </div>
              </div>
          )}

        </div>
      </div>
  );
}
