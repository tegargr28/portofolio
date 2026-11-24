import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaLaravel, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiSelenium, SiCypress, SiPytest, SiPostman, SiJira, SiMysql, SiGithubactions } from 'react-icons/si'

const About = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      color: "#3B82F6",
      textShadow: "0 0 8px rgba(59, 130, 246, 0.7)"
    }
  }

  const devSkills = [
    { icon: FaHtml5, label: 'HTML5' },
    { icon: FaCss3Alt, label: 'CSS3' },
    { icon: FaJs, label: 'JavaScript' },
    { icon: FaReact, label: 'React' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
    { icon: FaGitAlt, label: 'Git' },
    { icon: FaFigma, label: 'Figma' },
    { icon: FaLaravel, label: 'Laravel' },
  ]

  const qaSkills = [
    { icon: SiSelenium, label: 'Selenium' },
    { icon: SiCypress, label: 'Cypress' },
    { icon: SiPytest, label: 'Pytest' },
    { icon: FaPython, label: 'Python' },
    { icon: SiPostman, label: 'Postman' },
    { icon: SiMysql, label: 'MySQL / SQL' },
    { icon: SiJira, label: 'Jira' },
    { icon: SiGithubactions, label: 'GitHub Actions' },
  ]

  const SkillRow = ({ items }) => (
    <div className="flex flex-wrap justify-center gap-8 text-4xl text-gray-700 dark:text-gray-400">
      {items.map((skill) => (
        <motion.div key={skill.label} variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}>
          <skill.icon title={skill.label} aria-label={skill.label} />
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section
      id="about"
      className="py-24 px-4 transition-colors duration-300 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-left">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">About</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
      <p className="mb-10 max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
        I'm Tegar Gemilang, a frontend developer with a strong passion for UI/UX and modern web technologies. I enjoy transforming complex problems into intuitive and beautiful digital experiences. With a degree in Informatics Engineering and experience in both freelance and internship roles, I've built responsive interfaces using React, Tailwind CSS, and Laravel. Today my main focus is Quality Assurance: designing and executing test cases, reporting defects, and automating key flows, with my development background helping me understand how defects arise and how to prevent them.
      </p>

      </div>
      <motion.div
        className="rounded-2xl p-8 max-w-6xl mx-auto text-center bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800"
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Tech Stack</h3>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-5">Quality Assurance</p>
        <SkillRow items={qaSkills} />
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-10 mb-5">Development</p>
        <SkillRow items={devSkills} />
      </motion.div>
    </motion.section>
  )
}

export default About
