'use client'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="section">
      <motion.div
        className="edu-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">Education & Organization</h2>

        <div className="edu-grid">
          {/* ===== PENDIDIKAN ===== */}
          <div className="edu-card">
            <h3>🎓 Pendidikan</h3>

            <div className="edu-item">
              <span className="edu-year">2023 – Sekarang</span>
              <h4>S1 Ilmu Komputer</h4>
              <p>Universitas Muhammadiyah Bangka Belitung</p>
              <p className="edu-desc">
                Fokus pada pemrograman, pengembangan aplikasi,
                AI, dan UI/UX Design.
              </p>
            </div>
          </div>

          {/* ===== ORGANISASI ===== */}
          <div className="edu-card">
            <h3>🏢 Organisasi Aktif</h3>

            <div className="edu-item">
              <span className="edu-year">2024 – Sekarang</span>
              <h4>• HIMIK (Himpunan Mahasiswa Ilmu Komputer)</h4>
              <p>Sebagai: Bendahara</p>
              <p className="edu-desc">
                Aktif dalam kegiatan organisasi, pengelolaan
                administrasi, serta kolaborasi event kampus.
              </p>
                <h4>• RTIK (Relawan Teknologi Informasi dan Ilmu Komputer)</h4>
                 <p>Sebagai: Anggota</p>
              <p className="edu-desc">
                Aktif dalam mengikuti setiap kegiatan organisasi
              </p>                 
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}