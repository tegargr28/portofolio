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
      className="py-28 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-3">03 — Resume</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-14">Experience &amp; Education</h2>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="flex items-center gap-3 text-lg font-semibold text-gray-900 dark:text-white mb-2">
                <span className="text-blue-600 dark:text-blue-400">{section.icon}</span>
                {section.title}
              </h3>
              <div className="border-b border-gray-200 dark:border-gray-800">
                {section.items.map((item) => (
                  <div
                    key={item.role}
                    className="grid md:grid-cols-[13rem_1fr] gap-2 md:gap-8 py-6 border-t border-gray-200 dark:border-gray-800"
                  >
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 pt-1">{item.period}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.role}</h4>
                      <p className="mt-1.5 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education
