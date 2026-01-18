import { useTranslation } from 'react-i18next';
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer.tsx";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import PriceTable from "../components/PriceTable.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";
import type { Special } from "../models/Special.ts";
import type { Blog } from "../models/Blog.ts";
import type { Service } from "../models/Service.ts";
import type { PriceModel } from "../models/Price.ts";
import type {Photo} from "../models/Photo.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Employee} from "../models/Employee.ts";

export function SpecialPage() {
  const {slug, businessSlug} = useParams<{ slug: string; businessSlug: string }>();
  const {i18n, t} = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const navigate = useNavigate();


  const {data, loading} = useFetchData<{
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


  if (loading) return <div className="w-full text-center py-8">{t("loading")}</div>;
  if (!special) return <div className="w-full text-center py-8">{t("specialPage.notFound")}</div>;


  const allServices = (data.services || []);
  const allPrices = (data.prices || []);
  const allBlogs = (data.blogs || []);
  const allSpecials = (data.specials || []);


  const serviceIds = special.serviceId || [];
  const relatedServices = allServices.filter((service) =>
      service.id && serviceIds.includes(service.id)
  );

  const priceIds = special.prices || [];
  const priceItems = allPrices.filter((price) =>
      price.id && priceIds.includes(price.id)
  );

  const blogIds = special.blogs || [];
  const relatedBlogs = allBlogs.filter((blog) =>
      blog.id && blogIds.includes(blog.id)
  );

  const imagee = special.mainImage;
  const otherSpecials = allSpecials.filter((item) => item.slug !== special.slug);

  return (
      <div className="w-full items-center justify-center ">
        {imagee && <TopImage source={imagee}/>}

        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs
              specialSlug={special.slug}
              currentTitle={special.title?.[lang] as string}
          />
          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{special.title[lang]}</h2>
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem] duration-500">
            {special.subtitle[lang]}
          </span>
            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {special.subtitle[lang]}
            </p>
          </div>

          <div className="mb-[3.5rem]">
            <ContentBlockRenderer content={special.content}/>
          </div>


          {relatedServices.length > 0 && (
              <div className="py-8">
                <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">{t("specialPage.relatedServices") || "Related Services"}</h2>
                <div className="flex flex-wrap gap-4">
                  {relatedServices.map((service) => (
                      <div
                          key={service.id}
                          // Переход на страницу услуги
                          onClick={() => navigate(`/${lang}/services/${service.slug}`)}
                          className="group relative overflow-hidden w-[15rem] h-[12rem] rounded-[10rem] shadow-md hover:bg-[var(--primary)] hover:shadow-xl transition duration-500 cursor-pointer"
                      >
                        {service.mainImage && (
                            <img
                                src={service.mainImage}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        )}
                        <div
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                          <p className="text-[1rem] font-normal">{service.title[lang]}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}


          {priceItems.length > 0 && (
              <div className="py-8 mt-[3rem]">
                <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">{t("specialPage.prices") || "Prices"}</h2>
                <PriceTable items={priceItems}/>
              </div>
          )}


          <div className="">

            <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">{t("specialPage.otherSpecials") || "Related Services"}</h2>


            <div className="flex flex-wrap justify-center items-center gap-6 pt-[2.5rem]">

              {otherSpecials.map((item) => (
                  <Link
                      key={item.id}
                      // ДОБАВЛЕНО: businessSlug в путь
                      to={`/${lang}/${businessSlug}/specials/${item.slug}`}
                      className="
                          group rounded-2xl shadow-md transition overflow-hidden
                          w-full sm:w-[32rem] md:w-[45rem] h-auto
                          flex flex-col md:flex-row md:gap-[2rem]
                          justify-between relative
                          bg-primary
                          mb-[6rem]
                          hover:shadow-xl
                          duration-500"
                  >
                    {/* Текст */}
                    <div className="p-[2rem] text-foreground w-full md:w-2/6 flex flex-col">
                      <h2 className="text-[1.8rem] font-extrabold mb-[1rem]">
                        {item.title?.[lang] || item.title?.en}
                      </h2>
                      <p className="text-[1.2rem] pl-[1.5rem] font-light mb-[1.5rem]">
                        {item.subtitle?.[lang] || item.subtitle?.en}
                      </p>

                      {/* ИСПРАВЛЕНО: Заменили Button as={Link} на обычный div */}
                      <div
                          className="
                          w-full md:w-auto px-[1.5rem] py-[0.75rem] rounded-[3.5rem]
                          flex items-center justify-center
                          text-white font-semibold
                          bg-black
                          group-hover:bg-white group-hover:text-black
                          transition-all duration-500
                          mt-auto"
                      >
                        {t("specials.learnMore")}
                      </div>
                    </div>

                    {/* Картинка */}
                    {item.mainImage && (
                        /* ИСПРАВЛЕНО: Убрали Button, оставили просто контейнер */
                        <div className="overflow-hidden w-full md:w-4/6 h-[200px] md:h-full block p-0 mt-4 md:mt-0">
                          <img
                              src={item.mainImage}
                              alt=""
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                    )}
                  </Link>
              ))}
            </div>
          </div>

          {relatedBlogs.length > 0 && (
              <div className="pt-8 mt-[3rem]">
                <h2 className="text-3xl lg:text-5xl font-[800] mb-[2.5rem]">{t("specialPage.interestingArticles") || "Interesting Articles"}</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {relatedBlogs.map((item) => {
                    const date = new Date();
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = t(`months.${date.getMonth()}`) || 'Січень';
                    const year = date.getFullYear();

                    return (
                        <div
                            key={item.id}
                            className="post_item w-[22rem] bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
                        >
                          <Link to={`/${lang}/blogs/${item.slug}`}
                                className="image_block relative block overflow-hidden group">
                            {item.mainImage && (
                                <span
                                    className="image bg_img block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{backgroundImage: `url(${item.mainImage})`}}
                                ></span>
                            )}
                            <p className="date absolute bottom-[1rem] left-[1rem] flex gap-1 text-white bg-black/50 px-3 py-1 rounded-md">
                              <b>{day}</b>
                              <span>{month}</span>
                              <span>{year}</span>
                            </p>
                          </Link>

                          <Link to={`/${lang}/blogs/${item.slug}`}
                                className="name fw600 block text-[1.3rem] font-semibold mt-4 px-4 hover:text-primary transition">
                            {item.title?.[lang] || "Без назви"}
                          </Link>

                          <p className="excerpt text-[1rem] text-gray-600 mt-2 px-4 line-clamp-3">
                            {item.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "Опис відсутній"}
                          </p>

                          <Link to={`/${lang}/blogs/${item.slug}`}
                                className="more fw600 before block text-[1rem] font-semibold text-primary mt-4 mb-4 px-4 hover:underline">
                            {t("specials.learnMore")}
                          </Link>
                        </div>
                    )
                  })}
                </div>
              </div>
          )}

        </div>
      </div>
  );
}