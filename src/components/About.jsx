import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaLaravel, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiSelenium, SiCypress, SiPytest, SiPostman, SiJira, SiMysql, SiGithubactions } from 'react-icons/si'

const About = () => {
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

  const SkillGroup = ({ title, items }) => (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">{title}</p>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
        {items.map((skill) => (
          <li key={skill.label} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <skill.icon className="text-2xl text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" />
            <span className="font-medium">{skill.label}</span>
          </li>
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
