import React, { Component } from "react";
import { Styles } from "./style";
import Head from "next/head";
import guitar1 from "./images/guitar1.png";
import Carditems from "./carditems";
import Cartitems from "./cartitems";

class Cart extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One|Monoton|Roboto|Roboto+Condensed|Open+Sans+Condensed:300|News+Cycle"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
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
                <span className="price" style={{ fontSize: 15 + "px" }}>
                  INR 6499.00/-
                </span>
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
                <span className="subtotal" style={{ fontSize: 19 + "px" }}>
                  INR 6499.00/-
                </span>
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
