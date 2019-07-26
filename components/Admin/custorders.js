
    
import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import RemoveContact from "./deletecontact";
import Link from "next/link";

const PENDING_ORDERS_QUERY = gql`
  query PENDING_ORDERS_QUERY($status: Status) {
    adminorders(where:{status: $status}) {
      id
      total
      charge
      createdAt
      paymentmode
      status
    }
  }
`;
// const STATUS_ORDERS_QUERY = gql`
//   query STATUS_ORDERS_QUERY($status: STATUS) {
// adminorders(where:{status: $status}){
//     id
//     total
//     charge
//     createdAt
//     paymentmode
//     status

// }
//   }

// `;

const ItemsList = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 1rem 4rem;
  justify-content: center;
  align-items: center;
  .queries {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    border-bottom: 1px solid black;
    a {
      text-decoration: none;
      padding: 5px;
    }
  }
  .deliverystatus {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      background: none;
      cursor: pointer;
      color: grey;
    }
  }
  .eachcontact {
    border: 1px solid orange;
    border-radius: 3%;
    margin: 1rem;
    cursor: pointer;
    padding-bottom: 2rem;
    button {
      padding: 1rem 3rem;
      background: none;
      border: 1px solid red;
      border-radius: 5%;
      margin: 1rem;
      color: red;
    }
    button:hover {
      background: red;
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

const AdminOrders = props => (
  <Query
    query={PENDING_ORDERS_QUERY}
    variables={{
      status: props.query.status
    }}
  >
    {({ data, loading, error }) => {
      let { adminorders } = data;
      if(loading){
        return <p>Loading</p>
      }
      if(error){
        return <p>{error.message}</p>
      }
      console.log("admin", data);

      return (
        <div>
          <ItemsList>
            <div className="queries">
              <Link
                href={{
                  pathname: "/customerorders",
                  query: { status: "PENDING" }
                }}
              >
                <a>PENDING</a>
              </Link>
              {/* <Link
                href={{
                  pathname: "/customerorders",
                  query: { status: "PROCESSING" }
                }}
              >
                <a>PROCESS</a>
              </Link> */}
              <Link
                href={{
                  pathname: "/customerorders",
                  query: { status: "DELIVERED" }
                }}
              >
                <a>DELIVERED</a>
              </Link>
              <Link href={{ pathname: "/customerorders" }}>
                <a>ALL</a>
              </Link>
            </div>

            <div style={{ textAlign: "center" }}>
              <h1>
                {props.query.status} Orders ({adminorders.length})
              </h1>
            </div>

            {adminorders.map(order => (
              <div className="eachcontact">
                <Link
                  href={{
                    pathname: "/individualorders",
                    query: { id: order.id }
                  }}
                >
                  <ItemsStyle>
                    <b>id: </b>
                    <b>{order.id}</b>
                    <b>Total: </b>
                    <p>{order.total}</p>

                    <b>charge: </b>
                    <p>{order.charge}</p>

                    <b>Ordered: </b>
                    <p>{order.createdAt.split("T")[0]}</p>
                    <b>Status: </b>
                    {order.status === "DELIVERED" && (
                      <b style={{ color: "green" }}>DELIVERED</b>
                    )}
                    {order.status === "PROCESSING" && (
                      <b style={{ color: "orange" }}>PROCESSING</b>
                    )}
                    {order.status === "PENDING" && (
                      <b style={{ color: "red" }}>PENDING</b>
                    )}
                  </ItemsStyle>
                </Link>
              </div>
            ))}
          </ItemsList>
        </div>
      );
    }}
  </Query>
);
export default AdminOrders;
export { PENDING_ORDERS_QUERY };
