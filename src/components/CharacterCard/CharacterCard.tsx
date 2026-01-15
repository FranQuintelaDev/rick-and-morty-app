import { Link } from "react-router-dom";
import { memo } from "react";
import type { Character } from "../../types";
import FavoriteButton from "../FavoriteButton";
import './CharacterCard.css';

interface CharacterCardProps {
    character: Character
}

function CharacterCard({ character }: CharacterCardProps) {
    const getStatusClass = (status: string) => {
        return `character-status status-${status.toLowerCase()}`
    }

    return (
        <article className="character-card">
            <div className="character-card-favorite">
                <FavoriteButton characterId={character.id} />
            </div>
            <Link to={`/character/${character.id}`} className="character-card-link">
                <div className="character-card-image">
                    <img src={character.image} alt={character.name} loading="lazy" />
                    <span className={getStatusClass(character.status)}>
                        {character.status}
                    </span>
                </div>
                <div className="character-card-content">
                    <h3 className="character-card-name">{character.name}</h3>
                    <p className="character-card-species">{character.species}</p>
                    <div className="character-card-meta">
                        <span className="character-card-location">
                            📍 {character.location.name}
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default memo(CharacterCard)
