import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import {Form} from '../../test/signuppage';




const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
     
      stock
      category
      size
      brand
      type
      specification
    }
  }
`;
const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION($id: ID!,
    $title: String,
    $description: String,
   
    $price: Int,
    $type:String,
    $category:String,
    $brand:String,
    $size:String,
    $stock:Int,
    $specification: String) {
    updateItem(
      id: $id
      title: $title
      specification: $specification
    
      price: $price
      type: $type
      category: $category
      brand:$brand
      size:$size
      stock:$stock
      description:$description
     ) {
      id
      title
      description
      price
      specification
      type
      category
      brand
      size
      stock
  
    }
  }
`;

class UpdateItem extends Component {
  state = {
    
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    console.log('Updating Item!!');
    console.log(this.state);
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    console.log('Updated!!');
  };

  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                
                  <fieldset disabled={loading} aria-busy={loading}>
                  <div className = "centered">
           
                    <h2>Update Item</h2></div>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.item.title}
                        onChange={this.handleChange}
                      />
                    </label>

                   

                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter A Description"
                        required
                        defaultValue={data.item.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="specification">
                <div><b>Specification</b></div>
                <textarea id="specification" name="specification" placeholder="Specification of the item.."
                defaultValue={data.item.specification}
                onChange={this.handleChange}
                required ></textarea>
                
              </label>
              <div className="typebrandsize">
              <div className= "compo"><b>Category</b>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  defaultValue={data.item.category}
                  onChange={this.handleChange}
                  required
                />
                </div>
                <div className="compo"><b>brand</b>
                <input
                  type="text"
                  name="brand"
                  placeholder="brand"
                  defaultValue={data.item.brand}
                        onChange={this.handleChange}
                  required
                />
                </div>
                <div className="compo"><b>size</b>
                <input
                  type="text"
                  name="size"
                  placeholder="Size"
                  defaultValue={data.item.size}
                  onChange={this.handleChange}
                  required
                />
                </div>
              </div>

              <div className="typebrandsize">
              <div className="compo"><b>Type</b>
                  <input
                    type="text"
                    name="type"
                    placeholder="type of item"
                    defaultValue={data.item.type}
                        onChange={this.handleChange}
                    required
                  />
                  </div>
                  <div className="compo"><b>Price</b>
                  <input
                    type="number"
                    name="price"
                    placeholder="price per item"
                    defaultValue={data.item.price}
                    onChange={this.handleChange}
                    required
                  />
                  </div>
                  <div className="compo"><b>Stock</b>
                  <input
                    type="number"
                    name="stock"
                    placeholder="Number of Item Available"
                    defaultValue={data.item.stock}
                        onChange={this.handleChange}
                    required
                  />
                  </div>
              </div>
              <div className = "centered">
              <div className="centerbutton">
                <input type="submit" value = "Save Changes"/></div>
              </div>
                  
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };