'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about-split">

        {/* FOTO */}
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/saya.jpg" alt="Anggun" />
        </motion.div>

        {/* ISI */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Tentang Saya</h2>

          <div className="about-badge">
            <span>🎓 Mahasiswa IT</span>
            <span>⏳ 2,5+ Tahun Belajar</span>
            <span>📱 Flutter & AI</span>
          </div>

<p>
  Halo, saya <span>Anggun</span>, seorang mahasiswa IT yang berfokus pada
  <strong> UI/UX Design</strong>, <strong>Front-End Development</strong>, serta
  <strong> pengembangan website dan aplikasi mobile</strong> menggunakan
  Flutter. Selama kurang lebih <strong>2,5 tahun</strong>, saya aktif
  mengeksplorasi bagaimana desain antarmuka dan kode dapat berpadu untuk
  menciptakan pengalaman pengguna yang menarik dan mudah digunakan.
</p>

<p>
  Selama masa studi, saya telah mengerjakan berbagai
  <strong> tugas perkuliahan</strong>, proyek pribadi, dan pengembangan aplikasi
  skala kecil berbasis web maupun mobile. Teknologi yang saya gunakan meliputi
  <strong> HTML, CSS, JavaScript</strong>, serta <strong>Flutter</strong>, dengan
  fokus pada pembuatan tampilan yang responsif, modern, dan konsisten di berbagai
  perangkat.
</p>

<p>
  Saya menikmati proses mengubah ide dan desain menjadi antarmuka yang
  fungsional, mulai dari penyusunan layout, pemilihan warna dan tipografi, hingga
  implementasi interaksi pada sisi front-end. Portofolio ini menampilkan hasil
  pengembangan website, desain UI/UX, serta aplikasi mobile Flutter yang saya
  kerjakan sebagai bagian dari perjalanan belajar dan pengembangan diri saya di
  bidang teknologi informasi.
</p>

        </motion.div>

      </div>
    </section>
  )
}
