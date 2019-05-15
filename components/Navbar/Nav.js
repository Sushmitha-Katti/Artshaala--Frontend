import React, { Component } from "react";
import Navbar from "./index.js";
import NavWrapper from "./styles.js";
import Link from "next/link";
import SignoutPage from "../../components/test/signoutpage";
import logo from "./logo.png";
import CartCount from "../page/cart/cartcount";
import AutoComplete from '../page/itemPage/Search';
import cart from './cart.png';


class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        
        <div className="Header">
        
          <div className = "ribbon "></div>
          <div className = "gridlogoandsearch">
            <img className="image" alt="Logo" src={logo} /> 
            <AutoComplete/>
            <div className="contact">
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            (+91) 73380 40655
          </div>
            <div id = "nothover"> <Link href=  "/mycart"><a><img className="cartimage" alt="Logo" src={cart} /> </a></Link><CartCount className = "count"  count = {this.props.cartcount}/></div>
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
              <li  id="alink" key={key}>
                <Link href={href}>
                  <a className = {label}>{label==="Sign In"? <strong>{label}</strong>: label}</a>
                </Link>
              </li>
              
            ))}
              
           
            {this.props.isauth && (
                <li id="alink" >
                     <SignoutPage />
                </li>)}
            
               
              
           
            
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
