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
  state = {
    selected: false,
  }
  toggle = () => {
    this.setState(({ selected }) => ({ selected: !selected }))
  }
  render() {
    
   
    const { selected } = this.state
    return (
      
      
      
      <NavWrapper>
        
        <div className="Header">
      
        
        <div className="contact">
          <span></span>
          <span className = "phone">
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            (+91) 73380 40655</span>
            <span className = "email">artshaalamusicstore@gmail.com</span>

        </div>


          <div className = "gridlogoandsearch">
          <div>
            <img className="image" alt="Logo" src={logo} /> </div>
            <AutoComplete/>
            {/* <div className="contact">
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            (+91) 73380 40655
          </div> */}
    <div id = "nothover"> <Link href=  "/mycart"><a><i className="fa fa-shopping-cart cartimage fa-2x"></i> </a></Link>{this.props.cartcount>0?<CartCount className = "count"  count = {this.props.cartcount}/>:null}</div>
          </div>
        </div>
        <div className="Navbar">
          <div className="nav-btn">
            <label htmlFor="nav-check"  onClick={this.toggle}>
              <span />
              <span />
              <span />
            </label>
          </div>

          <input type="checkbox" id="nav-check" checked={selected} />

          <ul className="nav-links">
            {this.props.links.map(({ key, href, label }) => (
              <li  id="alink" key={key} onClick={this.toggle} >
                <div>
                  {label=== "Store"? <div className = "dropdown"><Link href = {href}><a className = "MainNavEle">{label}</a></Link><div className = "dropdown-content">
                 {Object.keys(this.props.catandtype).map(category => <div className = "dropdown-contentofcontent"><span className = "category">{category}</span>{this.props.catandtype[category].map(type => <Link href={{pathname:'/itemPage', query:{page:1,category:category,type: type}}}><a className = "type">{type}</a></Link>)}</div>)}
                  </div></div>: <Link href = {label}><a className= "MainNavEle">{label}</a></Link>}
                </div>
              </li>
              
            ))}
              
           
            {this.props.isauth && (
                <li id="alink" >
                     <SignoutPage />
                </li>)}
            
               
              
           
            
          </ul>
         
        </div>
      </NavWrapper>
    );
   
  }
}

export default Nav;