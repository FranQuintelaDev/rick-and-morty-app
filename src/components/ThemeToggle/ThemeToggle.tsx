import { useTheme } from "../../context/ThemeContext";
import './ThemeToggle.css'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    )
}

export default ThemeToggle
