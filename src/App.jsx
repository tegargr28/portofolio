// ✅ App.jsx (struktur utama)
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#faf8f3] dark:bg-[#1a1a1a] text-[#4e3f30] dark:text-gray-200 transition-colors duration-500"></div>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default App