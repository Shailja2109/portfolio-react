import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { useControls } from 'leva'

export default function Planets({ enter, page, controls }) {
    const earth = useGLTF('./solar_system_animation/solar-system.glb')
    const earthRef = useRef();
    const rocketRef = useRef();
    const spaceRef = useRef();

    const [scale, setScale] = useState(0)
    const [position, setPosition] = useState(-2)
    const [denomiePosition, setDenomiePosition] = useState(1)
    const [rotation, setRotation] = useState(0)

    const denomie = useGLTF('./denomie/scene.glb')
    const rocketLaunch = useGLTF("./cosmonaut_on_a_rocket.glb")
    const spaceControl = useGLTF('./space.glb')
    const animations = useAnimations(denomie.animations, denomie.scene)
    const { animationName } = useControls({
        animationName: { options: animations.names },
    })

    useEffect(() => {
        const action = animations.actions[animationName]
        action.reset().fadeIn(0.5).play()
        console.log('animationName', animationName)
        return () => {
            console.log('dispose')
            action.fadeOut(0.5)
        }
    }, [animationName])
    useFrame(() => {
            if(earthRef) {earthRef.current.rotation.y -= 0.001;}
            if(rotation <= 2*(Math.PI)){
                setRotation(rotation + 0.01)
            }
            if (scale < 1.01 && !enter) {
                setScale(scale + 0.01)
            }
            if (page != "AboutMe" && position < 10 && !enter) {
                setPosition(position + 0.05)
            }
            if (denomiePosition > -0.5 && !enter) {
                setDenomiePosition(denomiePosition - 0.01)
            }
            if (position === 10) {
                earth.scene.add(rocketRef)
            }
    });

    return (<>
        {page === "Home" && !enter && controls && <primitive
            object={spaceControl.scene}
            ref={spaceRef}
            scale={0.35}
            position={[0.05, 0.2, 2]}
            rotation={[0,rotation,0]}
        />}
        <primitive
            object={earth.scene}
            ref={earthRef}
            scale={[scale, scale, scale]}
            position={[0, -9.5, 0]}
            rotation={[0.5, 0, 0]}
        />
        {position < 10 && <primitive
            ref={rocketRef}
            object={rocketLaunch.scene}
            scale={page === "AboutMe" ? [0.001, 0.001, 0.001] : [0.0075, 0.0075, 0.0075]}
            position={page === "AboutMe" ? [-1, -0.5, 3.5] : [position, -2, 0]}
            rotation={[0, 0, 0]}
        />
        }
        <primitive
            visible={!enter}
            object={denomie.scene}
            scale={0.2}
            position={[0, denomiePosition, 3.85]}
            rotation={(enter || page === 'Education' || page === "AboutMe") ? [0, 0, 0] : [0.5, 3.3, 0]}
        />
    </>
    )
}