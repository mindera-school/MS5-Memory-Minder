import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { appContext } from "../../App";

function Card({ image, id, found }) {
  const { setChosenCards } = useContext(appContext);
  const { chosenCards } = useContext(appContext);
  const info = { image: image, id: id, found: found };
  const [imageToRender, setImageToRender] = useState();

  const isChosen = () => {
    const searchResult = chosenCards.find(e => e.id === info.id);
    return searchResult === undefined ? false : true;
  };

  const getImage = () => {
    if (found) {
      console.log(found)
      return <img src={image} alt="Minder icons" />;
    }
    if (isChosen()) {
      return <img src={image} alt="Minder icons" />;
    }
    return <img src={"https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Pixel%20Art/MinderaOlhoLozangulo.png?raw=true"} alt="Pixel minder" />;
  }

  useEffect(() => {
    setImageToRender(getImage());
  }, [chosenCards.length])

  return (
    <Container onClick={() => {
      if (isChosen()) {
        return;
      }
      setChosenCards([...chosenCards, info])
    }}>
      {/* {imageToRender} */}
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
