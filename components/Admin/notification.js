import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import RemoveContact from "./deletecontact";
import Link from "next/link";

const ALL_CONTACTS_QUERY = gql`
  query ALL_CONTACTS_QUERY($status: ContactStatus) {
    contacts(status: $status) {
        id
        email
        phone
        subject
        message
        name
        status
        createdAt
    }
  }
`;

const ItemsList = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 1rem 4rem;
  justify-content: center;
  align-items: center;
  .queries{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr ;
    place-items:center;
    border-bottom:1px solid black;
     
    a{
      text-decoration:none;
      padding: 5px;
      
    }
  }

  .eachcontact {
    border: 1px solid orange;
    border-radius: 3%;
    margin: 1rem;
    padding-bottom: 1rem;
    button {
      padding: 0.5rem 1rem;
      background: none;
      border: 1px solid green;
      border-radius: 5%;
      margin: 1rem;
      margin-left:3rem;
      color: green;
    }
    button:hover {
      background: green;
      color: white;
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
  margin: 2rem;
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;

const Notification = (props) => (
  <Query query={ALL_CONTACTS_QUERY}
  variables={{
    status: props.query.status
  }}
  >
    {({ data,error, loading }) => {
      if(loading) return<p> loading</p>
      if(error) return<p>{error.message.split(':')[1]}</p>

      let { contacts } = data;
      console.log(contacts);

      return (
        <div>
          <ItemsList>
          <div className = "queries">
          <Link href={{pathname:'/notification', query:{status: 'PENDING'}}}><a>PENDING</a></Link>
          <Link href={{pathname:'/notification', query:{status: 'DONE'}}}><a>CONTACTED</a></Link>
          <Link href={{pathname:'/notification'}}><a>ALL</a></Link>
          </div>
            <div style={{ textAlign: "center" }}>
              <h1>{props.query.status} Contacts ({contacts.length})</h1>
            </div>
            {contacts.map(contact => (
              <div className="eachcontact">
                <ItemsStyle>
                  <b>Name: </b>
                  <b>{contact.name}</b>
                  <b>Email: </b>
                  <p>{contact.email}</p>
                  <b>Phone: </b> <p> {contact.phone}</p>
                  <b>Subject: </b>
                  <p>{contact.subject}</p>
                  <b>Message: </b>
                  <p>{contact.message}</p>
                  <b>Status: </b>
                  <p>{contact.status}</p>
                  
                <b>Date: </b><p>{contact.createdAt.split('T')[0] }</p>
                <b>Time: </b><p>{contact.createdAt.split('T')[1].split('.')[0]}</p>               
              </ItemsStyle>
              {
                  contact.status == "DONE" ? null : <RemoveContact id={contact.id} />
                }
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
