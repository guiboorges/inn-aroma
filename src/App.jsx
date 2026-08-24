import { lazy, Suspense } from 'react'
import Hero from './sections/Hero.jsx'
import AromaShowcase from './sections/AromaShowcase.jsx'
import Institutional from './sections/Institutional.jsx'

// páginas secundárias só descarregam quando visitadas
const Clientes = lazy(() => import('./pages/Clientes.jsx'))
const Contactos = lazy(() => import('./pages/Contactos.jsx'))
const Aromas = lazy(() => import('./pages/Aromas.jsx'))

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
  const emClientes = caminho === '/clientes'
  const emContactos = caminho === '/contactos'
  const emAromas = caminho === '/aromas'

  return (
    <>
      <header className="header">
        <a className="marca" href="/">
          <img className="marca-logo" src="/images/logo.png" alt="INN AROMA" />
        </a>
        <nav className="header-nav">
          <a className={emAromas ? 'header-ligacao ativa' : 'header-ligacao'} href="/aromas/">
            Aromas
          </a>
          <a className={emClientes ? 'header-ligacao ativa' : 'header-ligacao'} href="/clientes/">
            Clientes
          </a>
          <a
            className={emContactos ? 'header-ligacao ativa' : 'header-ligacao'}
            href="/contactos/"
          >
            Contactos
          </a>
          <a
            className="header-loja"
            href="https://innaroma.pt/store/"
            target="_blank"
            rel="noreferrer"
          >
            Loja
          </a>
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          {emAromas ? <Aromas /> : emContactos ? <Contactos /> : emClientes ? <Clientes /> : <Home />}
        </Suspense>
      </main>
    </>
  )
}
