import React, { Component } from "react";
import { Styles } from "./style";
import { Price, Subtotal } from "./cartStyle";
import Carditems from "./carditems";
import Cartitems from "./cartitems";
import Meta from "./meta";
import User from "../../test/User";
import Carts from "./carts";
import Link from "next/link";
import Signin from "../../test/signinpage.js" 


class Cart extends Component {
  state = {
    
    count: {}
    
    
  };

  


  render() {
    return (
      <User>
         {({ data :{me} }) => {
          if(!me) return <Signin />; //Todo : Redirect to signin page
        
    
      return (
          <Styles>
            <Meta />
            <div id="main">
              <div className="cart">
              
              <div>
                  <p>Cart</p>
                  {me.cart.map(cartItem =>  <Carts key = {cartItem.id} cartItem = {cartItem} />)}
                 
                </div> 
                

                <div>
                  <center>
                    <p>PRICE DETAILS</p>

                    <span style={{ fontSize: 16 + "px" }}>Total Items - {me.cart.reduce((tally,cartItem) => {if(!cartItem.quantity) return tally;
                    return tally+cartItem.quantity},0)} </span>
                   
                  </center>
                  <br />
                  <br />
                  <br />
                  <hr />
                  <br />
                  <center>
                    <span style={{ fontSize: 19 + "px", marginRight: 5 + "%" }}>
                      Total:
                    </span>
                    <Subtotal>INR {me.cart.reduce((tally, cartItem) => {if(!cartItem.item) return tally;
                    return tally + cartItem.quantity * cartItem.item.price},0)}/-</Subtotal>
                  </center>
                  <br />
                  <br />
                  <center>
                    <Link href = "/add"><a>
                    <button type="input" className="btn btn-default btn-lg">
                      Proceed to Buy
                    </button>
                    </a>
                    </Link>
                  </center>
                </div>
              </div>

              <div className="products">
                <p>RELATED PRODUCTS</p>
                <Carditems />
              </div>
            </div>
          </Styles>
       )
      }}
    </User>
    );
  }
}

export default Cart;
