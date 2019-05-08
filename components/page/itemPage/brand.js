import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FilterMobileStyle from './filterMobileStyle'; 

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


class Brand extends Component {

    filterpage = e =>{
        e.preventDefault();
        this.props.stepOne();
    }

    render() {
        return (
            <FilterMobileStyle>
                <div className="brand">
                    <button onClick={this.filterpage} className="icon" ><i class="fa fa-arrow-left"></i></button>
                    <span className="title">Brand</span>
                </div>
                    <ul className="list">
                    
                        <Query query={this.props.type ? TYPE_BASED_ITEMS:ITEMS} variables={{type:this.props.type}}>
                  {({ data, error, loading }) => {
                    if(loading) return <p>Loading..</p>
                    if(error) return <p>Error..{error.message}</p>
                    let brandlist = [];
                    data.items.map(brand => brandlist.push(brand.brand));
                    let unique_brand = Array.from(new Set(brandlist));

                    // console.log("brand", unique_brand);
                    return (
                        <div>
                        {unique_brand.map(brand => (
                            <div  className="items">
                          <span className="texts">{brand}</span>
                            <li>
                              <input
                                type="checkbox"
                                id="checkboxes"
                                className="regular-checkbox"
                                name={brand}
                                value={brand}
                                onChange={e => this.props.CheckedBrand(brand)}
                              />
                            </li>
                            </div>
                          
                        ))}
                      </div>
                    );
                  }}
                </Query>
            </ul>
                       
            </FilterMobileStyle>
    )
  }
}

export default Brand
