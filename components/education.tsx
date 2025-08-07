"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.3,
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Educational Background</h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-3xl mx-auto space-y-8"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Master of Social Work (MSW)</h3>
                <p className="text-gray-600">Karve Institute of Social Service, Pune</p>
                <p className="text-sm text-teal-600 font-medium">Currently pursuing</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Specializing in child welfare and community development with a focus on practical fieldwork experience and
              research.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor&apos;s Degree</h3>
                <p className="text-gray-600">Modern College, Shivaji Nagar, Pune</p>
                <p className="text-sm text-teal-600 font-medium">Completed</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Built a strong foundation in social sciences and humanities, developing critical thinking and analytical
              skills.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
