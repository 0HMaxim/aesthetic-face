import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                  key={`logo-${location.pathname}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold text-gradient-brand"
              >
                Aesthetic Face
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                  <motion.div
                      key={`${link.path}-${location.pathname}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                  >
                    <Link
                        to={link.path}
                        className={`font-medium transition-colors duration-300 ${
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
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                    )}
                  </motion.div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.a
                  key={`phone-${location.pathname}`}
                  href="tel:+491725464736"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-2 text-secondary text-brand-hover transition-colors duration-300"
              >
                <Phone size={18} />
                <span className="text-sm">+49 172 5464736</span>
              </motion.a>
              <motion.a
                  key={`visit-${location.pathname}`}
                  href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="px-6 py-2.5 bg-gradient-brand text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <MapPin size={18} />
                <span>Visit Us</span>
              </motion.a>

              {/* Theme Toggle */}
              <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                  className="p-2.5 rounded-full bg-brand-subtle text-brand hover:shadow-md transition-all duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                  onClick={toggleTheme}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                  className="p-2 rounded-lg bg-brand-subtle text-brand transition-colors duration-300"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.button>
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg hover:bg-brand-subtle text-primary transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
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
                    <Phone size={18} />
                    <span>+49 172 5464736</span>
                  </a>

                  <a
                  href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-brand text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                  <MapPin size={18} />
                  <span>Visit Us</span>
                </a>
              </div>
            </div>
            </motion.div>
            )}
</AnimatePresence>
</nav>
);
};

export default Navbar;