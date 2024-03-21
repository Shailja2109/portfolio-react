import React, { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Objects from './Objects.js'
import Skybox from './Skybox.js'

const Container3D = ({ page, enter, onSetEnter, controls, onSetControls }) => {
  const [orbitControls, setOrbitControls] = useState(false)
  useEffect(() => {
    if(page === 'Education')
    setOrbitControls(true)
  }, [page])

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 1,
          far: 1000,
        }}
      >
        <OrbitControls
          // enabled={false}
          // enablePan={true}
          // minAzimuthAngle={-Math.PI}
          // maxAzimuthAngle={Math.PI}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
          // minDistance={1}
          // maxDistance={25}
          // target={[0,0,0]}
        />
        <directionalLight
          castShadow
          position={[1, 2, 3]}
          intensity={1.5}
          shadow-normalBias={0.04}
        />
        <ambientLight intensity={0.5} />
        <Objects page={page} enter={enter} onSetEnter={onSetEnter} controls={controls} onSetControls={onSetControls}/>
        <Skybox />
      </Canvas>
    </>
  )
}

export default Container3D;