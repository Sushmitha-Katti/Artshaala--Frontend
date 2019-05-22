import React, { Component } from 'react';
import FilterMobileStyle from './filterMobileStyle'; 

class Rating extends Component {

    filterpage = e =>{
        e.preventDefault();
        this.props.stepOne();
    }

    render() {
        return (
            <FilterMobileStyle>
                <div className="brand">
                    <button onClick={this.filterpage} className="icon" ><i class="fa fa-arrow-left"></i></button>
                    <span className="title">Ratings</span>
                </div>
                    <ul className="list">
                        {/* <div className="items">
                            <span className="texts">5 Stars</span>
                            <li><input type="checkbox" id="checkboxes" name="stars5"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">4.5 Stars</span>
                            <li><input type="checkbox" id="checkboxes" name="stars4.5"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">4 Stars</span>
                            <li><input type="checkbox" id="checkboxes" name="stars4"/></li>
                        </div>        
                        <div className="items">        
                            <span className="texts">3.5 Stars</span>
                            <li><input type="checkbox" id="checkboxes" name="stars3.5"/></li>
                        </div> 
                        <div className="items">        
                            <span className="texts">3 Stars</span>
                            <li><input type="checkbox" id="checkboxes" name="stars3"/></li>
                        </div> */}


                        { [4,3,2,1].map((f,index,array)=>
              <div className="items">
              <span className="texts">{array[index]} <i class="fa fa-star" aria-hidden="true"></i> & above</span>
                <li>
                  <input type="checkbox" id="checkboxes" name="rs1" value={array[index]}  onChange={e => this.props.CheckedRating(array[index])} />
                </li>
                </div>
              )}
                           
                            </ul>
                       
                
            </FilterMobileStyle>
    )
  }
}

export default Rating
