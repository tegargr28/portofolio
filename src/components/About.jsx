import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaLaravel } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
  const iconVariants = {
    hover: { 
      scale: 1.2, 
      color: "#3B82F6",
      textShadow: "0 0 8px rgba(59, 130, 246, 0.7)"
    }
  }

  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-blue-50 dark:bg-gray-900 transition-colors duration-300 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-blue-300">About Me</h2>
      <p className="mb-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        I'm Tegar Gemilang, a frontend developer with a strong passion for UI/UX and modern web technologies. I enjoy transforming complex problems into intuitive and beautiful digital experiences. With a degree in Informatics Engineering and experience in both freelance and internship roles, I’ve built responsive interfaces using React, Tailwind CSS, and Laravel. <br /><br />
      </p>

      <motion.div 
        className="rounded-xl shadow-md p-8 max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-blue-300">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8 text-4xl text-gray-700 dark:text-gray-400">
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaHtml5 title="HTML5" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaCss3Alt title="CSS3" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaJs title="JavaScript" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaReact title="React" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><SiTailwindcss title="Tailwind CSS" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaGitAlt title="Git" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaFigma title="Figma" /></motion.div>
          <motion.div variants={iconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}><FaLaravel title="Laravel" /></motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About
