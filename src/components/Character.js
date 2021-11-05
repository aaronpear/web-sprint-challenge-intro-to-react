import React, { useState } from "react";
import styled from 'styled-components';
// Write your Character component here

const StyledCharacter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    background-color: white;
    width: 80%;
    border: 2px solid black;
    margin-top: 1%;
`

const Character = (props) => {
    const { name } = props;

    return (
        <StyledCharacter className='character'>
            <p>{name}</p>
            <i class="fas fa-angle-down"></i>      
        </StyledCharacter>
    );
}

export default Character;