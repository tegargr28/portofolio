import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFileDownload
} from 'react-icons/fa'

const Hero = () => {
  const [index, setIndex] = useState(0)

  const texts = [
    "Passionate about crafting elegant digital experiences.",
    "I transform ideas into beautiful, functional web solutions.",
    "Lover of clean code and seamless interfaces.",
    "Always curious to learn and grow through technology."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: "https://www.linkedin.com/in/muhammad-tegar-gemilang-rasidi-6095b3138/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: "https://github.com/Tegarg28",
      color: "text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: "https://twitter.com/tegargemilang",
      color: "text-sky-500 hover:text-sky-600"
    }
  ]

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center py-28 relative scroll-mt-20"
    >

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 max-w-6xl">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white dark:bg-white/5 border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Open to QA Engineer opportunities
            </span>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Tegar Gemilang
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              QA Engineer &amp; Web Developer
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-lg mb-10 text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 min-h-[3.5rem]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {texts[index]}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="#projects"
              className="inline-block px-7 py-3
                bg-gray-900 dark:bg-white
                text-white dark:text-gray-900
                rounded-lg
                hover:bg-gray-700 dark:hover:bg-gray-200
                transition-colors
                font-semibold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>

            <motion.a
              href="/CV_TegarGemilangRasidi_QA.pdf"
              download
              className="inline-block px-7 py-3
                border border-gray-400 dark:border-gray-600
                text-gray-800 dark:text-gray-200
                rounded-lg
                hover:bg-gray-100 dark:hover:bg-white/10
                transition-colors
                font-semibold
                flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 flex justify-center lg:justify-start space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-2xl ${social.color} transition-all`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-96
              overflow-hidden rounded-2xl
              ring-1 ring-gray-200 dark:ring-gray-800
              transform hover:scale-[1.02] transition-transform"
            transition={{ duration: 0.3 }}
          >
            <img
              src="tegar.webp"
              alt="Tegar Gemilang"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
