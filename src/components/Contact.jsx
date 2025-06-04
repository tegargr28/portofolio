import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-blue-50 dark:bg-gray-900 transition-colors duration-300 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-blue-300">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-400 mb-10">
        I'm always open to discuss new opportunities, freelance projects, or collaboration ideas. Feel free to reach out!
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div 
          className="rounded-xl shadow-lg p-8 space-y-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-4">
            <FiMail className="text-xl text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
              <p className="text-gray-700 dark:text-gray-300">tegargemilangrasidi28@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiMapPin className="text-xl text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
              <p className="text-gray-700 dark:text-gray-300">Karawang, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiPhone className="text-xl text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
              <p className="text-gray-700 dark:text-gray-300">(+62) 89529******</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="rounded-xl shadow-lg p-8 space-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <input id="contact-name" type="text" placeholder="Your Name" className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-transparent dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
          <input id="contact-email" type="email" placeholder="Your Email" className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-transparent dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
          <textarea id="contact-message" rows="5" placeholder="Your Message" className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-transparent dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
          <motion.button
            onClick={() => {
              const name = document.querySelector('#contact-name').value
              const email = document.querySelector('#contact-email').value
              const message = document.querySelector('#contact-message').value
              const mailtoLink = `mailto:tegargemilangrasidi28@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`
              window.location.href = mailtoLink
            }}
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
