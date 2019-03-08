import React, { Component } from 'react';
import styled from 'styled-components';
import CardTemp from "./cardtemp";
import Sort from "./sort";


const Wrapper = styled.nav`
display: grid;
margin: 20px;
justify-items: center;
grid-template-columns: 20% 80%;
`;


class Layout extends Component{
    render(){
        return(
            <Wrapper>
                <Sort/>
                <CardTemp/>
            </Wrapper>
        );
    }
}


export default Layout;