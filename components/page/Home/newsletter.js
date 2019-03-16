import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import AutoCards from "./autocards";
import autoguitar from "./autoguitar.jpg";

/****************************************   Styled Components   **************************************** */
const D = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Slider = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 660px;
  height: 200px;
  color: ${props => props.color};
  text-align: center;
  padding: 8rem 0rem;
  background: ${props => props.background};
  position: relative;

  .back {
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  .imageoverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;

    background-color: #000000;
  }
`;

const Newsletter = styled.div.attrs({})`
  font-family: "Montserrat", sans-serif;
  width: 580px;
  height: 200px;
  color: ${props => props.color};
  text-align: center;
  padding: 8rem 3rem;
  background: ${props => props.background};

  form {
    position: relative;
  }
  .textinput {
    padding: 0.5rem;
    height: 2rem;
    width: 90%;
    border: none;
  }
  i {
    position: absolute;
    top: 15%;
    right: 50px;
    background: #dcdcdc;
    padding: 0px 9px;
    border-radius: 50%;
  }
`;

/********************************************************************************** */
class NewsLetter extends Component {
  render() {
    return (
      <D>
        <Newsletter background="#f7bb2f" color="black">
          <h1>Subscribe To Our Newsletter</h1>
          <p>
            loreum loreum loreum loreum loreum loreum loreum loreum loreum
            loreum loreum loreum
          </p>
          <form>
            <input
              className="textinput"
              type="text"
              name="email"
              placeholder="Your Email Address"
            />
            <i
              type="button"
              className="fa fa-angle-right fa-2x"
              aria-hidden="true"
            />
          </form>
        </Newsletter>
        <Slider color="white">
          <img className="back" src={autoguitar} alt="guitar" />
          <div className="imageoverlay" />
          <AutoCards />
        </Slider>
      </D>
    );
  }
}

export default NewsLetter;
