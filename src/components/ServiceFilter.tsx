// src/components/common/ServiceFilter.tsx
import {AnimatePresence, motion} from 'motion/react';
import {Check, ChevronDown} from 'lucide-react';
import type {ServiceFilterOption} from "../utils/serviceFilter.ts";
import {getLocalizedText} from "../utils/localization.ts";
import { useEffect, useRef, useState } from 'react';
import {useTranslation} from "react-i18next";

interface ServiceFilterProps {
    options: ServiceFilterOption[];
    active: ServiceFilterOption['value'];
    onChange: (value: ServiceFilterOption['value']) => void;
    lang: string;
}

export const ServiceFilter = ({ options, active, onChange, lang }: ServiceFilterProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeOption = options.find((option) => option.value === active) ?? options[0];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSelect = (value: ServiceFilterOption['value']) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="flex justify-end mb-10">
            <div className="flex items-center gap-3">
                <span className="text-sm text-secondary whitespace-nowrap">
                    {t('faq.filter.label')}
                </span>

                <div ref={containerRef} className="relative w-56 sm:w-64">
                    <motion.button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        whileTap={{ scale: 0.98 }}
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-3 rounded-xl border border-default bg-surface px-5 py-3 text-sm font-medium text-primary shadow-sm transition-colors duration-300 hover:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
                    >
                        <span className="truncate">{getLocalizedText(activeOption.label, lang)}</span>
                        <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="shrink-0 text-brand"
                        >
                            <ChevronDown className="w-4 h-4" />
                        </motion.span>
                    </motion.button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                role="listbox"
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{ duration: 0.18, ease: 'easeOut' }}
                                className="absolute right-0 z-20 mt-2 w-full max-h-72 overflow-auto rounded-xl border border-default bg-surface shadow-lg py-2"
                            >
                                {options.map((option) => {
                                    const isSelected = option.value === active;
                                    return (
                                        <li key={String(option.value)} role="option" aria-selected={isSelected}>
                                            <button
                                                type="button"
                                                onClick={() => handleSelect(option.value)}
                                                className={`w-full flex items-center justify-between gap-3 px-5 py-2.5 text-sm text-left transition-colors duration-200 ${
                                                    isSelected
                                                        ? 'text-brand font-medium bg-brand-subtle'
                                                        : 'text-primary hover:bg-brand-subtle/60'
                                                }`}
                                            >
                                                <span className="truncate">{getLocalizedText(option.label, lang)}</span>
                                                {isSelected && <Check className="w-4 h-4 shrink-0" />}
                                            </button>
                                        </li>
                                    );
                                })}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};