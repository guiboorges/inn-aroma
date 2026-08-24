export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="rodape-topo">
          <div className="marca">
            <img className="marca-logo marca-logo-clara" src="/images/logo.png" alt="INN AROMA" />
          </div>
          <div className="rodape-coluna">
            <strong>Contactos</strong>
            <span>TagusPark, Núcleo Central, 164</span>
            <span>2740-122 Porto Salvo, Portugal</span>
            <a href="tel:+351214240129">(+351) 214 240 129</a>
            <a href="mailto:geral@innaroma.pt">geral@innaroma.pt</a>
          </div>
          <div className="rodape-coluna">
            <strong>Explorar</strong>
            <a href="/aromas/">Aromas</a>
            <a href="https://innaroma.pt/produtos/" target="_blank" rel="noreferrer">
              Produtos
            </a>
            <a href="/clientes/">Clientes</a>
            <a href="/contactos/">Contactos</a>
            <a href="https://innaroma.pt/store/" target="_blank" rel="noreferrer">
              Loja
            </a>
          </div>
        </div>
        <div className="rodape-certificacoes">
          <div className="rodape-cert">
            <strong>Certificação de aromas</strong>
            <img
              src="/images/cert-aromas.png"
              alt="Certificações de aromas: IFRA, ISO 9001:2008 e ISO 14001"
              loading="lazy"
            />
          </div>
          <div className="rodape-cert">
            <strong>Certificação de máquinas</strong>
            <img
              src="/images/cert-maquinas.png"
              alt="Certificações de máquinas: UL, RoHS e CE"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rodape-fim">
          <span>© {new Date().getFullYear()} INN AROMA by AP — Aromas que marcam</span>
          <span>Landing page · React + Motion</span>
        </div>
      </div>
    </footer>
  )
}
