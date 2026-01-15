import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../services/api"

interface UseCharactersFilters{
    name?: string
    species?: string
    status?: string
    page?: number
}

export function useCharacters(filters?: UseCharactersFilters) {
    return useQuery({
        queryKey: ['characters', filters],
        queryFn: () => getCharacters(filters),
    })
}