import { useFiltersStore } from '../../store/useFiltersStore'
import './SearchFilters.css'

function SearchFilters() {
    const { filters, setFilter, applyFilters, resetFilters } = useFiltersStore()

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            applyFilters()
        }
    }

    return (
        <div className="search-filters-container">
            <div className="search-filters-inputs">
                <div className="filter-group">
                    <label htmlFor="name-filter">Name</label>
                    <input
                        id="name-filter"
                        type="text"
                        placeholder="Search by name..."
                        value={filters.name}
                        onChange={(e) => setFilter('name', e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                
                <div className="filter-group">
                    <label htmlFor="species-filter">Species</label>
                    <input
                        id="species-filter"
                        type="text"
                        placeholder="Filter by species..."
                        value={filters.species}
                        onChange={(e) => setFilter('species', e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                
                <div className="filter-group">
                    <label htmlFor="status-filter">Status</label>
                    <select
                        id="status-filter"
                        value={filters.status}
                        onChange={(e) => setFilter('status', e.target.value)}
                    >
                        <option value="">All Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>

            <div className="search-filters-actions">
                <button onClick={applyFilters} className="btn btn-primary">
                    <span className="btn-icon">🔍</span>
                    Search
                </button>
                <button onClick={resetFilters} className="btn btn-secondary">
                    <span className="btn-icon">↺</span>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default SearchFilters
