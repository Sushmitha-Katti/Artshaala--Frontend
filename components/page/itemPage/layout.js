
import React, { Component } from 'react';
import styled from 'styled-components';
import CardTemp from "./cardtemp";
import Sort from "./sort";
import Items from "./Items"


const Wrapper = styled.nav`
display: grid;
margin: 20px;
justify-items: center;
grid-template-columns: 20% 80%;

@media (max-width:750px){
    display:block;
    align-items: center;
}
`;


class Layout extends Component{

    state={
        category:""
    }

    Category = (a)=>{
        let category_var = this.state.category;
        category_var = a
        this.setState({
            category:category_var
        })
        
    }

    // category = ()=>{
    //     const {}
    // }
    
    render(){
         console.log("hello", this.state.category)
        return(
           
            <Wrapper>
                <Sort  filterpage = {this.props.filterpage} category={this.Category}/>
                <Items category={this.state.category}/>


                {/* <CardTemp/> */}

            </Wrapper>
        );
    }
}


export default Layout;

