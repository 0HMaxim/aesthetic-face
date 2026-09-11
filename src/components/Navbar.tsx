import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import logo from '../assets/logo.png';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const {t, i18n} = useTranslation();
  const lang = i18n.language;

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
    {name: t('nav.contact'), path: '/contact'},
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar backdrop-blur-md shadow-sm">
        {/* Info bar — сворачивается при скролле, только от md и выше */}
        <AnimatePresence initial={false}>
          {!scrolled && (
              <motion.div
                  key="info-bar"
                  initial={{height: 0, opacity: 0}}
                  animate={{height: 'auto', opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.3, ease: 'easeInOut'}}
                  className="hidden overflow-hidden md:block"
              >
                {/*<NavInfoBar/>*/}
              </motion.div>
          )}
        </AnimatePresence>

        {/* Main row */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div
              className={`flex justify-between items-center h-20 transition-all duration-300 ${
                  scrolled ? 'sm:h-20' : 'sm:h-28'
              }`}
          >
            {/* Logo */}
            <Link to="/" className="flex shrink-0 items-center space-x-2">
              <img
                  src={logo}
                  alt="Aesthetic Face"
                  className={`h-12 w-auto transition-all duration-300 ${
                      scrolled ? 'sm:h-14' : 'sm:h-20'
                  }`}
              />
              <span
                  className={`hidden sm:inline whitespace-nowrap font-semibold text-gradient-brand transition-all duration-300 ${
                      scrolled ? 'text-2xl' : 'text-3xl'
                  }`}
              >
                  Aesthetic Face
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
                className={`hidden md:flex flex-1 items-center justify-center transition-all duration-300 ${
                    scrolled ? 'gap-6 lg:gap-8' : 'gap-8 lg:gap-10'
                }`}
            >
              {navLinks.map((link) => (
                  <div key={link.path} className="relative shrink-0">
                    <Link
                        to={link.path}
                        className={`whitespace-nowrap font-medium transition-all duration-300 ${
                            scrolled ? 'text-base' : 'text-lg'
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

            {/* Contact Info & CTA */}
            <div
                className={`hidden lg:flex shrink-0 items-center transition-all duration-300 ${
                    scrolled ? 'space-x-4' : 'space-x-6'
                }`}
            >
              <a
                  href="tel:+491725464736"
                  className="flex items-center space-x-2 whitespace-nowrap text-secondary text-brand-hover transition-colors duration-300"
              >
                <Phone size={scrolled ? 18 : 20} className="shrink-0 transition-all duration-300"/>
                <span
                    className={`transition-all duration-300 ${
                        scrolled ? 'text-sm' : 'text-base'
                    }`}
                >
                    +49 172 5464736
                </span>
              </a>
              <a
                  href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`whitespace-nowrap bg-gradient-brand text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 ${
                      scrolled ? 'px-6 py-2.5 text-sm' : 'px-7 py-3 text-base'
                  }`}
              >
                <MapPin size={scrolled ? 18 : 20} className="shrink-0 transition-all duration-300"/>
                <span>{t('nav.visitUs')}</span>
              </a>

              <LanguageSwitcher scrolled={scrolled}/>
              <ThemeSwitcher scrolled={scrolled}/>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
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
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: 'auto'}}
                  exit={{opacity: 0, height: 0}}
                  transition={{duration: 0.3}}
                  className="md:hidden bg-surface border-t border-default overflow-hidden"
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
                      {getLocalizedText(meta.workingHours, lang)}
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
};

export default Navbar;