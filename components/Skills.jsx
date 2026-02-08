'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', icon: '/icons/html5.svg' },
  { name: 'CSS', icon: '/icons/css1.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },

  { name: 'Flutter', icon: '/icons/flutter.svg' },
  { name: 'Dart', icon: '/icons/dart.svg' },

  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Python', icon: '/icons/python.svg' },

  { name: 'YOLOv8', icon: '/icons/yolo.svg' },
  { name: 'Streamlit', icon: '/icons/streamlit.svg' },

  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'OBS', icon: '/icons/obsstudio.svg' },
  { name: 'Android Studio', icon: '/icons/androidstudio.svg' },

  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Next js', icon: '/icons/nextdotjs.svg' },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        className="skills-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* TITLE */}
        <h2 className="section-title">Skills & Tools</h2>

        <p
          style={{
            textAlign: 'center',
            opacity: 0.7,
            marginTop: '-8px',
            marginBottom: '32px',
          }}
        >
          Teknologi dan tools yang saya gunakan dalam pengembangan aplikasi
        </p>

        {/* GRID */}
        <div className="skills-grid" style={{ justifyItems: 'center' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
