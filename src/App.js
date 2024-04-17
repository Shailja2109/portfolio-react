import './style.css'
import { useState } from 'react'
import Container3D from './components/canvas/Container3D.js'
import Home from './components/sections/Home.js';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from "@react-three/drei";

const Cube = () => {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.x += 0.1;
        meshRef.current.rotation.y += 0.1;
        meshRef.current.rotation.z += 0.1;
    });

    return (
        <RoundedBox ref={meshRef} args={[1, 1, 1]} radius={0.1}>
            <meshLambertMaterial attach="material" color={0xD9BBA0} />
        </RoundedBox>
    );
};

const CubeLoader = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <Cube />
        </Canvas>
    );
};

export default function App() {
    const [page, setPage] = useState("Home")
    const [enter, setEnter] = useState(true)
    const [controls, setControls] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log("Controls", controls)

    return (<>
        {loading ? <div id="test">
            <div id="Loader"><CubeLoader /></div>
            <div id="LoaderText">Testing Your Patience</div></div> : <></>}
        <Home onSetControls={setControls} page={page} onSetPage={setPage} enter={enter} />
        <Container3D controls={controls} page={page} enter={enter} onSetEnter={setEnter} onSetLoading={setLoading} />
    </>
    )
}
