'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap, Heart } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              MSW Student - Family & Child Welfare
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 leading-tight"
            >
              <span className="block">Vaishnavi</span>
              <span className="block text-teal-600">Navnath Raykar</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 mb-6"
            >
              Aspiring Social Worker & Child Advocate
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about empowering children, youth, and communities
              through social work. Committed to creating meaningful change
              through empathy, education, and social justice.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Know More About Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start text-gray-500"
            >
              <MapPin className="w-4 h-4 mr-2" />
              <span>Pune, Maharashtra, India</span>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative z-10"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-bounce delay-300"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 animate-bounce delay-700"></div>

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 opacity-10"></div>
                <Image
                  src="/profile.jpg"
                  alt="Vaishnavi Raykar - Social Work Student"
                  fill
                  className="object-left-top -top-2 object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-8 right-8 bg-white rounded-full p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Heart className="w-6 h-6 text-red-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-8 bg-white rounded-full px-4 py-2 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1,
                }}
              >
                <span className="text-sm font-medium text-teal-600">
                  Child Welfare
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-teal-600 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
            }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center hover:bg-teal-50 transition-colors duration-300">
              <ChevronDown size={20} />
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
