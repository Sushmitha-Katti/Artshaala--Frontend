import React, { Component } from "react";
import styled from "styled-components";
import guitar1 from "./images/guitar1.png";
import Cards from "./cards";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(245px, 245px));
  //grid-template-columns: 20% 20% 20% 20%;
`;

class Carditems extends Component {
  state = {};
  render() {
    let items = [
      {
        img: { guitar1 },
        title: "Guitars Name Guitars Name ",
        cost: "INR 2000"
      },
      {
        img: { guitar1 },
        title: "Guitars Name Guitars Name ",
        cost: "INR 2000"
      },
      {
        img: { guitar1 },
        title: "Guitars Name Guitars Name ",
        cost: "INR 2000"
      },
      {
        img: { guitar1 },
        title: "Guitars Name Guitars Name ",
        cost: "INR 2000"
      }
    ].map(card => {
      card.key = `{card.cost}`;
      return card;
    });

    let List = items.map(card => (
      <div>
        <Cards Contents={card} />
      </div>
    ));
    return (
      <div>
        <Wrapper>{List}</Wrapper>
      </div>
    );
  }
}

export default Carditems;
