import React, { Component } from "react";
import { Styling as Style } from "./styling";
import Link from "next/link";


class Comman extends Component {
  render() {
    return (
      
      <Style>
          
           <div className="main">
          
         <div className="l">
            <div className="l1" />
            <div className="l2" />
             <div className="l3" />
           <div className="l4" />
            <div className="l5" />
            <div className="l6" />
            <div className="l7" /> 
            </div>
            <div className="words">
            <h6 className="line1">WELCOME TO OUR MUSIC STORE</h6>
            <h1 className="line2">From Starters to pro...</h1>
            <p className="line3">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
            <br />
            <Link href="/">
              <button className="line4">Explore Now</button>
            </Link>
          </div>
        </div>
        
        
        
      </Style>
     
    );
  }
}

export default Comman;
