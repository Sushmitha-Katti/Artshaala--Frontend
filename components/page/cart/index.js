import React, { Component } from "react";
import { Styles } from "./style";
import Head from "next/head";
import guitar1 from "./images/guitar1.png";
import Carditems from "./carditems";

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

                  <div className="values">
                    <div>
                      <span style={{ fontSize: 18 + "px" }}>Price:</span>
                      <span className="price">INR 6499.00/-</span>
                    </div>
                    <div>
                      <span style={{ fontSize: 18 + "px" }}>Quantity:</span>
                      <span>
                        <button className="input">-</button>
                        <div className="count">
                          <center>
                            <p>10</p>
                          </center>
                        </div>
                        <button className="input">+</button>
                      </span>
                    </div>
                  </div>

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
