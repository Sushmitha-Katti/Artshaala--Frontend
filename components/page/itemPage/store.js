import React, { Component } from 'react';
import Link from 'next/link';
import Styled from 'styled-components';

import guitarIcon from '../../images/guitarIcon3.png';
import pianoIcon from '../../images/pianoIcon1.png';
import drumsIcon from '../../images/drumsIcon2.png';
import ukuleleIcon from '../../images/ukuleleIcon2.png';

const StoreStyling = Styled.div`

.h1{
    text-align:center;
    margin-top:50px;
    font-size:50px;
}

.line{
    padding:5px;
    background:#d9d9d9;
    margin:0 200px;
    border-radius:25px;
}
@media(max-width:1074px){
        
        .line{
            margin:0 150px; 
        }
    }

@media(max-width:900px){
       
        .line{
            margin:0 70px; 
        }
    }
    @media(max-width:350px){
       
       .line{
           margin:0 10px; 
       }
   }

`;

const StoreStyle = Styled.div`
    display:grid;
    margin: 50px 200px;
  justify-items: center;
  grid-template-columns: auto auto auto auto;
    grid-column-gap:20px;

    .Img1,.Img2,.Img3,.Img4{
        width:150px;
        border-radius:50%;
        /* cursor:pointer; */
    }
    h2{
        text-align:center;
    }
    span{
        cursor:pointer;
    }
    @media(max-width:1074px){
        margin:50px 150px;
    }
    @media(max-width:900px){
        margin:50px 70px;
        .Img1,.Img2,.Img3,.Img4{
        width:100px;
        border-radius:50%;
    }}
    @media(max-width:600px){
        grid-template-columns:auto auto;
    }
    @media(max-width:350px){
        grid-template-columns:auto;
        margin:50px 10px;
    }

`;


class Store extends Component {
    render(){
        return(
            <StoreStyling>
                <h1 className="h1">Store</h1>
                <div className="line"></div>
            <StoreStyle>
            <Link href={{pathname:'/itemPage', query:{page:1,category:"guitar"}}}><span><a><img className="Img1" src={guitarIcon} alt="guitar"/></a><br /><h2>Guitar</h2></span></Link>
            <Link href={{pathname:'/itemPage', query:{page:1,category:"keyboards"}}}><span><a><img className="Img2" src={pianoIcon} alt="keyboard"/></a><br /><h2>Keyboard</h2></span></Link>
            <Link href={{pathname:'/itemPage', query:{page:1,category:"drums"}}}><span><a><img className="Img3" src={drumsIcon} alt="drums"/></a><br /><h2>Drums</h2></span></Link>
            <Link href={{pathname:'/itemPage', query:{page:1,category:"ukulele"}}}><span><a><img className="Img4" src={ukuleleIcon} alt="ukulele"/></a><br /><h2>Ukulele</h2></span></Link>
             
            </StoreStyle>
            </StoreStyling>
        )
    }
}

export default Store;