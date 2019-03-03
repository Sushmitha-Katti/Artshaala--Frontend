import React, { Component } from 'react';

import Link from 'next/link';
import SortStyle from './SortStyle';

class Sort extends Component{
    render(){
        return(
            <SortStyle>
               
                    {/* <input type="checkbox" id="menu"/>
                    <label for="menu">&#9776;</label> */}
                    <div className="multi-level">
                        <div className="item">
                            <input type="checkbox" id="A"/>
                            <span class="headings">CATEGORY</span>
                            <label htmlFor="A">+</label>
                                <hr />
                            <ul>
                                <li><a href="#"><span className="categories">Electro Acoustic Guitars</span></a></li>
                                <li><a href="#"><span className="categories">Acoustic Guitars</span></a></li>
                            </ul>

                        </div>

                        <div className="item">
                            <input type="checkbox" id="B"/>
                            <span class="headings">BRAND</span>
                            <label htmlFor="B">+</label>
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
                            <label htmlFor="C">+</label>
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
                            <label htmlFor="D">+</label>
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
                


            </SortStyle>
        );
    }
}

export default Sort;







{/* <section id="item1">
                    <h1>Category <a href="#item1">+</a></h1>
                        <a href="#" classNameName="items">Guitar</a>
                        <a href="#" classNameName="items">Guitar</a>
                    </section>
                    */}