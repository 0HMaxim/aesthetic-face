import {Link, useNavigate, useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Special } from "../models/Special.ts";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useFetchData} from "../hooks/useFetchData.ts";
import type {Service} from "../models/Service.ts";
import type {PriceModel} from "../models/Price.ts";
import type {Blog} from "../models/Blog.ts";
import type {Employee} from "../models/Employee.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Photo} from "../models/Photo.ts";
import {SpecialsSlider} from "../components/SpecialsSection.tsx";
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";
import {TopImage} from "../components/TopImage.tsx";
import PriceTable from "../components/PriceTable.tsx";


export function SpecialPage() {
  const { slug, businessSlug } = useParams<{ slug: string; businessSlug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const navigate = useNavigate();

  const { data, loading } = useFetchData<{
    services: Service[];
    prices: PriceModel[];
    blogs: Blog[];
    specials: Special[];
    employees: Employee[];
    faqs: FAQ[];
    photos: Photo[];
  }>([
    "services",
    "prices",
    "blogs",
    "specials",
    "employees",
    "faqs",
    "photos",
  ], businessSlug);

  const specials = data.specials ?? [];
  const special = specials.find((s) => s.slug === slug) ?? null;

  if (loading) return <div className="w-full text-center py-8 text-foreground">{t("loading")}</div>;
  if (!special) return <div className="w-full text-center py-8 text-foreground">{t("specialPage.notFound")}</div>;

  const allServices = (data.services || []);
  const allPrices = (data.prices || []);
  const allBlogs = (data.blogs || []);

  const relatedServices = allServices.filter((service) =>
      service.id && (special.serviceId || []).includes(service.id)
  );

  const priceItems = allPrices.filter((price) =>
      price.id && (special.prices || []).includes(price.id)
  );

  const relatedBlogs = allBlogs.filter((blog) =>
      blog.id && (special.blogs || []).includes(blog.id)
  );

  return (
      <div className="w-full bg-background min-h-screen">
        {special.mainImage && <TopImage source={special.mainImage} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs
              specialSlug={special.slug}
              currentTitle={special.title?.[lang] as string}
          />

          <div className="py-8 mb-[3.5rem] text-foreground">
            <h1 className="text-3xl lg:text-5xl font-[900] mb-[1.5rem] leading-tight">
              {special.title[lang]}
            </h1>
            <p className="text-lg lg:text-3xl font-medium text-gray-500 dark:text-gray-400">
              {special.subtitle[lang]}
            </p>
          </div>

          <div className="mb-[5rem] text-foreground">
            <ContentBlockRenderer content={special.content} />
          </div>

          {/* УСЛУГИ */}
          {relatedServices.length > 0 && (
              <div className="py-8">
                <h2 className="text-2xl lg:text-4xl font-black mb-8 text-foreground">
                  {t("specialPage.relatedServices") || "Related Services"}
                </h2>
                <div className="flex flex-wrap gap-6">
                  {relatedServices.map((service) => (
                      <div
                          key={service.id}
                          onClick={() => navigate(`/${lang}/${businessSlug}/services/${service.slug}`)}
                          className="group relative overflow-hidden w-full sm:w-[18rem] h-[14rem] rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-border"
                      >
                        {service.mainImage && (
                            <img
                                src={service.mainImage}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/40 transition-colors" />
                        <div className="absolute bottom-4 left-0 w-full px-4 text-center">
                          <p className="text-white font-bold text-lg drop-shadow-md line-clamp-1">
                            {service.title[lang]}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}

          {/* ЦЕНЫ */}
          {priceItems.length > 0 && (
              <div className="py-8 mt-[3rem]">
                <h2 className="text-2xl lg:text-4xl font-black mb-8 text-foreground">
                  {t("specialPage.prices") || "Prices"}
                </h2>
                <PriceTable items={priceItems} />
              </div>
          )}

          {/* ДРУГИЕ АКЦИИ (SpecialsSlider) */}
          <div className="py-12 mt-[4rem] border-t border-border">
            <h2 className="text-2xl lg:text-4xl font-black mb-10 text-foreground">
              {t("specialPage.otherSpecials") || "More Special Offers"}
            </h2>

            {/* Теперь здесь вместо старого кривого кода используется твой крутой слайдер.
               Он сам подтянет данные из базы и покажет их в красивом Flex-дизайне.
            */}
            <SpecialsSlider excludeSlug={slug} />
          </div>

          {/* СТАТЬИ */}
          {relatedBlogs.length > 0 && (
              <div className="pt-8 pb-20 mt-[3rem]">
                <h2 className="text-2xl lg:text-4xl font-black mb-10 text-foreground">
                  {t("specialPage.interestingArticles") || "Interesting Articles"}
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {relatedBlogs.map((item) => (
                      <article
                          key={item.id}
                          className="w-full sm:w-[22rem] bg-card border border-border rounded-[2.5rem] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
                      >
                        <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="relative h-[15rem] overflow-hidden group">
                          {item.mainImage && (
                              <img
                                  src={item.mainImage}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                          )}
                          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            {new Date().toLocaleDateString()}
                          </div>
                        </Link>

                        <div className="p-6 flex flex-col flex-grow">
                          <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="text-xl font-black text-foreground hover:text-primary transition-colors line-clamp-2 mb-3">
                            {item.title?.[lang] || "Без назви"}
                          </Link>

                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
                            {item.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "Опис відсутній"}
                          </p>

                          <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="mt-auto text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                            {t("specials.learnMore")} →
                          </Link>
                        </div>
                      </article>
                  ))}
                </div>
              </div>
          )}
        </div>
      </div>
  );
}