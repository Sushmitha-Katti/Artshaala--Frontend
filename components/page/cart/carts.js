import React, { Component } from "react";
import { Styles, Price, Subtotal } from "./cartStyle";
import { Query,Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

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
                <Price big>{this.props.Contents.price}/-</Price>
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
            <Subtotal big>INR 6499.00/-</Subtotal>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Carts;
export { LOCAL_STATE_QUERY,TOGGLE_CART_MUTATION };