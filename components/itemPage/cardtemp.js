import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import Cards from "./cards";
import Guitar from "./guitar.png";

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap:20px;
  grid-row-gap:20px;

  @media only screen and (max-width: 1150px) {
      
    margin: 0.5rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 950px) {
      
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


class Cardtemp extends Component{
    render() {
        let cardItems = [
          { cost: "INR 20000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"10 reviews",img:{ Guitar },url:"/",off:"50% OFF"},
          { cost: "INR 25000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"30 reviews",img:{ Guitar },url:"/",off:"25% OFF"},
          { cost: "INR 30000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"500 reviews",img:{ Guitar },url:"/",off:""},
          { cost: "INR 50000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"700 reviews",img:{ Guitar },url:"/",off:"65% OFF"},
          { cost: "INR 10000",descrip:"Henrix 38C Cutaway Acoustic",reviews:"90 reviews",img:{ Guitar },url:"/", }
        ].map(card => {
          card.key = `{card.cost}`;
          return card;
        });

        let Cardslist = cardItems.map(card => (
            <div>
              <Cards Cardcontent={card} />
            </div>
          ));
        return ( <div style={{marginTop:-5,}}>
                 <h2>Acoustic Guitar</h2>
                <CardWrapper>{Cardslist}</CardWrapper>
                </div>
                );
        
         
}
}

export default Cardtemp;
