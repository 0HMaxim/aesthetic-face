import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Blog } from "../models/Blog";

interface BlogItemProps {
    blog: Blog;
    lang: string;
    businessSlug: string;
}

export const BlogItem = ({ blog, lang, businessSlug }: BlogItemProps) => {
    const { t } = useTranslation();
    return (
        <article className="flex flex-col w-full bg-card border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden h-full">
            <div className="relative w-full h-[16rem] md:h-[18rem] overflow-hidden bg-muted">
                <Link to={`/${lang}/${businessSlug}/blogs/${blog.slug}`} className="block w-full h-full">
                    <img
                        src={blog.mainImage}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
            </div>

            <div className="flex flex-col flex-grow p-6 text-center items-center">
                <Link
                    to={`/${lang}/${businessSlug}/blogs/${blog.slug}`}
                    className="text-xl lg:text-2xl font-black mb-3 leading-tight text-foreground hover:text-primary transition-colors line-clamp-2"
                >
                    {blog.title?.[lang as any] || "Без назви"}
                </Link>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {blog.content?.find((block) => block.type === "paragraph")?.content?.[lang as any] || "Опис відсутній"}
                </p>

                <div className="mt-auto pt-5 border-t border-border w-full flex justify-center">
                    <Link
                        to={`/${lang}/${businessSlug}/blogs/${blog.slug}`}
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all group/btn"
                    >
                        {t("specials.learnMore")}
                        <svg className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
};