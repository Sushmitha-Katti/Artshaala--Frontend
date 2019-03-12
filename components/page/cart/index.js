import React, { Component } from "react";
import { Styles } from "./style";
import { Price, Subtotal } from "./cartStyle";
import Carditems from "./carditems";
import Cartitems from "./cartitems";
import Meta from "./meta";

class Cart extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <Meta />
        <div id="main">
          <div className="cart">
            <div>
              <p>Cart</p>
              <Cartitems />
            </div>

            <div>
              <center>
                <p>PRICE DETAILS</p>

                <span style={{ fontSize: 16 + "px" }}>Price(1 item)</span>
                <Price>INR 6499.00/-</Price>
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
                <Subtotal>INR 6499.00/-</Subtotal>
              </center>
              <br />
              <br />
              <center>
                <button type="input" className="btn btn-default btn-lg">
                  Proceed to Buy
                </button>
              </center>
            </div>
          </div>

          <div className="products">
            <p>RELATED PRODUCTS</p>
            <Carditems />
          </div>
        </div>
      </Styles>
    );
  }
}

export default Cart;
