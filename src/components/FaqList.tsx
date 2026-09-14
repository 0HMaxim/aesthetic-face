import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { FaqItem } from './FaqItem';
import type {Faq} from "../types/Faq.ts";
import {Pagination} from "./Pagination.tsx";

interface FaqListProps {
    faqs: Faq[];
    lang: string;
    pageSize?: number;
    showServiceBadge?: boolean;
}

export const FaqList = ({ faqs, lang, pageSize, showServiceBadge = false }: FaqListProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = pageSize ? Math.ceil(faqs.length / pageSize) : 1;

    const visibleFaqs = useMemo(() => {
        if (!pageSize) return faqs;
        const start = (currentPage - 1) * pageSize;
        return faqs.slice(start, start + pageSize);
    }, [faqs, pageSize, currentPage]);

    if (faqs.length === 0) return null;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Плавный скролл к началу списка при смене страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <motion.div
                key={currentPage}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
            >
                {visibleFaqs.map((faq) => (
                    <FaqItem key={faq.id} faq={faq} lang={lang} showServiceBadge={showServiceBadge} />
                ))}
            </motion.div>

            {pageSize && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};