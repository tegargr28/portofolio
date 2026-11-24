import React, { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
  const inputClass =
    'w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-transparent dark:bg-white/5 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all'
  const labelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 text-left'

  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', {
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

  const infoItems = [
    {
      icon: FiMail,
      label: 'Email',
      content: (
        <a href="mailto:tegargemilangrasidi28@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 break-all">
          tegargemilangrasidi28@gmail.com
        </a>
      )
    },
    { icon: FiMapPin, label: 'Location', content: <span>Karawang, Indonesia</span> },
    { icon: FiPhone, label: 'Phone', content: <span>(+62) 89529******</span> }
  ]

  return (
    <section id="contact" className="py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          I'm always open to discuss new opportunities, freelance projects, or collaboration ideas. Feel free to reach out!
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {infoItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="text-xl text-blue-600 dark:text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500">{item.label}</p>
                <div className="text-gray-800 dark:text-gray-200 font-medium">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-12 max-w-3xl rounded-2xl p-8 space-y-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800"
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
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition disabled:opacity-60"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
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
