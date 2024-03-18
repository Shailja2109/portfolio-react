import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Skybox() {
  const skybox = useGLTF('./coral-skybox/scene.gltf')
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <primitive
      ref={boxRef}
      object={skybox.scene}
      scale={50}
    />
  )
}
