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

  const title = blog.title?.[lang];
  const subtitle = blog.subtitle?.[lang];
  const imagee = blog.mainImage;

  // --- выбираем связанные данные ---
  const relatedServices =
      blog.serviceId?.map((id) => services.find((s) => s.id === id)).filter(Boolean) || [];

  const relatedSubservices =
      blog.subservices?.map((id) => subservices.find((s) => s.id === id)).filter(Boolean) || [];

  const relatedSpecials =
      blog.specials?.map((id) => specials.find((s) => s.id === id)).filter(Boolean) || [];

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{title}</h2>
            {subtitle && (
                <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              {subtitle}
            </span>
            )}
          </div>

          <div className="flex flex-wrap gap-8 justify-center w-full">
            <div className="prose prose-lg max-w-none text-foreground">
              <ContentBlockRenderer content={blog.content} />
            </div>
          </div>

          {/* --- Блок связанных категорий и акций --- */}
          <div className="mt-16 border-t pt-10 space-y-10">
            {relatedServices.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("blog.relatedServices") || "Связанные услуги"}</h3>
                  <div className="flex flex-wrap gap-4">
                    {relatedServices.map((s) => (
                        <Link
                            key={s!.id}
                            to={`/${lang}/services/${s!.slug}`}
                            className="border rounded-lg p-4 hover:bg-muted transition"
                        >
                          <span className="font-semibold">{s!.title[lang]}</span>
                        </Link>
                    ))}
                  </div>
                </div>
            )}

            {relatedSubservices.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("blog.relatedSubservices") || "Подуслуги"}</h3>
                  <div className="flex flex-wrap gap-4">
                    {relatedSubservices.map((s) => (
                        <Link
                            key={s!.id}
                            to={`/${lang}/services/${s!.slug}`}
                            className="border rounded-lg p-4 hover:bg-muted transition"
                        >
                          <span className="font-semibold">{s!.title[lang]}</span>
                        </Link>
                    ))}
                  </div>
                </div>
            )}

            {relatedSpecials.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t("blog.relatedSpecials") || "Акции"}</h3>
                  <div className="flex flex-wrap gap-4">
                    {relatedSpecials.map((s) => (
                        <Link
                            key={s!.id}
                            to={`/${lang}/specials/${s!.slug}`}
                            className="border rounded-lg p-4 hover:bg-muted transition"
                        >
                          <span className="font-semibold">{s!.title[lang]}</span>
                        </Link>
                    ))}
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}
