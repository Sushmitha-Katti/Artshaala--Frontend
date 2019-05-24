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
            <img src={this.props.Cardcontent.images[0]} className="pic" />        
              <p className="cost">Name:{this.props.Cardcontent.title}</p>                        
                <p className="cost">Price:{this.props.Cardcontent.price}</p>               
                <p className="cost">Category:{this.props.Cardcontent.category}</p>               
                <p className="cost">Type:{this.props.Cardcontent.type}</p>
                <p className="cost">Brand:{this.props.Cardcontent.brand}</p> 
                
                
                { <Query
            query={RATING_QUERY}
            variables={{

             id: this.props.Cardcontent.id,

 
            }}
            >
            {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <Loader></Loader>;
        
            if (!data.commentsConnection) return <p>NO rating</p>;
            const review = data.commentsConnection.aggregate.count;   //returns totoal no of reviews
            if(review!=0){
            let ratinglist = []
            data.commentsConnection.edges.map(edge => ratinglist.push(edge['node']['rating']))  //returns list of ratings

            const count = ratinglist.reduce( (tally, rating) => {      //returns the dictionary where key is rating and value is count of rating
                tally[rating] = (tally[rating] || 0) + 1 ;
               
                return tally;
              } , {})
              
              
              
              let average_rating = 0;
              
                for(var key in count) {
                average_rating = average_rating + count[key] * key;    //Returns weighted sum of ratings
              }
              const avgrating = Math.round((average_rating/review)*10)/10    //Average rating with rounding of to 1 decimal place
              
              return (
                <StarRating   
                editing={false}
                renderStarIcon={()=> <i class="fa fa-star fa-1x" aria-hidden="true"></i>}
                starCount={5}
                value={avgrating}/> 
              )
            }
            else return(<span><i class="fa fa-star" aria-hidden="true"></i> Not Rated</span> )
              
            }}</Query>}

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
