import { Link } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import './Header.css'

interface HeaderProps {
    title?: string
    showBackButton?: boolean
}

function Header({ title = 'Rick and Morty', showBackButton = false }: HeaderProps) {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    {showBackButton && (
                        <Link to="/" className="back-button">
                            <span className="back-icon">←</span>
                            <span className="back-text">Back</span>
                        </Link>
                    )}
                    <Link to="/" className="header-logo">
                        <h1 className="header-title">{title}</h1>
                    </Link>
                </div>
                <div className="header-right">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
