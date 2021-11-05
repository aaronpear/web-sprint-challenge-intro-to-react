import React from "react";
import Character from "./Character";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
`

const Characters = (props) => {
    const { characters } = props;
    return (
        <StyledDiv className='characters-div'>
            {characters.map(character => {
                return <Character name={character.name} />
                // console.log(character.name);
            })}
        </StyledDiv>
    )
}

export default Characters;