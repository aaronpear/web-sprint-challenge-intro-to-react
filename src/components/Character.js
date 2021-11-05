import React, { useState } from "react";
import styled from 'styled-components';
import CharDropdown from './CharDropdown';
// Write your Character component here

const StyledCharacter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    background-color: white;
    width: 80%;
    border: 2px solid black;
    margin-top: 1%;

    .name   {
        display: flex;
        justify-content: space-between;
    }
`

const Character = (props) => {
    const { character } = props;

    return (
        <StyledCharacter className='character'>
            <p className='name'>{character.name}<i className="fas fa-angle-down"></i></p>
            <CharDropdown character={character} />
        </StyledCharacter>
    );
}

export default Character;