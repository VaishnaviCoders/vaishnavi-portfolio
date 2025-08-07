"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Calendar, Users, BookOpen, Target } from 'lucide-react'

export default function BlockPlacement() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const responsibilities = [
    "Participated in weekly field visits to rural villages under the Hirkani Project focused on early childhood development (0–6 years)",
    "Visited villages such as Bhor, Velhe, Pasali, and Pasure in Pune district for community-based work",
    "Conducted mother-child development activities including storytelling, singing, play, and communication-based engagement",
    "Helped assess the impact of training through interviews and observation with participating mothers",
    "Successfully organized a community meeting (melawa) with 40 women in Dhankawadi to raise awareness about parenting and early childhood care",
    "Supported the planning and facilitation of awareness sessions using age-appropriate tools for mothers",
    "Developed field-level skills in rural communication, documentation, group facilitation, and participatory learning"
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Block Placement / Fieldwork Experience</h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dnyanprabodhini, Pune</h3>
                <p className="text-teal-100 text-lg">Hirkani Project – Stree Shakti Prabodhan Karyalay (Gramin)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-teal-100">Duration</p>
                  <p className="font-medium">13th June 2025 – 12th July 2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-teal-100">Role</p>
                  <p className="font-medium">MSW Block Placement Trainee</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <div>
                  <p className="text-sm text-teal-100">Focus Area</p>
                  <p className="font-medium">Rural Community Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Users className="h-6 w-6 text-teal-600 mr-2" />
              Key Responsibilities and Learnings
            </h4>
            
            <div className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-teal-500">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Project Impact</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">4+</div>
                  <div className="text-sm text-gray-600">Villages Visited</div>
                  <div className="text-xs text-gray-500 mt-1">Bhor, Velhe, Pasali, Pasure</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">40</div>
                  <div className="text-sm text-gray-600">Women Engaged</div>
                  <div className="text-xs text-gray-500 mt-1">Community Meeting in Dhankawadi</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
