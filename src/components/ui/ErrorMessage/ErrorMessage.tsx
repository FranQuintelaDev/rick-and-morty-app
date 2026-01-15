import './ErrorMessage.css'

interface ErrorMessageProps {
    title?: string
    message?: string
    icon?: string
    onRetry?: () => void
}

function ErrorMessage({ 
    title = 'Oops! Something went wrong',
    message = 'We couldn\'t load the data. Please try again.',
    icon = '⚠️',
    onRetry
}: ErrorMessageProps) {
    return (
        <div className="error-container">
            <span className="error-icon">{icon}</span>
            <h3 className="error-title">{title}</h3>
            <p className="error-message">{message}</p>
            {onRetry && (
                <button className="error-retry-button" onClick={onRetry}>
                    Try Again
                </button>
            )}
        </div>
    )
}

export default ErrorMessage
