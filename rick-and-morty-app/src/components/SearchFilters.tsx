import { useCallback } from 'react'

interface Filters {
    name: string
    species: string
    status: string
}

interface SearchFiltersProps {
    filters: Filters
    onFilterChange: (filters: Filters) => void
    onSearch: () => void
    onReset: () => void
}

function SearchFilters({ filters, onFilterChange, onSearch, onReset }: SearchFiltersProps) {

    const handleFilterChange = useCallback((newFilters: Filters) => {
        onFilterChange(newFilters)
    }, [onFilterChange])

    return (
        <div className="search-filters">
            <input
                type="text"
                placeholder="Search by name..."
                value={filters.name}
                onChange={(e) => handleFilterChange({ ...filters, name: e.target.value })}
            />
            
            <input
                type="text"
                placeholder="Filter by species..."
                value={filters.species}
                onChange={(e) => handleFilterChange({ ...filters, species: e.target.value })}
            />
            
            <select
                value={filters.status}
                onChange={(e) => handleFilterChange({ ...filters, status: e.target.value })}
            >
                <option value="">All Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>

            <button onClick={onSearch} className="search-button">Search</button>
            <button onClick={onReset} className="reset-button">Reset</button>
        </div>
    )
}

export default SearchFilters