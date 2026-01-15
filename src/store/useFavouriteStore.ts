import { create } from "zustand"
import { persist } from 'zustand/middleware'

interface FavoritesState {
    favorites: number[]
    addFavorite: (id: number) => void
    removeFavorite: (id: number) => void
    toggleFavorite: (id: number) => void
    isFavorite: (id: number) => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (id: number) =>
         set((state) => ({
              favorites: [...state.favorites, id]
            })),
        removeFavorite: (id: number) =>   
            set((state) => ({
                favorites: state.favorites.filter(favId => favId !== id)
            })),
        toggleFavorite: (id: number) => {
            set((state) => {
                if (state.favorites.includes(id)) {
                    return {
                        favorites: state.favorites.filter(favId => favId !== id)
                    }
                } else {
                    return {
                        favorites: [...state.favorites, id]
                    }
                }

            })
        },
        isFavorite: (id: number) => get().favorites.includes(id)
    }),
    {
      name: 'rick-morty-favorites'
    }
  )
)