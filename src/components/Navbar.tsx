import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent"
            >
              Aesthetic Face
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-rose-500 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.a
              href="tel:+491725464736"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition-colors duration-300"
            >
              <Phone size={18} />
              <span className="text-sm">+49 172 5464736</span>
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-400 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <MapPin size={18} />
              <span>Visit Us</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+491725464736"
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>+49 172 5464736</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Küterstraße 5, 24103 Kiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
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
