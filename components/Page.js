import React, { Component } from 'react';
import styled, {injectGlobal } from 'styled-components';

import Head from "./head";
import Nav from "./Navbar";
import Footer from './Footer';

const Inner = styled.div`
  margin: 0 0;
  padding: 0rem;
`;



const Wrapper = styled.div`
  
  font-family: "Montserrat", sans-serif;
`;

class Page extends Component {
  render() {
    return (
      <Wrapper>
        
          <Head/>
          <Nav/>
          <Inner>{this.props.children}</Inner>

          <Footer/>  

      </Wrapper>
    );
  }
}

export default Page;