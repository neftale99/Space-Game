import { useProgress } from '@react-three/drei'

export const LoadingScreen = () =>
{
    const { progress, active } = useProgress()

    return (
        <div className={`loadingScreen ${active ? '' : 'loadingScreen--hidden'}`}>
            <div className="loadingScreen-container">
                <h1 className="loadingScreen-title"> Space Game </h1>
                <div className="progress-container">
                    <div className="progress-bar" style={{
                        width: `${progress}%`
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen