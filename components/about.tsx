'use client';

import { useEffect } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, BookOpen, Target, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const strengthsData = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Empathetic',
      description:
        'Deep understanding and compassion for vulnerable communities',
      color: 'bg-red-50 text-red-600 border-red-200',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community-Focused',
      description:
        'Building strong connections and fostering community development',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Oriented',
      description:
        'Committed to achieving meaningful and sustainable social change',
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovative',
      description: 'Creative approaches to solving complex social challenges',
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Lifelong Learner',
      description:
        'Continuously growing through field experiences and education',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Dedicated',
      description: 'Unwavering commitment to child welfare and social justice',
      color: 'bg-teal-50 text-teal-600 border-teal-200',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Get to know me better
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <Heart className="w-4 h-4 text-teal-600" />
                  </div>
                  My Journey
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I am{' '}
                    <span className="font-semibold text-teal-600">
                      Vaishnavi Navnath Raykar
                    </span>
                    , a passionate and committed Master of Social Work (MSW)
                    student at{' '}
                    <span className="font-medium">
                      Karve Institute of Social Service, Pune
                    </span>
                    , with a specialization in{' '}
                    <span className="font-medium text-teal-600">
                      Family and Child Welfare (FCW)
                    </span>
                    .
                  </p>

                  <p>
                    I have a strong interest in working for the well-being of
                    children, families, and communities. My goal is to support
                    vulnerable groups by promoting education, awareness,
                    emotional care, and social justice.
                  </p>

                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                    <p className="italic text-teal-800">
                      "I believe that small efforts, when done with empathy and
                      consistency, can lead to big and meaningful change."
                    </p>
                  </div>

                  <p>
                    I am deeply motivated to grow as a social worker, continue
                    learning from field experiences, and contribute towards
                    building a safer and more supportive society for every child
                    and family.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">My Mission</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <p>
                      Empower vulnerable children and families through education
                      and support
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <p>Promote social justice and equality in communities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <p>
                      Create sustainable positive change through empathy and
                      consistency
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Strengths Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              My Core Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengthsData.map((strength, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                    strength.color.includes('border')
                      ? strength.color.split(' ').pop()
                      : 'border-gray-100'
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${strength.color
                      .split(' ')
                      .slice(0, 2)
                      .join(' ')}`}
                  >
                    {strength.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let's Create Change Together
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always eager to connect with like-minded individuals and
                organizations who share the vision of building a better society
                for children and families.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Connect With Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
