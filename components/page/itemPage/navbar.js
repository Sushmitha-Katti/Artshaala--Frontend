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
                        <li><Link href={{pathname:'/itemPage', query:{type:"all",page:1}}}><a>All</a></Link></li>
                        <li><Link href={{pathname:'/itemPage', query:{type:"guitar",page:1}}}><a>Guitars</a></Link></li>
                        <li><Link href={{pathname:'/itemPage', query:{type:"keyboard",page:1}}}><a>Keyboards & pianos</a></Link></li>
                        <li><Link href={{pathname:'/itemPage', query:{type:"drums",page:1}}}><a>Drums</a></Link></li>
                        <li><Link href={{pathname:'/itemPage', query:{type:"violin",page:1}}}><a>Violins</a></Link></li>
                        <li><Link href={{pathname:'/itemPage', query:{type:"Indian Instrument",page:1}}}><a>Indian Instruments</a></Link></li>
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
