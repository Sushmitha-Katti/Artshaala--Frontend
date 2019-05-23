import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';


export default class ReactSlick2 extends Component {
    render() {
        const {
            rsProps,
            rimProps,
            images
         } = this.props;
       
       const settings ={

     

        customPaging: function(i) {
        return (
        
          <a>
             <img style = {{width:40+"px" ,height : 40+"px", marginRight : 20+"px",paddingRight: 40+"px"}} src = {images[i]}/>
          </a>
      
          
        );
      },
        dotsClass: "slick-dots slick-thumb",
        arrows: true, 
        dots: true,
        infinite: true,
        speed: 500,
        
        slidesToScroll: 1,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 468,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1
              }
            }
          ]
      }
         let imagelist = []   
         let dataSource = []
        images.map(image => imagelist.push([{src: image, settings:'500w'},{src:image,settings:'1426w'}].map(item => `${item.src} ${item.settings}`)
        .join(', ')));
        var i = 0
        imagelist.map((singleimagelist,i) => { let sample={srcSet:singleimagelist,small:images[i],large:images[i]}; i++; return dataSource.push(sample)} )
        
        return (
            
            <body>
           
            
            <Slider
            {...settings}
               
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
                                   // width: 700,
                                   // height: 800,
                                    srcSet: src.srcSet,
                                    enlargedImagePosition: 'over',  
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                               
                                largeImage: {
                                    src: src.large,
                                    width: 700,
                                    enlargedImagePosition: 'over',  
                                    height: 700
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                              
                            }}
                            {...rimProps}
                        /> }
                        
                    </div>
                ))}
            </Slider>
            </body>
         
        );
    }
}

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " style"}
        style={{
          ...style,
          display: "block",
          background: "#827f7f",
  
          borderRadius: "50%",
          padding: "0px",
          padding: "0",
          color: "blue",
          opacity: "0.7"
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
  
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#827f7f",
          borderRadius: "50%",
          padding: "0",
          color: "blue",
          opacity: "0.7"
        }}
        onClick={onClick}
      />
    );
  }
  