'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* ANIMATION VARIANTS */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Participation() {
  const photos = [
    {
      src: '/participation/1.jpg',
      title: 'Agency',
      desc: 'Health Talk',
    },
    {
      src: '/participation/2.jpg',
      title: 'Malam Keakraban',
      desc: 'Panitia Makrab',
    },
    {
      src: '/participation/3.jpeg',
      title: 'Organisasi HIMIK',
      desc: 'Sebagai Bendahara',
    },
    {
      src: '/participation/rtik.jpeg',
      title: 'Organisasi RTIK',
      desc: 'Sebagai Anggota',
    },
  ];

  return (
    <section className="section" id="participation">
      <motion.div
        className="participation-wrapper"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITLE */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Participation
        </motion.h2>

        {/* GALLERY */}
        <div className="participation-gallery">
          {photos.map((itemData, i) => (
            <motion.div
              key={i}
              className="participation-photo"
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Image
                src={itemData.src}
                alt={itemData.title}
                fill
                sizes="(max-width: 768px) 90vw, 33vw"
                className="photo-img"
                priority={i === 0}
              />

              {/* OVERLAY */}
              <div className="photo-overlay">
                <h3>{itemData.title}</h3>
                <p>{itemData.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
