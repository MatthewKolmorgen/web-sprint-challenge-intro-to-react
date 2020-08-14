//Remember ICE

// Write your Character component here
import React from "react";
import styled from 'styled-components';
import '../App.css';



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
border: 1px solid white;
width: 80%;
margin: 2rem;
background-color: #191919;
color: whitesmoke;
border-radius: 1%;
`;

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