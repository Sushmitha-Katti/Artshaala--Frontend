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
            rel="stylesheet"
          />
        </Head>

        <div id="main">
          <div />
          <div>
            <div>
              <h2>Contact Us</h2>
              <p>
                Our experienced and dedicated staff eager to help you out with
                regard to any musical instruments, accessories, service, rentals
                queries. Feel free to walk in next door to our store.{" "}
              </p>
            </div>
            <div>
              <div>
                <form>
                  <p>get in touch</p>
                  <div>
                    <div>
                      <input type="text" name="name" placeholder="Name" />
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Message"
                    />
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Artshaala Music Store,</h2>
              <h4>#2/4,2nd Floor, 80 Feet Road, Above Freskka Restaurant,</h4>
              <h4>Opp MS Ramaiah Hospital,Poojari Layout,</h4>
              <h4>RMV 2nd Stage, Bangalore-560 094 Karnataka </h4>
            </div>

            <div>
              <h4>
                <a href="tel:8041145509">(+91) 80 41145509</a>
              </h4>
              <h4>
                <a href="tel:7338040655">(+91) 73380 40655</a>
              </h4>
              <h4>
                <a href="mailto:artshaalamusicstore@gmail.com">
                  artshaalamusicstore@gmail.com
                </a>
              </h4>
            </div>
          </div>
          <div />
        </div>
      </Styling>
    );
  }
}

export default Contact;
