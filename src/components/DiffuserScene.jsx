import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'

const N_PARTICULAS = 72

function useTexturaNevoa() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const ctx = c.getContext('2d')
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    g.addColorStop(0, 'rgba(255,255,255,0.95)')
    g.addColorStop(0.4, 'rgba(240,235,225,0.55)')
    g.addColorStop(0.75, 'rgba(226,219,205,0.18)')
    g.addColorStop(1, 'rgba(226,219,205,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 128, 128)
    return new THREE.CanvasTexture(c)
  }, [])
}

// Névoa: sprites que nascem no bocal, sobem, derivam e desvanecem.
// `boost` (MotionValue 0..1, opcional) intensifica a emissão com o scroll.
// `cor` tinge suavemente os sprites (ex.: família de aroma escolhida).
// `tamanho` reduz proporcionalmente a coluna de névoa para cenas mais pequenas.
export function Nevoa({ origem = [-0.42, 0.95, 0.12], boost, cor = '#ffffff', tamanho = 1 }) {
  const textura = useTexturaNevoa()
  const sprites = useRef([])
  const sementes = useMemo(
    () =>
      Array.from({ length: N_PARTICULAS }, (_, i) => ({
        atraso: (i / N_PARTICULAS) * 6.5,
        duracao: 5 + (i % 5) * 0.75,
        amplitude: 0.07 + (((i * 37) % 100) / 100) * 0.18,
        frequencia: 0.5 + (((i * 53) % 100) / 100) * 1.1,
        deriva: (((i * 29) % 100) / 100 - 0.35) * 0.4,
        profundidade: Math.sin(i * 2.3) * 0.08,
      })),
    [],
  )

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const b = boost ? Math.min(Math.max(boost.get() * 2.4, 0), 1) : 0
    sementes.forEach((s, i) => {
      const spr = sprites.current[i]
      if (!spr) return
      const p = ((t + s.atraso) % s.duracao) / s.duracao
      spr.position.set(
        origem[0] +
          (Math.sin(t * s.frequencia + i) * s.amplitude * (1 + b * 1.6) * p +
            s.deriva * (1 + b * 2.2) * p) *
            tamanho,
        origem[1] + p * (2.7 + b * 1.3) * tamanho,
        origem[2] + s.profundidade,
      )
      spr.material.opacity = Math.min(Math.sin(Math.PI * p) * 0.55 * (1 + b * 2.2), 0.95)
      const escala = (0.14 + p * 1.15) * (1 + b * 2.6) * tamanho
      spr.scale.set(escala, escala, 1)
    })
  })

  return (
    <group>
      {Array.from({ length: N_PARTICULAS }).map((_, i) => (
        <sprite key={i} ref={(el) => (sprites.current[i] = el)}>
          <spriteMaterial map={textura} color={cor} transparent depthWrite={false} opacity={0} />
        </sprite>
      ))}
    </group>
  )
}

// Marca no painel frontal: "INN AROMA / powered by iServices" + símbolo
// Bluetooth, desenhados em canvas (como no produto real).
function useTexturaMarca() {
  return useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 512
    c.height = 320
    const ctx = c.getContext('2d')
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // INN AROMA
    if ('letterSpacing' in ctx) ctx.letterSpacing = '12px'
    ctx.font = '300 54px Raleway, "Helvetica Neue", Arial, sans-serif'
    ctx.fillStyle = '#585d60'
    ctx.fillText('INN AROMA', 262, 56)

    // powered by iServices
    if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'
    ctx.textAlign = 'right'
    ctx.font = '300 25px Raleway, "Helvetica Neue", Arial, sans-serif'
    ctx.fillStyle = '#8b9093'
    ctx.fillText('powered by', 262, 112)
    ctx.textAlign = 'left'
    ctx.font = '600 29px "Helvetica Neue", Arial, sans-serif'
    ctx.fillStyle = '#4c5154'
    ctx.fillText(' iServices', 264, 111)

    // símbolo Bluetooth (runa branca em quadrado azul arredondado)
    const bx = 256
    const by = 226
    const r = 46
    ctx.fillStyle = '#1670c8'
    ctx.beginPath()
    ctx.roundRect(bx - r, by - r, r * 2, r * 2, r * 0.48)
    ctx.fill()
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 6.5
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    const w = r * 0.42
    const h = r * 1.3
    ctx.beginPath()
    ctx.moveTo(bx - w, by - h / 4)
    ctx.lineTo(bx + w, by + h / 4)
    ctx.lineTo(bx, by + h / 2)
    ctx.lineTo(bx, by - h / 2)
    ctx.lineTo(bx + w, by - h / 4)
    ctx.lineTo(bx - w, by + h / 4)
    ctx.stroke()

    const t = new THREE.CanvasTexture(c)
    t.anisotropy = 8
    return t
  }, [])
}

// Difusor INN AROMA fiel ao produto: corpo squircle branco de cantos muito
// redondos, painel frontal azulado quase total, bocal dourado no topo
// esquerdo e marca impressa na base do painel.
export function Difusor() {
  const grupo = useRef()
  const marca = useTexturaMarca()

  useFrame(({ pointer }) => {
    if (!grupo.current) return
    grupo.current.rotation.y += (pointer.x * 0.38 - grupo.current.rotation.y) * 0.045
    grupo.current.rotation.x += (-pointer.y * 0.12 - grupo.current.rotation.x) * 0.045
  })

  return (
    <group ref={grupo}>
      <Float speed={1.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <group>
          {/* corpo: geometria mais funda escalada em z para permitir cantos
              de raio grande na silhueta, como no squircle real */}
          <group scale={[1, 1, 0.52]}>
            <RoundedBox args={[1.5, 1.62, 1.05]} radius={0.42} smoothness={10}>
              <meshStandardMaterial color="#fdfcf9" roughness={0.32} metalness={0.02} />
            </RoundedBox>
          </group>
          {/* painel frontal azulado, quase do tamanho da face */}
          <group scale={[1, 1, 0.12]} position={[0, -0.02, 0.27]}>
            <RoundedBox args={[1.32, 1.44, 0.5]} radius={0.4} smoothness={8}>
              <meshStandardMaterial color="#e2ecf2" roughness={0.12} metalness={0.05} />
            </RoundedBox>
          </group>
          {/* marca impressa na base do painel */}
          <mesh position={[0, -0.44, 0.302]}>
            <planeGeometry args={[0.62, 0.3875]} />
            <meshBasicMaterial map={marca} transparent toneMapped={false} />
          </mesh>
          {/* bocal dourado sobre colar branco, no topo esquerdo */}
          <group position={[-0.35, 0.78, 0.02]}>
            <mesh position={[0, 0.02, 0]}>
              <cylinderGeometry args={[0.115, 0.135, 0.12, 32]} />
              <meshStandardMaterial color="#fdfcf9" roughness={0.32} />
            </mesh>
            <mesh position={[0, 0.12, 0]}>
              <cylinderGeometry args={[0.072, 0.092, 0.16, 32]} />
              <meshStandardMaterial color="#c2a25e" roughness={0.22} metalness={0.9} />
            </mesh>
            <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.06, 0.016, 16, 32]} />
              <meshStandardMaterial color="#d8bc7c" roughness={0.18} metalness={0.95} />
            </mesh>
            <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <circleGeometry args={[0.048, 24]} />
              <meshStandardMaterial color="#57492d" roughness={0.5} metalness={0.4} />
            </mesh>
          </group>
          {/* pés */}
          {[-0.42, 0.42].map((x) => (
            <mesh key={x} position={[x, -0.83, 0.1]}>
              <cylinderGeometry args={[0.05, 0.06, 0.06, 16]} />
              <meshStandardMaterial color="#eceae4" roughness={0.5} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  )
}

// Aproxima e amplia suavemente o conjunto conforme o scroll (boost 0..1).
function Encenacao({ boost, children }) {
  const grupo = useRef()
  useFrame(() => {
    if (!grupo.current) return
    const b = boost ? Math.min(Math.max(boost.get() * 1.6, 0), 1) : 0
    grupo.current.scale.setScalar(1 + b * 0.65)
    grupo.current.position.y = -1.16 + b * 0.42
    grupo.current.position.z = b * 0.5
  })
  return <group ref={grupo} position={[0, -1.16, 0]}>{children}</group>
}

export default function DiffuserScene({ boost }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
    >
      <ambientLight intensity={0.95} />
      <directionalLight position={[3, 4, 5]} intensity={1.15} />
      <directionalLight position={[-4, 2, 2]} intensity={0.45} color="#ffe9c9" />
      <Encenacao boost={boost}>
        <group scale={0.52}>
          <Difusor />
        </group>
        <Nevoa origem={[-0.18, 0.51, 0.07]} boost={boost} />
        <ContactShadows position={[0, -0.52, 0]} opacity={0.24} scale={3.2} blur={2.6} far={1.4} />
      </Encenacao>
    </Canvas>
  )
}
