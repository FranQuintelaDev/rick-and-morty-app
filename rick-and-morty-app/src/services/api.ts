import type { Character, CharacterResponse } from "../types";

const BASE_URL = 'https://rickandmortyapi.com/api';
interface Filters {
    name?: string
    species?: string
    status?: string
    page?: number
}
export async function getCharacters(filters?: Filters) : Promise<CharacterResponse> {
    const url = new URL(`${BASE_URL}/character`)

    const params = new URLSearchParams()

    if (filters?.name) params.append('name', filters.name)
    if (filters?.species) params.append('species', filters.species)
    if (filters?.status) params.append('status', filters.status)
    if (filters?.page) params.append('page', filters.page.toString())
    
    const response = await fetch(`${url.toString()}?${params.toString()}`)
    if (!response.ok) {
        throw new Error('Failed to fetch characters')
    }
    return response.json()
}

export async function getCharacter(id: number) : Promise<Character> {
    const response = await fetch(`${BASE_URL}/character/${id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch character')
    }
    return response.json()
}