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
  display: flex;
  justify-content: center;
  align-items: center;
  margin:3rem 5rem;

    
 
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
  }
  @media only screen and (max-width: 400px) {
    height:50px;
  }

  .back {
    width: 100%;
    height: 100%;
    z-index: 5;
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
  width: 85%;
  height: 150px;
  color: ${props => props.color};
  text-align: center;
  padding: 8rem 3rem;
  background: ${props => props.background};

  @media only screen and (max-width: 768px) {
    height:100px;
  }
  @media only screen and (max-width: 400px) {
    height:50px;
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
  i {
    position: absolute;
    top: 15%;
    right: 50px;
    background: #dcdcdc;
    padding: 0px 9px;
    border-radius: 50%;
  }
`;

/********************************************************************************** */
class NewsLetter extends Component {
  state = {
    email: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={NEWSLETTER_MUTATION}
        variables={this.state}
       
      >
        {(data, { error, loading }) => (
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
              
              this.setState({  email: ""});
              Router.push({
                pathname: "/"
              });
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
            <input
              type="submit"
              className="fa fa-angle-right fa-2x"
              aria-hidden="true"
            />
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
