import { produtos, segmentos } from '../data/produtos.js'
import Revelar from '../components/Revelar.jsx'
import Rodape from '../components/Rodape.jsx'

export default function Institutional() {
  return (
    <section className="institucional">
      {/* declaração da marca */}
      <div className="bloco">
        <Revelar>
          <p className="rotulo bloco-rotulo">A empresa</p>
        </Revelar>
        <Revelar custom={1}>
          <p className="declaracao">
            Quer <em>emocionar</em> os seus clientes? A INN AROMA desenha experiências
            sensoriais que criam uma forte ligação entre marcas e pessoas — com aromas e
            máquinas certificados, do grande espaço comercial à mais pequena divisão da casa.
          </p>
        </Revelar>
        <Revelar custom={2}>
          <figure className="banner-gama">
            <img src="/images/grupo.webp" alt="Difusor INN AROMA com a gama de recargas de aroma" loading="lazy" />
          </figure>
        </Revelar>
      </div>

      {/* segmentos */}
      <div className="bloco" style={{ paddingTop: 0 }}>
        <Revelar>
          <p className="rotulo bloco-rotulo">Onde atuamos</p>
        </Revelar>
        <div className="segmentos">
          {segmentos.map((s, i) => (
            <Revelar key={s.nome} custom={i} className="segmento">
              <span className="indice">0{i + 1}</span>
              <h3>{s.nome}</h3>
              <p>{s.texto}</p>
            </Revelar>
          ))}
        </div>
      </div>

      {/* todos os produtos */}
      <div className="bloco colecao">
        <span className="colecao-fantasma" aria-hidden="true">
          Coleção
        </span>
        <Revelar>
          <p className="rotulo bloco-rotulo">Todos os produtos</p>
        </Revelar>
        <Revelar custom={1}>
          <h2 className="titulo-gigante colecao-titulo">
            Nove formas de
            <br />
            marcar um espaço.
          </h2>
        </Revelar>
        <div className="grelha-colecao">
          {produtos.map((p, i) => (
            <Revelar
              key={p.nome}
              custom={i % 3}
              className={p.destaque ? 'peca peca-grande' : 'peca'}
              style={{ '--palco': p.tinta, '--palco-forte': p.tintaForte, '--realce': p.acento }}
            >
              <div className="peca-palco">
                <img src={p.imagem} alt={p.nome} loading="lazy" />
                {p.preco && <span className="peca-preco">{p.preco}</span>}
              </div>
              <div className="peca-info">
                <span className="peca-numero">
                  {String(i + 1).padStart(2, '0')} — {p.tipo}
                </span>
                <h3>{p.nome}</h3>
                <p>{p.descricao}</p>
                {p.destaque && (
                  <a
                    className="peca-ligacao"
                    href="https://innaroma.pt/store/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver na loja
                  </a>
                )}
              </div>
            </Revelar>
          ))}
        </div>
      </div>

      {/* cta com destaque de loja */}
      <div className="bloco cta">
        <div className="cta-destaque">
          <Revelar className="cta-imagem">
            <img src="/images/produto-solo.webp" alt="Difusor Inn Aroma em estúdio" loading="lazy" />
          </Revelar>
          <div className="cta-texto">
            <Revelar>
              <h2 className="titulo-gigante">O seu espaço tem memória.</h2>
            </Revelar>
            <Revelar custom={1}>
              <p className="cta-legenda">
                Difusor Inn Aroma · controlo por app · até 30 m² · <strong>49,95 €</strong>
              </p>
            </Revelar>
            <Revelar custom={2}>
              <a
                className="botao"
                href="https://innaroma.pt/store/"
                target="_blank"
                rel="noreferrer"
              >
                Visitar a loja
              </a>
            </Revelar>
          </div>
        </div>
      </div>

      <Rodape />
    </section>
  )
}
