import React, { Component } from "react";
import ServiceCard from "./Servicecard";
import styled, { keyframes } from "styled-components";
import musicstore from "./musicstore.png";
import sale from "./sale.jpg";
import service from "./Servicea.jpg";
import rental from "./rental.jpg";

const CardWrapper = styled.div`
  display: flex;
  margin: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`;

class ServiceCards extends Component {
  render() {
    let Cards = [
      { title: "Music Store", img: { musicstore } },
      { title: "Service & Repairs", img: { service } },
      { title: "Rentals", img: { rental } },
      { title: "Mega Sale", img: { sale } }
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
