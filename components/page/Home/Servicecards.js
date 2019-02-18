import React, { Component } from "react";
import ServiceCard from "./Servicecard";
import styled, { keyframes } from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  margin: 3rem;
  justify-content: space-between;
`;

import musicstore from "./musicstore.png";

class ServiceCards extends Component {
  render() {
    let Cards = [
      { title: "Music Store", img: " " },
      { title: "Service & Repairs", img: " " },
      { title: "Rentals", img: " " },
      { title: "Mega Sale", img: " " }
    ].map(card => {
      card.key = `{card.title}`;
      return card;
    });

    let Cardslist = Cards.map(card => (
      <div className="gridview">
        {" "}
        <ServiceCard Cardcontent={card} />
      </div>
    ));
    return <CardWrapper>{Cardslist}</CardWrapper>;
  }
}

export default ServiceCards;
