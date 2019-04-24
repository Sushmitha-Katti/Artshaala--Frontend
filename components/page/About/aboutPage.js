import React, { Component } from "react";
import AboutStyle from "./aboutStyle";

class AboutPage extends Component {
  render() {
    return (
      <AboutStyle>
        <div className="main">
          <div className="title">
            <span className="line"> </span>
            <span>
              <h3 className="heading">About</h3>
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
            accessories along with stage and studio equipment. Use our unique
            EMI scheme to buy your favourite instruments…buy now pay later!!
            Feel free to walk in next door to our store any hour of the day and
            view our magnificent instrument collection. Artshaala…your one stop
            neighbourhood musical partner!
          </p>
          <button className="enquiry">Enquiry</button>
        </div>
      </AboutStyle>
    );
  }
}

export default AboutPage;
