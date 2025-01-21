import { useKeyboardControls } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { addEffect } from '@react-three/fiber'
import UseGame from './Stores/UseGame.jsx'

export default function Interface()
{
    const time = useRef()

    const restart = UseGame((state) => state.restart)
    const phase = UseGame((state) => state.phase)

    const forward = useKeyboardControls((state) => state.forward)
    const back = useKeyboardControls((state) => state.back)
    const right = useKeyboardControls((state) => state.right)
    const left = useKeyboardControls((state) => state.left)
    const jump = useKeyboardControls((state) => state.jump)

    useEffect(() =>
    {
        const unsubscrybeEffect = addEffect(() => 
        {
            const state = UseGame.getState()
             
            let elapsedTime = 0

            if(state.phase === 'playing')
                elapsedTime = Date.now() - state.startTime
            else if(state.phase === 'ended')
                elapsedTime = state.endTime - state.startTime

            elapsedTime /= 1000
            elapsedTime = elapsedTime.toFixed(2)

            if(time.current)
                time.current.textContent = elapsedTime
        })

        return () =>
        {
            unsubscrybeEffect
        }

    }, [])

    return <div className='interface'>
        {/* Time */}
        <div ref={ time } className='time'>00.0</div>

        {/* Restart */}
        { 
            phase === 'ended' ? 
                <div 
                    className='restart' 
                    onClick={restart}
                >
                    Restart
                    <div className='text-restart'>
                        <p>
                            I hope you liked this game demo! <br />
                            If you're interested in seeing more of my work,<br />
                            <a href="https://www.instagram.com/n_code99/" target="_blank" rel="noopener noreferrer">
                            follow me!
                            </a>
                        </p>
                    </div>
                </div> : 
                null 
        }
        
        {/* Controls */}
        <div className='controls'>
        <div className='raw'>
        <div className={ `key ${ forward ? 'active' : '' }` }></div>
        </div>
        <div className='raw'>
            <div className={ `key ${ left ? 'active' : '' }` }></div>
            <div className={ `key ${ back ? 'active' : '' }` }></div>
            <div className={ `key ${ right ? 'active' : '' }` }></div>
        </div> 
        <div className='raw'>
            <div className={ `key large ${ jump ? 'active' : '' }` }></div>
        </div>
    </div>
    </div>
}