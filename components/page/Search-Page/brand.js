import React, { Component } from 'react';
import FilterMobileStyle from './filterMobileStyle'; 

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
                        <div className="items">
                            <span className="texts">Vault</span>
                            <li><input type="checkbox" id="checkboxes" className="regular-checkbox" name="vault"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Yamaha</span>
                            <li><input type="checkbox" id="checkboxes" name="yamaha"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Fender</span>
                            <li><input type="checkbox" id="checkboxes" name="fender"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">Cort</span>
                            <li><input type="checkbox" id="checkboxes" name="cort"/></li>
                        </div>              
                            </ul>
                       
                <div className="buttons"><button onClick={this.filterpage} className="done" > Done </button></div>
            </FilterMobileStyle>
    )
  }
}

export default Brand
