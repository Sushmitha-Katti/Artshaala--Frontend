
import React, { Component } from 'react';
import styled from 'styled-components';
import CardTemp from "./cardtemp";
import Sort from "./sort";
import Items from "./Items"


const Wrapper = styled.nav`
display: grid;
margin: 20px;
justify-items: center;
grid-template-columns: 20% 80%;

@media (max-width:750px){
    display:block;
    align-items: center;
}
`;

class Layout extends Component {
  state = {
    category: "",
    options:[]
  };

  Category = a => {
   
    let category_var = a;
    this.setState({
      category: category_var
    });
  };

  CheckedBox = e => {
    // console.log(this.state.options);

    let boxes = e;
    console.log("box", boxes);
    console.log(this.state);
    if (this.state.options.includes(boxes)) {
      let removedbox = this.state.options.filter(
        item => item !== e
      );
      this.setState({ options: removedbox });
    } else {
      this.setState({
        options: [...this.state.options, boxes]
      });
    }

    console.log("--------------", this.state.options);
  }
 
  render() {
    
    console.log("Layout",this.props)
    console.log("hello", this.state.category);
    return (
      <Wrapper>
        <Sort
          filterpage={this.props.filterpage}
          category={this.Category}
          CheckedBox={this.CheckedBox}
          type={this.props.type}
        />
        <Items category={this.state.category} brand= {this.state.options} page={this.props.page} type={this.props.type}/>

        {/* <CardTemp/> */}
      </Wrapper>
    );
  }
}


export default Layout;

