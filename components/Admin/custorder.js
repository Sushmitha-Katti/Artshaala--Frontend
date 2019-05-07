import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";
import RemoveContact from "./deletecontact";
import UpdateOrder from "./orderstatusbutton";

const PENDING_ORDER_QUERY = gql`
  query PENDING_ORDER_QUERY($id: ID!) {
    order(id: $id) {

      charge
      total
      createdAt
      paymentmode   
      status 
      user{
        id
        name
        email    
        address{
          id
          mobile
          pincode
          addressline1
          addressline2
          landmark
          city
          state
        }   
      }
      items{
        id
        title
        description
        images
        price
        quantity
        itemid
      }
    }
  }
`;

// const ItemsList = styled.div`
//   display: grid;
//   flex-wrap: wrap;
//   margin: 2rem 4rem;
//   justify-content: center;
//   align-items: center;

//   .eachcontact {
//     border: 3px solid orange;
//     border-radius: 3%;
//     margin: 2rem;

//     padding-bottom: 2rem;
//     button {
//       padding: 1rem 3rem;
//       background: none;
//       border: 1px solid red;
//       border-radius: 5%;
//       margin: 2rem;
//       color: red;
//     }
//     button:hover {
//       background: red;
//       color: white;
//     }
//   }
// `;


const ItemsList = styled.nav `

 margin:20px;

`;

const ItemsStyle = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: center;
  grid-gap: 20px 20px;
 
 .items {
    border:1px solid orange;
    margin: 0 0 10px 0;

  }
  @media (max-width:770px){
   display:block;
  }
`;
const ItemStyling = styled.div`
  display: grid;
  grid-template-columns:40% 60%;
  grid-gap: 20px 0;
  /* flex-wrap: wrap; */
 
 .items {
    border:1px solid orange;
    margin: 0;

  }
  b{
    font-size:20px;
  }
  p{
    font-size:17px;
  }
  img{
    height:15rem;
  }
  @media (max-width:770px){
    grid-template-columns:30% 40%;
  }
  @media (max-width:430px){
    grid-template-columns:40% 40%;
    b{
      font-size:12px;
    }
    p{
      font-size:10px;
    }
    @media (max-width:340px){
      display:block;
      p{
        margin-left:12px;
      }
      
    }
   
   
  }
 
`;



const AdminOrder = props => (
  <Query //Item Query
      query={PENDING_ORDER_QUERY}
      variables={{
        id: props.query.id
      }}
      >
      {({ data, loading, error }) => {
        if (error) {
          console.log(error);
        }
        let tot_amt = []
        // console.log("custorder.js",data);
        return (
            <ItemsList>
            <ItemsStyle>
              <div> 
                <p><b>User Id:</b> {data.order.user.id}</p> 
                <p><b>User Name:</b> {data.order.user.name}</p> 
                <p><b>User email:</b> {data.order.user.email}</p>
                <p><b>Charge:</b> {data.order.charge}</p>
                <p><b>Total no. of items: </b>{data.order.total}</p>
                <p><b>Payment Mode: </b>{data.order.paymentmode}</p>
                <p><b>Status: </b>{data.order.status}</p>
                <p><b>Address: </b> {data.order.user.address.mobile}<br></br>
                {data.order.user.address.pincode}<br/>
                {data.order.user.address.addressline1}<br/>
                {data.order.user.address.addressline2}<br/>
                {data.order.user.address.landmark}<br/>
                {data.order.user.address.city}<br/>
                {data.order.user.address.state}</p>

                {data.order.status === "PENDING" && <UpdateOrder id = { props.query.id} />}
                
              </div>
              
              <div>
                {data.order.items.map(item=>
                    <Link href={{pathname:'/product', query:{id:item.itemid}}}>
                      <div className="items">
                        <ItemStyling>
                          <div><img src= {item.images[0]}/></div>
                          <div>
                            <p><b>Item id:</b> {item.itemid}</p>
                            <p><b>Title:</b> {item.title}</p>
                            <p><b>Price:</b> {item.price}</p>
                            <p><b>Quantity:</b> {item.quantity}</p>
                            <p><b>Total Amt: </b>{item.price * item.quantity}</p>
                            {tot_amt.push(item.price * item.quantity)}
                           { console.log(tot_amt)}
                          </div>
                        </ItemStyling>
                      </div>
                    </Link>
                  
                )}

              </div>
              </ItemsStyle>
             
            </ItemsList>
  );
        }}
  </Query>
);
export default AdminOrder;
export { PENDING_ORDER_QUERY };
