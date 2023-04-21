import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import CardContainer from "../CardsContainer";
import { appContext } from "../../App";

function Game() {
  const { allCards, setEndGame, clicks } = useContext(appContext);
  const numberOfFound = allCards.filter((e) => {
    if (e.found) {
      return true;
    }
    return false;
  }).length;

  useEffect(() => {
    if (numberOfFound === 20) {
      setEndGame(true);
    }
  }, [numberOfFound]);

  return (
    <GameContainer>
      <Counter>
        <span>Number of Cards Found:</span>
        {numberOfFound}
        <span>Mismatches:</span>
        {Math.floor((clicks - numberOfFound) / 2)}
      </Counter>
      <CardContainer />
    </GameContainer>
  );
}

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Counter = styled.div`
  width: 250px;
  height: 80px;
  background-color: blue;
  margin-bottom: 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 900;
`;

export default Game;
