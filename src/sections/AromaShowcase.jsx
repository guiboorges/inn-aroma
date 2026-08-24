import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import { aromas } from '../data/aromas.js'
import Mist from '../components/Mist.jsx'

const N = aromas.length

// janela de visibilidade da família i dentro do progresso global [0,1].
// Nota: o Motion converte estes keyframes em offsets WAAPI, que têm de ser
// estritamente crescentes e ficar dentro de [0,1].
function janela(i) {
  const inicio = i / N
  const fim = (i + 1) / N
  const margem = 0.28 / N
  return {
    entrada: i === 0 ? 0 : inicio + margem * 0.2,
    cheiaIn: i === 0 ? 0.001 : inicio + margem,
    cheiaOut: i === N - 1 ? 0.999 : fim - margem,
    saida: i === N - 1 ? 1 : fim - margem * 0.2,
  }
}

// estende os keyframes até cobrirem todo o [0,1], repetindo o valor das pontas.
// O binding WAAPI de animações de scroll exige cobertura total do intervalo —
// sem isto, a animação da família não se aplica fora da sua janela e ela
// fica presa visível por cima das seguintes.
function cobrir(entradas, valores) {
  const e = [...entradas]
  const v = [...valores]
  if (e[0] > 0) {
    e.unshift(0)
    v.unshift(v[0])
  }
  if (e[e.length - 1] < 1) {
    e.push(1)
    v.push(v[v.length - 1])
  }
  return [e, v]
}

// comprimento da palavra mais longa do nome (é ela que não pode ser quebrada)
function maisLonga(nome) {
  return Math.max(...nome.split(' ').map((p) => p.length))
}

function Familia({ aroma, i, progresso }) {
  const { entrada, cheiaIn, cheiaOut, saida } = janela(i)
  // a primeira família já está visível durante a revelação da cortina de fumo
  const inicial = i === 0

  const opacidade = useTransform(
    progresso,
    ...cobrir([entrada, cheiaIn, cheiaOut, saida], [inicial ? 1 : 0, 1, 1, 0]),
  )
  const yTexto = useTransform(
    progresso,
    ...cobrir([entrada, cheiaIn, cheiaOut, saida], [inicial ? 0 : 64, 0, 0, -64]),
  )
  const yImagem = useTransform(
    progresso,
    ...cobrir([entrada, saida], [inicial ? '0%' : '10%', '-10%']),
  )
  const escala = useTransform(
    progresso,
    ...cobrir([entrada, cheiaIn, saida], [inicial ? 1 : 1.08, 1, 0.98]),
  )
  const yNome = useTransform(
    progresso,
    ...cobrir([entrada, cheiaIn, cheiaOut, saida], [inicial ? 0 : 110, 0, 0, -90]),
  )

  return (
    <motion.article
      className="familia"
      style={{ opacity: opacidade, pointerEvents: 'none' }}
      aria-label={aroma.nome}
    >
      <motion.div className="familia-info" style={{ y: yTexto }}>
        <p className="familia-numero" style={{ color: aroma.acento }}>
          {aroma.numero} — Aromas
        </p>
        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            className="titulo-gigante familia-nome"
            style={{
              y: yNome,
              color: aroma.acento,
              // o vw trava o tamanho em ecrãs estreitos; o teto em px garante que
              // a palavra mais longa cabe na coluna de texto (max-width 34rem),
              // que não cresce com o viewport — sem ele, "Amadeirados" era
              // cortado pelo overflow:hidden em ecrãs largos
              fontSize: `clamp(2.2rem, min(${Math.min(
                7.2,
                44 / maisLonga(aroma.nome),
              )}vw, ${Math.round(544 / (maisLonga(aroma.nome) * 0.82))}px), 6.4rem)`,
            }}
          >
            {aroma.nome}
          </motion.h2>
        </div>
        <p className="familia-descricao">{aroma.descricao}</p>
        <p className="familia-ambiente">{aroma.ambiente}</p>
        <ul className="familia-notas" style={{ color: aroma.acento }}>
          {aroma.notas.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="familia-produto">
          Em destaque · <strong>{aroma.produto}</strong>
        </p>
      </motion.div>

      <motion.figure className="familia-figura" style={{ y: yImagem, scale: escala }}>
        <img src={aroma.imagem} alt={aroma.produto} loading={i === 0 ? 'eager' : 'lazy'} />
      </motion.figure>

      <span className="familia-nome-fantasma" style={{ color: aroma.acento }}>
        {aroma.nome}
      </span>
    </motion.article>
  )
}

export default function AromaShowcase() {
  const alvo = useRef(null)
  const [ativo, setAtivo] = useState(0)
  const { scrollYProgress } = useScroll({ target: alvo, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setAtivo(Math.min(N - 1, Math.max(0, Math.floor(v * N))))
  })

  // fundo interpola entre as tintas de cada família
  const paragens = aromas.map((_, i) => (i + 0.5) / N)
  const fundo = useTransform(
    scrollYProgress,
    [0, ...paragens, 1],
    ['#faf8f4', ...aromas.map((a) => a.tinta), aromas[N - 1].tinta],
  )

  return (
    <section ref={alvo} className="showcase" style={{ height: `${N * 130}vh` }}>
      <motion.div className="showcase-viewport" style={{ backgroundColor: fundo }}>
        {aromas.map((a, i) => (
          <Familia key={a.id} aroma={a} i={i} progresso={scrollYProgress} />
        ))}

        {aromas.slice(1).map((a, i) => (
          <Mist
            key={a.id}
            fronteira={(i + 1) / N}
            largura={0.4 / N}
            cor={a.tintaForte}
            acento={a.acento}
            progresso={scrollYProgress}
          />
        ))}

        <nav className="rail" aria-label="Progresso dos aromas">
          {aromas.map((a, i) => (
            <span
              key={a.id}
              className={i === ativo ? 'ativo' : ''}
              style={i === ativo ? { background: a.acento } : undefined}
            />
          ))}
        </nav>
      </motion.div>
    </section>
  )
}
