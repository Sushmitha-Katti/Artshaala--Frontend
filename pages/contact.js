import React, { Component } from "react";
import Navigate from "../components/page/Contact/navbar";

import styled from "styled-components";

const Styling = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  #main {
    width: 100%;
    height: 100%;
    background-image: url("../pictures/image5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    opacity: 0.8;
  }

  #main > div > div:first-child {
    float: left;
    position: relative;
    width: 40%;
    height: 500px;
    margin-top: 50px;
    margin-left: 3%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  #main > div > div:nth-child(2) {
    width: 40%;
    float: right;
    height: 515px;
    margin-right: 6%;
    margin-top: 50px;
    background-color: rgba(106, 90, 205, 0.2);
    border-left: 2px solid rgb(106, 90, 205);
    border-radius: 16px;
  }
`;

const H2 = styled.h2`
  font-family: "Patua One", cursive;
  font-size: 50px;
  margin-bottom: 30px;
  color: Tomato;
  padding-top: 10px;
  margin-left: 5%;
`;

const P = styled.p`
  font-family: courier;
  font-size: 25px;
  margin-left: 6%;
  margin-right: 2%;
  color: black;
  margin-bottom: 20px;
`;

const Head = styled.p`
  font-family: "Monoton", cursive;
  color: rgb(106, 90, 205);
  background: none;
  border-left: 3px #eee solid;
  font-size: 35px;
  margin-bottom: 30px;
  margin-left: 5%;
  margin-top: 10px;
  padding-left: 10px;
`;

const Submit = styled.input`
  margin-top: 25px;
  border-radius: 20px;
  border: none;
  width: 30%;
  height: 40px;
  margin-left: 5%;
  margin-bottom: 20px;
  background-color: DodgerBlue;
  font-size: 25px;
  color: white;
`;

const Input = styled.input`
  border: 1px black dotted;
  outline: none;
  border-radius: 15px;
  background-color: rgba(180, 180, 180, 0.4);
  box-sizing: border-box;
  font-size: 20px;
  padding: 13px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  margin-left: 4%;
  margin-bottom: 10px;
  width: 85%;
`;

class Contact extends Component {
  state = {};
  render() {
    return (
      <Styling>
        <div id="main">
          <div>
            <div>
              <H2>Contact Us</H2>
              <P>
                Our experienced and dedicated staff eager to help you out with
                regard to any musical instruments, accessories, service, rentals
                queries. Feel free to walk in next door to our store.{" "}
              </P>
            </div>
            <div>
              <div>
                <form>
                  <Head>get in touch</Head>
                  <div>
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your name here"
                      />
                      <Input
                        type="text"
                        name="phone"
                        placeholder="Your phone here"
                      />
                    </div>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Your email here"
                    />
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject here"
                    />
                    <Input type="text" name="message" placeholder="Message" />
                    <Submit type="submit" />
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
