import { useCharacters } from "../hooks/useCharacters"
import SearchFilters from "../components/SearchFilters/SearchFilters"
import CharacterGrid from "../components/CharacterGrid"
import Header from "../components/Header"
import { Loading, ErrorMessage, EmptyState } from "../components/ui"
import { useFiltersStore } from "../store/useFiltersStore"
import './CharacterList.css'

function CharacterList() {
    const { appliedFilters, resetFilters } = useFiltersStore()
    const { data, isLoading, error, refetch } = useCharacters(appliedFilters)

    return (
        <div className="character-list-page">
            <Header title="Rick and Morty" />
            
            <main className="character-list-main">
                <div className="character-list-container">
                    <SearchFilters />

                    {isLoading && (
                        <Loading 
                            message="Loading characters..." 
                            size="large" 
                            fullScreen 
                        />
                    )}

                    {error && (
                        <ErrorMessage 
                            title="Error loading characters"
                            message="Something went wrong while fetching the characters."
                            onRetry={() => refetch()}
                        />
                    )}

                    {!isLoading && !error && !data?.results?.length && (
                        <EmptyState 
                            title="No characters found"
                            message="Try adjusting your search or filters to find what you're looking for."
                            icon="👽"
                            actionLabel="Clear Filters"
                            onAction={resetFilters}
                        />
                    )}

                    {!isLoading && !error && data?.results && data.results.length > 0 && (
                        <>
                            <div className="results-info">
                                <span className="results-count">
                                    Found {data.info.count} character{data.info.count !== 1 ? 's' : ''}
                                </span>
                            </div>
                            <CharacterGrid characters={data.results} />
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default CharacterList