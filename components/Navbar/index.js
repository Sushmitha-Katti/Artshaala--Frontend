import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav.js";

class Navbar extends Component {
  render() {
    let links = [
      { href: "/", label: "Home" },
      { href: "/store", label: "Store" },
      { href: "/Service&Repairs", label: "Services & Repairs" },
      { href: "/Rental", label: "Rental" },
      { href: "/About", label: "About" },
      { href: "/Blog", label: "Blog" },
      { href: "/Contact", label: "Contact Us" }
    ].map(link => {
      link.key = `nav-link-${link.href}-${link.label}`;
      return link;
    });
    console.log(links);
    return <Nav links={links} />;
  }
}

export default Navbar;
