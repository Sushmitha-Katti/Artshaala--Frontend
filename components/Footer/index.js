import React,{Component} from 'react';
import Foot from './style'


class Footer extends React.Component {
    render(){
        return(
           <div>
            <Foot>
            <a href = "" className = "social" target = "_blank"><i className="fa fa-instagram fa-lg " aria-hidden="true"></i></a>
            <a href = "https://www.facebook.com/artshaalamusicstore" target = "_blank" className = "social"><i className="fa fa-facebook-square fa-lg " aria-hidden="true"></i></a>
           <a href = "" className = "social" target = "_blank"> <i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
            <p>Artshaala Music Store
            <br/> &copy; 2018  All Rights Reserved <br/></p>
            </Foot>
           </div>
        );
    }
}

export default Footer;