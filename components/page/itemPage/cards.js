import React, { Component } from "react";
import Cardstyle from "./cardStyle";
import Link from "next/link";

class Cards extends Component {
  render() {
    return (
      <Link href='/product'>
      <Cardstyle>
        <div className="main">
          {/* {(() => {
                if(this.props.Cardcontent.off ==null | this.props.Cardcontent.off =="" ){
                    return <span></span>
             }else{
                return <p className="off">{this.props.Cardcontent.off}</p>
             }
             })()} 
                    <Link href={this.props.Cardcontent.url}>
                        <img src={Object.values(this.props.Cardcontent.img).toString()} className="pic"/>
                    </Link>
                    <Link href={this.props.Cardcontent.url}><p className="descrip">{this.props.Cardcontent.descrip}</p></Link>
                        <p className="review">
                            {this.props.Cardcontent.reviews}

                            <span className="stars">
                            
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i></span>
                        
                    </p>
                    */}
          {console.log(this.props.Cardcontent.images[0])}
          <div className="sub">
            <img src={this.props.Cardcontent.images[0]} className="pic" />
            <div className="sub">
              <p className="cost">Name:{this.props.Cardcontent.title}</p>
              <div className="sub">
                <p className="cost">Price:{this.props.Cardcontent.price}</p>
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
