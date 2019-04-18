import React, { Component } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import profile from "./profile.png";

/**************************     Styled Components         *************************************** */
const T = styled.div`
  position: absolute;
  z-index: 10;
  top: 30%;
  width: 100%;
  height: 50%;
`;

const S = styled.div`
  width: 20px;
  height: 20px;
  .profile {
    display: flex;
    justify-content: center;
    align-content: center;
    #title {
      align-self: center;
    }
  }
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 1rem;
  }
`;
/*********************************************************************************/
class AutoCards extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      background: "red",
      arrows: false
    };
    return (
      <T>
        <Slider {...settings}>
          <S>
            <p className="something">
              loreum loreum loreum loreum loreum loreum loreum loreum loreum
              loreum loreum loreum loreum loreum loreum
            </p>
            <div className="profile">
              <img src={profile} alt="profile photo" />
              <div id="title">
                <h3>Name name</h3>
                <p>Singer</p>
              </div>
            </div>
          </S>
          <S>
            <p className="something">
              loreum loreum loreum loreum loreum loreum loreum loreum loreum
              loreum loreum loreum loreum loreum loreum
            </p>
            <div className="profile">
              <img src={profile} alt="profile photo" />
              <div id="title">
                <h3>Name name</h3>
                <p>Singer</p>
              </div>
            </div>
          </S>
          <S>
            <p className="something">
              loreum loreum loreum loreum loreum loreum loreum loreum loreum
              loreum loreum loreum loreum loreum loreum
            </p>
            <div className="profile">
              <img src={profile} alt="profile photo" />
              <div id="title">
                <h3>Name name</h3>
                <p>Singer</p>
              </div>
            </div>
          </S>
        </Slider>
      </T>
    );
  }
}

export default AutoCards;
