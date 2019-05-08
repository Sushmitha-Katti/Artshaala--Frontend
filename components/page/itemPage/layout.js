import React, { Component } from "react";
import styled from "styled-components";
import CardTemp from "./cardtemp";
import Sort from "./sort";
import Items from "./Items";

const Wrapper = styled.nav`
  display: grid;
  margin: 20px;
  justify-items: center;
  grid-template-columns: auto 4fr;

  @media (max-width: 750px) {
    display: block;
    align-items: center;
  }
`;

class Layout extends Component {
  state = {
    category: "",
    options: [],
    price:[],
    rating:[]
  };

  Category = a => {
    let category_var = a;
    this.setState({
      category: category_var
    });
  };

  CheckedBrand = e => {
    // console.log(this.state.options);

    let boxes = e;
    // console.log("box", boxes);
    // console.log(this.state);
    if (this.state.options.includes(boxes)) {
      let removedbox = this.state.options.filter(item => item !== e);
      this.setState({ options: removedbox });
    } else {
      this.setState({
        options: [...this.state.options, boxes]
      });
    }  
};

CheckedPrice = e => {
  let boxes = e;
  // console.log("box", boxes);
  // console.log(this.state);
  if (this.state.price.includes(boxes)) {
    let removedbox = this.state.price.filter(item => item !== e);
    this.setState({ price: removedbox });
  } else {
    this.setState({
      price: [...this.state.price, boxes]
    });
  }  
}
CheckedRating = e => {
  let boxes = e;
  // console.log("box", boxes);
  // console.log(this.state);
  if (this.state.rating.includes(boxes)) {
    let removedbox = this.state.rating.filter(item => item !== e);
    this.setState({ rating: removedbox });
  } else {
    this.setState({
      rating: [...this.state.rating, boxes]
    });
  }  
}
  render() {

    // console.log("--------------", this.state.price);
    // console.log("Layout", this.props);
    // console.log("hello", this.state.category);
    return (
      <Wrapper>
        <Sort
          filterpage={this.props.filterpage}
          category={this.Category}
          CheckedBrand={this.CheckedBrand}
          type={this.props.type}
          CheckedPrice = {this.CheckedPrice}
         CheckedRating = {this.CheckedRating}
        />
        <Items
          category={this.state.category}
          brand={this.state.options}
          page={this.props.page}
          type={this.props.type}
          price = {this.state.price}
          rating = {this.state.rating}

        />
        {/* {console.log("layout.js",this.props.type)} */}

        {/* <CardTemp/> */}
      </Wrapper>
    );
  }
}

export default Layout;
