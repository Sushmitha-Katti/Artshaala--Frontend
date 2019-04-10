import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";

/***************************Styled Components**************************************** */
const Form = styled.form`
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;

  fieldset {
    background:#F8F8F8;

    border: 1px solid #a0a0a0;
    padding: 20px 30px;

    display: grid;
    min-width: 350px;
    height: auto;
    .centered {
      color: orange;
      text-align:center;
    }
  }
  
  input[type=submit] {
    width: 100%;
    background-color: #f7bb2f;
    color: white;
    padding: auto auto;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input:focus, textarea:focus {
    border: 2px solid #f7bb2f;
  }
  
  input[type=submit]:hover {
    background-color:orange ;
  }

  input,textarea {
    
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;

  }
  .typebrandsize{
    display:flex;
    align-content: stretch;
    .compo{
      display:grid;
      margin:0.3rem;
    }
  }

  .signinlink{
    color:black;
    text-align:center;
    a{
      text-decoration:none;
    }
  }
`;

//CURRENT_USER_QUERY
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

/********************SIGNUP MUTATTION******************************************** */
const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
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
            <div className = "centered">
              <h2>Create Account</h2>
            </div>
            <div className = "signinlink">
                <p>Already Have An Account?
                <Link href="/signin">
                  <a> SignIn</a>
                </Link></p>
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
              <label htmlFor="name">
                <div><b>Name</b></div>
                <input
                  type="text"
                  name="name"
                  
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                <div><b>Password</b></div>
                <input
                  type="password"
                  name="password"
                  placeholder="Atleast 6 characters"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <div className = "centered">
                <div className="centerbutton">
                  <input type="submit" value = "Submit"/>
                </div>
              </div>
              <br></br>
             
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
export { SIGNUP_MUTATION };
export {Form};
