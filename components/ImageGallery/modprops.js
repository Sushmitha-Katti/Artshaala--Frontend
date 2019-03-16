import React, { Component } from 'react';
import ReactSlick from './index';

 class ReactSlick1 extends Component {
    render() {
        return (
   
            <div className="fluid react-slick">
                <div className="fluid__image-container">
                    <ReactSlick {...{
                        rimProps: {
                            isHintEnabled: true,
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