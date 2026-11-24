import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
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
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={index}
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-300 border border-blue-100 dark:border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaGithub /> View project →
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
