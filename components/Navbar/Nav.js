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
  };
  dismissoverlay  = () => {
    this.setState(({ selected }) => ({ selected: false }))
    
  }

  //---------------------For a sticky nav bar------------------------------------------------------------
  componentDidMount() {
    
    window.addEventListener("scroll", this.resizeHeaderOnScroll)
    
  }


  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById("stickynav");
    var sticky =  nav.offsetTop;
    var header = document.getElementById("stickyheader");
    var head = document.getElementById("head");
    
      //if the navbar elements are at the top and screen width is greater than 768px then navbar is stiky and and header is hidden

    if (distanceY > sticky && window.innerWidth > 768 ) {
      header.setAttribute("style", "position: sticky");
      head.setAttribute("style", "display: none");
      nav.setAttribute("style","border-top: 0.3rem solid orange; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding: 0.3rem 0rem" )

    } else {
      header.setAttribute("style", "position: relative");
      head.setAttribute("style", "display: block");
      nav.setAttribute("style","border-top: none" )
    }
  }

  //----------------------------------------------------------------------------------------------------------
  render() {
    
   
    const { selected } = this.state;
   
    
    return (
      
      
      
      <NavWrapper id = "stickyheader" >
        
        <div className="Header" id= "head" >
        {this.state.selected? <div className = "overlay"></div>:null}
        
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
        <div id= "stickynav" className="Navbar">
          
          <div className="nav-btn">
            <label htmlFor="nav-check"  onClick={this.toggle}>
            {!this.state.selected? <><span />
              <span />
              <span /></>:null}
              
            </label>
          </div>

          <input type="checkbox" id="nav-check" checked={selected} />

          <ul className="nav-links">
            <div className = "backbutton" onClick = {this.dismissoverlay}>&#10060;</div>
            {this.props.links.map(({ key, href, label }) => (
              <li  id="alink" key={key} onClick={this.dismissoverlay}>
                <div>
                  {label=== "Store"? <div className = "dropdown"><Link href = {href}><a className = "MainNavEle">{label}</a></Link><div className = "dropdown-content">

                 {Object.keys(this.props.catandtype).map(category => <div className = "dropdown-contentofcontent"><span className = "category"><b>{category}</b></span>{this.props.catandtype[category].map(type => <Link href={{pathname:'/itemPage', query:{page:1,category:category,type: type}}}><a className = "type">{type}</a></Link>)}</div>)}

                  </div></div>: <Link href = {href}><a className= "MainNavEle">{label}</a></Link>}
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