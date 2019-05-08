import React, { Component } from 'react';
import FilterMobileStyle from './filterMobileStyle'; 

class Pricing extends Component {

    filterpage = e =>{
        e.preventDefault();
        this.props.stepOne();
    }

    render() {
        return (
            <FilterMobileStyle>
                <div className="brand">
                    <button onClick={this.filterpage} className="icon" ><i class="fa fa-arrow-left"></i></button>
                    <span className="title">Pricing</span>
                </div>
                <ul className="list">
                { [1000,5000,10000,15000,20000].map((f,index,array)=>
              array[index+1]!=null?
              <div className="items">
              <span className="texts">Rs. {array[index].toLocaleString()} to Rs. {array[index+1].toLocaleString()}</span>
                <li>
                  <input type="checkbox" id="checkboxes" name="rs1" value={array[index+1]}  onChange={e => this.props.CheckedPrice(array[index+1])} />
                </li>
                </div>:""
              )}
              </ul>
              
                   
            </FilterMobileStyle>
    )
  }
}

export default Pricing
