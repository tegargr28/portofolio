import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity, FaBriefcase } from 'react-icons/fa'

const Education = () => {
  const sections = [
    {
      icon: <FaBriefcase />,
      title: "Work Experience",
      items: [
        { role: "Full Stack Developer Intern – Rajawali Merah (E-commerce)", period: "Mar 2022 – Jun 2022", desc: "Built an e-commerce site for selling products using HTML, CSS, JavaScript, and PHP. Monitored the selling flow through an integrated dashboard and debugged issues using Chrome Developer Tools." },
        { role: "Freelance Web Developer", period: "Jul 2022 – Dec 2022", desc: "Developed portfolio websites and business landing pages." }
      ]
    },
    {
      icon: <FaUniversity />,
      title: "Education",
      items: [
        { role: "SMA Negeri 2 Cikampek", period: "2017 – 2020", desc: "Majored in Software Engineering." },
        { role: "Dian Nuswantoro University", period: "Oct 2019 – Dec 2024", desc: "Bachelor of Informatics Engineering, Semarang. GPA 3.10/4.00. Coursework: Web Based Programming, Advanced Web Programming, Responsive Web Design, Algorithm and Programming, Data Mining, Artificial Intelligence." }
      ]
    }
  ]

  return (
    <motion.section
      id="education"
      className="py-24 px-4 transition-colors duration-300 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto"><p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Background</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Experience</h2></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl p-7 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 transition-colors duration-300"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-6 text-gray-900 dark:text-white text-xl">
              {section.icon}
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            <div className="relative border-l-2 border-blue-100 dark:border-gray-700 ml-2 pl-6 space-y-6">
              {section.items.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-50 dark:ring-gray-800"></span>
                  <h4 className="font-bold text-gray-800 dark:text-white">{item.role}</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
