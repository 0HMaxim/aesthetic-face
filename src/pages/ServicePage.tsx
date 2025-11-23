import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { TopImage } from "../components/TopImage.tsx";
import PhotoList from "../components/PhotoList.tsx";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer.tsx";
import FAQList from "../components/FAQList.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";
import PriceTable from "../components/PriceTable.tsx";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const navigate = useNavigate();

  const { data: relatedData, loading } = useFetchData([
    "services",
    "subservices",
    "prices",
    "blogs",
    "specials",
    "employees",
    "faqs",
    "photos",
  ]);

  if (loading) return <div className="container mx-auto py-8">Loading...</div>;

  const services = relatedData.services || [];
  const subservices = relatedData.subservices || [];
  const prices = relatedData.prices || [];
  const blogs = relatedData.blogs || [];
  const specials = relatedData.specials || [];
  const employees = relatedData.employees || [];
  const faqs = relatedData.faqs || [];
  const photos = relatedData.photos || [];

  // Текущая услуга или подуслуга
  const service = services.find((s) => s.slug === slug);
  const subservice = subservices.find((ss) => ss.slug === slug);
  const currentItem = service || subservice;

  if (!currentItem) return <div className="container mx-auto py-8">Service not found</div>;

  const parentService = service || services.find((s) => s.id === subservice?.serviceId);

  // Подуслуги
  const relatedSubservices = subservices.filter((ss) => ss.serviceId === parentService?.id);

  // Фильтруем цены
  const relatedPrices = prices.filter((price) => {
    const serviceIds = Array.isArray(price.serviceIds)
        ? price.serviceIds.map(String)
        : price.serviceIds
            ? [String(price.serviceIds)]
            : [];
    const subserviceIds = Array.isArray(price.subserviceIds)
        ? price.subserviceIds.map(String)
        : price.subserviceIds
            ? [String(price.subserviceIds)]
            : [];

    if (subservice)
      return subserviceIds.includes(subservice.id) || serviceIds.includes(subservice.serviceId || "");
    if (service) return serviceIds.includes(service.id);
    return false;
  });


  const priceItems = relatedPrices.map(price => ({
    category: price.category, // { en: "...", ru: "...", ... }
    columns: price.columns,   // { duration: {...}, procedure: {...}, price: {...} }
    sections: price.sections || [] // массив с секциями и items
  }));



  // Фото
  const currentPhotos = photos
  .filter((p) => p.serviceId === currentItem.id || p.subserviceId === currentItem.id)
  .map((photo) => ({
    ...photo,
    service: photo.serviceId ? services.find((s) => s.id === photo.serviceId) : undefined,
    subservice: photo.subserviceId ? subservices.find((ss) => ss.id === photo.subserviceId) : undefined,
    employee: photo.employeeId ? employees.find((d) => d.id === photo.employeeId) : undefined,
  }));

  // FAQ
  const relatedFaqs = faqs.filter((faq) => {
    if (subservice) return faq.subserviceId === subservice.id && (!faq.serviceId || faq.serviceId === subservice.serviceId);
    if (service) return faq.serviceId === service.id;
    return false;
  });

  // Блоги
  const relatedBlogs = blogs.filter((blog) => {
    const currentId = currentItem.id;
    const parentId = parentService?.id;
    return (currentId && blog.serviceId?.includes(currentId)) || (parentId && blog.serviceId?.includes(parentId));
  });

  // Специальные предложения
  const relatedSpecials = specials.filter((special) => {
    const currentId = currentItem.id;
    const parentId = parentService?.id;
    return (currentId && special.serviceId?.includes(currentId)) || (parentId && special.serviceId?.includes(parentId));
  });

  // Сотрудники
  const relatedEmployees = employees.filter((emp) => currentItem.employees?.includes(emp.id));

  const imagee = currentItem.mainImage;

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs serviceId={parentService?.id} subserviceId={subservice?.id} />

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
                  <h2 className="text-3xl lg:text-5xl font-[800] mb-4">{t("servicePage.employees") || "Employees"}</h2>
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
                  <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("servicePage.specialsTitle") || "Special Offers"}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedSpecials.map((special) => {
                      const titleText = typeof special.title?.[lang] === "string" ? special.title[lang] : special.title?.[lang]?.[0] || "No title";
                      const subtitleText = typeof special.subtitle?.[lang] === "string" ? special.subtitle[lang].slice(0, 120) : special.subtitle?.[lang]?.[0]?.slice(0, 120) || "No subtitle";

                      return (
                          <div key={special.id} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 bg-white">
                            {special.mainImage && (
                                <img src={special.mainImage} alt={titleText} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                            )}
                            <div className="p-5">
                              <h3 className="text-xl font-semibold mb-2">{titleText}</h3>
                              <p className="text-gray-600 text-sm mb-3">{subtitleText}...</p>
                              {special.slug && (
                                  <Link to={`/${lang}/specials/${special.slug}`} className="text-[var(--primary)] hover:underline font-medium">
                                    {t("servicePage.readMore") || "Read more"}
                                  </Link>
                              )}
                            </div>
                          </div>
                      );
                    })}
                  </div>
                </div>
            )}

            {relatedBlogs.length > 0 && (
                <div className="py-12">
                  <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("servicePage.relatedArticles") || "Related Articles"}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedBlogs.map((blog) => {
                      const titleText = typeof blog.title?.[lang] === "string" ? blog.title[lang] : blog.title?.[lang]?.[0] || "No title";
                      const subtitleText = typeof blog.subtitle?.[lang] === "string" ? blog.subtitle[lang].slice(0, 120) : blog.subtitle?.[lang]?.[0]?.slice(0, 120) || "No subtitle";

                      return (
                          <div key={blog.id} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 bg-white">
                            {blog.mainImage && (
                                <img src={blog.mainImage} alt={titleText} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                            )}
                            <div className="p-5">
                              <h3 className="text-xl font-semibold mb-2">{titleText}</h3>
                              <p className="text-gray-600 text-sm mb-3">{subtitleText}...</p>
                              {blog.slug && (
                                  <Link to={`/${lang}/blogs/${blog.slug}`} className="text-[var(--primary)] hover:underline font-medium">
                                    {t("servicePage.readMore") || "Read more"}
                                  </Link>
                              )}
                            </div>
                          </div>
                      );
                    })}
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}
