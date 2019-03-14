import React, { Component } from 'react';
import ReactSlick from './modprops';
import sc from 'styled-components';


class ImgGal extends Component {
    render() {
        return (
         
        <div> 
            <head>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </head>
            <Body>    
            <ReactSlick />
            </Body>     
         </div>
       
        
        );
    }
}
const Body=sc.body`
display: grid;
grid-template-columns: 400px;
padding-top: 20px;
`;

export default ImgGal;