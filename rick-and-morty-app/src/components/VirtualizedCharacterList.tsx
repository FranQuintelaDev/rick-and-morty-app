import { useCallback } from 'react'
import { FixedSizeList as List } from 'react-window'
import CharacterCard from './CharacterCard'
import type { Character } from '../types'
import './VirtualizedCharacterList.css'

interface VirtualizedCharacterListProps {
  characters: Character[]
}

function VirtualizedCharacterList({ characters }: VirtualizedCharacterListProps) {
  const ITEM_HEIGHT = 112
  const LIST_HEIGHT = 600

  const Row = useCallback(({ index, style }: { index: number; style: React.CSSProperties }) => {
    const character = characters[index]
    return (
      <div style={style}>
        <CharacterCard character={character} />
      </div>
    )
  }, [characters])

  return (
    <div className="virtualized-list-container">
      <List
        height={LIST_HEIGHT}
        itemCount={characters.length}
        itemSize={ITEM_HEIGHT}
        width="100%"
      >
        {Row}
      </List>
    </div>
  )
}

export default VirtualizedCharacterList