import React, { Component } from 'react';
import ReactSlick from './index';

 class ReactSlick1 extends Component {
    render() {
        return (
   
            <div className="fluid react-slick">
                <div className="fluid__image-container">
                    <ReactSlick images = {this.props.images} {...{
                        rimProps: {
                          
                            shouldHideHintAfterFirstActivation: false,
                            enlargedImagePosition: "over",
                            isActivatedOnTouch:true
                        }
                    }} />
                </div>
               
            </div>
            
        );
    }
}

export default  ReactSlick1; 