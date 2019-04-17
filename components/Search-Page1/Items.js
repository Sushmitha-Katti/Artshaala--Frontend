import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Cards from "./cards";

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

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      images
    }
  }
`;

// not using now:

const ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items(where:{
        type:"Guitar"
    })
      {
      id
      title
      price
      images
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data,error,loading }) => {
            console.log(data);
            let cards = data.items.map(card => {
              card.key = `{card.id}`;
              return card;
            });
    
            console.log(cards)
            let Cardslist = cards.map(card => (
              <div>
                <Cards Cardcontent={card} />
              </div>
            ));
          return ( <div style={{marginTop:-5,}}>
                   <h2>Acoustic Guitar</h2>
                  <CardWrapper>{Cardslist}</CardWrapper>
                  </div>
                  );
          
          }}
        </Query>
        </div>
    )
  }
}

export default Items;


// class Items extends Component {
//   render() {
//     return (
//       <CardWrapper>
//         <Query query={ALL_ITEMS_QUERY}>
//           {({ data,error,loading }) => {
//             console.log(data);
//             return <p>{data.items.map(item => <p>{item.title}</p>)}</p>;
//           }}
//         </Query>
//         </CardWrapper>
//     )
//   }
// }


