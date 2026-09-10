import { motion } from 'motion/react';

const About = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-purple-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">Content coming soon.</p>
        </div>
      </motion.div>
  );
};

export default About;