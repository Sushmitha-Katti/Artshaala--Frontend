
import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Cards from "./cards";
import Pagination from './Pagination';
import { perPage } from "../../../config";


const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media only screen and (max-width: 1150px) {

    margin: 0.5rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 950px) {

    
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

  query ITEMS_QUERY($category: String!) {
    items(where: { type: $category }) {
      id
      title
      price
      images
    }
  }
`;
// const BRAND_ITEMS_QUERY = gql`
// query BRAND_ITEMS_QUERY($: String!,) {
//   items(where:
// {
// OR: [{
//   brand: "Yamaha"
// }, {
//   brand: "setg"
  
// },
// {
  
// }]
// })
// {
//     id
//     title
//     brand
//     type
//     price
//     images
//   }
// }`;


class Items extends Component {

  static getInitialProps({query}) {
    return {query}
  }
  

 

  render() {
    let optionslist = this.props.brand;
    console.log('+++++++++',this.props);
    if (optionslist){
    console.log(this.props);
    let brandarray = [];
    let branddict = {};
     branddict = optionslist.map(option => ({'brand':option}));
     branddict.map(dict => brandarray.push(dict));
     console.log("++++++++++",brandarray);
    }



    console.log("Page no",this.props.page)
    return (
      <div>

        <Pagination page={this.props.page}/>

        <Query
          query={this.props.category ? ITEMS_QUERY : ALL_ITEMS_QUERY}
          fetchPolicy="network-only"
          variables={{ category: this.props.category}} // skip the first n item and display the the next m items. m specified in first:m
        >
          {({ data, error, loading }) => {
            console.log("*******************************");
            if(loading) return <p>Loading</p>
            if(error) return <p>Error: {error.message}</p>
            if (!data.items) return <p>No data</p>;
            else {
              let cards = data.items.map(card => {
                card.key = `{card.id}`;
                return card;
              });

              console.log(cards);
              let Cardslist = cards.map(card => (
                <div>
                  <Cards Cardcontent={card} />
                </div>
              ));
              return (
                <div style={{ marginTop: -5 }}>
                  <h2>Acoustic Guitar</h2>
                  <CardWrapper>{Cardslist}</CardWrapper>
                </div>
              );
            }
          }}
        </Query>
        <Pagination page={this.props.page}/>
      </div>
    );

  }
}

export default Items;