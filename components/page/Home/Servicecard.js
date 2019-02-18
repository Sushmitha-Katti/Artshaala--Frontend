import React, { Component } from "react";
import Card from "./styles";
import Link from "next/link";

import musicstore from "./musicstore.png";

class ServiceCard extends Component {
  render() {
    return (
      <Card>
        <div className="cardhover">
          <div className="image">
            <img alt="IMAGE" src={musicstore} />
          </div>
          <div className="title">
            <h4>{this.props.Cardcontent.title}</h4>
          </div>
          <Link href="/">
            <a>
              <h3 className="button">Explore</h3>
            </a>
          </Link>
        </div>
      </Card>
    );
  }
}

export default ServiceCard;
