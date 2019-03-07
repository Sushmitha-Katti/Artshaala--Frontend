import React, { Component } from "react";
import { Styles } from "./style";
import Head from "next/head";
import guitar1 from "./images/guitar1.png";

class Cart extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One|Monoton|Roboto|Roboto+Condensed|Open+Sans+Condensed:300|News+Cycle"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div id="main">
          <div className="cart">
            <div>
              <p>Cart</p>
              <div className="cart-products">
                <div>
                  <img src={guitar1} />
                </div>
                <div>
                  <h3>Juarez JRZ38CBK Linden Wood Acoustic Guitar</h3>
                </div>
              </div>
            </div>
            <div>
              <center>
                <p>PRICE DETAILS</p>
              </center>
              <button type="input" className="btn btn-default btn-lg">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Cart;
