import * as THREE from 'three'
import { OrbitControls, Grid, useHelper, PerspectiveCamera, Text, Float } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { PlayGround } from './Game/PlayGround.jsx'
import Player from './Game/Player.jsx'
import { useRef } from 'react'

export default function Experience()
{
    const shadowCameraRef = useRef()
    // const shadowCameraRef2 = useRef()
    // useHelper(shadowCameraRef, THREE.CameraHelper)
    // useHelper(shadowCameraRef2, THREE.CameraHelper)

    return <>
    
        {/* <OrbitControls /> */}
        <color args={[ '#000000']}  attach='background' />

        <directionalLight 
            position={[ 60, 60, 60 ]} 
            intensity={ 5 } 
            castShadow
            shadow-mapSize-width={ 1024 }
            shadow-mapSize-height={ 1024 }
        >
            <PerspectiveCamera
                ref={ shadowCameraRef } 
                attach={ 'shadow-camera' }    
                near={ 60 }
                far={ 100 }
                fov={ 80 }
            />
        </directionalLight>
        <directionalLight 
            position={[ - 50, 50, -50 ]} 
            intensity={ 5 } 
            // castShadow
            // shadow-mapSize-width={ 1024 }
            // shadow-mapSize-height={ 1024 }
        >
        </directionalLight>


        <ambientLight intensity={ 2 } />
    
        <Player />

        <PlayGround />

        <RigidBody  type='fixed' colliders={ 'trimesh' }>
            <mesh position={[71.103, 1, - 3 ]} >
                <planeGeometry args={[6.5, 5]} />
                <meshBasicMaterial
                    color={'#ffffff'}   
                    transparent={true}  
                    opacity={0}       
                />
            </mesh>
        </RigidBody>

        <RigidBody  type='fixed' colliders={ 'trimesh' }>
        <mesh position={[74.3, 1, 0 ]} rotation-y={ - Math.PI / 2 } >
            <planeGeometry args={[6.5, 5]} />
            <meshBasicMaterial
                color={'#ffffff'}   
                transparent={true}  
                opacity={0}       
            />
        </mesh>
        </RigidBody>

        <RigidBody  type='fixed' colliders={ 'trimesh' }>
            <mesh position={[71.103, 1, 3.5 ]} >
                <planeGeometry args={[6.5, 5]} />
                <meshBasicMaterial
                color={'#ffffff'}   
                transparent={true}  
                opacity={0}       
                />
            </mesh>
        </RigidBody>

        <RigidBody  type='fixed' colliders={ 'trimesh' }>
        <mesh position={[68, 1, 0 ]} rotation-y={ - Math.PI / 2 } >
            <planeGeometry args={[6.5, 5]} />
            <meshBasicMaterial
                color={'#ffffff'}   
                transparent={true}  
                opacity={0}       
            />
        </mesh>
        </RigidBody>

        <RigidBody 
            type='fixed' 
            colliders={ false } 
            sensor 
            name='space' 
            position-y={ - 5 }
        >
            <CuboidCollider 
                args={[ 50, 0.5, 25 ]} 
                position={[ 35, - 10, 0]}
            />
        </RigidBody>

        <Float
            speed={0.2} 
        >
            <Text
                font={'./Font/orbitron-v31-latin-800.woff'}
                scale={ 0.5 }
                maxWidth={ 0.25 }
                lineHeight={ 0.75 }
                textAlign='right'
                position={ [ - 5, 3.5, 3.2] }
                rotation={[ 0, - 2.5, 0.2 ]}
            >
                Space
                <meshPhysicalMaterial
                    color={'#2d7ad7'}
                    metalness={ 1 }
                    roughness={ 0.5 }
                />
            </Text>

            <Text
                font={'./Font/orbitron-v31-latin-800.woff'}
                scale={ 0.5 }
                maxWidth={ 0.25 }
                lineHeight={ 0.75 }
                textAlign='right'
                position={ [ - 5.2, 2.8, 3.2 ] }
                rotation={[ 0, - 2.5, 0.2 ]}
            >
                Game
                <meshPhysicalMaterial
                    color={'#2d7ad7'}
                    metalness={ 1 }
                    roughness={ 0.5 }
                />
            </Text>
        </Float>

        {/* <Grid
            sectionSize={ 5 }
            sectionColor={ 'white' }
            sectionThickness={ 1 }
            cellSize={ 1 }
            cellColor={ '#ececec' }
            cellThickness={ 0.6 }
            infiniteGrid
            fadeDistance={ 200 }
            fadeStrength={ 5 }
        /> */}
    </>
}