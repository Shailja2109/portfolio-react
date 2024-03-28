import { useEffect, useState, useRef } from 'react'
import { useAnimations, useGLTF, Text3D, RoundedBox, useVideoTexture } from '@react-three/drei'
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three'

const Objects = ({ controls, page, enter, onSetEnter }) => {
  const font = "./fonts/gentilis_bold.typeface.json"
  const spiral = useGLTF('./space_violet.glb')
  const space_window = useGLTF('./space-window.glb')

  let comp_texture = useLoader(THREE.TextureLoader, './Computer.png');
  let stat_texture = useLoader(THREE.TextureLoader, './Stats.png');

  const boxRef1 = useRef();
  const boxRef2 = useRef();

  useFrame(() => {
    if (boxRef1.current) {
      boxRef1.current.rotation.y -= 0.01;
      boxRef1.current.rotation.x += 0.01;
    }
    if (boxRef2.current) {
      boxRef2.current.rotation.y += 0.01;
      boxRef2.current.rotation.x += 0.01;
    }
  });

  const spiralAnimations = useAnimations(spiral.animations, spiral.scene)
  useEffect(() => {
    spiralAnimations.actions[spiralAnimations.names].play()
  }, [])

  return (<>
    {!enter && controls && <>
      <primitive
        object={space_window.scene}
        scale={0.75}
        position={[0, 0, 3.5]}
        rotation={[0, 1.57, 0]}
      />
    </>}
    <mesh scale={[1, 1, 1]}
      position={enter ? [0, 0, 3.5] : [100, 100, 100]}
      onClick={(e) => { console.log("Entered"); onSetEnter(false) }}>
      <boxGeometry args={[0.4, 0.2, 0.1]} />
      <meshStandardMaterial transparent={true} opacity={1} color={'#ffffff'} wireframe={true} />
      <Text3D
        position={[-0.15, -0.025, 0]}
        font={font}
        size={1}
        height={0.1}
        scale={[0.075, 0.075, 0.075]}
        curveSegments={1}
        color={'#000000'}
      >
        {"START"}
      </Text3D>
    </mesh>
    {page === 'Education' && <>
      <RoundedBox
        ref={boxRef1}
        scale={[1, 1, 1]}
        radius={0.05}
        args={[1, 1, 1]}
        position={[-1, -0.5, 0]}>
        <meshStandardMaterial map={comp_texture} transparent={true} opacity={1} color='#B0B1E9' />
      </RoundedBox>
      <RoundedBox
        ref={boxRef2}
        scale={[1, 1, 1]}
        radius={0.05}
        args={[1, 1, 1]}
        position={[1, -0.5, 0]}>
        <meshStandardMaterial map={stat_texture} transparent={true} opacity={1} color='#B0B1E9' />
      </RoundedBox>
      <primitive
        object={spiral.scene}
        scale={0.025}
        position={[0, -1, 0]}
      />
    </>}
    {page === 'Home' && <>
      <Text3D
        visible={!enter && !controls}
        position={[-0.85, 0.5, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"Hello I am Shailja Atkotiya."}
      </Text3D>
      <Text3D
        visible={!enter && !controls}
        position={[-0.5, 0.25, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"A 3D Developer"}
      </Text3D>
      <Text3D
        visible={!enter && !controls}
        position={[-0.75, 0, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"Welcome to My Universe"}
      </Text3D>
    </>}
    {page === 'AboutMe' && <>
      <mesh position={[0,0,-0.1]}>
        <planeGeometry args={[6,3]}/>
        <meshBasicMaterial color={"black"} transparent={true} opacity={0.75} />
      </mesh>
      <Text3D
        position={[-2, 1, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
      >
        {"Hey there! Welcome to the section that people hardly read. "}
      </Text3D>
      <Text3D
        position={[-2.5, 0.8, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"I'm a passionate 3D Developer with a knack for turning innovative ideas into reality."}
      </Text3D>
      <Text3D
        position={[-2.7, 0.6, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"You can check out proof of my competence in CE in the education and experience section."}
      </Text3D>
      <Text3D
        position={[-2.5, 0.4, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"To know about me: I'm left-handed with the core characteristic of being creative."}
      </Text3D>
      <Text3D
        position={[-2.25, 0.2, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"It's hard to drag me away from my addiction to solving the things I'm onto. "}
      </Text3D>
      <Text3D
        position={[-2.5, 0, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"However, I manage to spike my dopamine with adventures, dancing, and traveling."}
      </Text3D>
      <Text3D
        position={[-2, -0.2, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"Like everyone, I too have a dark side during which I like to draw."}
      </Text3D>
      <Text3D
        position={[-1, -0.4, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"I'm not a by-the-books person;"}
      </Text3D>
      <Text3D
        position={[-2.25, -0.6, 0]}
        scale={[1, 1, 0.1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {" I like to go againest the trends and laws and work, thinking out of the box."}
      </Text3D>
    </>}
  </>
  )
}

export default Objects;
