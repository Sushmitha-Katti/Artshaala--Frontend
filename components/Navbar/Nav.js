import React, { Component } from "react";
import Navbar from "./index.js";
import NavWrapper from "./styles.js";
import Link from "next/link";

class Nav extends Component {
  render() {
    console.log("Hello");
    console.log("this.props");
    return (
      <NavWrapper>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <input type="checkbox" id="nav-check" />

        <ul className="nav-links">
          {this.props.links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
          <li>
            <form action="/">
              <input type="text" placeholder="Search.." name="search" />
              <i class="fa fa-search" />
            </form>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

export default Nav;
