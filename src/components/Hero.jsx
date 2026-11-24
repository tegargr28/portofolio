import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaFileDownload, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: "https://www.linkedin.com/in/muhammad-tegar-gemilang-rasidi-6095b3138/",
      color: "text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: "https://github.com/Tegarg28",
      color: "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: "https://twitter.com/tegargemilang",
      color: "text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
    }
  ]

  return (
    <section id="home" className="w-full pt-36 pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-14 lg:gap-10">
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white">
            Quality first,
            <br />
            <span className="text-gray-400 dark:text-gray-500">in every release.</span>
          </p>
          <h1 className="mt-10 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Tegar Gemilang
            <span className="block mt-1 text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400">
              QA Engineer &amp; Web Developer
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl">
            Informatics Engineering graduate focused on Quality Assurance: designing and executing test cases,
            reporting defects, and automating key flows with Selenium, Pytest and Cypress — backed by a web
            development background that helps me understand how defects arise.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              className="inline-block px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See My Work
            </motion.a>
            <motion.a
              href="/CV_TegarGemilangRasidi_QA.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaFileDownload /> Download CV
            </motion.a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" /> Karawang, Indonesia
            </span>
            <span className="inline-flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open to QA Engineer opportunities
            </span>
            <span className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-xl ${social.color} transition-colors`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="shrink-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="w-64 sm:w-72 xl:w-80">
            <img
              src="tegar.webp"
              alt="Tegar Gemilang"
              className="w-full h-[26rem] object-cover object-center rounded-xl ring-1 ring-gray-200 dark:ring-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
