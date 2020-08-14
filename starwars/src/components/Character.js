//Remember ICE

// Write your Character component here
import React from "react";
import styled, {keyframes} from 'styled-components';
import '../App.css';



const kf = keyframes `
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

//Container Styling
const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    }
`;

//Character Card Styles
const CharacterCards = styled.div`
    border: 2px solid white;
    width: 80%;
    margin: 2rem;
    color: whitesmoke;
    background-color: black;
    opacity: 0;
    transform: scale(10) rotateZ(180deg);
    animation: ${kf} .5s ease-in-out forwards;
    }
`;

//creating my function
const CharacterComponents = (props) => {
    const {characters} = props;
        return (
        <MainContainer className='container'>

                {/* map through all my characters to build the card */}
                {
                characters.map((props) => {
                    return (
                    <CharacterCards key = {props.name}>
                        {/* Character Name */}
                        <h2>My Name Is {props.name}</h2>
                        {/* Character Height */}
                        <h3>I'm {props.height} cm Tall</h3>
                        {/* Character Weight */}
                        <h3>My Body Mass is {props.mass}</h3>
                        {/* Character Gender */}
                        <h3>I Identify as {props.gender}</h3>
                        {/* Hair Color */}
                        <h3>My beatiful {props.hair_color} hair brings all the boys to the yard</h3>
                    </CharacterCards> 
                    )
                })
            }

        </MainContainer>
    )
}
// Exporting the function
export default CharacterComponents;