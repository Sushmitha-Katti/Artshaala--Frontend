import React, { Component } from "react";
import Cardstyle from "./cardStyle";
import Link from "next/link";





class Cards extends Component {
  render() {
    return (
      <Link href={{pathname:'/product', query:{id:this.props.Cardcontent.id}}}>




      <Cardstyle>
        <div className="main">
         
          {/* {console.log(this.props.Cardcontent.images[0])} */}
          <div className="sub">
            <img src={this.props.Cardcontent.images[0]} className="pic" />
            <div className="sub">
              <p className="cost">Name:{this.props.Cardcontent.title}</p>
              
              <div className="sub">
                <p className="cost">Price:{this.props.Cardcontent.price}</p>
             
                <div className="sub">
                <p className="cost">Category:{this.props.Cardcontent.category}</p>
                <div className="sub">
                <p className="cost">Type:{this.props.Cardcontent.type}</p>
             
              
              <div className="sub">
                <p className="cost">Brand:{this.props.Cardcontent.brand}</p>
                </div>
              </div>
             
              </div>

              </div>
            </div>
          </div>
        </div>
      </Cardstyle>
      </Link>
    );
  }
}

export default Cards;
