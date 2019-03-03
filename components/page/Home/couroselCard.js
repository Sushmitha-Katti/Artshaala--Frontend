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
              <div className="name">
                {this.props.property.name}
                {this.props.property.id}
              </div>
              <div className="rating">
                <span>
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                  <i class="fa fa-star" aria-hidden="true" />
                </span>
                <span className="amount">
                  INR {this.props.property.amount}/-
                </span>
              </div>
            </div>
          </Link>
        </div>
      </CouroselWrapper>
    );
  }
}

export default CouroselCard;
