import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavTestWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  :global(body) {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    background: white;
  }

  li {
    display: flex;
    padding: 25px 10px;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 100%;
  }
  button {
    padding: 0;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    background-color: white;
  }
  ul li a:hover {
    color: #f7bb2f;
  }
  button:hover {
    color: #f7bb2f;
  }
`;

const Navtest = () => (
  <NavTestWrapper>
    <ul className="nav-links">

    <li id="alink">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li id="alink">
        <Link href="#">
          <a>All</a>
        </Link>
      </li>
      <li id="alink">
        <Link href="#">
          <a>Pending</a>
        </Link>
      </li>
      <li id="alink">
        <Link href="#">
          <a>Delivered</a>
        </Link>
      </li>
     
    </ul>
    ;
  </NavTestWrapper>
);
export default Navtest;
