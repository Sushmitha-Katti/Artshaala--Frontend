import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {Form} from "./signuppage.js"
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import Nprogress from 'nprogress';


const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={REQUEST_RESET_MUTATION}
        variables={this.state}
      >
        {(reset, { error, loading, called }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              
              await reset();
              this.setState({ email: "" });
              // Router.push({
              //   pathname: "/"
              // });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <div className = "centered"><h2>Request Password Reset</h2></div>
              <div>
                <b style={{ color: "red" }}>
                  {error
                    ? "Oops!! Something went wrong! Enter Correct Email"
                    : ""}
                </b>
              </div>
              
              { !error && !loading && called && <p>Success Check your email for reset</p>}
              <label htmlFor="email">
              <div><b>Email</b></div>
                <input
                  type="email"
                  name="email"
                
                  value={this.state.email}
                  onChange={this.saveToState}
                  required
                />
              </label>
              

              <div className = "centered">
              <div className="centerbutton">
                <input type="submit" name = "check"value = "Request Reset"/>
              </div>
              </div>
              
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
