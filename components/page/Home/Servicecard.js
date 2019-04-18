import React, { Component } from "react";
import { Card } from "./styles";
import Link from "next/link";

class ServiceCard extends Component {
  render() {
    return (
      <Card>
        <div className="cardhover">
          <img
            className="image"
            alt="IMAGE"
            src={Object.values(this.props.Cardcontent.img).toString()}
          />
          <div className="imageoverlay" />
          <div className="hoveroverlay" />
          <div className="title">
            <h4>{this.props.Cardcontent.title}</h4>
          </div>
          <Link href={this.props.Cardcontent.link}>
            <a className="button">
              <b>Explore</b>
            </a>
          </Link>
        </div>
      </Card>
    );
  }
}

export default ServiceCard;
