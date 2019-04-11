import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {Form} from "./signuppage.js"
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import Nprogress from 'nprogress';

/*const Form = styled.form`
  display: flex;
  justify-content: center;

  fieldset {
    border: 4px solid black;
    padding: 50px;
    text-align: center;
    display: grid;
  }

  input {
    width: 400px;
    height: 30px;
    margin: 1rem 4rem;
  }
  button {
    width: 100px;
    height: 40px;
    background: orange;

    .centerbutton {
      display: flex;
      justify-content: center;
    }
  }
`;*/
const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      orders {
        id
      }
    }
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: "", email: "", password: "" });
              Router.push({
                pathname: "/"
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <div className = "centered"><h2>Login</h2></div>
              <div>
                <b style={{ color: "red" }}>
                  {error
                    ? "Oops!! Something went wrong! Enter Correct Email and Password"
                    : ""}
                </b>
              </div>

              <label htmlFor="email">
              <div><b>Email</b></div>
                <input
                  type="email"
                  name="email"
                
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                <div><b>Password</b></div>
                <input
                  type="password"
                  name="password"
                 
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <div className = "forgotpassword">
                
                <Link href="/signup">
                  <a> Forgot Password</a>
                </Link>
              </div>

              <div className = "centered">
              <div className="centerbutton">
                <input type="submit" value = "Sign In!"/>
              </div>
              </div>
              <div className = "signinlink">
                <p>New User ?
                <Link href="/signup">
                  <a> SignUp here</a>
                </Link></p>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
