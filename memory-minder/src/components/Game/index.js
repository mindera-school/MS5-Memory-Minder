import React from "react";
import styled from "styled-components";
import CardContainer from "../CardsContainer";

function Game() {
  return (
    <GameContainer>
      <CardContainer></CardContainer>
    </GameContainer>
  );
}

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Game;
