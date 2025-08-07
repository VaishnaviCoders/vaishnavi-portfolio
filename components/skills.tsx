"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageSquare, Users, FileText, Eye, UserPlus, BookOpen } from "lucide-react"

export default function Skills() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skills = [
    {
      name: "Communication",
      description: "Strong verbal and written communication skills",
      icon: <MessageSquare className="h-6 w-6 text-teal-600" />,
    },
    {
      name: "Leadership",
      description: "Confident in leading group sessions and activities",
      icon: <Users className="h-6 w-6 text-teal-600" />,
    },
    {
      name: "Report Writing",
      description: "Detailed report preparation and documentation",
      icon: <FileText className="h-6 w-6 text-teal-600" />,
    },
    {
      name: "Observation",
      description: "Keen field observation and analytical skills",
      icon: <Eye className="h-6 w-6 text-teal-600" />,
    },
    {
      name: "Teamwork",
      description: "Collaborative approach and adaptability",
      icon: <UserPlus className="h-6 w-6 text-teal-600" />,
    },
    {
      name: "Learning",
      description: "Motivated to continuously learn and improve",
      icon: <BookOpen className="h-6 w-6 text-teal-600" />,
    },
  ]

  const languages = [
    { name: "Marathi", proficiency: "Fluent", abilities: "Read, Write, Speak" },
    { name: "Hindi", proficiency: "Fluent", abilities: "Speak" },
    { name: "English", proficiency: "Basic", abilities: "Read, Write, Speak" },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Skills & Languages</h2>

      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-teal-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">{skill.name}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Languages</h3>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-teal-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Language
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Proficiency
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Abilities
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {languages.map((language, index) => (
                    <motion.tr key={index} variants={itemVariants} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{language.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{language.proficiency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{language.abilities}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
