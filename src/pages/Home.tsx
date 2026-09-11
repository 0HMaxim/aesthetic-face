import { motion } from 'motion/react';
import { Sparkles, Award, Clock, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import {getLocalizedText} from "../utils/localization.ts";

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const featureIcons = [
    <Award className="w-8 h-8" />,
    <Sparkles className="w-8 h-8" />,
    <Heart className="w-8 h-8" />,
    <Clock className="w-8 h-8" />,
  ];

  const features = (
      t('home.features', { returnObjects: true }) as { title: string; description: string }[]
  ).map((feature, index) => ({
    ...feature,
    icon: featureIcons[index],
  }));

  const featuredServices = services.slice(0, 4);

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-brand">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80')] bg-cover bg-center opacity-10"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                Aesthetic Face
                <span className="block mt-2 text-gradient-brand">
                Beauty Salon
              </span>
              </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                  to="/services"
                  className="group px-8 py-4 bg-gradient-brand text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">{t('home.hero.exploreServices')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>


              <a
              href="tel:+491725464736"
              className="px-8 py-4 bg-surface text-primary rounded-full border-2 border-default hover:border-brand hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
              {t('home.hero.bookAppointment')}
            </a>
          </motion.div>
      </div>

{/* Scroll Indicator */}
  <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 border-2 border-default rounded-full flex items-start justify-center p-2"
    >
      <motion.div className="w-1.5 h-1.5 bg-secondary rounded-full" />
    </motion.div>
  </motion.div>
</section>

  {/* Features Section */}
  <section className="py-20 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('home.features.title', { defaultValue: t('home.whyChooseUs.title') })}
        </h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          {t('home.whyChooseUs.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-soft-brand rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary">
                {feature.description}
              </p>
            </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section className="py-20 bg-section-brand">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('home.servicesSection.title')}
        </h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          {t('home.servicesSection.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredServices.map((service, index) => {
          const title = getLocalizedText(service.title, lang);
          const description = getLocalizedText(service.description, lang);

          return (
              <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                      src={service.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {title}
                  </h3>
                  <p className="text-secondary mb-6">
                    {description}
                  </p>
                  <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center space-x-2 text-brand font-semibold group-hover:text-brand-hover transition-colors duration-300"
                  >
                    <span>{t('home.servicesSection.learnMore')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
          );
        })}
      </div>

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
      >
        <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-brand text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
        >
          <span>{t('home.servicesSection.viewAll')}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gradient-brand text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('home.cta.title')}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t('home.cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
          href="tel:+491725464736"
          className="px-8 py-4 bg-white text-brand rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
          >
          {t('home.cta.call')}
        </a>
        <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-brand hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
        >
          {t('home.cta.contactUs')}
        </Link>
    </div>
  </motion.div>
</div>
</section>
</div>
);
};

export default Home;