import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import AutoCards from "./autocards";
import autoguitar from "./autoguitar.jpg";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";


const NEWSLETTER_MUTATION = gql`
  mutation NEWSLETTER_MUTATION($email: String!) {
    createNewsletter(email: $email) {
      email 
    } 
  }
`;

/****************************************   Styled Components   **************************************** */
const D = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
 
  margin:3rem 4rem;
  place-items:center center;

  @media only screen and (max-width: 768px) {
    grid-template-columns:1fr;
    grid-row-gap:20px;
 
  }  
 
`;
const Slider = styled.div`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 150px;
  color: ${props => props.color};
  text-align: center;
  padding: 8rem 0rem;
  background: ${props => props.background};
  position: relative;
  @media only screen and (max-width: 768px) {
    height:100px;
    width:70%;
    font-size:0.7rem;
    padding:  2rem 1.5rem  9rem 1.5rem;
   

  }
  @media only screen and (max-width: 420px) {
    height:50px;
    font-size:0.5rem;
    padding:  1rem 1.5rem  12rem 1.5rem;

  
  }
  @media only screen and (max-width: 350px) {
    height:50px;
    font-size:0.5rem;
    padding:  1rem 2rem  12rem 2rem;

  
  }


  .back {
    width: 100%;
    height: 100%;
    z-index: 5;
    margin:auto;
    padding: 5rem 0rem;
  }
  .imageoverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;

    background-color: #000000;
  }

  
`;

const Newsletter = styled.div.attrs({})`
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 150px;
  color: ${props => props.color};
  text-align: center;
  padding: 8rem 0rem;
  background: ${props => props.background};

 
  @media only screen and (max-width: 400px) {
    height:50px;
    font-size:0.5rem;
    
    
  }

  form {
    position: relative;
  }
 
  .textinput {
    padding: 0.5rem;
    height: 2rem;
    width: 90%;
    border: none;
  }
  .textinput:focus{
    outline-color:#ffff;
  }
 
  .newsletterbtn {
    position: absolute;
    top: 15%;
    right: 30px;
    border-radius:50%;
    background: #dcdcdc;
    padding: 0px 9px;
    size:2rem;

    border:none;
  color: black;
 
  font-size: 2rem;
  cursor: pointer;
}
.newsletterbtn:focus{
  outline-color:#ffff;
  
}
@media only screen and (max-width: 768px) {
  width: 70%;
   padding: 1rem 1.5rem 5rem 1.5rem;
   font-size:0.9rem;
    .textinput {
    height:100px;
    font-size:0.7rem;
     padding: 0.7rem;
    height: 1rem;
    width: 70%;
    border: none;
    }
  .newsletterbtn {
    position: absolute;
    top: 30%;
    right: 15%;
    border-radius:50%;
    background: #dcdcdc;
    padding: 1px 4px;
    border:none;
    color: black;
    font-size: 0.7rem;
 
  }

  }
  @media only screen and (max-width: 400px) {
    padding: 1rem 1.5rem 10rem 1.5rem;
   font-size:0.7rem;
    .textinput {
    height:100px;
    font-size:0.5rem;
     padding: 0.7rem;
    height: 1rem;
    width: 70%;
    border: none;
    }
  .newsletterbtn {
    position: absolute;
    top: 30%;
    right: 15%;
    border-radius:50%;
    background: #dcdcdc;
    padding: 1px 4px;
    border:none;
    color: black;
    font-size: 0.7rem;
 
  }
  }
  @media only screen and (max-width: 350px) {
    
    padding: 1rem 1.5rem 12rem 1.5rem;
   font-size:0.7rem;
    .textinput {
    height:100px;
    font-size:0.5rem;
     padding: 0.7rem;
    height: 1rem;
    width: 70%;
    border: none;
    }
  .newsletterbtn {
    position: absolute;
    top: 30%;
    right: 15%;
    border-radius:50%;
    background: #dcdcdc;
    padding: 1px 4px;
    border:none;
    color: black;
    font-size: 0.7rem;
 
  }

  }

`;

/********************************************************************************** */
class NewsLetter extends Component {
  state = {
    email: "",
  
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  showalert = () => {
   alert("Thank you for signing to our Newletter")
  }

  render() {
    return (
      <Mutation
        mutation={NEWSLETTER_MUTATION }
        variables={this.state}
       
      >
        {(createNewsletter , { error, loading }) => (
      <D>
        <Newsletter background="#f7bb2f" color="black">
          <h1>Subscribe To Our Newsletter</h1>
          <p>
            loreum loreum loreum loreum loreum loreum loreum loreum loreum
            loreum loreum loreum
          </p>
          
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const res = await createNewsletter();
              
              this.setState({  email: "",success: true});
              this.showalert()
            
              
             
            }}
          >
            <input
              className="textinput"
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={this.state.email}
              onChange={this.saveToState}
              required
            />
            <input type="submit" class="newsletterbtn fa-input" value=">"></input>
           
            
          </form>
        </Newsletter>
        <Slider color="white">
          <img className="back" src={autoguitar} alt="guitar" />
          <div className="imageoverlay" />
          <AutoCards />
        </Slider>
      </D>
       )}
       </Mutation>
    );
  }
}

export default NewsLetter;
