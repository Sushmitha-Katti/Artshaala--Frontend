import React, { Component } from "react";
import { Styles } from "./style";
import Head from "next/head";
import guitar1 from "./images/guitar1.png";
import styled from "styled-components";

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

              <div className="cart-products">
                <div>
                  <img src={guitar1} />
                </div>
                <div>
                  <p>Juarez JRZ38CBK Linden Wood Acoustic Guitar</p>
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="reviews">100 reviews</span>
                  <br />
                  <span style={{ fontSize: 18 + "px" }}>Price:</span>
                  <span className="price">INR 6499.00/-</span>
                  <span style={{ fontSize: 18 + "px", marginLeft: 10 + "%" }}>
                    Quantity:
                  </span>
                  <span>
                    <button
                      className="input"
                      style={{ borderRadius: 20 + "px" }}
                    >
                      -
                    </button>
                    <button
                      className="input"
                      style={{ width: 100 + "px", fontSize: 20 + "px" }}
                    >
                      1
                    </button>
                    <button
                      className="input"
                      style={{ borderRadius: 20 + "px" }}
                    >
                      +
                    </button>
                  </span>
                  <p
                    style={{
                      fontSize: 18 + "px",
                      marginTop: 20 + "px",
                      marginBottom: 30 + "px"
                    }}
                  >
                    Inclusive of all taxes
                  </p>
                  <br />
                  <span style={{ fontSize: 23 + "px" }}>Subtotal:</span>
                  <span className="subtotal">INR 6499.00/-</span>
                </div>
              </div>
            </div>

            <div>
              <center>
                <p>PRICE DETAILS</p>
              </center>
              <span style={{ fontSize: 16 + "px" }}>Price(1 item)</span>
              <span className="price" style={{ fontSize: 15 + "px" }}>
                INR 6499.00/-
              </span>
              <br />
              <br />
              <br />
              <hr />
              <br />
              <span style={{ fontSize: 17 + "px", marginRight: 23 + "%" }}>
                Total:
              </span>
              <span className="subtotal" style={{ fontSize: 17 + "px" }}>
                INR 6499.00/-
              </span>
              <br />
              <br />
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
