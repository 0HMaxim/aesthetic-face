import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TopImage } from "../components/TopImage.tsx";
import PhotoList from "../components/PhotoList.tsx";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer.tsx";
import FAQList from "../components/FAQList.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";
import PriceTable from "../components/PriceTable.tsx";
import type {FAQ} from "../models/FAQ.ts";
import type {Special} from "../models/Special.ts";
import {Button} from "@heroui/react";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const navigate = useNavigate();

  const { data: relatedData, loading } = useFetchData([
    "services",
    "prices",
    "blogs",
    "specials",
    "employees",
    "faqs",
    "photos",
  ]);

  if (loading) return <div className="container mx-auto py-8">Loading...</div>;

  const services = relatedData.services || [];
  const prices = relatedData.prices || [];
  const blogs = relatedData.blogs || [];
  const specials = relatedData.specials || [];
  const employees = relatedData.employees || [];
  const faqs = relatedData.faqs || [];
  const photos = relatedData.photos || [];


  const currentItem = services.find((s) => s.slug === slug);
  if (!currentItem) return <div className="container mx-auto py-8">Service not found</div>;

  const currentId = currentItem.id; // Ваш текущий ID услуги

  const relatedSubservices = services.filter(s => {
    const parentIds = s.parentServiceIds;
    return Array.isArray(parentIds) && parentIds.includes(currentId);
  });

  console.log("Current Service ID:", currentId);
  console.log("Current Service Subservice IDs:", currentItem.subservices);
  console.log("relatedSubservices:", relatedSubservices);
  console.log("All Blogs (from DB):", blogs);
  console.log("All Specials (from DB):", specials);

  // 2. ✅ ФИЛЬТРАЦИЯ ЦЕН
  const relatedPrices = prices.filter((price) => {
    const priceServiceIds = Array.isArray(price.serviceIds)
        ? price.serviceIds
        : [];

    return priceServiceIds.includes(currentId);
  });

  const priceItems = relatedPrices.map(price => ({
    category: price.category,
    columns: price.columns,
    sections: price.sections || []
  }));


  // FAQ
  const relatedFaqs = faqs.filter((faq) => {
    return faq.serviceId === currentId;
  })as FAQ[];


  // Фото
  const currentPhotos = photos
  .filter((p) => {
    return p.serviceId === currentId || p.subserviceId === currentId;
  })
  .map((photo) => ({
    ...photo,
    service: photo.serviceId ? services.find((s) => s.id === photo.serviceId) : undefined,
    subservice: photo.subserviceId ? services.find((s) => s.id === photo.subserviceId) : undefined,
    employee: photo.employeeId ? employees.find((d) => d.id === photo.employeeId) : undefined,
  }));

  // Блоги
  const serviceBlogIds = currentItem.blogs || [];

  const relatedBlogs = blogs.filter((blog) => {
    return blog.id && serviceBlogIds.includes(blog.id);
  });

  const relatedSpecials = specials.filter((special) => {
    return Array.isArray(special.serviceId) && special.serviceId.includes(currentId);
  });

  const relatedEmployees = employees.filter((emp) => currentItem.employees?.includes(emp.id));

  const imagee = currentItem.mainImage;

  if (loading) return <p className="text-center py-10">Loading . . .</p>;

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">

          <div className="py-8">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{currentItem.title[lang]}</h2>
          </div>

          <div className="flex flex-col gap-8">
            {currentItem.content && <ContentBlockRenderer content={currentItem.content} />}

            {relatedSubservices.length > 0 && (
                <div className="py-8">
                  <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">{t("servicePage.otherServices")}</h2>
                  <div className="flex flex-wrap gap-4">
                    {relatedSubservices.map((sub) => (
                        <div
                            key={sub.id}
                            onClick={() => navigate(`/${lang}/services/${sub.slug}`)}
                            className="group relative overflow-hidden w-[15rem] h-[12rem] rounded-[10rem] shadow-md hover:bg-[var(--primary)] hover:shadow-xl transition duration-500 cursor-pointer"
                        >
                          {sub.mainImage && (
                              <img
                                  src={sub.mainImage}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                            <p className="text-[1rem] font-normal">{sub.title[lang]}</p>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            )}

            {/* PriceTable */}
            <PriceTable items={priceItems} />

            {relatedEmployees.length > 0 && (
                <div className="py-8">
                  <h2 className="text-3xl lg:text-4xl font-[800] mb-[2.5rem]">{t("servicePage.employees") || "Employees"}</h2>
                  <div className="flex flex-wrap gap-4">
                    {relatedEmployees.map((emp) => (
                        <div key={emp.id} className="w-48 p-4 shadow rounded">
                          {emp.photo && <img src={emp.photo} className="w-full h-48 object-cover rounded" />}
                          <h3 className="mt-2 text-lg font-semibold">{emp.fullName?.[lang] || emp.fullName?.en}</h3>
                          {emp.position && <p className="text-gray-600">{emp.position[lang]}</p>}
                        </div>
                    ))}
                  </div>
                </div>
            )}

            {currentPhotos.length > 0 && (
                <PhotoList photos={currentPhotos} currentPage={0} setCurrentPage={() => {}} itemsPerPage={10} />
            )}

            {relatedFaqs.length > 0 && (
                <FAQList faqs={relatedFaqs} currentPage={0} setCurrentPage={() => {}} itemsPerPage={10} />
            )}

            {relatedSpecials.length > 0 && (
                <div className="py-12">
                  <h2 className="text-3xl lg:text-4xl font-[800] mb-[2.5rem]">{t("blog.relatedSpecials") || "Special Offers"}</h2>
                  <div className="flex justify-center items-center flex-wrap gap-6">
                    {relatedSpecials.map((item: Special) => {
                      const titleText = item.title?.[lang] || item.title?.en || t('Untitled Special');
                      const subtitleText = item.subtitle?.[lang] || item.subtitle?.en || '';

                      if (!item.slug) return null;

                      return (
                          <Link
                              key={item.id}
                              to={`/${lang}/specials/${item.slug}`}
                              className="
                        group rounded-2xl shadow-md transition overflow-hidden
                        w-full sm:w-[32rem] md:w-[45rem] h-auto
                        flex flex-col md:flex-row
                        md:gap-[2rem]
                        justify-between relative
                        bg-primary
                        mb-[6rem]
                        hover:shadow-xl
                        duration-500"
                          >
                            {/* Текст */}
                            <div className="p-[2rem] text-foreground w-full md:w-2/6 flex flex-col">
                              <h2 className="text-[1.8rem] font-extrabold mb-[1rem]">{titleText}</h2>
                              <p className="text-[1.2rem] pl-[1.5rem] font-light mb-[1.5rem]">{subtitleText}</p>

                              <Button
                                  as={Link}
                                  to={`/${lang}/specials/${item.slug}`}
                                  className="
                            w-full md:w-auto px-[1.5rem] py-[0.75rem] rounded-[3.5rem]
                            flex items-center justify-center
                            text-white font-semibold
                            bg-black
                            hover:bg-[(var--primary)]
                            transition-colors duration-500
                            mt-auto"
                              >
                                {t("specials.learnMore")}
                              </Button>
                            </div>

                            {item.mainImage && (
                                <div className="overflow-hidden w-full md:w-4/6 block p-0 mt-4 md:mt-0">
                                  <img
                                      src={item.mainImage}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                            )}
                          </Link>
                      )
                    })}
                  </div>
                </div>
            )}

            {relatedBlogs.length > 0 && (
                <div className="py-12">
                  <h2 className="text-3xl lg:text-4xl font-[800] mb-[2.5rem]">{t("blog.relatedBlogs") || "Related Blogs"}</h2>
                  <div className="flex flex-wrap justify-center gap-8">
                    {relatedBlogs.map((item) => (
                        <div
                            key={item.id}
                            className="post_item w-[22rem] bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
                        >
                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
                              className="image_block relative block overflow-hidden group"
                          >
                          <span
                              className="image bg_img block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                              style={{
                                backgroundImage: `url(${item.mainImage})`,
                              }}
                          ></span>
                            <p className="date absolute bottom-[1rem] left-[1rem] flex gap-1 text-white bg-black/50 px-3 py-1 rounded-md">
                              <b>03</b>
                              <span>Січень</span>
                              <span>2024</span>
                            </p>
                          </Link>

                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
                              className="name fw600 block text-[1.3rem] font-semibold mt-4 px-4 hover:text-primary transition"
                          >
                            {item.title?.[lang] || "Без назви"}
                          </Link>

                          <p className="excerpt text-[1rem] text-gray-600 mt-2 px-4 line-clamp-3">
                            {item.content?.find((block) => block.type === "paragraph")?.content?.[lang] ||
                                "Опис відсутній"}
                          </p>

                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
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
      </div>
  );
}
