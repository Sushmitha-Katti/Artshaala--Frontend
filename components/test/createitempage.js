import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

const Form = styled.form`
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
`;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
  ) {
    createItem(title: $title, description: $description, price: $price) {
      id
    }
  }
`;

class CreateItemPage extends Component {
  state = {
    title: "",
    description: "",
    price: 0
  };
  saveToState = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              //stop submitting form
              e.preventDefault();
              //call the mutation
              const res = await createItem();
              //change the mutation to the single item page
              console.log(res);
              this.setState({ title: "", description: "", price: "" });
              Router.push({
                pathname: "/items"
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Create Item</h2>

              <label htmlFor="title">
                Title
                <input
                  type="text"
                  name="title"
                  placeholder="Name of Instrument"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="description">
                Descriptiom
                <input
                  type="text"
                  name="description"
                  placeholder="descritpin"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <div className="centerbutton">
                <button type="submit">Create Item</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItemPage;
