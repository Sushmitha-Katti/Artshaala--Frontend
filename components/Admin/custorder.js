import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import RemoveContact from "./deletecontact";



const PENDING_ORDER_QUERY = gql`
  query PENDING_ORDER_QUERY($id: ID!) {
    order( id: $id ) {
      charge
      
     
    }
  }
  
`;




const ItemsList = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 2rem 4rem;
  justify-content: center;
  align-items: center;

  .eachcontact{
    border:3px solid orange;
    border-radius: 3%;
    margin:2rem;
   
    padding-bottom: 2rem;
    button{
      padding: 1rem 3rem;
      background:none;
      border: 1px solid red;
      border-radius:5%;
      margin:2rem;
      color:red;

  }
  button:hover{
      background:red;
      color:white;
      
  }
  }


`;
const ItemsStyle = styled.div`
display: grid;
  grid-template-columns: 0.5fr 7fr; 
  
  width: 90%;
  height: auto;
 
  padding: 2%;
  overflow: hidden;
  
  margin:2rem;
 
  p{
      margin:0;
  }
  h1{
      margin:0;
  }
  
  
`;

const AdminOrder = (props) => (
  

  <Query                           //Item Query
    query={PENDING_ORDER_QUERY}
    variables={{

      id: "cjuv6x955v4ez0b95x8x9duog"

      }}
    >
    {({ data, loading, error }) => {
      if(error){
        console.log(error)
      }
      console.log(data);
      console.log(props.query.id)
      console.log('********')
     
      return (

          <ItemsList>
            Hello
           
          </ItemsList>
        
        
      );
    }}
  </Query>
 
);
export default AdminOrder;
export {PENDING_ORDER_QUERY};