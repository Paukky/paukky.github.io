import { OrthographicCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef,useEffect } from 'react'
import { Cat, Desk, Chair } from '../models'

const Scene = () => {
  const box = useRef()
  const cameraRef = useRef()

  useFrame((_, delta) => {
    if (box.current) {
      box.current.rotation.y += delta * 0.05
    }
  })

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0) // 👈 center of your scene
    }
  }, [])

  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={[0, 10, 6]} // clearly above
        zoom={60}
      />

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 20, 10]} intensity={1} />

      <group ref={box} rotation={[-1, 0, 0]}>
        <Cat />
        <Desk />
        <Chair />
      </group>
    </>
  )
}

export default Scene