import React, { Component } from 'react';
import FilterMobileStyle from './filterMobileStyle'; 

class CategoryList extends Component {

    filterpage = e =>{
        e.preventDefault();
        this.props.stepOne();
    }

    render() {
        return (
            <FilterMobileStyle>
                <div className="category">
                    <button onClick={this.filterpage} className="cbutton"><i class="fa fa-arrow-left"></i></button>
                    <span className="ctext">Category</span>
                </div>
                <ul className="categorylist">
                <li className="categoryitems">Electro Acoustic Guitars</li>
                <li className="categoryitems">Acoustic Guitars</li>
            </ul>  
             </FilterMobileStyle>
    )
  }
}

export default CategoryList
