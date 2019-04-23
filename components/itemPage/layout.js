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
<<<<<<< HEAD:components/page/itemPage/layout.js
        hi:1,
        category:""
    }

    hello = ()=>{
        const {hi1} = this.state;
        this.setState({
            hi:5
        })
=======
        category:""
    }

    Category = (a)=>{
        let category_var = this.state.category;
        category_var = a
        this.setState({
            category:category_var
        })
        
>>>>>>> 800878625b24af7a41f0d8d0546a8ecac4b4c40a:components/itemPage/layout.js
    }

    // category = ()=>{
    //     const {}
    // }
    
    render(){
<<<<<<< HEAD:components/page/itemPage/layout.js
        console.log(this.state.hi)
        return(
           
            <Wrapper>
                <Sort  filterpage = {this.props.filterpage} hello={this.hello} category={this.category}/>
                <Items/>
=======
         console.log("hello", this.state.category)
        return(
           
            <Wrapper>
                <Sort  filterpage = {this.props.filterpage} category={this.Category}/>
                <Items category={this.state.category}/>
>>>>>>> 800878625b24af7a41f0d8d0546a8ecac4b4c40a:components/itemPage/layout.js


                {/* <CardTemp/> */}

            </Wrapper>
        );
    }
}


export default Layout;