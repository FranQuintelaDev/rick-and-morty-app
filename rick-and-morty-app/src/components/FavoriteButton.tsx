import { useCallback } from 'react'
import { useFavoritesStore } from '../store/useFavouriteStore'
import './FavoriteButton.css'

interface FavoriteButtonProps {
  characterId: number
}

function FavoriteButton({ characterId }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavoritesStore()
  const favorite = isFavorite(characterId)

  const handleToggleFavorite = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite(characterId)
  }, [toggleFavorite, characterId])

  return (
    <button
      onClick={handleToggleFavorite}
      className="favorite-button"
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorite ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton