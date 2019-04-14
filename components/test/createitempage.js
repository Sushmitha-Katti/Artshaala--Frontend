import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";
import {Form} from "./signuppage.js"

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

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: [String]
    $price: Int!
    $type:String!
    $category:String
    $brand:String
    $size:String
    $stock:Int
    
    

  ) {
    createItem(
      title: $title
      specification: $description
      images: $image
      price: $price
      type: $type
      category: $category
      brand:$brand
      size:$size
      stock:$stock
     
    ) {
      id
    }
  }
`;

class CreateItemPage extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    image:[],
    stock:0,
    category:"",
    size:"",
    brand:"",
    type:"",
  };
  // Function is called by all input fields in form except image field
  saveToState = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  // This function is called by image field in the form.
  // This uploads a image to cloudinary website
  uploadFile = async e => {
    // console.log("uploaing file ...");
    const files = e.target.files;
   
    const data = new FormData();
    for (let f of files){
    
      data.append("file", f);
      data.append("upload_preset", "Artshaala");
   
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dr6weeztx/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const file = await res.json();
      
      let filearray = file.secure_url

      this.setState(prevState => ({
        image: [...prevState.image, filearray]
      }))

     
     
    };
    }

   

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
            <div className = "centered">
           
              <h2>Create Item</h2></div>

              <label htmlFor="title">
                <div><b>Title</b></div>
                <input
                  type="text"
                  name="title"
                  placeholder="Name of Instrument"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="file">
                <div><b>Image</b></div>
                <input
                  type="file"
                  name="file"
                  placeholder="Upload an image"
                  
                  required
                  onChange={this.uploadFile}
                  multiple
                />
                {this.state.image && ( this.state.image.map(i =>
                  <img
                    width="100"
                    height="100"
                    src={i}
                    
                  />)
                )}
              </label>

              <label htmlFor="description">
                <div><b>Specification</b></div>
                <textarea id="description" name="description" placeholder="Specification of the item.."
                value={this.state.description}
                onChange={this.saveToState} ></textarea>
                
              </label>
              <div className="typebrandsize">
              <div className= "compo"><b>Category</b>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.saveToState}
                />
                </div>
                <div className="compo"><b>brand</b>
                <input
                  type="text"
                  name="brand"
                  placeholder="brand"
                  value={this.state.brand}
                  onChange={this.saveToState}
                />
                </div>
                <div className="compo"><b>size</b>
                <input
                  type="text"
                  name="size"
                  placeholder="Size"
                  value={this.state.size}
                  onChange={this.saveToState}
                />
                </div>
              </div>

              <div className="typebrandsize">
              <div className="compo"><b>Type</b>
                  <input
                    type="text"
                    name="type"
                    placeholder="type of item"
                    value={this.state.type}
                    onChange={this.saveToState}
                  />
                  </div>
                  <div className="compo"><b>Price</b>
                  <input
                    type="number"
                    name="price"
                    placeholder="price per item"
                    value={this.state.price}
                    onChange={this.saveToState}
                  />
                  </div>
                  <div className="compo"><b>Stock</b>
                  <input
                    type="number"
                    name="stock"
                    placeholder="Number of Item Available"
                    value={this.state.stock}
                    onChange={this.saveToState}
                  />
                  </div>
              </div>
              <div className = "centered">
              <div className="centerbutton">
                <input type="submit" value = "Create Item"/></div>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItemPage;
