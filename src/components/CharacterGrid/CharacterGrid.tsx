import type { Character } from '../../types'
import CharacterCard from '../CharacterCard'
import './CharacterGrid.css'

interface CharacterGridProps {
    characters: Character[]
}

function CharacterGrid({ characters }: CharacterGridProps) {
    return (
        <div className="character-grid">
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharacterGrid
