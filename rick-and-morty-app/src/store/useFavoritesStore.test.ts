import { describe, it, expect, beforeEach } from 'vitest'
import { useFavoritesStore } from './useFavouriteStore'

describe('useFavoritesStore', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favorites: [] })
  })

  it('should initialize with empty favorites', () => {
    const { favorites } = useFavoritesStore.getState()
    expect(favorites).toEqual([])
  })

  it('should add favorite', () => {
    const { addFavorite } = useFavoritesStore.getState()
    addFavorite(1)
    
    const { favorites } = useFavoritesStore.getState()
    expect(favorites).toContain(1)
  })

  it('should remove favorite', () => {
    const { addFavorite, removeFavorite } = useFavoritesStore.getState()
    addFavorite(1)
    addFavorite(2)
    removeFavorite(1)
    
    const { favorites } = useFavoritesStore.getState()
    expect(favorites).toEqual([2])
  })

  it('should toggle favorite on', () => {
    const { toggleFavorite } = useFavoritesStore.getState()
    toggleFavorite(1)
    
    const { isFavorite } = useFavoritesStore.getState()
    expect(isFavorite(1)).toBe(true)
  })

  it('should toggle favorite off', () => {
    const { toggleFavorite } = useFavoritesStore.getState()
    toggleFavorite(1)
    toggleFavorite(1)
    
    const { isFavorite } = useFavoritesStore.getState()
    expect(isFavorite(1)).toBe(false)
  })

  it('should check if favorite exists', () => {
    const { addFavorite, isFavorite } = useFavoritesStore.getState()
    addFavorite(5)
    
    expect(isFavorite(5)).toBe(true)
    expect(isFavorite(999)).toBe(false)
  })

  it('should handle multiple favorites', () => {
    const { addFavorite } = useFavoritesStore.getState()
    addFavorite(1)
    addFavorite(2)
    addFavorite(3)
    
    const { favorites } = useFavoritesStore.getState()
    expect(favorites).toHaveLength(3)
    expect(favorites).toEqual([1, 2, 3])
  })
})