import React, { Component } from "react";
import CouroselCard from "./couroselCard";
import styled, { keyframes } from "styled-components";
import { Cards } from "./styles";

class CouroselCards extends Component {
  constructor() {
    super();
    this.state = { slideIndex: 2 };
  }
  showDivs = () => {
    let n = this.state.slideIndex;
    let i;
    let x = this.myInput;
    let k = x.getElementsByClassName("c");
    //console.log(n, k.length);

    for (i = 0; i < k.length; i++) {
      k[i].style.display = "none";
    }
    //console.log(this.state.slideIndex - 1);
    k[this.state.slideIndex - 1].style.display = "inline-block";
    k[this.state.slideIndex - 1].style.delay = 5;

    k[this.state.slideIndex].style.display = "inline-block";

    k[this.state.slideIndex + 1].style.display = "inline-block";

    k[this.state.slideIndex + 2].style.display = "inline-block";
  };

  plusDivs = () => {
    console.log(this.state.slideIndex);
    if (this.state.slideIndex < 5)
      this.setState(state => ({ slideIndex: state.slideIndex + 1 }));
    console.log(this.state.slideIndex);

    this.showDivs();
  };
  minusDivs = () => {
    if (this.state.slideIndex > 1)
      this.setState(state => ({ slideIndex: state.slideIndex - 1 }));

    this.showDivs();
    console.log(this.state.slideIndex);
  };

  render() {
    return (
      <Cards>
        <div className="title">
          <span className="line"> </span>
          <span className="titleName">
            <h3>Best Sellers</h3>
          </span>
          <span className="line"> </span>
        </div>
        <div className="cardandbuttons">
          <div className="buttons">
            <i
              className="fa fa-angle-left fa-lg"
              onClick={() => this.minusDivs()}
            />
          </div>
          <div>
            <div
              className="cardsdisplay"
              ref={input => {
                this.myInput = input;
              }}
            >
              <div className="c a">
                <CouroselCard a="1" />
              </div>
              <div className="c a">
                <CouroselCard a="2" />
              </div>
              <div className="c a">
                <CouroselCard a="3" />
              </div>
              <div className="c a">
                <CouroselCard a="4" />
              </div>

              <div className="c">
                <CouroselCard a="5" />
              </div>
              <div className="c">
                <CouroselCard a="6" />
              </div>
              <div className="c">
                <CouroselCard a="7" />
              </div>
              <div className="c">
                <CouroselCard a="8" />
              </div>
            </div>
          </div>
          <div className="buttons">
            <i
              className="fa fa-angle-right fa-lg"
              onClick={() => this.plusDivs()}
            />
          </div>
        </div>
      </Cards>
    );
  }
}

export default CouroselCards;
