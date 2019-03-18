import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

const ALL_ITEMS_QUERY = gql`
  query {
    items {
      id
      title
      description
      price
    }
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 4rem;
  justify-content: center;
  align-items: center;
`;
const ItemsStyle = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  margin: 2rem;
  padding: 1rem;
  overflow: hidden;
  text-align: center;
`;

const Items = () => (
  <Query query={ALL_ITEMS_QUERY}>
    {({ data }) => {
      let { items } = data;
      console.log(items);

      return (
        <div style={{ textAlign: "center" }}>
          <h1>Items</h1>
          <ItemsList>
            {items.map(item => (
              <ItemsStyle>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <b style={{ margin: "1rem", fontSize: "110%" }}>Price</b>
                &#8377;{item.price}
              </ItemsStyle>
            ))}
          </ItemsList>
        </div>
      );
    }}
  </Query>
);
export default Items;
export { ALL_ITEMS_QUERY };
