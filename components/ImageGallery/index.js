import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
              
import front_500 from './front-500.jpg'
import front_1426 from './front-1426.jpg';

import back_500 from './back-500.jpg'
import back_1426 from './back-1426.jpg';
// for both slick and magnification
const frontSrcSet = [
    { src: front_500, setting: '500w' },
    { src: front_1426, setting: '1426w' }
]
    .map(item => `${item.src} ${item.setting}`)
    .join(', ');

const backSrcSet = [
    { src: back_500, setting: '500w' },
    { src: back_1426, setting: '1426w' }
]
    .map(item => `${item.src} ${item.setting}`)
    .join(', ');

const dataSource = [
    {
        srcSet: frontSrcSet,
        small: front_500,
        large: front_1426
    },
    {
        srcSet: backSrcSet,
        small: back_500,
        large: back_1426
    }
];

export default class ReactSlick1 extends Component {
    render() {
        const {
            rsProps,
            rimProps
         } = this.props;

        return (
            
            <body>
                
            <ReactSlick
                {...{ 
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  
                  }}
                  {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
           
                        { <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    enlargedImagePosition: 'over',  
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    enlargedImagePosition: 'over',  
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        /> }
                        
                    </div>
                ))}
            </ReactSlick>
            </body>
         
        );
    }
}
