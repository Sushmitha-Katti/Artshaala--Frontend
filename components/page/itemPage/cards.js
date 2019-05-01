import React, { Component } from "react";
import Cardstyle from "./cardStyle";
import Link from "next/link";

import {CURRENT_USER_QUERY} from "../../test/User"
import { Query } from "react-apollo";
import DeleteItem from './deleteItem';
import styled from "styled-components";

const Update = styled.div`
.updatebtn{
  text-decoration:none;
  color:black;
  font-family: Arial;
  padding:5px 12px;
  background:#DDDDDD;
  font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-size: 13.3333px;
    line-height: normal;
    margin-left: 10px;
}
`
;







class Cards extends Component {
  render() {
    return (
      <div>
      
      <Link href={{pathname:'/product', query:{id:this.props.Cardcontent.id}}}>




      <Cardstyle>
        <div className="main">
         
          {/* {console.log(this.props.Cardcontent.images[0])} */}
          <div className="sub">
            <img src={this.props.Cardcontent.images[0]} className="pic" />
            <div className="sub">
              <p className="cost">Name:{this.props.Cardcontent.title}</p>
              
              <div className="sub">
                <p className="cost">Price:{this.props.Cardcontent.price}</p>
             
                <div className="sub">
                <p className="cost">Category:{this.props.Cardcontent.category}</p>
                <div className="sub">
                <p className="cost">Type:{this.props.Cardcontent.type}</p>
             
              
              <div className="sub">
                <p className="cost">Brand:{this.props.Cardcontent.brand}</p>
                </div>
              </div>
             
              </div>

              </div>
            </div>
          </div>
         
        </div>
      </Cardstyle>
      </Link>
      <Query query={CURRENT_USER_QUERY}>
      {({ data }) => {
      let { me } = data;
     
      
      return (
        <Update>
        {me && me.permissions.includes("ADMIN") && <div>
       <DeleteItem id={this.props.Cardcontent.id}/> 
       
       <Link href ={{
              pathname: '/update',
              query: { id: this.props.Cardcontent.id },
            }}><a className = "updatebtn">Update</a></Link>
          </div>
          
          
        } 
     
       </Update>
        
      );
      }}

    </Query>
       </div>
    );
  }
}

export default Cards;
