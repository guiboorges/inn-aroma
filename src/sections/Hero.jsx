import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import DiffuserScene from '../components/DiffuserScene.jsx'

const NOME = 'INN AROMA'

const letra = {
  escondida: { y: '110%', opacity: 0 },
  visivel: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, delay: 0.25 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
  }),
}

// bolhas do nevoeiro de ecrã inteiro (posições determinísticas)
const BOLHAS_FUMO = Array.from({ length: 16 }, (_, i) => ({
  esquerda: (i * 137.5) % 100,
  topo: (i * 43) % 85,
  tamanho: 34 + ((i * 53) % 52),
  dur: 9 + (i % 5) * 3,
  densa: i % 3 !== 0,
  inversa: i % 2 === 1,
}))

export default function Hero() {
  const alvo = useRef(null)
  const { scrollYProgress } = useScroll({ target: alvo, offset: ['start start', 'end end'] })

  // o texto sai primeiro, depois o fumo domina o ecrã
  // (keyframes cobrem todo o [0,1] — necessário para o binding WAAPI de scroll)
  const opacidadeTexto = useTransform(scrollYProgress, [0, 0.04, 0.38, 1], [1, 1, 0, 0])
  const yTexto = useTransform(scrollYProgress, [0, 0.04, 0.38, 1], [0, 0, -90, -90])
  const opacidadePista = useTransform(scrollYProgress, [0, 0.02, 0.12, 1], [1, 1, 0, 0])
  const opacidadeFumo = useTransform(scrollYProgress, [0, 0.18, 0.68, 1], [0, 0, 1, 1])

  return (
    <section ref={alvo} className="hero">
      <div className="hero-sticky">
        <motion.div
          className="hero-3d"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.2 }}
        >
          <DiffuserScene boost={scrollYProgress} />
        </motion.div>

        <motion.div className="hero-conteudo" style={{ opacity: opacidadeTexto, y: yTexto }}>
          <motion.p
            className="rotulo hero-rotulo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Marketing olfativo · Portugal
          </motion.p>

          <h1 className="titulo-gigante hero-nome" aria-label={NOME}>
            {NOME.split('').map((c, i) => (
              <span
                key={i}
                style={{ overflow: 'hidden', display: 'inline-block' }}
                aria-hidden="true"
              >
                <motion.span
                  style={{ display: 'inline-block' }}
                  custom={i}
                  initial="escondida"
                  animate="visivel"
                  variants={letra}
                >
                  {c === ' ' ? ' ' : c}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="hero-pontos" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: [0, 1, 1], y: 0 }}
                transition={{ duration: 0.8, delay: 1.15 + i * 0.18, ease: 'easeOut' }}
              />
            ))}
          </div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Aromas que marcam
          </motion.p>

          <motion.p
            className="hero-texto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Desde o TagusPark, em Oeiras, a INN AROMA cria assinaturas olfativas para hotéis,
            empresas, eventos e para a sua casa. Difusores, fragrâncias exclusivas e a convicção
            de que um aroma certo transforma um espaço numa memória.
          </motion.p>
        </motion.div>

        {/* nevoeiro que domina o ecrã até à secção seguinte */}
        <motion.div className="hero-fumo" aria-hidden="true" style={{ opacity: opacidadeFumo }}>
          {BOLHAS_FUMO.map((b, i) => (
            <span
              key={i}
              className={b.densa ? 'fumo-denso' : 'fumo-leve'}
              style={{
                left: `${b.esquerda}%`,
                top: `${b.topo}%`,
                width: `${b.tamanho}vw`,
                height: `${b.tamanho * 0.7}vw`,
                animationDuration: `${b.dur}s`,
                animationDelay: `${-i * 1.7}s`,
                animationDirection: b.inversa ? 'reverse' : 'normal',
              }}
            />
          ))}
          <i className="hero-fumo-base" />
        </motion.div>

        <motion.div className="hero-scroll" style={{ opacity: opacidadePista }}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            <span className="rotulo">Descer</span>
            <span className="hero-scroll-linha" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
