import { motion } from 'motion/react'

const surgir = {
  escondido: { opacity: 0, y: 42 },
  visivel: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Revelar({ children, custom = 0, ...resto }) {
  return (
    <motion.div
      variants={surgir}
      custom={custom}
      initial="escondido"
      whileInView="visivel"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      {...resto}
    >
      {children}
    </motion.div>
  )
}
