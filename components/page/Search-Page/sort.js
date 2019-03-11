import React, { Component } from 'react';

import Link from 'next/link';
import SortStyle from './SortStyle';
import FilterMobile from "./filterMobile";

class Sort extends Component{

    filterpages = e =>{
        e.preventDefault();
        this.props.filterpage();
    }

    render(){
        return(
            <SortStyle>
                <div className="center">
                    <button onClick={this.filterpages} className="filterbutton"><i class="fa fa-filter"></i> Filter</button>
                </div>
               <div className="main">
                    <input type="checkbox" id="menu"/>
                    <div className="divlabel"><label for="menu" className="menuLabel"><span /><span /><span /></label></div>
                    <div className="multi-level">
                        <div className="item">
                            <input type="checkbox" id="A"/>
                            <span class="headings">CATEGORY</span>
                            <label htmlFor="A"><i className="fa fa-chevron-down"></i></label>
                                <hr />
                            <ul>
                                <li><a href="#"><span className="categories">Electro Acoustic Guitars</span></a></li>
                                <li><a href="#"><span className="categories">Acoustic Guitars</span></a></li>
                            </ul>

                        </div>

                        <div className="item">
                            <input type="checkbox" id="B"/>
                            <span class="headings">BRAND</span>
                            <label htmlFor="B"><i class="fa fa-chevron-down"></i></label>
                            <hr />
                            <ul>
                                <li><input type="checkbox" id="checkboxes" className="regular-checkbox" name="vault"/></li>
                                <span>Vault</span>
                                <li><input type="checkbox" id="checkboxes" name="yamaha"/></li>
                                <span>Yamaha</span>
                                <li><input type="checkbox" id="checkboxes" name="fender"/></li>
                                <span>Fender</span>
                                <li><input type="checkbox" id="checkboxes" name="cort"/></li>
                                <span>Cort</span>
                            </ul>
                        </div>
                        <div className="item">
                            <input type="checkbox" id="C"/>
                            <span class="headings">PRICE</span>
                            <label htmlFor="C"><i class="fa fa-chevron-down"></i></label>
                            <hr />
                            <ul>
                                <li><input type="checkbox" id="checkboxes" name="rs1"/></li>
                                <span>Rs. 1000 to Rs. 5000</span>
                                <li><input type="checkbox" id="checkboxes" name="rs2"/></li>
                                <span>Rs. 50000 to Rs. 10,000</span>
                                <li><input type="checkbox" id="checkboxes" name="rs3"/></li>
                                <span>Rs. 10,000 to Rs. 15,000</span>
                                <li><input type="checkbox" id="checkboxes" name="rs4"/></li>
                                <span>Rs. 15,000 to Rs. 20,000</span>
                            </ul>
                        </div>
                        <div className="item">
                            <input type="checkbox" id="D"/>
                            <span class="headings">RATINGS</span>
                            <label htmlFor="D"><i class="fa fa-chevron-down"></i></label>
                            <hr />
                            <ul>
                                <li><input type="checkbox" id="checkboxes" name="stars5"/></li>
                                <span>5 Stars</span>
                                <li><input type="checkbox" id="checkboxes" name="stars4.5"/></li>
                                <span>4.5 Stars</span>
                                <li><input type="checkbox" id="checkboxes" name="stars4"/></li>
                                <span>4 stars</span>
                                <li><input type="checkbox" id="checkboxes" name="stars3.5"/></li>
                                <span>3.5 Stars</span>
                                <li><input type="checkbox" id="checkboxes" name="stars3"/></li>
                                <span>3 Stars</span>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </SortStyle>
        );
    }
}

export default Sort;


