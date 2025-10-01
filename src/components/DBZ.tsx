import type { Character } from "../interfaces/Characters";
import styled from "styled-components";

// --- Styled Components ---
const AllCharactersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  background-color: #f0f4f8;
`;

const SingleCharacterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;  
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 15px;
  margin: 10px;
  width: 220px;  

  h1 {
    font-size: calc(16px + 1vw);  
    margin: 10px 0 5px 0;
    color: #333;
    text-align: center;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover; 
    border-radius: 20%;  
    margin-bottom: 10px;
  }

  p {
    font-size: calc(12px + 0.5vw);
    color: #666;
    margin: 0;
    text-align: center;
  }
`;

export default function DBZcharacters(props : {data:Character[]}) {
  return (
    <AllCharactersDiv>
      {props.data.map((c: Character) => (
        <SingleCharacterDiv key={c.id}>
          <h1>{c.name}</h1>
          <img src={c.image_url} alt={`image of ${c.name}`} />
        </SingleCharacterDiv>
      ))}
    </AllCharactersDiv>
  );
}
