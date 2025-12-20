import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, get } from "firebase/database";
import { db } from "../firebase.ts";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import type { Blog } from "../models/Blog.ts";

export default function Blogs() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  useEffect(() => {
    const blogsRef = ref(db, "blogs");
    get(blogsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Преобразуем объект в массив
        const blogsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setBlogs(blogsArray);
      }
    });
  }, []);

  return (
      <div className="w-full items-center justify-center ">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("blog.title")}</h2>
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
            {t("blog.subtitle")}
          </span>
          </div>

          <div className="flex flex-wrap gap-8 justify-center w-full">
            <div className="flex justify-center items-center flex-wrap gap-[2rem]">
              {blogs.map((item) => (
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
        </div>
      </div>
  );
}
