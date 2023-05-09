import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../Card";
import { appContext } from "../../App";

function CardContainer() {
  const { allCards } = useContext(appContext);
  const { setAllCards } = useContext(appContext);
  const { buttonState } = useContext(appContext);
  const showCards = allCards.map((e) => {
    return <Card image={e.image} id={e.id} found={e.found} />;
  });
  return <Container>{showCards}</Container>;
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  width: 800px;
  height: 800px;
  flex-wrap: wrap;
  flex-direction: row;
  border: 2px solid black;
`;

export default CardContainer;
