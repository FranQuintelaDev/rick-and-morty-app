import './EmptyState.css'

interface EmptyStateProps {
    title?: string
    message?: string
    icon?: string
    actionLabel?: string
    onAction?: () => void
}

function EmptyState({ 
    title = 'No results found',
    message = 'Try adjusting your search or filters',
    icon = '🔍',
    actionLabel,
    onAction
}: EmptyStateProps) {
    return (
        <div className="empty-state-container">
            <span className="empty-state-icon">{icon}</span>
            <h3 className="empty-state-title">{title}</h3>
            <p className="empty-state-message">{message}</p>
            {actionLabel && onAction && (
                <button className="empty-state-action" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    )
}

export default EmptyState
