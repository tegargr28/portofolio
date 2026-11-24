import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const qaProjects = [
  {
    title: 'CHALIGULA — E-Commerce QA',
    description:
      'QA for a live e-commerce app I built and deployed myself. Manual testing of the shop in the browser, 29 API cases executed against the production API, and a pytest automation suite, all recorded in one workbook with requirements, an RTM and defect reports.',
    link: 'https://github.com/tegargr28/chaligula-qa',
    stats: ['29 API cases executed (28 passed)', '13 manual test cases', '2 defects found', 'Pytest + Playwright automation'],
    tags: ['Manual Testing', 'API Testing', 'Pytest', 'Playwright']
  },
  {
    title: 'Digital Banking QA — ParaBank',
    description:
      'End-to-end QA portfolio on the ParaBank demo: 11 requirements and 13 scenarios traced in an RTM, with manual, API and SQL testing plus Selenium automation running in CI.',
    link: 'https://github.com/tegargr28/digital-banking-qa',
    stats: ['47 test cases executed', '8 defects found (3 Critical)', '4 automated tests in CI'],
    tags: ['Manual Testing', 'Selenium', 'Pytest', 'Postman', 'SQL']
  },
  {
    title: 'SauceDemo — Manual Testing',
    description:
      'Manual testing of the SauceDemo web shop covering Login, Products, Cart, Checkout, Menu and special user personas, with structured test cases and defect reports.',
    link: 'https://github.com/tegargr28/saucedemo-manual-testing',
    stats: ['66 test cases executed', '4 defects reported'],
    tags: ['Manual Testing', 'Test Cases', 'Bug Reports']
  },
  {
    title: 'OrangeHRM — Manual & API Testing',
    description:
      'Test plan, test cases and bug reports for the OrangeHRM demo, including API testing with Postman.',
    link: 'https://github.com/tegargr28/orangehrm-api-testing',
    stats: ['Test plan & test cases', 'API testing with Postman'],
    tags: ['Manual Testing', 'API Testing', 'Postman']
  },
  {
    title: 'OrangeHRM — Cypress Automation',
    description:
      'Automated end-to-end and API tests for OrangeHRM built with Cypress and the Page Object Model, with HTML reports and GitHub Actions CI.',
    link: 'https://github.com/tegargr28/orange-api-testing-automation',
    stats: ['76 automated tests', 'E2E + API coverage', 'CI on every change'],
    tags: ['Cypress', 'Automation', 'Page Object Model', 'GitHub Actions']
  }
]

const webProjects = [
  {
    title: 'CHALIGULA (E-Commerce)',
    description: 'A full-stack e-commerce store I built and deployed myself: a React storefront, an Express and TypeScript API, and a PostgreSQL database. Customers can register, shop and place orders, and the shop has a full admin dashboard for products, categories, orders and users.',
    image: 'project3.webp',
    link: 'https://chaligula.netlify.app',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL']
  },
  {
    title: 'Tiket Web',
    description: 'A web-based ticket booking app featuring user authentication, admin dashboard, and ticket management system.',
    image: 'project1.webp',
    link: 'https://github.com/tegargr28/Tiket-web.git',
    tags: ['Laravel', 'MySQL', 'Tailwind CSS']
  },
  {
    title: 'Rajawali Merah (E-Commerce)',
    description: 'Developed a responsive e-commerce website using Laravel, MySQL, Bootstrap.',
    image: 'project2.webp',
    link: 'https://github.com/tegargr28/Ecommerce-web.git',
    tags: ['Laravel', 'MySQL', 'Bootstrap']
  }
]

const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-2.5 py-1 text-xs font-medium rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
      >
        {tag}
      </span>
    ))}
  </div>
)

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-28 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Quality assurance projects with real executed results, followed by the web development work that came before them.
        </p>

        <h3 className="mt-16 mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Quality Assurance</h3>
        <div className="border-b border-gray-200 dark:border-gray-800">
          {qaProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-[1fr_15rem] gap-4 md:gap-8 py-8 border-t border-gray-200 dark:border-gray-800 px-2 -mx-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {project.title}
                  <FaArrowRight className="text-base text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">{project.description}</p>
                <TagList tags={project.tags} />
              </div>
              <ul className="space-y-1.5 md:text-right">
                {project.stats.map((stat) => (
                  <li key={stat} className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat}</li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        <h3 className="mt-16 mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Web Development</h3>
        <div className="border-b border-gray-200 dark:border-gray-800">
          {webProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid sm:grid-cols-[11rem_1fr] gap-4 md:gap-8 py-8 border-t border-gray-200 dark:border-gray-800 px-2 -mx-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-white/5 transition-colors items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="hidden sm:block w-44 h-28 object-cover rounded-lg ring-1 ring-gray-200 dark:ring-gray-800"
              />
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {project.title}
                  <FaArrowRight className="text-base text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">{project.description}</p>
                <TagList tags={project.tags} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
