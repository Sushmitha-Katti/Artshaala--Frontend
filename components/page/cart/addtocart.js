import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../test/User';
import styled from 'styled-components';
const Button = styled.button`

    background:#F7bb2f;
    padding: 10px 25px ;
    cursor: pointer;
    border:none;
    color: white;
    .add{
        margin:0;
    }
`;


const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading , error}) => {
          if (error) {
      
              alert(error.message.split(":")[1])
            
          }
          return(
          <Button disabled={loading} onClick={addToCart}>
            <h3 className = "add">Add{loading && 'ing'} To Cart </h3>
          </Button>
        )}}
      </Mutation>
    );
  }
}
export default AddToCart;
export { ADD_TO_CART_MUTATION };