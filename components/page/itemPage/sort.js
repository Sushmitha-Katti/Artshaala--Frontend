
import React, { Component } from "react";

import Link from "next/link";
import SortStyle from "./SortStyle";
import FilterMobile from "./filterMobile";
import Layout from "./layout";
import {Loader} from "./cardStyle";
import { Query } from "react-apollo";
import gql from "graphql-tag";

// should include rating
const SORT_QUERY = gql`
  query SORT_QUERY {
    items {
      id
      title
      type
      brand
      price
      category
      AvgRating
    }
  }
`;

const CATEGORY_BASED_SORT = gql`
query CATEGORY_BASED_SORT($categoryState: String!) {
  items(where: { category: $categoryState }) {
      id
      title
      type
      brand
      price
      category
      AvgRating
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
        {/* {this.props.type =='all'?"":  */}

      <div>
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
                query={SORT_QUERY}
                //  variables={{type:this.props.type}}
                >
                 
                  {({ data, error, loading }) => {
                    if(loading) return <Loader></Loader>
                    if(error) <p>Error..{error.message}</p>
                    let categorylist = [];
                    // console.log("Data",data);
                    data.items.map(category =>
                      categorylist.push(category.category)
                    );
                    let unique_category = Array.from(new Set(categorylist));

                    // console.log("unique_category",unique_category);
                    return (
                      <li className="li-tag">
                        {unique_category.map(category => (
                          
                          <li className="li-tag">
                            
                            <Link href={{pathname:"/itemPage" ,query:{page:1, category:category}}}><a
                              // href={"/itemPage?category="+category}
                              onClick={() => this.props.category(category)}
                            >
                              <span className="categories">{category}</span>
                            </a></Link>
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
              <Query query={this.props.categoryState ? CATEGORY_BASED_SORT:SORT_QUERY} variables={{categoryState:this.props.categoryState}}>
                  {({ data, error, loading }) => {
                    if(loading) return  <Loader></Loader>
                    if(error) return <p>Error..{error.message}</p>
                    let brandlist = [];
                    data.items.map(brand => brandlist.push(brand.brand));
                    let unique_brand = Array.from(new Set(brandlist));

                    // console.log("brand", unique_brand);
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
                                onChange={e => this.props.CheckedBrand(brand)}
                              />
                            </li>
                            <span>{brand}</span>
                          </span>
                        ))}
                      </li>
                    );
                  }}
                </Query>

          
              </ul>
            </div>
            <div className="item">
              <input type="checkbox" id="C" />
              <span className="headings">PRICE</span>
              <label htmlFor="C">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
             { [1000,5000,10000,15000,20000].map((f,index,array)=>
              array[index+1]!=null?
              <ul className="ul-tag">
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs1" value={array[index+1]}  onChange={e => this.props.CheckedPrice(array[index])} />
                </li>
                <span>Rs. {array[index].toLocaleString()} to Rs. {array[index+1].toLocaleString()}</span></ul>:""
              )}
              
            </div>
            <div className="item">
              <input type="checkbox" id="D" />
              <span className="headings">RATINGS</span>
              <label htmlFor="D">
                <i className="fa fa-chevron-down" />
              </label>
              <hr />
              { [4,3,2,1].map((f,index,array)=>
              <ul className="ul-tag">
                <li className="li-tag">
                  <input type="checkbox" id="checkboxes" name="rs1" value={array[index]}  onChange={e => this.props.CheckedRating(array[index])} />
                </li>
                <span>{array[index]} <i class="fa fa-star" aria-hidden="true"></i> & above</span></ul>
              )}
             
            </div>
          </div>
        </div>
            </div> 
      
      </SortStyle>
                              
                            
    );
  }
}

export default Sort;

