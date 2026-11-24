import React, { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
  const inputClass =
    'w-full border border-gray-300 dark:border-gray-700 p-3 rounded-md bg-transparent dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all'
  const labelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 text-left'

  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...fields }).toString()
      })
      if (response.ok) {
        setStatus('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-blue-50 dark:bg-gray-900 transition-colors duration-300 scroll-mt-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 text-center">Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-blue-300">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-400 mb-12">
        I'm always open to discuss new opportunities, freelance projects, or collaboration ideas. Feel free to reach out!
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          className="rounded-2xl shadow-lg p-8 space-y-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-fit"
          whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-4">
            <FiMail className="text-xl text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
              <a href="mailto:tegargemilangrasidi28@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 break-all">
                tegargemilangrasidi28@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiMapPin className="text-xl text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
              <p className="text-gray-700 dark:text-gray-300">Karawang, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FiPhone className="text-xl text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
              <p className="text-gray-700 dark:text-gray-300">(+62) 89529******</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="rounded-2xl shadow-lg p-8 space-y-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          whileHover={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label htmlFor="contact-name" className={labelClass}>Your Name</label>
            <input id="contact-name" name="name" type="text" required placeholder="Your Name" value={fields.name} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>Your Email</label>
            <input id="contact-email" name="email" type="email" required placeholder="Your Email" value={fields.email} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>Your Message</label>
            <textarea id="contact-message" name="message" rows="5" required placeholder="Your Message" value={fields.message} onChange={handleChange} className={inputClass} />
          </div>
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition disabled:opacity-60"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </motion.button>
          {status === 'success' && (
            <p className="text-sm font-medium text-green-600 dark:text-green-400" role="status">
              Thank you! Your message has been sent. I will get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
              Sorry, the message could not be sent. Please email me directly at tegargemilangrasidi28@gmail.com.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
