import React, { Component } from "react";
import guitar1 from "./images/guitar1.png";
import Carts from "./carts";
import styled from "styled-components";

const CartWrapper = styled.div`
  margin-top: 40px;
`;

class Cartitems extends Component {
  state = {};
  render() {
    let items = [
      {
        img: { guitar1 },
        title: "Juarez JRZ38CBK Linden Wood Acoustic Guitar",
        reviews: "100 reviews",
        price: "INR 6499.00",
        quantity: "1"
      }
    ].map(cart => {
      cart.key = `{cart.cost}`;
      return cart;
    });

    let list = items.map(cart => (
      <div>
        <Carts Contents={cart} />
      </div>
    ));
    return <CartWrapper>{list}</CartWrapper>;
  }
}

export default Cartitems;
