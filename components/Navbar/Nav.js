import React, { Component } from "react";
import Navbar from "./index.js";
import NavWrapper from "./styles.js";
import Link from "next/link";
import SignoutPage from "../../components/test/signoutpage";
import logo from "./logo.png";
import CartCount from "../page/cart/cartcount";


class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="Header">
          <img className="image" alt="Logo" src={logo} />
          <div className="contact">
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            (+91) 73380 40655
          </div>
        </div>
        <div className="Navbar">
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
              <li id="alink" key={key}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
              
            ))}
              
           
            {this.props.isauth && (
                <li id="alink" >
                     <SignoutPage />
                </li>)}
            {!this.props.admin && ( 
                <li id = "nothover"> <Link href=  "/mycart"><a><i  style={{color:"orange"}} className="fa fa-shopping-cart fa-lg cart"></i></a></Link><CartCount  count = {this.props.cartcount}/></li>)}
              
            <li key="formli">
              <form action="/">
                <input type="text" placeholder="Search.." name="search" />
                <i className="fa fa-search search " />
              </form>
            </li>
            
          </ul>
          <div className="mobilelogo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </NavWrapper>
    );
  }
}

export default Nav;
