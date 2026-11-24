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
    }, 4000) // Ganti kalimat setiap 4 detik
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-tegar-gemilang-rasidi-6095b3138/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Tegarg28",
      color: "text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/tegargemilang",
      color: "text-sky-500 hover:text-sky-600"
    }
  ]

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center 
        bg-gradient-to-br from-blue-50 to-sky-100 
        dark:bg-gradient-to-br dark:from-slate-900 dark:to-gray-900 
        py-16 relative"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 
            bg-blue-200 dark:bg-blue-900 
            rounded-full opacity-20 dark:opacity-10"
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 
            bg-sky-200 dark:bg-sky-900 
            rounded-full opacity-15 dark:opacity-10"
        ></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
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
            <p className="text-lg text-blue-800 dark:text-gray-300">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-white">
              Tegar Gemilang
            </h1>
            <h2 className="text-2xl mb-6 text-blue-800 dark:text-blue-300">
              Creative Developer & UI Designer
            </h2>
          </motion.div>

          {/* Bio Dinamis */}
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="text-lg mb-6 text-blue-800 dark:text-blue-200 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {texts[index]}
            </motion.p>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href="#projects"
              className="inline-block px-6 py-3 
                bg-blue-600 dark:bg-blue-700 
                text-white 
                rounded-full 
                hover:bg-blue-700 dark:hover:bg-blue-600 
                transition-colors 
                shadow-md hover:shadow-lg 
                dark:shadow-blue-900/50 
                flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>

            <motion.a
              href="/CV_TegarGemilangRasidi_QA.pdf"
              download
              className="inline-block px-6 py-3 
                border border-blue-600 dark:border-blue-400
                text-blue-600 dark:text-blue-300
                rounded-full 
                hover:bg-blue-50 dark:hover:bg-gray-800
                transition-colors 
                flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 flex justify-center lg:justify-start space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${social.color} transition-all`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-96 
              overflow-hidden rounded-xl 
              shadow-xl hover:shadow-2xl 
              transition-shadow 
              border-4 border-white 
              dark:border-gray-800
              transform hover:scale-105"
            whileHover={{
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)"
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="tegar.jpg"
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
