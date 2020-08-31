//Remember ICE

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterComponents from './components/Character';
import './App.css';


const Header = styled.h1`
  width: 100%;
`

const App = () => {
    const [characters, setCharacters] = useState([])

    //Calling axios to get my needed information
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                setCharacters(response.data.results)
            })
            .catch((err) => {
                console.log('error')
            })
    }, [])

    //Building Document

    return (
        <div className="App">
            <Header className="Header">Characters</Header>
            <CharacterComponents characters={characters} />
        </div>
    );
}

export default App;