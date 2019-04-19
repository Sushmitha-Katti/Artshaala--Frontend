import React, { Component } from 'react';
import FilterMobileStyle from './filterMobileStyle'; 

class Filter extends Component {

    mainpages = e =>{
        e.preventDefault();
        this.props.mainpage();
    }

    categorylist = e =>{
        e.preventDefault();
        this.props.stepTwo();
    }
    brandlist = e =>{
        e.preventDefault();
        this.props.stepThree();
    }
    pricinglist = e =>{
        e.preventDefault();
        this.props.stepFour();
    }
    ratinglist = e =>{
        e.preventDefault();
        this.props.stepFive();
    }
    
    render() {

        const{ values } = this.props;
        return (
        <FilterMobileStyle>
            <div className="main"><button onClick={this.mainpages} className="returnbutton"><i className="fa fa-times"></i></button>
            <span className="filtertext">Filter </span></div>
            
            <div className="sub"><span className="filternames">Category </span>
            <button onClick={this.categorylist} className="filterbuttons"><i className="fa fa-angle-right"></i></button></div>
            
            <div className="sub"><span className="filternames">Brand </span>
            <button onClick={this.brandlist} className="filterbuttons"><i className="fa fa-angle-right"></i></button></div>
            
            <div className="sub"><span className="filternames">Pricing </span>
            <button onClick={this.pricinglist} className="filterbuttons"><i className="fa fa-angle-right"></i></button></div>
            
            <div className="sub"><span className="filternames">Rating </span>
            <button onClick={this.ratinglist} className="filterbuttons"><i className="fa fa-angle-right"></i></button></div>
        </FilterMobileStyle>
        )
  }

}

export default Filter
