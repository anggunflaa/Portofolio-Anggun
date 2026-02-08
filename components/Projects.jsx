"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= DATA ================= */
const projects = [
  {
    title: "AI Skin Detection",
    type: "Exploration",
    description:
      "Perancangan Aplikasi Deteksi Masalah Kulit Wajah dan Rekomendasi Produk Cetaphil Menggunakan Artificial Intelligence",
    tech: "Flutter · YOLO · AI · Android Studio · Colab · Dart",
    image: "/projects/apk.jpeg",
    link: "https://youtu.be/LxjN8O4vkU0?si=-PeYw-67_4nU47WX",
  },
  {
    title: "Aplikasi Quiz Mobile",
    type: "Course Project",
    description:
      "Computer vision system to determine suitable makeup shades based on skin tone.",
    tech: "Flutter · AI · Android Studio · Mobile · Dart",
    image: "/projects/quiz.jpg",
    link: "https://www.youtube.com/watch?v=m916Jz0iIKg",
  },
  {
    title: "AI Dashboard Chatbot",
    type: "Experiment",
    description:
      "Prediksi harga mobil menggunakan API Gemini, deploy dengan Streamlit.",
    tech: "Streamlit · Python · Git · GitHub",
    image: "/projects/chatbot.png",
    link: "https://mata-kuliah-pemrograman-sistem-cerdas-gp6t9afqypql3ncwv844cv.streamlit.app/",
  },
  {
    title: "UI/UX Design",
    type: "Lomba",
    description:
      "Aplikasi jual beli barang bekas anak kost dengan fitur cerita suatu barang",
    tech: "Figma · Prototype",
    image: "/projects/3.png",
    link: "https://www.figma.com/design/h2FFDay3pLCJHGSLZPYN3g/Project-Lomba-Anggun",
  },
];

/* ================= ANIMATION ================= */
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */
export default function Projects() {
  const sliderRef = useRef(null);
  const observerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const debounce = (fn, delay) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  };

  const updateActiveIndex = debounce(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, projects.length - 1)));
  }, 100);

  const scrollToIndex = (i) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: i * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updateActiveIndex);
    window.addEventListener("resize", updateActiveIndex);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            setActiveIndex(Number(e.target.dataset.index));
          }
        });
      },
      { root: slider, threshold: 0.6 }
    );

    slider.querySelectorAll(".project-card").forEach((card, i) => {
      card.dataset.index = i;
      observerRef.current.observe(card);
    });

    return () => {
      slider.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="section">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariant}
      >
        <h2 className="section-title">Projects</h2>

        <div className="projects-slider" ref={sliderRef}>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="project-card"
                variants={cardVariant}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="project-image">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="project-img"
                    sizes="(max-width: 768px) 90vw, 33vw"
                    priority={i === 0}
                  />
                </div>

                <div className="project-content">
                  <span className="project-type">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <p className="project-tech">{p.tech}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View details →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="projects-dots">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
