import React, { useState } from 'react';
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Objects from './Objects.js'
import Skybox from './Skybox.js'
import Planets from './Planets.js'
const Container3D = ({ controls, page, enter, onSetEnter, onSetLoading }) => {
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
        <directionalLight
          castShadow
          position={[1, 2, 3]}
          intensity={1.5}
          shadow-normalBias={0.04}
        />
        {/* <OrbitControls/> */}
        <ambientLight intensity={0.5} />
        <Objects controls={controls} page={page} enter={enter} onSetEnter={onSetEnter} />
        <Planets enter={enter} page={page} controls={controls}/>
        <Skybox page={page} onSetLoading={onSetLoading}/>
      </Canvas>
    </>
  )
}

export default Container3D;