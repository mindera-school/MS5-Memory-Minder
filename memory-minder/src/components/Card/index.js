import React from "react";
import styled from "styled-components";

function Card({ image }) {
  return (<Container>
    <img src={image} />
  </Container>);
}

const Container = styled.div`
  margin: 5px;
  width: 150px;
  height: 180px;
  background-color: blue;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img{
    height: 150px;
    width: 150px;
  }
`;

export default Card;