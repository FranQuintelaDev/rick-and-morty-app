import { useParams } from "react-router-dom"
import { useMemo } from "react"
import { useCharacter } from "../hooks/useCharacter"
import FavoriteButton from "../components/FavoriteButton"
import Header from "../components/Header"
import { Loading, ErrorMessage, EmptyState } from "../components/ui"
import './CharacterDetail.css'

function CharacterDetail() {
    const { id } = useParams<{ id: string }>()
    const { data: character, isLoading, isError, refetch } = useCharacter(id ? parseInt(id) : undefined)

    const getStatusClass = useMemo(() => {
        return (status: string) => `status-badge status-${status.toLowerCase()}`
    }, [])

    if (isLoading) return (
        <div className="character-detail-page">
            <Header showBackButton />
            <main className="character-detail-main">
                <Loading message="Loading character..." size="large" fullScreen />
            </main>
        </div>
    )

    if (isError) return (
        <div className="character-detail-page">
            <Header showBackButton />
            <main className="character-detail-main">
                <div className="character-detail-container">
                    <ErrorMessage 
                        title="Error loading character"
                        message="We couldn't load this character's details."
                        onRetry={() => refetch()}
                    />
                </div>
            </main>
        </div>
    )

    if (!character) return (
        <div className="character-detail-page">
            <Header showBackButton />
            <main className="character-detail-main">
                <div className="character-detail-container">
                    <EmptyState 
                        title="Character not found"
                        message="The character you're looking for doesn't exist."
                        icon="👽"
                    />
                </div>
            </main>
        </div>
    )

    return (
       <div className="character-detail-page">
            <Header showBackButton />
            
            <main className="character-detail-main">
                <div className="character-detail-container">
                    <div className="character-detail-card">
                        <div className="character-detail-image">
                            <img src={character.image} alt={character.name} />
                            <span className={getStatusClass(character.status)}>
                                {character.status}
                            </span>
                        </div>

                        <div className="character-detail-body">
                            <div className="character-detail-header">
                                <div>
                                    <h1>{character.name}</h1>
                                    <p className="character-subtitle">{character.species} • {character.gender}</p>
                                </div>
                                <FavoriteButton characterId={character.id} />
                            </div>

                            <div className="character-detail-info">
                                {character.type && (
                                    <div className="info-item">
                                        <span className="info-label">Type</span>
                                        <span className="info-value">{character.type}</span>
                                    </div>
                                )}

                                <div className="info-item">
                                    <span className="info-label">Origin</span>
                                    <span className="info-value">{character.origin.name}</span>
                                </div>

                                <div className="info-item">
                                    <span className="info-label">Last Known Location</span>
                                    <span className="info-value">{character.location.name}</span>
                                </div>

                                <div className="info-item">
                                    <span className="info-label">Episodes</span>
                                    <span className="info-value">{character.episode.length} episode{character.episode.length !== 1 ? 's' : ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CharacterDetail