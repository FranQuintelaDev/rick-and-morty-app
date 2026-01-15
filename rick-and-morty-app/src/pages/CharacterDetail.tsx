import { Link, useParams } from "react-router-dom"
import { useMemo } from "react"
import { useCharacter } from "../hooks/useCharacter"
import FavoriteButton from "../components/FavoriteButton"
import './CharacterDetail.css'

function CharacterDetail() {
    const { id } = useParams<{ id: string }>()
    const { data: character, isLoading, isError } = useCharacter(id ? parseInt(id) : undefined)

    const getStatusClass = useMemo(() => {
        return (status: string) => `status-badge status-${status.toLowerCase()}`
    }, [])

    if (isLoading) return (
        <div className="character-detail-container">
            <div className="state-message loading">
                <div className="spinner"></div>
                <p>Loading character...</p>
            </div>
        </div>
    )
    if (isError) return (
        <div className="character-detail-container">
            <div className="state-message error">
                <span className="icon">⚠️</span>
                <p>Error loading character</p>
            </div>
        </div>
    )
    if (!character) return (
        <div className="character-detail-container">
            <div className="state-message not-found">
                <span className="icon">🔍</span>
                <p>No character found</p>
            </div>
        </div>
    )

    return (
       <div className="character-detail-container">
            <Link to="/" className="back-link">
                ← Back to list
            </Link>
            
            <div className="character-detail-header">
                <h1>{character.name}</h1>
                <FavoriteButton characterId={character.id} />
            </div>

            <div className="character-detail-content">
                <div className="character-detail-image">
                    <img src={character.image} alt={character.name} />
                </div>

                <div className="character-detail-info">
                    <div className="info-item">
                        <strong>Status</strong>
                        <p>
                            <span className={getStatusClass(character.status)}>
                                {character.status}
                            </span>
                        </p>
                    </div>

                    <div className="info-item">
                        <strong>Species</strong>
                        <p>{character.species}</p>
                    </div>

                    <div className="info-item">
                        <strong>Gender</strong>
                        <p>{character.gender}</p>
                    </div>

                    {character.type && (
                        <div className="info-item">
                            <strong>Type</strong>
                            <p>{character.type}</p>
                        </div>
                    )}

                    <div className="info-item">
                        <strong>Origin</strong>
                        <p>{character.origin.name}</p>
                    </div>

                    <div className="info-item">
                        <strong>Last Known Location</strong>
                        <p>{character.location.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterDetail