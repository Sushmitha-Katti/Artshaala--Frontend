import React, { Component } from "react";
import styled from "styled-components";
import guitar1 from "./images/guitar1.png";
import Cards from "./cards";

const Parent = styled.div`
  margin-bottom: 300px;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  //grid-gap: 30px;
  justify-items: center;
  //grid-template-columns: repeat(auto-fit, minmax(245px, 245px));
  margin: 6rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1230px) {
    margin: 3rem;
  }

  @media (max-width: 1024px) {
    margin: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    margin: 1rem;
    grid-template-columns: 1fr;
  }
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
      <Parent>
        <Wrapper>{List}</Wrapper>
      </Parent>
    );
  }
}

export default Carditems;
