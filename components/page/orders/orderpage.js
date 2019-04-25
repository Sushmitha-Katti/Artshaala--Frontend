import React, { Component } from 'react';
import Guitar from "./guitar1.png";
import styled from "styled-components";
import ReviewPage from "../Products/reviewpage"
import Link from "next/link";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;




const OrdersWrapper = styled.div`
align-items:center;
display: flex;
justify-content:center;
flex-direction:column;

.Orderheadervalues{
    display:flex;
    justify-content:flex-start;
    align-content: space-between;
    width:100%;
    position:absolute;
    top:5%;
    margin:0;
    left:0;

    div{
       
      
       margin:0 2rem;
        padding:0;
        z-index:2;
        font-size:0.7rem;
    }
}

.SingleOrder{
    border:1px solid #C8C8C8;
    padding: 20px 30px;
    border-radius:2%;
    margin:2rem;
    position:relative;
} 
.orderheader{
    position:absolute;
    opacity:0.5;
    left:0;
    top:0;
    height:15%;
    width:100%;
    background-color:#C0C0C0;
    z-index:-1;
    margin:0 0 0.5rem 0;
}
    
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%; 
    width: 100%;
    background-color:#000000;
    z-index:100;
    overflow: hidden;
    opacity:0.5;
    background-position: center;
    background-repeat: repeat-y;
  background-size: cover;

}


.gridrow{

    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
   

    
   
    
    img{
        width:70px;
        height:150px;
       
    }
    .description{
        
    }
    button{
        background : #FFD17D;
        border: none;
        padding:5px;
        border:1px solid grey;
        
        opacity:1.0;

    }
    button:hover{
        opacity:0.8;
    }
    .review{
        background:#E0E0E0;
        border: 0.5px solid grey;
        padding:5px 7px;
        cursor:pointer;
    }
    .review:hover{
        opacity:0.8
    }
    
    .orders{
        display:grid;
    }
}
.reviewspage{
       background:white;
        border:2px solid grey;
        position:fixed;
        top:30%;
        align-items:center;
        z-index:200;
        padding:2rem;
        border-radius:2%;
        transition-delay: 2s;
    }

.crossmark{
    position:absolute;
    top:3%;
    right:1%;
    cursor:pointer;

}

`;

class Orderpage extends Component {
    constructor(props){
        super(props);
        this.state = {                // For toggling the review Item Component
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
        }
       togglePanel(e){
        this.setState({open: !this.state.open})
        }
    
    
    render() {
        return (
            <Query query={USER_ORDERS_QUERY} >
            {({ data, error, loading }) => {
              if (error) return <p> error... </p>;
              if (loading) return <p>Loading...</p>;
              const orders= data.orders;
              console.log(orders);
              return(
        // wrapped with flex
        <OrdersWrapper>  
            <h2>Your Orders</h2>
            <div className = "EntireOrders">{/* grid element only for orders */}
           {this.state.open? <div className = "overlay"></div>:null}
           
           <div className = "orders">
           {orders.map(order => (

            <div className = "SingleOrder" key = {order.id}> {/* Each individual orders  */}
                <div className = "orderheader"> </div>
                <div className = "Orderheadervalues"><div> orderid:123</div><div>total :3</div></div>
               
                
                <br></br>
                <b>Delivered 3-Apr-2019</b>
                <div className = "gridrow">
                    
                    <div>
                        <img  src={Guitar} alt = "Guitar"></img>
                    </div>
                    <div className = "description">
                        <h5>Acoustic Guitar</h5>
                        <p>Rs 3000/-</p>
                        <Link href="/product"><a><button>Buy it Again</button></a></Link>
                    
                    </div>
                    <div className = "btn"  onClick={(e)=>this.togglePanel(e)}>
                        <h6 className = "review">Write a Product Review</h6>   
                    </div>
                    
                </div>
                

                
            
            </div>
            
           ))}

      
            </div>

            
            {this.state.open ?(<div className = "reviewspage"><div className = "crossmark" onClick={(e)=>this.togglePanel(e)}>&#10060;</div><ReviewPage id="cjumwi6wgf6o20b95jzqlp8cz"/></div>) : null}
            
            </div>
        </OrdersWrapper>);
        }}
        </Query>
            
        );
    }
}

export default Orderpage;
export { USER_ORDERS_QUERY };