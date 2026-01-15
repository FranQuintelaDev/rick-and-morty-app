import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail'
import CharacterList from './pages/CharacterList'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import './styles/global.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App