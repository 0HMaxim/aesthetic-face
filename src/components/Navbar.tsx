import {useState, useEffect, forwardRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import logo from '../assets/logo.png';
import { meta } from '../data/meta';
import {getLocalizedText, summarizeWorkingHoursShort} from '../utils/localization';
import NavInfoBar from "./NavInfoBar.tsx";
import { NAVBAR_CONTAINER_CLASS } from './PageContainer';

const Navbar = forwardRef<HTMLElement>((_, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const {t, i18n} = useTranslation();
    const lang = i18n.language.split('-')[0];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {name: t('nav.home'), path: '/'},
        {name: t('nav.services'), path: '/services'},
        {name: t('nav.prices'), path: '/prices'},
        {name: t('nav.about'), path: '/about'},
        {name: t('nav.faq'), path: '/faq'},
        {name: t('nav.contact'), path: '/contact'},
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav ref={ref} className="fixed top-0 left-0 right-0 z-50 bg-navbar backdrop-blur-md shadow-sm">
            {/* Info bar — всегда видима от md и выше, слегка сжимается при скролле */}
            <div className="hidden md:block">
                <NavInfoBar scrolled={scrolled}/>
            </div>

            {/* Main row */}
            <div className={NAVBAR_CONTAINER_CLASS}>
                <div
                    // База фиксирована вплоть до 2xl, "рост" (несжатое состояние) — только на очень широких экранах
                    className={`flex justify-between items-center h-20 transition-all duration-300 ${
                        scrolled ? '2xl:h-20' : '2xl:h-28'
                    }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex shrink-0 items-center space-x-2 sm:space-x-3 lg:space-x-5 min-w-0">
                        <img
                            src={logo}
                            alt={meta.businessName}
                            className={`h-11 w-auto shrink-0 transition-all duration-300 sm:h-14 ${
                                scrolled ? '2xl:h-14' : '2xl:h-20'
                            }`}
                        />
                        <span
                            className={`whitespace-nowrap truncate font-semibold font-serif text-gradient-brand text-base transition-all duration-300 xs:text-lg sm:text-xl ${
                                scrolled ? '2xl:text-xl' : '2xl:text-2xl'
                            }`}
                        >
                            {meta.businessName}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div
                        // База — компактные отступы вплоть до 2xl, увеличение только на очень широких экранах
                        className={`hidden md:flex flex-1 items-center justify-center min-w-0 gap-3 lg:gap-5 xl:gap-7 transition-all duration-300 ${
                            scrolled ? '2xl:gap-8' : '2xl:gap-12'
                        }`}
                    >
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative shrink-0">
                                <Link
                                    to={link.path}
                                    // База — компактный текст вплоть до 2xl, увеличение только на очень широких экранах
                                    className={`whitespace-nowrap font-medium text-sm lg:text-base transition-all duration-300 ${
                                        scrolled ? '' : '2xl:text-lg'
                                    } ${
                                        isActive(link.path)
                                            ? 'text-brand'
                                            : 'text-secondary text-brand-hover'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-brand"
                                        initial={false}
                                        transition={{type: 'spring', stiffness: 380, damping: 30}}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Info & CTA — только на широких экранах, где реально хватает места */}
                    <div
                        className={`hidden xl:flex shrink-0 items-center transition-all duration-300 ${
                            scrolled ? 'space-x-4 2xl:space-x-6' : 'space-x-5 2xl:space-x-8'
                        }`}
                    >
                        <a
                            href="tel:+491725464736"
                            className="flex items-center space-x-2 whitespace-nowrap text-secondary text-brand-hover transition-colors duration-300"
                        >
                            <Phone size={20} className="shrink-0 transition-all duration-300"/>
                            <span
                                className={`transition-all duration-300 text-base ${
                                    scrolled ? '' : '2xl:text-lg'
                                }`}
                            >
                    +49 172 5464736
                </span>
                        </a>
                        <a
                            href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`whitespace-nowrap bg-gradient-brand text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 px-6 py-2.5 text-base ${
                                scrolled ? '' : '2xl:px-7 2xl:py-3 2xl:text-lg'
                            }`}
                        >
                            <MapPin size={20} className="shrink-0 transition-all duration-300"/>
                            <span>{t('nav.visitUs')}</span>
                        </a>

                        <LanguageSwitcher scrolled={scrolled}/>
                        <ThemeSwitcher scrolled={scrolled}/>
                    </div>

                    {/* Компактные свитчеры для диапазона md–xl, пока телефон/кнопка ещё скрыты */}
                    <div className="hidden md:flex xl:hidden items-center space-x-2 shrink-0">
                        <LanguageSwitcher scrolled={scrolled}/>
                        <ThemeSwitcher scrolled={scrolled}/>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2 shrink-0">
                        <LanguageSwitcher scrolled={scrolled}/>
                        <ThemeSwitcher scrolled={scrolled}/>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-brand-subtle text-primary transition-colors duration-300"
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -8}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -8}}
                        transition={{duration: 0.25}}
                        className="md:hidden absolute top-full left-0 right-0 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-surface border-t border-default shadow-lg"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive(link.path)
                                            ? 'text-brand bg-brand-subtle'
                                            : 'text-secondary text-brand-hover hover:bg-brand-subtle'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-4 border-t border-default space-y-3">
                                <a
                                    href="tel:+491725464736"
                                    className="flex items-center space-x-3 px-4 py-2 text-secondary text-brand-hover hover:bg-brand-subtle rounded-lg transition-all duration-300"
                                >
                                    <Phone size={18}/>
                                    <span>+49 172 5464736</span>
                                </a>

                                <a
                                    href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-brand text-white rounded-full hover:shadow-lg transition-all duration-300"
                                >
                                    <MapPin size={18}/>
                                    <span>{t('nav.visitUs')}</span>
                                </a>
                            </div>

                            {/* Address, hours & socials — компенсация отсутствующего info-bar на мобильном */}
                            <div className="pt-4 border-t border-default space-y-3 px-4 text-sm text-secondary">
                                <p className="flex items-start gap-2">
                                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand"/>
                                    {getLocalizedText(meta.address, lang)}
                                </p>
                                <p className="flex items-center gap-2">
                                    <Clock size={16} className="shrink-0 text-brand"/>
                                    {summarizeWorkingHoursShort(meta.workingHours, lang)}
                                </p>
                                <div className="flex items-center gap-3 pt-1">
                                    {meta.socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-default text-secondary transition-colors duration-300 hover:bg-gradient-brand hover:text-white hover:border-transparent"
                                        >
                                            <Icon icon={social.icon} width={15} height={15}/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
});

Navbar.displayName = 'Navbar';
export default Navbar;