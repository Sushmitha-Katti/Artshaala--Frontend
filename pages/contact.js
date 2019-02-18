import React, { Component } from "react";
import Navigate from "../components/page/Contact/navbar";
import "./style_contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="contain">
          <div className="details">
            <h2>Contact Us</h2>
            <p>
              Our experienced and dedicated staff eager to help you out with
              regard to any musical instruments, accessories, service, rentals
              queries. Feel free to walk in next door to our store.{" "}
            </p>
          </div>
          <div className="message-box">
            <div className="request">
              <form>
                <p className="msg-head">get in touch</p>
                <div className="actual-form">
                  <div className="first">
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
                    className="custom-textarea"
                    name="message"
                    placeholder="Message"
                  />
                  <input type="submit" />
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
