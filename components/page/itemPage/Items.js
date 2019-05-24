import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cards from "./cards";
import Pagination from "./Pagination";
import { perPage } from "../../../config";
import {Loader} from "./cardStyle";

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto auto;

  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media only screen and (max-width: 1000px) {
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
    grid-template-columns: auto;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
`;


const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip:Int = 0,$first:Int=${perPage}) {
    items(first:$first,skip:$skip,orderBy:createdAt_DESC) {
      id
      title
      price
      images
      category
      type
      brand
      AvgRating
    }
  }
`;

const TYPE_ITEMS_QUERY = gql`
  query TYPE_ITEMS_QUERY($category: String!) {
    items(where: { type: $category }) {
      id
      title
      price
      images
      category
      type
      brand
      AvgRating
    }
  }
`;

// const ITEMS_QUERY = gql`
//   query ITEMS_QUERY($category: String!, $type: String!) {
//     items(where: { category: $category, type: $type }) {
//       id
//       title
//       price
//       images
//       category
//       type
//       brand
//       AvgRating
//     }
//   }
// `;

class Items extends Component {
  static getInitialProps({ query }) {
    return { query };
  }



  brandFunc = (brand, brandProps) => {  // brand from db, brandProps from brandFunc props
    //console.log("brand only")
    let i;
    for (i = 0; i < brandProps.length; i++) {
      if (brand == brandProps[i]) {
        return brand;
      }
    }
  };
  priceFunc = (price, priceProps) => {
    //console.log("price only")
    let i;
    for (i = 0; i < priceProps.length; i++) {
      if (price >= priceProps[i] && price <= priceProps[i] + 4000) {
        return price;
      }
    }
  };

  ratingsFunc = (rating,ratingProps)=>{
    let i;
    for (i = 0; i < ratingProps.length; i++) {
      if (rating >= ratingProps[i]) {
        return rating;
      }
    }
  };

  // func to sort by brand, within that to sort by price
  brandpriceFunc = (brand, price, brandProps, priceProps) => {
    //console.log("brandpriceFunc")
    let i;
    let len = brandProps.length + priceProps.length;
    for (i = 0; i < len; i++) 
    {
      if (brand == brandProps[i])
        {
          if( price >= priceProps[i] && price <= priceProps[i]+ 4000) {
          return brand, price;
        }
      }
    }
  };
  
  brandratingFunc = (brand, rating, brandProps, ratingProps) => {
    //console.log("brandratingFunc")
    let i;
    let len = brandProps.length + ratingProps.length;
    for (i = 0; i < len; i++) 
    {
      if (brand == brandProps[i])
        {
          if( rating >= ratingProps[i]) {
          return brand, rating;
        }
      }
    }
  };
  
  priceratingFunc = ( price, rating, priceProps, ratingProps) => {
    //console.log("brandpriceFunc")
    let i;
    let len = ratingProps.length + priceProps.length;
    for (i = 0; i < len; i++) 
    {
     
      if( price >= priceProps[i] && price <= priceProps[i]+ 4000)
        {
          if (rating >= ratingProps[i]){
          return rating, price;
        }
      }
    }
  };

  brandpriceratingFunc = ( brand,price, rating,brandProps, priceProps, ratingProps) => {
    console.log("brandpriceratingFunc")
    let i;
    let len = ratingProps.length + priceProps.length + brandProps.length;
    for (i = 0; i < len; i++) 
    {
      if (brand == brandProps[i])
      {
        console.log("brandpriceratingFunc1")
        if( price >= priceProps[i] && price <= priceProps[i]+ 4000)
        {console.log("brandpriceratingFunc2")
          if (rating >= ratingProps[i])
          {console.log("brandpriceratingFunc3")
             return brand,rating, price;
          }
        }
      }
    }
  };



  render() {
    let optionslist = this.props.brand;
    // console.log('+++++++++',this.props);
    if (optionslist) {
      // console.log(this.props);
      let brandarray = [];
      let branddict = {};
      branddict = optionslist.map(option => ({ brand: option }));
      branddict.map(dict => brandarray.push(dict));
      //  console.log("++++++++++",brandarray);
    }

    // console.log("brand of items.js",this.props.brand)
    return (
      <div>
        {this.props != null ? (
          ""
        ) : (
          <Pagination page={this.props.page}
          //  type={this.props.type} 
           />
        )}

        <Query
          // query={
          //   this.props.type !== "all"
          //     ? this.props.category
          //       ? ITEMS_QUERY
          //       : TYPE_ITEMS_QUERY
          //     : ALL_ITEMS_QUERY
          // }
          query={this.props.category? TYPE_ITEMS_QUERY : ALL_ITEMS_QUERY}
          // fetchPolicy="network-only"
          variables={{
            category: this.props.category,
            // type: this.props.type,
            skip: this.props.page * perPage - perPage,
            first: perPage
          }} // skip the first n item and display the the next m items. m specified in first:m
        >
          {({ data, error, loading }) => {
            // console.log("*******************************",this.props.brand?this.props.brand:"");
            // console.log("data",data.items)

            let res=data.items;
            //  console.log("this.props.brand",this.props.brand)
             // console.log("this.props.price",this.props.price)
            ((this.props.brand).length)==0 && ((this.props.price).length)==0 && this.props.rating!=0?( res =(data.items).filter(f=>this.ratingsFunc(f.AvgRating,this.props.rating))):res;
            ((this.props.brand).length)==0 && this.props.price!=0 && ((this.props.rating).length)==0  ?(res =(data.items).filter(f=>this.priceFunc(f.price,this.props.price))):res;
            ((this.props.brand).length)==0 && this.props.price!=0 && this.props.rating!=0 ? (res =(data.items).filter(f=>this.priceratingFunc(f.price,f.AvgRating,this.props.price,this.props.rating))):res;
            this.props.brand!=0 && ((this.props.price).length)==0 && ((this.props.rating).length)==0 ? (res =(data.items).filter(f=>this.brandFunc(f.brand,this.props.brand))):res;
            this.props.brand!=0 && ((this.props.price).length)==0 && this.props.rating!=0 ? (res =(data.items).filter(f=>this.brandratingFunc(f.brand,f.AvgRating,this.props.brand,this.props.rating))):res;
            this.props.brand!=0 && this.props.price!=0 && ((this.props.rating).length)==0 ? (res =(data.items).filter(f=>this.brandpriceFunc(f.brand,f.price,this.props.brand,this.props.price))):res;
            this.props.brand!=0 && this.props.price!=0 && this.props.rating!=0 ? (res =(data.items).filter(f=>this.brandpriceratingFunc(f.brand,f.price,f.Avgrating,this.props.brand,this.props.price,this.props.rating))):res;
            
          

            if(loading) return  <Loader></Loader>
            if(error) return <p>Error: {error.message}</p>
            console.log("res ",res);
            if (!data.items) return <p>No products available</p>; 
            
            else {
              let cards = (res != 0 ? res : data.items).map(card => {
                card.key = `{card.id}`;
                return card;
              });

              // console.log(cards);
              let Cardslist = cards.map(card => (
                <div>
                  <Cards Cardcontent={card} />
                </div>
              ));
              return (
                <div>
               
                <div style={{ marginTop: -5 }}>
                  <h2>
                    { this.props.category?
                       (this.props.category.charAt(0).toUpperCase() +
                        this.props.category.slice(1)):"All"
                     }
                  </h2>
                  
                  <CardWrapper>{Cardslist}</CardWrapper>
                </div>
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
export { ALL_ITEMS_QUERY };
