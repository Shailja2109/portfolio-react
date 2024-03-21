import { useEffect, useState, useRef } from 'react'
import { useAnimations, useGLTF, Text3D, RoundedBox, useVideoTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { useFrame } from 'react-three-fiber';

const Missions = ({ page}) => {
  const font = "./fonts/gentilis_bold.typeface.json"
  const spaceControl = useGLTF('./space-3.glb')
  const spacePC = useGLTF('./space-4.glb')
  const denomie = useGLTF('./denomie/scene.glb')
  const spiral = useGLTF('./spiral_violet.glb')
  const animations = useAnimations(denomie.animations, denomie.scene)
  const space_window = useGLTF('./space-window.glb')
  let comp_texture = useVideoTexture('./Computer.mp4');
  let stat_texture = useVideoTexture('./Statistics.mp4');

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

  const { animationName } = useControls({
    animationName: { options: animations.names },
  })

  const spiralAnimations = useAnimations(spiral.animations, spiral.scene)

  useEffect(() => {
    spiralAnimations.actions[spiralAnimations.names].play()
  }, [])

  useEffect(() => {
    const action = animations.actions[animationName]
    action.reset().fadeIn(0.5).play()
    console.log('animationName', animationName)
    return () => {
      console.log('dispose')
      action.fadeOut(0.5)
    }
  }, [animationName])

  return (<>
    <primitive
      object={denomie.scene}
      scale={0.2}
      position={page === 'Experience' ? [0, -1, 3.85] : [0, -0.375, 3.75]}
      rotation={(page === 'AboutMe' || page === 'Education') ? [0, 0, 0] : [0.5, 3.3, 0]}
    />
    {page === 'Education' && <>
      <RoundedBox
        ref={boxRef1}
        scale={[1, 1, 1]}
        radius={0.05}
        args={[1, 1, 1]}
        position={[-1, -0.25, 0]}>
        <meshStandardMaterial map={comp_texture} transparent={true} opacity={1} color='#ffffff' />
      </RoundedBox>
      <RoundedBox
        ref={boxRef2}
        scale={[1, 1, 1]}
        radius={0.05}
        args={[1, 1, 1]}
        position={[1, -0.5, 0]}>
        <meshStandardMaterial map={stat_texture} transparent={true} opacity={1} color='#ffffff' />
      </RoundedBox>
      <primitive
        object={spiral.scene}
        scale={0.025}
        position={[0, -1, 0]}
      />
    </>}
    {page === 'Home' && <>
      <primitive
        object={spaceControl.scene}
        scale={0.1}
        position={[0, -0.25, 4]}
        rotation={[0.2, 0, 0]}
      />
      <Text3D
        position={[-0.85, 0, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"Hello I am Shailja Atkotiya."}
      </Text3D>
      <Text3D

        position={[-0.5, -0.25, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"A 3D Developer"}
      </Text3D>
      <Text3D

        position={[-0.75, -0.5, 0]}
        scale={[1, 1, 1]}
        font={font}
        size={0.1}
        height={0.1}
        curveSegments={1}
      >
        {"Welcome to My Universe"}
      </Text3D>
    </>}
    {page === 'Experience' && <>
      <primitive
        object={space_window.scene}
        scale={0.75}
        position={[0, 0, 3.5]}
        rotation={[0, 1.57, 0]}
      />
    </>}
  </>
  )
}

export default Missions;
