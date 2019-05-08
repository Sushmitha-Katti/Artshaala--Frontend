import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
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

class CategoryList extends Component {

    filterpage = e =>{
        e.preventDefault();
        this.props.stepOne();
    };

  render() {
        console.log("filter category",this.props.type)
        return (
            <FilterMobileStyle>
                <div className="category">
                    <button onClick={this.filterpage} className="cbutton"><i class="fa fa-arrow-left"></i></button>
                    <span className="ctext">Category</span>
                </div>
                <ul className="categorylist">
            <Query 
                query={this.props.type ? TYPE_BASED_ITEMS:ITEMS}
                 variables={{type:this.props.type}}>
                 
                  {({ data, error, loading }) => {
                    if(loading) <p>Loading..</p>
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
                          
                          <li className="categoryitems">
                            <a className="categorylinks"
                             href = "#"
                              // href={"/itemPage?category="+category}
                              onClick={() => this.props.category(category)}
                            >
                              {category}
                            </a>
                          </li>
                        ))}
                      </li>
                    );
                  }}
                </Query>
                </ul>  
               
                {/* <div className="category">
                    <button onClick={this.filterpage} className="cbutton"><i class="fa fa-arrow-left"></i></button>
                    <span className="ctext">Category</span>
                </div> */}
                {/* <ul className="categorylist"> */}
                {/* <li className="categoryitems">Electro Acoustic Guitars</li>
                <li className="categoryitems">Acoustic Guitars</li> */}
           
             </FilterMobileStyle>
    )
  }
}

export default CategoryList
