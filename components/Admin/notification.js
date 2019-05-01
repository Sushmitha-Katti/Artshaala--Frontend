import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import RemoveContact from "./deletecontact";


const ALL_CONTACTS_QUERY = gql`
  query {
    contacts {
        id
        email
        phone
        subject
        message
        name
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

const Notification = () => (

  <Query query={ALL_CONTACTS_QUERY}>
    {({ data }) => {
      let { contacts } = data;
      console.log(contacts);

      return (
        <div  >
          
          <ItemsList>
            {contacts.map(contact => (
                <div className = "eachcontact">
              <ItemsStyle>
                
                <b>Name: </b><b>{contact.name}</b>
                <b>Email: </b><p>{contact.email}</p>
                <b>Phone: </b> <p> {contact.phone}</p>
                <b>Subject: </b><p>{contact.subject}</p>
                
                <b>Message: </b><p>{contact.message}</p>
                
           
                
               
              </ItemsStyle>
              <RemoveContact id ={contact.id} />
              
             
              </div>
            ))}
            
          </ItemsList>
        </div>
        
      );
    }}
  </Query>
 
);
export default Notification;
export { ALL_CONTACTS_QUERY };