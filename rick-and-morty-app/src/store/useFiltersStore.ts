import { create } from "zustand"

export interface Filters {
    name: string
    species: string
    status: string
}

interface FiltersState {
    filters: Filters
    appliedFilters: Filters
    setFilter: (key: keyof Filters, value: string) => void
    setFilters: (filters: Filters) => void
    applyFilters: () => void
    resetFilters: () => void
}

const initialFilters: Filters = {
    name: '',
    species: '',
    status: ''
}

export const useFiltersStore = create<FiltersState>((set) => ({
    filters: { ...initialFilters },
    appliedFilters: { ...initialFilters },
    
    setFilter: (key, value) => 
        set((state) => ({
            filters: { ...state.filters, [key]: value }
        })),
    
    setFilters: (filters) => 
        set({ filters }),
    
    applyFilters: () => 
        set((state) => ({
            appliedFilters: { ...state.filters }
        })),
    
    resetFilters: () => 
        set({
            filters: { ...initialFilters },
            appliedFilters: { ...initialFilters }
        })
}))
