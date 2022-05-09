import React, { useEffect, useRef, Suspense, useState } from 'react'
import * as THREE from 'three'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import './WelcomeSection.scss'

const Rig = ({ children }: any) => {
  const ref = useRef<any>()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 6,
      0.1
    )
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (-1 * (state.mouse.y * Math.PI)) / 6,
      0.1
    )
  })
  return <group ref={ref}>{children}</group>
}

interface GltfModelProps {
  modelPath: string
  scale?: number
  position?: Array<number>
  set?: any
}

const GltfModel = ({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
  set,
}: GltfModelProps) => {
  const ref = useRef<any>()
  const lightRef = useRef<any>()
  const composer = useRef<any>()

  const [dir, setDir] = useState<number>(0)
  const gltf = useLoader(GLTFLoader, modelPath)
  const { nodes } = gltf
  // const eye02 = nodes.eye01.clone()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    ref.current.scale.z += dir * 0.002
    if (t % 10 < 1 && dir === 0) {
      setDir(-1)
    }

    if (ref.current.scale.z <= 0) {
      setDir(1)
    }

    if (ref.current.scale.z >= 0.05 && dir !== 0) {
      setDir(0)
    }
  })

  return (
    <>
      <mesh
        position={new THREE.Vector3(position[0], position[1], position[2])}
        scale={scale}
        onPointerOver={(e: any) => {
          set(true)
        }}
        onPointerOut={(e: any) => {
          set(false)
        }}
      >
        <primitive object={nodes.pingmu} position={[0, 0, 0]} scale={0.05} />
        <primitive object={nodes.yankuang} position={[0, 0, 0]} scale={0.05} />
        <primitive
          ref={ref}
          object={nodes.eye01}
          position={[0, 0.08, 0.24]}
          scale={0.05}
        ></primitive>
      </mesh>
      {/* <pointLight position={[0, 5, 2]} intensity={2} /> */}
      <pointLight position={[0, 1.1, 0]} intensity={0.05} ref={lightRef} />
      <EffectComposer multisampling={40} autoClear={false} ref={composer}>
        <Bloom
          kernelSize={2}
          luminanceThreshold={0}
          luminanceSmoothing={0.6}
          intensity={0.1}
        />
      </EffectComposer>
    </>
  )
}

const WelcomeSection = () => {
  const [hover, setHover] = useState<boolean>(false)

  useEffect(() => {
    disableBodyScroll(document.body)
  }, []) //eslint-disable-line

  const handleViewMore = () => {
    document.getElementById('welcome-container')?.classList.add('opacity-down')

    setTimeout(() => {
      document.getElementById('welcome')?.classList.add('hidden')
      document.getElementById('machine')?.classList.add('opacity-up')
      document.getElementById('about')?.classList.add('opacity-up')
      enableBodyScroll(document.body)
    }, 1500)
  }

  return (
    <>
      <section className='section-welcome' id='welcome'>
        <div className='container' id='welcome-container'>
          <div style={{ width: '100vw', height: '100vh' }} className='canvas'>
            <Canvas
              shadows
              gl={{ alpha: false }}
              camera={{ position: [0, 3, 100], fov: 15 }}
              dpr={[1, 2]}
            >
              <Suspense fallback={<Loader />}>
                <group position={[0, -1, 0]}>
                  <Rig>
                    <GltfModel
                      modelPath='./models/model.glb'
                      scale={2}
                      position={[0, 1, 0]}
                      set={setHover}
                    />
                  </Rig>
                  <Html
                    scale={1}
                    position={[-0.5, 2, -1]}
                    rotation={[Math.PI / 2, 20, 0]}
                    className={`robot-text ${hover ? 'show' : ''}`}
                  >
                    <div>
                      <h1>BATTERY</h1>
                      <h2>FULL CHARGED</h2>
                    </div>
                    <div>
                      <h1>LAUNCH</h1>
                      <h2>READY</h2>
                    </div>
                  </Html>
                </group>
                <Intro />
              </Suspense>
              {/* <OrbitControls enableRotate={true} enableZoom={false} /> */}
            </Canvas>
          </div>

          <div className='btn-more' onClick={handleViewMore}>
            <span></span>
            View More
          </div>

          <div className='welcome-description'>
            <h1>NoNo</h1>
            <span>
              Assistant robot from a game called SEER. <br />
              Ability to Staking for $GALAXY
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

const Intro = () => {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 0, 3 + state.mouse.y * 0, 26),
      0.06
    )
    state.camera.lookAt(0, 0, 0)
  })
}

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center className='loading-progress'>
      <span>{progress} % loaded</span>
    </Html>
  )
}

export default WelcomeSection
