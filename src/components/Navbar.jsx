import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#education', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const navClass =
    'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-colors duration-300'

  const themeButton = (
    <button
      onClick={toggleDarkMode}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200/70 dark:border-gray-800/80 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <a href="#home" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tegar Gemilang<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>
        <div className="md:hidden flex items-center gap-3">
          {themeButton}
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-gray-800 dark:text-gray-100">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={navClass}>
              {link.label}
            </a>
          ))}
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
        </div>
      )}
    </nav>
  )
}

export default Navbar
