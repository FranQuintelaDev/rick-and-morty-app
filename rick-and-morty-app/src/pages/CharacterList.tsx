import { useState, useMemo } from "react"
import { useCharacters } from "../hooks/useCharacters"
import SearchFilters from "../components/SearchFilters"
import './CharacterList.css'
import VirtualizedCharacterList from "../components/VirtualizedCharacterList"

function CharacterList() {
    const [searchParams, setSearchParams] = useState({
        name: '',
        species: '',
        status: ''
    })

    const [filterInput, setFilterInput] = useState({
        name: '',
        species: '',
        status: ''
    })

    const memoizedSearchParams = useMemo(() => ({
        name: searchParams.name,
        species: searchParams.species,
        status: searchParams.status
    }), [searchParams.name, searchParams.species, searchParams.status])

    const { data, isLoading, error } = useCharacters(memoizedSearchParams)

    const handleSearch = () => {
        setSearchParams(filterInput)
    }

    const handleReset = () => {
        setFilterInput({
            name: '',
            species: '',
            status: ''
        })
        setSearchParams({
            name: '',
            species: '',
            status: ''
        })
    }

    return (
        <div className="character-list-container">
            <h1>Rick and Morty Characters</h1>
            <SearchFilters
                filters={filterInput}
                onFilterChange={setFilterInput}
                onSearch={handleSearch}
                onReset={handleReset}
            />

            {isLoading && (
                <div className="state-message loading">
                    <div className="spinner"></div>
                    <p>Loading characters...</p>
                </div>
            )}

            {error && (
                <div className="state-message error">
                    <span className="icon">⚠️</span>
                    <p>Error loading characters</p>
                </div>
            )}

            {!isLoading && !error && !data && (
                <div className="state-message not-found">
                    <span className="icon">🔍</span>
                    <p>No characters found</p>
                </div>
            )}

            {!isLoading && !error && data && (
                <VirtualizedCharacterList characters={data.results} />
            )}
        </div>
    )
}

export default CharacterList