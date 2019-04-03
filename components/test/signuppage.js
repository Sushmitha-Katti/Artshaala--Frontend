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

  fieldset {
    border: 2px solid #a0a0a0;
    padding: 20px 10px;

    display: grid;
    width: 15rem;
    h2 {
      color: orange;
      text-allign: center;
    }
  }
  label {
    margin: auto 1rem;
  }

  input {
    width: 400px;
    height: 30px;
    margin: 1rem 0rem;
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
              <h2>Create Account</h2>

              <label htmlFor="email">
                <b>Email</b>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="name">
                <b>Name</b>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                <b>Password</b>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <div className="centerbutton">
                <button type="submit">Sign Up!</button>
              </div>
              <div>
                Already Have An Account?{" "}
                <Link href="/signin">
                  <a>SignIn</a>
                </Link>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
export { SIGNUP_MUTATION };
