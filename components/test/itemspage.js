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

  margin: 2rem 4rem;
  justify-content: center;
  align-items: center;
`;
const ItemsStyle = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin: 2rem;
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
                <p>{item.price}</p>
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
