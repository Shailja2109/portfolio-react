import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Skybox() {
    const skybox = useGLTF('./coral-skybox/scene.gltf')
    const boxRef = useRef();

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.y -= 0.01;
        }
    });

    return (
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 1,
                far: 1000,
            }}
        >
            <OrbitControls
                enablePan={true}
                minAzimuthAngle={-Math.PI}
                maxAzimuthAngle={Math.PI}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
                minDistance={1}
                maxDistance={25}
            />
            <directionalLight
                castShadow
                position={[1, 2, 3]}
                intensity={1.5}
                shadow-normalBias={0.04}
            />
            <ambientLight intensity={0.5} />

            <primitive
                ref={boxRef}
                object={skybox.scene}
                scale={5}
            />
        </Canvas>
  )
}
