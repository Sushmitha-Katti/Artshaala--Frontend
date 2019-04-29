
import React, { Component } from "react";

import Link from "next/link";
import SortStyle from "./SortStyle";
import FilterMobile from "./filterMobile";
import Layout from "./layout";

import { Query } from "react-apollo";
import gql from "graphql-tag";

// should include rating
const ITEMS = gql`
  query ITEMS {
    items {
      id
      title
      type
      brand
      price
      category
    }
  }
`;

const TYPE_BASED_ITEMS = gql`
query TYPE_BASED_ITEMS($type: String!) {
  items(where: { type: $type }) {
      id
      title
      type
      brand
      price
      category
  }
}
`;


class Sort extends Component {
  filterpages = e => {
    e.preventDefault();
    this.props.filterpage();
  };


  render() {
    return (

      

      <SortStyle>
        
        {/* for phone view */}


        <div className="center">
          <button onClick={this.filterpages} className="filterbutton">
            <i className="fa fa-filter" /> Filter
          </button>
        </div>

        {/* for pc view */}

        <div className="main">
          <input type="checkbox" id="menu" />
          <div className="divlabel">
            <label htmlFor="menu" className="menuLabel">
              <span />
              <span />
              <span />
            </label>
          </div>
          <div className="multi-level">
            <div className="item">
              <input type="checkbox" id="A" />
              <span className="headings">CATEGORY</span>
              <label htmlFor="A">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
              <ul className="ul-tag">
                <Query 
                query={this.props.type ? TYPE_BASED_ITEMS:ITEMS}
                 variables={{type:this.props.type}}>
                 
                  {({ data, error, loading }) => {
                    if(loading) <p>Loading..</p>
                    if(error) <p>Error..{error.message}</p>
                    let categorylist = [];
                    console.log("Data",data);
                    data.items.map(category =>
                      categorylist.push(category.category)
                    );
                    let unique_category = Array.from(new Set(categorylist));

                    console.log("unique_category",unique_category);
                    return (
                      <li className="li-tag">
                        {unique_category.map(category => (
                          
                          <li className="li-tag">
                            <a
                             href = "#"
                              // href={"/itemPage?category="+category}
                              onClick={() => this.props.category(category)}
                            >
                              <span className="categories">{category}</span>
                            </a>
                          </li>
                        ))}
                      </li>
                    );
                  }}
                </Query>
              </ul>
            </div>

            <div className="item">
              <input type="checkbox" id="B" />
              <span className="headings">BRAND</span>
              <label htmlFor="B">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
              <ul className="ul-tag">
              <Query query={this.props.type ? TYPE_BASED_ITEMS:ITEMS} variables={{type:this.props.type}}>
                  {({ data, error, loading }) => {
                    if(loading) return <p>Loading..</p>
                    if(error) return <p>Error..{error.message}</p>
                    let brandlist = [];
                    data.items.map(brand => brandlist.push(brand.brand));
                    let unique_brand = Array.from(new Set(brandlist));

                    console.log("brand", unique_brand);
                    return (
                      <li className="li-tag">
                        {unique_brand.map(brand => (
                          <span>
                            <li className="li-tag">
                              <input
                                type="checkbox"
                                id="checkboxes"
                                className="regular-checkbox"
                                name={brand}
                                value={brand}
                                onChange={e => this.props.CheckedBox(brand)}
                              />
                            </li>
                            <span>{brand}</span>
                          </span>
                        ))}
                      </li>
                    );
                  }}
                </Query>

                {/* <li className="li-tag"><input type="checkbox" id="checkboxes" className="regular-checkbox" name="vault"/></li>
                                <span>Vault</span>
                                <li className="li-tag"><input type="checkbox" id="checkboxes" name="yamaha"/></li>
                                <span>Yamaha</span>
                                <li className="li-tag"><input type="checkbox" id="checkboxes" name="fender"/></li>
                                <span>Fender</span>
                                <li className="li-tag"><input type="checkbox" id="checkboxes" name="cort"/></li>
                                <span>Cort</span> */}

              </ul>
            </div>
            <div className="item">
              <input type="checkbox" id="C" />
              <span className="headings">PRICE</span>
              <label htmlFor="C">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
              <ul className="ul-tag">
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs1" />
                </li>
                <span>Rs. 1000 to Rs. 5000</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs2" />
                </li>
                <span>Rs. 50000 to Rs. 10,000</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs3" />
                </li>
                <span>Rs. 10,000 to Rs. 15,000</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs4" />
                </li>
                <span>Rs. 15,000 to Rs. 20,000</span>
              </ul>
            </div>
            <div className="item">
              <input type="checkbox" id="D" />
              <span className="headings">RATINGS</span>
              <label htmlFor="D">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
              <ul className="ul-tag">
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="stars5" />
                </li>
                <span>5 Stars</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="stars4.5" />
                </li>
                <span>4.5 Stars</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="stars4" />
                </li>
                <span>4 stars</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="stars3.5" />
                </li>
                <span>3.5 Stars</span>
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="stars3" />
                </li>
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

