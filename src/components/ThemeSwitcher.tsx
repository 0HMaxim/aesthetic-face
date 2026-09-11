import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

interface ThemeSwitcherProps {
    scrolled?: boolean;
}

const ThemeSwitcher = ({ scrolled = false }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('nav.toggleTheme')}
            className={`rounded-full bg-brand-subtle text-brand hover:shadow-md transition-all duration-300 p-2 ${
                scrolled ? 'sm:p-2' : 'sm:p-2.5'
            }`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {theme === 'light' ? (
                        <Moon
                            className={`h-5 w-5 transition-all duration-300 ${
                                scrolled ? 'sm:h-[18px] sm:w-[18px]' : 'sm:h-5 sm:w-5'
                            }`}
                        />
                    ) : (
                        <Sun
                            className={`h-5 w-5 transition-all duration-300 ${
                                scrolled ? 'sm:h-[18px] sm:w-[18px]' : 'sm:h-5 sm:w-5'
                            }`}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeSwitcher;