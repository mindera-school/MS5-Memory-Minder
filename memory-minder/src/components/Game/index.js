import React, { useContext } from "react";
import styled from "styled-components";
import CardContainer from "../CardsContainer";

function Game() {
  return (
    <GameContainer>
      <CardContainer />
    </GameContainer>
  );
}

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Game;

/*
      {allCards.sort(() => Math.random() - 0.5)}

<Card
            onClick={() => console.log("-")}
            key={Math.random().toString(36).substr(2, 9)}
            image={e}
          />
*/
