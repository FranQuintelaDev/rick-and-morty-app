import { Link } from "react-router-dom";
import { memo } from "react";
import type { Character } from "../types";
import FavoriteButton from "./FavoriteButton";
import './CharacterCard.css';

interface CharacterCardProps {
    character: Character
}

function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div className="character-card">
            <FavoriteButton characterId={character.id} />
            <Link to={`/character/${character.id}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, textDecoration: 'none' }}>
                <div className="character-image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character-info">
                    <h2>{character.name}</h2>
                    <p>{character.species} - {character.status}</p>
                </div>
            </Link>
        </div>
    )
}

export default memo(CharacterCard)