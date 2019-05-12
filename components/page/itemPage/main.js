import React, { Component } from "react";
import Navbar from "./navbar";
import Layout from "./layout";
import FilterMobile from "./filterMobile";
class Main extends Component {
  state = {
    step: 1,
    category:'',
        brand:[],
        price:[],
        rating:[]
  };

  mainpage = () => {
    const { step } = this.state;
    this.setState({
      step: 1
    });
  };
  filterpage = () => {
    const { step } = this.state;
    this.setState({
      // step:step + 1
      step: 2
    });
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

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <Navbar typefunc={this.Type} />
            <Layout
              category = {this.state.category}
              brand = {this.state.brand}
              price = {this.state.price}
              filterpage={this.filterpage}
              page={this.props.prop.query.page}
              type={this.props.prop.query.type}
            />
            {/* { console.log("type of main",this.state.type)} */}
          </div>
        );
      case 2:
        return <FilterMobile 
        mainpage={this.mainpage}
        page={this.props.prop.query.page}
        type={this.props.prop.query.type}
        category={this.Category}
        CheckedBrand={this.CheckedBrand}
        CheckedPrice = {this.CheckedPrice}
        />;
    }

    return <div />;
  }
}

export default Main;
