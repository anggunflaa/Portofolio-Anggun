'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ================= ANIMATION ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      src: '/certificates/1.jpg',
      title: 'Blender 3D Design',
      description:
        'Peserta Seminar dan Pelatihan "Membuat Objek Basic 3D Design Menggunakan Software Blender 3.6"',
    },
    {
      id: 2,
      src: '/certificates/2.jpg',
      title: 'Participation',
      description:
        '',
    },
    {
      id: 3,
      src: '/certificates/3.jpg',
      title: 'UI/UX Design',
      description:
        'Sertifikat Lomba dan Proyek UI/UX Design',
    },
    {
      id: 4,
      src: '/certificates/4.jpg',
      title: 'Participation',
    },
        {
      id: 5,
      src: '/certificates/5.jpg',
      title: 'Participation',
    },
  ];

  return (
    <section id="certificates" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Sertifikat
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="cert-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.src}
              alt={cert.title}
              loading="lazy"
            />
            <p>{cert.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(12px)',
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 60 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              style={{
                maxWidth: '900px',
                width: '90%',
                maxHeight: '90vh',
                background: '#0f0f1a',
                borderRadius: '20px',
                padding: '20px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '18px',
                  fontSize: '36px',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label="Close"
              >
                ×
              </button>

              {/* IMAGE */}
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '14px',
                }}
              />

              {/* TEXT */}
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>
                  {selectedCert.title}
                </h3>
                <p style={{ fontSize: '14px', opacity: 0.85 }}>
                  {selectedCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
