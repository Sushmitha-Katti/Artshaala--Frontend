import React, { Component } from "react";
import { Styling } from "./styles";
import Head from "next/head";

class Contact extends Component {
  state = {};
  render() {
    return (
      <Styling>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One|Monoton"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div id="main">
          <div />
          <div>
            <h1>Contact Us</h1>
            <p>
              Our experienced and dedicated staff eager to help you out with
              regard to any musical instruments, accessories, service, rentals
              queries. Feel free to walk in next door to our store.
            </p>
          </div>
          <div>
            <div>
              <form>
                <p>Get in Touch</p>
                <div>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="phone" placeholder="Phone" />
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea type="text" name="message" placeholder="Message" />
                  <button type="input" className="btn btn-default btn-lg">
                    SUBMIT
                    <span className="glyphicon glyphicon-circle-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
            <div className="address">
              <h1>Artshaala Music Store,</h1>

              <br />
              <h2>Address</h2>
              <h4>
                #2/4,2nd Floor, 80 Feet Road,
                <br />
                Above Freskka Restaurant,
                <br />
                Opp MS Ramaiah Hospital,
                <br />
                Poojari Layout,
                <br />
                RMV 2nd Stage,
                <br />
                Bangalore-560 094
                <br />
                Karnataka
              </h4>
              <br />

              <h2>Phone</h2>
              <h4>
                <span className="glyphicon glyphicon-earphone" />
                <a href="tel:8041145509">(+91) 80 41145509</a>/
                <a href="tel:7338040655">(+91) 73380 40655</a>
              </h4>
              <br />

              <h2>Email</h2>
              <h4>
                <a href="mail-to:artshaalamusicstore@gmail.com">
                  artshaalamusicstore@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Styling>
    );
  }
}

export default Contact;
