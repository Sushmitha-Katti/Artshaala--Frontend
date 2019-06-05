import React, { Component } from "react";
import Link from "next/link";
import { CouroselWrapper } from "./styles";

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
          <Link href="/">
            <div className="cardimg">
              <img
                className="cardimg"
                alt="IMAGE"
                src={this.props.property.images[0]}
              />
              <div className="name">
                {this.props.property.title}
                {this.props.property.id}
              </div>
              <div className="rating">
                {/* <div>{ratings(this.props.property.rating)}</div> */}
                <div className="amount">
                  INR {this.props.property.price}/-
                </div>
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