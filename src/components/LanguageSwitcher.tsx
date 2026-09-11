import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, type SupportedLanguage } from '../i18n';

const languageLabels: Record<SupportedLanguage, string> = {
    uk: 'UA',
    ru: 'RU',
    de: 'DE',
    en: 'EN',
};

interface LanguageSwitcherProps {
    scrolled?: boolean;
}

const LanguageSwitcher = ({ scrolled = false }: LanguageSwitcherProps) => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = (i18n.language?.slice(0, 2) as SupportedLanguage) || 'en';

    const handleSelect = (lang: SupportedLanguage) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={ref}>
            <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t('nav.changeLanguage')}
                aria-expanded={isOpen}
                className={`flex items-center space-x-1.5 rounded-full bg-brand-subtle text-brand hover:shadow-md transition-all duration-300 px-2.5 py-2 ${
                    scrolled ? 'sm:px-2.5 sm:py-2' : 'sm:px-3 sm:py-2.5'
                }`}
            >
                <Globe
                    className={`h-4 w-4 transition-all duration-300 ${
                        scrolled ? 'sm:h-[14px] sm:w-[14px]' : 'sm:h-4 sm:w-4'
                    }`}
                />
                <span
                    className={`font-medium transition-all duration-300 text-sm ${
                        scrolled ? 'sm:text-xs' : 'sm:text-sm'
                    }`}
                >
                    {languageLabels[currentLang]}
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 py-2 w-28 bg-surface rounded-xl shadow-lg border border-default z-50"
                    >
                        {supportedLanguages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleSelect(lang)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                                    currentLang === lang
                                        ? 'text-brand font-semibold'
                                        : 'text-secondary hover:bg-brand-subtle'
                                }`}
                            >
                                {languageLabels[lang]}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;