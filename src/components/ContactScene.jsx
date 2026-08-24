import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import { Difusor, Nevoa } from './DiffuserScene.jsx'

// Cena da página de contactos: o difusor "acorda" com a mensagem.
// `boost` (MotionValue) vem do preenchimento do formulário; `cor` da
// família de aroma escolhida.
export default function ContactScene({ boost, cor }) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4.6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
    >
      <ambientLight intensity={0.95} />
      <directionalLight position={[3, 4, 5]} intensity={1.15} />
      <directionalLight position={[-4, 2, 2]} intensity={0.45} color="#ffe9c9" />
      <group position={[0, -0.95, 0]}>
        <group scale={0.62}>
          <Difusor />
        </group>
        <Nevoa origem={[-0.22, 0.61, 0.07]} boost={boost} cor={cor} tamanho={0.55} />
        <ContactShadows position={[0, -0.62, 0]} opacity={0.24} scale={3.4} blur={2.6} far={1.5} />
      </group>
    </Canvas>
  )
}
