import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function Earth() {
    const earth = useGLTF('./solar_system_animation/solar-system.glb')
    const boxRef = useRef();

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.y -= 0.001;
        }
    });

    return (
        <primitive
            object={earth.scene}
            scale={1}
            ref={boxRef}
            position={[0, -9.5, 0]}
            rotation={[0.5, -Math.PI / 2, 0]}
        />
    )
}

export default function Planets() {
    return (<>
        <Earth />
    </>)
}