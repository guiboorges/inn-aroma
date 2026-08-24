import { useEffect } from 'react'
import { aromas } from '../data/aromas.js'
import Revelar from '../components/Revelar.jsx'
import Rodape from '../components/Rodape.jsx'

export default function Aromas() {
  useEffect(() => {
    const anterior = document.title
    document.title = 'Aromas · INN AROMA'
    return () => {
      document.title = anterior
    }
  }, [])

  return (
    <>
      {/* topo editorial */}
      <section className="pagina-topo">
        <span className="pagina-fantasma" aria-hidden="true">
          Aromas
        </span>
        <div className="bloco">
          <Revelar>
            <p className="rotulo bloco-rotulo">Os nossos aromas</p>
          </Revelar>
          <Revelar custom={1}>
            <h1 className="titulo-gigante pagina-titulo">
              Sete famílias,
              <br />
              uma assinatura.
            </h1>
          </Revelar>
          <Revelar custom={2}>
            <p className="declaracao pagina-declaracao">
              Cada espaço pede um carácter. Percorra a carta e encontre a família que vai
              ficar na memória de quem <em>entra</em>.
            </p>
          </Revelar>

          {/* índice da carta */}
          <Revelar custom={3}>
            <nav className="carta-indice" aria-label="Índice de famílias">
              {aromas.map((a) => (
                <a key={a.id} href={`#${a.id}`} style={{ '--realce': a.acento }}>
                  <span className="indice">{a.numero}</span>
                  {a.nome}
                </a>
              ))}
            </nav>
          </Revelar>
        </div>
      </section>

      {/* uma banda por família */}
      {aromas.map((a, i) => (
        <section
          key={a.id}
          id={a.id}
          className={i % 2 ? 'aroma-banda invertida' : 'aroma-banda'}
          style={{ backgroundColor: a.tinta }}
        >
          <span className="aroma-banda-fantasma" aria-hidden="true" style={{ color: a.acento }}>
            {a.nome}
          </span>
          <div className="aroma-banda-conteudo">
            <div className="aroma-banda-info">
              <Revelar>
                <p className="familia-numero" style={{ color: a.acento }}>
                  {a.numero} — Aromas
                </p>
              </Revelar>
              <Revelar custom={1}>
                <h2 className="titulo-gigante aroma-banda-nome" style={{ color: a.acento }}>
                  {a.nome}
                </h2>
              </Revelar>
              <Revelar custom={2}>
                <p className="aroma-banda-descricao">{a.descricao}</p>
              </Revelar>
              <Revelar custom={3}>
                <p className="familia-ambiente">{a.ambiente}</p>
              </Revelar>
              <Revelar custom={4}>
                <ul className="familia-notas" style={{ color: a.acento }}>
                  {a.notas.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Revelar>
              <Revelar custom={5}>
                <p className="familia-produto">
                  Em destaque · <strong>{a.produto}</strong>
                </p>
              </Revelar>
            </div>
            <Revelar custom={2} className="aroma-banda-figura">
              <img src={a.imagem} alt={`${a.nome} — ${a.produto}`} loading="lazy" />
            </Revelar>
          </div>
        </section>
      ))}

      {/* cta final */}
      <section className="bloco cta aromas-cta">
        <Revelar>
          <h2 className="titulo-gigante">Qual é a assinatura do seu espaço?</h2>
        </Revelar>
        <Revelar custom={1}>
          <p className="cta-legenda">
            Conte-nos como ele é — desenhamos o aroma certo e pomos a sua marca no ar.
          </p>
        </Revelar>
        <Revelar custom={2} className="aromas-cta-acoes">
          <a className="botao" href="/contactos/">
            Falar connosco
          </a>
          <a
            className="peca-ligacao"
            href="https://innaroma.pt/store/"
            target="_blank"
            rel="noreferrer"
          >
            Ver recargas na loja
          </a>
        </Revelar>
      </section>

      <Rodape />
    </>
  )
}
