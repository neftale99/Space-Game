import * as THREE from 'three'
import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { CuboidCollider, euler, quat, RigidBody, vec3 } from '@react-three/rapier'
import { Controls } from '../Index'
import { useEffect, useRef, useState } from 'react'
import { Robot } from './Robot.jsx'
import UseGame from '../Stores/UseGame.jsx'

const MOVEMENT_SPEED = 5
const ROTATION_SPEED = 5
const JUMP_FORCE = 10

export default function Player() 
{
    const [jumpAnimation, setJumpAnimation] = useState(false)
    const [ subscribeKeys ] = useKeyboardControls()

    const start = UseGame((state) => state.start)
    const end = UseGame((state) => state.end)
    const restart = UseGame((state) => state.restart)

    const rb = useRef()
    const inTheAir = useRef(false)
    const punched = useRef(false)
    
    const camera = useRef()
    const cameraTarget = useRef(new THREE.Vector3(0, 0, 0))

    const [, get] = useKeyboardControls()
    const vel = new THREE.Vector3()

    useFrame(() => {
        // if (!rb.current) return

        cameraTarget.current.lerp(vec3(rb.current.translation()), 0.5)
        camera.current.lookAt(cameraTarget.current)

        vel.set(0, 0, 0)

        const rotVel = { x: 0, y: 0, z: 0 }
        const curVel = rb.current.linvel()

        if (get()[Controls.forward]) {
            vel.x += MOVEMENT_SPEED
        }
        if (get()[Controls.back]) {
            vel.x -= MOVEMENT_SPEED
        }
        if (get()[Controls.left]) {
            rotVel.y += ROTATION_SPEED
        }
        if (get()[Controls.right]) {
            rotVel.y -= ROTATION_SPEED
        }

        rb.current.setAngvel(rotVel, true)
        const eulerRot = euler().setFromQuaternion(quat(rb.current.rotation()))
        vel.applyEuler(eulerRot)

        if (get()[Controls.jump] && !inTheAir.current) { 
            vel.y += JUMP_FORCE
            inTheAir.current = true
            setJumpAnimation(true) 
        } else {
            vel.y = curVel.y
        }

        if (!punched.current) {
            rb.current.setLinvel(vel, true)
        }
    })

    const respawn = () => {
        rb.current.setTranslation({ x: 0, y: 5, z: 0 })
        rb.current.setRotation({ x: 0, y: 0, z: 0, w: 1 })
        rb.current.setLinvel({ x: 0, y: 0, z: 0 })
        rb.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    const scene = useThree((state) => state.scene)

    const teleport = () => {
        const gateOut = scene.getObjectByName('BFinal')

        rb.current.setTranslation(gateOut.position)
    }

    const reset = () => {
        respawn()
    }

    useEffect(() => {
        const unsubscrybeReset = UseGame.subscribe(
            (state) => state.phase,
            (phase) => 
            {
                if(phase === 'ready') reset()
            }
        )

        const unsubscribeAny = subscribeKeys(
            () =>
            {
                start()
            }
        )

        return () =>
        {
            unsubscribeAny
            unsubscrybeReset
        }
    })

    return (
        <>
            <RigidBody
                ref={ rb }
                gravityScale={ 3 }
                onCollisionEnter={({ other }) => {
                    if (other.rigidBodyObject.name === 'ground') {
                        inTheAir.current = false
                        setJumpAnimation(false) 
                    }
                    if (['swiper', 'swiper2', 'swiper3', 'swiper4'].includes(other.rigidBodyObject.name)) {
                        punched.current = true
                        setTimeout(() => { punched.current = false }, 200)
                    }
                }}
                onIntersectionEnter={({ other }) => {
                    if (other.rigidBodyObject.name === 'space') respawn()
                    if (other.rigidBodyObject.name === 'baseWait') teleport(end())
                }}
            >
                <PerspectiveCamera 
                    makeDefault 
                    position={[ - 10, 7, 0 ]} 
                    ref={ camera }    
                />
                <Robot
                    scale={ 1 }
                    position={[ - 2, 0.5, 0 ]}
                    jumpAnimation={ jumpAnimation }
                />
            </RigidBody>
        </>
    )
}
