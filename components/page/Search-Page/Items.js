import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
    items{
      id
      title
      price
    }
  }

`;

class Items extends Component {
  render() {
    return (
        <Query query={ALL_ITEMS_QUERY}>
          {({ data,error,loading }) => {
            console.log(data);
            return <CardWrapper>{data.items.map(item => <p>{item.title}</p>)}</CardWrapper>;
          }}
        </Query>
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


