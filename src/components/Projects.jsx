import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Tiket Web',
    description: 'A web-based ticket booking app featuring user authentication, admin dashboard, and ticket management system.',
    image: 'project1.png',
    link: 'https://github.com/tegargr28/Tiket-web.git'
  },
  {
    title: 'Rajawali Merah (E-Commerce)',
    description: 'Developed a responsive e-commerce website using Laravel, MySQL, Bootstrap.',
    image: 'project2.jpeg',
    link: 'https://github.com/tegargr28/Ecommerce-web.git'
  }
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 px-4 text-center bg-blue-50 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-blue-300">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-shadow duration-300"
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <motion.a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
