import React, { Component } from "react";
import Card from "./styles";
import Link from "next/link";

import musicstore from "./musicstore.png";

class ServiceCards extends Component {
  render() {
    return (
      <Card>
        <div className="cardhover">
          <div className="image">
            <img alt="IMAGE" src={musicstore} />
          </div>
          <div className="title">
            <h4>Music Store</h4>
          </div>
          <div className="button">
            <Link href="/">
              <a>
                <h3 className="alink">Explore</h3>
              </a>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}

export default ServiceCards;
