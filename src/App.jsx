import Hero from './sections/Hero.jsx'
import AromaShowcase from './sections/AromaShowcase.jsx'
import Institutional from './sections/Institutional.jsx'
import Clientes from './pages/Clientes.jsx'
import Contactos from './pages/Contactos.jsx'
import Aromas from './pages/Aromas.jsx'

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
        {emAromas ? <Aromas /> : emContactos ? <Contactos /> : emClientes ? <Clientes /> : <Home />}
      </main>
    </>
  )
}
