import React, { Component } from 'react';
import Link from 'next/link';
import NavStyle from './style.js';
import logo from "./logo.png";

<meta content="width=device-width, initial-scale=1" name="viewport" />

class Navbar extends Component{

    render(){
        return(
            
            <NavStyle>
                <div className="topnav">
                <img className="logo" src={logo}/>
                <span className="main">
                    <input type="text" placeholder="Search.." name="search" className="user-input"/>
                    <button type="submit" className="search">Search</button>
                    {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                </span>
               </div> 
               <div className="nav">
                    <label htmlFor="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle"/>
                    <div className="menu">
                        <Link href="#"><a>All</a></Link>
                        <Link href="#"><a>Guitars</a></Link>
                        <Link href="#"><a>Keyboards & pianos</a></Link>
                        <Link href="#"><a>Drums</a></Link>
                        <Link href="#"><a>Violins</a></Link>
                        <Link href="#"><a>Indian Instruments</a></Link>
                        <Link href="#"><a>Others</a></Link>
                    </div>

               </div>
               
    </NavStyle>
        );
    }
}

export default Navbar;