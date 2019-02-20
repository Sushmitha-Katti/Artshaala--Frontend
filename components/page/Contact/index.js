import React, { Component } from "react";
import { Styling } from "./styles";

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
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name here"
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your phone here"
                      />
                    </div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email here"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject here"
                    />
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
        </div>
      </Styling>
    );
  }
}

export default Contact;
