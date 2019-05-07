import React, { Component } from "react";
import Navbar from "./navbar";
import Layout from "./layout";
import FilterMobile from "./filterMobile";
class Main extends Component {
  state = {
    step: 1,
    // type:  this.props.prop.query.type,
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



  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <Navbar typefunc={this.Type} />
            <Layout
              filterpage={this.filterpage}
              page={this.props.prop.query.page}
              type={this.props.prop.query.type}
            />
            {/* { console.log("type of main",this.state.type)} */}
          </div>
        );
      case 2:
        return <FilterMobile mainpage={this.mainpage} />;
    }

    return <div />;
  }
}

export default Main;
