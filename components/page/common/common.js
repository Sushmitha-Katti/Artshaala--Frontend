import React, { Component } from "react";
import { Style,Img2,Header } from "./styling";
import Link from "next/link";
import img1 from './images/g1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import guitarposter from './images/guitarposter.jpg';
import mainposter from './images/mainposter.jpg';
import ServiceCards from '../Home/Servicecards';
import  vault from "./images/vault.jpg";
import zoom from "./images/zoom.jpg";
import kala from "./images/kala.jpg";
import ibanez from "./images/ibanez.jpg";
import harman from "./images/harman.jpg";
import fender from "./images/fender.jpg";
import piano from "./images/piano.jpg";
import drums from "./images/drums.jpg";
import tabla from "./images/tabla.jpg";
import guitarcat from "./images/guitarcat.jpg";
import advert from "./images/advert.jpg";
import CouroselCards from "../Home/couroselCards";

import NewsLetter from "../Home/newsletter"


class Comman extends Component {
  render() {
    return (
      <div>
      <Style>
        {/* <div className="main">
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
            <Link href="/itemPage?type=all&page=1">
              <button className="line4">Explore Now</button>
            </Link>
          </div> 
        </div> */}
        <div ><img className="advimg"src={advert}/></div>
       
        <div className = "cardsgrid">
        <ServiceCards/>
        </div>
        <img className = "middleimg" src={guitarposter}/>
       
       
       
      </Style>
      
      <Header>
      {/* <div className="header">
        <h1 className="header-text">Top Categories</h1>
      </div> */}
      {/* <CouroselCards/> */}
      <h1 className = "brand">Browse By Categories</h1>
      <div className = "categorygrid">
        <div><img src = {piano} /><b>Piano</b></div>
        <div><img src = {drums} /><b>Drums</b></div>
        <div><img src = {tabla} /><b>tabla</b></div>
        <div><img src = {guitarcat}/><b>guitar</b></div>
      </div>
    
     
     
      

    
      </Header>
    
      <CouroselCards/>
      <Header><h1 className = "brand">Top Brands</h1>

<div className = "brandgrid">
<img src  = {vault}/>
<img src  = {kala}/>
<img src  = {zoom}/>
<img src  = {ibanez}/>
<img src  = {harman}/>
<img src  = {fender}/>
</div></Header>
      <NewsLetter />
   
      </div>
    );
  }
}

export default Comman;
