import React, { useContext } from "react";
import styled from "styled-components";
import { appContext } from "../../App";

function Card({ image, id }) {
  const { setChosenCards } = useContext(appContext);
  const { chosenCards } = useContext(appContext);
  const info = { image: image, id: id };

  return (
    <Container onClick={() => setChosenCards([...chosenCards, info])}>
      <img src={image} alt="Minder icons" />
    </Container>
  );
}

const Container = styled.button`
  margin: 5px;
  width: 150px;
  height: 180px;
  background-color: blue;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  & img {
    height: 150px;
    width: 150px;
  }
`;

export default Card;
