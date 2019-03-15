import React, { Component } from "react";
import Body from "./styles";
import logo from "./images/logo1.png";
import Nav from "../../Navbar";
import Footer from "../../Footer";

class Rental extends Component {
  render() {
    return (
      <div>
        <Body className="wrapper">
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          <nav>
            <Nav />
          </nav>
          <section className="main-section">
            <div className="SectionA">
              <h1>Rental</h1>
              <p className="main-text">
                Artshaala Music Store offers quality , new and used musical
                instruments for rental that are maintained, cleaned and serviced
                by a professional technicians.
                <br />
                Musical instruments include like Acoustic Guitars, Electric
                Guitars, Guitar Amplifiers, Keyboards, Acoustic & electronic
                drum kits, Tablas, Harmoniums, Dholaks, <br />
                as well as Pro Audio systems including speakers, amplifiers,
                mixers, mics, monitors etc.
              </p>
            </div>
            <form className="main">
              <div>
                <h3>GET IN TOUCH</h3>
              </div>
              <br />
              <div>
                <input placeholder="Your name here" />
              </div>
              <br />
              <div>
                <input placeholder="Your email here" />
              </div>
              <br />
              <div>
                <input placeholder="Subject here" />
              </div>
              <br />
              <div>
                <input placeholder="Your phone here" />
              </div>
              <br />
              <div>
                <input placeholder="Message" />
              </div>
              <br />
              <div>
                <button className="form-btn">Submit</button>
              </div>
            </form>
          </section>
        </Body>
        <div className="footer-grid">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Rental;
