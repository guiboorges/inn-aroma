import { motion, useTransform } from 'motion/react'

// posições determinísticas para as bolhas de névoa
const BOLHAS = Array.from({ length: 9 }, (_, i) => {
  const t = (i * 137.5) % 100
  return {
    esquerda: t,
    topo: (i * 41) % 70,
    tamanho: 24 + ((i * 53) % 34),
    atraso: (i % 4) * 0.06,
  }
})

// Névoa do difusor: cai sobre o ecrã no limiar entre duas famílias,
// cobrindo a saída de uma e revelando a seguinte.
export default function Mist({ fronteira, largura, cor, acento, progresso }) {
  // keyframes estendidos até [0,1] — o binding WAAPI de scroll exige cobertura total
  const opacidade = useTransform(
    progresso,
    [0, fronteira - largura, fronteira, fronteira + largura, 1],
    [0, 0, 1, 0, 0],
  )
  const queda = useTransform(
    progresso,
    [0, fronteira - largura, fronteira + largura, 1],
    ['-58%', '-58%', '30%', '30%'],
  )

  return (
    <motion.div className="nevoa" style={{ opacity: opacidade, y: queda }} aria-hidden="true">
      {BOLHAS.map((b, i) => (
        <div
          key={i}
          className="nevoa-bolha"
          style={{
            left: `${b.esquerda}%`,
            top: `${b.topo + b.atraso * 100}%`,
            width: `${b.tamanho}vw`,
            height: `${b.tamanho * 0.72}vw`,
            background:
              i % 3 === 0
                ? `radial-gradient(circle, ${acento}33 0%, ${cor}00 70%)`
                : `radial-gradient(circle, ${cor}ee 0%, ${cor}00 70%)`,
          }}
        />
      ))}
      <div
        className="nevoa-bolha"
        style={{
          left: '-10%',
          top: '10%',
          width: '120%',
          height: '60%',
          borderRadius: '40%',
          background: `linear-gradient(to bottom, ${cor}f2 20%, ${cor}00 100%)`,
        }}
      />
    </motion.div>
  )
}
