import { useEffect } from 'react'
import Revelar from '../components/Revelar.jsx'
import Rodape from '../components/Rodape.jsx'

// Setores servidos pela INN AROMA (innaroma.pt/clientes)
const SETORES = [
  {
    nome: 'Hotelaria',
    texto: 'Uma assinatura olfativa no lobby que os hóspedes levam consigo — e reconhecem quando voltam.',
  },
  {
    nome: 'Aeroportos',
    texto: 'Grandes fluxos, primeiras impressões: aromatização contínua em espaços de passagem.',
  },
  {
    nome: 'Centros comerciais',
    texto: 'Ambientes que convidam a ficar, com cobertura para áreas de grande dimensão.',
  },
  {
    nome: 'Saúde & clínicas',
    texto: 'Aromas delicados e neutralizadores de odores para espaços de cuidado e espera.',
  },
  {
    nome: 'Retalho & supermercados',
    texto: 'O aroma certo no ponto de venda prolonga a visita e fixa a marca na memória.',
  },
  {
    nome: 'Bares, discotecas & casinos',
    texto: 'Intensidade e personalidade para espaços que vivem da experiência.',
  },
  {
    nome: 'Escritórios & serviços',
    texto: 'Ambientes de trabalho e atendimento cuidados, todos os dias.',
  },
  {
    nome: 'Eventos',
    texto: 'Casamentos, aniversários, feiras e congressos — personalizações que transformam momentos em memórias.',
  },
]

const CERTIFICACOES = [
  {
    nome: 'Certificação de aromas',
    texto:
      'Fragrâncias desenvolvidas e certificadas segundo as normas europeias, seguras para pessoas e espaços — do grande átrio à mais pequena divisão.',
    imagem: '/images/cert-aromas.png',
    alt: 'Certificações de aromas: IFRA, ISO 9001:2008 e ISO 14001',
  },
  {
    nome: 'Certificação de máquinas',
    texto:
      'Difusores e equipamentos certificados, com nebulização a frio, consumo eficiente e manutenção assegurada pela nossa equipa.',
    imagem: '/images/cert-maquinas.png',
    alt: 'Certificações de máquinas: UL, RoHS e CE',
  },
]

export default function Clientes() {
  useEffect(() => {
    const anterior = document.title
    document.title = 'Clientes · INN AROMA'
    return () => {
      document.title = anterior
    }
  }, [])

  return (
    <>
      {/* topo editorial da página */}
      <section className="pagina-topo">
        <span className="pagina-fantasma" aria-hidden="true">
          Clientes
        </span>
        <div className="bloco">
          <Revelar>
            <p className="rotulo bloco-rotulo">Os nossos clientes</p>
          </Revelar>
          <Revelar custom={1}>
            <h1 className="titulo-gigante pagina-titulo">
              Marcas que
              <br />
              ficam no ar.
            </h1>
          </Revelar>
          <Revelar custom={2}>
            <p className="declaracao pagina-declaracao">
              De hotéis a casinos, de clínicas a casamentos — a INN AROMA assina o ambiente de
              espaços por todo o país com aromas e máquinas <em>certificados</em>.
            </p>
          </Revelar>
        </div>
      </section>

      {/* parede de logos */}
      <section className="bloco" style={{ paddingTop: 0 }}>
        <Revelar>
          <p className="rotulo bloco-rotulo">Confiam em nós</p>
        </Revelar>
        <Revelar custom={1}>
          <figure className="logos-parede">
            <img
              src="/images/clientes-logos.jpg"
              alt="Logótipos de clientes da INN AROMA: Rolex, IKEA, Hilton, CTT, Cruz Vermelha Portuguesa, SL Benfica, Tivoli, InterContinental, Corinthia, Mercedes-Benz, entre muitos outros"
              loading="lazy"
            />
          </figure>
        </Revelar>
        <Revelar custom={2}>
          <p className="logos-legenda">
            De Rolex a IKEA, de Hilton a Cruz Vermelha — mais de meia centena de marcas com a
            assinatura olfativa da INN AROMA.
          </p>
        </Revelar>
      </section>

      {/* índice de setores */}
      <section className="bloco" style={{ paddingTop: 0 }}>
        <Revelar>
          <p className="rotulo bloco-rotulo">Onde estamos</p>
        </Revelar>
        <div className="lista-setores">
          {SETORES.map((s, i) => (
            <Revelar key={s.nome} custom={i % 4} className="setor">
              <span className="indice">{String(i + 1).padStart(2, '0')}</span>
              <h2>{s.nome}</h2>
              <p>{s.texto}</p>
            </Revelar>
          ))}
        </div>
      </section>

      {/* parceria iServices */}
      <section className="bloco parceria">
        <Revelar>
          <p className="rotulo bloco-rotulo">Em parceria</p>
        </Revelar>
        <div className="parceria-destaque">
          <Revelar className="parceria-imagem">
            <img
              src="/images/difusor-iservices.jpg"
              alt="Difusor Inn Aroma powered by iServices"
              loading="lazy"
            />
          </Revelar>
          <div className="parceria-texto">
            <Revelar>
              <h2 className="titulo-gigante">Powered by iServices.</h2>
            </Revelar>
            <Revelar custom={1}>
              <p>
                O difusor inteligente Inn Aroma chega ao retalho pela mão da iServices, numa
                edição com controlo Bluetooth por app. A mesma tecnologia que aromatiza grandes
                espaços comerciais, agora ao alcance de qualquer casa.
              </p>
            </Revelar>
            <Revelar custom={2}>
              <a
                className="peca-ligacao"
                href="https://innaroma.pt/store/"
                target="_blank"
                rel="noreferrer"
              >
                Ver na loja
              </a>
            </Revelar>
          </div>
        </div>
      </section>

      {/* certificações */}
      <section className="bloco" style={{ paddingTop: 0 }}>
        <Revelar>
          <p className="rotulo bloco-rotulo">Certificações</p>
        </Revelar>
        <div className="certificacoes">
          {CERTIFICACOES.map((c, i) => (
            <Revelar key={c.nome} custom={i} className="certificacao">
              <span className="tres-pontos" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <h2>{c.nome}</h2>
              <p>{c.texto}</p>
              <img className="certificacao-selos" src={c.imagem} alt={c.alt} loading="lazy" />
            </Revelar>
          ))}
        </div>
      </section>

      {/* fale connosco */}
      <section className="bloco cta">
        <div className="contactos">
          <div>
            <Revelar>
              <h2 className="titulo-gigante">Fale connosco.</h2>
            </Revelar>
            <Revelar custom={1}>
              <p className="cta-legenda">
                Conte-nos como é o seu espaço — desenhamos a assinatura olfativa certa para ele.
              </p>
            </Revelar>
            <Revelar custom={2}>
              <a className="botao" href="/contactos/">
                Enviar mensagem
              </a>
            </Revelar>
          </div>
          <Revelar custom={1} className="contactos-detalhes">
            <p className="rotulo">Contactos</p>
            <address>
              TagusPark, Núcleo Central, 164
              <br />
              2740-122 Porto Salvo, Portugal
            </address>
            <a href="tel:+351214240129">(+351) 214 240 129</a>
            <a href="mailto:geral@innaroma.pt">geral@innaroma.pt</a>
          </Revelar>
        </div>
      </section>

      <Rodape />
    </>
  )
}
