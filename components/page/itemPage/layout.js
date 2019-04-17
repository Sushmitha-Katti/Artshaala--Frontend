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
        hi:1,
        category:""
    }

    hello = ()=>{
        const {hi1} = this.state;
        this.setState({
            hi:5
        })
    }

    // category = ()=>{
    //     const {}
    // }
    
    render(){
        console.log(this.state.hi)
        return(
           
            <Wrapper>
                <Sort  filterpage = {this.props.filterpage} hello={this.hello} category={this.category}/>
                <Items/>


                {/* <CardTemp/> */}

            </Wrapper>
        );
    }
}


export default Layout;