import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import Cards from "./cards";
import Guitar from "./guitar.png";

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap:20px;
  grid-row-gap:20px;

  @media only screen and (max-width: 768px) {
      
    margin: 0.5rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 480px) {
    display:block;
    justify-items: center;
   // background-color:grey;
  }
`;


class Cardtemp extends Component{
    render() {
        let cardItems = [
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"100 reviews",img:{ Guitar },off:"50% OFF",stars:"4"},
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"100 reviews",img:{ Guitar },off:"25% OFF",stars:"5" },
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"100 reviews",img:{ Guitar },off:"",stars:"6" },
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"100 reviews",img:{ Guitar },off:"65% OFF",stars:"" },
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"100 reviews",img:{ Guitar } }
        ].map(card => {
          card.key = `{card.cost}`;
          return card;
        });

        let Cardslist = cardItems.map(card => (
            <div className="gridview">
              {" "}
              <Cards Cardcontent={card} />
            </div>
          ));
        return ( <div>
                 <h2>Acoustic Guitar</h2>
                <CardWrapper>{Cardslist}</CardWrapper>
                </div>
                );
        
         
}
}

export default Cardtemp;