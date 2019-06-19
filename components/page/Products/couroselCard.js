import React, { Component } from "react";
import Link from "next/link";
import { CouroselWrapper } from "./styles";
import StarRating from 'react-star-rating-component';

/*          for displaying the ratings            */
// let ratings = rating => {
//   let toatal_ratings = [];

//   for (let j = 0; j < rating; j++) {
//     toatal_ratings.push(<i class="fa fa-star individualstar" aria-hidden="true" />);
//   }
//   return toatal_ratings;
// };

class CouroselCard extends Component {
  render() {
    return (
      <CouroselWrapper>
        <div className="card">
        <Link href={{pathname:'/product', query:{id:this.props.property.id}}}>
            <div className="cardimg">
            {this.props.property.discount > 0? <div className = "discountpercentage">{this.props.property.discount}% OFF</div>: null}

              <img
                className="cardimg"
                alt="IMAGE"
                src={this.props.property.images[0]}
              />
              <StarRating   editing={false}
              renderStarIcon={()=> <i class="fa fa-star " aria-hidden="true"></i>}
              starCount={5}
              value={this.props.property.AvgRating}/>
              <div className="name">
                {this.props.property.title}
                
              </div>
             
              
                {/* <div>{ratings(this.props.property.rating)}</div> */}
                <div className="amount">
                  {this.props.property.discount?<div className = "both"><div className = "actual">Rs. {this.props.property.price}</div><div className = "discounted">Rs. {this.props.property.discountPrice}</div></div>: <div className = "onlyprice">Rs. {this.props.property.price}</div>}
                
              </div>
            </div>
          </Link>
        </div>
      </CouroselWrapper>
    );
  }
}

export default CouroselCard;

// class CouroselCard extends Component {
//   render() {
//     return (
//       <CouroselWrapper>
//         <div className="card">
//           <Link href="/">
//             <div className="cardimg">
//               <img
//                 className="cardimg"
//                 alt="IMAGE"
//                 src={Object.values(this.props.property.img).toString()}
//               />
//               <div className="name">
//                 {this.props.property.name}
//                 {this.props.property.id}
//               </div>
//               <div className="rating">
//                 {/* <div>{ratings(this.props.property.rating)}</div> */}
//                 <div className="amount">
//                   INR {this.props.property.amount}/-
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </CouroselWrapper>
//     );
//   }
// }

// export default CouroselCard;