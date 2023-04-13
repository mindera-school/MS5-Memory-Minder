import React from "react";
import styled from "styled-components";
import Card from "../Card";

function CardContainer() {
    let allCards = [];
    for (let i = 0; i < 20; i++) {
      allCards.push(<Card key={i} />);
    }


    return(<Container>
        {allCards}
    </Container>);
}

const Container = styled.div`
    display: flex;
    padding: 10px;
    width: 800px;
    height: 800px;
    flex-wrap: wrap;
    flex-direction: row;
    border: 2px solid black;
`

export default CardContainer;