import { describe, it, expect, vi } from 'vitest'
import { getCharacters } from '../services/api'
import type { CharacterResponse } from '../types'

vi.mock('../services/api')

describe('useCharacters', () => {
    it('should fetch characters with filters', async () => {
        // Arrange
        const mockCharacters: CharacterResponse = {
            info: { count: 1, pages: 1, next: '', prev: '' },
            results: [
                { 
                    id: 1, 
                    name: 'Rick', 
                    species: 'Human', 
                    status: 'Alive', 
                    type: '', 
                    gender: 'Male', 
                    origin: { name: 'Earth', url: '' }, 
                    location: { name: 'Earth', url: '' }, 
                    image: '', 
                    episode: [], 
                    url: '', 
                    created: '' 
                },
            ]
        }

        vi.mocked(getCharacters).mockResolvedValue(mockCharacters)

        // Act
        const result = await getCharacters({ name: 'Rick' })

        // Assert
        expect(getCharacters).toHaveBeenCalled()
        expect(getCharacters).toHaveBeenCalledWith({ name: 'Rick' })
        expect(result).toEqual(mockCharacters)
    })
})