import React, { Component } from "react";
import AboutStyle from "./aboutStyle";
import Link from "next/link";
import { link } from "fs";

class AboutPage extends Component {
  render() {
    return (
      <AboutStyle>
        <div className="main">
          <div className="title">
            <span className="line"> </span>
            <span>
              <h3 className="heading">About Us</h3>
            </span>
            <span className="line"> </span>
          </div>

          <p className="para">
            We at Artshaala Music Store have been passionate about spreading the
            joy of music from our very inception. Artshaala Music Store is your
            one stop destination for all kind of musical instruments &
            accessories based in Bangalore.Artshaala Music Store founded by
            Artshaala Fine Arts Studio, the premium one arts institute in
            Bangalore.Our presence and our range of musical instruments and
            accessories has been synonymous with best quality, innovation and
            consistent performance. We sell all kind western and Indian musical
            instruments at our store.We over a range of exclusive discounts on
            top of the line musical instruments, professional music gear and
            accessories along with stage and studio equipment.  <br></br> <br></br>Use our unique
            EMI scheme to buy your favourite instruments…buy now pay later!!
            <br></br> <br></br> free to walk in next door to our store any hour of the day and
            view our magnificent instrument collection. Artshaala…your one stop
            neighbourhood musical partner!
          </p>
          <div style={{paddingTop: 10}}>
          <Link href = "/contact#contactForm">
          <button className="enquiry">Enquiry</button>
          </Link>
          </div>
        </div>
        
      </AboutStyle>
    );
  }
}

export default AboutPage;
