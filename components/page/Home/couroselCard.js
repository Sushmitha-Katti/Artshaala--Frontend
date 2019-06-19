import React, { Component } from "react";
import Link from "next/link";
import { CouroselWrapper } from "./styles";
import StarRating from 'react-star-rating-component';

/*          for displaying the ratings            */
let ratings = rating => {
  let toatal_ratings = [];

  for (let j = 0; j < rating; j++) {
    toatal_ratings.push(<i class="fa fa-star individualstar" aria-hidden="true" />);
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
          {this.props.property.discount > 0? <div className = "discountpercentage">{this.props.property.discount}% OFF</div>: null}
             
              <img
                className="cardimg"
                alt="IMAGE"
                src={Object.values(this.props.property.img).toString()}
                alt= "No image"
              />
              <StarRating   editing={false}
              renderStarIcon={()=> <i class="fa fa-star " aria-hidden="true"></i>}
              starCount={5}
              value={3}/>
              <div className="name">
              {this.props.property.name}
                
              </div>
             
              
                {/* <div>{ratings(this.props.property.rating)}</div> */}
                <div className="amount">
                {this.props.property.discount?<div className = "both"><div className = "actual">Rs. {this.props.property.amount}</div><div className = "discounted">Rs. {this.props.property.amount}</div></div>: <div className = "onlyprice">Rs. {this.props.property.amount}</div>}
                
              </div>
            </div>
          </Link>
        </div>
      </CouroselWrapper>
    );
  }
}

export default CouroselCard;