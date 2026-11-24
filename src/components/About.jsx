import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaLaravel, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiSelenium, SiCypress, SiPytest, SiPostman, SiJira, SiMysql, SiGithubactions } from 'react-icons/si'

const About = () => {
  const devSkills = [
    { icon: FaHtml5, label: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, label: 'CSS3', color: '#1572B6' },
    { icon: FaJs, label: 'JavaScript', color: '#EAB308' },
    { icon: FaReact, label: 'React', color: '#0891C2' },
    { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
    { icon: FaGitAlt, label: 'Git', color: '#F05032' },
    { icon: FaFigma, label: 'Figma', color: '#F24E1E' },
    { icon: FaLaravel, label: 'Laravel', color: '#FF2D20' },
  ]

  const qaSkills = [
    { icon: SiSelenium, label: 'Selenium', color: '#43B02A' },
    { icon: SiCypress, label: 'Cypress', color: '#00C389' },
    { icon: SiPytest, label: 'Pytest', color: '#0A9EDC' },
    { icon: FaPython, label: 'Python', color: '#3776AB' },
    { icon: SiPostman, label: 'Postman', color: '#FF6C37' },
    { icon: SiMysql, label: 'MySQL / SQL', color: '#4479A1' },
    { icon: SiJira, label: 'Jira', color: '#0052CC' },
    { icon: SiGithubactions, label: 'GitHub Actions', color: '#2088FF' },
  ]

  const SkillGroup = ({ title, items }) => (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">{title}</p>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
        {items.map((skill) => (
          <motion.li
            key={skill.label}
            className="group flex items-center gap-3 px-2 -mx-2 py-1.5 -my-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="shrink-0 flex"
              variants={{
                rest: { scale: 1, rotate: 0 },
                hover: {
                  scale: 1.45,
                  rotate: -12,
                  transition: { type: 'spring', stiffness: 350, damping: 7 }
                }
              }}
            >
              <skill.icon
                className="text-2xl text-gray-500 dark:text-gray-400 group-hover:[color:var(--brand)] transition-colors duration-200"
                style={{ '--brand': skill.color }}
                aria-hidden="true"
              />
            </motion.span>
            <span className="font-medium group-hover:translate-x-1 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-200">{skill.label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )

  return (
    <motion.section
      id="about"
      className="py-28 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm Tegar Gemilang, a frontend developer with a strong passion for UI/UX and modern web technologies. I enjoy transforming complex problems into intuitive and beautiful digital experiences. With a degree in Informatics Engineering and experience in both freelance and internship roles, I've built responsive interfaces using React, Tailwind CSS, and Laravel. Today my main focus is Quality Assurance: designing and executing test cases, reporting defects, and automating key flows, with my development background helping me understand how defects arise and how to prevent them.
          </p>
          <div className="space-y-10">
            <SkillGroup title="Quality Assurance" items={qaSkills} />
            <SkillGroup title="Development" items={devSkills} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
