import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../test/User';
import PropTypes from 'prop-types';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 1rem;
  background: none;
  color:red;
  border: 1px solid red;
  margin:1rem;
  padding: 0.5rem 1rem;
  border-radius:5%;
  
  &:hover {
    color: white;
    background:red;
    cursor: pointer;
  }
`;


class RemoveFromCart extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
    };
    // This gets called as soon as we get a response back from the server after a mutation has been performed
    update = (cache, payload) => {
      // 1. first read the cache
      const data = cache.readQuery({ query: CURRENT_USER_QUERY });
      // 2. remove that item from the cart
      const cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
      // 3. write it back to the cache
      cache.writeQuery({ query: CURRENT_USER_QUERY, data });
    };
    render() {
      return (
        <Mutation
          mutation={REMOVE_FROM_CART_MUTATION}
          variables={{ id: this.props.id }}
          update={this.update}
          optimisticResponse={{
            __typename: 'Mutation',
            removeFromCart: {
              __typename: 'CartItem',
              id: this.props.id,
            },
          }}
        >
          {(removeFromCart, { loading, error }) => (
            <BigButton
              disabled={loading}
              onClick={() => {
                removeFromCart().catch(err => alert(err.message));
              }}
              title="Delete Item"
            >
              Delete
            </BigButton>
          )}
        </Mutation>
      );
    }
  }
  
  export default RemoveFromCart;
  export { REMOVE_FROM_CART_MUTATION };