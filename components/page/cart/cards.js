import React, { Component } from "react";
import { Style } from "./cardstyles";

class Cards extends Component {
  state = {};
  render() {
    return (
      <Style>
        <div id="main">
          <img src={Object.values(this.props.Contents.img).toString()} />
          <div>
            <p>{this.props.Contents.title}</p>
            <span className="fa fa-star check" />
            <span className="fa fa-star check" />
            <span className="fa fa-star check" />
            <span className="fa fa-star check" />
            <span>{this.props.Contents.cost}/-</span>
          </div>
        </div>
      </Style>
    );
  }
}

export default Cards;
