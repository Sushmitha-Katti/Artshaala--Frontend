import React, { Component } from "react";
import { Styles } from "./cartStyle";

class Carts extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <div id="mainCart">
          <div>
            <img src={Object.values(this.props.Contents.img).toString()} />
          </div>
          <div>
            <p>{this.props.Contents.title}</p>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span>{this.props.Contents.reviews}</span>
            <br />

            <div className="values">
              <div>
                <span style={{ fontSize: 18 + "px" }}>Price:</span>
                <span className="price">{this.props.Contents.price}/-</span>
              </div>
              <div>
                <span style={{ fontSize: 18 + "px" }}>Quantity:</span>
                <span>
                  <button className="input">-</button>
                  <div className="count">
                    <center>
                      <p>{this.props.Contents.quantity}</p>
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
      </Styles>
    );
  }
}

export default Carts;
