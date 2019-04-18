import React, { Component } from 'react';
import Filter from './Filter';
import FilterMobileStyle from './filterMobileStyle'; 
import CategoryList from './CategoryList';
import Brand from './brand';
import Pricing from './pricing';
import Rating from './rating';


class FilterMobile extends Component{

    state={
        step:1,
        category:'',
        brand:'',
        pricing:'',
        rating:''
    }
    
    stepOne = () => {
        const { step } = this.state;
        this.setState({
            step:1
        });
    }
    stepTwo = () => {
        const { step } = this.state;
        this.setState({
            // step:step + 1
            step:2
        });
    }
    stepThree = () => {
        const { step } = this.state;
        this.setState({
            // step:step + 1
            step:3
        });
    }
    stepFour = () => {
        const { step } = this.state;
        this.setState({
            // step:step + 1
            step:4
        });
    }
    stepFive = () => {
        const { step } = this.state;
        this.setState({
            // step:step + 1
            step:5
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render(){
        const { step } = this.state;
        const { category,brand,pricing,rating } = this.state;
        const values = { category,brand,pricing,rating };

        switch(step) {
            case 1:
                return (
                    <Filter
                        mainpage ={this.props.mainpage}
                        stepTwo ={this.stepTwo}
                        stepThree ={this.stepThree}
                        stepFour ={this.stepFour}
                        stepFive ={this.stepFive}
                        handleChange = {this.handleChange}
                        values={values}
                        />
                )
            case 2:
                return (
                    <CategoryList
                        stepOne ={this.stepOne}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                )
            case 3:
            return (
                <Brand
                    stepOne ={this.stepOne}
                    handleChange = {this.handleChange}
                    values={values}
                />
            )
            case 4:
            return (
                <Pricing
                    stepOne ={this.stepOne}
                    handleChange = {this.handleChange}
                    values={values}
                />
            )
            case 5:
            return (
                <Rating
                    stepOne ={this.stepOne}
                    handleChange = {this.handleChange}
                    values={values}
                />
            )
        }
        

        return(
            <div>
                
            </div>
        );
    }
}

export default FilterMobile;