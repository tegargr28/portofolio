import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {}
  }, [dark])

  const toggleMenu = () => setOpen(!open)
  const toggleDarkMode = () => setDark((prev) => !prev)

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  const navClass =
    'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-colors duration-300'

  const themeButton = (
    <button
      onClick={toggleDarkMode}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-800/80 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <a href="#home" className="flex items-baseline gap-2 text-gray-900 dark:text-white">
          <span className="text-xl font-extrabold tracking-tight">TG<span className="text-blue-600 dark:text-blue-400">.</span></span>
          <span className="hidden sm:inline text-sm font-medium text-gray-500 dark:text-gray-400">Tegar Gemilang</span>
        </a>
        <div className="md:hidden flex items-center gap-3">
          {themeButton}
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-gray-800 dark:text-gray-100">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={navClass}>
              {link.label}
            </a>
          ))}
          <a
            href="/CV_TegarGemilangRasidi_QA.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition"
          >
            <FiDownload /> CV
          </a>
          {themeButton}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] px-6 pb-4 border-t border-gray-100 dark:border-gray-800">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-800 dark:text-gray-100 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV_TegarGemilangRasidi_QA.pdf"
            download
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
