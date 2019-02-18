import React from "react";
import Link from "next/link";
import styled from "styled-components";

const links = [
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

const Nav = () => (
  <NavWrapper>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </NavWrapper>
);
const NavWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  :global(body) {
    margin: 0;
  }
  nav {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  nav > ul {
  }
  li {
    display: flex;
    padding: 25px 10px;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 16px;
  }
  ul li a:hover {
    color: #f7bb2f;
  }
`;

export default Nav;
