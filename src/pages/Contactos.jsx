import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring } from 'motion/react'
import { aromas } from '../data/aromas.js'
import Revelar from '../components/Revelar.jsx'
import Rodape from '../components/Rodape.jsx'

// three.js só descarrega nesta página
const ContactScene = lazy(() => import('../components/ContactScene.jsx'))

const EMAIL_VALIDO = /\S+@\S+\.\S+/

// quanto do difusor cada parte do formulário "acorda"
function progresso({ nome, email, mensagem, aromaId }) {
  return (
    (nome.trim() ? 0.2 : 0) +
    (EMAIL_VALIDO.test(email) ? 0.2 : 0) +
    (aromaId ? 0.14 : 0) +
    Math.min(1, mensagem.trim().length / 90) * 0.46
  )
}

export default function Contactos() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [aromaId, setAromaId] = useState(null)
  const [enviado, setEnviado] = useState(false)

  // o alvo salta com cada tecla (sopro) e assenta no nível do preenchimento;
  // a spring dá a inércia de névoa
  const alvo = useMotionValue(0.06)
  const boost = useSpring(alvo, { stiffness: 42, damping: 16 })
  const pulsoRef = useRef(null)

  const p = progresso({ nome, email, mensagem, aromaId })
  const base = 0.06 + p * 0.38

  useEffect(() => {
    if (!enviado) alvo.set(base)
  }, [base, enviado, alvo])

  useEffect(() => {
    const anterior = document.title
    document.title = 'Contactos · INN AROMA'
    return () => {
      document.title = anterior
    }
  }, [])

  // pequeno sopro de névoa a cada tecla
  function sopro() {
    if (enviado) return
    alvo.set(Math.min(0.95, base + 0.28))
    clearTimeout(pulsoRef.current)
    pulsoRef.current = setTimeout(() => alvo.set(base), 320)
  }

  const aromaSel = aromas.find((a) => a.id === aromaId)
  const pronto = nome.trim() && EMAIL_VALIDO.test(email) && mensagem.trim().length >= 10

  function enviar(e) {
    e.preventDefault()
    if (!pronto) return
    clearTimeout(pulsoRef.current)
    setEnviado(true)
    alvo.set(1.6) // rajada final
    const corpo = [
      mensagem,
      '',
      '—',
      `Nome: ${nome}`,
      aromaSel ? `Família de aroma preferida: ${aromaSel.nome}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    const url = `mailto:geral@innaroma.pt?subject=${encodeURIComponent(
      `Contacto pelo site — ${nome}`,
    )}&body=${encodeURIComponent(corpo)}`
    setTimeout(() => {
      window.location.href = url
      alvo.set(0.5)
    }, 900)
  }

  let dica
  if (enviado) dica = 'Mensagem no ar. Abrimos o seu email para concluir o envio — obrigado.'
  else if (p < 0.22) dica = 'O difusor está em repouso. Comece a escrever para o acordar.'
  else if (p < 0.72) dica = 'A névoa cresce com a sua mensagem — continue.'
  else dica = 'Tudo pronto. Um clique e a sua mensagem fica no ar.'

  return (
    <>
      <section
        className="contactos-palco"
        style={{ backgroundColor: aromaSel ? aromaSel.tinta : 'var(--papel)' }}
      >
        <div className="contactos-grelha">
          <div className="contactos-formulario">
            <Revelar>
              <p className="rotulo bloco-rotulo">Contactos</p>
            </Revelar>
            <Revelar custom={1}>
              <h1 className="titulo-gigante contactos-titulo">
                Vamos pôr a sua
                <br />
                marca no ar.
              </h1>
            </Revelar>
            <Revelar custom={2}>
              <p className="contactos-intro">
                Conte-nos como é o seu espaço. O difusor ao lado acorda com cada palavra — e a
                sua assinatura olfativa começa aqui.
              </p>
            </Revelar>

            <Revelar custom={3}>
              <form className="formulario" onSubmit={enviar}>
                <label className="campo">
                  <span className="rotulo">Nome</span>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => {
                      setNome(e.target.value)
                      sopro()
                    }}
                    placeholder="Como se chama?"
                    autoComplete="name"
                  />
                </label>
                <label className="campo">
                  <span className="rotulo">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      sopro()
                    }}
                    placeholder="onde@respondemos.pt"
                    autoComplete="email"
                  />
                </label>

                <div className="campo">
                  <span className="rotulo">A sua família de aroma</span>
                  <div className="aroma-escolha" role="group" aria-label="Família de aroma">
                    {aromas.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        className={a.id === aromaId ? 'aroma-chip ativa' : 'aroma-chip'}
                        style={
                          a.id === aromaId
                            ? { background: a.acento, borderColor: a.acento, color: '#faf8f4' }
                            : { color: a.acento, borderColor: a.acento }
                        }
                        onClick={() => {
                          setAromaId(a.id === aromaId ? null : a.id)
                          sopro()
                        }}
                      >
                        {a.nome}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="campo">
                  <span className="rotulo">Mensagem</span>
                  <textarea
                    rows={4}
                    value={mensagem}
                    onChange={(e) => {
                      setMensagem(e.target.value)
                      sopro()
                    }}
                    placeholder="O meu espaço é…"
                  />
                </label>

                <p className="contactos-dica" aria-live="polite">
                  {dica}
                </p>

                <button
                  className="botao contactos-enviar"
                  type="submit"
                  disabled={!pronto || enviado}
                  style={aromaSel && pronto && !enviado ? { background: aromaSel.acento } : undefined}
                >
                  {enviado ? 'Mensagem no ar' : 'Enviar mensagem'}
                </button>
              </form>
            </Revelar>

            <Revelar custom={4}>
              <p className="contactos-detalhes-linha">
                TagusPark, Núcleo Central, 164 · Porto Salvo ·{' '}
                <a href="tel:+351214240129">(+351) 214 240 129</a> ·{' '}
                <a href="mailto:geral@innaroma.pt">geral@innaroma.pt</a>
              </p>
            </Revelar>
          </div>

          <div className="contactos-cena" aria-hidden="true">
            <Suspense fallback={null}>
              <ContactScene boost={boost} cor={aromaSel ? aromaSel.tintaForte : '#ffffff'} />
            </Suspense>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  )
}
