'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Participation from "@/components/Participation"
import Education from '../components/Education & Organization';
export default function Home() {

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      document.documentElement.style.setProperty('--mx', `${x}%`)
      document.documentElement.style.setProperty('--my', `${y}%`)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Participation />
      <Footer />
    </>
  )
}
