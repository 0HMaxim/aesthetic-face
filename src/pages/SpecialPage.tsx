import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import {blogs, specials} from "../data/services";
import {Button} from "@heroui/react";
import type {Scpecials} from "../models/Scpecials.ts";
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";

export default function SpecialPage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { slug } = useParams<{ slug: string }>();

  const special = specials.find((spec) => spec.slug === slug);

  const relatedBlogs = blogs ;


  if (!special) {
    return <div className="w-full text-center py-8">Special not found</div>;
  }
  const imagee = special.mainImage;

  return (
      <div className="w-full items-center justify-center ">

        {imagee && (
            <TopImage source={imagee}/>
        )}

        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs specialSlug={special.slug} />


          <div className="py-8 mb-[3.5rem]">

            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {special.title[lang]}
            </h2>

            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem] duration-500">
              {special.subtitle[lang]}
            </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {special.subtitle[lang]}
            </p>

          </div>


          <div className="mb-[3.5rem]">
            <ContentBlockRenderer content={special.content} />
          </div>


          <div>
          <div className="py-8 mb-[2.5rem] mt-[3rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[2rem]">
              {t("specialPage.mayAlsoInterestYou")}
            </h2>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
            </p>
          </div>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-[2.5rem]">
              {specials
              .filter((item: Scpecials) => item.slug !== special.slug)
              .map((item: Scpecials) => (
                  <Link
                      key={item.id}
                      to={`/${lang}/specials/${item.slug}`}
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
                      <h2 className="text-[1.8rem] font-extrabold mb-[1rem]">{item.title[lang]}</h2>
                      <p className="text-[1.2rem] pl-[1.5rem] font-light mb-[1.5rem]">{item.subtitle[lang]}</p>

                      <Button
                          as={Link}
                          to={`/${lang}/specials/${item.slug}`}
                          className="
                          w-full md:w-auto px-[1.5rem] py-[0.75rem] rounded-[3.5rem]
                          flex items-center justify-center
                          text-white font-semibold
                          bg-black
                          hover:bg-primary
                          transition-colors duration-500
                          mt-auto
                        "
                      >
                        {t("specials.learnMore")}
                      </Button>
                    </div>

                    {/* Картинка */}
                    {item.mainImage && (
                        <Button
                            as={Link}
                            to={`/${lang}/specials/${item.slug}`}
                            className="overflow-hidden w-full md:w-4/6 block p-0 mt-4 md:mt-0"
                        >
                          <img
                              src={item.mainImage}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Button>
                    )}
                  </Link>
              ))}

            </div>


            {relatedBlogs.length > 0 && (
                <>
                  <div className="pt-8 mt-[3rem]">
                    <h2 className="text-3xl lg:text-5xl font-[800] mb-[2.5rem]">
                      {t("specialPage.interestingArticles")}
                    </h2>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {relatedBlogs.map((item) => (
                        <div
                            key={item.id}
                            className="post_item w-[22rem] bg-primary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-500"
                        >
                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
                              className="relative block overflow-hidden group"
                          >
                            {item.mainImage && (
                                <span
                                    className="block w-full h-[15rem] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{
                                      backgroundImage: `url(${item.mainImage})`,
                                    }}
                                ></span>
                            )}
                            <p className="date absolute bottom-[1rem] left-[1rem] flex gap-1 text-white bg-black/50 px-3 py-1 rounded-md">
                              <b>03</b>
                              <span>Січень</span>
                              <span>2024</span>
                            </p>
                          </Link>

                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
                              className="block text-[1.3rem] font-semibold mt-4 px-4 hover:text-primary transition"
                          >
                            {item.title[lang]}
                          </Link>

                          <p className="excerpt text-[1rem] text-gray-600 mt-2 px-4 line-clamp-3">
                            {item.content?.find((block) => block.type === "paragraph")?.content?.[lang] ||
                                "Опис відсутній"}
                          </p>

                          <Link
                              to={`/${lang}/blogs/${item.slug}`}
                              className="block text-[1rem] font-semibold text-primary mt-4 mb-4 px-4 hover:underline"
                          >
                            {t("specials.learnMore")}
                          </Link>
                        </div>
                    ))}
                  </div>
                </>
            )}


          </div>

        </div>
      </div>
  );
}
