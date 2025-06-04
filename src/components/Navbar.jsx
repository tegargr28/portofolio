import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const navClass = "text-gray-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Tegarg28</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className={navClass}>Home</a>
          <a href="#about" className={navClass}>About Me</a>
          <a href="#education" className={navClass}>Experience</a>
          <a href="#projects" className={navClass}>Projects</a>
          <a href="#contact" className={navClass}>Contact</a>
          <button onClick={toggleDarkMode} className="text-sm px-3 py-1 border border-gray-400 dark:border-blue-500 rounded hover:bg-gray-100 dark:hover:bg-blue-800 dark:text-blue-400 dark:hover:text-white transition">Toggle Mode</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 pb-4">
          <a href="#home" className="block py-2" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="block py-2" onClick={() => setOpen(false)}>About Me</a>
          <a href="#education" className="block py-2" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" className="block py-2" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="block py-2" onClick={() => setOpen(false)}>Contact</a>
          <button onClick={toggleDarkMode} className="mt-2 w-full text-left px-3 py-1 border border-gray-400 dark:border-blue-500 rounded hover:bg-gray-100 dark:hover:bg-blue-900 dark:text-blue-400 dark:hover:text-white transition">Toggle Mode</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
