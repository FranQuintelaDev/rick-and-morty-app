import './Loading.css'

interface LoadingProps {
    message?: string
    size?: 'small' | 'medium' | 'large'
    fullScreen?: boolean
}

function Loading({ 
    message = 'Loading...', 
    size = 'medium',
    fullScreen = false 
}: LoadingProps) {
    return (
        <div className={`loading-container ${fullScreen ? 'fullscreen' : ''}`}>
            <div className={`loading-spinner ${size}`}></div>
            {message && <p className="loading-message">{message}</p>}
        </div>
    )
}

export default Loading
