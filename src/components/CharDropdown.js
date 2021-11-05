import React from 'react';

const CharDropdown = (props) => {
    const { character } = props;
    return (
        <div className='char-dropdown' className='toggle'>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height} cm</p>
            <p>Mass: {character.mass} kg</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </div>
    )
}

export default CharDropdown;