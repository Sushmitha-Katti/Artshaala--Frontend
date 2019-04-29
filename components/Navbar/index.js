import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Mutation } from 'react-apollo';
import User from '../../components/test/User';
import Nav from "./Nav.js";

let commonlinks = [
   { href: "/", label: "Home" },
  { href: "/itemPage", label: "Store" },
   { href: "/services", label: "Services & Repairs" },
   { href: "/rental", label: "Rental" },
   { href: "/about", label: "About" },

   { href: "/blogs", label: "Blogs" },

   { href: "/contact", label: "Contact Us" }
].map(link => {
   link.key = `nav-link-${link.href}-${link.label}`;
   return link;
 });


 let authlinks = [
  { href: "/orders", label: "Orders" },
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

let notauthlinks = [
  { href: "/signin", label: "Sign In" },
 { href: "/signup", label: "Sign Up" },
 
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
let links = []
let isauth = true;
let cartcount = 0;

const Navbar = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
     
      if(me){
         links = commonlinks.concat(authlinks)
         isauth = true;
         cartcount = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
         console.log('/////////////');
         console.log(cartcount);
      }
      else{
        links = commonlinks.concat(notauthlinks);
        isauth = false;
      }
   
      return(<Nav links={links} isauth = {isauth} cartcount = {cartcount}/>)
    }}
  </User>
);

// class Navbar extends Component {
//   render() {
//     let links = {
//      1: { href: "/", label: "Home" },
//      2:{ href: "/productsearch", label: "Store" },
//      3: { href: "/services", label: "Services & Repairs" },
//      4: { href: "/rental", label: "Rental" },
//      5: { href: "/about", label: "About" },
//       //{ href: "/Blog", label: "Blog" },
//      6: { href: "/contact", label: "Contact Us" }
//     }.map(link => {
//       link.key = `nav-link-${link.href}-${link.label}`;
//       return link;
//     });

//     return <Nav links={links} />;
//   }
// }

export default Navbar;
