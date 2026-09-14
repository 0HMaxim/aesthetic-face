import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    if (totalPages <= 1) return null;

    // Компактный набор страниц с многоточиями: 1 … 4 5 [6] 7 8 … 12
    const getPageNumbers = (): (number | 'ellipsis')[] => {
        const pages: (number | 'ellipsis')[] = [];
        const delta = 1;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                pages.push(i);
            } else if (pages[pages.length - 1] !== 'ellipsis') {
                pages.push('ellipsis');
            }
        }
        return pages;
    };

    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-center gap-1 sm:gap-2 mt-10"
        >
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-default text-secondary hover:text-brand hover:border-brand transition-colors duration-200 disabled:opacity-40 disabled:hover:text-secondary disabled:hover:border-default disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {getPageNumbers().map((page, idx) =>
                page === 'ellipsis' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-secondary select-none">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-current={page === currentPage ? 'page' : undefined}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl font-semibold transition-colors duration-200 ${
                            page === currentPage
                                ? 'bg-gradient-brand text-white shadow-md'
                                : 'text-secondary border border-default hover:text-brand hover:border-brand'
                        }`}
                    >
                        {page}
                    </button>
                ),
            )}

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-default text-secondary hover:text-brand hover:border-brand transition-colors duration-200 disabled:opacity-40 disabled:hover:text-secondary disabled:hover:border-default disabled:cursor-not-allowed"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </nav>
    );
};