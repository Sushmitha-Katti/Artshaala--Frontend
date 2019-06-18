import React, { Component } from "react";
import CouroselCard from "./couroselCard";
import guitar from "./guitar.jpg";
import styled, { keyframes } from "styled-components";
import { Cards } from "./styles";
import Slider from "react-slick";

const Flexcards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

let properties = [
  {
    id: 1,
    name: "GuitarNameGuitarName",
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 3
  },
  {
    name: "GuitarNameGuitarName",
    id: 2,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  },
  {
    name: "GuitarNameGuitarName",
    id: 3,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  },
  {
    name: "GuitarNameGuitarName",
    id: 4,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  },
  {
    name: "GuitarNameGuitarName",
    id: 5,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  },
  {
    name: "GuitarNameGuitarName",
    id: 6,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  },
  {
    name: "GuitarNameGuitarName",
    id: 7,
    stars: 4,
    amount: 2000,
    img: { guitar },
    rating: 4
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f7bb2f",
        borderRadius: "50%",
        padding: "0px"
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#f7bb2f",
        borderRadius: "50%",
        padding: "0",
        color: "blue",
        opacity: "0.7"
      }}
      onClick={onClick}
    />
  );
}

class CouroselCards extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1
          }
        }
      ]
    };

    let Courosels = properties.map(property => (
      <div>
        <Flexcards>
          <CouroselCard property={property} />
        </Flexcards>
      </div>
    ));
    return (
      <Cards>
        
        <Slider {...settings}>{Courosels}</Slider>
      </Cards>
    );
  }
}

export default CouroselCards;
