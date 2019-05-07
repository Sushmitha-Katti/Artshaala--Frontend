import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import RemoveContact from "./deletecontact";
import Link from "next/link";


const PENDING_ORDERS_QUERY = gql`
  query PENDING_ORDERS_QUERY {
adminorders{
    id
    total
    charge
    createdAt
    paymentmode
    status
   

}
  }
  
`;
const STATUS_ORDERS_QUERY = gql`
  query STATUS_ORDERS_QUERY($status: STATUS) {
adminorders(status: status){
    id
    total
    charge
    createdAt
    paymentmode
    status
   

}
  }
  
`;




const ItemsList = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 1rem 4rem;
  justify-content: center;
  align-items: center;
  .deliverystatus{
   
    display:flex;
    justify-content:center;
    align-items:center;
    
    button{
      border:none;
      background:none;
      cursor: pointer;
      color:grey;
    }
  }

  .eachcontact{
    border:1px solid orange;
    border-radius: 3%;
    margin:1rem;
    cursor: pointer;
   
    padding-bottom: 2rem;
    button{
      padding: 1rem 3rem;
      background:none;
      border: 1px solid red;
      border-radius:5%;
      margin:1rem;
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

const AdminOrders = () => (
  

  <Query query={PENDING_ORDERS_QUERY}>
    {({ data, loading, error }) => {
      let { adminorders } = data;
      console.log(data);

      return (
        <div  >
          
          <ItemsList>
          <div style = {{textAlign:"center"}}><h1>Orders</h1></div>
          
            {adminorders.map(order => (
                <div className = "eachcontact">
               <Link href={{pathname:'/individualorders', query:{id:order.id}}}>
              <ItemsStyle>
                
                <b>id: </b><b>{order.id}</b>
                <b>Total: </b><p>{order.total}</p>
            
                <b>charge: </b><p>{order.charge}</p>
                

                <b>Ordered: </b><p>{order.createdAt}</p>
                <b>Status: </b>{order.status === "DELIVERED" &&  <b style = {{color:"green"}}>DELIVERED</b>}{order.status === "PENDING" &&  <b style = {{color:"red"}}>PENDING</b>}

            
                
           
                
               
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
export {PENDING_ORDERS_QUERY};