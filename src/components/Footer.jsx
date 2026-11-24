import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  const socials = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-tegar-gemilang-rasidi-6095b3138/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/tegargr28', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/tegargemilang', label: 'Twitter' },
  ]
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Tegar Gemilang<span className="text-blue-600 dark:text-blue-400">.</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              QA Engineer &amp; Web Developer — Karawang, Indonesia
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 select-none pointer-events-none" aria-hidden="true">
        <p className="text-center font-extrabold tracking-tight leading-[0.85] text-gray-200 dark:text-white/10 text-[13.5vw]">
          TEGAR&nbsp;GEMILANG
        </p>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-400 px-6">
        © {year} Muhammad Tegar Gemilang Rasidi. Built with React, Vite and Tailwind CSS. Design inspired by FolioOne by BootstrapMade.
      </div>
    </footer>
  )
}

export default Footer
