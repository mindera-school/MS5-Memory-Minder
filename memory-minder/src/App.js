import Game from "./components/Game";
import React, { createContext, useEffect, useState } from "react";
import Card from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";

export const appContext = createContext({});

function App() {
  const [allCards, setAllCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [buttonState, setButtonState] = useState();
  const images = [
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Agent.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Autumn.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BarMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/BatMinder.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Big%20Wally.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Bigodes.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Biker.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black.png?raw=true",
    "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Agent.png?raw=true",
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
      if(chosenCards[0].id === chosenCards[1].id){
        setChosenCards([chosenCards[0]]);
        return;
      }
      if (chosenCards[0].image === chosenCards[1].image){
        //Matched
         setButtonState(true)
      }
      setChosenCards([])
    }
  }, [chosenCards]);

  useEffect(() => {
    setAllCards(
      images.map((e) => {
        return {
          id: Math.random().toString(36).substr(2, 9),
          image: e,
        };
      })
    );
    allCards.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <appContext.Provider value={{ allCards, setChosenCards, chosenCards, buttonState }}>
      <div className="App">
        <Game></Game>
        <GlobalStyle />
      </div>
    </appContext.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    display: flex;;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
