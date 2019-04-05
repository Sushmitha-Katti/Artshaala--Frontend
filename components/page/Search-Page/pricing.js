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
                        <div className="items">
                            <span className="texts">Rs. 1000 to Rs. 5000</span>
                            <li><input type="checkbox" id="checkboxes" name="rs1"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Rs. 50000 to Rs. 10,000</span>
                            <li><input type="checkbox" id="checkboxes" name="rs2"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Rs. 10,000 to Rs. 15,000</span>
                            <li><input type="checkbox" id="checkboxes" name="rs3"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Rs. 15,000 to Rs. 20,000</span>
                            <li><input type="checkbox" id="checkboxes" name="rs4"/></li>
                        </div>              
                            </ul>
            </FilterMobileStyle>
    )
  }
}

export default Pricing
