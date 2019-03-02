import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import guitar from "./guitar.jpg";
import { CouroselWrapper } from "./styles";

class CouroselCard extends Component {
  render() {
    return (
      <CouroselWrapper>
        <div className="card">
          <Link href="/">
            <div className="cardimg">
              <img className="cardimg" alt="IMAGE" src={guitar} />
              <div className="name">Guitar NameGuitar Name{this.props.a}</div>
              <div className="rating">
                <span>
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                </span>
                <span className="amount">INR 2000/-</span>
              </div>
            </div>
          </Link>
        </div>
      </CouroselWrapper>
    );
  }
}

export default CouroselCard;
