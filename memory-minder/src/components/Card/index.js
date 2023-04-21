import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { appContext } from "../../App";

function Card({ image, id, found }) {
  const { setChosenCards } = useContext(appContext);
  const { chosenCards } = useContext(appContext);
  const { clicks } = useContext(appContext);
  const { setClicks } = useContext(appContext);
  const info = { image: image, id: id, found: found };

  const isChosen = () => {
    const searchResult = chosenCards.find(e => e.id === info.id);
    return searchResult === undefined ? false : true;
  };

  return (
    <Container className={isChosen() || found ? "flip-card" : ""} onClick={() => {
      setClicks(clicks + 1);
      if (isChosen()) { return; }
      setChosenCards([...chosenCards, info])
    }}>
      <CardInner className={isChosen() || found ? "flip-card" : ""}>
        <FrontSide>
          <img src={"https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Pixel%20Art/MinderaOlhoLozangulo.png?raw=true"} alt="Pixel minder" />
        </FrontSide>
        <BackSide>
          <img src={image} alt="Minder icons" />
        </BackSide>
      </CardInner>

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
  perspective: 1000px;
  transition: transform 0.8s;

  & img {
    height: 150px;
    width: 150px;
    align-self: center;
  }
`;

const CardInner = styled.div`
 position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`
const FrontSide = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`
const BackSide = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default Card;
