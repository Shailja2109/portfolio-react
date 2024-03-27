import { useGLTF, useTexture } from '@react-three/drei'
import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
export default function Skybox({page}) {
  // const skybox = useGLTF('./coral-skybox/scene.gltf')
  const boxRef = useRef();
  let skyBoxTexture_1 = useLoader(THREE.TextureLoader, './coral-skybox/textures/milky-way-2750627.jpg');
  let skyBoxTexture_2 = useLoader(THREE.TextureLoader, './coral-skybox/textures/fractal-1280079.jpg');
  
  console.log(Math.PI)
  useFrame(() => {
    if (boxRef.current && boxRef.current.rotation.y > -Math.PI) {
      boxRef.current.rotation.y -= 0.005;
    }
    if(boxRef.current.rotation.y <= -Math.PI){
      boxRef.current.rotation.y = Math.PI
    }

  });

  return (
    <mesh ref={boxRef} scale={[1, 1, 1]} rotation={[0, Math.PI, 0]}>
      <sphereGeometry args={[50, 64, 32]}/>
      <meshPhysicalMaterial map={page === "AboutMe" ? skyBoxTexture_2 : skyBoxTexture_1 } side={THREE.DoubleSide}/>
    {/* </mesh>
      ref={boxRef}
      object={skybox.scene}
      scale={50} */}
    </mesh>
  )
}
