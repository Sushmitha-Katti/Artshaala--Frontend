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
  query ALL_ITEMS_QUERY{
    items{
      id
      title
      price
      images
      category
      type
      brand
    }
  }
`;
const TYPE_ITEMS_QUERY = gql`
query TYPE_ITEMS_QUERY($type: String!) {
  items(where: { type: $type}) {
    id
      title
      price
      images
      category
      type
      brand
  }
}
`;

// not using now:

const ITEMS_QUERY = gql`

  query ITEMS_QUERY($category: String!, $type:String!) {
    items(where: { category: $category, type:$type }) {
      id
      title
      price
      images
      category
      type
      brand
    }
  }
`;
// const BRAND_ITEMS_QUERY = gql`
// query BRAND_ITEMS_QUERY($brand: String!) {
//         items(where: { brand_in: [$brand] })
//             {
//                 id
//                 title
//                 brand
//                 type
//                 price
//                 images
//             }
// }
// `;


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



    console.log("brand of items.js",this.props.brand)
    return (
      <div>

        <Pagination page={this.props.page}/>

        <Query
        // query={this.props.brand?BRAND_ITEMS_QUERY:ALL_ITEMS_QUERY} variables={{ brand:this.props.brand}}
           query={this.props.type ? (this.props.category ? ITEMS_QUERY : TYPE_ITEMS_QUERY):ALL_ITEMS_QUERY}
          // fetchPolicy="network-only"
          variables={{ category: this.props.category, type:this.props.type, skip:this.props.page*perPage-perPage,first:perPage}} // skip the first n item and display the the next m items. m specified in first:m
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
                  <Cards Cardcontent={card}/>
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
      
      </div>
    );

  }
}

export default Items;
export {ALL_ITEMS_QUERY };

