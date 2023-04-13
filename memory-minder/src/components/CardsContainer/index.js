import React from "react";
import styled from "styled-components";
import Card from "../Card";

function CardContainer() {
    const allCards = [];
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
        "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black.png?raw=true"
    ];

    for (let i = 0; i < 10; i++) {
        allCards.push(<Card key={i} image={images[i]} />);
    }


    return (<Container>
        {[...allCards, ...allCards].sort(() => Math.random() - 0.5)}
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