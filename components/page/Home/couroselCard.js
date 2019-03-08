import React, { Component } from "react";
import Link from "next/link";
import { CouroselWrapper } from "./styles";

/*          for displaying the ratings            */
let ratings = rating => {
  let toatal_ratings = [];

  for (let j = 0; j < rating; j++) {
    toatal_ratings.push(<i class="fa fa-star" aria-hidden="true" />);
  }
  return toatal_ratings;
};

class CouroselCard extends Component {
  render() {
    return (
      <CouroselWrapper>
        <div className="card">
          <Link href="/">
            <div className="cardimg">
              <img
                className="cardimg"
                alt="IMAGE"
                src={Object.values(this.props.property.img).toString()}
              />
              <div className="name">
                {this.props.property.name}
                {this.props.property.id}
              </div>
              <div className="rating">
                <span>{ratings(this.props.property.rating)}</span>
                <span className="amount">
                  INR {this.props.property.amount}/-
                </span>
              </div>
            </div>
          </Link>
        </div>
      </CouroselWrapper>
    );
  }
}

export default CouroselCard;
