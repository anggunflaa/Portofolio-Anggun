'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden">

      {/* FOTO */}
      <motion.div
        className="hero-photo relative z-10"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src="/profile.png" alt="Anggun" />
      </motion.div>

      {/* TEXT DEPAN */}
      <h1 className="relative z-10">
        Hi, I’m <span>Anggun</span>
      </h1>

      <div className="hero-divider relative z-10"></div>

      <p className="hero-sub relative z-10">
        Front end Developer • Flutter Developer • UI/UX Designer
      </p>
      {/* === BACKGROUND MOVING TEXT === */}
      <div className="hero-text-wrap">
        <div className="hero-marquee hero-marquee-right">
          <span>Hi, I’m Hi, I’m Hi, I’m Hi, I’m Hi, I’m</span>
        </div>
        <div className="hero-marquee hero-marquee-left">
          <span>Anggun Anggun Anggun Anggun Anggun</span>
        </div>
      </div>

      {/* === TOMBOL PREMIUM === */}
      <motion.a
        href="#projects"
        className="btn-primary premium-btn relative z-10"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 420, damping: 20 }}
      >
        <span>View Projects</span>
      </motion.a>

    </section>
  )
}
