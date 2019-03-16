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
padding-left:30px;
padding-right:30px;

@media (max-width: 1024px){
display: grid;
grid-template-columns: 300px;
padding-left:10px;
padding-right:30px;
}

@media (max-width: 480px){
    display: grid;
    grid-template-columns: 230px;
    padding-left:10px;
    padding-right:30px;
    }

@media (min-width: 320px){
    display: grid;
    grid-template-columns: 240px;
    padding-left:10px;
    padding-right:30px;
    }
}
`;

export default ImgGal;