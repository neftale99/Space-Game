import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef } from 'react'

export function PlayGround(props) {
  const { nodes, materials } = useGLTF('./Model/SpaceGame.glb')
  const swiper = useRef()
  const swiper2 = useRef()
  const swiper3 = useRef()
  const swiper4 = useRef()

  useEffect(() => {
    swiper.current.setAngvel(
        {
            x: 0,
            y: 1,
            z: 0,
        },
            true
    )
  })

  useEffect(() => {
    swiper2.current.setAngvel(
        {
            x: 0,
            y: 2,
            z: 0,
        },
            true
    )
  })

  useEffect(() => {
    swiper3.current.setAngvel(
        {
            x: 0,
            y: 1.5,
            z: 0,
        },
            true
    )
  })

  useEffect(() => {
    swiper4.current.setAngvel(
        {
            x: 0,
            y: 1.3,
            z: 0,
        },
            true
    )
  })

  return (
    <group {...props} dispose={null}>
    
    {/* OF */}
        <RigidBody
            type='kinematicVelocity'
            colliders='trimesh'
            ref={ swiper }
            restitution={ 1 }
            name='swiper'
            position={[24.874, 0, 0]}
        >
            <group>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.OF1_1.geometry}
                material={materials.BlackMetal}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.OF1_2.geometry}
                material={materials['Metal.005']}
                />
                <mesh castShadow receiveShadow geometry={nodes.OF1_3.geometry} material={materials.Light} />
            </group>
        </RigidBody>

        <RigidBody
            type='kinematicVelocity'
            colliders='trimesh'
            ref={ swiper2 }
            restitution={ 2 }
            name='swiper2'
            position={[38.634, 0, 0]}
        >
            <group >
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF2_1.geometry}
                    material={materials.BlackMetal}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF2_2.geometry}
                    material={materials['Metal.006']}
                    />
                    <mesh castShadow receiveShadow geometry={nodes.OF2_3.geometry} material={materials.Light} />
            </group>
        </RigidBody>

        <RigidBody
            type='kinematicVelocity'
            colliders='trimesh'
            ref={ swiper3 }
            restitution={ 1.5 }
            name='swiper3'
            position={[41.618, -2, 8.45]}
        >
            <group>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF3_1.geometry}
                    material={materials.BlackMetal}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF3_2.geometry}
                    material={materials['Metal.004']}
                    />
                    <mesh castShadow receiveShadow geometry={nodes.OF3_3.geometry} material={materials.Light} />
            </group>
        </RigidBody>

        <RigidBody
            type='kinematicVelocity'
            colliders='trimesh'
            ref={ swiper4 }
            restitution={ 1.3 }
            name='swiper4'
            position={[41.618, 0, -8.664]}
        >
            <group>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF4_1.geometry}
                    material={materials.BlackMetal}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.OF4_2.geometry}
                    material={materials['Metal.007']}
                    />
                    <mesh castShadow receiveShadow geometry={nodes.OF4_3.geometry} material={materials.Light} />
            </group>
        </RigidBody>

        {/* BW */}
        <RigidBody
            position={[57.742, -1, 0.125]}
            rotation={[0, - Math.PI / 2, 0]}
            type='fixed'
            name='baseWait'
            colliders={'trimesh'} 
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BW1_1.geometry}
                material={materials['BlueMetal.001']}
            />
            <CuboidCollider 
                sensor
                args={[ 0.5, 2, 2.5 ]} 
                position={[ 0 , 2, - 3.5]}
                rotation={[ 0, Math.PI / 2, 0 ]}
            />
        </RigidBody>

        <RigidBody
            position={[54.077, 0, -15.679]} 
            rotation={[0, Math.PI / 2, 0]}
            type='fixed'
            name='baseWait'
            colliders={'trimesh'} 
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BW2_1.geometry}
                material={materials['BlueMetal.001']}
            />
            <CuboidCollider 
                sensor
                args={[ 0.5, 2, 2.5 ]} 
                position={[ 0 , 2, 3.5]}
                rotation={[ 0, Math.PI / 2, 0 ]}
            />
        </RigidBody>

        <RigidBody
            position={[54.077, -1, 15.137]} 
            rotation={[0, Math.PI / 2, 0]}
            type='fixed'
            name='baseWait'
            colliders={'trimesh'} 
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BW3_1.geometry}
                material={materials['BlueMetal.001']}
            />
            <CuboidCollider 
                sensor
                args={[ 0.5, 2, 2.5 ]} 
                position={[ 0 , 2, 3.5]}
                rotation={[ 0, Math.PI / 2, 0 ]}
            />
        </RigidBody>

        {/* Ground */}
        <RigidBody type='fixed' name='ground' colliders={ 'trimesh' }>
        <group position={[57.742, -1, 0.125]} rotation={[0, - Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BW1_2.geometry}
                    material={materials.WhiteMetal}
                />
                <mesh 
                    castShadow 
                    receiveShadow 
                    geometry={nodes.BW1_3.geometry}  
                    material={materials.Glass} 
                />
            </group>
            <group position={[7.35, -0.25, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B1_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B1_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[13.243, -0.436, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B2_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B2_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[18.521, -1.75, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B3_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B3_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[18.521, -0.75, -6]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B13_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B13_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[18.521, -2.75, 6]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B4_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B4_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[24.874, -1, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF1_1.geometry}
                material={materials['Metal.005']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF1_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[23.414, -3.436, 7.276]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B5_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B5_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[23.48, -0.436, -7.142]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B14_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B14_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[28.914, -3.436, 7.276]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B6_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B6_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[28.98, -0.436, -7.142]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B15_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B15_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[34.576, -2.75, 8.343]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B7_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B7_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[34.633, -0.75, -8.571]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B16_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B16_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[31.559, -0.25, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B10_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B10_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[41.618, -1, -8.664]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF4_1.geometry}
                material={materials['Metal.007']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF4_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[41.618, -3, 8.45]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF3_1.geometry}
                material={materials['Metal.004']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF3_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[45.56, -0.25, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B11_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B11_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[41.405, -0.75, -15.594]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B17_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B17_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[38.634, -1, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF2_1.geometry}
                material={materials['Metal.006']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF2_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[50.967, -0.436, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B12_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B12_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[41.558, -2.436, 15.04]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B8_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B8_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[47.066, -2.436, 15.04]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B9_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B9_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[54.077, -1, 15.137]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BW3_2.geometry}
                material={materials.WhiteMetal}
                />
                <mesh castShadow receiveShadow geometry={nodes.BW3_3.geometry} material={materials.Glass} />
            </group>
            <group position={[47.033, -1.436, -15.607]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B18_1.geometry}
                material={materials['BlueMetal.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.B18_2.geometry}
                material={materials.YellowMetal}
                />
            </group>
            <group position={[54.077, 0, -15.679]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BW2_2.geometry}
                material={materials.WhiteMetal}
                />
                <mesh castShadow receiveShadow geometry={nodes.BW2_3.geometry} material={materials.Glass} />
            </group>
            <group
                name='BFinal' 
                position={[71.103, -1, 0.125]} 
                rotation={[Math.PI, 0, Math.PI]}
            >
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_1.geometry}
                material={materials.RedMetal}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_2.geometry}
                material={materials.WhiteMetal}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_3.geometry}
                material={materials.GoldMetal}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_4.geometry}
                material={materials['Light.001']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_5.geometry}
                material={materials['Metal.003']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_6.geometry}
                material={materials['Metal.002']}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.BF_7.geometry}
                material={materials['Metal.001']}
                />
                <mesh castShadow receiveShadow geometry={nodes.BF_8.geometry} material={materials.Metal} />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_1.geometry}
                material={materials['BlueMetal.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_2.geometry}
                material={materials.YellowMetal}
            />
            <mesh castShadow receiveShadow geometry={nodes.BS_3.geometry} material={materials.Glass} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_4.geometry}
                material={materials.WhiteMetal}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_5.geometry}
                material={materials['Metal.001']}
            />
            <mesh castShadow receiveShadow geometry={nodes.BS_6.geometry} material={materials.Metal} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_7.geometry}
                material={materials['Metal.003']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BS_8.geometry}
                material={materials['Metal.002']}
            />
        </RigidBody>
    </group>
  )
}

useGLTF.preload('./Model/SpaceGame.glb')
