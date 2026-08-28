import { lazy, Suspense, useEffect, useState } from 'react'
import Hero from './sections/Hero.jsx'
import AromaShowcase from './sections/AromaShowcase.jsx'
import Institutional from './sections/Institutional.jsx'

// páginas secundárias só descarregam quando visitadas
const Clientes = lazy(() => import('./pages/Clientes.jsx'))
const Contactos = lazy(() => import('./pages/Contactos.jsx'))
const Aromas = lazy(() => import('./pages/Aromas.jsx'))

const LIGACOES = [
  { href: '/aromas/', rotulo: 'Aromas', chave: 'aromas' },
  { href: '/clientes/', rotulo: 'Clientes', chave: 'clientes' },
  { href: '/contactos/', rotulo: 'Contactos', chave: 'contactos' },
]

const LOJA = 'https://innaroma.pt/store/'

function Home() {
  return (
    <>
      <Hero />
      <AromaShowcase />
      <Institutional />
    </>
  )
}

export default function App() {
  const caminho = window.location.pathname.replace(/\/+$/, '') || '/'
  const pagina = caminho.slice(1)
  const emClientes = pagina === 'clientes'
  const emContactos = pagina === 'contactos'
  const emAromas = pagina === 'aromas'

  // menu móvel (hambúrguer) + header com fundo depois de sair do topo,
  // para os links não ficarem por cima do texto das páginas
  const [menuAberto, setMenuAberto] = useState(false)
  const [comFundo, setComFundo] = useState(false)

  useEffect(() => {
    const aoDeslocar = () => setComFundo(window.scrollY > 24)
    aoDeslocar()
    window.addEventListener('scroll', aoDeslocar, { passive: true })
    return () => window.removeEventListener('scroll', aoDeslocar)
  }, [])

  useEffect(() => {
    if (!menuAberto) return
    document.body.style.overflow = 'hidden'
    const aoTeclar = (e) => e.key === 'Escape' && setMenuAberto(false)
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [menuAberto])

  const classeHeader = [
    'header',
    comFundo ? 'header-solida' : '',
    menuAberto ? 'header-menu-aberto' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={classeHeader}>
        <a className="marca" href="/">
          <img className="marca-logo" src="/images/logo.png" alt="INN AROMA" />
        </a>
        <nav className="header-nav" aria-label="Principal">
          {LIGACOES.map((l) => (
            <a
              key={l.chave}
              className={pagina === l.chave ? 'header-ligacao ativa' : 'header-ligacao'}
              href={l.href}
            >
              {l.rotulo}
            </a>
          ))}
          <a className="header-loja" href={LOJA} target="_blank" rel="noreferrer">
            Loja
          </a>
          <button
            type="button"
            className="header-burger"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menu-movel"
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <nav
        id="menu-movel"
        className={menuAberto ? 'menu-movel aberto' : 'menu-movel'}
        aria-label="Menu móvel"
        aria-hidden={!menuAberto}
      >
        <ul className="menu-movel-lista">
          <li>
            <a className={pagina === '' ? 'menu-movel-ligacao ativa' : 'menu-movel-ligacao'} href="/">
              <span className="menu-movel-num">01</span>Início
            </a>
          </li>
          {LIGACOES.map((l, i) => (
            <li key={l.chave}>
              <a
                className={pagina === l.chave ? 'menu-movel-ligacao ativa' : 'menu-movel-ligacao'}
                href={l.href}
              >
                <span className="menu-movel-num">0{i + 2}</span>
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>
        <a className="menu-movel-loja" href={LOJA} target="_blank" rel="noreferrer">
          Visitar a loja online
        </a>
        <p className="menu-movel-rodape rotulo">Marketing olfativo · Portugal</p>
      </nav>

      <main>
        <Suspense fallback={null}>
          {emAromas ? <Aromas /> : emContactos ? <Contactos /> : emClientes ? <Clientes /> : <Home />}
        </Suspense>
      </main>
    </>
  )
}
