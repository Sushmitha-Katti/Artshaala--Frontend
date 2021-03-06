import React, { Component } from "react";
import ServiceCard from "./Servicecard";
import styled, { keyframes } from "styled-components";
import musicstore from "./musicstore.png";
import sale from "./sale.jpg";
import service from "./Servicea.jpg";
import rental from "./rental.jpg";

const CardWrapper = styled.div`
  display: grid;
  margin-top: 0rem ;
  justify-items: left;
  grid-template-rows: 1fr 1fr 1fr ;

  @media only screen and (max-width: 768px) {
    margin: 0.5rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 480px) {
    margin: 0.5rem;
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;

class ServiceCards extends Component {
  render() {
    let Cards = [
      { title: "Music Store", img: { musicstore },link:"/itemPage?type=all&page=1" },
      { title: "Service & Repairs", img: { service }, link: "/services" },
     // { title: "Rentals", img: { rental } ,link:"/rental"},
      { title: "Mega Sale", img: { sale }, link: "/" }
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
