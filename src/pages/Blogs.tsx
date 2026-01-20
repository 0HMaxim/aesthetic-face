import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import type { Blog } from "../models/Blog.ts";
import {useBusiness} from "../context/BusinessContext.tsx";
import {useFetchData} from "../hooks/useFetchData.ts";

export default function Blogs() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { businessSlug } = useParams<{ businessSlug: string }>();

  const { data, loading } = useFetchData(["blogs"], businessSlug);

  const blogs = (data.blogs || []) as Blog[];

  const { meta } = useBusiness();

  const dynamicTab = meta?.tabs
      ? Object.values(meta.tabs).find(t => t.route === 'blogs' || t.route === '/blogs')
      : null;

  const headerImage =
      dynamicTab?.headerImage || "";

  const getTabLabel = (localizedValue: any) => {
    if (!localizedValue) return "";
    return localizedValue[lang] || localizedValue["en"] || "";
  };

  if (loading) {
    return <p className="text-center py-10">{t("loading")}</p>;
  }
  return (
      <div className="w-full items-center justify-center">
        <TopImage source={headerImage} />


        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full duration-500 text-foreground">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {getTabLabel(dynamicTab?.title) || t("blog.title")}
            </h2>

            <div className="md:flex justify-between block">
              <p className="text-base lg:text-2xl font-normal  mb-4">
                {getTabLabel(dynamicTab?.description) || t("blog.subtitle")}
              </p>

          <div className="flex flex-wrap gap-8 justify-center w-full">
            {blogs.map((item) => (
                <div key={item.id} className="post_item w-[22rem] bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500">
                  <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="image_block relative block overflow-hidden group">
                <span
                    className="image bg_img block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.mainImage})` }}
                ></span>
                  </Link>
                  <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="name fw600 block text-[1.3rem] font-semibold mt-4 px-4 hover:text-primary transition">
                    {item.title?.[lang] || "Без назви"}
                  </Link>
                  <p className="excerpt text-[1rem] text-gray-600 mt-2 px-4 line-clamp-3">
                    {item.content?.find((block) => block.type === "paragraph")?.content?.[lang] || "Опис відсутній"}
                  </p>
                  <Link to={`/${lang}/${businessSlug}/blogs/${item.slug}`} className="more fw600 before block text-[1rem] font-semibold text-primary mt-4 mb-4 px-4 hover:underline">
                    {t("specials.learnMore")}
                  </Link>
                </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
  );
}
