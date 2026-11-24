import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaUniversity, FaShoppingCart, FaUsers, FaRobot } from 'react-icons/fa'

const qaProjects = [
  {
    title: 'Digital Banking QA — ParaBank',
    description:
      'End-to-end QA portfolio on the ParaBank demo: 11 requirements and 13 scenarios traced in an RTM, with manual, API and SQL testing plus Selenium automation running in CI.',
    icon: FaUniversity,
    link: 'https://github.com/tegargr28/digital-banking-qa',
    stats: ['47 test cases executed', '8 defects found (3 Critical)', '4 automated tests in CI'],
    tags: ['Manual Testing', 'Selenium', 'Pytest', 'Postman', 'SQL']
  },
  {
    title: 'SauceDemo — Manual Testing',
    description:
      'Manual testing of the SauceDemo web shop covering Login, Products, Cart, Checkout, Menu and special user personas, with structured test cases and defect reports.',
    icon: FaShoppingCart,
    link: 'https://github.com/tegargr28/saucedemo-manual-testing',
    stats: ['66 test cases executed', '4 defects reported'],
    tags: ['Manual Testing', 'Test Cases', 'Bug Reports']
  },
  {
    title: 'OrangeHRM — Manual & API Testing',
    description:
      'Test plan, test cases and bug reports for the OrangeHRM demo, including API testing with Postman.',
    icon: FaUsers,
    link: 'https://github.com/tegargr28/orangehrm-api-testing',
    stats: ['Test plan & test cases', 'API testing with Postman'],
    tags: ['Manual Testing', 'API Testing', 'Postman']
  },
  {
    title: 'OrangeHRM — Cypress Automation',
    description:
      'Automated end-to-end and API tests for OrangeHRM built with Cypress and the Page Object Model, with HTML reports and GitHub Actions CI.',
    icon: FaRobot,
    link: 'https://github.com/tegargr28/orange-api-testing-automation',
    stats: ['76 automated tests', 'E2E + API coverage', 'CI on every change'],
    tags: ['Cypress', 'Automation', 'Page Object Model', 'GitHub Actions']
  }
]

const webProjects = [
  {
    title: 'Tiket Web',
    description: 'A web-based ticket booking app featuring user authentication, admin dashboard, and ticket management system.',
    image: 'project1.png',
    link: 'https://github.com/tegargr28/Tiket-web.git',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS']
  },
  {
    title: 'Rajawali Merah (E-Commerce)',
    description: 'Developed a responsive e-commerce website using Laravel, MySQL, Bootstrap.',
    image: 'project2.jpeg',
    link: 'https://github.com/tegargr28/Ecommerce-web.git',
    tags: ['Laravel', 'MySQL', 'Bootstrap']
  }
]

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mb-5">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-300 border border-blue-100 dark:border-gray-600"
      >
        {tag}
      </span>
    ))}
  </div>
)

const ProjectLink = ({ href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:underline"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    <FaGithub /> View project →
  </motion.a>
)

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-4 text-center bg-blue-50 dark:bg-gray-900 transition-colors duration-300 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-blue-300">Projects</h2>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Quality Assurance</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {qaProjects.map((project) => (
          <motion.article
            key={project.title}
            className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 text-left"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-36 flex items-center justify-center bg-gradient-to-br from-blue-600 to-sky-500 dark:from-blue-800 dark:to-slate-800">
              <project.icon className="text-6xl text-white/90" aria-hidden="true" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <ul className="mb-4 space-y-1.5">
                {project.stats.map((stat) => (
                  <li key={stat} className="flex items-start gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span>
                    {stat}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <TagList tags={project.tags} />
                <ProjectLink href={project.link} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Web Development</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {webProjects.map((project) => (
          <motion.article
            key={project.title}
            className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300 text-left"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <TagList tags={project.tags} />
              <ProjectLink href={project.link} />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
