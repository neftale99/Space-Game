import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Robot({ jumpAnimation, onJump, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./Model/Robot4.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (jumpAnimation) {

      if (actions['PropellerAction']) {
        actions['PropellerAction']
          .reset()
          .fadeIn(0.2)
          .setEffectiveTimeScale(5)
          .play()
      }
      if (onJump) onJump() 
    } else {
      if (actions['PropellerAction']) {
        actions['PropellerAction'].fadeOut(0.05 )
      }
    }
  }, [jumpAnimation, onJump, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube011" position={[2.219, 0.931, 0]}>
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.RobotMetal}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.WhiteMetal}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials.Light}
          />
          <mesh
            name="Cube013_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_3.geometry}
            material={materials.EyesRobot}
          />
          <mesh
            name="Cube013_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_4.geometry}
            material={materials['Light.001']}
          />
        </group>
        <mesh
          name="Propeller"
          castShadow
          receiveShadow
          geometry={nodes.Propeller.geometry}
          material={materials.BlackMetal}
          position={[2.219, 1.964, 0]}
        />
      </group>
    </group>
  )
}

// Preload del modelo para optimizar la carga
useGLTF.preload('./Model/Robot4.glb')
