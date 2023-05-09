import Game from "./components/Game";
import React, { createContext, useEffect, useState } from "react";
import Card from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";

export const appContext = createContext({});

function App() {
  const [allCards, setAllCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [clicks, setClicks] = useState(0);
  const images = [
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Autumn.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BarMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BatMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Big%20Wally.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Bigodes.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Biker.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Autumn.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BarMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BatMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Big%20Wally.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Bigodes.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Biker.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black.png?raw=true",
  ];

  useEffect(() => {
    if (chosenCards.length === 2) {
      if (chosenCards[0].image === chosenCards[1].image) {
        setAllCards(
          allCards.map((e) => {
            if (e.id === chosenCards[0].id || e.id === chosenCards[1].id) {
              return { ...e, found: true };
            }
            return e;
          })
        );
        setChosenCards([]);
      }
      setChosenCards([]);
    }
  }, [chosenCards]);

  useEffect(() => {
    setAllCards(
      images.map((e) => {
        return {
          id: Math.random().toString(36).substr(2, 9),
          image: e,
          found: false,
        };
      })
    );
    if (allCards.length !== 0) {
      setAllCards(allCards.sort(() => Math.random() - 0.5));
    }
  }, []);

  return (
    <appContext.Provider
      value={{
        allCards,
        setAllCards,
        setChosenCards,
        chosenCards,
        clicks,
        setClicks,
        setEndGame,
      }}
    >
      <div className="App">
        <Game></Game>
        <WinModal endGame={endGame}>
          <div>
            <h2>You win!</h2>
            <button
              onClick={() => {
                setAllCards([...allCards].map((e) => (e.found = false)));
                setEndGame(false);
                setClicks(0);
              }}
            >
              play again
            </button>
          </div>
        </WinModal>
        <GlobalStyle />
      </div>
    </appContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WinModal = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  height: 40%;
  width: 40%;
  z-index: 10;
  background-color: white;
  border: 1px solid black;
  display: ${({ endGame }) => (endGame ? "block" : "none")};

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export default App;
