import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import {specials} from "../data/services";
import {Button} from "@heroui/react";
import type {Scpecials} from "../models/Scpecials.ts";
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";

export default function SpecialPage() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { slug } = useParams<{ slug: string }>();

  const special = specials.find((spec) => spec.slug === slug);

  if (!special) {
    return <div className="w-full text-center py-8">Special not found</div>;
  }
  const imagee = special.mainImage;

  return (
      <div className="w-full items-center justify-center ">

        {imagee && (
            <div className="overflow-hidden w-full h-[15rem] relative p-0 blur-[0.5rem] mb-[3.5rem]"
            >
              <img
                  src={imagee}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
        )}


        <div className="w-full px-4 md:px-[10rem]">

          <div className="py-8 mb-[3.5rem]">

            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {special.headerTitle[lang]}
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




          <div className="flex flex-wrap justify-center items-center px-4 md:px-[10rem] pt-[2.5rem]">
            {specials
            .filter((item: Scpecials) => item.slug !== special.slug)
            .map((item: Scpecials) => (
                <Link
                    key={item.id}
                    to={`/${lang}/specials/${item.slug}`}
                    className="group rounded-2xl shadow-md  transition overflow-hidden
                  h-[24rem] mr-[2rem] justify-between flex relative mb-[6rem]
                  hover:shadow-xl
                  hover:bg-[var(--primary)] duration-500
                  "
                >
                  <div className="p-[2.5rem] text-foreground w-2/6 duration-500">
                    <h2 className="text-[2rem] font-extrabold mb-[1.5rem]">{item.title[lang]}</h2>
                    <p className="text-[1.2rem] font-light mb-[2.5rem] pl-[2rem] duration-300">{item.subtitle[lang]}</p>

                    <Button
                        as={Link}
                        to={`/${lang}/specials/${item.slug}`}
                        className="w-full md:w-fit p-[1rem] rounded-[3.5rem] mb-[3.5rem]
                        flex items-center justify-center
                        text-white
                        font-semibold
                        bg-black
                        object-cover
                        absolute
                        hover:shadow-xl
                        bottom-0"
                    >
                      {t("specials.learnMore")}
                    </Button>
                  </div>

                  {item.mainImage && (
                      <Button
                          as={Link}
                          to={`/${lang}/specials/${item.slug}`}
                          className="overflow-hidden w-4/6 h-full block p-0
                          "
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

        </div>
      </div>
  );
}
