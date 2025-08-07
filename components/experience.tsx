'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronDown,
  ChevronUp,
  Building,
  Users,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [expandedItems, setExpandedItems] = useState({
    akanksha: false,
    iteach: false,
    sofosh: false,
    swarup: false,
  });

  const toggleExpand = (item: keyof typeof expandedItems) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Fieldwork & Work Experience
      </h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Akanksha Foundation */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div
            className="p-6 cursor-pointer"
            onClick={() => toggleExpand('akanksha')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Building className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Akanksha Foundation
                  </h3>
                  <p className="text-gray-600">1st & 2nd Semester</p>
                </div>
              </div>
              <div>
                {expandedItems.akanksha ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>
          {expandedItems.akanksha && (
            <div className="px-6 pb-6">
              <ul className="space-y-2 text-gray-700 ml-14">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Assisted in child-focused educational and creative
                    activities for underprivileged children
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Gained comprehensive knowledge about NGO operations and
                    management for vulnerable children
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Observed classroom teaching methodologies and analyzed
                    learning behavior patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Developed understanding of child psychology and educational
                    intervention strategies
                  </span>
                </li>
              </ul>
            </div>
          )}
        </motion.div>

        {/* I Teach School */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div
            className="p-6 cursor-pointer"
            onClick={() => toggleExpand('iteach')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    I Teach School
                  </h3>
                  <p className="text-gray-600">3rd Semester</p>
                </div>
              </div>
              <div>
                {expandedItems.iteach ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>
          {expandedItems.iteach && (
            <div className="px-6 pb-6">
              <ul className="space-y-2 text-gray-700 ml-14">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Provided academic support to students and enhanced their
                    classroom participation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Acquired practical classroom management and effective
                    communication skills
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Collaborated closely with teachers to design student
                    development programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Implemented innovative teaching methods to improve learning
                    outcomes
                  </span>
                </li>
              </ul>
            </div>
          )}
        </motion.div>

        {/* SOFOSH */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div
            className="p-6 cursor-pointer"
            onClick={() => toggleExpand('sofosh')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    SOFOSH – Sassoon General Hospital
                  </h3>
                  <p className="text-gray-600">4th Semester</p>
                </div>
              </div>
              <div>
                {expandedItems.sofosh ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>
          {expandedItems.sofosh && (
            <div className="px-6 pb-6">
              <ul className="space-y-2 text-gray-700 ml-14">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Observed comprehensive care practices for children with
                    special needs and typical development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Actively participated in home visits and facilitated parent
                    interactions for adoption processes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Successfully led a staff training session on "Stress
                    Management – Small Changes, Big Impact"
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Gained valuable insights through observation of Child
                    Welfare Committee (CWC) meetings and court procedures
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Developed expertise in child protection laws and welfare
                    policies in India
                  </span>
                </li>
              </ul>
            </div>
          )}
        </motion.div>

        {/* Swa-Rupwardhinee */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div
            className="p-6 cursor-pointer"
            onClick={() => toggleExpand('swarup')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Volunteer at Swa-Rupwardhinee
                  </h3>
                  <p className="text-gray-600">Pune</p>
                </div>
              </div>
              <div>
                {expandedItems.swarup ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>
          {expandedItems.swarup && (
            <div className="px-6 pb-6">
              <ul className="space-y-2 text-gray-700 ml-14">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Actively engaged in value-based education programs and youth
                    development initiatives
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Enhanced teamwork, communication, and leadership skills
                    through community service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Organized and facilitated various community engagement and
                    awareness activities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 mr-2 flex-shrink-0"></span>
                  <span>
                    Contributed to social welfare programs focusing on holistic
                    personality development
                  </span>
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
