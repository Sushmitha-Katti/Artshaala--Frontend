import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav.js";


class Navbar extends Component {
  render() {
    let links = [
      { href: "/", label: "Home" },
      { href: "/productsearch", label: "Store" },
      { href: "/services", label: "Services & Repairs" },
      { href: "/rental", label: "Rental" },
      { href: "/about", label: "About" },
      //{ href: "/Blog", label: "Blog" },
      { href: "/contact", label: "Contact Us" }
    ].map(link => {
      link.key = `nav-link-${link.href}-${link.label}`;
      return link;
    });

    return <Nav links={links} />;
  }
}

export default Navbar;
