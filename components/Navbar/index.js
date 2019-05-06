import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Mutation } from 'react-apollo';
import User from '../../components/test/User';
import Nav from "./Nav.js";

let commonlinks = [
   { href: "/", label: "Home" },
  { href: "/itemPage?type=all&page=1", label: "Store" },
   { href: "/services", label: "Services & Repairs" },
   { href: "/rental", label: "Rental" },
   { href: "/about", label: "About" },

   { href: "/blogs", label: "Blogs" },

   { href: "/contact", label: "Contact Us" }
].map(link => {
   link.key = `nav-link-${link.href}-${link.label}`;
   return link;
 });

//----------------------------------AUTHENTICATED LINKS------------------------------------------------------------------
 let authlinks = [
  { href: "/orders", label: "Orders" },
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

//---------------------------------------NOT AUTHENTICATED LINKS------------------------------------------------------
let notauthlinks = [
  { href: "/signin", label: "Sign In" },
 { href: "/signup", label: "Sign Up" },
 
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

//------------------------------------------ADMIN LINKS------------------------------------------------------------


let adminlinks = [
  { href: "/admin", label: "Admin" },
 
 
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
//--------------------------------------------------------------------------------------------------------------------


let links = []
let isauth = true;
let cartcount = 0;
let admin = false;

const Navbar = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
     
      if(me && !me.permissions.includes('ADMIN')){
         links = commonlinks.concat(authlinks)
         isauth = true;
         cartcount = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
        
      }
      else if(me && me.permissions.includes('ADMIN')){
        links = commonlinks.concat(adminlinks);
        admin = true;
        isauth = true;
      }
      else {
        links = commonlinks.concat(notauthlinks);
        isauth = false;
      }
      
   
      return(<Nav links={links} isauth = {isauth} cartcount = {cartcount} admin = {admin}/>)
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
