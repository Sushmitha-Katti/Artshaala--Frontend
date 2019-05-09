import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {Form} from "./signuppage.js"
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import Nprogress from 'nprogress';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      address{
        id
      }
     
      permissions
      orders {
        id
      }
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
      
    }
    }
  }
`;



const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String! $password:String!,$confirmPassword:String!) {
    resetPassword(resetToken:$resetToken, password:$password, confirmPassword:$confirmPassword ) {
        id
        email
        name
    }
  }
`;

class Reset extends Component {

    static propTypes = {
        resetToken: PropTypes.string.isRequired,
    }

  state = {
    password: "",
    confirmPassword:""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
            resetToken: this.props.resetToken,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }}
        refetchQueries={[{ CURRENT_USER_QUERY }]}
        >
        {(reset, { error, loading, called }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              
              await reset();
              this.setState({ password: "",confirmPassword:"" });
              // Router.push({
              //   pathname: "/"
              // });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <div className = "centered"><h2>Reset Password</h2></div>
              <div>
                <b style={{ color: "red" }}>
                  {error
                    ? "Oops!! Something went wrong!"
                    : ""}
                </b>
              </div>
            <label htmlFor="password">
              <div><b>Password</b></div>
                <input
                  type="password"
                  name="password"
                
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="confirmPassword">
              <div><b>Confirm Password</b></div>
                <input
                  type="Password"
                  name="confirmPassword"
                
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </label>
              

              <div className = "centered">
              <div className="centerbutton">
                <input type="submit" name = "check" value = "Reset Password"/>
              </div>
              { !error && !loading && called && <p>Success password has been reset</p>}
              </div>
              {/* <div className = "signinlink">
                <p>New User ?
                <Link href="/signup">
                  <a> SignUp here</a>
                </Link></p>
              </div> */}
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Reset;
