import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Mutation } from 'react-apollo';
import User from '../../components/test/User';
import Nav from "./Nav.js";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';




const CATEGORY_AND_BRAND_QUERY = gql`
  query  CATEGORY_AND_BRAND_QUERY {
    items {
      category
      type      
     
      
    }
  }
  
`;


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
  { href: "/orders", label: "Your Orders" },
  
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

//---------------------------------------NOT AUTHENTICATED LINKS------------------------------------------------------
let notauthlinks = [
  { href: "/signin", label: "Sign In" },
 
 
  
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
      
     

      

     //if there is a user
      if(me  && !me.permissions.includes('ADMIN') ){
        

         links = commonlinks.concat(authlinks)
         isauth = true;
         cartcount = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
       
      }
      //if he is a admin
      else if(me && me.permissions.includes('ADMIN')){
      
        
     
        links = commonlinks.concat(adminlinks);
        admin = true;
        isauth = true;
        cartcount = me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
      }
      else {
        links = commonlinks.concat(notauthlinks);
        isauth = false;
      }
      
   
      return(

        <Query                           //Item Query
        query={CATEGORY_AND_BRAND_QUERY}
        >
        {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
       
        const items = data.items;
         let distcategory  = [... new Set(items.map(item => item.category))]
        let catandtype = {};
        
        distcategory.map(category => catandtype[category] = [...new Set(items.map(item => item.category===category && item.type))].filter(itemtype => itemtype!=false) );
        console.log(catandtype)
        return (
      <Nav links={links} isauth = {isauth} cartcount = {cartcount} admin = {admin} catandtype = {catandtype}/>)
    }}
    </Query>
    )
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
export {CATEGORY_AND_BRAND_QUERY};