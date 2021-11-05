import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Character from './components/Character';

const StyledDiv = styled.div`
  border: 2px solid black;
  border-radius: 2%;
  background-color: white;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        // console.log(response);
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
        {characters.map(character => {
          return <Character name={character.name} />
          // console.log(character.name);
        })}
      </StyledDiv>
    </div>
  );
}

export default App;
