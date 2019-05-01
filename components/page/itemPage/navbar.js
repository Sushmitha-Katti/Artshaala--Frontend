import React, { Component } from 'react';
import Link from 'next/link';
import logo from "./logo.png";
import NavWrapper from "./NavStyle.js";
import AutoComplete from "./Search"

<meta content="width=device-width, initial-scale=1" name="viewport" />


class Navbar extends Component{

    render(){
        return(
            
            <NavWrapper>
                <div className="main">
                <div className="topnav">
                <img className="logo" src={logo}/>
                <AutoComplete/>
                {/* <span className="box">
                    <input type="text" placeholder="Search.." name="search" className="userinput"/>
                    <button type="submit" className="search"><i className="fa fa-search fa-lg"></i></button>
                    
                </span> */}
               </div> 
               <div className="Navbar">
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>
                    <input type="checkbox" id="nav-check"/>
                    <ul className="nav-links">
                    <span className="box1">
                    <input type="text" placeholder="Search.." name="search" className="userinput"/>
                    <button type="submit" className="search"><i className="fa fa-search fa-lg"></i></button>
                    
                </span>
                        <li><Link href="#"><a onClick={() =>this.props.typefunc("")}>All</a></Link></li>
                        <li><Link href="#"><a onClick={() =>this.props.typefunc("guitar")}>Guitars</a></Link></li>
                        <li><Link href="#"><a onClick={() => this.props.typefunc("keyboard")}>Keyboards & pianos</a></Link></li>
                        <li><Link href="#"><a onClick={() => this.props.typefunc("drums")}>Drums</a></Link></li>
                        <li><Link href="#"><a onClick={() => this.props.typefunc("violin")}>Violins</a></Link></li>
                        <li><Link href="#"><a onClick={() => this.props.typefunc("Indian Instrument")}>Indian Instruments</a></Link></li>
                        {/* <li><Link href="#"><a>Others</a></Link></li> */}
                        {/* <li><Link href="#"><a onClick={() => this.props.typefunc("other")}>Others</a></Link></li> */}
                        
                    </ul>
                </div>
               </div>
               
    </NavWrapper>
        );
    }
}

export default Navbar;
