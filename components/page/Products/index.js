import React,{Component} from 'react';
import Link from "next/link";
import Nav from '../../Navbar';
import {Body,BlueText,Button,Collapsial,UserReviews}  from './style';
import Footer from '../../Footer';
import ImgGal from'../../ImageGallery/exportGal';
import Head from '../../head';
import StarRating from 'react-star-rating-component';
//import Cards from '../../page/Home/couroselCards';
import Cards from './couroselCards';
import ReviewPage from "./reviewpage"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import AddToCart from '../cart/addtocart';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      specification
      price
      category
      brand
      type
      images
      description
      stock      
      comment(first:3){
          comment
          createdAt

          rating
          user{
              name
             
          }
      }
      
    }
  }
  
`;


const COMMENT_CONNECTION_QUERY = gql`
  query COMMENT_CONNECTION_QUERY($id: ID!) {
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



// -----------------------------------------Product Component-----------------------------------


class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {                // For toggling the review Item Component
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
        }
       togglePanel(e){
        this.setState({open: !this.state.open})
        }
   
    render(){
        return(
            <Query                           //Item Query
            query={SINGLE_ITEM_QUERY}
            variables={{

             id: this.props.query.id,

            }}
            >
            {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading...</p>;
            if (!data.item) return <p>No Item Found for {this.props.id}</p>;
            const item = data.item;
            let ratinglist = {}
            console.log(item.comment.length)

            console.log(item.createdAt)
            return (
                
            <div>
             {/* -----------------------------------------Query for Count of Comments--------------------------------------- */}
                                        
           { <Query
            query={COMMENT_CONNECTION_QUERY}
            variables={{
             id: this.props.query.id,
            }}
            >
            {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading...</p>;
        
            if (!data.commentsConnection) return <p>No Comments Found for {this.props.id}</p>;
            const review = data.commentsConnection.aggregate.count;   //returns totoal no of reviews
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
              const avgrating = (average_rating/review)    //Average rating
              
           
            return (
                <Body>
                <div className="main">
                <div className="gallery">
             <ImgGal images={item.images}/>       {/*For Displaying Imaage Gallery  */}
            </div>
            <div className="discription">
            <h3>
                {item.title}
            </h3>
            
             <div className="rev">
             <StarRating   editing={false}
              renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
              starCount={5}
              value={avgrating}/>
             <BlueText>{review} reviews</BlueText>
             </div>
             <br/>
              <Collapsial>                         {/*Goes to reviwPage   should change all static ids to dynamic ids*/}
                <div onClick={(e)=>this.togglePanel(e)} className ='header'>
                <BlueText style = {{margin:0,padding:0 ,cursor:"pointer"}}> Write review</BlueText></div>

                {this.state.open ?(<ReviewPage id={this.props.query.id}/>) : null}

            </Collapsial>
            
           
         
            <br></br>
             
           <span className="mon">Price: </span> <span className="mon-num">{item.price}</span>
            <p>
            Inclusive of all taxes  
            <br/>Pay on Delivery (Cash/Card) eligible
            </p>     {/****************** EMI Should be dynamic**************/}
            {this.state.image && ( this.state.image.map(i =>
                  <img
                    width="100"
                    height="100"
                    src={i}
                    
                  />)
                )}

              <h3 style = {{color :"orange"}}>{item.stock ? "In Stock":"Out Of Stock" }</h3>
              {item.stock? <AddToCart id = {this.props.query.id}/>:null}
             {/***** Button Should be linked******************* */}
             <h4 style = {{color: "orange"}}>Hurry Up only {item.stock} items left!</h4>
             {/* <h3>Description</h3><p>{  item.description}</p> */}

            </div>
            </div>
            <div className="specs">
            <div>
                <h2 className = "headspecs ">
                Specifications
                </h2>
              
                <ul className = "eachspecs">
                    {item.specification.split("|").map(item => <p>{item}</p>)}
                </ul>
            </div>
            <div>
            <div>
            <h2 className = "headspecs" style = {{paddingLeft: 0+"px"}} >Description</h2><p className = "specsdesc" style = {{paddingRight:2+"rem"}}>{  item.description}</p>
            </div>
            </div>
           
            </div>


            <section className="rating">

            <div className="rt"> {/*************StarRating shoould be made dynamic***************************** */}
            <StarRating   editing={false} 

            renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={avgrating}/>
            </div>
            <div className ="rr">
            <BlueText >{review} reviews</BlueText>
            </div>
            <div className="rating-box">
            <div className="star">
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={5}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={4}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={3}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={2}/>
            <StarRating   editing={false}
            // renderStarIcon={()=> <i class="fa fa-star fa-2x" aria-hidden="true"></i>}
            starCount={5}
            value={1}/>
            </div>
            <div className="rating-window">
            <StarRating   editing={false}
            renderStarIcon={()=><i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={(count[5]/review)*5}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={(count[4]/review)*5}/>
            <StarRating   editing={false}
            renderStarIcon={()=><i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={(count[3]/review)*5}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={(count[2]/review)*5}/>
            <StarRating   editing={false}
            renderStarIcon={()=> <i class="fa fa-window-minimize fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={(count[1]/review)*5}/>
            </div>
            
            </div>
            </section>
           
       
            {/* -----------------------------------------------Reviews Section------------------------------------------- */}
           
           {item.comment ? <h3 style = {{paddingLeft:  60+"px" }}>Comments</h3>:null}
           
            {item.comment.map(comment =>

            <section style = {{marginTop: 1+"rem",marginLeft: 4+"rem",marginRight: 4+"rem",paddingTop:5+"px",borderRadius: 1+"%" , paddingLeft:  20+"px" ,paddingBotton:5+"px", border:1+"px solid grey" }} className="comment">
            <h1 className="head"><b>{comment.user.name}</b></h1>
            
            <div>
            <StarRating   
            editing={false}
            renderStarIcon={()=> <i class="fa fa-star fa-1x" aria-hidden="true"></i>}
            starCount={5}
            value={comment.rating}/> {comment.createdAt.split("T")[0]} 
             </div>
             
           
             <p className="content">{comment.comment}</p>
            
            </section>      
            )}
        {/*----------------------------------Related Products Section------------------------------------ */}    
           <div>
                <h1 className="rp" style = {{textAlign:"center"}}>RELATED PRODUCTS</h1>
                <Cards id={this.props.query.id}
                       category={item.category}
                       type={item.type}
                       brand={item.brand}
                        />
            </div>
       </Body>


             ) }}
            
         
        </Query>}
       </div>
            )
            }}
        </Query>
        )
        }
        }

        

export default Products;



