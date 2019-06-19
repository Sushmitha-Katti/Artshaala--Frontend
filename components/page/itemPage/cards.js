import React, { Component } from "react";
import Cardstyle,{Loader} from "./cardStyle";
import Link from "next/link";
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from "../../test/User"
import { Query } from "react-apollo";
import DeleteItem from './deleteItem';
import styled from "styled-components";
import StarRating from 'react-star-rating-component';

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


const RATING_QUERY = gql`
  query RATING_QUERY($id: ID!) {
    commentsConnection(where:{item:{id:$id}}){
        edges{
      node{
        rating
        
      }
        }
    aggregate{
      count
    }
  }
      
  }
  
`;




class Cards extends Component {
  render() {
    return (
      <div>
      
      <Link href={{pathname:'/product', query:{id:this.props.Cardcontent.id}}}>




      <Cardstyle>
        <div className="main">
          <div className="sub">
          {this.props.Cardcontent.discount > 0? <div className = "discountpercentage">{this.props.Cardcontent.discount}% OFF</div>: null}
            <img src={this.props.Cardcontent.images[0]} className="pic" /> 
            
            {this.props.Cardcontent.AvgRating > 0 ? <StarRating   
                editing={false}
                renderStarIcon={()=> <i class="fa fa-star fa-1x" aria-hidden="true"></i>}
                starCount={5}
                value={this.props.Cardcontent.AvgRating}/> : <i class="fa fa-star fa-1x" aria-hidden="true">Not Rated</i>
             }       
              <p className="title">{this.props.Cardcontent.title}</p>    
              {this.props.Cardcontent.discount?<div className = "both"><div className = "actual">Rs. {this.props.Cardcontent.price}</div><div className = "discounted">Rs. {this.props.Cardcontent.discountPrice}</div></div>: <div className = "onlyprice">Rs. {this.props.Cardcontent.price}</div>}                    
                {/* <p className="cost">Price:{this.props.Cardcontent.price}</p>               
                <p className="cost">Category:{this.props.Cardcontent.category}</p>               
                <p className="cost">Type:{this.props.Cardcontent.type}</p>
                <p className="cost">Brand:{this.props.Cardcontent.brand}</p>  */}
               
                
                
              
           
            
              
              
               
           
              
          
            {/* <StarRating   
                editing={false}
                renderStarIcon={()=> <i class="fa fa-star fa-1x" aria-hidden="true"></i>}
                starCount={5}
                value={this.props.Cardcontent.AvgRating}/> 
               */}
               
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
