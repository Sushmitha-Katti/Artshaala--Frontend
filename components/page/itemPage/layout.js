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
const FilterText = styled.div`
  text-align:left;
  .texts{
    border:1px solid #FFA500;
    padding:5px;
    margin:15px;
    
  }

`;

class Layout extends Component {
  state = {
    category: "",
    brand: [],
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
    if (this.state.brand.includes(boxes)) {
      let removedbox = this.state.brand.filter(item => item !== e);
      this.setState({ brand: removedbox });
    } else {
      this.setState({
        brand: [...this.state.brand, boxes]
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
      <div>
         <FilterText>
                {this.state.category!=''? <div className="texts"><b>Category: </b> {this.state.category}</div>:""}
               {(this.state.brand).length!=0? <div className="texts"><b>Brand: </b> {this.state.brand}</div>:""} 
               {(this.state.price).length!=0? <div className="texts"><b>Price: </b> {this.state.price}</div>:""} 
               {(this.state.rating).length!=0? <div className="texts"><b>Rating: </b> {this.state.rating}</div>:""} 
          </FilterText>
       
       <Sort
          filterpage={this.props.filterpage}
          category={this.Category}
          CheckedBrand={this.CheckedBrand}
          // type={this.props.type}
          CheckedPrice = {this.CheckedPrice}
         CheckedRating = {this.CheckedRating}
        />
        </div>
        <div>
        <Items
          category={this.props.category!=''?this.props.category:this.state.category}
          brand={(this.props.brand).length!=0?this.props.brand:this.state.brand}
          page={this.props.page}
          //type={this.props.type}
          price = {(this.props.price).length!=0?this.props.price:this.state.price}
          rating = {(this.props.rating).length!=0?this.props.rating:this.state.rating}

        /> </div>
      </Wrapper>
     
    );
  }
}

export default Layout;
