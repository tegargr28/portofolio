import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity, FaBriefcase } from 'react-icons/fa'

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-16 px-4 bg-blue-50 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-blue-300">Experience</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {[{
          icon: <FaBriefcase />,
          title: "Work Experience",
          items: [
            { role: "Frontend Web Developer – Rajawali Merah", period: "Jan 2023 – June 2023", desc: "Built responsive components and collaborated with design team." },
            { role: "Freelance Web Developer", period: "Jul 2022 – Dec 2022", desc: "Developed portfolio websites and business landing pages." }
          ]
        },
        {
          icon: <FaUniversity />,
          title: "Education",
          items: [
            { role: "SMA Negeri 2 Cikampek", period: "2017 – 2020", desc: "Majored in Software Engineering." },
            { role: "Dian Nuswantoro University", period: "2019 – 2024", desc: "Bachelor's Degree in Informatics Engineering." }
          ]
        }].map((section, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl shadow-md p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4 text-blue-700 dark:text-blue-400 text-xl">
              {section.icon}
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            {section.items.map((item, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-bold text-gray-800 dark:text-white">{item.role}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
