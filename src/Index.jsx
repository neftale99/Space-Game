import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Physics } from '@react-three/rapier'
import { Suspense, useMemo } from 'react'
import { KeyboardControls, Stars } from '@react-three/drei'
import Interface from './Interface.jsx'
import UseGame from './Stores/UseGame.jsx'
import LoadingScreen from './LoadingScreen.jsx'

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump'
}

export default function Index()
{
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] }
    ]
  )

  return (
    <>
      <LoadingScreen />
        <KeyboardControls map={ map }>
          <Canvas 
            camera={{
              position: [ 0, 6, 6 ],
              fov: 50
            }}
            shadows
          >
            <Suspense>  
              <Stars 
                radius={100} 
                depth={50} 
                count={5000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1} 
              />  
              <Physics>
                <Experience />
              </Physics>
            </Suspense>
          </Canvas>
          <Interface />
        </KeyboardControls>
    </>
  )
}